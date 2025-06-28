
import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const portfolioImages = [
  {
    src: '/lovable-uploads/6dcb8d5f-8803-420c-8415-b95621eeafbc.png',
    title: 'Lezione di Seduzione',
    description: 'Quando l\'alunno ha bisogno di attenzioni speciali...',
    category: 'intimate'
  },
  {
    src: '/lovable-uploads/28a38f65-d089-4ffe-ae2f-057e74624da5.png',
    title: 'Dopo la Doccia',
    description: 'Preparandosi per la lezione successiva',
    category: 'lifestyle'
  },
  {
    src: '/lovable-uploads/a40111b6-52ac-45d6-ad89-5eec30eb3b8a.png',
    title: 'L\'Insegnante',
    description: 'Eleganza e controllo in ogni gesto',
    category: 'portrait'
  },
  {
    src: '/lovable-uploads/4bb2838a-ab04-4ecd-b05a-540f1398e142.png',
    title: 'Momento di Relax',
    description: 'Anche le prof hanno bisogno di una pausa...',
    category: 'lifestyle'
  },
  {
    src: '/lovable-uploads/d28af8e0-eae3-4453-84fc-b849b4ea394f.png',
    title: 'Sguardo Penetrante',
    description: 'Lo sguardo che non dimenticherai mai',  
    category: 'portrait'
  },
  {
    src: '/lovable-uploads/389dbce5-cad8-469e-b75f-c8604f7a1f87.png',
    title: 'Lezione Privata',
    description: 'Per gli alunni più... meritevoli',
    category: 'intimate'
  }
];

const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openModal = (index: number) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % portfolioImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? portfolioImages.length - 1 : selectedImage - 1);
    }
  };

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-800 relative z-40">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-4 tracking-wider">
            PORTFOLIO
          </h2>
          <p className="text-lg text-rose-200 max-w-2xl mx-auto mb-8 italic">
            "Ogni foto racconta una lezione... sei pronto ad imparare?"
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
          {portfolioImages.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-[3/4] overflow-hidden rounded-2xl cursor-pointer shadow-2xl hover:shadow-red-500/20 transition-all duration-500 transform hover:scale-[1.02] border border-red-900/30"
              onClick={() => openModal(index)}
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-red-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="font-medium text-lg mb-1 text-rose-100">{image.title}</h3>
                  <p className="text-sm opacity-90 italic text-rose-200">{image.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
            <button
              onClick={closeModal}
              className="absolute top-6 right-6 text-white hover:text-red-300 transition-colors z-10"
            >
              <X size={32} />
            </button>
            
            <button
              onClick={prevImage}
              className="absolute left-6 top-1/2 transform -translate-y-1/2 text-white hover:text-red-300 transition-colors z-10"
            >
              <ChevronLeft size={40} />
            </button>
            
            <button
              onClick={nextImage}
              className="absolute right-6 top-1/2 transform -translate-y-1/2 text-white hover:text-red-300 transition-colors z-10"
            >
              <ChevronRight size={40} />
            </button>

            <div className="max-w-4xl max-h-full flex items-center justify-center">
              <img
                src={portfolioImages[selectedImage].src}
                alt={portfolioImages[selectedImage].title}
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              />
            </div>
            
            <div className="absolute bottom-6 left-6 right-6 text-center text-white">
              <h3 className="text-xl font-medium mb-2 text-rose-100">{portfolioImages[selectedImage].title}</h3>
              <p className="text-sm opacity-90 italic text-rose-200">{portfolioImages[selectedImage].description}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
