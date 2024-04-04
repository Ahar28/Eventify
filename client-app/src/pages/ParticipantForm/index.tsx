import React from 'react';
import ParticipantForm from '../../components/ParticipantForm';
import { useLocation } from 'react-router-dom'; 

interface TicketOption {
  type: string;
  price: number;
  quantity: number;
}

interface EventDetails {
  details: {
    description: string;
    venue: string;
    additionalInfo?: string;
  };
  _id: string;
  eventName: string;
  organizer: string;
  titlePicture: string;
  pictures: string[];
  topic: string;
  categories: string[];
  eventStartDateTime: string;
  eventEndDateTime: string;
  isActive: boolean;
  isPaidEvent: boolean;
  price: number;
  createdAt: string;
  updatedAt: string;
}



const ParticipantInfoPage: React.FC = () => {

  const location = useLocation();
  
  
  //const { ticketQuantities } = location.state as { ticketQuantities: { [type: string]: number }};
  const { ticketQuantities, ticketOptions, event } = location.state as { ticketQuantities: { [type: string]: number }, ticketOptions: TicketOption[], event: EventDetails};
  debugger;

  return (

    <div className="max-w-7xl mx-auto px-4 py-8 shadow-lg rounded-lg">
      {/* Headings with Background Color */}
      <div className="bg-gray-100 p-4 rounded-md">
        <h1 className="text-4xl font-bold text-title-color mb-2">{event.eventName}</h1>
        {/* <h3 className="text-2xl text-gray-600 mb-1">{event.eventStartDateTime}</h3> */}
        <h3 className="text-xl text-gray-500 mb-2 mt-2">{new Date(event?.eventStartDateTime).toLocaleString()}</h3>
        <h4 className="text-xl text-gray-500 mb-4">{event?.details.additionalInfo}</h4>
      </div>
      
      {/* Thematic Break / Divider */}
      <div className="border-t border-gray-300 my-6"></div>
        {/* Participant Form */}
      <ParticipantForm ticketQuantities={ticketQuantities} ticketOptions={ticketOptions} eventdetails={event}/>
    </div>
  );
};

export default ParticipantInfoPage;