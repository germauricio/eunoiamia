import React, {useState, useContext} from 'react';
import {CartContext} from '../services/cartContext';
import Link from './Link';

const useForceUpdate = () => useState()[1];

const MenuBar = () => {
  const forceUpdate = useForceUpdate();
  const {cartProvider} = useContext(CartContext); 
  const [cart, setCart] = cartProvider;
  const items = cart.reduce((acc, curr) => acc + parseInt(curr.quantity, 10), 0)

  return (
    <div>
      <nav className="menu-bar">
        <input type="checkbox" id="check"/>
        <label style={{float:"left"}} for="check" className="checkbtn ml-3">
          <img src="/hamburguer.png" height="30px" alt="hamburguer"></img>
        </label>
        <ul>
          <li><Link title="Inicio" path = "/"/></li>
          <img alt="separator" src="/separator.png" height="30px" />
          <li><Link title="Info" path = "/info" /></li>
          <img alt="separator" src="/separator.png" height="30px" />
          <li><Link title="Productos" path = "/products"/></li>
          <img alt="separator" src="/separator.png" height="30px" />
          <li><Link title="Quiénes somos"path = "/whoarewe"/></li>
          <img alt="separator" src="/separator.png" height="30px" />
          <li><Link title="Contacto" path = "/contact"/></li>
        </ul>
        <div className="cart">
          <Link 
            title={
              <div>
                {
                  cart.length !== 0 && (                  
                    <div className="items-number"><p>{items}</p></div>
                  )}
                  <img alt="cart" src="/shop.ico" height="50px" />
                  </div>
                } 
            path="/cart" 
          />
        </div>
      </nav>
    </div>
  );
};

export default MenuBar;