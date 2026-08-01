import React from 'react';
import wyzerLogo from '../assets/wyzer-logo.svg';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar-container">
      <nav className="navbar">
        <div className="nav-brand">
          <img src={wyzerLogo} alt="Wyzer" style={{ height: '36px', transform: 'translateY(3px)' }} />
        </div>
        <ul className="nav-links">
          <li className="nav-item"><a href="#features">Features</a></li>
          <li className="nav-item"><a href="#examples">Examples</a></li>
          <li className="nav-item"><a href="https://discord.gg/RhpPhkTrVu" target="_blank" rel="noopener noreferrer">Community</a></li>
          <li className="nav-item"><a href="https://github.com/Wyzer-Lang" target="_blank" rel="noopener noreferrer">GitHub</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
