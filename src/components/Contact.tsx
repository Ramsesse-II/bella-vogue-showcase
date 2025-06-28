
import React from 'react';
import { MessageCircle, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-pink-50 via-purple-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-black mb-4 tracking-wider">
            CONTATTI
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto italic">
            "Vuoi una lezione privata? Scegli come raggiungermi... 
            <br />ma ricorda: accetto solo alunni speciali."
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-pink-100">
            <div className="text-center mb-8">
              <div className="w-24 h-24 mx-auto mb-4 relative">
                <img
                  src="/lovable-uploads/6dcb8d5f-8803-420c-8415-b95621eeafbc.png"
                  alt="La Prof Sara"
                  className="w-full h-full object-cover rounded-full shadow-lg"
                />
                <div className="absolute -inset-2 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full blur-md opacity-30"></div>
              </div>
              <h3 className="text-xl font-medium text-gray-800 mb-2">La Prof Sara</h3>
              <p className="text-sm text-gray-500 italic">"La tua insegnante preferita"</p>
            </div>

            <div className="space-y-4">
              <Button 
                className="w-full bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white font-medium py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
                onClick={() => window.open('#', '_blank')}
              >
                <Heart className="mr-3" size={20} />
                <div className="text-left">
                  <div className="text-sm font-semibold">OnlyFans Esclusivo</div>
                  <div className="text-xs opacity-90">Contenuti premium e lezioni private</div>
                </div>
              </Button>
              
              <Button 
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
                onClick={() => window.open('#', '_blank')}
              >
                <MessageCircle className="mr-3" size={20} />
                <div className="text-left">
                  <div className="text-sm font-semibold">Telegram Privato</div>
                  <div className="text-xs opacity-90">Chat diretta e contenuti esclusivi</div>
                </div>
              </Button>
            </div>

            <div className="mt-8 text-center">
              <p className="text-xs text-gray-500 leading-relaxed">
                "Ricorda: sono io che scelgo i miei studenti preferiti. 
                <br />Dimostrami di meritare la mia attenzione."
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-4 bg-white/50 px-6 py-3 rounded-full shadow-sm">
            <span className="text-sm text-gray-600">Orari di ricevimento:</span>
            <span className="text-sm font-medium text-pink-600 bg-pink-100 px-3 py-1 rounded-full">
              Sempre disponibile per alunni speciali
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
