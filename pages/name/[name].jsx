import React, {useState, useEffect, useContext} from 'react';
import {useRouter} from 'next/router'
import {getProduct} from '../../services/apiService';
import {CartContext} from '../../services/cartContext';
import MercadoPagoButton from '../../components/products/MercadoPagoButton'
import { setMercadoPagoPreferences } from '../../services/mercadoPago';
import Carousel from 'react-bootstrap/Carousel';
import BreadCrumb from '../../components/BreadCrumb';

export default () => {
    const router = useRouter()
    const [product, setProduct] = useState(false);
    const [quantity, setQuantity] = useState(1);
    const {cartProvider} = useContext(CartContext); 
    const [cart, setCart] = cartProvider;
    const [shipment, setShipment] = useState('');
    const [missingShipment, showShipmentMissing] = useState(false);
    const [outOfStock, setOutOfStock] = useState(false);
    const [images, setImages] = useState(false);
    const [showNoStock, setShowNoStock] = useState(false);

    var inCart = cart.find(item => item.id == product.id);
    var quantityInCart = inCart ? inCart.quantity : 0;

    const addToCart = () => {
        const cartProduct = cart.find(item => item.id == product.id);
        if(cartProduct && cartProduct.quantity + quantity > cartProduct.stock) {
            setOutOfStock(true);
        }
        else {
            if(cartProduct){
                cartProduct.quantity += 1;
                setCart(cart.filter((item) => item.id !== product.id ));
                setCart(curr => [...curr, cartProduct]);
            }
            else {
                const currProduct = {
                    description: product.description,
                    price: product.price,
                    quantity: quantity,
                    image: product.image,
                    id: product.id,
                    stock: product.stock,
                    name: product.name,
                    cost: product.cost
                }
                setCart(curr => [...curr, currProduct]);
            }
        }
    }
    
    const handleShipment = (e) => {
        setShipment(e.target.value);
        showShipmentMissing(false);
        setMercadoPagoPreferences(product.price, product.description, product.quantity, shipment);
    }

    const handleCheckout = (product) => {
        
        if(!shipment){
            showShipmentMissing(true);
        }
        else{
            addToCart(product);
            router.push('/checkout');
        }
    }

    const handleMercadoPagoClick = () => {
        if(!shipment){
            showShipmentMissing(true);
        }
    }

    useEffect(() => {
        (async () => {
            if(router.query.name){
                const gettedProduct = await getProduct(router.query.name);
                if(gettedProduct){
                    gettedProduct.quantity = 1;
                    let imagesArray = [];
                    
                    for (let i = 0; i < gettedProduct.imagesquantity; i++) {
                        imagesArray.push(
                            <Carousel.Item>
                                <div className="image-slider">
                                    <div class="hover01 column">
                                        <div>
                                            <figure>
                                                <img 
                                                className="w-100 h-100"
                                                src={`${gettedProduct.image}-${i+1}.jpeg`}
                                                />
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                            </Carousel.Item>
                        )
                    }
                    setImages(imagesArray);
                }
                setProduct(gettedProduct);
            }
        })()
      }, [router.query.name]);
    
    return(
    <div>
        {product && (
            <BreadCrumb category={product.category} />
        )}
        <div className="container">
        { product ? (
            <div className="card">
            <div className="row">
                <aside class="col-sm-6" >
                    <article className="gallery-wrap"> 
                    <div className="img-big-wrap">
                    <div className="carousel-container-product">
                        <Carousel interval={15000}>
                            {images && (
                                images
                            )}
                        </Carousel>
                        </div>
                    </div>
                    
                    </article> 
                </aside>
                <aside class="col-sm-6">
                    <article class="card-body p-5">
                        <h3 class="product-name-detail title mb-3">{product.description}</h3>
                        
                    <p class="price-detail-wrap"> 
                        <span class="price h3 text-warning"> 
                            <span class="currency">$</span><span class="num">{product.price}</span>
                        </span> 
                    </p> 
                    
                    <hr></hr>
                    { product.stock < 1 ? (
                            <em>Sin Stock</em>
                        ) : (
                            <div>
                                <div class="item-property">
                                    <label className="px-4">Cantidad: </label>
                                    <div className="container">
                                        <div className="input-number">
                                            <button type="button" onClick={() => {
                                                setShowNoStock(false);
                                                if(quantity-1 > 0){
                                                    setQuantity(quantity-1)}
                                                }
                                            }>&minus;</button>
                                            <span>{quantity}</span>
                                            <button type="button" onClick={() => {
                                                if(quantity+1 <= product.stock){
                                                    setQuantity(quantity+1)
                                                } else {
                                                    setShowNoStock(true);
                                                }
                                            }
                                            }>&#43;</button>     
                                        </div>
                                    </div>
                                    { showNoStock && (
                                        <p class="text-danger">Solo tenemos {product.stock} disponibles!</p>
                                    )}
                                </div>
                                <button onClick = {() => {addToCart(product)}} class="btn btn-lg btn-outline-primary text-uppercase mb-4"> 
                                    <i class="fas fa-shopping-cart"></i>
                                    Añadir al carrito 
                                </button>

                                <hr></hr>
                                
                                <div className="pt-3">
                                    <div className="inputGroup" onChange={handleShipment}>
                                        <input type="radio" name="shipment" id="shipment" value="shipment"/>
                                        <label for="shipment">
                                            Envío (mínimo $150)
                                        </label>
                                    </div>
                                    <div className="inputGroup" onChange={handleShipment}>
                                        <input type="radio" name="shipment" id="retirement" value="retirement"/>
                                        <label for="retirement">
                                            Retiro (sin cargo por Saenz Peña)
                                        </label>
                                    </div>
                                </div>
                                { missingShipment && (
                                    <p class="text-danger">Seleccionar un metodo de envio</p>
                                )}

                                <div className="pt-3">
                                    <blockquote><strong>Aclaracion: Si se selecciona con "Envío" el costo dependera de la zona y será a acordar con el vendedor </strong></blockquote>
                                </div>
                                <hr></hr>
                                <h5 class="title">Comprar con:</h5>
                                <div className="container">
                                    <div>
                                    <MercadoPagoButton 
                                        name={product.description} 
                                        shipment={product.shipment} 
                                        quantity="1"
                                        price={product.price * product.quantity}
                                        onClick={handleMercadoPagoClick}
                                    />
                                    </div>
                                    
                                    <button 
                                    onClick = {() => handleCheckout(product)} 
                                    className="btn btn-sm btn-success position-static" 
                                    style={{fontSize: "1.2em", width: "7em", marginTop: "1.2em", height: "2.7em"}}>    
                                        Efectivo
                                    </button>
                                </div>
                            </div>
                        )
                    }
                    </article>
                </aside> 
            </div>
            <hr></hr>
            <div className ="row ml-2 mr-2">
                    <dl class="item-property m-3">
                    <dt >Descripción</dt>
                    <dd className="new-line">{product.detail}</dd>
                    <div className="py-3">
                        <img src="/ecoFriendly.png" height="100px"></img>
                    </div>
                    </dl>
                </div>
            </div>
        ) : (
            <div style={{minHeight: '65vh'}}>
                <img src="/Rolling-1s-200px.gif" className="loading" alt="loading"/>
            </div>
        )}        
        </div>
        </div>
    )
}
