import React from 'react';
import YellowButtons from '../../YellowButtons/YellowButtons';
import OrderItemContainer from './OrderItemContainer/OrderItemContainer';
import { connect } from 'react-redux';
import './PreviewOrder.css';

const dispatchState = dispatch => ({ onBackClick: () => dispatch({type: 'SEND_BILLING'})});

function PreviewOrder({ onBackClick }) {
  return (
    <div className="PreviewOrder">
      <div className="PreviewOrder-title">
        Detalles de la orden a facturar
      </div>
      <OrderItemContainer />
      <YellowButtons onBackClick={onBackClick} content="Aceptar"/>
    </div>
  )
}

export default connect(null, dispatchState)(PreviewOrder);