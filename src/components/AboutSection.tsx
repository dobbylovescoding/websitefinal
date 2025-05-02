
import React, { useEffect, useRef } from 'react';

const AboutSection: React.FC = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

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

    if (contentRef.current) observer.observe(contentRef.current);
    if (imageRef.current) observer.observe(imageRef.current);

    return () => {
      if (contentRef.current) observer.unobserve(contentRef.current);
      if (imageRef.current) observer.unobserve(imageRef.current);
    };
  }, []);

  return (
    <section id="about" className="py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white to-gray-100 -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div 
            ref={contentRef} 
            className="animate-on-scroll order-2 md:order-1"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              About <span className="text-lwrgold">Me</span>
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto">
            Hi, I'm Conor, an Auckland-based website designer and tech advisor. After 
            10 years working as a Logistics Specialist in the Air Force, I decided it was 
            time for a career change. I left the military and fully immersed myself in 
            the tech industry, where I've spent the past 3 years studying and working
            as a technical specialist for a company that builds innovative apps and 
            websites for influencers in the fitness and nutrition space.
            </p>
            <br />
            <p className="text-white/80 max-w-2xl mx-auto">
            In addition to my work in tech, I also collaborate with a national sports 
            federation, providing web solutions, filming events, and managing their 
            social media content. My diverse experience allows me to offer trusted, 
            comprehensive digital solutions tailored to your needs.
            </p>
            <br />
            <p className="text-white/80 max-w-2xl mx-auto">
            Let’s connect and see how I can help bring your vision to life!
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex items-center mb-2">
                <div className="h-10 w-10 rounded-full bg-lwrnavy flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-white/80 max-w-2xl mx-auto">Kiwi Owned & Operated</p>
              </div>
              <div className="flex items-center mb-2">
                <div className="h-10 w-10 rounded-full bg-lwrnavy flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-white/80 max-w-2xl mx-auto">Small Business Focused</p>
              </div>
            </div>
          </div>
          
          <div 
            ref={imageRef} 
            className="animate-on-scroll order-1 md:order-2"
          >
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-64 h-64 bg-lwrgold/20 rounded-lg -z-10"></div>
              <div className="relative w-[40vw] h-[40vw]">
                <img 
                  src="//s3-us-west-1.amazonaws.com/s3b-usw-1-production/175/1195/file-01968fcde975789ebc9796eb1fc204b3-big.jpeg" 
                  alt="Profile" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-64 h-64 bg-lwrgold-light/20 rounded-lg -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

