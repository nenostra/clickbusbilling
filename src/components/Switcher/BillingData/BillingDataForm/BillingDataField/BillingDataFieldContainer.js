import React from 'react'
import CustomField from '../../../../CustomField/CustomField';

const billingData = [
  {
    name: 'name',
    content: 'Nombre, Denominación o Razón Social',
    required: true
  },
  {
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
  },
  {
    name: 'zipcode',
    content: 'Código Postal',
    required: false
  },
  {
    name: 'payment_method',
    content: 'Método de pago',
    required: true
  }
];

const BillingDataFieldContainer = () => (
  <div>
    {billingData.map(({ name, content }, index) => {
      const style = {backgroundColor: index % 2 !== 0 ? 'white': '#f9f9f9'};
      return <CustomField key={index} name={name} content={content} style={style}/>
      })
    }
    <CustomField name="verify" content="He verificado que mis datos y confirmo que son correctos:" type="checkbox"
      className="CustomField-checkbox-style" style={{backgroundColor: '#f9f9f9'}}/>
  </div>
);

export default BillingDataFieldContainer;