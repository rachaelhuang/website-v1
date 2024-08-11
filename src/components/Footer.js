import React from 'react';
import './Footer.css'; 

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>Designed and coded by Rachael. Made possible by React and lots of snack breaks. :) </p>
        <p>Contact me at: <a href="mailto:your.email@example.com">your.email@example.com</a></p>
        <p> <a href="https://www.linkedin.com/in/rachaelhuang/" target="_blank" rel="noopener noreferrer">LinkedIn</a> </p>
        <p>&copy; {new Date().getFullYear()} Rachael Huang</p>
      </div>
    </footer>
  );
}

export default Footer;
