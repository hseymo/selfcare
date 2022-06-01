import React from 'react';
import NavTabs from './NavTabs';
import './index.css';

export default function Header () {
    return (
        <div className="Header">
            <h1>SelfCareCentral</h1>
            < NavTabs />
        </div>
    )
}