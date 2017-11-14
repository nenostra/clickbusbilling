import React from 'react';
import './Home.css';
import RfcForm from './RfcForm/RfcForm';
import HomeContent from './HomeContent/HomeContent';
import FeeBilling from './FeeBilling/FeeBilling';
import TicketBilling from './TicketBilling/TicketBilling';

const Home = () => (
  <div>
    <div className="Home-margin">
      <HomeContent />
      <div className="Home-fee-billing-position">
        <FeeBilling />
        <RfcForm />
      </div>
      <div className="Home-ticket-billing-position">
        <TicketBilling />
      </div>
    </div>
  </div>
);

export default Home;