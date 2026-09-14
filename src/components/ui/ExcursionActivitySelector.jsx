import React, { useState } from 'react';
import FadeIn from './FadeIn';

const ExcursionActivitySelector = ({ title, subtitle, levels, images }) => {
  const [activeLevel, setActiveLevel] = useState(0);

  if (!levels || levels.length === 0) return null;

  return (
    <section className="py-20 bg-ice-50">
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

        {/* Level Selectors (Top) */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {levels.map((level, index) => {
            const isActive = activeLevel === index;
            return (
              <button
                key={index}
                onClick={() => setActiveLevel(index)}
                className={`px-8 py-4 rounded-full font-sans font-bold tracking-wide transition-all duration-300 transform ${
                  isActive 
                    ? 'bg-navy-900 text-white scale-105 shadow-lg' 
                    : 'bg-white text-navy-600 hover:bg-gold-50 hover:text-navy-900 border border-gray-200 shadow-sm'
                }`}
              >
                {level.level}
              </button>
            );
          })}
        </div>

        {/* Active Content (Bottom) */}
        <div className="relative overflow-hidden rounded-2xl shadow-xl bg-white flex flex-col md:flex-row min-h-[400px]">
          <div className="w-full md:w-1/2 p-10 md:p-16 flex flex-col justify-center bg-white z-10 relative">
            <FadeIn key={`text-${activeLevel}`}>
              <span className="text-gold-500 font-bold uppercase tracking-widest text-sm mb-4 block">
                Activity Level
              </span>
              <h3 className="font-display text-3xl md:text-4xl text-navy-900 mb-6">
                {levels[activeLevel].level} Pace
              </h3>
              <p className="font-sans text-navy-600 text-lg leading-relaxed mb-8">
                {levels[activeLevel].description}
              </p>
              
              {levels[activeLevel].features && (
                <ul className="space-y-4">
                  {levels[activeLevel].features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center text-navy-800">
                      <svg className="w-5 h-5 text-gold-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="font-sans">{feature}</span>
                    </li>
                  ))}
                </ul>
              )}
            </FadeIn>
          </div>
          
          <div className="w-full md:w-1/2 relative min-h-[300px] md:min-h-full">
            <FadeIn key={`img-${activeLevel}`} className="w-full h-full">
              <img 
                src={images[activeLevel % images.length]} 
                alt={levels[activeLevel].level}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white via-white/20 to-transparent md:hidden"></div>
            </FadeIn>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ExcursionActivitySelector;
