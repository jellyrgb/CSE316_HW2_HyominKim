import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      {/* Home button */}
      <div className="navbar-left">
        <Link to="/">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-house-door-fill" viewBox="0 0 16 16">
            <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5"/>
          </svg>
        </Link>
      </div>

      {/* Navbar links */}
      <div className="navbar-center">
        <Link to="/facility" className="navbar-link">Facility List</Link>
        <Link to="/reservation" className="navbar-link">Facility Reservation</Link>

        <div className="dropdown">
          <button className="dropbutton">My Page ▼</button>
          <div className="dropdown-content">
            <Link to="/profile">My Information</Link>
            <Link to="/reservations">My Reservation</Link>
          </div>
        </div>
      </div>

      {/* Hamburger menu */}
      <button className="hamburger-menu" id="hamburger-menu">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
        </svg>
      </button>

      {/* Profile picture in navbar */}
      <img id="navbar-profile" className="navbar-right navbar-profile" src="/src/images/user.png" alt="User Profile" />
    </nav>
  );
}

export default Navbar;
