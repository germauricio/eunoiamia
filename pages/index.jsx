import React from 'react';
import SlideShow from '../components/SlideShow';
import Outstanding from '../components/Outstanding'
import InstagramDisplay from '../components/InstagramDisplay';

const Home = () => {
    return(
        <div>
            <SlideShow />
            <Outstanding />
            <InstagramDisplay />
        </div>
    );
  }
  
  export default Home;