import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-ivory pt-20 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-5 pointer-events-none">
         <div className="absolute -top-20 -right-20 w-96 h-96 bg-forest rounded-full blur-3xl"></div>
         <div className="absolute top-1/2 -left-20 w-72 h-72 bg-accent rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Animated Fade In Container */}
        <div className="animate-fade-in-up">
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-forest mb-6 leading-tight">
            Crafting Sustainable <br/> Excellence
          </h1>
          
          <h2 className="text-xl md:text-2xl text-accent font-semibold mb-8 tracking-wide">
            Aligning Mindset, Operations & Lifestyle for Generational Impact
          </h2>
          
          <p className="mt-4 max-w-3xl mx-auto text-lg text-slate-custom font-light leading-relaxed mb-10">
            At QenSalle, we partner with individuals, businesses, and organizations to align mindset, operations, and lifestyle with long-term success. We help you uncover clarity, build capacity, and create meaningful impact.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up delay-300">
          <a 
            href="#services" 
            className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-semibold rounded-sm text-white bg-accent hover:bg-accent-hover transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Explore Our Services
          </a>
          <a 
            href="#contact" 
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-forest text-base font-semibold rounded-sm text-forest hover:bg-forest hover:text-white transition-all"
          >
            Book a Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;