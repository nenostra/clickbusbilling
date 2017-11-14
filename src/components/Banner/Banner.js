import React from 'react';
import banner from './facturacion-banner-opt-min.jpg';
import './Banner.css';


const Banner = () => (
  <div className="Banner">
    <img className="Banner-image" src={banner} alt="FACTURACIÓN" />
  </div>
);

export default Banner;