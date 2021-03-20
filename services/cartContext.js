import React, { useState, useEffect } from 'react'

export const CartContext = React.createContext();

export const CartProvider = (props) => {
    const [cart, setCart] = useState([]);
    const [setted, setSetted] = useState(false);
    useEffect(() => {
        if(cart.length){
            localStorage.setItem('cart', JSON.stringify(cart));
        } else {
            let storageCart = JSON.parse(localStorage.getItem('cart'));
            if(!setted){
                setCart(storageCart);
                setSetted(true);
            }
        }
    }, [cart]);

    return(
    <CartContext.Provider value = {{cartProvider: [cart, setCart]}}>
        {props.children}
    </CartContext.Provider>
    );
}