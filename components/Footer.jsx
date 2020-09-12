import React from 'react';
import Link from './Link';

const Footer = () => {
    return(
        <div className="footer">
            <div className="mr-5">
                <a class="icon-footer" href="https://www.facefook.com/eunoia.mia">
                    <img height="30px" alt="fb icon" src="/fb-icon.png" />  
                </a>

                <a class="icon-footer" href="https://www.instagram.com/eunoia.mia">
                    <img height="30px" alt="ig icon" src="/ig-icon.png" />  
                </a>
            </div>
            <div class="bottom-footer">
                
                <Link path = "/" linkClass = "bottom-footer-bar" title="Inicio"/>
                    |
                <Link path = "/products" linkClass = "bottom-footer-bar" title="Productos" />
                    |
                <Link path = "/contact" linkClass = "bottom-footer-bar" title="Contacto"/>
            </div>
            <div class="madeby">
                <h3>Hecho con amor, por <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://github.com/germauricio" className="link text-white">Mauricio Pauluk</a></h3>
            </div>
        </div>
    );
}

export default Footer;