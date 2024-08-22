import React from 'react';
import './Footer.css'; 

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="fancy-text"> thanks for being here!</p>
        <p>designed and coded by rachael huang. made possible by react and lots of snack breaks. :) </p>
        <p> let's get in touch: <a href="https://www.linkedin.com/in/rachaelhuang/" target="_blank" rel="noopener noreferrer">LinkedIn</a> |  <a href="mailto:rachael.huang.27@dartmouth.edu">Email</a> </p>
        <p className="updated">last updated on {new Date().toLocaleDateString('en-US')}</p>
      </div>
    </footer>
  );
}

export default Footer;
