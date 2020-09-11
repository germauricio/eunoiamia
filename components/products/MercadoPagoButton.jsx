import React, {useEffect} from 'react';
import { generatePreference } from '../../services/mercadoPago';

export default function MercadoPagoButton ({ price, name, quantity }) {
  const setMercadoPagoPreferences = async () => {
    const initPoint = await generatePreference(price, name);
    const script = document.createElement('script');
    script.src = 'https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js';
    script.async = true;
    script.setAttribute('data-preference-id', initPoint);
    document.getElementById('mercadoForm').appendChild(script);
  };
  
  useEffect(() => {
    setMercadoPagoPreferences();
  }, []);
  
  return <form action="/procesar-pago" method="POST" id="mercadoForm" />;
}

