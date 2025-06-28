
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-pink-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-pink-200 to-purple-200 rounded-2xl blur-2xl opacity-30"></div>
              <img
                src="/lovable-uploads/a40111b6-52ac-45d6-ad89-5eec30eb3b8a.png"
                alt="La Prof Sara"
                className="w-full aspect-[3/4] object-cover rounded-2xl shadow-2xl relative z-10"
              />
            </div>
            
            <div>
              <h2 className="text-4xl md:text-5xl font-light text-black mb-8 tracking-wider">
                CHI SONO
              </h2>
              
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p className="text-lg font-medium text-pink-700 italic">
                  "Benvenuto nella mia classe... privata."
                </p>
                
                <p>
                  Sono La Prof Sara, insegnante di materie che non troverai in nessun'altra scuola: 
                  <strong className="text-pink-600"> Educazione all'Immaginazione</strong>, 
                  <strong className="text-purple-600"> Letteratura Erotica</strong> e 
                  <strong className="text-pink-600"> Psicologia delle Relazioni</strong>.
                </p>
                
                <p>
                  La mia aula è ovunque mi senta padrona. Le mie lezioni sono esperienze uniche, 
                  dove teoria e pratica si fondono in un'alchimia irresistibile. 
                  Non cerco studenti perfetti... cerco menti curiose e spiriti ribelli.
                </p>
                
                <p className="italic text-gray-500">
                  "Ogni studente ha il potenziale per sorprendermi. 
                  Ma sono io che decido chi merita la mia attenzione speciale."
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-6">
                <div className="bg-white/50 p-4 rounded-xl shadow-sm">
                  <h3 className="font-medium text-pink-700 mb-2 tracking-wide">SPECIALITÀ</h3>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Educazione Sensuale</li>
                    <li>• Controllo Mentale Soft</li>
                    <li>• Arte della Provocazione</li>
                    <li>• Lezioni Private Esclusive</li>
                  </ul>
                </div>
                
                <div className="bg-white/50 p-4 rounded-xl shadow-sm">
                  <h3 className="font-medium text-purple-700 mb-2 tracking-wide">FILOSOFIA</h3>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Dominanza Intelligente</li>
                    <li>• Seduzione Psicologica</li>
                    <li>• Controllo del Desiderio</li>
                    <li>• Eleganza Provocante</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-gradient-to-r from-pink-100 to-purple-100 rounded-xl">
                <p className="text-center text-gray-700 font-medium italic">
                  "Ti ho assegnato un compito: pensarmi. 
                  <br />Vediamo se sei un alunno diligente..."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
