import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    // <Router>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/">
            <img src="/RH.svg" alt="Rachael Huang" className="logo" />
          </Link>
          <ul className="navbar-menu">
            <li><Link to="/work">Work</Link></li>
            <li><Link to="/play">Play</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </div>
      </nav>
    // </Router>
  );
};

export default Navbar;
