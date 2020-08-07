import axios from 'axios';

const url = "https://eunoiamia.netlify.app"

export default async function getProducts(){

    return (await axios.get(url + '/api/products')).data;
}