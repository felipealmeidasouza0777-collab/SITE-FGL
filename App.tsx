import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Marquee from './components/Marquee';
import Features from './components/Features';
import Services from './components/Services';
import PlanBuilder from './components/PlanBuilder';
import Stats from './components/Stats';
import CTA from './components/CTA';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="bg-white min-h-screen text-dark selection:bg-primary selection:text-white">
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Problem />
        <Features />
        <PlanBuilder />
        <Services />
        <Stats />
        <CTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;