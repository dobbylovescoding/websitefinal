
import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      window.addEventListener('scroll', handleScroll);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [mobileMenuOpen]);

  return (
    <>
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
          <Button
            variant="ghost"
            className="md:hidden text-lwrlightgray hover:bg-lwrnavy/20"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </nav>

      {/* Full-screen Mobile Navigation - moved outside <nav> */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-lwrnavy z-50 flex flex-col justify-center items-center">
          <div className="absolute top-4 right-4">
            <Button
              variant="ghost"
              className="text-lwrlightgray hover:bg-lwrnavy/20"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X className="h-6 w-6" />
            </Button>
          </div>
          <div className="flex flex-col items-center space-y-8 p-8">
            <a
              href="#home"
              className="text-lwrlightgray hover:text-lwrprimary transition-colors text-xl font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#about"
              className="text-lwrlightgray hover:text-lwrprimary transition-colors text-xl font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#services"
              className="text-lwrlightgray hover:text-lwrprimary transition-colors text-xl font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="#skills"
              className="text-lwrlightgray hover:text-lwrprimary transition-colors text-xl font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Skills
            </a>
            <a
              href="#contact"
              className="bg-lwrprimary text-lwrnavy px-6 py-3 rounded-md hover:bg-lwrsecondary transition-colors text-xl font-medium mt-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get in Touch
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;

