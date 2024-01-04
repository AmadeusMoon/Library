import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Homepage() {
  return (
    <div
      className="homepage"
      id="homepage"
    >
      {/* Navigation Bar */}
      <div
        className="navbar"
        id="navbar"
      >
        <Navbar />
      </div>

      {/* Main Content */}
      <div
        className="main-content"
        id="main-content"
      >
        <div
          className="hero-section"
          id="hero-section"
        ></div>
        <div
          className="ad1"
          id="ad1"
        ></div>
        <div
          className="ad2"
          id="ad2"
        ></div>
        <div
          className="redirect-reading"
          id="redirect-reading"
        ></div>
        <div
          className="redirect-events"
          id="redirect-events"
        ></div>
        <div
          className="redirect-about"
          id="redirect-about"
        ></div>
      </div>

      {/* Footer  */}
      <div
        className="footer"
        id="footer"
      >
        <Footer />
      </div>
    </div>
  );
}

export default Homepage;
