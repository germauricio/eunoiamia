import React, {useState, useEffect, useContext} from 'react';
import {getProduct} from '../../services/apiService';
import {CartContext} from '../../services/cartContext';
import {MercadoPagoButton} from './MercadoPagoButton.jsx';

function ProductDetail( props ){
    
    const [product, setProduct] = useState(false);
    const productName = props.location.state.name;        
    const {cartProvider} = useContext(CartContext); 
    const [cart, setCart] = cartProvider;

    const addToCart = () => {
        const currProduct = {
            description: product.description,
            price: product.price,
            quantity: 1,
            image: product.image,
            id: product.id
        }
        setCart(curr => [...curr, currProduct]);
    }

    useEffect(() => {
        (async () => {
            const gettedProducts = await getProduct(productName);
            setProduct(gettedProducts);
        })()
      }, [productName]);
    
    return(
        <div class="container">
    <div class="card">
        <div class="row">
            <aside class="col-sm-5 border-right" >
    <article class="gallery-wrap"> 
    <div class="img-big-wrap">
      <div><img alt={`${product.name}`} src={`/products/${product.image}`}/></div>
    </div> 
    <div class="img-small-wrap">
      <div class="item-gallery"> <img alt="alt1" src="https://s9.postimg.org/tupxkvfj3/image.jpg"/> </div>
      <div class="item-gallery"> <img alt="alt2" src="https://s9.postimg.org/tupxkvfj3/image.jpg"/> </div>
      <div class="item-gallery"> <img alt="alt3" src="https://s9.postimg.org/tupxkvfj3/image.jpg"/> </div>
      <div class="item-gallery"> <img alt="alt4" src="https://s9.postimg.org/tupxkvfj3/image.jpg"/> </div>
    </div> 
    </article> 
            </aside>
            <aside class="col-sm-7">
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
                <div class="item-property">
                  <label className="px-4">Cantidad: </label>
                      <select  width="20px">
                          <option> 1 </option>
                          <option> 2 </option>
                          <option> 3 </option>
                      </select>
                </div>  
        <hr></hr>
        <MercadoPagoButton />
        <button onClick = {() => {addToCart(product)}} class="btn btn-lg btn-outline-primary text-uppercase"> <i class="fas fa-shopping-cart"></i> Añadir al carrito </button>
    </article>
            </aside> 
        </div> 
    </div> 
    
    
    </div>
    )
    
}

export default ProductDetail;