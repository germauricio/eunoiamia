import React, {useEffect} from 'react';
import { generatePreference } from '../../services/mercadoPago';

export default function MercadoPagoButton ({ price, name, quantity, shipment }) {
  const setMercadoPagoPreferences = async () => {
    const initPoint = await generatePreference(price, name, quantity, shipment);
    const script = document.createElement('script');
    script.src = 'https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js';
    script.async = true;
    script.setAttribute('data-preference-id', initPoint);
    script.setAttribute('data-button-label',"Comprar");
    document.getElementById('mercadoForm').appendChild(script);
  };
  
  useEffect(() => {
    setMercadoPagoPreferences();
  }, []);
  
  return <form className="p-2" action="/procesar-pago" method="POST" id="mercadoForm"/>;
}

