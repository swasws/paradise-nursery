import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <h1>Paradise Nursery</h1>
      <p>
        At Paradise Nursery, we bring nature into your home with our curated selection of houseplants.
        From air-purifying to aromatic varieties, find the perfect plant to brighten your space.
      </p>
      <Link to="/products">
        <button className="get-started-btn">Get Started</button>
      </Link>
    </div>
  );
};

export default LandingPage;