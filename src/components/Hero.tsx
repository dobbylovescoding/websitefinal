
import React, { useEffect, useRef } from 'react';

const Hero: React.FC = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!parallaxRef.current) return;
      
      const scrollPosition = window.scrollY;
      const parallaxRate = scrollPosition * 0.5;
      
      if (parallaxRef.current) {
        parallaxRef.current.style.transform = `translateY(-${parallaxRate}px)`;
      }
      
      if (textRef.current) {
        textRef.current.style.transform = `translateY(${parallaxRate * 0.2}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div id="home" className="relative h-screen w-full overflow-hidden">
      <div 
        ref={parallaxRef}
        className="absolute top-0 left-0 w-full h-[120%] bg-lwrnavy z-0"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1920&q=80')`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-lwrnavy/90 to-lwrnavy/70"></div>
      </div>
      
      <div className="absolute inset-0 flex flex-col justify-center px-4 md:px-20 z-10">
        <div ref={textRef} className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 animate-slide-down">
            <span className="block">Transform Your</span>
            <span className="block mt-2">
              <span className="text-lwrgold">Digital</span> Presence
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl animate-fade-in opacity-0" style={{animationDelay: '0.5s'}}>
          Expert web solutions and tech advice for small businesses in Auckland and across New Zealand.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in opacity-0" style={{animationDelay: '0.8s'}}>
            <a 
              href="#services" 
              className="bg-lwrgold hover:bg-lwrgold-light text-lwrnavy-dark font-bold px-6 py-3 rounded-md transition-colors inline-block text-center"
            >
              Explore Services
            </a>
            <a 
              href="#contact" 
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-6 py-3 rounded-md transition-colors inline-block text-center"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
