import React from 'react';
import './App.css';
import Home from './components/Home'
import Header from './components/Header'
import MenuBar from './components/MenuBar'
import Info from './components/Info'
import WhoAreWe from './components/WhoAreWe'
import Contact from './components/Contact'
import Products from './components/Products'
import ProductDetail from './components/products/ProductDetail'
import Footer from './components/Footer'
import Cart from './components/Cart'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div>
        <Header />
        <MenuBar />
        <Switch>
          <Route path = "/" exact component = { Home } />
          <Route path = "/whoarewe" component = { WhoAreWe } />
          <Route path = "/info" component = { Info } />
          <Route path = "/contact" component = { Contact } />
          <Route path = "/products" component = { Products } />
          <Route path = "/cart" component = { Cart } />
          <Route path = "/products/category/:category" render= {(props) => <Products {...props} />} />
          <Route path = "/product/:name" render= {(props) => <ProductDetail {...props} />} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
