import axios from 'axios';

const url = "https://eunoiamiaapi.herokuapp.com"

export default async function getProducts () {
    return (await axios.get(url + '/api/products')).data;
}
