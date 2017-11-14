import React from 'react';

const RenderField = ({ meta: { touched, error, warning }, style, content, labelClassName, formClassName, input,
                       label, type }) => (
  <div style={style}>
    <label className={labelClassName} htmlFor={label}>{content}</label>
    <div>
      <input {...input} className={formClassName} type={type} />
      {touched &&
      ((error && <span>{error}</span>) ||
      (warning && <span>{warning}</span>)) /* TODO: ESTILIZAR ERRORES!!*/}
    </div>
  </div>
);

export default RenderField;