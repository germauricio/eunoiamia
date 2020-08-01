import React from 'react';

const MenuBar = () => {
    return (
    <div class="menu-bar">
      <button class="menu-btn">Inicio</button>
      <img alt="separator" src="separator.png" height="30px"/>
      <div class="dropdown">
        <button class="dropbtn">Productos</button>
        <div class="dropdown-content">
          <a>Cuidado capilar</a>
          <a>Salud bucal</a>
          <a>Aromaterapia</a>
          <a>Desodorante natural</a>
          <a>Cuidado de la piel</a>
          <a>Jabones vegetales</a>
          <a>Accesorios sustentables</a>
          <a>Almohadillas termicas</a>
        </div>
      </div>
      <img alt="separator" src="separator.png" height="30px" />
      <button class="menu-btn">Info</button>
      <img alt="separator" src="separator.png" height="30px" />
      <button class="menu-btn">Quienes somos</button>
      <img alt="separator" src="separator.png" height="30px" />
      <button class="menu-btn">Contacto</button>
      <div class="search-container">
        <form action="">
          <input type="search" />
          <button>
            <img alt="Buscar"height="20px" src="search.ico"/>
          </button>
        </form>
      </div>
      <img class="search-container" height="40px" src="shop.ico"/>
          
    </div>
  );
};

export default MenuBar;
