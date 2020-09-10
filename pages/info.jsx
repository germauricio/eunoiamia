import React from 'react'

const Info = () => {
    return(
        <div>
            <br></br>
            <h1 className="h1-info">Información</h1>
            <br></br>
            <h2 className="h2-info">
                <img alt="manos" src="manitos.png" height="50px" />
                    MEDIOS DE PAGO
                <img alt="manos" src="manitos.png" height="50px" />
            </h2>
            <h3 className="h3-info">• PODES ABONAR EN EFECTIVO.</h3>
            <h3 className="h3-info">• MERCADO PAGO A TRAVÉS DE ENVÍO DE DINERO O </h3>
            <h3 className="h3-info">SINO POR LINK DE COBRO CON UN 5% DE RECARGO.</h3>
            <h1>
                <img alt="mercadopago" className="img-centered" src="mercadopago.png" height="100px" />
            </h1>
            <br></br>
            <hr></hr>
            <br></br>
            <h2 className="h2-info">
                <img alt="mundo" src="mundito.png" height="50px" />
                    ENTREGAS
                <img alt="mundo" src="mundito.png" height="50px" />
            </h2>
            <h3 className="h3-info">• PODÉS RETIRAR SIN CARGO POR SAENZ PEÑA, TRES DE FEBRERO, BUENOS AIRES.</h3>
            <h3 className="h3-info">• SE REALIZAN ENVÍOS A CARGO DEL CLIENTE LOS DÍAS LUNES DE 9HS A 18HS. </h3>
            <h3 className="h3-info">• MÍNIMO DE $150 (CONSULTAR COSTO DE ENVÍO DEPENDIENDO LA ZONA).</h3>
            <br></br>
            <br></br>
            <br></br>
        </div>
    );
}
  
export default Info;