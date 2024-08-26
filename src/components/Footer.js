import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section contact">
          <h2>Contact</h2>
          <p>Email: contact@homestead-puppies.com</p>
          <p>Phone: 720-833-8083</p>
          <p>Location: Parker, CO</p>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; 2024 Homestead Puppies. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
