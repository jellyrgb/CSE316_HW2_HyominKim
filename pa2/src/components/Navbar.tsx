import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      {/* Home button */}
      <div className="navbar-left">
        <Link to="/">
        <svg xmlns="http://www.w3.org/2000/svg" width="28px" height="28px" fill="currentColor" className="bi bi-house" viewBox="0 0 16 16">
          <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z"/>
        </svg>
        </Link>
      </div>

      {/* Navbar links */}
      <div className="navbar-center">
        <Link to="/facility" className="navbar-link">Facility List</Link>
        <Link to="/reservation" className="navbar-link">Reservation</Link>

        <div className="dropdown">
          <button className="dropbutton">User ▼</button>
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
      <img id="navbar-profile" className="navbar-right navbar-profile" width="42px" height="42px" src="/src/images/user.png" alt="User Profile" />
    </nav>
  );
}

export default Navbar;
