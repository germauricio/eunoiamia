import React, { useContext, useState, useCallback } from 'react';
import Link from '../Link';
import { CartContext, addToCart, decreaseQuantity, increaseQuantity } from '../../services/cartContext';

const Product = ({product}) => {
    const {cartProvider} = useContext(CartContext); 
    const [cart, setCart] = cartProvider;

    const addToCart = () => {
        const cartProduct = cart.find(item => item.id == product.id);
        if(cartProduct){
            cartProduct.quantity += 1;
        }
        else{
        const currProduct = {
            description: product.description,
            price: product.price,
            quantity: 1,
            image: product.image,
            id: product.id
        }
            setCart(curr => [...curr, currProduct]);
        }
    }
    
    return(
        <div class="product-card">
            <Link 
                path={`/products/name/${product.name}`} 
                title={
                    <div class="product-tumb">
                    <img src={`/products/${product.image}`} alt={product.name} />
                </div>} 
                linkClass= "product-a"
            />
            <div className="product-details">
                <h4><Link path={`/products/name/${product.name}`} linkClass = "product-a" title={product.description}></Link></h4>
                <div className="product-bottom-details">
                    <div className="product-price">${product.price}</div>
                    <div className="product-links">
                        <button className="addcart" onClick={ (product) => addToCart(product)}>
                            <img src="/shop.ico" height="30px" alt="carrito"></img>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;