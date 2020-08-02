import React from 'react';
import './App.css';
import MenuBar from './components/MenuBar'
import Header from './components/Header'
import SlideShow from './components/SlideShow'

function App() {
  return (
    <div>
      <Header />
      <MenuBar />
      <SlideShow/>
    </div>
  );
}

export default App;
