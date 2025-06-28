
import React from 'react';
import { Heart, MessageCircle, Sparkles } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-purple-900 to-pink-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="text-3xl font-light tracking-wider mb-2">
            LA PROF <span className="font-medium text-pink-300">SARA</span>
          </div>
          <p className="text-pink-200 text-sm mb-6 italic">
            "Insegnante di Educazione all'Immaginazione"
          </p>
          
          <div className="flex justify-center space-x-8 mb-8">
            <a 
              href="#"
              className="hover:text-pink-300 transition-colors duration-300 flex items-center space-x-2"
            >
              <Heart size={20} />
              <span className="text-sm">OnlyFans</span>
            </a>
            <a 
              href="#"
              className="hover:text-blue-300 transition-colors duration-300 flex items-center space-x-2"
            >
              <MessageCircle size={20} />
              <span className="text-sm">Telegram</span>
            </a>
            <div className="flex items-center space-x-2 text-purple-300">
              <Sparkles size={20} />
              <span className="text-sm">Lezioni Private</span>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8">
            <p className="text-gray-400 text-sm font-light mb-2">
              © 2024 La Prof Sara. Tutti i diritti riservati.
            </p>
            <p className="text-xs text-gray-500 italic">
              "Hai studiato abbastanza per farmi attenzione?"
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
