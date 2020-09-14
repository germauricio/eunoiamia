import axios from 'axios';

const url = "http://eunoiamiaapi.herokuapp.com"

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

export const sendMail = async (cart, totalPrice, user) => {
    var text='Productos: \n'
    cart.forEach( product => {
        text += ("- " + product.description + " x" + product.quantity + "\n");
    })

    text += `\nUsuario: ${user}`
    text += `\nPrecio total: $${totalPrice}`

    return (await axios.post(url + '/api/mailer', JSON.stringify({
        text
      }), {
        headers: {
          'Content-Type': 'application/json'
        }
    })).data
}