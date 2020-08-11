import React from 'react';

function ProductDetail( props ){
    const product = props.location.state;
    console.log(product.image)
    return(
        <div class="container-product-detail">
            <div class="left-column">
                <img data-image="black" src={`/products/${product.image}`} alt=""/>
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
    )
}

export default ProductDetail;