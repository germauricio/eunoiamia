import axios from 'axios';

const url = "https://eunoiamiaapi.herokuapp.com"

export const getProducts = async () => {
    return (await axios.get(url + '/api/products', {
        headers: {"Access-Control-Allow-Headers": "*"}
    })).data;
}

export const getProductsByCategory = async (category) => {
    return (await axios.get(url + '/api/products/category/' + category, {
        headers: {"Access-Control-Allow-Headers": "*"}
    })).data;
}

export const getProduct = async (productName) => {
    return (await axios.get(url + '/api/product/' + productName, 
    {
        headers: {"Access-Control-Allow-Headers": "*"}
    })).data;
}
