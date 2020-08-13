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
        <li><Link to = "/" className = "menu-btn">Inicio</Link></li>
        <img alt="separator" src="/separator.png" height="30px" />
        <li>
          <div className="dropdown">
            <Link onClick={()=>{window.location.href = '/products';}} to = "/products" className = "dropbtn">Productos</Link>
            <div class="dropdown-content">
              <button className="category"><Link onClick={()=>{window.location.href = '/products/category/combos';}} to = {{ pathname:"/products/category/combos", state:"combos"}} >Combos</Link></button>
              <button className="category"><Link onClick={()=>{window.location.href = '/products/category/cuidado-capilar';}} to = {{ pathname:"/products/category/cuidado-capilar", state:"cuidado-capilar"}}>Cuidado capilar</Link></button>
              <button className="category"><Link onClick={()=>{window.location.href = '/products/category/cuidado-de-la-piel';}} to = {{ pathname:"/products/category/cuidado-de-la-piel", state:"cuidado-de-la-piel"}} >Cuidado de la piel</Link></button>
              <button className="category"><Link onClick={()=>{window.location.href = '/products/category/salud-bucal';}} to = {{ pathname:"/products/category/salud-bucal", state:"salud-bucal"}}>Salud bucal</Link></button>
              <button className="category"><Link onClick={()=>{window.location.href = '/products/category/desodorante-natural';}} to = {{ pathname:"/products/category/desodorante-natural", state:"desodorante-natural"}}>Desodorante Natural</Link></button>
              <button className="category"><Link onClick={()=>{window.location.href = '/products/category/jabones-vegetales';}}to = {{ pathname:"/products/category/jabones-vegetales", state:"jabones-vegetales"}}>Jabones vegetales</Link></button>
              <button className="category"><Link onClick={()=>{window.location.href = '/products/category/accesorios-sustentables';}} to = {{ pathname:"/products/category/accesorios-sustentables", state:"accesorios-sustentables"}}>Accesorios sustentables</Link></button>
              <button className="category"><Link onClick={()=>{window.location.href = '/products/category/almohadillas-termicas';}} to = {{ pathname:"/products/category/almohadillas-termicas", state:"almohadillas-termicas"}}>Almohadillas térmicas</Link></button>
              <button className="category"><Link onClick={()=>{window.location.href = '/products/category/aromaterapia';}} to = {{ pathname:"/products/category/aromaterapia", state:"aromaterapia"}}>Aromaterapia</Link></button>
            </div>
          </div>
        </li>
        <img alt="separator" src="/separator.png" height="30px" />
        <li><Link to = "/info" className = "menu-btn">Info</Link></li>
        <img alt="separator" src="/separator.png" height="30px" />
        <li><Link to = "/whoarewe" className = "menu-btn">Quiénes somos</Link></li>
        <img alt="separator" src="/separator.png" height="30px" />
        <li><Link to = "/contact" className = "menu-btn">Contacto</Link></li>
      </ul> 
    </nav>
    </div>
  );
};

export default MenuBar;