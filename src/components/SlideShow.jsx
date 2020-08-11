import React from "react";
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';

function SliderShow() {
  return (
    <div className="carousel-container">
      <Carousel interval={2500}>
        <Carousel.Item>
          <div className="image-slider">
            <img
              className="w-100"
              src="jabon.jpg"
              alt="Jabon"
            />
          </div>
          <Carousel.Caption>
            <h3 className="carousel-title">Jabón natural</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="image-slider">
            <img
              className="w-100"
              src="peine.jpg"
              alt="Peine"
            />
          </div>
          <Carousel.Caption>
            <h3>Cepillos de madera</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="image-slider">
            <img
              className="w-100"
              src="cepillo.jpg"
              alt="Cepillo"
            />
          </div>
          <Carousel.Caption>
            <h3>Cepillos de bambú</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default SliderShow;