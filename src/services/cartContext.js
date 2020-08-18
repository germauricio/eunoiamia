import React, { useState } from 'react'

export const CartContext = React.createContext();

export const CartProvider = (props) => {
    const [cart, setCart] = useState([]);
    const [quantity, setQuantity] = useState(0);
    
    return(
    <CartContext.Provider value = {{cartProvider: [cart, setCart]}}>
        {props.children}
    </CartContext.Provider>
    );
}