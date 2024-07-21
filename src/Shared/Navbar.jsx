// components/NavBar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../Utils/logonew.jpg'

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <nav>
            <ul className="navbar-nav">
              <li><Link to="/" className="nav-link">Home</Link></li>
              <li><Link to="/about" className="nav-link">About</Link></li>
              <li><Link to="/portfolio" className="nav-link">Portfolio</Link></li>
            </ul>
          </nav>
          <Link to="/contact" className="contact-button">Contact us</Link>
        </div>
        <Link to="/" className="navbar-logo"><img src={logo} alt="" /></Link>
        <div className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
};

export default NavBar;