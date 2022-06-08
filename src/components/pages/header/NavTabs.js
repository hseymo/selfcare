import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './navtabs.css'

function NavTabs({isLoggedIn, userId, logout}) {
    return (
        
        <nav class="navbar navbar-expand-lg navbar-dark">
            <div class="container-fluid">
            <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <Link class="link-light " to='/dashboard'>Dashboard</Link>
            <div></div>
            <Link class="link-light " to='/' onClick={logout}>Logout</Link> 
            </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
            <ul class="navbar-nav mr-auto">
            <ul className="nav nav-tabs"> 
        {!isLoggedIn ? (
            <li className="nav-item">
                <Link class="link-light" to='/login'>Login</Link>
            </li>
        ) : (
            <>
                <li className="nav-item">
                    <Link class="link-light " to='/dashboard'>Dashboard</Link>
                </li>
                <li className="nav-item">
                    <Link class="link-light " to='/profile'>Profile</Link>
                </li>
                <li className="nav-item">
                    <Link class="link-light " to='/fitness'>Fitness</Link>
                </li>
                <li className="nav-item">
                    <Link class="link-light " to='/sleep'>Sleep</Link>
                </li>
                <li className="nav-item">
                    <Link class="link-light " to='/hydration'>Hydration</Link>
                </li>
                <li className="nav-item">
                    <Link class="link-light " to='/mindfulness'>Mindfulness</Link>
                </li>
                <li className="nav-item">
                    <Link class="link-light " to='/' onClick={logout}>Logout</Link>
                </li>
                    </>
        )}
            </ul>
            </ul> 
            </div> 
            </div>
            </nav>
    );
}

export default NavTabs;