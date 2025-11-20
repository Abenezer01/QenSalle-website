'use client';

import React, { useState } from 'react';
import { Mail, Phone, Linkedin, Twitter, Instagram, ArrowUpRight, CheckCircle, Loader2, AlertCircle } from 'lucide-react';

const Footer: React.FC = () => {
  const [formData, setFormData] = useState({ email: '', phone: '' });
  const [errors, setErrors] = useState({ email: '', phone: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePhone = (phone: string) => {
    // Allows +, -, space, (), and digits. Min 10 chars.
    return /^[\d\+\-\(\) ]{10,}$/.test(phone);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = { email: '', phone: '' };
    let isValid = true;

    if (!formData.email) {
      newErrors.email = 'Email is required.';
      isValid = false;
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
      isValid = false;
    }

    if (!formData.phone) {
      newErrors.phone = 'Phone number is required.';
      isValid = false;
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number (min 10 digits).';
      isValid = false;
    }

    setErrors(newErrors);

    if (isValid) {
      setStatus('submitting');
      // Simulate API call
      setTimeout(() => {
        setStatus('success');
        setFormData({ email: '', phone: '' });
        // Reset status after 5 seconds
        setTimeout(() => setStatus('idle'), 5000);
      }, 1500);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <footer id="contact" className="bg-forest text-white pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-20">
          
          {/* Brand Column (3 cols) */}
          <div className="lg:col-span-3 space-y-6">
            <a href="#" className="font-serif text-3xl font-bold tracking-wide block text-white">QenSalle</a>
            <p className="text-gray-300 text-base leading-relaxed max-w-xs">
              Ready to lead with clarity and build with purpose? Let’s craft a future that’s excellent—and sustainable.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors" aria-label="Twitter">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors" aria-label="Instagram">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Menu (2 cols) */}
          <div className="lg:col-span-2">
            <h3 className="font-serif text-lg font-semibold mb-6 text-accent">Menu</h3>
            <ul className="space-y-3">
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors flex items-center gap-1 group">About Us <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" /></a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors flex items-center gap-1 group">Services <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" /></a></li>
              <li><a href="#why-us" className="text-gray-300 hover:text-white transition-colors flex items-center gap-1 group">Insights <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" /></a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors flex items-center gap-1 group">Contact <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" /></a></li>
            </ul>
          </div>

          {/* Contact Info (3 cols) */}
          <div className="lg:col-span-3">
            <h3 className="font-serif text-lg font-semibold mb-6 text-accent">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-300">
                <Mail size={18} className="mt-1 text-accent flex-shrink-0" />
                <span className="break-all">hello@qensalle.com</span>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <Phone size={18} className="mt-1 text-accent flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="pt-4">
                <a href="#" className="inline-block text-sm text-accent hover:text-white transition-colors underline underline-offset-4">
                  Book Discovery Session
                </a>
              </li>
            </ul>
          </div>

          {/* Form Column (4 cols) */}
          <div className="lg:col-span-4 bg-white/5 p-6 rounded-lg border border-white/10">
            <h3 className="font-serif text-lg font-semibold mb-2 text-white">Request a Callback</h3>
            <p className="text-sm text-gray-400 mb-4">Leave your details and we'll get back to you.</p>
            
            {status === 'success' ? (
              <div className="bg-forest-light/50 border border-forest-light p-4 rounded-md flex flex-col items-center justify-center text-center min-h-[200px] animate-fade-in">
                <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center text-green-400 mb-3">
                  <CheckCircle size={24} />
                </div>
                <h4 className="font-bold text-white mb-1">Request Received!</h4>
                <p className="text-gray-300 text-sm">We'll be in touch shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="email" className="sr-only">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    className={`w-full px-4 py-3 bg-white/10 border rounded-sm text-white placeholder-gray-400 focus:outline-none focus:ring-1 transition-colors ${
                      errors.email 
                        ? 'border-red-500 focus:border-red-500 focus:ring-red-500' 
                        : 'border-white/10 focus:border-accent focus:ring-accent'
                    }`}
                  />
                  {errors.email && (
                    <div className="flex items-center gap-1 mt-1 text-red-400 text-xs">
                      <AlertCircle size={12} />
                      <span>{errors.email}</span>
                    </div>
                  )}
                </div>
                
                <div>
                  <label htmlFor="phone" className="sr-only">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className={`w-full px-4 py-3 bg-white/10 border rounded-sm text-white placeholder-gray-400 focus:outline-none focus:ring-1 transition-colors ${
                      errors.phone 
                        ? 'border-red-500 focus:border-red-500 focus:ring-red-500' 
                        : 'border-white/10 focus:border-accent focus:ring-accent'
                    }`}
                  />
                  {errors.phone && (
                    <div className="flex items-center gap-1 mt-1 text-red-400 text-xs">
                      <AlertCircle size={12} />
                      <span>{errors.phone}</span>
                    </div>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full bg-accent hover:bg-accent-hover disabled:bg-accent/50 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-sm transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    'Submit Request'
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm gap-4">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <p>&copy; {new Date().getFullYear()} QenSalle Consulting. All rights reserved.</p>
          </div>
          
          <div className="flex gap-6 flex-wrap justify-center">
             <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
             <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
             <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;