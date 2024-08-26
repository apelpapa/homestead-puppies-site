import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AboutUs from './pages/About';
import Puppies from './pages/Puppies';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="app-container"> {/* Added container for layout */}
        <Navbar />
        <main> {/* Main content area */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/available-puppies" element={<Puppies />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
