import React from 'react';
import SlideShow from '../components/SlideShow';
import Outstanding from '../components/Outstanding'
import InstagramDisplay from '../components/InstagramDisplay';

const Home = () => {
    return(
        <div>
            <SlideShow />
            <Outstanding />
            <div className="container">
                <img height="100px" src="/consumoConsciente.png"></img>
            </div>
            <InstagramDisplay />
        </div>
    );
  }
  
  export default Home;