import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import EventRoutes from './routes';

function App() {
  return (
    <div className="App">
      <Navbar />
      <EventRoutes />
      <Footer />
    </div>
  );
}

export default App;
