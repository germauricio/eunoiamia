import axios from "axios";

const url = "https://eunoiamiaapi.herokuapp.com"

export const generatePreference = async (price, name, quantity, shipment) => {
    return (await axios.post('http://localhost:5000/api/payments/mercado_preference', JSON.stringify({
        price, name, shipment, quantity
      }), {
        headers: {
          'Content-Type': 'application/json'
        }
    })).data.preferenceId;
}