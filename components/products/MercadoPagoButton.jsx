import React, {useEffect} from 'react';
import { setMercadoPagoPreferences } from '../../services/mercadoPago';

export default function MercadoPagoButton ({ price, name, quantity, shipment }) {
  
  useEffect(() => {
    setMercadoPagoPreferences(price, name, quantity, shipment);
  }, []);
  
  return <form className="p-2" action="/procesar-pago" method="POST" id="mercadoForm"/>;
}

