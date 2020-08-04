import React from 'react'

const Contact = () => {
    return(
        <div>
            <br></br>
            <h1 className="h1-info">Contacto</h1>
            <a href="https://www.facebook.com/eunoia.mia/"
            target="_blank"
            rel="noopener noreferrer"
            className="link">
                <div className = "div-contact">
                    <img alt="logofb" src="logo-facebook.png" height="250px" />
                    <h2 className="h2-contact">Eunoia Mia</h2>
                </div>
            </a>
            <a 
            href="https://www.instagram.com/eunoia.mia/"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
            >
                <div className = "div-contact">
                    <img alt="logoig" src="logo-instagram.png" height="250px" />
                    <h2 className="h2-contact">@eunoia.mia</h2>
                </div>
            </a>
        </div>
    );
}
  
export default Contact;