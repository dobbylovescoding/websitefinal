
import React, { useEffect, useRef } from 'react';

interface SkillCardProps {
  title: string;
  items: string[];
  icon: React.ReactNode;
  delay: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ title, items, icon, delay }) => {
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
      className="animate-on-scroll bg-white rounded-xl shadow-lg p-8 border-t-4 border-lwrgold"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="flex items-center mb-6">
        <div className="bg-lwrnavy/10 w-12 h-12 rounded-lg flex items-center justify-center">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-lwrnavy ml-4">{title}</h3>
      </div>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-lwrgold mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-700">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const CertificationCard: React.FC = () => {
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
      className="animate-on-scroll bg-lwrnavy text-white rounded-xl shadow-lg p-8 col-span-1 md:col-span-2"
    >
      <h3 className="text-2xl font-bold mb-6 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-lwrgold mr-3" viewBox="0 0 20 20" fill="currentColor">
          <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
          <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
        </svg>
        Certifications & Qualifications
      </h3>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white/10 rounded-lg p-5">
          <h4 className="text-lwrgold font-medium mb-2">Google Cloud Certified</h4>
          <p className="text-white/90">Associate Google Workspace Administrator</p>
        </div>
        <div className="bg-white/10 rounded-lg p-5">
          <h4 className="text-lwrgold font-medium mb-2">Technology Product Development</h4>
          <p className="text-white/90">Certificate in Foundations</p>
        </div>
      </div>
    </div>
  );
};

const SkillsSection: React.FC = () => {
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

  return (
    <section id="skills" className="py-20 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-4">
        <div 
          ref={headingRef} 
          className="text-center mb-16 animate-on-scroll"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-lwrnavy mb-4">
            My <span className="text-lwrgold">Technical Skills</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            With extensive experience across multiple platforms and tools, I provide comprehensive 
            technical solutions for your business needs.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <SkillCard 
            title="Website Builders"
            items={["WordPress", "Wix", "Squarespace", "Shopify"]}
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-lwrnavy" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd" />
              </svg>
            }
            delay={0.1}
          />
          
          <SkillCard 
            title="Tech Tools"
            items={["Google Workspace", "Microsoft 365", "HubSpot", "Freshdesk"]}
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-lwrnavy" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
            }
            delay={0.2}
          />
        </div>
        
        <CertificationCard />
        
        <div className="mt-12 bg-white rounded-xl shadow-lg p-8 animate-on-scroll">
          <h3 className="text-xl font-bold text-lwrnavy mb-6 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-lwrgold mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
            </svg>
            Additional Software Expertise
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-gray-50 rounded-lg p-4 text-center">
              <p className="text-lwrnavy font-medium">AI Software</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 text-center">
              <p className="text-lwrnavy font-medium">Canva</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 text-center">
              <p className="text-lwrnavy font-medium">GitHub</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 text-center">
              <p className="text-lwrnavy font-medium">DNS Management</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
