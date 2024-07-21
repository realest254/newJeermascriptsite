import React from 'react';
import './hero.css';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="home-container">
      <main>
        <h2>Crafting Memorable Brands</h2>
        <h1>Unleash Your Brand's Potential With Top Notch Web Developmnet</h1>
        <p>
          Looking for a website that's not just stunning but also super functional ? Our team crafts custom web solutions
           that are as unique as you brand. We blend creativity with cutting edge tech to build site that captivate and convert. Ready to improve
           your brand ? Join Us at JeermaScript Agency.
        </p>
        <div className="cta-buttons">
          <Link to="/portfolio" className="primary-button">
            Discover Our Work
          </Link>
          <Link to="/about" className="secondary-button">
            Explore Services
          </Link>
        </div>
      </main>
    </div>
  );
};

export default HomePage;