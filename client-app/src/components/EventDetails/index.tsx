import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaHeart, FaRegHeart, FaUser, FaShareAlt, FaCalendarAlt, FaMapMarkedAlt} from "react-icons/fa";
import { useWishlist } from "../../context/WishlistContext";
import Container from "../Container";
import Button from "../UI/Button";
import ImageCarousel from "../ImageCarousel";
import ShareModal from "../ShareModal";
import TicketPurchaseModal from "../TicketPurchaseModal";
import { getEventsbyId } from '../../services/EventService';
import { debug } from "console";


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

interface EventDetailsProps {
  eventId: string | undefined;
}

const EventDetails: React.FC<EventDetailsProps> = ({ eventId }) => {
  console.log( "ahar ",eventId);
  const [event, setEvent] = useState<EventDetails | null>();
  debugger;
  console.log("event", event);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();
  const isWishlisted = wishlist.some(e => e.id === event?._id);

  const [showTicketModal, setShowTicketModal] = useState(false);
  // Share Modal
  const [showShareModal, setShowShareModal] = useState(false);
  const urlToShare = window.location.href;

  const [ticketCount, setTicketCount] = useState(1);
  const ticketPrice = 9.99;

  // const toggleWishlist = () => {
  //   if(event){
  //     if (isWishlisted) {
  //     removeFromWishlist(event?._id);
  //     } else {
  //     addToWishlist(event);
  //     }
  //   }
  // };

useEffect(() => {
  debugger;
    if (eventId) {
        fetchEventById(eventId).then(setEvent);
        debugger;
        console.log("event useeffect ", event);
    }
}, [eventId]);


  useEffect(() => {
    if (showTicketModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [showTicketModal]);

  // Function to handle the checkout process
  const handleCheckout = () => {
    navigate(`/faqs`);
    setShowTicketModal(false);
  };

 
  return (
    <Container>
      <div className="relative bg-white shadow-lg rounded-lg p-8 my-5 mx-auto max-w-7xl">
         <ImageCarousel images={event?.titlePicture} /> 
        <div className="flex flex-col lg:flex-row -mx-4 mt-4">
          <div className="w-full lg:w-2/3 px-4">
            <div className="flex justify-between items-start">
              <h1 className="text-3xl lg:text-5xl font-bold text-title-color mb-3">
                {event?.eventName}
              </h1>
              <div className="flex items-center space-x-2">
                <button
                  // onClick={toggleWishlist}
                  className="ml-2 text-red-500 flex items-center"
                >
                  <div style={{ padding: "0 px 5px" }}>
                    {isWishlisted ? <FaHeart size={30} /> : <FaRegHeart size={25} />}
                  </div>
                </button>
                <Button
                  onClick={() => setShowShareModal(true)}
                  className="text-blue-500 hover:text-blue-700 text-2xl lg:text-3xl"
                  aria-label="Share Event"
                >
                  <FaShareAlt size={25}></FaShareAlt>
                </Button>
                {/* Share Modal */}
                <ShareModal
                  url={urlToShare}
                  isOpen={showShareModal}
                  onClose={() => setShowShareModal(false)}
                />
              </div>
            </div>
            {/* Organizd by */}
            <div className="mb-3 flex items-center">
              <div style={{ padding: "15px" }}>
                <FaUser size={25}></FaUser>
              </div>
              <span className="text-lg text-gray-700 font-bold">
                Organized by:
              </span>
              <p className="text-gray-900 font-semibold ml-2">
                {event?.organizer}
              </p>
            </div>
            {/* Date & Time */}
            <div className="mb-3 flex items-center">
              <div style={{ padding: "15px" }}>
                <FaCalendarAlt size={25}></FaCalendarAlt>
              </div>
              <span className="text-lg text-gray-700 font-bold">
                Date and Time:
              </span>
              <p className="text-gray-900 font-semibold ml-2">{event?.eventStartDateTime}</p>
            </div>
            {/* Location */}
            <div className="mb-3 flex items-center">
              <div style={{ padding: "15px" }}>
                <FaMapMarkedAlt size={25}></FaMapMarkedAlt>
              </div>
              <span className="text-lg text-gray-700 font-bold">Location:</span>
              <p className="text-gray-900 font-semibold ml-2">
                {event?.details?.venue}
              </p>
            </div>

            <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">
              About the Event
            </h2>
            <p className="text-gray-700 mb-3">{event?.details?.description}</p>
          </div>

          {/* Ticket Purchase Section */}
          <div className="w-full lg:w-1/3 px-4 mt-4 lg:mt-0">
            <div className="border p-4 rounded-md">
              <h3 className="text-xl lg:text-lg font-bold mb-4 text-center">
                Get tickets
              </h3>
              <div className="mb-4 text-center">
                <span className="text-lg font-bold">Price: </span>
                <span className="text-lg font-bold">
                  CA${(ticketCount * ticketPrice).toFixed(2)}
                </span>
              </div>
              <Button
                onClick={() => setShowTicketModal(true)}
                className="bg-red-500 text-white px-4 py-2 rounded-md w-full"
                color="error"
              >
                Register
              </Button>
              {/* </TicketPurchaseModal */} 
               <TicketPurchaseModal
                isOpen={showTicketModal}
                onClose={() => setShowTicketModal(false)}
                onCheckout={handleCheckout}
                event={event}
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};


export async function fetchEventById(eventId: string): Promise<any| null> {
  try {
    const response = await getEventsbyId(eventId);
    // const response = await fetch(`http://localhost:8000/api/event/${eventId}`);
    console.log(response.data);
    //const data = await response.json();
    const data = await response.data.data;
    console.log("response is ", response);
    debugger;
    if (response?.data) {

      console.log("response.data  :", response.data);
      const event = {
        details: data.details,
        _id: data._id,
        eventName: data.eventName,
        organizer: data.organizer,
        titlePicture: data.titlePicture,
        pictures: data.pictures,
        topic: data.topic,
        categories: data.categories,
        eventStartDateTime: data.eventStartDateTime,
        eventEndDateTime: data.eventEndDateTime,
        isActive: data.isActive,
        isPaidEvent: data.isPaidEvent,
        price: data.price,
        createdAt: data.createdAt,
        updatedAt: data.updatedAt,
      };

      console.log("Event Details ahar 3 :", event);
      return event;
    } else {
      console.error('Failed to fetch event:', response.message);
      return null;
    }
  } catch (error) {
    console.error('Error fetching event:', error);
    return null;
  }
}



export default EventDetails;