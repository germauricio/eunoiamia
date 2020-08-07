import axios from 'axios';

const url = 'http://localhost:8000';

export default async function getProducts(){
    console.log(url + '/api/products')
    return (await axios.get(url + '/api/products')).data;
}