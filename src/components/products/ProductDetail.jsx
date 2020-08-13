import React, {useState, useEffect} from 'react';
import {getProduct} from '../../services/apiService';

function ProductDetail( props ){
    
    const [product, setProduct] = useState(false);
    const productName = props.location.state.name;        
    
    useEffect(() => {
        (async () => {
            const gettedProducts = await getProduct(productName);
            setProduct(gettedProducts);
        })()
      }, [productName]);
    
    return(
        <div className ="container">
            { product ? (
                <div class="container-product-detail">
                <div class="left-column">
                    <img src={`/products/${product.image}`} alt=""/>
                </div>
                <div class="right-column">
                    <div class="product-detail-description">
                        <span>Cuidado capilar</span>
                        <h1>{product.description}</h1>
                        <p>{product.detail}</p>
                    </div>
                    <div class="product-detail-price">
                        <span>${product.price}</span>
                        <button class="cart-btn">Agregar al carrito</button>
                    </div>
                </div>
            </div>
        ):(
            <img src="/Rolling-1s-200px.gif" className="loading" alt="loading"/>
        )}
        </div>
    )
    
}

export default ProductDetail;