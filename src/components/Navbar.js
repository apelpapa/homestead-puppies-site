import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'; // Ensure the correct path

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/images/logo.png" alt="Homestead Puppies Logo" />
      </div>
      <div className="nav-links">
        <Link to="/home">Home</Link>
        <Link to="/about-us">About Us</Link>
        <Link to="/available-puppies">Available Puppies</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
