import React, { useContext } from 'react';
import { CartContext } from '../services/cartContext'

const Cart = () => {
    const {cartProvider, quantityProvider} = useContext(CartContext); 
    const [cart, setCart] = cartProvider;
    
    const totalPrice = cart.reduce((acc, curr) => acc + parseInt(curr.price, 10), 0)
   
    return(
        <div>
            <h2>Productos en el carrito</h2>
            {cart.map((item)=>{
                    return(
                    <div>
                        <img src ={`/products/${item.image}`} height ="75px" />
                        <p> {item.description}</p>
                        <p> ${item.price}</p>
                        <p> Cant: {item.quantity}</p>
                    </div>)
                })
            }
        </div>

    );
}

export default Cart;