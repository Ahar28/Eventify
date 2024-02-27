import React from 'react';
import EventCard from '../EventCard/index';
import SectionTitle from './SectionTitle';
import Container from '../Container';
import { useNavigate } from 'react-router-dom';

interface Event {
    id: number;
    name: string;
    date: string;
    location: string;
    description: string;
    image: string;
}

const events: Event[] = [
    {
        id: 1,
        name: 'Tech Innovations Conference 2024',
        date: 'March 5th, 2024',
        location: 'San Francisco, CA',
        description: 'A gathering of the brightest minds in technology to discuss future innovations.',
        image: 'https://picsum.photos/500/500?random=1',
    },
    {
        id: 2,
        name: 'Global Music Festival 2024',
        date: 'April 22nd, 2024',
        location: 'New York, NY',
        description: 'Experience the world through music at this vibrant festival featuring artists from around the globe.',
        image: 'https://picsum.photos/500/500?random=2',
    },
    {
        id: 3,
        name: 'International Art Expo 2024',
        date: 'May 15th, 2024',
        location: 'Paris, France',
        description: 'Discover contemporary art from top artists and galleries from over 30 countries.',
        image: 'https://picsum.photos/500/500?random=3',
    },
    {
        id: 4,
        name: 'Marathon City 2024',
        date: 'June 3rd, 2024',
        location: 'Chicago, IL',
        description: 'Join thousands of runners in one of the most scenic marathons in the world.',
        image: 'https://picsum.photos/500/500?random=4',
    },
    {
        id: 5,
        name: 'Educators Global Summit 2024',
        date: 'July 20th, 2024',
        location: 'London, UK',
        description: 'A conference dedicated to innovation in education and teaching methodologies.',
        image: 'https://picsum.photos/500/500?random=5',
    },
    {
        id: 6,
        name: 'International Food & Wine Festival 2024',
        date: 'August 25th, 2024',
        location: 'Rome, Italy',
        description: 'Taste your way around the globe with world-class cuisine and exquisite wines.',
        image: 'https://picsum.photos/500/500?random=6',
    },
    {
        id: 7,
        name: 'Green Earth Environmental Summit 2024',
        date: 'September 17th, 2024',
        location: 'Berlin, Germany',
        description: 'A platform for sharing innovative solutions to environmental challenges.',
        image: 'https://picsum.photos/500/500?random=7',
    },
    {
        id: 8,
        name: 'Space Exploration Symposium 2024',
        date: 'October 11th, 2024',
        location: 'Houston, TX',
        description: 'A symposium on the latest developments and future prospects in space exploration.',
        image: 'https://picsum.photos/500/500?random=8',
    },
];

const TopUpcomingEvents: React.FC = () => {
    const navigate = useNavigate();

    const handleDiscoverEventsClick = () => {
        navigate('/events');
    };
    return (
        <section className="my-14">
            <Container>
                <SectionTitle title="Top Upcoming Events" />
                <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 place-items-center lg:gap-14 gap-4 mt-8">
                    {events.map((event) => (
                        <EventCard key={event.id} event={event} />
                    ))}
                </div>
                <div className="flex justify-center">
                    <button
                        onClick={handleDiscoverEventsClick}
                        className="bg-button-primary text-white py-2 px-16 rounded-full text-lg font-medium hover:bg-button-primary-hover transition duration-300 ease-in-out w-full sm:w-auto"
                    >
                        Discover Events
                    </button>
                </div>
            </Container>
        </section>
    );
};

export default TopUpcomingEvents;
