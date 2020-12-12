import React, {useState, useEffect, useContext} from 'react';
import {useRouter} from 'next/router'
import {getProduct} from '../../../services/apiService';
import {CartContext} from '../../../services/cartContext';
import MercadoPagoButton from '../../../components/products/MercadoPagoButton'
import { setMercadoPagoPreferences } from '../../../services/mercadoPago';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default () => {
    const router = useRouter()
    const [product, setProduct] = useState(false);
    const [quantity, setQuantity] = useState(1);
    const {cartProvider} = useContext(CartContext); 
    const [cart, setCart] = cartProvider;
    const [shipment, setShipment] = useState('');
    const [missingShipment, showShipmentMissing] = useState(false);

    const addToCart = () => {
        const currProduct = {
            description: product.description,
            price: product.price,
            quantity: quantity,
            image: product.image,
            id: product.id,
            shipment: shipment,
            stock: product.stock,
            name: product.name,
            cost: product.cost
        }
        setCart(curr => [...curr, currProduct]);
    }

    const handleShipment = (e) => {
        setShipment(e.target.value);
        setMercadoPagoPreferences(product.price, product.description, product.quantity, shipment);
    }

    const handleQuantity = (e) => {
        setQuantity(e.target.value);
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
            if(router){
                const gettedProduct = await getProduct(router.query.name);
                if(gettedProduct){
                    gettedProduct.quantity = 1;
                }
                setProduct(gettedProduct);
            }
        })()
      }, [router.query.name]);
    
    return(
        <div class="container">
        { product ? (
            <div class="card">
            <div class="row">
                <aside class="col-sm-6" >
                    <article class="gallery-wrap"> 
                    <div class="img-big-wrap">
                        <div>
                            <LazyLoadImage 
                            alt={product.name} 
                            src={product.image}
                            effect="blur"
                            />
                        </div>
                    </div>  
                    </article> 
                </aside>
                <aside class="col-sm-6">
                    <article class="card-body p-5">
                        <h3 class="title mb-3">{product.description}</h3>
                    
                    <p class="price-detail-wrap"> 
                        <span class="price h3 text-warning"> 
                            <span class="currency">$</span><span class="num">{product.price}</span>
                        </span> 
                    </p> 
                    <dl class="item-property">
                    <dt>Descripción</dt>
                    <dd><p>{product.detail}</p></dd>
                    </dl>
                    
                    <hr></hr>
                    { product.stock < 1 ? (
                            <em>Sin Stock</em>
                        ) : (
                            <div>
                                <div class="item-property">
                                    <label className="px-4">Cantidad: </label>
                                    <input type="number" onChange={handleQuantity}/>
                                    { product.stock < quantity && (
                                        <p class="text-danger">Solo tenemos {product.stock} disponibles!</p>
                                    )}
                                </div>
                                <div class="form-check" onChange={handleShipment}>
                                    <input class="form-check-input" type="radio" name="shipment" id="shipment" value="shipment"/>
                                    <label class="form-check-label" for="shipment">
                                        Envío (costo a acordar, mínimo $150)
                                    </label>
                                    <br></br>
                                    <input class="form-check-input" type="radio" name="shipment" id="retirement" value="retirement"/>
                                    <label class="form-check-label" for="retirement">
                                        Retiro (sin cargo por Saenz Peña)
                                    </label>
                                </div>
                                { missingShipment && (
                                    <p class="text-danger">Seleccionar un metodo de envio</p>
                                )}
                                <hr></hr>
                                
                                <br></br>
                                <button onClick = {() => {addToCart(product)}} class="btn btn-lg btn-outline-primary text-uppercase mb-4"> <i class="fas fa-shopping-cart"></i> Añadir al carrito </button>
                                <hr></hr>
                                <h5 class="title">Comprar con:</h5>
                                <div className="buy-div">
                                    <MercadoPagoButton 
                                        name={product.description} 
                                        shipment={product.shipment} 
                                        quantity="1"
                                        price={product.price * product.quantity}
                                        onClick={handleMercadoPagoClick}
                                    />
                                    <button onClick = {() => handleCheckout(product)} class="btn btn-sm btn-success float" style={{fontSize: "1.2em", width: "7em",
                                        marginTop: "0.8em", height: "2.7em", marginBottom:'2em'}}>Efectivo</button>
                                </div>
                            </div>
                        )
                    
                    }
                    
                    </article>
                </aside> 
            </div> 
        </div>
        ) : (
            <img src="/Rolling-1s-200px.gif" className="loading" alt="loading"/>
        )}        
        </div>
    )
}
