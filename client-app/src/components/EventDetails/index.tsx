import React, { useState } from 'react';
import ImageCarousel from '../ImageCarousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import { faCalendarAlt, faMapMarkerAlt, faHeart as fasHeart } from '@fortawesome/free-solid-svg-icons';
import { faShareAlt, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import Button from '../UI/Button';

interface Event {
    name: string;
    organizer: string;
    date: string;
    location: string;
    description: string;
    images: string[]; //image carousel property
}

interface EventDetailsProps {
    event: Event;
}

const EventDetails: React.FC<EventDetailsProps> = ({ event }) => {

    const [isWishlisted, setIsWishlisted] = useState(false);

    const toggleWishlist = () => {
        setIsWishlisted(!isWishlisted);
    };

    const incrementTicketCount = () => {
        setTicketCount(prevCount => prevCount + 1);
    };

    const decrementTicketCount = () => {
        setTicketCount(prevCount => (prevCount > 1 ? prevCount - 1 : 1));
    };

    const [ticketCount, setTicketCount] = useState(1);
    const ticketPrice = 9.99;

    return (
    
    <div className="bg-white shadow-lg rounded-lg p-8 my-5 mx-auto max-w-7xl">
            
            <ImageCarousel images={event.images} />
            
            <div className="flex flex-wrap -mx-4 mt-4">
                
                <div className="w-full lg:w-2/3 px-4">
                    <h1 className="text-5xl font-bold text-gray-900 mb-3">{event.name}</h1>
                    <div className="flex justify-between items-center">
                        
                    </div>
                    <p className="text-md text-gray-700 font-bold">Organized by:</p>
                    <p className="text-gray-900 font-semibold mb-3">{event.organizer}</p>
                    <p className="text-md text-gray-700 font-bold">Date and Time:</p>
                    <p className="text-gray-900 font-semibold mb-3">{event.date}</p>
                    <p className="text-md text-gray-700 font-bold">Location:</p>
                    <p className="text-gray-900 font-semibold mb-3">{event.location}</p>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">About the Event</h2>
                    <p className="text-gray-700 mb-3">{event.description}</p>
                </div>

     {/* Ticket Purchase Section */}
     <div className="w-full md:w-1/3 p-4 border-t md:border-t-0 md:border-l">
                    <div className="border p-4 rounded-md">
                        <h3 className="text-lg font-bold mb-4">Get tickets</h3>
                        <div className="flex items-center mb-4">
                            <Button onClick={decrementTicketCount} className="px-3 py-1 border rounded-l-md">
                                <FontAwesomeIcon icon={faMinus} />
                            </Button>
                            <input
                                type="text"
                                className="w-12 text-center border-t border-b"
                                value={ticketCount}
                                readOnly
                            />
                            <Button onClick={incrementTicketCount} className="px-3 py-1 border rounded-r-md">
                                <FontAwesomeIcon icon={faPlus} />
                            </Button>
                        </div>
                        <div className="mb-4">
                            <span className="text-lg">Price: </span>
                            <span className="text-lg">CA${(ticketCount * ticketPrice).toFixed(2)}</span>
                        </div>
                        <button className="bg-red-500 text-white px-4 py-2 rounded-md w-full">Get tickets</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventDetails;