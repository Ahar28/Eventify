import React from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import FAQPage from "./pages/FAQ";
import ContactUs from "./pages/ContactUs";
import WorkingInProgress from "./components/WorkingPrgress";
import UserDashboard from "./pages/UserDashboard";
import Authentication from "./pages/Authentication";
import Eventfeed from "./pages/Events";
import Wishlist from "./pages/Wishlist";
import Calendar from "./components/Calendar/Calendar";
import AddEvent from "./pages/UserDashboard/AddEvent";
import EventPage from "./pages/EventDetails";
import ParticipantInfoPage from "./pages/ParticipantForm";
import PaymentForm from "./components/PaymentForm";
import UserProfile from "./pages/UserProfile";
import AnalyticsPage from "./pages/Analytics";
// import AddEvent from './pages/UserDashboard/AddEvent';

const EventRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/auth/*" element={<Authentication />} />
      <Route path="dashboard" element={<UserDashboard />} />
      <Route path="dashboard/add-event" element={<AddEvent />} />
      <Route path="/faqs" element={<FAQPage />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/profile" element={<UserProfile />} />
      <Route path="/payment" element={<PaymentForm />} />
      <Route path="/events" element={<Eventfeed />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/calendar" element={<Calendar />} />
      <Route path="/events/:id" element={<EventPage />} />
      <Route
        path="/events/:id/register/participant-info"
        element={<ParticipantInfoPage />}
      />
      <Route path="*" element={<WorkingInProgress />} />
    </Routes>
  );
};

export default EventRoutes;
