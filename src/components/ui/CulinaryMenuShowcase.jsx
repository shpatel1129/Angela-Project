import React, { useState } from 'react';
import FadeIn from './FadeIn';

const CulinaryMenuShowcase = ({ title, subtitle, items, images }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!items || items.length === 0) return null;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-16">
          <FadeIn>
            <h2 className="font-display text-4xl md:text-5xl text-navy-900 mb-6 leading-tight">
              {title}
            </h2>
            <p className="font-sans text-lg md:text-xl text-navy-600 max-w-3xl mx-auto">
              {subtitle}
            </p>
          </FadeIn>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Navigation Tabs (Left) */}
          <div className="w-full lg:w-1/3 flex flex-col space-y-4">
            {items.map((item, index) => {
              const isActive = activeIndex === index;
              return (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`text-left px-6 py-6 transition-all duration-300 border-l-4 ${
                    isActive 
                      ? 'border-gold-500 bg-ice-50 shadow-sm' 
                      : 'border-transparent hover:border-gold-300 hover:bg-gray-50'
                  }`}
                >
                  <h3 className={`font-display text-2xl mb-2 transition-colors duration-300 ${isActive ? 'text-navy-900' : 'text-navy-600'}`}>
                    {item.title}
                  </h3>
                  {isActive && (
                    <FadeIn>
                      <p className="font-sans text-navy-600 mt-2">
                        {item.shortDesc || "Select to view details"}
                      </p>
                    </FadeIn>
                  )}
                </button>
              );
            })}
          </div>

          {/* Active Content (Right) */}
          <div className="w-full lg:w-2/3 h-full">
            <FadeIn key={activeIndex}>
              <div className="relative group overflow-hidden rounded-xl shadow-xl aspect-video lg:aspect-[4/3] bg-navy-100">
                <img 
                  src={images[activeIndex % images.length]} 
                  alt={items[activeIndex].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-navy-900/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
                  <h4 className="font-display text-3xl text-white mb-4">{items[activeIndex].title}</h4>
                  <p className="font-sans text-white/90 text-lg leading-relaxed mb-6">
                    {items[activeIndex].description}
                  </p>
                  {items[activeIndex].highlights && (
                    <div className="flex flex-wrap gap-3">
                      {items[activeIndex].highlights.map((highlight, hIdx) => (
                        <span key={hIdx} className="px-4 py-1.5 bg-white/20 backdrop-blur-md rounded-full text-white text-sm font-medium tracking-wide">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CulinaryMenuShowcase;
