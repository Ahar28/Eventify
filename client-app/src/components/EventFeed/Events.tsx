import React, { useState, useEffect } from 'react';
import EventCard from '../EventCard/index';
import Container from '../Container';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface Event {
    id: number;
    name: string;
    date: string;
    location: string;
    description: string;
    image: string;
    topic: string;
    categories: string[];
}

const events: Event[] = [
    {
        id: 1,
        name: 'Tech Innovations Conference 2024',
        date: '2024-03-05',
        location: 'San Francisco, CA',
        description: 'A gathering of the brightest minds in technology to discuss future innovations.',
        image: 'https://picsum.photos/500/500?random=1',
        topic: 'Technology',
        categories: ['Innovation', 'Tech Trends'],
    },
    {
        id: 2,
        name: 'Global Music Festival 2024',
        date: '2024-04-22',
        location: 'New York, NY',
        description: 'Experience the world through music at this vibrant festival featuring artists from around the globe.',
        image: 'https://picsum.photos/500/500?random=2',
        topic: 'Music',
        categories: ['Live Performances', 'International'],
    },
    {
        id: 3,
        name: 'International Art Expo 2024',
        date: '2024-05-15',
        location: 'Paris, France',
        description: 'Discover contemporary art from top artists and galleries from over 30 countries.',
        image: 'https://picsum.photos/500/500?random=3',
        topic: 'Art',
        categories: ['Contemporary', 'Galleries'],
    },
    {
        id: 4,
        name: 'Marathon City 2024',
        date: '2024-06-03',
        location: 'Chicago, IL',
        description: 'Join thousands of runners in one of the most scenic marathons in the world.',
        image: 'https://picsum.photos/500/500?random=4',
        topic: 'Sports',
        categories: ['Marathon', 'Running'],
    },
    {
        id: 5,
        name: 'Educators Global Summit 2024',
        date: '2024-07-20',
        location: 'London, UK',
        description: 'A conference dedicated to innovation in education and teaching methodologies.',
        image: 'https://picsum.photos/500/500?random=5',
        topic: 'Education',
        categories: ['Innovation', 'Teaching Methodologies'],
    },
    {
        id: 6,
        name: 'International Food & Wine Festival 2024',
        date: '2024-08-25',
        location: 'Rome, Italy',
        description: 'Taste your way around the globe with world-class cuisine and exquisite wines.',
        image: 'https://picsum.photos/500/500?random=6',
        topic: 'Cuisine',
        categories: ['Food', 'Wine', 'International Cuisine'],
    },
    {
        id: 7,
        name: 'Green Earth Environmental Summit 2024',
        date: '2024-09-17',
        location: 'Berlin, Germany',
        description: 'A platform for sharing innovative solutions to environmental challenges.',
        image: 'https://picsum.photos/500/500?random=7',
        topic: 'Environment',
        categories: ['Sustainability', 'Innovative Solutions'],
    },
    {
        id: 8,
        name: 'Space Exploration Symposium 2024',
        date: '2024-10-11',
        location: 'Houston, TX',
        description: 'A symposium on the latest developments and future prospects in space exploration.',
        image: 'https://picsum.photos/500/500?random=8',
        topic: 'Science',
        categories: ['Space Exploration', 'Astrophysics'],
    },
];


const Events: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([null, null]);
    const [startDate, endDate] = dateRange;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const clearFilters = () => {
        setSearchQuery('');
        setDateRange([null, null]);
    };

    const filteredEvents = events.filter(event => {
        const eventDate = new Date(event.date).setHours(0,0,0,0);
        let startDateTime = startDate ? new Date(startDate).setHours(0,0,0,0) : null;
        let endDateTime = endDate ? new Date(endDate).setHours(23,59,59,999) : startDateTime;
    
    
        if (startDate) {
            endDateTime = endDate ? new Date(endDate).setHours(23,59,59,999) : new Date(startDate).setHours(23,59,59,999);
        }
    
        const isInRange = (!startDateTime || eventDate >= startDateTime) && (!endDateTime || eventDate <= endDateTime);
    
        const matchesSearch = event.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                              event.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
                              event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                              event.topic.toLowerCase().includes(searchQuery.toLowerCase()) ||
                              event.categories.some(category => category.toLowerCase().includes(searchQuery.toLowerCase()));
    
        return isInRange && matchesSearch;
    });
    
      

    return (
        <Container>
            <div className="flex justify-between items-center flex-wrap gap-4 mb-8">
      
                <div className="flex-1">
                    <input
                        type="text"
                        placeholder="Search by name, location, description, topic, categories..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="border border-gray-300 text-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    />
                </div>

                <div className="flex items-center gap-2">
                    <DatePicker
                        selectsRange={true}
                        startDate={startDate}
                        endDate={endDate}
                        onChange={(update) => setDateRange(update as [Date | null, Date | null])}
                        customInput={<input className="border border-gray-300 text-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-pointer" />}
                        placeholderText="Select a date or range"
                    />
                    <button
                        onClick={clearFilters}
                        className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-button-primary hover:bg-button-primary-hover"
                    >
                        Clear
                    </button>
                </div>
            </div>
            <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 place-items-center lg:gap-14 gap-4 mt-8">
                {filteredEvents.length > 0 ? (
                    filteredEvents.map((event) => (
                        <EventCard key={event.id} event={event} />
                    ))
                ) : (
                    <p style={{ textAlign: 'center', fontSize: '20px', color: '#666', width: '100%' }}>No events found.</p>
                )}
            </div>
        </Container>
    );
};

export default Events;