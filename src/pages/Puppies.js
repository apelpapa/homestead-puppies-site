import React from 'react';
import '../styles/Puppies.css';
import puppyData from '../data/puppyData';
import PuppyLightbox from '../components/PuppyLightbox';

const Puppies = () => {
  return (
    <div className="puppies-container">
      <h2>Available Puppies</h2>
      {puppyData.map((puppy) => (
        <div key={puppy.id} className="puppy-card">
          <div className="lightbox-container">
            <PuppyLightbox images={puppy.images} />
          </div>
          <h3>{puppy.name}</h3>
          <p>Breed: {puppy.breed}</p>
          <p>Age: {puppy.age}</p>
        </div>
      ))}
    </div>
  );
};

export default Puppies;
