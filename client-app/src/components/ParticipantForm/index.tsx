import React, { useState } from 'react';
import Container from '../Container';
import SectionTitle from '../../components/Landing/SectionTitle';
import SuccessModal from '../SuccessModal';

interface Participant {
  firstName: string;
  lastName: string;
  email: string;
}
interface ParticipantError {
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
  //
  const [errors, setErrors] = useState<ParticipantError[]>([]);

  const [showSuccessModal, setShowSuccessModal] = useState(false);

  // Generate initial participants based on ticket quantities
  React.useEffect(() => {
    const initialParticipants: Participant[] = [];
    //
    const initialErrors: ParticipantError[] = [];

    Object.entries(ticketQuantities).forEach(([type, quantity]) => {
      for (let i = 0; i < quantity; i++) {
        initialParticipants.push({ firstName: '', lastName: '', email: '' });
        initialErrors.push({ firstName: '', lastName: '', email: '' });
      }
    });
    setParticipants(initialParticipants);
    setErrors(initialErrors);
  }, [ticketQuantities]);

  const handleInputChange = (index: number, field: keyof Participant, value: string) => {
    const updatedParticipants = [...participants];
    updatedParticipants[index][field] = value;
    setParticipants(updatedParticipants);
  };

  const validateForm = () => {
    const updatedErrors: ParticipantError[] = participants.map(participant => {
      return {
        firstName: participant.firstName ? '' : 'First name is required',
        lastName: participant.lastName ? '' : 'Last name is required',
        email: participant.email.match(/\S+@\S+\.\S+/) ? '' : 'Email is invalid',
      };
    });

    setErrors(updatedErrors);
    return !updatedErrors.some(error => error.firstName || error.lastName || error.email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log(participants);
      // Proceed with submitting participant data
      setShowSuccessModal(true);
    }
  };
  
  const closeModal = () => {
    setShowSuccessModal(false);
  };
  
    // Calculate subtotal
    // const calculateSubtotal = () => {
    //   return ticketOptions.reduce((total, ticket) => total + (ticket.price * ticketQuantities[ticket.type]), 0);
    // };

    // Calculate subtotal
const calculateSubtotal = () => {
  const validTickets = ticketOptions.filter(ticket => ticketQuantities[ticket.type] > 0);
  
  // Calculating the subtotal for valid tickets
  const subtotal = validTickets.reduce((total, ticket) => {
    // condition to ensure quantity is a number to avoid NaN results
    const quantity = Number(ticketQuantities[ticket.type]) || 0;
    return total + (ticket.price * quantity);
  }, 0);

  //to ensure that the subtotal is not NaN; and return 0 if it is
  return isNaN(subtotal) ? 0 : subtotal;
};


 return (
  <Container>
    <div className="max-w-7xl mx-auto px-4 py-8">
      <SectionTitle title="Registration Information" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
        {/* Participant Form - Takes 2/3 space on medium screens and above */}
        <div className="md:col-span-2 bg-white shadow-lg rounded-lg p-6 ">
          <form onSubmit={handleSubmit} className="space-y-6">
            {participants.map((participant, index) => (
              <div key={index}>
                <h2 className="text-xl font-bold">Attendee {index + 1}</h2>
                {/* First Name and Last Name on the same line */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                   <input
                            type="text"
                            name="FirstName"
                            id="firstName"
                            value={participant.firstName}
                            onChange={(e) => handleInputChange(index, 'firstName', e.target.value)}
                            className="border border-gray-300 text-md block w-full p-2.5 mt-6"
                            placeholder="First Name"
                        />
                 <input
                            type="text"
                            name="LastName"
                            id="lastName"
                            value={participant.lastName}
                            onChange={(e) => handleInputChange(index, 'lastName', e.target.value)}
                            className="border border-gray-300 text-md block w-full p-2.5 mt-6"
                            placeholder="Last Name"
                        />
                </div>
              
                 <input
                            type="text"
                            name="Email"
                            id="email"
                            value={participant.email}
                            onChange={(e) => handleInputChange(index, 'email', e.target.value)}
                            className="border border-gray-300 text-md block w-full p-2.5 mt-6"
                            placeholder="Email"
                        />
              </div>
            ))}
            {/* <Button type="submit" variant="contained" color="primary">Submit</Button> */}
            <button type="submit" className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-button-primary hover:bg-button-primary-hover">
                        Submit
                    </button>
                    {showSuccessModal && <SuccessModal onClose={closeModal} />}
          </form>
        </div>

        {/* Order Summary - Takes 1/3 space */}
        <div className="col-span-1 bg-gray-100 p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>
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
    </Container>
  );
};

export default ParticipantForm;
