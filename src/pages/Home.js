import React from 'react';
import '../styles/Home.css'; // Ensure you have a CSS file for styling

const Home = () => {
  return (
    <div className="home-container">
      <div className="image-container">
        <img src="/images/background.jpg" alt="Main Banner" className="banner-image" />
      </div>
      <div className="welcome-text">
        <h1>Welcome to Homestead Puppies</h1>
        <p>We breed happy, healthy puppies to find their forever homes.</p>
        <button className="view-puppies-button">View Available Puppies</button>
      </div>
    </div>
  );
};

export default Home;
