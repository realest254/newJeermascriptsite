import React from 'react';
import './Contacts.css';

const Contacts = () => {
  return (
    <div className="container">
      <header className="header">
        Say hello to Jeermascript Agency
      </header>
      <main className="main">
        <section className="left-section">
          <h1 className="title">Interested in collaborating?</h1>
          <p className="operating-hours">Monday-Friday, 9:00 am to 6:00 pm</p>
          <p className="availability">Our team is available for your queries.</p>
        </section>
        <section className="right-section">
          <div className="contact-info">
            <h2 className="section-title">SEND US A MESSAGE</h2>
            <a href="mailto:jeermascriptt@gmail.com" className="email">info@jeermascriptagency.africa</a>
          </div>
          <div>
            <h2 className="section-title">FOLLOW US</h2>
            <div className="social-links">
              <div className="social-column">
                <a href="https://www.instagram.com/jeermascript/" className="social-link" target="_blank" rel="noopener noreferrer">Instagram</a>
                <a href="https://www.facebook.com/profile.php?id=61557293284465" className="social-link" target="_blank" rel="noopener noreferrer">Facebook</a>
              </div>
              <div className="social-column">
                <a href="https://medium.com/@jeermascriptt" className="social-link" target="_blank" rel="noopener noreferrer">Medium</a>
                <a href="https://www.tiktok.com/@jeermascript_" className="social-link" target="_blank" rel="noopener noreferrer">Tiktok</a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Contacts;