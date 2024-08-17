import React from 'react';
import './Footer.css'; 

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>Designed and coded by Rachael Huang. Made possible by React and lots of snack breaks. :) </p>
        <p>Let's get in touch!</p>
        <p> <a href="https://www.linkedin.com/in/rachaelhuang/" target="_blank" rel="noopener noreferrer">LinkedIn</a> |  <a href="mailto:rachael.huang.27@dartmouth.edu">Email</a> </p>
        <p>&copy; {new Date().getFullYear()} Rachael Huang</p>
      </div>
    </footer>
  );
}

export default Footer;
