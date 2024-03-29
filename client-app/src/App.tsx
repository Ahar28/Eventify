import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import EventRoutes from './routes';
// import PaymentForm from './components/PaymentForm';
// import { loadStripe } from '@stripe/stripe-js';
// import { Elements } from '@stripe/react-stripe-js';
// const stripePromise = loadStripe('pk_test_51Oy0ngDOaOzbdR3fZLhzKKLUCyZeZhYPa1yqTne7k7na3Bj1EiGxTdFeZVfmoI0lDNy8CiMMlkSJFR1e5N0EULCV000xB5sXkf');


function App() {
  return (
    // <Elements stripe={stripePromise}>
    <div className="App">
      {/* <PaymentForm/> */}
      <Navbar />
      <EventRoutes />
      <Footer />
    </div>
    // </Elements>
  );
}

export default App;
