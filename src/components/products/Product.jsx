import React, { useContext, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../services/cartContext';

const Product = ({product}) => {
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
    
    const decreaseQuantity = (productId) => {
        const cartProduct = cart.find(product => product.id == productId);
        setCart(cart.filter((item) => item.id !== product.id ));
        const currProduct = {
            description: product.description,
            price: product.price,
            quantity: cartProduct.quantity - 1,
            image: product.image,
            id: product.id
        }
        setCart(curr => [...curr, currProduct]);
        if(cartProduct.quantity == 1){
            setCart(cart.filter((item) => item.id !== productId ));
        }
    }

    const increaseQuantity = (productId) => {
        const cartProduct = cart.find(product => product.id == productId);
        setCart(cart.filter((item) => item.id !== product.id ));
        const currProduct = {
            description: product.description,
            price: product.price,
            quantity: cartProduct.quantity + 1,
            image: product.image,
            id: product.id
        }
        setCart(curr => [...curr, currProduct]);
      }

    return(
        <div class="product-card">
            <Link to = {{ pathname:`/product/${product.name}`, state: product}} className = "product-a">
            <div class="product-tumb">
                <img src={`/products/${product.image}`} alt={product.name} />
            </div>
            </Link>
            <div className="product-details">
                <h4><Link to = {{ pathname:`/product/${product.name}`, state: product}} className = "product-a">{product.description}</Link></h4>
                <div className="product-bottom-details">
                    <div className="product-price">${product.price}</div>
                    <div className="product-links">
                        <button className="addcart" onClick={addToCart}>
                        <Link to="/cart"><img src="/shop.ico" height="30px" alt="carrito"></img></Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;