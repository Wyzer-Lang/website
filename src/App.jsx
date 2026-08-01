import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CodeShowcase from './components/CodeShowcase';
import Features from './components/Features';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <CodeShowcase />
      <Footer />
    </>
  );
}

export default App;
