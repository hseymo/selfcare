import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function NavTabs({ currentPage, handlePageChange }) {
    return (
        <aside>Menu
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <Link to='/'>Dashboard</Link>
                </li>
                <li className="nav-item">
                    <Link to='/about'>Exercise</Link>
                </li>
                <li className="nav-item">
                    <Link to='/blog'>Sleep</Link>
                </li>
                <li className="nav-item">
                    <Link to='/contact'>Water</Link>
                </li>
                <li className="nav-item">
                    <Link to='/contact'>Mindfulness</Link>
                </li>
                {loggedIn ? (
                    <div>
                        <h3>Logged in as { }</h3>
                        <button type="button" onClick={() => setLoggedIn(!loggedIn)}>
                            Log out
                        </button>
                    </div>
                ) : (
                    <div>
                        <h3>Please log in to continue</h3>
                        <button type="button" onClick={() => setLoggedIn(!loggedIn)}>
                            Log in
                        </button>
                    </div>
                )}
            </ul>
        </aside>
    );
}

export default NavTabs;
