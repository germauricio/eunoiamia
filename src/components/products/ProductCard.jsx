import React from 'react';
import { Link } from 'react-router-dom'

export default function ProductCard({ products }){

    return(
        products.map(
            (product) => {
                return(
                    <div class="product-card">
                        <Link to = {{ pathname:`/product/${product.name}`, state: product}} className = "product-a">
                        <div class="product-tumb">
                            <img src={`/products/${product.image}`} alt={product.name} />
                        </div>
                        </Link>
                        <div class="product-details">
                            <h4><Link to = {{ pathname:`/product/${product.name}`, state: product}} className = "product-a">{product.description}</Link></h4>
                            <div class="product-bottom-details">
                                <div class="product-price">${product.price}</div>
                                <div class="product-links">
                                    <img src="/shop.ico" height="30px" alt="carrito"/>
                                </div>
                            </div>
                        </div>
                    </div>
                );
        })
    );
}