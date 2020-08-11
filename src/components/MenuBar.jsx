import React from 'react';
import {Link} from 'react-router-dom'

const MenuBar = () => {
    return (
      <div>

      
    <nav className="menu-bar">
      <input type="checkbox" id="check"/>
      <label for="check" class="checkbtn">
        <img src="/hamburguer.png" height="30px" alt="hamburguer"></img>
      </label>
      <ul>
        <li><Link to = "/" className = "link">Inicio</Link></li>
        <img alt="separator" src="/separator.png" height="30px" />
        <li>
          <div className="dropdown">
            <Link to = "/products" className = "dropbtn">Productos</Link>
            <div class="dropdown-content">
              <button className="menu-btn">Combos</button>
              <button className="menu-btn">Cuidado capilar</button>
              <button className="menu-btn">Cuidado de la piel</button>
              <button className="menu-btn">Salud bucal</button>
              <button className="menu-btn">Desodorante natural</button>
              <button className="menu-btn">Jabones vegetales</button>
              <button className="menu-btn">Accesorios sustentables</button>
              <button className="menu-btn">Almohadillas térmicas</button>
              <button className="menu-btn">Aromaterapia</button>
            </div>
          </div>
        </li>
        <img alt="separator" src="/separator.png" height="30px" />
        <li><Link to = "/info" className = "link">Info</Link></li>
        <img alt="separator" src="/separator.png" height="30px" />
        <li><Link to = "/whoweare" className = "link">Quiénes somos</Link></li>
        <img alt="separator" src="/separator.png" height="30px" />
        <li><Link to = "/contact" className = "link">Contacto</Link></li>
      </ul> 
    </nav>
    </div>
  );
};

export default MenuBar;