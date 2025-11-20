import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Pillars from '../components/Pillars';
import Services from '../components/Services';
import About from '../components/About';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Pillars />
      <Services />
      <About />
      <Footer />
    </main>
  );
}