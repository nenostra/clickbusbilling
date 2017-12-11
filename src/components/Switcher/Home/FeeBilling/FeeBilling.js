import React from 'react';
import './FeeBilling.css';
import feeBillingIcon from './fee-billing-icon.png';

function FeeBilling() {
  return (
    <div className="FeeBilling">
      <div className="FeeBilling-title">
        <img
          src={feeBillingIcon}
          alt="fee-billing-icon"/>
        <span className="FeeBilling-title-text">
          Facturación de tasa de servicio
        </span>
      </div>
      <div className="FeeBilling-list">
        <p className="FeeBilling-list-title">
          Aquí podrá
        </p>
        <ul>
          <li className="FeeBilling-list-dot">
            <p className="FeeBilling-list-element-content">
              Emitir su factura dentro de los 60 días siguientes a su consumo.
            </p>
          </li>
          <li className="FeeBilling-list-dot">
            <p className="FeeBilling-list-element-content">
              Recuperar una factura ya emitida con antigüedad no mayor a un año.
            </p>
          </li>
        </ul>
      </div>
      <div className="FeeBilling-list">
        <p className="FeeBilling-list-title">
          Consideraciones
        </p>
        <ul>
          <li className="FeeBilling-list-dot">
            <p className="FeeBilling-list-element-content">
              Una vez emitida la factura no se podrá reemitir a un RFC diferente ni corregir datos.
            </p>
          </li>
          <li className="FeeBilling-list-dot">
            <p className="FeeBilling-list-element-content">
              Si desea recuperar los archivos de una factura, es importante que conserve el boleto que fue enviado a su
              correo electrónico.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default FeeBilling;