import React from 'react';
import '../styles/Puppies.css';
import puppyData from '../data/puppyData';
import PuppyLightbox from '../components/PuppyLightbox';

// Function to ensure the date is interpreted correctly in the local time zone
const parseLocalDate = (dateString) => {
  const [year, month, day] = dateString.split('-').map(Number);
  return new Date(year, month - 1, day);
};

// Function to calculate the ready date based on DOB
const calculateReadyDate = (dob) => {
  const dobDate = parseLocalDate(dob);
  const readyDate = new Date(dobDate);
  readyDate.setDate(dobDate.getDate() + 8 * 7); // 8 weeks later
  return readyDate.toLocaleDateString(); // Format the date as a readable string
};

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
          <p>Gender: {puppy.gender}</p>
          <p>Date of Birth: {parseLocalDate(puppy.dob).toLocaleDateString()}</p>
          <p>Ready to Take Home: {calculateReadyDate(puppy.dob)}</p>
		  <p>Father: {puppy.father}</p>
		  <p>Mother: {puppy.mother}</p>
        </div>
      ))}
    </div>
  );
};

export default Puppies;
