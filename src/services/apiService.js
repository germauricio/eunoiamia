import axios from 'axios';

const url = "http://eunoiamiaapi.herokuapp.com"

export default async function getProducts(){

    return (await axios.get(url + '/api/products')).data;
}