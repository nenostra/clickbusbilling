import React from 'react';
import BusLineInfo from './BusLineInfo';

const busLines = [
  {
    id: 14,
    name: 'Grupo ADO',
    phone: '01 800 369 4652',
    url: 'http://factura.grupoado.com.mx/'
  },
  {
    id: 6,
    name: 'Tufesa',
    phone: '01 800 737 8833',
    url: 'http://www.tufesa.com.mx/general/factura.html'
  },
  {
    id: 11,
    name: 'Grupo Vencedor',
    phone: '01 800 837 2222',
    url: 'http://grupovencedor.com/autofacturacion/'
  },
  {
    id: 16,
    name: 'Autobuses ACN',
    phone: '01 800 369 4652',
    url: 'https://www.acnautobuses.com/factura.php'
  },
  {
    id: 15,
    name: 'RedCoach',
    phone: '+1 877 733 0724',
    url: ''
  },
];

const BusLineInfoContainer = () =>  (
  <div>
    {busLines.map((busline, index) => {
      const style = {backgroundColor: index % 2 === 0 ? 'white': '#f9f9f9'};
      const { id, name, phone, url } = busline;
      return <BusLineInfo
               key={id}
               name={name}
               phone={phone}
               url={url}
               style={style}
             />;
    })}
  </div>
);

export default BusLineInfoContainer;