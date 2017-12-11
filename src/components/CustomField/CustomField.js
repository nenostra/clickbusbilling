import React from 'react';
import {Field} from 'redux-form';
import RenderField from '../RenderField/RenderField';
import './CustomField.css';

export const required = value => (value ? undefined : 'Requerido');

function CustomField({ content, style, name, validate, className = "CustomField-input-text", type = "text" }) {
  return (
    <Field
      labelClassName="CustomField-label"
      formClassName={className}
      name={name}
      content={content}
      style={style}
      component={RenderField}
      type={type}
      label={name}
      validate={validate ? required : undefined}
    />
  );
}

export default CustomField;