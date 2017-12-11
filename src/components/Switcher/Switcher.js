import React from 'react';
import Async from 'react-code-splitting';
import { connect } from 'react-redux';

const Home = () => <Async load={import('./Home/Home')} />;
const BillingData = () => <Async load={import('./BillingData/BillingData')} />;
const SendBilling = () => <Async load={import('./SendBilling/SendBilling')} />;
const PreviewOrder = () => <Async load={import('./PreviewOrder/PreviewOrder')} />;

export const routesMap = {
  HOME: '/',
  BILLING_DATA: '/datos-fiscales',
  SEND_BILLING: '/enviar-factura',
  PREVIEW_ORDER: '/vista_previa'
};
 
const mapState = ({ location }) => ({ page: location.type });

const Switcher = ({ page }) => {
  switch(page) {
  case 'HOME'         : return <Home />;
  case 'BILLING_DATA' : return <BillingData />;
  case 'SEND_BILLING' : return <SendBilling />;
  case 'PREVIEW_ORDER': return <PreviewOrder />;
  default: return null;
  }
};

export default connect(mapState)(Switcher);