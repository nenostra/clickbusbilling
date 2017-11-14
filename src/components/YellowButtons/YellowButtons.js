import React from 'react';
import './YellowButtons.css';

const YellowButtons = ({ onBackClick, onContinueClick, content }) => (
  <div className="YellowButtons-buttons">
    <button className="YellowButtons-submit YellowButtons-submit-left" onClick={onBackClick}>
      <span className="YellowButtons-submit-text">Regresar</span>
    </button>
    <button className="YellowButtons-submit YellowButtons-submit-right" type="submit">
      <span className="YellowButtons-submit-text">{content}</span>
    </button>
  </div>
);

export default YellowButtons;