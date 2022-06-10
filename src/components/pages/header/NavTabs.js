import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./navtabs.css";

function NavTabs({ isLoggedIn, userId, logout }) {
  return (
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
        <button type="button"className="navbar-toggler"data-bs-toggle="collapse"data-bs-target="#navbarCollapse">
          <Link className="pageLink" to="/dashboard">Dashboard</Link>
          <div> </div>
          <Link className="pageLink" to="/profile">Profile</Link>
            <div> </div>
          <Link className="pageLink" to="/fitness">Fitness</Link>
          <div> </div>
          <Link className="pageLink" to="/sleep">Sleep</Link>
          <div> </div>
          <Link className="pageLink" to="/hydration">Hydration</Link>
          <div> </div>
          <Link className="pageLink" to="/mindfulness">Mindfulness</Link>
          <div> </div>
          <Link className="pageLink" to="/" onClick={logout}>Logout</Link>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav mr-auto">
            <ul className="nav nav-tabs">
              {!isLoggedIn ? (
                <li className="nav-item">
                  <Link className="pageLink" to="/login">Login</Link>
                </li>
              ) : (
                <>
                  <li className="nav-item">
                    <Link className="pageLink" to="/dashboard">Dashboard</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="pageLink" to="/profile">Profile</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="pageLink" to="/fitness">Fitness</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="pageLink" to="/sleep">Sleep</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="pageLink" to="/hydration">Hydration</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="pageLink" to="/mindfulness">Mindfulness</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="pageLink" to="/" onClick={logout}>Logout</Link>
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
