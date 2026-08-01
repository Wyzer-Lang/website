import React from 'react';
import { motion } from 'framer-motion';
import { FiZap, FiShield, FiCode } from 'react-icons/fi';
import BorderGlow from './react-bits/BorderGlow/BorderGlow';
import StarBorder from './react-bits/StarBorder/StarBorder';
import './Features.css';

const featuresData = [
  {
    title: 'Lightning Fast',
    description: 'Compiled directly to optimized machine code, Wyzer delivers unmatched execution speed for your applications.',
    icon: <FiZap size={24} />
  },
  {
    title: 'Memory Safe',
    description: 'Advanced compile-time checks ensure memory safety without the overhead of a garbage collector.',
    icon: <FiShield size={24} />
  },
  {
    title: 'Expressive Syntax',
    description: 'Write less, do more. Clean and modern syntax inspired by the best languages of the decade.',
    icon: <FiCode size={24} />
  }
];

const Features = () => {
  return (
    <section id="features" className="features-section" style={{ position: 'relative', overflow: 'hidden', padding: '100px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

      <div style={{ marginBottom: '40px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
        <h2 style={{ fontSize: '3rem', fontWeight: 'bold', margin: 0, textAlign: 'center' }}>Features</h2>
      </div>

      <div className="features-grid" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
        {featuresData.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
          >
            <BorderGlow className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </BorderGlow>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;
