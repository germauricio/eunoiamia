import React from 'react';

export default function ProductCard({ products }){

    return(
        products.map(
            (product) => {
                return(
                    <div class="product-card">
                        <div class="product-tumb">
                            <img src={`products/${product.image}`} alt={product.name} />
                        </div>
                        <div class="product-details">
                            <h4><a className="product-a" href="http://eunoiamia.netlify.app/">{product.description}</a></h4>
                            <p>{product.detail}</p>
                            <div class="product-bottom-details">
                                <div class="product-price">${product.price}</div>
                                <div class="product-links">
                                    <img src="shop.ico" height="30px" alt="carrito"/>
                                </div>
                            </div>
                        </div>
                    </div>
                );
        })
    );
}