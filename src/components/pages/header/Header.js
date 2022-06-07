import React from 'react';
import NavTabs from './NavTabs';
import './header.css';

export default function Header ( {isLoggedIn, userId, logout } ) {
    return (
        <div className="Header">
            <h1>SelfCareCentral</h1>
            < NavTabs isLoggedIn={isLoggedIn} userId={userId} logout={logout} />
        </div>
    )
}