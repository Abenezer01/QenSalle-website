import React from 'react';
import { Target, Clock, Users, ShieldCheck, ArrowRight } from 'lucide-react';

const About: React.FC = () => {
  return (
    <>
      {/* About Teaser Section */}
      <section id="about" className="py-24 bg-forest text-white relative overflow-hidden">
        {/* Background texture */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-1/2">
              <span className="text-accent font-bold tracking-widest uppercase text-sm mb-2 block">About Us</span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Purpose-Driven <br /> Transformation
              </h2>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                We are a purpose-driven consulting and coaching firm committed to transformation that lasts. With expertise spanning finance, business development, leadership, and social impact, we guide our clients toward clarity, consistency, and sustainability.
              </p>
              <button className="bg-white text-forest px-8 py-3 rounded-sm font-semibold hover:bg-gray-100 transition-colors shadow-lg flex items-center gap-2">
                Read Our Story
                <ArrowRight size={18} />
              </button>
            </div>
            <div className="md:w-1/2 w-full">
                <div className="bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-xl relative">
                   <div className="absolute -top-4 -left-4 text-6xl text-accent opacity-50 font-serif">"</div>
                   <h3 className="font-serif text-2xl md:text-3xl italic mb-6 text-center leading-relaxed">
                     Clarity - when lived out consistently and sustainably - can shape lives.
                   </h3>
                   <div className="w-16 h-1 bg-accent mx-auto"></div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-us" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-forest mb-4">Why Choose Us</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              { 
                icon: Target, 
                title: 'We Build with Clarity', 
                text: 'Purpose-led strategy that cuts through noise.' 
              },
              { 
                icon: Clock, 
                title: 'Sustainability at the Core', 
                text: 'Built to last across generations.' 
              },
              { 
                icon: Users, 
                title: 'Mindset + Systems', 
                text: 'We integrate personal growth, organizational design, and scalable systems.' 
              },
              { 
                icon: ShieldCheck, 
                title: 'True Partnership', 
                text: 'From ideation to implementation, we walk with you.' 
              }
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-6 p-6 rounded-lg hover:bg-ivory transition-colors duration-300">
                <div className="flex-shrink-0 w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                  <item.icon size={28} />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-forest mb-2">{item.title}</h3>
                  <p className="text-slate-custom leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Digital Products Teaser */}
      <section id="products" className="py-24 bg-ivory border-y border-gray-200 relative overflow-hidden">
         {/* Decorative blob */}
         <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-bl-full"></div>

         <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <span className="text-accent font-bold uppercase tracking-wider text-sm mb-3 block">Coming Soon</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-forest mb-6">Digital Products</h2>
            <p className="text-xl font-light text-slate-custom mb-8">
              Learn. Grow. Lead — at your own pace. <br/>
              <span className="text-base mt-2 block text-slate-500">We offer digital learning tools to build your skills on your terms.</span>
            </p>
            
            <div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-12 text-left">
               {['Online Courses', 'eBooks & Business Guides', 'Downloadable Templates & Toolkits'].map((item) => (
                 <div key={item} className="bg-white p-4 rounded border border-gray-100 shadow-sm flex items-center gap-3">
                   <div className="w-2 h-2 bg-accent rounded-full"></div>
                   <span className="text-slate-dark font-medium">{item}</span>
                 </div>
               ))}
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 inline-block max-w-lg w-full">
              <h3 className="text-slate-dark font-bold mb-4">Join our mailing list to be notified when our digital library launches.</h3>
              <div className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:border-accent transition-colors"
                />
                <button className="bg-forest text-white px-6 py-3 rounded-sm font-semibold hover:bg-forest-light transition-colors">
                  Notify Me
                </button>
              </div>
            </div>
         </div>
      </section>
    </>
  );
};

export default About;