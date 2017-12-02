import React from 'react';
import BillingDataFieldContainer from './BillingDataField/BillingDataFieldContainer';
import YellowButtons from '../../../YellowButtons/YellowButtons';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import './BillingDataForm.css';

const mapState = ({ rfc }) => ({ initialValues: rfc });

const dispatchState = dispatch => ({ onBackClick: () => dispatch({type: 'HOME'})});

let BillingDataForm = ({ handleSubmit, onBackClick }) => (
  <form className="BillingDataForm" onSubmit={ handleSubmit((values, dispatch) =>
    dispatch({ type: 'REPLACE_INTO_BILLING_DATA', payload: values })
  )}>
    <BillingDataFieldContainer />
    <YellowButtons onBackClick={onBackClick} content='Guardar y Continuar'/>
  </form>
);

BillingDataForm = reduxForm({
  form: 'billing'
})(BillingDataForm);

export default connect(mapState, dispatchState)(BillingDataForm);