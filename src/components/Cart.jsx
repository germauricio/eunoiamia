import React, { useContext } from 'react';
import { CartContext } from '../services/cartContext'

const Cart = () => {
    const {cartProvider, quantityProvider} = useContext(CartContext); 
    const [cart, setCart] = cartProvider;
    
    const totalPrice = cart.reduce((acc, curr) => acc + parseInt(curr.price * curr.quantity, 10), 0)
    
    const decreaseQuantity = (product) => {
        const cartProduct = cart.find(item => item.id == product.id);
        setCart(cart.filter((item) => item.id !== product.id ));
        if(product.quantity > 1){
            const currProduct = {
                description: product.description,
                price: product.price,
                quantity: cartProduct.quantity - 1,
                image: product.image,
                id: product.id
            }
            setCart(curr => [...curr, currProduct]);
        }
    }
    
    

    return(
        !totalPrice ? (
            <div className ="container">
                <img src="carritovacio.png" height="400px" alt="carritovacio"/>
            </div>
        ) : (
        <div className="main-cart">
            <div className="body-cart">
                <div class="basket">
                        <div class="basket-module">
                            <label className="label-cart" for="promo-code">Ingresar código promocional</label>
                            <input id="promo-code" type="text" name="promo-code" maxlength="5" class="promo-code-field"/>
                            <button class="promo-code-cta">Aplicar</button>
                        </div>
                    <div class="basket-labels">
                        <ul className="ul-cart">
                        <li class="item-cart item-heading">Producto</li>
                        <li class="price-cart">Precio</li>
                        <li class="quantity-cart">Cantidad</li>
                        <li class="subtotal">Subtotal</li>
                        </ul>
                    </div>

                {
                cart.map(item => {
                    return(
                        <div class="basket-product">
                            <div class="item-cart">
                                <div class="product-image-cart">
                                    <img src={`/products/${item.image}`} height ="160px" alt={item.image} class="product-frame"/>
                                </div>
                                <div class="product-details-cart">
                                    <h1 className="h1-cart ml-4"><strong className="strong-cart"><span class="item-quantity">{item.quantity}</span></strong></h1>
                                    <p className="p-cart ml-4"><strong className="strong-cart">{item.description}</strong></p>
                                    <p className="p-cart ml-4">Código de producto: {item.id}</p>
                                </div>
                                </div>

                                <div class="price-cart">${item.price}</div>
                                <div class="quantity-cart">
                                    <input type="number" onChange={e => {item.quantity = e.target.value}} min="1" value={item.quantity} class="quantity-field"></input>
                                </div>
                                <div class="subtotal">${totalPrice}</div>
                                <div class="remove">
                                    <button onClick={() => {decreaseQuantity(item)}}>Remover</button>
                            </div>
                        </div>
                )})}
                </div>

                <aside className="aside-cart">
                    <div class="summary">
                        <div class="summary-total-items"><span class="total-items"></span> Productos en el carrito</div>
                        <div class="summary-subtotal">
                            <div class="subtotal-title">Subtotal</div>
                            <div class="subtotal-value final-value" id="basket-subtotal">${totalPrice}</div>
                            <div class="summary-promo hide">
                                <div class="promo-title">Promoción</div>
                                <div class="promo-value final-value" id="basket-promo"></div>
                            </div>
                        </div>
                        <div class="summary-total">
                            <div class="total-title">Total</div>
                            <div class="total-value final-value" id="basket-total">${totalPrice}</div>
                            <div class="summary-checkout">
                                <button class="checkout-cta">Comprar</button>
                            </div>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    ))
}

export default Cart;