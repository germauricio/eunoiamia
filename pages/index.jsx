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
                <div class="hover06 column">
                    <div>
                        <figure><img className="consumoConsciente" src="/consumoConsciente.png"></img></figure>
                    </div>
                </div>            
            </div>
            <InstagramDisplay />
        </div>
    );
  }
  
  export default Home;