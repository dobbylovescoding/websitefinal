
import React, { useState, useRef } from 'react';
import { useToast } from '@/components/ui/use-toast';

const ContactForm: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent!",
        description: "Thank you for your inquiry. I'll get back to you soon.",
      });
      
      // Reset form
      if (formRef.current) {
        formRef.current.reset();
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
        });
      }
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 lg:py-32 bg-lwrnavy relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
        <div className="absolute right-0 top-0 w-full h-full"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=80')`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            transform: 'scaleX(-1)',
          }}
        ></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Get In <span className="text-lwrgold">Touch</span>
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              Have a project in mind or need technical assistance? Fill out the form below and I'll get back to you as soon as possible.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-xl p-6 md:p-10">
            <form ref={formRef} onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-lwrnavy font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-lwrgold"
                    placeholder="John Doe"
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-lwrnavy font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-lwrgold"
                    placeholder="john@example.com"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="phone" className="block text-lwrnavy font-medium mb-2">
                  Phone Number (Optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-lwrgold"
                  placeholder="021 123 4567"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-lwrnavy font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-lwrgold"
                  placeholder="Tell me about your project or inquiry..."
                  required
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              
              <div>
                <button
                  type="submit"
                  className={`w-full bg-lwrnavy hover:bg-lwrnavy-light text-white font-bold py-3 px-6 rounded-lg transition-colors ${
                    isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                  }`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          </div>
          
          <div className="mt-12 grid sm:grid-cols-3 gap-6 text-center">
            <div className="p-6">
              <div className="mx-auto bg-white/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-lwrgold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-white font-medium mb-1">Location</h3>
              <p className="text-white/70">Auckland, New Zealand</p>
            </div>
            
            <div className="p-6">
              <div className="mx-auto bg-white/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-lwrgold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-white font-medium mb-1">Email</h3>
              <p className="text-white/70">conor@localwebrefresh.co.nz</p>
            </div>
            
            <div className="p-6">
              <div className="mx-auto bg-white/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-lwrgold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-white font-medium mb-1">Service Areas</h3>
              <p className="text-white/70">North, West, and Central Auckland</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
