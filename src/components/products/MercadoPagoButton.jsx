import React from 'react';

const mercadopago = require ('mercadopago');

// Agrega credenciales
mercadopago.configure({
  access_token: 'APP_USR-5999121692675432-082422-f764955bb965db4079f17cc4f03bff47-63006751'
});

// Crea un objeto de preferencia
let preference = {
  items: [
    {
      title: 'Mi producto',
      unit_price: 100,
      quantity: 1,
    }
  ]
};

mercadopago.preferences.create(preference)
.then(function(response){
  global.id = response.body.id;
  console.log(global.id)
}).catch(function(error){
  console.log(error + 'hola');
});

export class MercadoPagoButton extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const s = document.createElement('script');
    s.src = 'https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js';
    s['data-preference-id'] = '<%= global.id %>';
    this.instance.appendChild(s);
  }

  render() {
    return (
    <form method="POST">
        <div class="btn btn-lg btn-primary-buy text-uppercase m-4" ref={el => (this.instance = el)} />
    </form>
    );
  }
}