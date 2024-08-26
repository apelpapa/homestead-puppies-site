import React from 'react';
import puppyData from '../data/puppyData';
import './Puppies.css';

const Puppies = () => {
  return (
    <div className="puppies-container">
      <h2>Available Puppies</h2>
      {puppyData.map((puppy) => (
        <div key={puppy.id} className="puppy-card">
          <img src={puppy.images[0]} alt={puppy.name} />
          <h3>{puppy.name}</h3>
          <p>Breed: {puppy.breed}</p>
          <p>Age: {puppy.age}</p>
        </div>
      ))}
    </div>
  );
};

export default Puppies;
