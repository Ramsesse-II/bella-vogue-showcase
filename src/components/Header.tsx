
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
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-red-900/30 shadow-lg">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-light tracking-wider text-white">
            LA PROF <span className="text-red-400 font-medium">SARA</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-rose-200 hover:text-red-400 transition-colors duration-300 font-light tracking-wide"
            >
              HOME
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="text-rose-200 hover:text-red-400 transition-colors duration-300 font-light tracking-wide"
            >
              PORTFOLIO
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-rose-200 hover:text-red-400 transition-colors duration-300 font-light tracking-wide"
            >
              CHI SONO
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-rose-200 hover:text-red-400 transition-colors duration-300 font-light tracking-wide"
            >
              CONTATTI
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-red-900/30 pt-4">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-rose-200 hover:text-red-400 transition-colors duration-300 font-light tracking-wide text-left"
              >
                HOME
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="text-rose-200 hover:text-red-400 transition-colors duration-300 font-light tracking-wide text-left"
              >
                PORTFOLIO
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-rose-200 hover:text-red-400 transition-colors duration-300 font-light tracking-wide text-left"
              >
                CHI SONO
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-rose-200 hover:text-red-400 transition-colors duration-300 font-light tracking-wide text-left"
              >
                CONTATTI
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
