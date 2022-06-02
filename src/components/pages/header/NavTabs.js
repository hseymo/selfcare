import React from 'react';
import { Link } from 'react-router-dom';
import './navtabs.css'

function NavTabs(props) {
    return (
        <nav>
            <ul className="nav nav-tabs">
                {/* add conditional - if logged in, show logout else and vice versa */}
                <li className="nav-item">
                    <Link to='/login'>Login</Link>
                </li>
                <li className="nav-item">
                    <Link to='/logout'>Logout</Link>
                </li>
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
            </ul>
        </nav>
    );
}

export default NavTabs;