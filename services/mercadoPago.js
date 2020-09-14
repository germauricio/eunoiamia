import axios from "axios";

const url = "https://eunoiamiaapi.herokuapp.com"

export const generatePreference = async (price, name, quantity, shipment) => {
    return (await axios.post(url + '/api/payments/mercado_preference', JSON.stringify({
        price, name, shipment, quantity
      }), {
        headers: {
          'Content-Type': 'application/json'
        }
    })).data.preferenceId;
}

export const setMercadoPagoPreferences = async (price, name, quantity, shipment) => {
  const initPoint = await generatePreference(price, name, quantity, shipment);
  const script = document.createElement('script');
  script.src = 'https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js';
  script.async = true;
  script.id = 'mercadoPagoScript';
  script.setAttribute('data-preference-id', initPoint);
  script.setAttribute('data-button-label',"Mercado Pago");
  var mercadoForm = document.getElementById('mercadoForm');
  var button = document.getElementById('mercadoPagoScript');
  if(button) {
    mercadoForm.innerHTML = "";
    mercadoForm.appendChild(script);
  }
  else {
    mercadoForm.appendChild(script);
  }
};