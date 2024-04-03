import React, { useEffect, useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import Container from '../Container';
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/userSlice';
import { getEventsByOrganizer } from '../../services/EventService';

const localizer = momentLocalizer(moment);

interface Event {
  id: number;
  title: string;
  start: Date;
  end: Date;
}

const CustomCalendar: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const user = useSelector(selectUser);

  useEffect(() => {
    const fetchAndFormatEvents = async () => {
      if (user && user.id) {
        const fetchedEvents = await fetchEventsCreatedByCurrentUser(user);
        const formattedEvents = fetchedEvents.map(event => ({
          id: event._id, 
          title: event.eventName,
          start: new Date(event.eventStartDateTime),
          end: new Date(event.eventEndDateTime),
        }));
        setEvents(formattedEvents);
      }
    };

    fetchAndFormatEvents();
  }, [user]);

  return (
    <Container>
      <div style={{
        height: '500px',
        padding: '20px',
        maxWidth: '100%',
        margin: '0 auto'
      }}>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          views={['month', 'week', 'day']}
          defaultView="month"
          step={60}
          showMultiDayTimes
          defaultDate={new Date()}
          style={{ height: '100%', width: '100%' }}
        />
      </div>
    </Container>
  );
};

async function fetchEventsCreatedByCurrentUser(user: { id: string; }): Promise<any[]> {
  const response = await getEventsByOrganizer(user.id);
  if (response?.data) {
      if (response?.status === 200) {
          console.log("DATA===>", response?.data?.data);
          return response?.data?.data;
      } else {
          return [];
      }
  } else {
      return [];
  }
}

export default CustomCalendar;
