import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../services/cartContext';

const Product = ({product}) => {
    const {cartProvider, quantityProvider} = useContext(CartContext); 
    const [cart, setCart] = cartProvider;
    const [quantity, setQuantity] = useState(0);

    const addToCart = () => {
        setQuantity(1);
        console.log(quantity)
        const currProduct = {
            description: product.description,
            price: product.price,
            quantity: quantity,
            image: product.image
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
                        
                        {
                            quantity == 0 ? (
                                <button className="addcart" onClick={addToCart}>
                                    <img src="/shop.ico" height="30px" alt="carrito"/>
                                </button>) : (
                                    <div >
                                        <br></br>
                                        <button className="decrease" onClick={()=>{setQuantity(quantity-1); console.log(quantity)}}>
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