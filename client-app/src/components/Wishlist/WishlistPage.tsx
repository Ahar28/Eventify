import React, { useEffect, useState } from 'react';
import { useWishlist } from '../../context/WishlistContext';
import EventCard from '../../components/EventCard';
import Container from '../../components/Container'; 
import { getWishlistEvents as getWishlistEventsService } from '../../services/EventService'; // Adjust the import path as necessary
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/userSlice';

interface Event {
  id: string;
  name: string;
  date: string;
  location: string;
  description: string;
  image: string;
  topic: string;
  categories: string[];
}



const WishlistPage: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const user = useSelector(selectUser);
  const userId = user?.id;
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await getWishlistEventsService(userId);
        console.log(response);
        const mappedEvents = response.data.map((event :any)=> ({
          id: event._id,
          name: event.eventName,
          date: event.eventStartDateTime, 
          location: event.details.venue,
          description: event.details.description,
          image: event.titlePicture,
        }));
        setEvents(mappedEvents);
      } catch (error) {
        console.error("Error fetching wishlist events:", error);
      }
    };
  
    if (userId) {
      fetchEvents();
    }
  }, [userId]);
  

  return (
    <Container>
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Your Wishlist</h2>
        {events.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {events.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        ) : (
          <p className="text-lg">No events in your wishlist.</p>
        )}
      </div>
    </Container>
  );
};

export default WishlistPage;
