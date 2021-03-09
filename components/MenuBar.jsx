import React, {useState, useContext} from 'react';
import {CartContext} from '../services/cartContext';
import Link from './Link';

const MenuBar = () => {
  const {cartProvider} = useContext(CartContext); 
  const [cart, setCart] = cartProvider;
  const [hideMenu, setHideMenu] = useState('-100%')
  const items = cart.reduce((acc, curr) => acc + parseInt(curr.quantity, 10), 0)

  const handleHide = (isHamburguer = false) => {
    if(hideMenu == '0') {
      setHideMenu('-100%');
    }
    else if(isHamburguer == true){
      setHideMenu('0');
    }
  }

  return (
    <div>
      <nav className="menu-bar">
        <img 
        onClick={() => handleHide(true)}
        src="/hamburguer.png"
        height="30px"
        alt="hamburguer"
        className="checkbtn mx-3 mt-4"
        />
        <ul style={{left: hideMenu}}>
          <li onClick = {handleHide} ><Link title="Inicio" path = "/"/></li>
          <img alt="separator" src="/separator.png" height="30px" />
          <li onClick = {handleHide} ><Link title="Info" path = "/info" /></li>
          <img alt="separator" src="/separator.png" height="30px" />
          <li><div class="dropdown">
                <button class="dropbtn">Productos</button>
                <div class="dropdown-content">
                  <div onClick = {handleHide}>  
                    <Link path="/products" title="Todos"/>
                  </div>
                  <div onClick = {handleHide}>
                    <Link path="/category/combos" title="Combos"/>
                  </div>
                  <div onClick = {handleHide}>  
                    <Link path="/category/cuidado-capilar" title="Cuidado capilar"/>
                  </div>
                  <div onClick = {handleHide}>  
                    <Link path="/category/cuidado-de-la-piel" title="Cuidado de la piel"/>
                  </div>
                  <div onClick = {handleHide}>  
                    <Link path="/category/cuidado-personal" title="Cuidado personal"/>
                  </div>
                  <div onClick = {handleHide}>  
                    <Link path="/category/salud-bucal" title="Salud bucal"/>
                  </div>
                  <div onClick = {handleHide}>
                    <Link path="/category/desodorante-natural" title="Desodorante natural"/>
                  </div>
                  <div onClick = {handleHide}>
                    <Link path="/category/jabones-vegetales" title="Jabones vegetales"/>
                  </div>
                  <div onClick = {handleHide}>  
                    <Link path="/category/accesorios-sustentables" title="Accesorios sustentables"/>
                  </div>
                  <div onClick = {handleHide}>  
                    <Link path="/category/almohadillas-termicas" title="Almohadillas térmicas"/>
                  </div>
                  <div onClick = {handleHide}>  
                    <Link path="/category/aromaterapia" title="Aromaterapia"/>
                  </div>

                </div>
              </div>
          </li>
          <img alt="separator" src="/separator.png" height="30px" />
          <li onClick = {handleHide} ><Link title="Quiénes somos"path = "/whoarewe"/></li>
          <img alt="separator" src="/separator.png" height="30px" />
          <li onClick = {handleHide} ><Link title="Contacto" path = "/contact"/></li>
        </ul>
        <div onClick = {handleHide} className="cart">
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