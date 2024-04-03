import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaPrint, FaChevronDown, FaChevronUp } from "react-icons/fa";
import Container from "../Container";
import QRCode from "qrcode.react";
import Button from "../UI/Button";
import { Participant } from "../ParticipantForm";

interface TicketRegistration {
  _id: string;
  user: string;
  event: {
    eventName: string;
    eventStartDateTime: string;
    titlePicture: string;
    details: {
      description: string;
      venue: string;
    };
  };
  participants: Participant[];
}

const UserTickets = () => {
  const [registrations, setRegistrations] = useState<TicketRegistration[]>([]);
  const [expandedTicketId, setExpandedTicketId] = useState<string | null>(null);
  

  useEffect(() => {
    const fetchRegistrations = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/event/events-registered-byuser/660715320ad3be5199df27ac"
        );
        setRegistrations(response.data.data);
      } catch (error) {
        console.error("Error fetching registrations:", error);
      }
    };

    fetchRegistrations();
  }, []);

  const handleTicketClick = (ticketId: string) => {
    setExpandedTicketId(expandedTicketId === ticketId ? null : ticketId);
  };

  // old
  return (
    <Container>
      <div className="container mx-auto p-6">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold ">
              Your Tickets
            </h1>
          </div>

          {registrations.map((registration) => (
            <div
              key={registration._id}
              className="bg-gray-100 p-6 rounded-md mb-4 cursor-pointer"
              onClick={() => handleTicketClick(registration._id)}
            >
              <div className="flex flex-col sm:flex-row justify-between items-start">
                <div className="mb-4 sm:mb-0">
                  <h2 className="text-3xl font-bold text-title-color mb-2">
                    {" "}
                    {registration.event.eventName}{" "}
                  </h2>
                  <img
                    src={registration.event.titlePicture}
                    alt={registration.event.eventName}
                    className="w-32 h-32 object-cover rounded-md"
                  />
                </div>
                <div className="flex flex-col items-center space-y-4">
                  <QRCode value={registration._id} size={128} level={"H"} />
                  <span>Registration ID: {registration._id}</span>
                </div>
              </div>

              <div className="pt-4">
                <p className="text-lg font-semibold">Event Date & Time</p>
                <p>
                  {new Date(
                    registration.event.eventStartDateTime
                  ).toLocaleString()}
                </p>
                <div className="flex space-x-4 mt-4">
                  <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center">
                    <FaPrint />
                    <span className="ml-2">Print Tickets</span>
                  </Button>
                  {/* Add any other buttons or functionality as needed */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default UserTickets;
