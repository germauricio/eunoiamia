import React, {useContext, useState} from 'react';
import {useRouter} from 'next/router';
import {CartContext} from '../services/cartContext';
import {sendMail} from '../services/apiService';

const CashCheckout = () => {
  const router = useRouter();
  const {cartProvider} = useContext(CartContext); 
  const [cart, setCart] = cartProvider;
  const totalPrice = cart.reduce((acc, curr) => acc + parseInt(curr.price * curr.quantity, 10), 0);
  const [user, setUser] = useState('');
  
  const handleSubmit = async (event) => {
    event.preventDefault()
    const response = await sendMail(cart, totalPrice, user);
  }

  const handleChange = (e) => {
    setUser(e.target.value);
  }

  return(
    <div className="container">
    { cart.length !== 0 ? 
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
              <img src={`/products/${product.image}`} alt={product.image} />
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
            <button onClick={handleSubmit} class="btn btn-primary btn-lg mt-3">Enviar</button>
          </div>
        </form>
      </div>
      </div>
    ) : (
      <img src="/Rolling-1s-200px.gif" className="loading" alt="loading"/>
    )}
    </div>
  );
}

export default CashCheckout;
        