import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing';
import FAQPage from './pages/FAQ';
import ContactUs from './pages/ContactUs';
import WorkingInProgress from './components/WorkingPrgress';
import UserDashboard  from './pages/UserDashboard';
import AddEvent from './pages/UserDashboard/AddEvent';

const EventRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="dashboard" element={<UserDashboard />}>                
            </Route>
            <Route path='dashboard/add-event' element={<AddEvent/>}/>
            <Route path="/faqs" element={<FAQPage />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="*" element={<WorkingInProgress />} />
        </Routes>
    );
};

export default EventRoutes;
