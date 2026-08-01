import React from 'react';
import './WyzerInfo.css';

const WyzerInfo = () => {
  return (
    <section className="wyzer-info-section" style={{ position: 'relative', overflow: 'hidden', padding: '180px 20px 100px 20px', color: 'white' }}>
      
      <div className="wyzer-info-content" style={{ position: 'relative', zIndex: 2, maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '40px' }}>
        <h2 style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '2rem' }}>Core Concepts</h2>
        
        <div className="info-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          <div className="info-card" style={{ padding: '30px', background: 'rgba(255,255,255,0.05)', borderRadius: '15px', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.1)' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>One Rule</h3>
            <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: '1.6' }}>Memory, Concurrency, and Distributed Safety unified into a single elegant model.</p>
          </div>
          
          <div className="info-card" style={{ padding: '30px', background: 'rgba(255,255,255,0.05)', borderRadius: '15px', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.1)' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>Perceus Memory Model</h3>
            <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: '1.6' }}>Fast, predictable, and entirely Garbage Collection free memory management.</p>
          </div>
          
          <div className="info-card" style={{ padding: '30px', background: 'rgba(255,255,255,0.05)', borderRadius: '15px', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.1)' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>Choreographic Programming</h3>
            <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: '1.6' }}>Network safety without deadlocks. Write distributed systems with confidence.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WyzerInfo;
