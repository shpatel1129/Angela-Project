import React, { useState } from 'react';
import FadeIn from './FadeIn';

const InteractiveCabinComparison = ({ data, images }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!data || !data.cabins) return null;

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center overflow-hidden bg-navy-950 py-16 md:py-24">
      
      {/* Dynamic Background Images */}
      {data.cabins.map((cabin, idx) => (
        <div 
          key={`bg-${cabin.id}`}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            activeIndex === idx ? 'opacity-100 z-0' : 'opacity-0 z-0'
          }`}
        >
          <img 
            src={images[idx]} 
            alt={cabin.name} 
            className="w-full h-full object-cover object-center transform transition-transform duration-[10s] ease-out"
            style={{ transform: activeIndex === idx ? 'scale(1)' : 'scale(1.05)' }}
          />
          {/* Gradient Overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-950/80 to-navy-950/20 lg:to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent opacity-90"></div>
        </div>
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col h-full">
        
        {/* Header */}
        <div className="mb-12">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6 drop-shadow-md">
              {data.title}
            </h2>
            <p className="text-lg text-ice-100 max-w-2xl drop-shadow-md">
              {data.subtitle}
            </p>
          </FadeIn>
        </div>

        {/* Main Content Area - Grid overlap technique for dynamic height */}
        <div className="w-full lg:w-2/3 xl:w-1/2 grid mb-12">
          {data.cabins.map((cabin, idx) => (
            <div 
              key={`content-${cabin.id}`}
              style={{ gridArea: '1 / 1 / 2 / 2' }}
              className={`transition-all duration-700 ease-in-out w-full self-center ${
                activeIndex === idx 
                  ? 'opacity-100 translate-y-0 pointer-events-auto z-10' 
                  : 'opacity-0 translate-y-8 pointer-events-none z-0'
              }`}
            >
              <div className="backdrop-blur-md bg-navy-950/50 border border-white/10 rounded-3xl p-6 sm:p-8 md:p-12 shadow-2xl">
                <span className="inline-block px-4 py-1.5 rounded-full border border-amber-500/50 text-amber-400 text-xs font-bold tracking-[0.2em] uppercase mb-6 bg-navy-950/40">
                  Cabin Category
                </span>
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white mb-5 leading-tight">
                  {cabin.name}
                </h3>
                
                <div className="mb-6">
                  <h4 className="text-xs text-ice-300 uppercase tracking-widest font-semibold mb-2">Ideal For</h4>
                  <p className="text-amber-100 font-serif italic text-xl leading-relaxed">
                    "{cabin.bestFor}"
                  </p>
                </div>
                
                <p className="text-ice-100 mb-8 font-sans leading-relaxed text-base md:text-lg">
                  {cabin.description}
                </p>

                <div>
                  <h4 className="text-xs font-sans font-semibold text-white/70 uppercase tracking-widest mb-4">Key Features</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {cabin.features?.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start text-ice-50 text-sm md:text-base">
                        <div className="w-5 h-5 rounded-full bg-amber-500/20 flex items-center justify-center mr-3 shrink-0 mt-0.5">
                          <svg className="w-3 h-3 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="font-sans leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation / Selectors */}
        <div className="mt-auto pt-8 border-t border-white/10">
          <div className="flex justify-between items-end mb-6">
            <p className="text-white/70 font-sans text-xs tracking-widest uppercase">Explore Accommodations</p>
            <div className="flex space-x-3">
              {data.cabins.map((_, idx) => (
                <button 
                  key={`dot-${idx}`}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-1.5 rounded-full transition-all duration-500 ${activeIndex === idx ? 'bg-amber-400 w-12' : 'bg-white/30 w-4 hover:bg-white/50'}`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {data.cabins.map((cabin, idx) => (
              <button
                key={`nav-${cabin.id}`}
                onClick={() => setActiveIndex(idx)}
                className={`group relative h-24 sm:h-28 md:h-36 rounded-xl md:rounded-2xl overflow-hidden text-left transition-all duration-300 border border-white/10 ${
                  activeIndex === idx 
                    ? 'ring-2 ring-amber-400 shadow-[0_0_30px_rgba(245,158,11,0.2)]' 
                    : 'hover:border-white/30 hover:shadow-lg'
                }`}
              >
                <img 
                  src={images[idx]} 
                  alt={cabin.name} 
                  className={`absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ${
                    activeIndex === idx ? 'scale-110' : 'group-hover:scale-105'
                  }`}
                />
                <div className={`absolute inset-0 transition-colors duration-500 ${
                  activeIndex === idx ? 'bg-navy-950/20' : 'bg-navy-950/70 group-hover:bg-navy-950/40'
                }`}></div>
                <div className="absolute inset-0 p-3 sm:p-4 md:p-5 flex flex-col justify-end bg-gradient-to-t from-navy-950/90 via-navy-950/40 to-transparent">
                  <span className={`font-serif text-sm sm:text-base md:text-lg leading-tight transition-colors duration-300 ${
                    activeIndex === idx ? 'text-white drop-shadow-md' : 'text-ice-200'
                  }`}>
                    {cabin.name}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default InteractiveCabinComparison;
