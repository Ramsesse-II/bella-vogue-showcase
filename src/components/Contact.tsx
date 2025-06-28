
import React, { useState } from 'react';
import { Mail, Instagram, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the form data to a backend service
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-black mb-4 tracking-wider">
            CONTACT
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Let's create something beautiful together. Reach out for collaborations, bookings, or just to say hello.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-light text-black mb-6 tracking-wide">GET IN TOUCH</h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Mail className="text-gray-400" size={20} />
                  <span className="text-gray-600">elena.model@email.com</span>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Phone className="text-gray-400" size={20} />
                  <span className="text-gray-600">+1 (555) 123-4567</span>
                </div>
                
                <div className="flex items-center space-x-4">
                  <MapPin className="text-gray-400" size={20} />
                  <span className="text-gray-600">Milan, Italy / New York, USA</span>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Instagram className="text-gray-400" size={20} />
                  <span className="text-gray-600">@elena.model</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-light text-black mb-4 tracking-wide">WORKING HOURS</h3>
              <div className="text-gray-600 space-y-2">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Weekend shoots by appointment</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="border-gray-300 focus:border-black"
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="border-gray-300 focus:border-black"
                />
              </div>
              
              <Input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                className="border-gray-300 focus:border-black"
              />
              
              <Textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={6}
                className="border-gray-300 focus:border-black resize-none"
              />
              
              <Button 
                type="submit"
                className="w-full bg-black hover:bg-gray-800 text-white font-light tracking-wider py-3"
              >
                SEND MESSAGE
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
