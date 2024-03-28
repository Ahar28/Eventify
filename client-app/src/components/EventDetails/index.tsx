import React, { useState,useEffect } from 'react';
import ImageCarousel from '../ImageCarousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser,faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import {faShareAlt, faMinus, faPlus, faCalendarAlt, faMapMarkerAlt, faHeart as fasHeart } from '@fortawesome/free-solid-svg-icons';
import Button from '../UI/Button';
import ShareModal from '../ShareModal';
import TicketPurchaseModal from '../TicketPurchaseModal';
import { useNavigate } from "react-router-dom";

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

    const navigate = useNavigate();
    
    const [isWishlisted, setIsWishlisted] = useState(false);

    const [showTicketModal, setShowTicketModal] = useState(false);

    const [ticketCount, setTicketCount] = useState(1);
    const ticketPrice = 9.99;

    // Share Modal
    const [showShareModal, setShowShareModal] = useState(false);
    const urlToShare = window.location.href; 

    // const handleClick = () => {
    //     navigate(`/faqs}`);
    //   };

    const toggleWishlist = () => {
        setIsWishlisted(!isWishlisted);
    };

    const incrementTicketCount = () => {
        setTicketCount(prevCount => prevCount + 1);
    };

    const decrementTicketCount = () => {
        setTicketCount(prevCount => (prevCount > 1 ? prevCount - 1 : 1));
    };

    useEffect(() => {
        if (showTicketModal) {
          document.body.style.overflow = 'hidden';
        } else {
          document.body.style.overflow = '';
        }
          // Clean up function to reset overflow when component unmounts or modal closes
    return () => {
        document.body.style.overflow = '';
      };
    }, [showTicketModal]);

     // Function to handle the checkout process
     const handleCheckout = () => {
        navigate(`/faqs`);
        setShowTicketModal(false);
    };

    return (
    
    // <div className="bg-white shadow-lg rounded-lg p-8 my-5 mx-auto max-w-7xl">
    <div className="relative bg-white shadow-lg rounded-lg p-8 my-5 mx-auto max-w-7xl">     
            <ImageCarousel images={event.images} />
            
            <div className="flex flex-col lg:flex-row -mx-4 mt-4">
                <div className="w-full lg:w-2/3 px-4">
                    <div className="flex justify-between items-start">
                        <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-3">{event.name}</h1>
                        <div className="flex items-center space-x-2">
                            <button 
                                onClick={toggleWishlist}
                                className={`text-2xl lg:text-3xl ${isWishlisted ? 'text-red-500' : 'text-gray-400'} hover:text-red-700 transition-colors`}
                                aria-label="Add to Wishlist"
                            >
                                <FontAwesomeIcon icon={isWishlisted ? fasHeart : farHeart} />
                            </button>
                            <Button 
                                 onClick={() => setShowShareModal(true)}
                                className="text-blue-500 hover:text-blue-700 text-2xl lg:text-3xl"
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

                    <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">About the Event</h2>
                    <p className="text-gray-700 mb-3">{event.description}</p>

                </div>

     {/* Ticket Purchase Section */}
     <div className="w-full lg:w-1/3 px-4 mt-4 lg:mt-0">
                    <div className="border p-4 rounded-md">
                        <h3 className="text-xl lg:text-lg font-bold mb-4 text-center">Get tickets</h3>
                        {/* <div className="flex items-center mb-4">
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
                        </div> */}
                        <div className="mb-4 text-center">
                            <span className="text-lg ">Price: </span>
                            <span className="text-lg">CA${(ticketCount * ticketPrice).toFixed(2)}</span>
                        </div>
                        <Button onClick={() => setShowTicketModal(true)} className="bg-red-500 text-white px-4 py-2 rounded-md w-full" color="error">Register</Button>
                         {/* TicketPurchaseModal */}
                         <TicketPurchaseModal isOpen={showTicketModal} event={event} onClose={() => setShowTicketModal(false)} onCheckout={handleCheckout} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventDetails;