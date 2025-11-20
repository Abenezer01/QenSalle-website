import React from 'react';
import { Users, Globe, TrendingUp, CheckCircle2 } from 'lucide-react';
import { Service } from '../types';

const services: Service[] = [
  {
    id: 'training',
    title: 'Training, Coaching & Mentorship',
    description: 'Empowering individuals and organizations with practical knowledge and decision-making skills.',
    icon: Users,
    packages: [
      {
        title: 'Financial Literacy & Coaching',
        items: [
          'Introductory Financial Education',
          'Group Financial Training',
          'One-on-One Financial Coaching',
          'Organizational Financial Literacy Programs'
        ]
      },
      {
        title: 'Corporate Training & Leadership Development',
        items: [
          'Leadership Development Programs',
          'Team Building & Conflict Resolution',
          'Executive Coaching for Senior Leaders'
        ]
      },
      {
        title: 'Business Advisory & Mentorship',
        items: [
          'Startup Advisory & Planning',
          'Business Growth Strategy',
          'Long-Term Entrepreneur Mentorship'
        ]
      }
    ]
  },
  {
    id: 'community',
    title: 'Community Development & Impact Consulting',
    description: 'Helping communities design inclusive and scalable transformation programs.',
    icon: Globe,
    packages: [
      {
        title: 'Community Development Strategy',
        items: [
          'Community Needs Assessment',
          'Program Development & Stakeholder Engagement',
          'Long-Term Implementation Support'
        ]
      },
      {
        title: 'Nonprofit & NGO Consulting',
        items: [
          'Organizational Capacity Assessments',
          'Fundraising & Donor Strategy',
          'Program Scaling & Sustainability Consulting'
        ]
      }
    ]
  },
  {
    id: 'financial',
    title: 'Financial, Equity & Systems Solutions',
    description: 'Building financial clarity, attracting funding, and implementing scalable systems.',
    icon: TrendingUp,
    packages: [
      {
        title: 'Small Business Finance Consulting',
        items: [
          'Financial Health Assessments',
          'Business Plan & Loan Readiness Support',
          'Strategic Financial Roadmapping'
        ]
      },
      {
        title: 'Corporate Finance & Equity Advisory',
        items: [
          'Investment Readiness & Pitch Preparation',
          'Corporate Capital Structure Planning',
          'Equity Strategy & Investor Relations Support'
        ]
      },
      {
        title: 'Systems Advisory & Development (SAS)',
        items: [
          'Business Process Optimization',
          'Systems Architecture & Workflow Design',
          'Scalable Operational & Administrative Tools Implementation'
        ]
      }
    ]
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="text-accent font-bold uppercase tracking-widest text-sm mb-3 block">Our Expertise</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-forest mb-6">Our Services</h2>
          <p className="text-xl text-slate-custom max-w-3xl mx-auto leading-relaxed font-light">
            We offer three core service areas tailored to where you are and where you want to go.
          </p>
        </div>

        <div className="space-y-24">
          {services.map((service, index) => (
            <div key={service.id} className={`flex flex-col lg:flex-row gap-12 lg:gap-20 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              
              {/* Service Header & Icon */}
              <div className="lg:w-1/3">
                <div className="sticky top-28">
                  <div className="w-20 h-20 bg-accent rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg shadow-accent/20 transform -rotate-3">
                    <service.icon size={40} strokeWidth={1.5} />
                  </div>
                  <div className="flex items-center gap-3 mb-4">
                     <span className="text-6xl font-serif text-forest/10 font-bold">0{index + 1}</span>
                     <div className="h-px flex-1 bg-forest/10"></div>
                  </div>
                  <h3 className="font-serif text-3xl font-bold text-forest mb-6 leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-slate-custom text-lg leading-relaxed mb-8">
                    {service.description}
                  </p>
                  <a href="#contact" className="inline-flex items-center text-accent font-bold hover:text-forest transition-colors group">
                    Get Started 
                    <div className="w-8 h-px bg-accent ml-3 group-hover:w-12 transition-all"></div>
                  </a>
                </div>
              </div>

              {/* Packages Grid */}
              <div className="lg:w-2/3">
                <div className="grid md:grid-cols-2 gap-6">
                  {service.packages.map((pkg, idx) => (
                    <div 
                      key={idx} 
                      className={`bg-white p-8 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow ${
                        idx === service.packages.length - 1 && service.packages.length % 2 !== 0 ? 'md:col-span-2' : ''
                      }`}
                    >
                      <h4 className="font-serif text-xl font-bold text-forest mb-6 pb-4 border-b border-gray-50">
                        {pkg.title}
                      </h4>
                      <ul className="space-y-4">
                        {pkg.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-slate-custom">
                            <CheckCircle2 size={18} className="text-accent mt-1 flex-shrink-0" />
                            <span className="text-sm leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-8 pt-4">
                         <a href="#" className="text-sm font-bold text-slate-400 hover:text-accent transition-colors uppercase tracking-wide">Learn More</a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;