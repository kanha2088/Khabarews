// src/ImageCarousel.js
import React from 'react';
import Slider from 'react-slick';
import './ImageCarousel.css'; // Create this CSS file for styling

const ImageCarousel = ({ images, description }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="carousel-container">
      <div className="carousel-images">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`Slide ${index}`} className="carousel-image" />
            </div>
          ))}
        </Slider>
      </div>
      <div className="carousel-description">
        {description}
      </div>
    </div>
  );
};

export default ImageCarousel;
