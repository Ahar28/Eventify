import React from 'react';
import EventDetails from '../../components/EventDetails';
import { useLocation } from "react-router-dom";

const EventPage: React.FC = () => {

    const location = useLocation();
    const event = location.state.event;
    // console.log(event);
 
    return (
             <div className="flex justify-center items-center min-h-screen bg-gray-100">
                <EventDetails event={event} />
            </div>);
};

export default EventPage;