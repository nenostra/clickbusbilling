import React from 'react';
import './YellowButtons.css';

function YellowButtons({ onBackClick, onSubmitClick, content }) {
  return (
    <div className="YellowButtons-buttons">
      <button
        className="YellowButtons-submit YellowButtons-submit-left"
        onClick={onBackClick}
      >
        <span className="YellowButtons-submit-text">
          Regresar
        </span>
      </button>
      <button
        className="YellowButtons-submit YellowButtons-submit-right"
        type="submit"
        onClick={onSubmitClick}
      >
        <span className="YellowButtons-submit-text">
          {content}
        </span>
      </button>
    </div>
  );
}

export default YellowButtons;