import React from 'react';
import './Header.css';
import logo from './logo-clickbus.png';
import headphones from './headphones.png';
import yellowArrow from './yellow-arrow.png';


const Header = () => (
  <div className="Header">
    <div className="Header-yellow-row"></div>
    <img className="Header-clickbus-logo" src={logo} alt="logo-clickbus"/>
    <div className="Header-contact-info">
      <img className="Header-headphones" src={headphones} alt="audífonos"/>
      <div className="Header-info-column">
        Int. de la República<br/>
        Ciudad de México
      </div>
      <div className="Header-info-column">
        <img className="Header-yellow-arrow" src={yellowArrow} alt="yellow-arrow" /><br/>
        <img className="Header-yellow-arrow" src={yellowArrow} alt="yellow-arrow" />
      </div>
      <div className="Header-info-column">
        <div className="Header-bold-info">
          01 800 681 1604<br/>
          4744 0276<br/>
        </div>
        09:00 - 21:00 hrs
      </div>
    </div>
  </div>
);

export default Header;