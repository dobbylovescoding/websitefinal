
import { useEffect } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import SkillsSection from '@/components/SkillsSection';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

const Index = () => {
  const isMobile = useIsMobile();
  
  useEffect(() => {
    // Set title and meta description for SEO
    document.title = "Local Web Refresh | Professional Web Solutions in Auckland";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content", 
        "Expert web development and tech solutions for local businesses in Auckland. Specializing in website building, repairs, optimization, and tech advice with transparent pricing."
      );
    }

    // Intersection Observer for scroll animations
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
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

    animatedElements.forEach((el) => observer.observe(el));

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen overflow-hidden bg-lwrnavy">
      <Navbar />
      <Hero />
      <AboutSection />
      <ServicesSection />
      <SkillsSection />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
