import React from 'react';
import ParticipantForm from '../../components/ParticipantForm';
import { useLocation } from 'react-router-dom'; 


interface TicketOption {
  type: string;
  price: number;
  quantity: number;
}
interface Event {
  id: number;
  name: string;
  organizer: string;
  date: string;
  location: string;
  description: string;
  image: string ; //image carousel property
}

const ParticipantInfoPage: React.FC = () => {

  const location = useLocation();
  //const { ticketQuantities } = location.state as { ticketQuantities: { [type: string]: number }};
  const { ticketQuantities, ticketOptions, event } = location.state as { ticketQuantities: { [type: string]: number }, ticketOptions: TicketOption[], event: Event};

  return (

    <div className="max-w-7xl mx-auto px-4 py-8 shadow-lg rounded-lg">
      {/* Headings with Background Color */}
      <div className="bg-gray-100 p-4 rounded-md">
        <h1 className="text-4xl font-bold text-title-color mb-2">{event.name}</h1>
        <h2 className="text-3xl text-gray-700 mb-1">{event.organizer}</h2>
        <h3 className="text-2xl text-gray-600 mb-1">{event.date}</h3>
        <h4 className="text-xl text-gray-500 mb-4">{event.location}</h4>
      </div>
      
      {/* Thematic Break / Divider */}
      <div className="border-t border-gray-300 my-6"></div>
      
      <ParticipantForm ticketQuantities={ticketQuantities} ticketOptions={ticketOptions} />
    </div>
  );
};

export default ParticipantInfoPage;