
import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { cn } from '@/lib/utils';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        isScrolled 
          ? "bg-lwrnavy/90 backdrop-blur-md shadow-md py-2" 
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Logo />
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-white hover:text-lwrgold transition-colors font-medium">Home</a>
          <a href="#about" className="text-white hover:text-lwrgold transition-colors font-medium">About</a>
          <a href="#services" className="text-white hover:text-lwrgold transition-colors font-medium">Services</a>
          <a href="#skills" className="text-white hover:text-lwrgold transition-colors font-medium">Skills</a>
          <a href="#contact" className="bg-lwrgold text-lwrnavy px-4 py-2 rounded-md hover:bg-lwrgold-light transition-colors font-medium">
            Get in Touch
          </a>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-lwrnavy shadow-lg absolute w-full">
          <div className="flex flex-col px-4 py-2 space-y-4">
            <a 
              href="#home" 
              className="text-white py-2 hover:text-lwrgold transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </a>
            <a 
              href="#about" 
              className="text-white py-2 hover:text-lwrgold transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#services" 
              className="text-white py-2 hover:text-lwrgold transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </a>
            <a 
              href="#skills" 
              className="text-white py-2 hover:text-lwrgold transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Skills
            </a>
            <a 
              href="#contact" 
              className="bg-lwrgold text-lwrnavy px-4 py-2 rounded-md hover:bg-lwrgold-light transition-colors inline-block font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get in Touch
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
