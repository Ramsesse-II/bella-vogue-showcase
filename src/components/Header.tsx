
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-light tracking-wider text-black">
            ELENA
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-gray-600 hover:text-black transition-colors duration-300 font-light tracking-wide"
            >
              HOME
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="text-gray-600 hover:text-black transition-colors duration-300 font-light tracking-wide"
            >
              PORTFOLIO
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-600 hover:text-black transition-colors duration-300 font-light tracking-wide"
            >
              ABOUT
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-600 hover:text-black transition-colors duration-300 font-light tracking-wide"
            >
              CONTACT
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-100 pt-4">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-gray-600 hover:text-black transition-colors duration-300 font-light tracking-wide text-left"
              >
                HOME
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="text-gray-600 hover:text-black transition-colors duration-300 font-light tracking-wide text-left"
              >
                PORTFOLIO
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-600 hover:text-black transition-colors duration-300 font-light tracking-wide text-left"
              >
                ABOUT
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-gray-600 hover:text-black transition-colors duration-300 font-light tracking-wide text-left"
              >
                CONTACT
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
