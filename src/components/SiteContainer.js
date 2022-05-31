import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Dashboard from './pages/Dashboard';
import Exercise from './pages/Exercise';
import Sleep from './pages/Sleep';
import Water from './pages/Water';
import Mindfulness from './pages/Mindfulness'

export default function PortfolioContainer() {
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
        return <Dashboard />;
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
        </div>
    );
}
