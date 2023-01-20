import SAFELlogo from './SAFEL.png';
import React from 'react';
import Slider from 'react-slick';
import './Banner.css';

function Banner() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 100,
  };

  return (
    <div className="banner">
      <Slider {...settings}>
        <img src={SAFELlogo} alt="Banner Image" />
        <img src={SAFELlogo} alt="Banner Image" />
        <img src={SAFELlogo} alt="Banner Image" />
      </Slider>
    </div>
  );
}

export default Banner;
