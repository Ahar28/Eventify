import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing';
import FAQPage from './pages/FAQ';
import ContactUs from './pages/ContactUs';
import WorkingInProgress from './components/WorkingPrgress';

const EventRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/faqs" element={<FAQPage />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="*" element={<WorkingInProgress />} />
        </Routes>
    );
};

export default EventRoutes;
