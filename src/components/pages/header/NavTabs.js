import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './navtabs.css'

function NavTabs({isLoggedIn, userId, logout}) {
    return (
        <nav>
            <ul className="nav nav-tabs">
        {!isLoggedIn ? (
            <li className="nav-item">
                <Link class="link-light" to='/login'>Login</Link>
            </li>
        ) : (
            <>
                <li className="nav-item">
                    <Link class="link-light" to='/dashboard'>Dashboard</Link>
                </li>
                <li className="nav-item">
                    <Link class="link-light" to='/profile'>Profile</Link>
                </li>
                <li className="nav-item">
                    <Link class="link-light" to='/fitness'>Fitness</Link>
                </li>
                <li className="nav-item">
                    <Link class="link-light" to='/sleep'>Sleep</Link>
                </li>
                <li className="nav-item">
                    <Link class="link-light" to='/hydration'>Hydration</Link>
                </li>
                <li className="nav-item">
                    <Link class="link-light" to='/mindfulness'>Mindfulness</Link>
                </li>
                <li className="nav-item">
                    <Link class="link-light" to='/' onClick={logout}>Logout</Link>
                </li>
                    </>
        )}
            </ul>
        </nav>
    );
}

export default NavTabs;