import React from 'react';
import { Link } from 'react-router-dom';

export default function Mindfulness() {
    return (
        <div>
            <h1>Mindfulness Page</h1>
            <p>
                Nunc pharetra finibus est at efficitur. Praesent sed congue diam.
                Integer gravida dui mauris, ut interdum nunc egestas sed. Aenean sed
                mollis diam. Nunc aliquet risus ac finibus porta. Nam quis arcu non
                lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper
                imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus
                in. Sed rhoncus mollis diam, sit amet facilisis lectus blandit at.
            </p>
            <aside>Menu
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <Link to='/'>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/dashboard'>Dashboard</Link>
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
                </ul>
            </aside>
        </div>
    );
}
