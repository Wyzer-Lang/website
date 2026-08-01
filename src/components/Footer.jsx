import React from 'react';
import './Footer.css';
import wyzerLogo from '../assets/wyzer-logo.svg';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-brand">
          <img src={wyzerLogo} alt="Wyzer" className="footer-logo" />
          <p className="footer-tagline">Build Faster with Wyzer.</p>
        </div>
        <div className="footer-links">
          <div className="footer-column">
            <h3>Community</h3>
            <a href="https://discord.gg/RhpPhkTrVu" target="_blank" rel="noopener noreferrer">Discord</a>
            <a href="https://github.com/Wyzer-Lang" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Wyzer Language. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
