import React, { useState } from 'react';
import ImageCarousel from '../ImageCarousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser,faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import {faShareAlt, faMinus, faPlus, faCalendarAlt, faMapMarkerAlt, faHeart as fasHeart } from '@fortawesome/free-solid-svg-icons';
import Button from '../UI/Button';
import ShareModal from '../ShareModal';

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

    // Share Modal
    const [showShareModal, setShowShareModal] = useState(false);
    const urlToShare = window.location.href; // or the specific URL you want to share

    return (
    
    // <div className="bg-white shadow-lg rounded-lg p-8 my-5 mx-auto max-w-7xl">
    <div className="relative bg-white shadow-lg rounded-lg p-8 my-5 mx-auto max-w-7xl">     
            <ImageCarousel images={event.images} />
            
            <div className="flex flex-wrap -mx-4 mt-4">
                
                <div className="w-full lg:w-2/3 px-4">
                    <div className="flex justify-between items-start">
                        <h1 className="text-5xl font-bold text-gray-900 mb-3">{event.name}</h1>
                        <div className="flex items-center space-x-2">
                            <button 
                                onClick={toggleWishlist}
                                className={`text-3xl ${isWishlisted ? 'text-red-500' : 'text-gray-400'} hover:text-red-700 transition-colors`}
                                aria-label="Add to Wishlist"
                            >
                                <FontAwesomeIcon icon={isWishlisted ? fasHeart : farHeart} />
                            </button>
                            <Button 
                                 onClick={() => setShowShareModal(true)}
                                className="text-blue-500 hover:text-blue-700 text-3xl"
                                aria-label="Share Event"
                            >
                                <FontAwesomeIcon icon={faShareAlt} />
                            </Button>
                            {/* Share Modal */}
                             <ShareModal url={urlToShare} isOpen={showShareModal} onClose={() => setShowShareModal(false)} />
                        </div>
                    </div>
                    {/* Organizd by */}
                    <div className="mb-3 flex items-center">
                        <FontAwesomeIcon icon={faUser} className="text-gray-700 mr-2" />
                        <span className="text-lg text-gray-700 font-bold">Organized by:</span>
                        <p className="text-gray-900 font-semibold ml-2">{event.organizer}</p>
                    </div>
                    {/* Date & Time */}
                    <div className="mb-3 flex items-center">
                        <FontAwesomeIcon icon={faCalendarAlt} className="text-gray-700 mr-2" />
                        <span className="text-lg text-gray-700 font-bold">Date and Time:</span>
                        <p className="text-gray-900 font-semibold ml-2">{event.date}</p>
                    </div>
                    {/* Location */}
                    <div className="mb-3 flex items-center">
                        <FontAwesomeIcon icon={faMapMarkerAlt} className="text-gray-700 mr-2" />
                        <span className="text-lg text-gray-700 font-bold">Location:</span>
                        <p className="text-gray-900 font-semibold ml-2">{event.location}</p>
                    </div>

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
                        <Button className="bg-red-500 text-white px-4 py-2 rounded-md w-full" color="error">Register</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventDetails;