import React from 'react';
import './PharmacyHome.css';

function PharmacyHome() {
  return (
    <>
      <div className="top-bar">
        <span>📍 12445 Lake Fraser Dr SE #309, Calgary, AB</span>
        <span>📞 (403) 720-6337</span>
      </div>
      <nav className="navbar">
        <div className="logo">Avenida <span>PHARMACY</span></div>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Services</li>
          <li>Special Offers</li>
          <li>Blog</li>
          <li>Contact US</li>
        </ul>
        <button className="book-btn">Book Online</button>
      </nav>
      <div className="hero">
        <h1>Your Neighborhood Pharmacy in Calgary - Care You Can Count On</h1>
      </div>
    </>
  );
}

export default PharmacyHome;
