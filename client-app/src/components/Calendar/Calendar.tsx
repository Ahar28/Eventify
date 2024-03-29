import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import Container from '../Container';

const localizer = momentLocalizer(moment);

interface RegisteredEvent {
  id: number;
  title: string;
  start: Date;
  end: Date;
}

const registeredEvents: RegisteredEvent[] = [
  {
    id: 1,
    title: 'Tech Innovations Meetup',
    start: new Date(2024, 2, 5, 10, 30),
    end: new Date(2024, 2, 5, 12, 0),
  },
  {
    id: 2,
    title: 'Global Music Festival',
    start: new Date(2024, 3, 22, 14, 0),
    end: new Date(2024, 3, 22, 23, 30),
  },
  {
    id: 3,
    title: 'Art & Design Conference',
    start: new Date(2024, 4, 15, 9, 0),
    end: new Date(2024, 4, 15, 17, 0),
  },
];

const CustomCalendar: React.FC = () => {
  const formattedEvents = registeredEvents;

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
        events={formattedEvents}
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

export default CustomCalendar;
