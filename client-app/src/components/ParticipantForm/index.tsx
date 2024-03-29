import React from 'react';
import Button from '../UI/Button';

interface Participant {
  firstName: string;
  lastName: string;
  email: string;
}

interface ParticipantFormProps {
  participants: Participant[];
  onParticipantsChange: (updatedParticipants: Participant[]) => void;
  onSubmit: () => void;
}

const ParticipantForm: React.FC<ParticipantFormProps> = ({ participants, onParticipantsChange, onSubmit }) => {
  const handleChange = (index: number, field: keyof Participant, value: string) => {
    const updatedParticipants = [...participants];
    updatedParticipants[index][field] = value;
    onParticipantsChange(updatedParticipants);
  };

  return (
    <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); onSubmit(); }}>
      {participants.map((participant, index) => (
        <div key={index} className="flex flex-col space-y-2">
          <input
            type="text"
            placeholder="First Name"
            value={participant.firstName}
            onChange={(e) => handleChange(index, 'firstName', e.target.value)}
            className="input"
            required
          />
          <input
            type="text"
            placeholder="Last Name"
            value={participant.lastName}
            onChange={(e) => handleChange(index, 'lastName', e.target.value)}
            className="input"
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={participant.email}
            onChange={(e) => handleChange(index, 'email', e.target.value)}
            className="input"
            required
          />
        </div>
      ))}
      <Button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-lg w-full mt-4">
        Submit
      </Button>
    </form>
  );
};

export default ParticipantForm;
