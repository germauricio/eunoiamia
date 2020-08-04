import React from 'react';
import {Link} from 'react-router-dom'

const MenuBar = () => {
    return (
    <div class="menu-bar">
      <button class="menu-btn">
        <Link to = "/" className = "link">Inicio</Link>
      </button>
      <img alt="separator" src="separator.png" height="30px"/>
      <div class="dropdown">
        <button class="dropbtn">
         <Link to = "/products" className = "link">Productos</Link>
        </button>        
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
      <img alt="separator" src="separator.png" height="30px" />
      <button class="menu-btn">
        <Link to = "/info" className = "link">Info</Link>
      </button>
      <img alt="separator" src="separator.png" height="30px" />
      <button class="menu-btn">
        <Link to = "/whoarewe" className = "link">Quiénes somos</Link>
      </button><img alt="separator" src="separator.png" height="30px" />
      <button class="menu-btn">
        <Link to = "/contact" className = "link">Contacto</Link>
      </button><div class="search-container">
        <form action="">
          <input type="search" />
          <button>
            <img alt="Buscar"height="20px" src="search.ico"/>
          </button>
        </form>
      </div>
      <img class="shop" alt="shop" height="60px" src="shop.ico"/>
          
    </div>
  );
};

export default MenuBar;
