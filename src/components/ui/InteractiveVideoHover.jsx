import React, { useState } from 'react';
import FadeIn from './FadeIn';
import MasterImage from './MasterImage';

const InteractiveVideoHover = ({
  title,
  subtitle,
  items = []
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!items || items.length === 0) return null;

  return (
    <section className="w-full h-screen min-h-[800px] relative overflow-hidden bg-navy-950 flex items-center">
      
      {/* Background Crossfade Images */}
      {items.map((item, index) => (
        <div 
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === activeIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
        >
          <MasterImage 
            src={item.image} 
            alt={item.title} 
            className="w-full h-full object-cover" 
          />
          {/* Dark Overlay for Text Readability */}
          <div className="absolute inset-0 bg-navy-950/60 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950/90 via-navy-950/40 to-transparent"></div>
        </div>
      ))}

      {/* Content */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 w-full relative z-20">
        
        <FadeIn>
          {subtitle && (
            <span className="font-sans text-xs font-bold tracking-[0.2em] uppercase text-ts-gold mb-6 block">
              {subtitle}
            </span>
          )}
          <h2 className="font-display text-5xl md:text-7xl text-white mb-16 lg:mb-24">
            {title}
          </h2>
        </FadeIn>

        <div className="flex flex-col gap-6 max-w-2xl">
          {items.map((item, index) => {
            const isActive = index === activeIndex;
            return (
              <div 
                key={index}
                onMouseEnter={() => setActiveIndex(index)}
                className="group cursor-pointer py-4 border-b border-white/10 relative"
              >
                {/* Active Indicator Line */}
                <div 
                  className={`absolute left-0 bottom-0 h-[2px] bg-ts-gold transition-all duration-700 ease-out ${isActive ? 'w-full' : 'w-0'}`}
                ></div>

                <div className="flex items-center gap-8">
                  <span className={`font-display text-3xl transition-colors duration-500 ${isActive ? 'text-ts-gold' : 'text-white/20'}`}>
                    0{index + 1}
                  </span>
                  
                  <div>
                    <h3 className={`font-display text-3xl md:text-5xl transition-all duration-500 transform ${isActive ? 'text-white translate-x-4' : 'text-white/50 translate-x-0'}`}>
                      {item.title}
                    </h3>
                    
                    {/* Expandable Description */}
                    <div 
                      className={`overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${isActive ? 'max-h-40 mt-4 opacity-100 translate-x-4' : 'max-h-0 mt-0 opacity-0 translate-x-0'}`}
                    >
                      <p className="font-sans text-lg text-white/80 font-light max-w-md">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default InteractiveVideoHover;
