import React, {useState, useEffect, useContext} from 'react';
import { CartContext } from '../services/cartContext'

const ItemCart = ({item, totalPrice}) => {
    const {cartProvider} = useContext(CartContext); 
    const [cart, setCart] = cartProvider;
    const [outOfStock, setOutOfStock] = useState(false);

    const decreaseQuantity = (product) => {
        const cartProduct = cart.find(item => item.id == product.id);
        setCart(cart.filter((item) => item.id !== product.id ));
        if(product.quantity > 1){
            const currProduct = {
                description: product.description,
                price: product.price,
                quantity: cartProduct.quantity - 1,
                image: product.image,
                id: product.id,
                stock: product.stock,
                name: product.name,
                cost: product.cost
            }
            setCart(curr => [...curr, currProduct]);
        }
        setOutOfStock(false);
    }

    const addToCart = (product) => {
        const cartProduct = cart.find(item => item.id == product.id);
        if(cartProduct.quantity +1 > cartProduct.stock){
            setOutOfStock(true);
        }
        else {
            if(cartProduct){
                setCart(cart.filter((item) => item.id !== product.id ));
                cartProduct.quantity += 1;
                setCart(curr => [...curr, cartProduct]);
            }
            else{
                const currProduct = {
                    description: product.description,
                    price: product.price,
                    quantity: 1,
                    image: product.image,
                    id: product.id,
                    stock: product.stock,
                    name: product.name,
                    cost: product.cost
                }
                setCart(curr => [...curr, currProduct]);
            }
        }
    }

    return(
    <div>
        <div class="item-cart">
            <div class="product-image-cart">
                <img 
                src={`${item.image}-1.jpg`} 
                height ="160px" 
                alt={item.image} 
                class="product-frame"
                />
            </div>
            <div class="product-details-cart">
                <h1 className="h1-cart ml-4"><strong className="strong-cart"><span class="item-quantity">{item.quantity}</span></strong></h1>
                <p className="p-cart ml-4"><strong className="strong-cart">{item.description}</strong></p>
                <p className="p-cart ml-4">Código de producto: {item.id}</p>
            </div>
        </div>

        <div class="price-cart">${item.price}</div>
        <div class="quantity-cart">
            <p class="quantity-field">{item.quantity}</p>
        </div>
        <div class="subtotal">${totalPrice}</div>
        <div class="remove">
            <button onClick={() => {decreaseQuantity(item)}}>Remover</button>
            <button className="m-4" onClick={() => {addToCart(item);}}>Agregar</button>
            {outOfStock && (
                <div className="w-100 pr-4">
                    <p class="text-danger">Solo tenemos {item.stock} disponibles!</p>
                </div>
            )}
        </div>
    </div>
    );
}

export default ItemCart;