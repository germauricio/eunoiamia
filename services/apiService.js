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

export const editProduct = async (params) => {

    return (await axios.put(url + '/api/product', params, 
    {
        headers: {"Access-Control-Allow-Headers": "*"}
    })).data;
  }

export const getProduct = async (productName) => {
    return (await axios.get(url + '/api/product/' + productName, 
    {
        headers: {"Access-Control-Allow-Headers": "*"}
    })).data;
}

export const makeSell = async (cart, totalPrice, user, shipment) => {
    var sellProductsName = '';

    cart.map( product => {
        product.stock =- 1
        await editProduct(product);
        sellProductsName += `${product.description} x${product.quantity} `
    });

    var sell = {
        product_name: sellProductsName,
        total: totalPrice,
        contact: user,
        shipment: shipment
    }
    
    return (await axios.post(url + '/api/admin/sell', JSON.stringify({
        sell
      }), {
        headers: {
          'Content-Type': 'application/json'
        }
    }))
}

export const sendMail = async (cart, totalPrice, user, shipment) => {
    var text='Productos: \n'
    cart.forEach( product => {
        text += ("- " + product.description + " x" + product.quantity + "\n");
    })

    text += `\nUsuario: ${user}`
    text += `\nPrecio total: $${totalPrice}`
    text += `\nMétodo de envío: $${shipment}`

    return (await axios.post(url + '/api/mailer', JSON.stringify({
        text
      }), {
        headers: {
          'Content-Type': 'application/json'
        }
    }))
}