import React, { useState } from 'react';
import '../styles/Navbar.css';  // Make sure you have a separate CSS file for styles

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src="/images/logo.png" alt="Homestead Puppies Logo" />
      </div>
      <div className={`navbar-hamburger ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={`navbar-menu ${menuOpen ? 'active' : ''}`}>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about-us">About Us</a></li>
          <li><a href="/available-puppies">Available Puppies</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
      <div className={`overlay ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}></div>
    </nav>
  );
}

export default Navbar;
