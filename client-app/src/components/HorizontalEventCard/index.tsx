import React from 'react';

interface EventCardProps {
  index: number;
  title: string;
  imageUrl: string;
  isActive: boolean;
}

export const HorizontalEventCard: React.FC<EventCardProps> = ({
  index,
  title,
  imageUrl,
  isActive
}) => {
  return (
    <div className="relative flex items-center bg-white shadow-md rounded-lg p-4 mb-4">
      <span className="font-bold mr-4">{index}.</span>
      <img src={imageUrl} alt="Event" className="w-20 h-20 mr-4 object-cover rounded-lg" />
      <div className="flex-grow">
        <h4 className="font-bold mb-2 line-clamp-1" title={title}>{title}</h4>
      </div>
      {!isActive && (
        <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold py-1 px-2 rounded-lg">
          Expired
        </span>
      )}
    </div>
  );
};
