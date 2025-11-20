import React from 'react';
import { Brain, Cog, Leaf } from 'lucide-react';
import { Pillar } from '../types';

const pillars: Pillar[] = [
  {
    title: 'Mindset',
    description: 'Cultivating vision and resilience.',
    icon: Brain,
  },
  {
    title: 'Operations',
    description: 'Designing systems that support growth.',
    icon: Cog,
  },
  {
    title: 'Lifestyle',
    description: 'Building rhythms that reinforce lasting excellence.',
    icon: Leaf,
  },
];

const Pillars: React.FC = () => {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-forest mb-4">
            Rooted in Three Pillars
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl text-slate-dark font-serif max-w-4xl mx-auto leading-relaxed">
            "Our work is grounded in a deep belief: that clarity - when lived out consistently and sustainably - can shape lives, businesses, and communities from one generation to the next."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {pillars.map((pillar, index) => (
            <div 
              key={pillar.title} 
              className="flex flex-col items-center text-center p-10 rounded-lg bg-ivory hover:shadow-xl transition-all duration-300 group border-b-4 border-transparent hover:border-accent"
            >
              <div className="w-20 h-20 bg-forest/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-forest group-hover:text-white transition-colors text-forest">
                <pillar.icon size={36} strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-2xl font-bold text-slate-dark mb-4">{pillar.title}</h3>
              <p className="text-slate-custom leading-relaxed text-lg">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pillars;