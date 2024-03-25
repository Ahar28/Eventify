import React, { useState, useEffect } from 'react';
import { HorizontalEventCard } from "../../components/HorizontalEventCard";
import CreateEventProcedure from './CreateEventProcedure';
import Container from '../../components/Container';
import { Link } from 'react-router-dom';

interface Event {
    id: string;
    title: string;
    description: string;
    date: string;
    imageUrl: string;
}

const UserDashboard: React.FC = () => {
    const [events, setEvents] = useState<Event[]>([]);

    useEffect(() => {
        fetchEventsCreatedByCurrentUser().then(setEvents);
    }, []);

    return (
        <Container>
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-xl font-bold">Your Events</h2>
                <Link to={"/dashboard/add-event"}>
                    <button type="button" className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-button-primary hover:bg-button-primary-hover">
                        Add Event
                    </button>
                </Link>
            </div>

            <div className='min-h-screen'>
                <div>
                    {events.length > 0 ? (
                        events.map((event, idx) => <HorizontalEventCard key={event.id} index={idx + 1} title={event.title} imageUrl={event.imageUrl} />)
                    ) : (
                        <div className="text-center">
                            <p>No events created yet.</p>
                        </div>
                    )}
                </div>
                <CreateEventProcedure />
            </div>
        </Container>
    );
};

async function fetchEventsCreatedByCurrentUser(): Promise<Event[]> {
    const events: Event[] = [{
        id: "1",
        title: "Tech Expo 2024",
        description: "Discover the latest in tech innovation.",
        date: "2024-04-25",
        imageUrl: "https://picsum.photos/200/300",
    },
    {
        id: "2",
        title: "Art & Design Conference",
        description: "Explore new trends in art and design.",
        date: "2024-05-15",
        imageUrl: "https://picsum.photos/200/300",
    },
    {
        id: "3",
        title: "Music Festival",
        description: "Experience the best of live music from around the world.",
        date: "2024-06-20",
        imageUrl: "https://picsum.photos/200/300",
    }]
    return events;
}

export default UserDashboard;