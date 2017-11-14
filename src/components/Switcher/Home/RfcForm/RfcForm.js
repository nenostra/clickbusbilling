import React from 'react';
import RenderField from '../../../RenderField/RenderField';
import { required, rfcValidate } from './RfcFormValidations';
import { Field, reduxForm } from 'redux-form';
import './RfcForm.css';

const submitAndDispatch = (values, dispatch) => {
  const rfc = values.rfc.replace(/[^0-9a-zñ&]/gi, '').toUpperCase();
  dispatch({type: 'FETCH_RFC', payload: rfc});
};

const RfcForm = ({ handleSubmit }) => (
  <form className="RfcForm" onSubmit={ handleSubmit(submitAndDispatch)}>
    <div className="RfcForm-title">
      Para ingresar al sistema por favor indique su RFC
    </div>
    <div>
      <Field name="rfc" component={RenderField} type="text" formClassName="RfcForm-input" label="rfc"
             validate={[required, rfcValidate]} />
    </div>
    <button className="RfcForm-submit" type="submit">
      <span className="RfcForm-submit-text">Entrar</span>
    </button>
  </form>
);

export default reduxForm({
  form: 'home'
})(RfcForm);