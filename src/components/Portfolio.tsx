
import React, { useState } from 'react';
import { X } from 'lucide-react';

const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Placeholder images for the portfolio
  const portfolioImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1494790108755-2616c27fe128?w=600&h=800&fit=crop&crop=face",
      alt: "Fashion Portrait 1",
      category: "Fashion"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&h=800&fit=crop&crop=face",
      alt: "Editorial Shot 1",
      category: "Editorial"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&h=800&fit=crop&crop=face",
      alt: "Commercial 1",
      category: "Commercial"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop&crop=face",
      alt: "Portrait 1",
      category: "Portrait"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=600&h=800&fit=crop&crop=face",
      alt: "Fashion Portrait 2",
      category: "Fashion"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&h=800&fit=crop&crop=face",
      alt: "Editorial Shot 2",
      category: "Editorial"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-black mb-4 tracking-wider">
            PORTFOLIO
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A curated selection of my work spanning fashion, editorial, and commercial photography
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioImages.map((image, index) => (
            <div 
              key={image.id}
              className="group cursor-pointer overflow-hidden bg-gray-100 aspect-[3/4] relative"
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-light tracking-wider">
                  {image.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for enlarged image */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            >
              <X size={32} />
            </button>
            <img
              src={portfolioImages[selectedImage].src}
              alt={portfolioImages[selectedImage].alt}
              className="max-w-full max-h-full object-contain"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
