import React from 'react';
import BillingDataForm from './BillingDataForm/BillingDataForm';
import './BillingData.css';
import { connect } from 'react-redux';

const mapState = ({ rfc }) => ({ rfc });

function BillingData({ rfc }) {
  return (
    !rfc.rfc ? null : <div className="BillingData">  {/*TODO: CAMBIAR NULL POR COMPONENTE DE ERROR*/}
      <div className="BillingData-title">
        Datos Fiscales
      </div>
      <div className="BillingData-form-position">
        <div className="BillingData-rfc">
          RFC: <span className="BillingData-rfc-value">
        {rfc.rfc}
      </span>
        </div>
        <BillingDataForm />
      </div>
    </div>
  );
}

export default connect(mapState)(BillingData);