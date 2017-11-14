import React from 'react';
import './BusLineInfo.css';
import grayArrow from './gray-arrow.png';
import yellowPhone from './yellow-phone.png';

const BusLineInfo = ({name, phone, url, style}) => (
  <div className="BusLineInfo" style={style}>
    <div className="BusLineInfo-column">
      <span className="BusLineInfo-column-content">{name}</span>
    </div>
    <div className="BusLineInfo-column">
      <img className="BusLineInfo-yellow-phone-icon" src={yellowPhone} alt="yellow-phone" />
      <span className="BusLineInfo-column-content">{phone}</span>
      <a href={url} target="_blank"><img className="BusLineInfo-gray-arrow-icon" src={grayArrow} alt="gray-arrow" /></a>
    </div>
  </div>
);

export default BusLineInfo;