import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../services/cartContext';

const Product = ({product}) => {
    const {cartProvider} = useContext(CartContext); 
    const [cart, setCart] = cartProvider;
    const [quantity, setQuantity] = useState(1);

    const addToCart = () => {
        const currProduct = {
            description: product.description,
            price: product.price,
            quantity: quantity,
            image: product.image,
            id: product.id
        }
        setCart(curr => [...curr, currProduct]);
    }
    
    const removeFromCart = (productId) => {
        setCart(cart.filter((item) => item.id !== productId ));
    }

    const increaseQuantity = (productId) => {

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
                        
                        {
                            !cart.some((item) => item.id === product.id ) ? (
                                <button className="addcart" onClick={addToCart}>
                                    <img src="/shop.ico" height="30px" alt="carrito"/>
                                </button>) : (
                                    <div >
                                        <br></br>
                                        <button className="decrease" onClick={()=>{removeFromCart(product.id)}}>
                                            -
                                        </button>
                                        <button className="increase" onClick={()=>{increaseQuantity(product.id)}}>
                                            -
                                        </button>
                                    </div>
                                )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;