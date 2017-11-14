import React from 'react';
import { Field } from 'redux-form';
import './SelectRow.css';

const SelectRow = () => (
  <div className="SelectRow">
    <div className="SelectRow-column">
      <label className="SelectRow-radio">
        <Field name="emit" component="input" type="radio" value="emit" className="Selectrow-radio-style"/>
        <span className="SelectRow-radio-text">Emitir Factura</span>
      </label>
      <label className="SelectRow-radio">
        <Field name="emit" component="input" type="radio" value="resend" className="Selectrow-radio-style"/>
        <span className="SelectRow-radio-text">Reenvío de Factura</span>
      </label>
    </div>
    <div className="SelectRow-column">
      <Field name="busline" component="select" className="SelectRow-select">
        <option value="booking_engine_ado">Grupo ADO</option>
        <option value="booking_engine_tufesa">Tufesa</option>
        <option value="booking_engine_vencedor">Grupo Vencedor</option>
        <option value="booking_engine_acn">Autobuses ACN</option>
        <option value="booking_engine_red_coach">RedCoach</option>
      </Field>
    </div>
  </div>
);

export default SelectRow;