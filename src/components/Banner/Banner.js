import React from 'react';
import banner from './facturacion-banner-opt-min.jpg';
import './Banner.css';


function Banner() {
  return (
    <div className="Banner">
      <img
        className="Banner-image"
        src={banner}
        alt="FACTURACIÓN"
      />
    </div>
  )
}

export default Banner;