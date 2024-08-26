import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'; // Assuming your CSS file is here

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        <img src="/images/logo.png" alt="Homestead Puppies" className="logo" />
        <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <nav className={`navbar-menu ${isOpen ? 'open' : ''}`}>
          <Link to="/home" onClick={toggleMenu}>Home</Link>
          <Link to="/about-us" onClick={toggleMenu}>About Us</Link>
          <Link to="/available-puppies" onClick={toggleMenu}>Available Puppies</Link>
          <Link to="/contact" onClick={toggleMenu}>Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
