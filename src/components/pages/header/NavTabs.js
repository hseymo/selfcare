import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './navtabs.css'

function NavTabs({isLoggedIn, userId, logout}) {
    return (
        <nav>
            <ul className="nav nav-tabs">
        {!isLoggedIn ? (
            <li className="nav-item">
                <Link to='/login'>Login</Link>
            </li>
        ) : (
            <>
                <li className="nav-item">
                    <Link to='/dashboard'>Dashboard</Link>
                </li>
                <li className="nav-item">
                    <Link to='/profile'>Profile</Link>
                </li>
                <li className="nav-item">
                    <Link to='/fitness'>Fitness</Link>
                </li>
                <li className="nav-item">
                    <Link to='/sleep'>Sleep</Link>
                </li>
                <li className="nav-item">
                    <Link to='/hydration'>Hydration</Link>
                </li>
                <li className="nav-item">
                    <Link to='/mindfulness'>Mindfulness</Link>
                </li>
                <li className="nav-item">
                    <Link to='/' onClick={logout}>Logout</Link>
                </li>
                    </>
        )}
            </ul>
        </nav>
    );
}

export default NavTabs;