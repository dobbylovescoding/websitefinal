
import React, { useEffect, useRef } from 'react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, delay }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animated');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) observer.observe(cardRef.current);

    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current);
    };
  }, []);

  return (
    <div 
      ref={cardRef}
      className="animate-on-scroll bg-white rounded-xl shadow-lg p-8 transform transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="bg-lwrnavy/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-lwrnavy mb-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const ServicesSection: React.FC = () => {
  const headingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animated');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (headingRef.current) observer.observe(headingRef.current);

    return () => {
      if (headingRef.current) observer.unobserve(headingRef.current);
    };
  }, []);

  const parallaxRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!parallaxRef.current) return;
      const scrollPosition = window.scrollY;
      const element = parallaxRef.current;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offset = scrollPosition - elementPosition;
      
      if (offset > -window.innerHeight && offset < window.innerHeight) {
        const parallaxRate = offset * 0.1;
        element.style.transform = `translateY(${parallaxRate}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="services" className="py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <div 
          ref={parallaxRef}
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=1920&q=80')`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        ></div>
        <div className="absolute inset-0 bg-lwrnavy/90"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div 
          ref={headingRef}
          className="text-center mb-16 animate-on-scroll"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            My <span className="text-lwrgold">Services</span>
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            I offer comprehensive web and technology solutions for local businesses in Auckland, with clear, transparent pricing and a personal service.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard 
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-lwrnavy" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
              </svg>
            }
            title="Website Development"
            description="Custom website design and development from scratch, tailored to your business needs and brand identity."
            delay={0.1}
          />
          
          <ServiceCard 
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-lwrnavy" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
            }
            title="Technical Consulting"
            description="Expert advice on web technologies, hosting solutions, and digital strategies for your business."
            delay={0.2}
          />
          
          <ServiceCard 
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-lwrnavy" viewBox="0 0 20 20" fill="currentColor">
                <path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z" />
              </svg>
            }
            title="Domain & Hosting Setup"
            description="Complete domain registration, hosting setup, and technical configuration for your website."
            delay={0.3}
          />
          
          <ServiceCard 
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-lwrnavy" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
              </svg>
            }
            title="Website Repairs & Optimization"
            description="Fix issues with existing websites, improve performance, security, and user experience."
            delay={0.4}
          />
          
          <ServiceCard 
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-lwrnavy" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            }
            title="Business Email Setup"
            description="Professional email setup with your domain, configuration on devices, and training on usage."
            delay={0.5}
          />
          
          <ServiceCard 
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-lwrnavy" viewBox="0 0 20 20" fill="currentColor">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
              </svg>
            }
            title="Local Support"
            description="Free in-person or phone consultations for businesses in North, West, and Central Auckland."
            delay={0.6}
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
