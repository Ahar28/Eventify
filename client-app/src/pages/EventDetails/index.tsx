import React from 'react';
import EventDetails from '../../components/EventDetails';

const EventPage: React.FC = () => {
    // Static event data
    const event = {
        name: 'Sample Event',
        organizer: 'Aharnish Solanki',
        date: '2024-04-30 1:00',
        location: ' 6299 South St, Halifax, NS B3H 4R2',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum ',
        images: [0, 1, 2, 3].map((i) => `https://source.unsplash.com/1200x450/?event,${i}`),
    };

    // return <EventDetails event={event} />;
    return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
    <EventDetails event={event} />
</div>);
};

export default EventPage;