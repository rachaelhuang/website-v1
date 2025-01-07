import React from 'react';
import './Footer.css'; 

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="fancy-text">Thanks for being here!</p>
        <p>Designed and coded by me. Made possible by React and lots of snack breaks. :)</p>
        <p>
          Let's get in touch: 
          <a href="https://www.linkedin.com/in/rachaelhuang/" target="_blank" rel="noopener noreferrer">LinkedIn</a> | 
          <a href="mailto:rachael.huang.27@dartmouth.edu">Email</a>
        </p>
        <p className="updated">Last updated on {new Date().toLocaleDateString('en-US')}</p>
      </div>
    </footer>
  );
}

export default Footer;