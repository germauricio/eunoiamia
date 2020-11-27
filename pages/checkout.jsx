import React, {useContext, useState} from 'react';
import {CartContext} from '../services/cartContext';
import {sendMail} from '../services/apiService';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const CashCheckout = () => {
  const {cartProvider} = useContext(CartContext); 
  const [cart, setCart] = cartProvider;
  const totalPrice = cart.reduce((acc, curr) => acc + parseInt(curr.price * curr.quantity, 10), 0);
  const [user, setUser] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState(0);
  
  const handleSubmit = async (event) => {
    event.preventDefault()
    setIsLoading(true);
    const response = await sendMail(cart, totalPrice, user);
    setIsLoading(false);
    setStatus(response.status);
  }

  const handleChange = (e) => {
    setUser(e.target.value);
  }

  return(
    <div className="container">
    { status === 200 && (
      <div>
      <img src="/gif.gif" height="300px" className="loading" alt="loading"/>
      <h4 class="title">Recibimos tu pedido, ¡en breves nos comunicaremos con vos!</h4>
      </div>
    )}
    { cart.length !== 0 && status !== 200 &&
    (
    <div class="pb-5">
      <div class="card w-70 m-auto">
        <div class="card-header">
          Estas comprando...
        </div>
        <div class="card-body m-auto">
        {cart.map( product => {
          return(
          <div className="float-left px-1">
           <div class="product-card">
            <div class="product-tumb">
              <LazyLoadImage
              src={product.image}
              alt={product.image} 
              />
            </div>
            <div className="product-details">
              <h4 style={{fontSize: 15}}>{product.description} x{product.quantity}</h4>
              <div className="product-bottom-details">
                  <div className="product-price">${product.price * product.quantity}</div>
              </div>
            </div>
          </div>
          </div>

          );
        })}
        </div>
        <h5 className="title">Total a pagar: ${totalPrice}</h5>
        <form>
          <div class="form-group mt-5 px-4">
            <label for="formGroupExampleInput2">Dejanos tu usuario de Instagram o email y nosotros nos contactaremos con vos para organizar la entrega</label>
            <input onChange={handleChange} required type="text" class="form-control w-50 m-auto" id="formGroupExampleInput2" placeholder="Usuario o email"/>
            { isLoading ? (
                <img src="/Rolling-1s-200px.gif" height="200px" className="loading" alt="loading"/>
              ):(
                <button onClick={handleSubmit} class="btn btn-primary btn-lg mt-3">Enviar</button>
              )}
          </div>
        </form>
      </div>
      </div>
    )}
    </div>
  );
}

export default CashCheckout;
        