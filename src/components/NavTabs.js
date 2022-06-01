import React from 'react';
import { Link } from 'react-router-dom';

function NavTabs({ currentPage, handlePageChange }) {
    return (
        <aside>Menu
            <ul className="nav nav-tabs">
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
                {/* {loggedIn ? (
                    <div>

                        <h3>Logged in as { }</h3>
                        <button type="button" onClick={() => setLoggedIn(!loggedIn)}>
                            Log out
                        </button>
                    </div>
                ) : (
                    <div>
                        <h3>Please log in to continue</h3>
                        <form>
                        <input type='email' name='email' placeholder='email...' required onSubmit={this.handleSubmit} />
                        <input type='password' name='pwd' placeholder='password...' required onSubmit={this.handleSubmit} />
                        <button type="button" onClick={() => setLoggedIn(!loggedIn)}>
                            Log in
                        </button>
                        </form>
                    </div>
                )} */}
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
