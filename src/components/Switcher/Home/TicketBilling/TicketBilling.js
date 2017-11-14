import React from 'react';
import BusLineInfoContainer from './BusLineInfo/BusLineInfoContainer';
import './TicketBilling.css';
import ticketBillingIcon from './ticket-billing-icon.png';

const TicketBilling = () => (
  <div className="TicketBilling">
    <div className="TicketBilling-title">
      <img src={ticketBillingIcon} alt="fee-billing-icon"/>
      <span className="TicketBilling-title-text">Facturación de boletos</span>
    </div>
    <div className="TicketBilling-list">
      <ul>
        <li className="TicketBilling-list-dot">
          <p className="TicketBilling-list-element-content">
            Acceder al enlace de la autolínea con la que adquirió su(s) boleto(s) y seguir el proceso establecido por
            cada empresa.
          </p>
        </li>
      </ul>
    </div>
    <div className="TicketBilling-busline-info-container">
      <div className="TicketBilling-buslines-info-title">
        Autolínea
      </div>
      <div className="TicketBilling-buslines-info-title">
        Teléfono
      </div>
      <BusLineInfoContainer />
    </div>
  </div>
);

export default TicketBilling;