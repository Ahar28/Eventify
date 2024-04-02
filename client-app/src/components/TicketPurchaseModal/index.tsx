import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Button from "../UI/Button";
import Container from "../Container";

//   interface Event {
//   id: string;
//   name: string;
//   organizer: string;
//   date: string;
//   location: string;
//   description: string;
//   image: string;
// }

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

interface TicketOption {
  type: string;
  price: number;
  quantity: number;
}

interface TicketPurchaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCheckout: () => void;
  // event: Event ;
  event: EventDetails | null | undefined;
}

const TicketPurchaseModal: React.FC<TicketPurchaseModalProps> = ({
  isOpen,
  onClose,
  // onCheckout,
  event,
}) => {
  const navigate = useNavigate();
  const [ticketOptions, setTicketOptions] = useState<TicketOption[]>([
    { type: " Adult ", price: 11.87, quantity: 0 },
    { type: " Children (above 10 yrs age)", price: 16.77, quantity: 0 },
    { type: " Children (below 10 yrs age)", price: 13.77, quantity: 0 },
  ]);

  // Function to update the quantity of tickets
  const updateQuantity = (index: number, delta: number) => {
    setTicketOptions((currentTickets) =>
      currentTickets.map((ticket, i) =>
        i === index
          ? { ...ticket, quantity: Math.max(ticket.quantity + delta, 0) }
          : ticket
      )
    );
  };

  // Function to calculate subtotal
  const calculateSubtotal = () => {
    return ticketOptions.reduce(
      (total, ticket) => total + ticket.price * ticket.quantity,
      0
    );
  };

  // Function to calculate fees (assuming fees are included in the ticket price)
  const calculateFees = () => {
    const fees = ticketOptions.reduce(
      (fees, ticket) => fees + ticket.price * ticket.quantity * 0.15,
      0
    );
    return fees;
  };

  // Function to calculate total
  const calculateTotal = () => {
    return calculateSubtotal() + calculateFees();
  };

  // Modified onCheckout function
  const [showTicketModal, setShowTicketModal] = useState<boolean>(true);

  const handleCheckout = () => {
    // Preparing the ticketQuantities object to pass to ParticipantInfoPage
    const ticketQuantities = ticketOptions.reduce((acc, { type, quantity }) => {
      if (quantity > 0) acc[type] = quantity;
      return acc;
    }, {} as { [type: string]: number });

    // Navigate to ParticipantInfoPage with state
    navigate(`/events/${event?._id}/register/participant-info`, { state: { ticketQuantities, ticketOptions, event } });
    setShowTicketModal(false); // to close the modal on checkout
  };

  if (!isOpen) return null;

  return (
    <Container>
      <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto z-50 flex justify-center items-start pt-10 pb-10">
        <div
          className="relative bg-white rounded-lg shadow-xl m-auto my-0 sm:w-4/5 lg:w-3/4 xl:w-1/2  h-4/5 max-h-4/5 overflow-auto"
          style={{ width: "1200px", height: "600px" }}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-0 right-0 m-4" // to Position it absolutely to the top-right of its relative parent
          >
            <FaTimes size={18} />
          </button>
          <div className="flex flex-col lg:flex-row h-full">
            {/* Ticket selection area (2/3 width) */}
            <div className="w-full lg:w-2/3 border-r p-8 overflow-auto">
              {/* <h1 className="text-xl font-bold text-gray-900 mb-4">{event.name}</h1> */}
              <h1 className="text-xl font-bold text-gray-900 mb-4 relative pb-2">
                <span className="pr-4">{event?.eventName}</span>
                <span className="absolute bottom-0 left-0 w-full h-1 bg-gray-300"></span>
              </h1>
              {ticketOptions.map((ticket, index) => (
                <div key={index} className="mb-4">
                  <h3 className="text-lg ">{ticket.type}</h3>
                  <div className=" border-b border-gray-300">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Button
                          onClick={() => updateQuantity(index, -1)}
                          variant="text"
                        >
                          -
                        </Button>
                        <span className="mx-2">{ticket.quantity}</span>
                        <Button
                          onClick={() => updateQuantity(index, 1)}
                          variant="text"
                        >
                          +
                        </Button>
                      </div>
                      <span>CA${ticket.price.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order summary area (1/3 width) */}
            <div className="w-full lg:w-1/3 p-8 overflow-auto bg-gray-100">
              <div className="mb-4">
                <img
                  src={event?.titlePicture}
                  alt={event?.eventName}
                  className="w-full h-32 mb-4 object-cover rounded-lg"
                />
                <h2 className="text-xl font-semibold mb-4">Order summary</h2>
                <div className="border-b border-gray-300 mb-4">
                  {/* {ticketOptions.map((ticket, index) => (
                  <p key={index}>{ticket.quantity} x {ticket.type} - CA${(ticket.quantity * ticket.price).toFixed(2)}</p>
                ))} */}
                  {ticketOptions.map((ticket, index) => (
                    <div key={index} className="py-2 border-b border-gray-300">
                      <div className="flex justify-between items-center">
                        <span>
                          {ticket.quantity} x {ticket.type}
                        </span>
                        <span>
                          CA${(ticket.quantity * ticket.price).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                {/* <div className="flex justify-between mb-2">
                <p>Subtotal: CA${calculateTotal()}</p> */}
                <div className="flex justify-between mb-2">
                  <span>Subtotal</span>
                  <span>CA${calculateSubtotal().toFixed(2)}</span>
                </div>
                {/* 
                <p>Total: CA${calculateTotal()}</p> */}
                <div className="flex justify-between mb-2">
                  <span>Fees</span>
                  <span>CA${calculateFees().toFixed(2)}</span>
                </div>
                <div className="flex justify-between mb-2 font-semibold">
                  <span>Total</span>
                  <span>CA${calculateTotal().toFixed(2)}</span>
                </div>
              </div>
              <Button
                onClick={handleCheckout}
                className="bg-red-500 text-white px-4 py-2 rounded-lg w-full mt-4"
                color="error"
              >
                Checkout
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default TicketPurchaseModal;
