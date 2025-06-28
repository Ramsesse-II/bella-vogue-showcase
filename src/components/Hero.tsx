
import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToPortfolio = () => {
    const element = document.getElementById('portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-gray-50 to-white">
      <div className="text-center px-6 max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-light text-black mb-6 tracking-wider animate-fade-in">
          ELENA
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 font-light tracking-wide mb-8 animate-fade-in">
          Model & Creative Professional
        </p>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed animate-fade-in">
          Bringing elegance and artistry to every frame. Specializing in fashion, editorial, and commercial modeling with a passion for storytelling through imagery.
        </p>
      </div>
      
      <button 
        onClick={scrollToPortfolio}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ChevronDown size={32} className="text-gray-400 hover:text-black transition-colors duration-300" />
      </button>
    </section>
  );
};

export default Hero;
