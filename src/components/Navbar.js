import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <Router>

    <nav className="navbar">
      <div className="navbar-container">
      <a href = "index.html">
            <img src = "../assets/RH.svg" alt = "Rachael Huang" class = "logo" ></img>
          </a>        
          <ul className="navbar-menu">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/work">Work</Link></li>
            <li><Link to="/play">Play</Link></li>
            <li><Link to="/about">About</Link></li>
        </ul>
      </div> 
    </nav>
    </Router>

  );
};

export default Navbar;