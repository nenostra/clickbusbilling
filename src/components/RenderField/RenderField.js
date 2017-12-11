import React from 'react';

const RenderField = ({ meta: { touched, error, warning }, style, content, labelClassName, formClassName, input,
                       label, type }) => (
  <div style={style}>
    <label
      className={labelClassName}
      htmlFor={label}
    >
      {content}
      {touched &&
      ((error && <span style={{color: 'red', fontSize: 14}}> {error}</span>) ||
      (warning && <span> {warning}</span>)) /* TODO: ESTILIZAR ERRORES!!*/}
    </label>
    <div>
      <input
        {...input}
        className={formClassName}
        type={type}
      />
    </div>
  </div>
);

export default RenderField;