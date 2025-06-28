
import React from 'react';
import { Heart, MessageCircle, Sparkles } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-black via-red-950 to-black text-white py-12 relative z-40">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="text-3xl font-light tracking-wider mb-2">
            LA PROF <span className="font-medium text-red-300">SARA</span>
          </div>
          <p className="text-rose-200 text-sm mb-6 italic">
            "Insegnante di Educazione all'Immaginazione"
          </p>
          
          <div className="flex justify-center space-x-8 mb-8">
            <a 
              href="#"
              className="hover:text-red-300 transition-colors duration-300 flex items-center space-x-2"
            >
              <Heart size={20} />
              <span className="text-sm">OnlyFans</span>
            </a>
            <a 
              href="#"
              className="hover:text-red-300 transition-colors duration-300 flex items-center space-x-2"
            >
              <MessageCircle size={20} />
              <span className="text-sm">Telegram</span>
            </a>
            <div className="flex items-center space-x-2 text-red-300">
              <Sparkles size={20} />
              <span className="text-sm">Lezioni Private</span>
            </div>
          </div>
          
          <div className="border-t border-red-900/30 pt-8">
            <p className="text-rose-300 text-sm font-light mb-2">
              © 2024 La Prof Sara. Tutti i diritti riservati.
            </p>
            <p className="text-xs text-rose-400 italic">
              "Hai studiato abbastanza per farmi attenzione?"
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
