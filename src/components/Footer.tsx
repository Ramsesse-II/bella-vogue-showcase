
import React from 'react';
import { Instagram, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="text-3xl font-light tracking-wider mb-6">
            ELENA
          </div>
          
          <div className="flex justify-center space-x-8 mb-8">
            <a 
              href="mailto:elena.model@email.com"
              className="hover:text-gray-300 transition-colors duration-300"
            >
              <Mail size={24} />
            </a>
            <a 
              href="tel:+15551234567"
              className="hover:text-gray-300 transition-colors duration-300"
            >
              <Phone size={24} />
            </a>
            <a 
              href="https://instagram.com/elena.model"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors duration-300"
            >
              <Instagram size={24} />
            </a>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-400 text-sm font-light">
              © 2024 Elena. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
