import React from 'react';
import './PortfolioContact.css';

const ContactInfo = ({ icon, title, content }) => (
  <div className="contact-info">
    <div className="contact-icon">{icon}</div>
    <div className="contact-details">
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  </div>
);

const PortfolioContact = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <h1>Get in Touch with Our Design Studio</h1>
        <p>Our team is ready to assist you with outstanding design solutions.</p>
        
        <div className="contact-info-container">
          <ContactInfo 
            icon={<i className="fas fa-clock"></i>}
            title="Office Hours"
            content="Monday-Friday 8:00 am to 5:00 pm"
          />
          <ContactInfo 
            icon={<i className="fas fa-map-marker-alt"></i>}
            title="Kenya Office"
            content="Nairobi, Thome"
          />
          <ContactInfo 
            icon={<i className="fas fa-phone"></i>}
            title="Get In Touch"
            content={<>
              (+254) 716 517 964<br />
              (+254) 748 877 431
            </>}
          />
        </div>
      </div>
    </section>
  );
};

export default PortfolioContact;