import React from 'react'
import { Field } from 'redux-form';
import CustomField from '../../../../CustomField/CustomField';

const billingData = [
  {
    name: 'name',
    content: 'Nombre, Denominación o Razón Social',
    required: false
  },
  /*{
    name: 'street',
    content: 'Calle',
    required: false
  },
  {
    name: 'exterior_number',
    content: 'Número exterior',
    required: false
  },
  {
    name: 'interior_number',
    content: 'Número interior',
    required: false
  },
  {
    name: 'colony',
    content: 'Colonia',
    required: false
  },
  {
    name: 'city',
    content: 'Municipio o Delegación',
    required: false
  },
  {
    name: 'location',
    content: 'Localidad',
    required: false
  },
  {
    name: 'state',
    content: 'Entidad Federativa',
    required: false
  },*/
  {
    name: 'zipcode',
    content: 'Código Postal',
    required: true
  }
];

const BillingDataFieldContainer = () => (
  <div>
    {billingData.map(({ name, content, required }, index) => {
      const style = {backgroundColor: index % 2 !== 0 ? 'white': '#f9f9f9'};
      return <CustomField
               key={index}
               name={name}
               content={content}
               style={style}
               validate={required}
             />
      })
    }
    <div style={{ backgroundColor: "#f9f9f9"}}>
      <label
        className="CustomField-label"
        htmlFor="payment_method"
      >
        Forma de Pago
      </label>
      <Field
        name="payment_method"
        component="select"
        className="CustomField-input-text"
        style={{ backgroundColor: "white"}}
      >
        <option value="04">Tarjeta de Crédito</option>
        <option value="28">Tarjeta de Débito</option>
        <option value="01">Efectivo (Pago en Tienda)</option>
        <option value="03">Transferencia Bancaria (Pago en Ventanilla o SPEI)</option>
      </Field>
    </div>
    <CustomField
      name="verify"
      content="He verificado que mis datos y confirmo que son correctos:"
      type="checkbox"
      className="CustomField-checkbox-style"
      style={{backgroundColor: 'white'}}
      validate={true}
    />
  </div>
);

export default BillingDataFieldContainer;