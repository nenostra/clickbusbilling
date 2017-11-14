export const required = value => (value ? undefined : 'Requerido');

export const rfcValidate = value => {
  const rfc = value.trim().toUpperCase();
  const regex = /^([A-ZÑ&]{3,4}) ?(?:- ?)?(\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])) ?(?:- ?)?([A-Z\d]{2})([A\d])$/;
  let valid = rfc.match(regex);
  
  return valid ? undefined : 'RFC Invalido';
};
