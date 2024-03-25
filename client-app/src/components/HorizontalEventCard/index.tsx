import React from 'react';

interface EventCardProps {
  index: number;
  title: string;
  imageUrl: string;
}

export const HorizontalEventCard: React.FC<EventCardProps> = ({
    index,
    title,
    imageUrl,
  }) => {
    return (
      <div className="flex items-center bg-white shadow-md rounded-lg p-4 mb-4">
        <span className="font-bold mr-4">{index}.</span>
        <img src={imageUrl} alt="Event" className="w-20 h-20 mr-4 object-cover rounded-lg" />
        <div className="flex-grow">
          <h4 className="font-bold mb-2 line-clamp-1" title={title}>{title}</h4>
        </div>
      </div>
    );
  };
