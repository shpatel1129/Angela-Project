import React from 'react';
import FadeIn from './FadeIn';
import { MapPin, Info } from 'lucide-react';

const GreeceHeatRegionalClimate = ({ regionalData, images = [] }) => {
  const { heading, description, regions = [] } = regionalData || {};

  return (
    <section id="regional-climate" className="py-24 bg-white border-b border-slate-200">
      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-sans font-bold tracking-[0.2em] text-[#c9a15c] uppercase mb-4 block">
            CLIMATE & REGIONS
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-light text-navy-950 mb-6">
            {heading || "Regional Climate Guide: Athens vs. The Greek Islands"}
          </h2>
          <p className="font-sans text-slate-600 font-light leading-relaxed">
            {description}
          </p>
        </div>

        {/* Alternating Zig-Zag Grid Blocks */}
        <div className="space-y-24">
          {regions.map((region, idx) => {
            const isEven = idx % 2 === 0;
            const img = images[idx] || null;

            return (
              <div 
                key={idx} 
                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${
                  isEven ? "" : "lg:flex-row-reverse"
                }`}
              >
                {/* Image Block */}
                <div className={`lg:col-span-6 relative ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                  <FadeIn>
                    <div className="overflow-hidden rounded-3xl shadow-xl aspect-[16/10] relative group">
                      {img ? (
                        <img 
                          src={img} 
                          alt={region.name} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          loading="lazy"
                        />
                      ) : (
                        <div className="w-full h-full bg-slate-100 flex items-center justify-center text-slate-400">
                          No Image Available
                        </div>
                      )}
                      
                      {/* Interactive Pin Overlay */}
                      <div className="absolute top-6 left-6 bg-navy-950/80 backdrop-blur-md text-white font-sans text-xs px-4 py-2 rounded-full flex items-center gap-2 shadow-lg border border-white/10">
                        <MapPin size={14} className="text-[#c9a15c]" />
                        <span>{region.name}</span>
                      </div>
                    </div>
                  </FadeIn>
                </div>

                {/* Text Block */}
                <div className={`lg:col-span-6 space-y-6 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                  <FadeIn>
                    <span className="text-[#c9a15c] font-sans text-xs uppercase tracking-widest font-semibold">
                      REGION {idx + 1}
                    </span>
                    <h3 className="font-display text-3xl font-light text-navy-950">
                      {region.name}
                    </h3>
                    
                    <div className="space-y-4 font-sans text-slate-600 font-light leading-relaxed">
                      <p>{region.climate}</p>
                      
                      {/* Strategy Card */}
                      <div className="bg-[#c9a15c]/5 border border-[#c9a15c]/10 rounded-2xl p-5 mt-6">
                        <h4 className="font-semibold text-navy-950 text-sm flex items-center gap-2 mb-2">
                          <Info size={16} className="text-[#c9a15c]" />
                          Luxury Travel Strategy
                        </h4>
                        <p className="text-xs text-slate-600 font-light">
                          {region.strategy}
                        </p>
                      </div>
                    </div>
                  </FadeIn>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default GreeceHeatRegionalClimate;
