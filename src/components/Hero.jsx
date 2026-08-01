import React from 'react';
import { motion } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';
import BlurText from './react-bits/BlurText/BlurText';
import DarkVeil from './react-bits/DarkVeil/DarkVeil';
import ScrollVelocity from './react-bits/ScrollVelocity/ScrollVelocity';
import './Hero.css';

const Hero = () => {
  return (
    <>
      <section className="hero-container" style={{ position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
          <DarkVeil />
        </div>
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ position: 'relative', zIndex: 1 }}
        >
          <div className="hero-capsule">
            We're looking for contributors! <a href="https://github.com/wyzer-lang/wyzer" style={{ textDecoration: 'underline' }} >Github</a>
          </div>
          <h1 className="hero-title">
            <BlurText
              text="Build Faster with Wyzer"
              delay={150}
              animateBy="words"
              direction="top"
              highlightWords={['Wyzer']}
              highlightClass="wyzer-gradient-text"
            />
          </h1>
        <p className="hero-subtitle">
          The modern, blazingly fast programming language designed for ultimate developer experience and safety.
        </p>
        <div className="hero-buttons">
            <button className="btn-primary">Get Started</button>
            <button className="btn-secondary">Read Documentation</button>
          </div>
        </motion.div>
        
        <motion.div 
          className="scroll-indicator"
          animate={{ y: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <a href="#features">
            <FiChevronDown size={40} />
          </a>
        </motion.div>
      </section >

      <div className="divider-section" style={{ padding: '4rem 0', margin: '3rem 0', background: 'rgba(0,0,0,0.2)', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
        <ScrollVelocity
          texts={['Wyzer Wyzer Wyzer', 'Wyzer Wyzer Wyzer']}
          velocity={100}
          className="velocity-text-gradient"
        />
      </div>
    </>
  );
};

export default Hero;
