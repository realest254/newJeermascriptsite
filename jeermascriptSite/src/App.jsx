// src/App.jsx
import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './home.jsx';
import Navbar from './Shared/Navbar.jsx';
import Footer from './Shared/Footer.jsx';
import Portfolio from './Portfolio.jsx';
import About from './about.jsx';
import ContactForm from './ContactPage/ContactPage.jsx';
import SEO from './SEO/SEO.jsx';
import ScrollToTop from './scrollToTop.jsx';

const App = () => {
  const baseUrl = 'https://jeermascriptagency.africa';
  
  const defaultSchema = {
    "@context": "http://schema.org",
    "@type": "Organization",
    "name": "Jeermascript Agency",
    "url": baseUrl,
    "logo": "https://i.ibb.co/nLss8dd/logo.jpg",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+254-716517964",
      "contactType": "customer service"
    },
    "sameAs": [
      "https://www.facebook.com/profile.php?id=61557293284465",
      "https://www.x.com/Jermaine_writes",
      "https://www.linkedin.com/in/jermainekariuki"
    ]
  };

  return (
    <HelmetProvider>
      <Router>
      <ScrollToTop/>
        <SEO 
          title="Jeermascript Agency | Digital Marketing in Nairobi"
          description="JEERMASCRIPT AGENCY specializes in SEO, digital marketing, social media, and web development services. Grow your online presence with us!"
          image="https://i.ibb.co/nLss8dd/logo.jpg"
          url={baseUrl}
          keywords="SEO, digital marketing, social media, web development, online presence"
          schema={defaultSchema}
          breadcrumb={{
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [{
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": baseUrl
            }]
          }}
        />
        <div className="app-container">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/contact" element={<ContactForm />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
};

export default App;