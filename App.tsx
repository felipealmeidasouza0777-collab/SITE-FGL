import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Marquee from './components/Marquee';
import Features from './components/Features';
import Stats from './components/Stats';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-white min-h-screen text-dark selection:bg-primary selection:text-white">
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Problem />
        <Features />
        <Stats />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;