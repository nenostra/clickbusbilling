import React from 'react';
import CustomField from '../../CustomField/CustomField';
import YellowButtons from '../../YellowButtons/YellowButtons';
import SelectRow from './SelectRow/SelectRow';
import './SendBilling.css';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';

const initialValues = {
  emit: 'emit',
  busline: '14'
};

const dispatchState = dispatch => ({ onBackClick: () => dispatch({type: 'BILLING_DATA'})});

let SendBilling = ({ onBackClick }) => (
  <div className="SendBilling">
    <div className="SendBilling-title">Seleccione una opción</div>
    <SelectRow />
    <CustomField name="ticket-number" content="Número de operación: " style={{backgroundColor: 'white'}}/>
    <CustomField name="email" content="Correo eléctronico: " style={{backgroundColor: '#f9f9f9'}}/>
    <YellowButtons onBackClick={onBackClick} content="Continuar"/>
  </div>
);

SendBilling = reduxForm({
  form: 'sendBilling',
  initialValues
})(SendBilling);

export default connect( null, dispatchState)(SendBilling);