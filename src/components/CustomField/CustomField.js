import React from 'react';
import { Field } from 'redux-form';
import RenderField from '../RenderField/RenderField';
import './CustomField.css';

export const required = value => (value ? undefined : 'Requerido');

const CustomField = ({ className ="CustomField-input-text", content, style, key, validate,
                       type = "text", name}) => (
  <Field labelClassName="CustomField-label" formClassName={className} key={key}
         name={name} content={content} style={style} component={RenderField} type={type} label={name}
         validate={required} />
);

export default CustomField;