import React from 'react';
import { Link } from 'react-router-dom';

const styles = {
    navStyle: {
        border: '2px solid black',
        width: 'fit-content',
        padding: '0px 10px',
    }
}

function NavTabs(props) {
    return (
        <aside>Menu
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
    );
}

export default NavTabs;

// {/* {loggedIn ? (
//     <div>

//         <h3>Logged in as { }</h3>
//         <button type="button" onClick={() => setLoggedIn(!loggedIn)}>
//             Log out
//         </button>
//     </div>
// ) : (
//     <div>
//         <h3>Please log in to continue</h3>
//         <form>
//         <input type='email' name='email' placeholder='email...' required onSubmit={this.handleSubmit} />
//         <input type='password' name='pwd' placeholder='password...' required onSubmit={this.handleSubmit} />
//         <button type="button" onClick={() => setLoggedIn(!loggedIn)}>
//             Log in
//         </button>
//         </form>
//     </div>
// )} */}
