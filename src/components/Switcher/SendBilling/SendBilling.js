import React from 'react';
import CustomField from '../../CustomField/CustomField';
import YellowButtons from '../../YellowButtons/YellowButtons';
import SelectRow from './SelectRow/SelectRow';
import './SendBilling.css';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';

const initialValues = {
  emit: 'emit',
  busline: 'booking_engine_ado'
};

const dispatchState = dispatch => ({ onBackClick: () => dispatch({type: 'BILLING_DATA'})});

let SendBilling = ({ onBackClick, handleSubmit }) => (
  <form className="SendBilling" onSubmit={ handleSubmit((values, dispatch) => {
    console.log(values)
    dispatch({ type: 'REVIEW_OR_RESEND', payload: values })
  }
  
  )}>
    <div className="SendBilling-title">Seleccione una opción</div>
    <SelectRow />
    <CustomField name="ticket_number" content="Número de operación: " style={{backgroundColor: 'white'}}/>
    <CustomField name="email" content="Correo eléctronico: " style={{backgroundColor: '#f9f9f9'}}/>
    <YellowButtons onBackClick={onBackClick} content="Continuar"/>
  </form>
);

SendBilling = reduxForm({
  form: 'sendBilling',
  initialValues
})(SendBilling);

export default connect( null, dispatchState)(SendBilling);