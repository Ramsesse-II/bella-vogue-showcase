
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&h=800&fit=crop&crop=face"
                alt="Elena Portrait"
                className="w-full aspect-[3/4] object-cover"
              />
            </div>
            
            <div>
              <h2 className="text-4xl md:text-5xl font-light text-black mb-8 tracking-wider">
                ABOUT
              </h2>
              
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p className="text-lg">
                  With over five years of experience in the modeling industry, I specialize in bringing creative visions to life through authentic and compelling imagery.
                </p>
                
                <p>
                  My work spans across fashion editorials, commercial campaigns, and artistic collaborations. I believe in the power of storytelling through photography and strive to create meaningful connections with every project.
                </p>
                
                <p>
                  Based between Milan and New York, I work with photographers, designers, and brands worldwide to create images that resonate and inspire.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-8">
                <div>
                  <h3 className="font-medium text-black mb-2 tracking-wide">SPECIALTIES</h3>
                  <ul className="text-gray-600 space-y-1">
                    <li>Fashion Modeling</li>
                    <li>Editorial Photography</li>
                    <li>Commercial Campaigns</li>
                    <li>Artistic Collaborations</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-medium text-black mb-2 tracking-wide">EXPERIENCE</h3>
                  <ul className="text-gray-600 space-y-1">
                    <li>5+ Years Professional</li>
                    <li>International Work</li>
                    <li>Brand Partnerships</li>
                    <li>Magazine Features</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
