import React from 'react';
import FadeIn from './FadeIn';
import { MapPin, Flame, Trees, Compass, ShieldCheck } from 'lucide-react';

const GreeceWildfireDestinations = ({ destinationsData, images = [] }) => {
  const {
    title = "Wildfire Risk Breakdown by Greek Destination",
    subtitle = "How terrain, microclimates, and island geography shape local wildfire vulnerability across Greece.",
    items = []
  } = destinationsData || {};

  return (
    <section id="wildfire-destinations" className="py-24 bg-white border-b border-slate-200">
      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-sans font-bold tracking-[0.2em] text-[#c9a15c] uppercase mb-4 block">
            REGIONAL RISK REALITIES
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-light text-navy-950 mb-6">
            {title}
          </h2>
          <p className="font-sans text-slate-600 font-light leading-relaxed text-lg">
            {subtitle}
          </p>
        </div>

        {/* 6 Balanced Destination Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((dest, idx) => {
            const imageSrc = images[idx] || images[0];
            return (
              <FadeIn key={idx}>
                <div className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                  
                  {/* Image with Dark Gradient & Badges */}
                  <div className="relative h-60 overflow-hidden">
                    <img 
                      src={imageSrc} 
                      alt={dest.name} 
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/20 to-transparent" />

                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full text-[11px] font-sans font-semibold uppercase tracking-wider bg-white/90 backdrop-blur-sm text-navy-950 shadow-sm">
                        {dest.badge}
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="font-display text-2xl text-white font-normal drop-shadow-sm mb-1">
                        {dest.name}
                      </h3>
                      <div className="flex items-center gap-1.5 text-[#c9a15c] text-xs font-sans font-semibold">
                        <Flame size={14} />
                        <span>{dest.riskLevel}</span>
                      </div>
                    </div>
                  </div>

                  {/* Content Body */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                    
                    <div className="space-y-4">
                      {/* Terrain & Fuel */}
                      <div>
                        <span className="text-[11px] font-sans font-bold uppercase tracking-wider text-slate-400 block mb-1">
                          Landscape & Vegetation
                        </span>
                        <p className="text-xs font-sans text-slate-600 font-light leading-relaxed">
                          {dest.landscape}
                        </p>
                      </div>

                      {/* Risk Assessment */}
                      <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
                        <span className="text-[11px] font-sans font-bold uppercase tracking-wider text-navy-950 block mb-1">
                          Risk Assessment
                        </span>
                        <p className="text-xs font-sans text-slate-600 font-light leading-relaxed">
                          {dest.riskProfile}
                        </p>
                      </div>
                    </div>

                    {/* Luxury Travel Advice */}
                    <div className="p-4 rounded-2xl bg-[#c9a15c]/10 border border-[#c9a15c]/30 mt-auto">
                      <div className="flex items-center gap-1.5 text-navy-950 font-sans text-xs font-semibold uppercase tracking-wider mb-1">
                        <Compass size={14} className="text-[#c9a15c]" />
                        <span>Bespoke Travel Strategy</span>
                      </div>
                      <p className="text-xs font-sans text-navy-950 font-light leading-relaxed">
                        {dest.luxuryAdvice}
                      </p>
                    </div>

                  </div>

                </div>
              </FadeIn>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default GreeceWildfireDestinations;
