import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
      <a href = "index.html">
            <img src = "../assets/RH.svg" alt = "Rachael Huang" class = "logo" ></img>
          </a>        
          <ul className="navbar-menu">
          <li><a href="#home">Work</a></li>
          <li><a href="#about">Play</a></li>
          <li><a href="#projects">About</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;