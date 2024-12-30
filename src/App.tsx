import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Solution from './components/Solution';
import CaseStudies from './components/CaseStudies';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <AboutUs />
      <Solution />
      <CaseStudies />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;