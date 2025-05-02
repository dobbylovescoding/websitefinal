
import React from 'react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-lwrnavy-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Logo />
            <p className="mt-4 text-white/70 max-w-md">
              Professional web solutions and tech advice for local businesses in Auckland. 
              Transparent pricing with a personal touch.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-8 sm:gap-16">
            <div>
              <h3 className="font-bold text-lwrgold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#home" className="text-white/70 hover:text-lwrgold transition-colors">Home</a></li>
                <li><a href="#about" className="text-white/70 hover:text-lwrgold transition-colors">About</a></li>
                <li><a href="#services" className="text-white/70 hover:text-lwrgold transition-colors">Services</a></li>
                <li><a href="#skills" className="text-white/70 hover:text-lwrgold transition-colors">Skills</a></li>
                <li><a href="#contact" className="text-white/70 hover:text-lwrgold transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lwrgold mb-4">Services</h3>
              <ul className="space-y-2">
                <li><span className="text-white/70">Website Development</span></li>
                <li><span className="text-white/70">Domain & Email Setup</span></li>
                <li><span className="text-white/70">Website Repairs</span></li>
                <li><span className="text-white/70">Tech Consulting</span></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 text-sm">
            &copy; {new Date().getFullYear()} Local Web Refresh. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
