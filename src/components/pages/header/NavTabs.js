import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { MdClose } from 'react-icons/md';
import { FiMenu } from 'react-icons/fi'
import './navtabs.css'


function NavTabs({ isLoggedIn, userId, logout }) {
    const [navbarOpen, setNavbarOpen] = useState(false)
    const handleToggle = () => {
        setNavbarOpen(prev => !prev)
    }
    const closeMenu = () => {
        setNavbarOpen(true)
    }

    return (

        <nav className='navBar'>
            <button onClick={handleToggle}>
                {navbarOpen ? (
                    <MdClose style={{ color: "#fff", width: "40px", height: "40px" }} />
                ) : (
                    <FiMenu style={{ color: "#7b7b7b", width: "40px", height: "40px" }} />
                )}
                {isLoggedIn ? (
                    // <button onClick={closeMenu}>
                        <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
                            <li className="nav-item">
                                <Link className="pageLink" to='/dashboard' onClick={closeMenu}>Dashboard</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="pageLink" to='/profile' onClick={closeMenu}>Profile</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="pageLink" to='/fitness' onClick={closeMenu}>Fitness</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="pageLink" to='/sleep' onClick={closeMenu}>Sleep</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="pageLink" to='/hydration' onClick={closeMenu}>Hydration</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="pageLink" to='/mindfulness' onClick={closeMenu}>Mindfulness</Link>
                            </li>
                            <li className='nav-item'>
                                <Link className="pageLink" to='/' onClick={logout}>Logout</Link>
                            </li>
                        </ul>
                    // </button>
                ) : (
                    <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
                        <li className='nav-item'>
                            <Link className="pageLink" to='/login'>Login</Link>
                        </li>
                    </ul>
                )}
            </button>
            {/* <ul class="navbar-nav mr-auto">
                <ul className="nav nav-tabs">
                    {!isLoggedIn ? (
                        <li className="nav-item">
                            <Link className="pageLink" to='/login'>Login</Link>
                        </li>
                    ) : (
                        <>
                            <li className="nav-item">
                                <Link className="pageLink" to='/dashboard'>Dashboard</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="pageLink" to='/profile'>Profile</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="pageLink" to='/fitness'>Fitness</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="pageLink" to='/sleep'>Sleep</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="pageLink" to='/hydration'>Hydration</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="pageLink" to='/mindfulness'>Mindfulness</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="pageLink" to='/' onClick={logout}>Logout</Link>
                            </li>
                        </>
                    )}
                </ul>
            </ul> */}
        </nav>
    );
}

export default NavTabs;