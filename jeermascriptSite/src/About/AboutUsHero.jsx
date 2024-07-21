import React from 'react';
import './AboutUsHero.css';

const AboutUsHero = () => {
  return (
    <section className="about-us-hero">
      <div className="hero-content">
        <h1>About Jeermascript Agency</h1>
        <p>
          Discover our journey and meet the passionate team behind Jeermascript Agency.
          We are dedicated to blending creativity with professional functionality to elevate
          your brand.
        </p>
        <div className="services">
          <div className="service-card">
            <span className="service-icon">💡</span>
            <h3>Innovating Digital Experiences</h3>
            <p>Creating visually stunning designs that stand out.</p>
          </div>
          <div className="service-card">
            <span className="service-icon">&lt;/&gt;</span>
            <h3>Expert Development</h3>
            <p>Developing robust, scalable, and efficient solutions.</p>
          </div>
          <div className="service-card">
            <span className="service-icon">📣</span>
            <h3>Strategic Marketing</h3>
            <p>Crafting marketing strategies that deliver results.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsHero;