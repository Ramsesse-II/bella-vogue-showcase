
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
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Fixed background image */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: 'url(/lovable-uploads/6dcb8d5f-8803-420c-8415-b95621eeafbc.png)',
          backgroundAttachment: 'fixed'
        }}
      />
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70 z-10"></div>
      
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10 z-20">
        <div className="absolute top-20 left-10 w-32 h-32 bg-red-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-rose-500 rounded-full blur-3xl"></div>
      </div>
      
      <div className="text-center px-6 max-w-4xl mx-auto relative z-30">
        <div className="mb-6">
          <h1 className="text-5xl md:text-7xl font-light text-white mb-2 tracking-wider animate-fade-in">
            LA PROF
          </h1>
          <h1 className="text-6xl md:text-8xl font-medium text-transparent bg-gradient-to-r from-red-400 to-rose-400 bg-clip-text mb-6 tracking-wider animate-fade-in">
            SARA
          </h1>
        </div>
        
        <p className="text-xl md:text-2xl text-rose-200 font-light tracking-wide mb-6 animate-fade-in">
          Insegnante di Educazione all'Immaginazione
        </p>
        
        <p className="text-lg text-rose-100 max-w-2xl mx-auto leading-relaxed animate-fade-in italic">
          "Mi piacciono gli alunni attenti... e disobbedienti. Benvenuto nella mia classe privata, dove ogni lezione è un'esperienza unica."
        </p>
        
        <div className="mt-8 flex justify-center space-x-4 text-sm text-rose-300 animate-fade-in">
          <span>📚 Letteratura Erotica</span>
          <span>•</span>
          <span>🧠 Psicologia delle Relazioni</span>
          <span>•</span>
          <span>✨ Arte della Seduzione</span>
        </div>
      </div>
      
      <button 
        onClick={scrollToPortfolio}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-30"
      >
        <ChevronDown size={32} className="text-red-400 hover:text-red-300 transition-colors duration-300" />
      </button>
    </section>
  );
};

export default Hero;
