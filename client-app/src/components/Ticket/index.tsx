import React, { useState } from "react";
import { FaPrint, FaRegTimesCircle } from "react-icons/fa";
import Button from "../UI/Button";
import Container from "../Container";
import { error } from "console";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import QRCode from "qrcode.react";
import CancellationModal from "../CancelModal";

const TicketInfoComponent: React.FC = () => {
  const [isCancellationModalOpen, setIsCancellationModalOpen] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = React.useState(false);
  const ticketInfo = {
    orderId: "9280108829",
    eventName: "DSU Holi event",
    eventDate: "Tuesday, April 2, 2024 from 11:30 AM to 1:30 PM (ADT)",
    location: "Halifax, NS",
    // ticketType: 'General Admission',
    contactInfo: {
      firstName: "Aharnish",
      lastName: "Solanki",
      email: "aharnish.solanki@dal.ca",
    },
  };

  const handlePrint = () => {
    window.print();
  };

  const handleOpenCancellationModal = () => {
    setIsCancellationModalOpen(true);
  };

  const handleCancel = () => {
    console.log("Cancellation confirmed");
    setIsCancellationModalOpen(false);
    // Add logic to handle the actual cancellation here
  };

  const handleCloseCancellationModal = () => {
    setIsCancellationModalOpen(false);
  };

  const qrCodeValue = `TicketID:${ticketInfo.orderId}`;

  return (
    <Container>
      <div className="container mx-auto p-6">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <Link
              to="/all-tickets"
              className="text-blue-600 font-bold hover:underline flex items-center ml-auto"
            >
              {" "}
              <FaArrowLeft className="mr-1" /> See All Tickets
            </Link>
          </div>

          <div className="bg-gray-100 p-6 rounded-md">
            <div className="flex flex-col sm:flex-row justify-between items-start">
              <div className="mb-4 sm:mb-0">
                <h1 className="text-xl font-bold">Your Tickets for</h1>
                <span className="text-3xl lg:text-5xl font-bold text-title-color">
                  {ticketInfo.eventName}
                </span>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <QRCode value={qrCodeValue} size={128} level={"H"} />
                <span>Order #: {ticketInfo.orderId}</span>
              </div>
            </div>
          </div>

          <div className="pt-4">
            {/* <h2 className="text-lg font-semibold">General Admission</h2> */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
              <div>
                <p className="text-2xl mb-3">
                  <strong>Contact Information</strong>
                </p>
                <div className="flex flex-col">
                  <div className="flex mb-3">
                    <div className="w-1/2 pr-2">
                      <p className="mb-1 font-semibold">First Name</p>
                      <p className="mb-1">{ticketInfo.contactInfo.firstName}</p>
                    </div>
                    <div className="w-1/2 pl-2">
                      <p className="mb-1 font-semibold">Last Name</p>
                      <p className="mb-1">{ticketInfo.contactInfo.lastName}</p>
                    </div>
                  </div>
                  <p className="mb-1 font-semibold">Email</p>
                  <p>{ticketInfo.contactInfo.email}</p>
                </div>
              </div>
              <div>
                <p className="text-2xl mt-1 mb-2">
                  <strong>Event Information</strong>
                </p>
                <p className="mb-1">{ticketInfo.eventDate}</p>
                <p>{ticketInfo.location}</p>
              </div>
            </div>
            <div className="flex space-x-4">
              <Button
                onClick={handlePrint}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center"
              >
                <FaPrint />
                <span className="ml-2">Print Tickets</span>
              </Button>
              <Button
                onClick={handleOpenCancellationModal}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded inline-flex items-center"
                color="error"
              >
                <FaRegTimesCircle />
                <span className="ml-2">Cancel Order</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* Cancellation Confirmation Modal */}
      <CancellationModal
        isOpen={isCancellationModalOpen}
        onCancel={handleCloseCancellationModal}
        onConfirm={handleCancel}
      />
    </Container>
  );
};

export default TicketInfoComponent;
