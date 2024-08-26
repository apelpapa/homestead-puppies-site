import React, { useState } from 'react';
import '../styles/PuppyLightbox.css';

const PuppyGallery = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const prevImage = (e) => {
    e.stopPropagation(); // Prevent the modal from closing
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  const nextImage = (e) => {
    e.stopPropagation(); // Prevent the modal from closing
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  return (
    <div>
      <div className="gallery-container">
        <button className="gallery-prev gallery-button" onClick={prevImage}>
          &lt;
        </button>
        <img
          src={images[currentIndex]} // Display the current image based on index
          alt={`Puppy ${currentIndex + 1}`}
          className="gallery-image"
          onClick={() => openModal(currentIndex)} // Open modal with the current image
        />
        <button className="gallery-next gallery-button" onClick={nextImage}>
          &gt;
        </button>
      </div>

      {isOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content">
            <img
              src={images[currentIndex]}
              alt={`Puppy ${currentIndex + 1}`}
              className="modal-image"
            />
            <button className="modal-close" onClick={closeModal}>
              &times;
            </button>
            <button className="modal-prev modal-button" onClick={prevImage}>
              &lt;
            </button>
            <button className="modal-next modal-button" onClick={nextImage}>
              &gt;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PuppyGallery;
