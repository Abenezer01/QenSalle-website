import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Pillars from './components/Pillars';
import Services from './components/Services';
import About from './components/About';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="font-sans text-slate-dark antialiased selection:bg-accent selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Pillars />
        <Services />
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default App;