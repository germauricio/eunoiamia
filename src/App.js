import React from 'react';
import './App.css';
import MenuBar from './components/MenuBar'
import Header from './components/Header'
import SlideShow from './components/SlideShow'
import InstagramDisplay from './components/InstagramDisplay'

function App() {
  return (
    <div>
      <Header />
      <MenuBar />
      <SlideShow />
      <InstagramDisplay />
    </div>
  );
}

export default App;
