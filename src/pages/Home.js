import React from 'react';
import '../styles/Home.css';

const Home = () => {
  const backgroundImage = window.innerWidth <= 768 ? '/images/background-mobile.jpg' : '/images/background-desktop.jpg';

  return (
    <div
      className="home-container"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="mobile-overlay"></div> {/* Overlay for mobile */}
      <div className="welcome-text">
        <h1>Welcome to Homestead Puppies</h1>
        <p>We breed happy, healthy puppies to find their forever homes.</p>
        <button className="view-puppies-button">View Available Puppies</button>
      </div>
    </div>
  );
};

export default Home;
