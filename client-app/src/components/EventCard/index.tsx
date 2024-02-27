import React from "react";
import { useNavigate } from "react-router-dom";

interface EventCardProps {
  key: React.Key;
  event: {
    id: number;
    name: string;
    date: string;
    location: string;
    description: string;
    image: string;
  };
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/event/${event.id}`);
  };

  return (
    <div className="h-[550px] w-[320px] cursor-pointer" key={event.id} onClick={handleClick}>
      <div className="relative rounded-xl overflow-hidden">
        <img src={event.image} alt={event.name} />
        <div className="absolute top-4 right-4 bg-white text-black rounded-full py-2 px-4 text-xs font-semibold">
          {event.date}
        </div>
      </div>
      <div className="flex flex-col gap-2 my-4 px-2">
        <h2 className="text-lg font-bold text-title-color">{event.name}</h2>
        <p className="text-sm text-gray-500">{event.location}</p>
        <p className="text-xs font-medium text-gray-700">{event.description}</p>
      </div>
    </div>
  );
};

export default EventCard;
