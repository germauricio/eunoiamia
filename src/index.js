import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {CartProvider} from './services/cartContext'

ReactDOM.render(<CartProvider> <App /> </CartProvider>, document.getElementById('root'));