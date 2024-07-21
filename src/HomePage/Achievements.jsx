import React from 'react';
import './Achievements.css';

const AchievementsSection = () => {
  return (
    <section className="achievements-section">
      <div className="achievements-content">
        <h3>Our Achievements</h3>
        <h2>Jeermascript Agency: Excellence in Web Development</h2>
        <p>
          Jeermascript Agency has a proven track record of success in web
          development. We blend creative design with professional functionality
          to showcase your brand and services.
        </p>
        <div className="achievement-stats">
          <div className="stat">
            <h4>200+</h4>
            <p>Projects Completed</p>
          </div>
          <div className="stat">
            <h4>150+</h4>
            <p>Satisfied Clients</p>
          </div>
          <div className="stat">
            <h4>50+</h4>
            <p>Reviews</p>
          </div>
          <div className="stat">
            <h4>4+</h4>
            <p>Years of Service</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;