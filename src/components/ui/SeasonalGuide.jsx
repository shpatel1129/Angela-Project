import React, { useState } from 'react';
import FadeIn from './FadeIn';

const SeasonalGuide = ({ title, subtitle, items }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!items || items.length === 0) return null;

  const activeSeason = items[activeIndex];

  return (
    <section className="py-24 bg-ice-50 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber-600 font-sans font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
            Plan Your Timing
          </span>
          <h2 className="text-4xl md:text-5xl font-display text-navy-900 mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="font-sans text-lg text-slate-600 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Navigation / Tabs */}
          <div className="lg:col-span-4 flex flex-col space-y-4">
            {items.map((item, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`text-left p-6 rounded-2xl border transition-all duration-300 ${
                  activeIndex === idx 
                    ? 'bg-white border-gold-500 shadow-lg scale-[1.02]' 
                    : 'bg-white/50 border-slate-200 hover:bg-white hover:border-slate-300 hover:shadow-sm'
                }`}
              >
                <h3 className={`font-display text-2xl mb-1 ${activeIndex === idx ? 'text-navy-900' : 'text-slate-500'}`}>
                  {item.title.split(' ')[0]} {/* E.g., Spring */}
                </h3>
                <span className={`font-sans text-sm tracking-widest uppercase ${activeIndex === idx ? 'text-gold-600' : 'text-slate-400'}`}>
                  {item.category} {/* E.g., March-May */}
                </span>
              </button>
            ))}
          </div>

          {/* Content Display */}
          <div className="lg:col-span-8">
            <FadeIn key={activeIndex} className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-100 flex flex-col md:flex-row h-full">
              
              <div className="w-full md:w-1/2 h-64 md:h-auto relative">
                <img 
                  src={activeSeason.image} 
                  alt={activeSeason.title}
                  className="w-full h-full object-cover absolute inset-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-navy-900/60 md:from-navy-900/20 to-transparent"></div>
              </div>

              <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <h3 className="text-3xl font-display text-navy-900 mb-6 border-b border-slate-100 pb-4">
                  {activeSeason.title}
                </h3>
                <p className="text-slate-600 font-sans text-lg leading-relaxed">
                  {activeSeason.description}
                </p>
                {activeSeason.features && (
                  <ul className="mt-8 space-y-3">
                    {activeSeason.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm font-sans text-slate-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              
            </FadeIn>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default SeasonalGuide;
