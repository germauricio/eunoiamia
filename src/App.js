import React from 'react';
import './App.css';
import Home from './components/Home'
import Header from './components/Header'
import MenuBar from './components/MenuBar'
import Info from './components/Info'
import WhoAreWe from './components/WhoAreWe'
import Contact from './components/Contact'
import Products from './components/Products'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div>
        <Header />
        <MenuBar />
        <Switch>
          <Route path = "/" exact component = { Home } />
          <Route path = "/whoarewe" exact component = { WhoAreWe } />
          <Route path = "/info" exact component = { Info } />
          <Route path = "/contact" exact component = { Contact } />
          <Route path = "/products" exact component = { Products } />
        </Switch>
        </div>
    </Router>
  );
}

export default App;
