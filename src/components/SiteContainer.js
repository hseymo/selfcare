import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Dashboard from './pages/Dashboard';
import Exercise from './pages/Fitness';
import Sleep from './pages/Sleep';
import Water from './pages/Hydration';
import Mindfulness from './pages/Mindfulness'
import Home from './pages/Home'

export default function SiteContainer() {
    const [currentPage, setCurrentPage] = useState('Dashboard');

    const renderPage = () => {
        if (currentPage === 'Dashboard') {
            return <Dashboard />;
        }
        if (currentPage === 'Exercise') {
            return <Exercise />;
        }
        if (currentPage === 'Sleep') {
            return <Sleep />;
        }
        if (currentPage === 'Water') {
            return <Water />;
        }
        if (currentPage === 'Mindfulness') {
            return <Mindfulness />;
        }
        return <Home />;
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
        </div>
    );
}
