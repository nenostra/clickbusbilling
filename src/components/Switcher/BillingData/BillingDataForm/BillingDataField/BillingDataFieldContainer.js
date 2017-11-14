import React from 'react'
import CustomField from '../../../../CustomField/CustomField';

const billingData = [
  {
    name: 'name',
    content: 'Nombre, Denominación o Razón Social'
  },
  {
    name: 'street',
    content: 'Calle'
  },
  {
    name: 'exterior_num',
    content: 'Número exterior'
  },
  {
    name: 'interior_num', // TODO: NOT REQUIRED!!!
    content: 'Número interior'
  },
  {
    name: 'colony',
    content: 'Colonia'
  },
  {
    name: 'city',
    content: 'Municipio o Delegación'
  },
  {
    name: 'place',
    content: 'Localidad'
  },
  {
    name: 'state',
    content: 'Entidad Federativa'
  },
  {
    name: 'zipcode',
    content: 'Código Postal'
  },
  {
    name: 'payment_method',
    content: 'Método de pago'
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