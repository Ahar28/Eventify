import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing';

const EventRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="*" element={<Landing />} />
        </Routes>
    );
};

export default EventRoutes;
