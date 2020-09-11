import axios from 'axios';

const url = "https://eunoiamiaapi.herokuapp.com"

export const generatePreference = async (price, name) => {
    return (await axios.post(url + '/api/payments/mercado_preference/', {
        body: JSON.stringify({price, name}),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }
    })).data;
}