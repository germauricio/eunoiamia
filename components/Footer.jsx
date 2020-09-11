import React from 'react';
import Link from './Link';

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
                <Link path = "/" linkClass = "bottom-footer-bar" title="Inicio"/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|
                <Link path = "/products" linkClass = "bottom-footer-bar" title="Productos" />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|
                <Link path = "/contact" linkClass = "bottom-footer-bar" title="Contacto"/>
            </div>
        </div>
    );
}

export default Footer;