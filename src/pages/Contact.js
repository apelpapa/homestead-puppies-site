import React from 'react';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <p>If you are interested in one of our puppies or have any questions, please reach out to us:</p>
      <form action="https://formspree.io/f/xyzgkwrd" method="POST">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" placeholder="Your Name" required />
        
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="Your Email" required />
        
        <label htmlFor="phone">Phone Number:</label>
        <input type="text" id="phone" name="phone" placeholder="Your Phone Number" />
        
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" placeholder="Your Message" required></textarea>
        
        <input type="submit" value="Submit" />
      </form>
      <div className="contact-details">
        <p>Email: contact@homestead-puppies.com</p>
        <p>Phone: 720-833-8083</p>
        <p>Location: Parker, CO</p>
      </div>
    </div>
  );
};

export default Contact;
