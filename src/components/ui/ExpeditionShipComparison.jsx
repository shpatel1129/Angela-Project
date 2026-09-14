import React from 'react';
import FadeIn from './FadeIn';
import { Shield, Sparkles, Anchor, Users } from 'lucide-react';

const ExpeditionShipComparison = ({ image1, image2 }) => {
  return (
    <section className="w-full bg-white py-24 border-b border-slate-200">
      <div className="max-w-[1280px] mx-auto px-6">
        
        <div className="max-w-3xl mx-auto text-center mb-20">
          <FadeIn>
            <span className="text-xs uppercase tracking-[0.25em] text-gold-400 font-bold mb-4 block">
              Vessel Selection
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-navy-950 mb-6">
              Silversea Polar Fleet: Ship Comparison
            </h2>
            <p className="font-sans text-slate-600 font-light leading-relaxed">
              Choosing between Silversea's expedition vessels depends heavily on your preferred route, embarkation point, and desired ship atmosphere.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Card 1: Silver Endeavour */}
          <FadeIn className="flex flex-col bg-slate-900 text-white rounded-3xl overflow-hidden shadow-xl border border-slate-800 group">
            <div className="aspect-[16/10] w-full overflow-hidden relative">
              {image1 && (
                <img 
                  src={image1} 
                  alt="Silver Endeavour" 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-103"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/35 to-transparent"></div>
              <div className="absolute bottom-6 left-8">
                <span className="text-xs uppercase tracking-widest text-gold-300 font-bold mb-2 block">
                  ULTRA-LUXURY EXPEDITION
                </span>
                <h3 className="text-3xl font-display font-medium text-white">
                  Silver Endeavour
                </h3>
              </div>
            </div>

            <div className="p-8 md:p-10 flex-grow flex flex-col justify-between">
              <div>
                <p className="font-sans text-slate-300 text-sm md:text-base font-light leading-relaxed mb-8">
                  One of the most advanced luxury expedition vessels in the world. Specifically built for polar regions, it combines state-of-the-art hull technology with expansive butler-serviced suites.
                </p>

                <div className="grid grid-cols-2 gap-6 mb-8 border-t border-b border-slate-800 py-6">
                  <div className="flex items-center gap-3">
                    <Users className="text-gold-400 flex-shrink-0" size={20} />
                    <div>
                      <span className="text-[10px] text-slate-500 uppercase tracking-widest block">Capacity</span>
                      <span className="text-sm font-semibold">220 Guests</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Shield className="text-gold-400 flex-shrink-0" size={20} />
                    <div>
                      <span className="text-[10px] text-slate-500 uppercase tracking-widest block">Hull Class</span>
                      <span className="text-sm font-semibold">PC6 Polar Class</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Anchor className="text-gold-400 flex-shrink-0" size={20} />
                    <div>
                      <span className="text-[10px] text-slate-500 uppercase tracking-widest block">Zodiacs</span>
                      <span className="text-sm font-semibold">22 Fleet</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Sparkles className="text-gold-400 flex-shrink-0" size={20} />
                    <div>
                      <span className="text-[10px] text-slate-500 uppercase tracking-widest block">Service</span>
                      <span className="text-sm font-semibold">1:1.3 Crew Ratio</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/40 border border-slate-800/80 p-5 rounded-2xl">
                <h4 className="text-xs uppercase tracking-widest text-gold-400 font-bold mb-2">
                  Best For:
                </h4>
                <p className="text-xs font-sans text-slate-400 font-light leading-relaxed">
                  Travelers who want to sail on a modern, dedicated expedition ship with extreme polar capability and top-tier luxury amenities like the glass-dome pool deck.
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Card 2: Silver Wind */}
          <FadeIn delay={0.2} className="flex flex-col bg-slate-50 text-slate-900 rounded-3xl overflow-hidden shadow-xl border border-slate-200/60 group">
            <div className="aspect-[16/10] w-full overflow-hidden relative">
              {image2 && (
                <img 
                  src={image2} 
                  alt="Silver Wind" 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-103"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-slate-50/20 to-transparent"></div>
              <div className="absolute bottom-6 left-8">
                <span className="text-xs uppercase tracking-widest text-navy-950 font-bold mb-2 block">
                  CLASSIC CONVERTED EXPEDITION
                </span>
                <h3 className="text-3xl font-display font-medium text-navy-950">
                  Silver Wind
                </h3>
              </div>
            </div>

            <div className="p-8 md:p-10 flex-grow flex flex-col justify-between">
              <div>
                <p className="font-sans text-slate-600 text-sm md:text-base font-light leading-relaxed mb-8">
                  A classic luxury vessel completely converted to a polar expedition ship. It retains the spacious public rooms of a traditional cruise ship while providing full ice-strengthened polar access.
                </p>

                <div className="grid grid-cols-2 gap-6 mb-8 border-t border-b border-slate-200 py-6">
                  <div className="flex items-center gap-3">
                    <Users className="text-gold-500 flex-shrink-0" size={20} />
                    <div>
                      <span className="text-[10px] text-slate-400 uppercase tracking-widest block">Capacity</span>
                      <span className="text-sm font-semibold text-navy-950">274 Guests</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Shield className="text-gold-500 flex-shrink-0" size={20} />
                    <div>
                      <span className="text-[10px] text-slate-400 uppercase tracking-widest block">Hull Class</span>
                      <span className="text-sm font-semibold text-navy-950">Ice-Strengthened</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Anchor className="text-gold-500 flex-shrink-0" size={20} />
                    <div>
                      <span className="text-[10px] text-slate-400 uppercase tracking-widest block">Zodiacs</span>
                      <span className="text-sm font-semibold text-navy-950">16 Fleet</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Sparkles className="text-gold-500 flex-shrink-0" size={20} />
                    <div>
                      <span className="text-[10px] text-slate-400 uppercase tracking-widest block">Service</span>
                      <span className="text-sm font-semibold text-navy-950">1:1.4 Crew Ratio</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-slate-200 p-5 rounded-2xl">
                <h4 className="text-xs uppercase tracking-widest text-gold-500 font-bold mb-2">
                  Best For:
                </h4>
                <p className="text-xs font-sans text-slate-500 font-light leading-relaxed">
                  Travelers who prioritize itinerary diversity and value the layout of a classic ocean ship, featuring multiple lounges and an expansive wellness spa.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default ExpeditionShipComparison;
