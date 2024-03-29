// src/components/ParticipantForm/index.tsx

import React, { useState } from 'react';
import { TextField, Grid, Typography } from '@mui/material';
import Container from '../Container';
import Button from '../UI/Button';
import SectionTitle from '../../components/Landing/SectionTitle';

interface Participant {
  firstName: string;
  lastName: string;
  email: string;
}

interface ParticipantFormProps {
  ticketQuantities: { [type: string]: number }; 
  ticketOptions: TicketOption[];
  
}

interface TicketOption {
  type: string;
  price: number;
  quantity: number;
}


const ParticipantForm: React.FC<ParticipantFormProps> = ({ ticketQuantities,ticketOptions }) => {
  const [participants, setParticipants] = useState<Participant[]>([]);

  // Generate initial participants based on ticket quantities
  React.useEffect(() => {
    const initialParticipants: Participant[] = [];
    Object.entries(ticketQuantities).forEach(([type, quantity]) => {
      for (let i = 0; i < quantity; i++) {
        initialParticipants.push({ firstName: '', lastName: '', email: '' });
      }
    });
    setParticipants(initialParticipants);
  }, [ticketQuantities]);

  const handleInputChange = (index: number, field: keyof Participant, value: string) => {
    const updatedParticipants = [...participants];
    updatedParticipants[index][field] = value;
    setParticipants(updatedParticipants);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(participants);
    // Submit participant data
  };

    // Calculate subtotal
    const calculateSubtotal = () => {
      return ticketOptions.reduce((total, ticket) => total + (ticket.price * ticketQuantities[ticket.type]), 0);
    };

 return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <SectionTitle title="Registration Information" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
        {/* Participant Form - Takes 2/3 space on medium screens and above */}
        <div className="md:col-span-2 bg-white shadow-lg rounded-lg p-6 ">
          <form onSubmit={handleSubmit} className="space-y-6">
            {participants.map((participant, index) => (
              <div key={index}>
                <Typography variant="h6" component="h2" className="mb-2">Attendee {index + 1}</Typography>
                {/* First Name and Last Name on the same line */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <TextField
                  fullWidth
                  label="First Name"
                  value={participant.firstName}
                  onChange={(e) => handleInputChange(index, 'firstName', e.target.value)}
                  margin="normal"
                  className="mb-4"
                />
                <TextField
                  fullWidth
                  label="Last Name"
                  value={participant.lastName}
                  onChange={(e) => handleInputChange(index, 'lastName', e.target.value)}
                  margin="normal"
                  className="mb-4"
                />
                </div>
                <TextField
                  fullWidth
                  label="Email"
                  value={participant.email}
                  onChange={(e) => handleInputChange(index, 'email', e.target.value)}
                  margin="normal"
                  className="mb-4"
                />
              </div>
            ))}
            {/* <Button type="submit" variant="contained" color="primary">Submit</Button> */}
            <button type="submit" className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-button-primary hover:bg-button-primary-hover">
                        Submit
                    </button>
          </form>
        </div>

        {/* Order Summary - Takes 1/3 space */}
        <div className="col-span-1 bg-gray-100 p-4 rounded-lg shadow-md">
          <Typography variant="h6" className="font-semibold mb-4">Order Summary</Typography>
          <div>
            {ticketOptions.map((ticket, index) => ticketQuantities[ticket.type] > 0 && (
              <div key={index} className="flex justify-between border-b py-2">
                <span>{ticket.type}</span>
                <span>CA${(ticket.price * ticketQuantities[ticket.type]).toFixed(2)}</span>
              </div>
            ))}
            <div className="pt-4">
              <div className="flex justify-between font-semibold">
                <span>Subtotal</span>
                <span>CA${calculateSubtotal().toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParticipantForm;
