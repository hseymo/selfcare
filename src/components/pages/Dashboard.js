import React from 'react';
import { Link } from 'react-router-dom';

export default function Dashboard() {
    return (
        <div>
            <h1>Dashboard Page</h1>
            <p>
                Wanna get fit? HERE'S HOW!
            </p>
            <aside>Menu
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <Link to='/'>Home</Link>
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
            </aside>
        </div>
    );
}
