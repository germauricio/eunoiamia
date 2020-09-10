import React, {useEffect} from 'react';

export default function MercadoPagoButton ({ price, name, quantity }) {
  const setMercadoPagoPreferences = async () => {
    const initPoint = await fetch('/api/payments/mercado_preference', {
      method: 'POST',
      body: JSON.stringify({price, name}),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }).then(res => res.json());
    const script = document.createElement('script');
    script.src = 'https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js';
    script.async = true;
    script.setAttribute('data-preference-id', initPoint.preferenceId);
    document.getElementById('mercadoForm').appendChild(script);
  };
  
  useEffect(() => {
    setMercadoPagoPreferences();
  }, []);
  
  return <form action="/procesar-pago" method="POST" id="mercadoForm" />;
}

