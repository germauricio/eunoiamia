import React, { useContext, useState } from 'react';
import { CartContext } from '../services/cartContext'
import MercadoPagoButton from '../components/products/MercadoPagoButton';
import {setMercadoPagoPreferences} from '../services/mercadoPago';
import { useRouter } from 'next/router';
import ItemCart from '../components/ItemCart';

const Cart = () => {
    const {cartProvider} = useContext(CartContext); 
    const [cart, setCart] = cartProvider;
    const [shipment, setShipment] = useState('');
    const [missingShipment, showShipmentMissing] = useState(false);
    const router = useRouter();
    const totalPrice = cart.reduce((acc, curr) => acc + parseInt(curr.price * curr.quantity, 10), 0)
    var productsName = "";
    
    if(cart.length){
        cart.forEach( (item) => {
            var productName = item.description + " x" + item.quantity;
            productsName += " " + productName;
        })
        setMercadoPagoPreferences(totalPrice, productsName, 1, shipment);
    }
    
    const handleShipment = (e) => {
        showShipmentMissing(false);
        setShipment(e.target.value);
    }

    const handleCheckout = () => {
        if(!shipment){
            showShipmentMissing(true);
        }
        else {
            cart[0].shipment = shipment;
            router.push('/checkout')
        }
    }

    return(
        !totalPrice ? (
            <div className ="container mb-4">
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
                            <ItemCart totalPrice={totalPrice} item={item}/>
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
                            <div class="form-check" onChange={handleShipment}>
                                <input class="form-check-input" type="radio" name="shipment" id="shipment" value="shipment"/>
                                <label class="form-check-label" for="shipment">
                                    Envío (costo a acordar, mínimo $150)
                                </label>
                                <br></br>
                                <input class="form-check-input" type="radio" name="shipment" id="retirement" value="retirement"/>
                                <label class="form-check-label" for="retirement">
                                    Retiro (sin cargo por Saenz Peña)
                                </label>
                            </div>
                            { missingShipment && (
                                <p class="text-danger">Seleccionar un metodo de envio</p>
                            )}
                            <br></br>
                            <div class="total-title">PAGAR CON</div>
                            <div className="summary-checkout text-center">
                                <div className="container">

                                    <MercadoPagoButton name={productsName} price={totalPrice} quantity="1" shipment={shipment} />
                                    <button onClick={handleCheckout} class="btn btn-sm btn-success position-static" style={{fontSize: "1.2em", width: "7em",
                                    marginTop: "1.2em", height: "2.7em"}}>Efectivo</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    ))
}

export default Cart;