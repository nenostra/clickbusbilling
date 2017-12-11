import React from 'react';
import './HomeContent.css';

function HomeContent() {
  return (
    <div className="HomeContent">
      <p className="HomeContent-welcome">
        Bienvenido(a) al portal de Facturación Electrónica de ClickBus México
      </p>
      <p className="HomeContent-process" >
        El proceso de facturación de boletos de autobús adquiridos a través de ClickBus
        se lleva a cabo en <b>dos</b> fases:
      </p>
      <ol>
        <li className="HomeContent-list-number">
          <div className="HomeContent-list-instructions">
          <span className="HomeContent-top-adjusted-text">
            El boleto integro se factura directamente con la autolínea con la que lo adquirió, abajo encontrará los
            enlaces y números de atención telefónica de cada autolínea
          </span>
          </div>
        </li>
        <li className="HomeContent-list-number">
        <span className="HomeContent-list-instructions">
          La tasa de servicio de ClickBus podrá ser facturada en esta página.
        </span>
        </li>
      </ol>
    </div>
  );
}

export default HomeContent;