import React from 'react';
import OrderItem from './OrderItem/OrderItem';
import { connect } from 'react-redux';

const mapState = ({ orderItems }) => ({ orderItems });

function OrderItemContainer({ orderItems }) {
  return (
    <div>
      {
        orderItems.map((orderItem, index)=> {
            const { date, busline, departure, arrival, passengerList, serviceFee } = orderItem;
            const dateArr = date.split("T");
             return (
              <OrderItem
                key={index}
                context={orderItems.length > 1 ? index : null}
                date={dateArr[0]}
                hour={dateArr[1].substr(0,5)}
                busline={busline}
                from={departure}
                to={arrival}
                passengerList={passengerList}
                fee={serviceFee}
              />
            )
          }
        )
      }
    </div>
  )
}

export default connect(mapState)(OrderItemContainer);