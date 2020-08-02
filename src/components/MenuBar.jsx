import React from 'react';

const MenuBar = () => {
    return (
    <div class="menu-bar">
      <button class="menu-btn">Inicio</button>
      <img alt="separator" src="separator.png" height="30px"/>
      <div class="dropdown">
        <button class="dropbtn">Productos</button>
        <div class="dropdown-content">
          <a href="#">Cuidado capilar</a>
          <a href="#">Salud bucal</a>
          <a href="#">Aromaterapia</a>
          <a href="#">Desodorante natural</a>
          <a href="#">Cuidado de la piel</a>
          <a href="#">Jabones vegetales</a>
          <a href="#">Accesorios sustentables</a>
          <a href="#">Almohadillas térmicas</a>
        </div>
      </div>
      <img alt="separator" src="separator.png" height="30px" />
      <button class="menu-btn">Info</button>
      <img alt="separator" src="separator.png" height="30px" />
      <button class="menu-btn">Quiénes somos</button>
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
      <img class="search-container" alt="shop" height="40px" src="shop.ico"/>
          
    </div>
  );
};

export default MenuBar;
