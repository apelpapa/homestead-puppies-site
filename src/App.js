import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AboutUs from './pages/About';
import Puppies from './pages/Puppies';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Footer from './components/Footer'; // Import the Footer component

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/available-puppies" element={<Puppies />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer /> {/* Add the Footer component here */}
    </Router>
  );
}

export default App;
