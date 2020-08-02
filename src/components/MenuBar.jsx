import React from 'react';

const MenuBar = () => {
    return (
    <div class="menu-bar">
      <button class="menu-btn">Inicio</button>
      <img alt="separator" src="separator.png" height="30px"/>
      <div class="dropdown">
        <button class="dropbtn">Productos</button>
        <div class="dropdown-content">
          <a href="javascript:;">Cuidado capilar</a>
          <a href="javascript:;">Salud bucal</a>
          <a href="javascript:;">Aromaterapia</a>
          <a href="javascript:;">Desodorante natural</a>
          <a href="javascript:;">Cuidado de la piel</a>
          <a href="javascript:;">Jabones vegetales</a>
          <a href="javascript:;">Accesorios sustentables</a>
          <a href="javascript:;">Almohadillas termicas</a>
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
