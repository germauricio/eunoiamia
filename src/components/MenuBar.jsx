import React, {useState, useContext} from 'react';
import {Link} from 'react-router-dom';
import Dropdown from 'react-bootstrap/esm/Dropdown';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
import {CartContext} from '../services/cartContext';

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
        <label style={{float:"left"}}for="check" className="checkbtn ml-3">
          <img src="/hamburguer.png" height="30px" alt="hamburguer"></img>
        </label>
        <ul>
          <li><Link to = "/" className = "menu-btn">Inicio</Link></li>
          <img alt="separator" src="/separator.png" height="30px" />
          <li>
          <Dropdown>

          <Dropdown.Toggle className="menu-toggle" id="dropdown-basic">
            Productos
          </Dropdown.Toggle>
              <Dropdown.Menu>
                <DropdownItem className="category"><Link onClick={forceUpdate} to = {{ pathname:"/products/"}} >Todos</Link></DropdownItem>
                <Dropdown.Divider />
                <DropdownItem className="category"><Link onClick={forceUpdate} to = {{ pathname:"/products/category/combos", state:"combos"}} >Combos</Link></DropdownItem>
                <DropdownItem className="category"><Link onClick={forceUpdate} to = {{ pathname:"/products/category/cuidado-capilar", state:"cuidado-capilar"}}>Cuidado capilar</Link></DropdownItem>
                <DropdownItem className="category"><Link onClick={forceUpdate} to = {{ pathname:"/products/category/cuidado-de-la-piel", state:"cuidado-de-la-piel"}} >Cuidado de la piel</Link></DropdownItem>
                <DropdownItem className="category"><Link onClick={forceUpdate} to = {{ pathname:"/products/category/salud-bucal", state:"salud-bucal"}}>Salud bucal</Link></DropdownItem>
                <DropdownItem className="category"><Link onClick={forceUpdate} to = {{ pathname:"/products/category/desodorante-natural", state:"desodorante-natural"}}>Desodorante Natural</Link></DropdownItem>
                <DropdownItem className="category"><Link onClick={forceUpdate} to = {{ pathname:"/products/category/jabones-vegetales", state:"jabones-vegetales"}}>Jabones vegetales</Link></DropdownItem>
                <DropdownItem className="category"><Link onClick={forceUpdate} to = {{ pathname:"/products/category/accesorios-sustentables", state:"accesorios-sustentables"}}>Accesorios sustentables</Link></DropdownItem>
                <DropdownItem className="category"><Link onClick={forceUpdate} to = {{ pathname:"/products/category/almohadillas-termicas", state:"almohadillas-termicas"}}>Almohadillas térmicas</Link></DropdownItem>
                <DropdownItem className="category"><Link onClick={forceUpdate} to = {{ pathname:"/products/category/aromaterapia", state:"aromaterapia"}}>Aromaterapia</Link></DropdownItem >            
              </Dropdown.Menu>
            </Dropdown>
                 </li>
          <img alt="separator" src="/separator.png" height="30px" />
          <li><Link to = "/info" className = "menu-btn">Info</Link></li>
          <img alt="separator" src="/separator.png" height="30px" />
          <li><Link to = "/whoarewe" className = "menu-btn">Quiénes somos</Link></li>
          <img alt="separator" src="/separator.png" height="30px" />
          <li><Link to = "/contact" className = "menu-btn">Contacto</Link></li>
        </ul>
        <div className="cart">
          <Link to="/cart">{
                cart.length !== 0 && (                  
                   <div className="items-number"><p>{items}</p></div>
                )}
                <img alt="cart" src="/shop.ico" height="50px" />
              </Link>
        </div>
      </nav>
    </div>
  );
};

export default MenuBar;