import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Dashboard from './pages/Dashboard';
import Fitness from './pages/Fitness';
import Sleep from './pages/Sleep';
import Hydration from './pages/Hydration';
import Mindfulness from './pages/Mindfulness'
import Home from './pages/Home'

export default function SiteContainer() {
    const [currentPage, setCurrentPage] = useState('Home');
    
    const renderPage = () => {
        if (currentPage === 'Dashboard') {
            return <Dashboard />;
        }
        if (currentPage === 'Fitness') {
            return <Fitness />;
        }
        if (currentPage === 'Sleep') {
            return <Sleep />;
        }
        if (currentPage === 'Hydration') {
            return <Hydration />;
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
