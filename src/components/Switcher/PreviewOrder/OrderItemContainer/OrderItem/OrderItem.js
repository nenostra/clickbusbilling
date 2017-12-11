import React from 'react';
import './OrderItem.css';

function Orderitem({ date, context, hour, busline, from, to, passengerList, fee }) {
  return (
    <table className="OrderItem">
      {context !== null ?
        <thead>
        <tr>
          <th colSpan="2">
            {context === 0 ? 'Ida' : 'Regreso'}
          </th>
        </tr>
        </thead> :
        null
      }
      <tbody>
        <tr>
          <td className="OrderItem-titles">Fecha: </td>
          <td className="OrderItem-data">{ date }</td>
        </tr>
        <tr>
          <td className="OrderItem-titles">Salida: </td>
          <td className="OrderItem-data">{ hour }</td>
        </tr>
        <tr>
          <td className="OrderItem-titles">Autlinea: </td>
          <td className="OrderItem-data">{ busline }</td>
        </tr>
        <tr>
          <td className="OrderItem-titles">Corrida: </td>
          <td className="OrderItem-data">Desde: { from } <br />Hacia: { to} </td>
        </tr>
        <tr>
          <td className="OrderItem-titles">Pasajero(s): </td>
          <td className="OrderItem-data">
            {passengerList.map(passengerName => (
                <div>
                  { passengerName }
                </div>
              )
            )}
          </td>
        </tr>
        <tr>
          <td className="OrderItem-titles">Tasa: </td>
          <td className="OrderItem-data">MXN { fee }</td>
        </tr>
      </tbody>
    </table>
  )
}

export default Orderitem;