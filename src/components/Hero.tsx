
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
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-pink-50 via-purple-50 to-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-pink-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-300 rounded-full blur-3xl"></div>
      </div>
      
      <div className="text-center px-6 max-w-4xl mx-auto relative z-10">
        <div className="mb-6">
          <h1 className="text-5xl md:text-7xl font-light text-black mb-2 tracking-wider animate-fade-in">
            LA PROF
          </h1>
          <h1 className="text-6xl md:text-8xl font-medium text-transparent bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text mb-6 tracking-wider animate-fade-in">
            SARA
          </h1>
        </div>
        
        <p className="text-xl md:text-2xl text-gray-600 font-light tracking-wide mb-6 animate-fade-in">
          Insegnante di Educazione all'Immaginazione
        </p>
        
        <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed animate-fade-in italic">
          "Mi piacciono gli alunni attenti... e disobbedienti. Benvenuto nella mia classe privata, dove ogni lezione è un'esperienza unica."
        </p>
        
        <div className="mt-8 flex justify-center space-x-4 text-sm text-gray-400 animate-fade-in">
          <span>📚 Letteratura Erotica</span>
          <span>•</span>
          <span>🧠 Psicologia delle Relazioni</span>
          <span>•</span>
          <span>✨ Arte della Seduzione</span>
        </div>
      </div>
      
      <button 
        onClick={scrollToPortfolio}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ChevronDown size={32} className="text-pink-400 hover:text-pink-600 transition-colors duration-300" />
      </button>
    </section>
  );
};

export default Hero;
