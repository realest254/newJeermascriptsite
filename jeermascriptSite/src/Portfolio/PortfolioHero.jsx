// App.jsx or Portfolio.jsx
import React from 'react';
import './PortfolioHero.css';

const Portfolio = () => {
  return (
    <div className="portfolio">
      <h1>Our Portfolio</h1>
      <p className="subheading">
        Explore the exceptional websites we've crafted for our clients, blending creativity
        with professional functionality.
      </p>
      <div className="services">
        <div className="service-card">
          <i className="icon-lightbulb"></i>
          <h3>Innovative Designs</h3>
          <p>Creating visually stunning designs that stand out.</p>
        </div>
        <div className="service-card">
          <i className="icon-code"></i>
          <h3>Expert Development</h3>
          <p>Developing robust, scalable, and efficient solutions.</p>
        </div>
        <div className="service-card">
          <i className="icon-megaphone"></i>
          <h3>Strategic Marketing</h3>
          <p>Crafting marketing strategies that deliver results.</p>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;