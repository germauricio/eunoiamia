import React from 'react';
import {Link} from 'react-router-dom'
    
const Footer = () => {
    return(
        <div className="footer">
            <div>
                <a class="icon-footer" href="https://www.facebook.com/eunoia.mia">
                    <img height="30px" alt="fb icon" src="/fb-icon.png" />  
                </a>

                <a class="icon-footer" href="https://www.instagram.com/eunoia.mia">
                    <img height="30px" alt="ig icon" src="/ig-icon.png" />  
                </a>
            </div>
            <div class="bottom-footer">
                <Link to = "/" className = "bottom-footer-bar">Inicio&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|</Link>
                <Link to = "/products" className = "bottom-footer-bar">Productos&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|</Link>
                <Link to = "/contact" className = "bottom-footer-bar">Contacto</Link>
            </div>
        </div>
    );
}

export default Footer;