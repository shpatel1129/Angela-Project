import React, { useState } from 'react';
import FadeIn from './FadeIn';
import MasterImage from './MasterImage';
import { MapPin, ArrowRight } from 'lucide-react';

const GlobalDeploymentExplorer = ({ title, subtitle, regions }) => {
  const [hoveredRegion, setHoveredRegion] = useState(null);

  if (!regions || regions.length !== 2) return null;

  return (
    <section className="w-full py-24 lg:py-32 bg-navy-950 text-white relative overflow-hidden">
      
      {/* Header */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-20 mb-12 lg:mb-16 text-center">
        <FadeIn>
          {subtitle && (
            <span className="font-sans text-xs font-bold tracking-[0.2em] uppercase text-ts-gold mb-4 block">
              {subtitle}
            </span>
          )}
          <h2 className="font-display text-4xl md:text-5xl lg:text-7xl text-white drop-shadow-lg">
            {title}
          </h2>
        </FadeIn>
      </div>

      {/* Interactive Split Layout */}
      <div className="w-full h-[600px] lg:h-[800px] flex flex-col lg:flex-row relative">
        
        {regions.map((region, index) => {
          // Determine width based on hover state
          let widthClass = "lg:w-1/2"; // Default
          if (hoveredRegion === index) widthClass = "lg:w-[70%]";
          else if (hoveredRegion !== null) widthClass = "lg:w-[30%]";

          const isHovered = hoveredRegion === index;
          const isFaded = hoveredRegion !== null && hoveredRegion !== index;

          return (
            <div
              key={index}
              onMouseEnter={() => setHoveredRegion(index)}
              onMouseLeave={() => setHoveredRegion(null)}
              className={`${widthClass} h-1/2 lg:h-full relative overflow-hidden transition-all duration-700 ease-in-out cursor-pointer group`}
            >
              {/* Background Image */}
              {region.image && (
                <MasterImage
                  src={region.image}
                  alt={region.name}
                  className={`absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ${
                    isHovered ? 'scale-105' : 'scale-100'
                  }`}
                />
              )}

              {/* Overlays */}
              <div className={`absolute inset-0 transition-opacity duration-700 ${
                isFaded ? 'bg-navy-950/80' : 'bg-gradient-to-t from-navy-950/90 via-navy-950/40 to-transparent'
              }`}></div>
              
              <div className={`absolute inset-0 bg-ts-gold/20 mix-blend-overlay transition-opacity duration-700 ${
                isHovered ? 'opacity-100' : 'opacity-0'
              }`}></div>

              {/* Content */}
              <div className="absolute inset-0 p-8 lg:p-16 flex flex-col justify-end z-10">
                <div className={`transition-all duration-700 ${isHovered ? 'translate-y-0' : 'translate-y-4'}`}>
                  
                  {/* Eyebrow & Icon */}
                  <div className="flex items-center gap-3 mb-4">
                    <MapPin className={`w-5 h-5 transition-colors duration-500 ${isHovered ? 'text-ts-gold' : 'text-white/60'}`} />
                    <span className="font-sans text-xs font-bold tracking-[0.2em] uppercase text-white/80">
                      {region.subtitle}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className={`font-display text-3xl lg:text-5xl text-white mb-6 transition-all duration-500 ${
                    isFaded ? 'opacity-50' : 'opacity-100'
                  }`}>
                    {region.name}
                  </h3>

                  {/* Expandable Description & Highlights */}
                  <div className={`overflow-hidden transition-all duration-700 ease-in-out ${
                    isHovered ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 lg:max-h-[500px] lg:opacity-100 lg:h-0'
                  }`}>
                    <p className="font-sans text-base lg:text-lg text-white/90 leading-relaxed mb-8 max-w-xl hidden lg:block">
                      {region.description}
                    </p>
                    
                    {region.highlights && region.highlights.length > 0 && (
                      <div className="flex flex-wrap gap-3 mb-8 hidden lg:flex">
                        {region.highlights.map((highlight, idx) => (
                          <span key={idx} className="px-4 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-sm font-sans text-white">
                            {highlight}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="inline-flex items-center gap-2 text-ts-gold font-sans font-medium hover:text-white transition-colors duration-300">
                      Explore Itineraries <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>

                </div>
              </div>

            </div>
          );
        })}

        {/* Center Divider Line (Desktop only) */}
        <div className="hidden lg:block absolute top-0 bottom-0 left-1/2 w-[1px] bg-white/20 z-20 pointer-events-none transition-opacity duration-500" 
             style={{ opacity: hoveredRegion === null ? 1 : 0 }}>
        </div>

      </div>
    </section>
  );
};

export default GlobalDeploymentExplorer;
