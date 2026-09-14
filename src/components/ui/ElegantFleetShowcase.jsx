import React, { useState } from 'react';
import FadeIn from './FadeIn';
import MasterImage from './MasterImage';
import { Ship, Users, Star } from 'lucide-react';

const ElegantFleetShowcase = ({ title, subtitle, ships = [] }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!ships || ships.length === 0) return null;

  return (
    <section className="py-20 lg:py-32 bg-slate-50 relative overflow-hidden" id="fleet-overview">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-[50vh] bg-navy-950/5 skew-y-[-2deg] origin-top-left -z-10" />
      
      <div className="max-w-[1400px] mx-auto px-6">
        <FadeIn className="text-center mb-16 lg:mb-24">
          <span className="font-sans text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-accent-600 mb-4 inline-block">
            ✦ THE FLEET ✦
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-navy-950 mb-6">{title}</h2>
          {subtitle && <p className="font-sans text-lg text-slate-600 max-w-2xl mx-auto">{subtitle}</p>}
        </FadeIn>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Left Column - List of Ships */}
          <div className="w-full lg:w-1/3 flex flex-col gap-3">
            {ships.map((ship, idx) => (
              <FadeIn key={idx} delay={idx * 0.1} direction="up">
                <button
                  onClick={() => setActiveIndex(idx)}
                  className={`w-full text-left p-5 rounded-2xl transition-all duration-500 border relative overflow-hidden group ${
                    activeIndex === idx 
                      ? 'bg-navy-950 text-white border-navy-900 shadow-xl scale-[1.02]' 
                      : 'bg-white text-navy-950 border-slate-200 hover:border-ts-gold/50 hover:bg-slate-50'
                  }`}
                >
                  {/* Subtle hover background effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r from-ts-gold/10 to-transparent opacity-0 transition-opacity duration-500 ${activeIndex !== idx ? 'group-hover:opacity-100' : ''}`} />
                  
                  <div className="relative z-10 flex items-center justify-between">
                    <div>
                      <h3 className={`font-display text-xl sm:text-2xl mb-1 ${activeIndex === idx ? 'text-white' : 'text-navy-950'}`}>
                        {ship.name}
                      </h3>
                      <p className={`font-sans text-xs tracking-widest uppercase ${activeIndex === idx ? 'text-ts-gold' : 'text-slate-500'}`}>
                        {ship.atmosphere}
                      </p>
                    </div>
                    {/* Arrow or icon indicator */}
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-500 ${activeIndex === idx ? 'bg-ts-gold text-navy-950 translate-x-0' : 'bg-slate-100 text-slate-400 -translate-x-2'}`}>
                      <Ship className="w-4 h-4" />
                    </div>
                  </div>
                </button>
              </FadeIn>
            ))}
          </div>

          {/* Right Column - Active Ship Details */}
          <div className="w-full lg:w-2/3">
            <FadeIn delay={0.2} direction="left" className="h-full">
              <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-200 h-full flex flex-col relative group">
                <div className="relative h-[400px] lg:h-[450px] w-full overflow-hidden">
                  <MasterImage 
                    src={ships[activeIndex].image} 
                    alt={ships[activeIndex].name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/20 to-transparent" />
                  
                  <div className="absolute bottom-8 left-8 right-8">
                    <span className="bg-ts-gold text-navy-950 text-[10px] font-bold tracking-[0.2em] px-4 py-1.5 rounded-full inline-block uppercase shadow-lg mb-4">
                      {ships[activeIndex].launched}
                    </span>
                    <h3 className="font-display text-3xl md:text-4xl lg:text-5xl text-white drop-shadow-md mb-2">
                      {ships[activeIndex].name}
                    </h3>
                  </div>
                </div>

                <div className="p-8 lg:p-10 flex flex-col md:flex-row gap-8 bg-white">
                  <div className="w-full md:w-1/2">
                    <h4 className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-4 flex items-center gap-2">
                      <Star className="w-4 h-4 text-ts-gold" /> Why Choose {ships[activeIndex].name}?
                    </h4>
                    <p className="font-sans text-slate-600 leading-relaxed font-light text-sm md:text-base">
                      {ships[activeIndex].description || `Experience the ultimate in luxury aboard ${ships[activeIndex].name}.`}
                    </p>
                  </div>
                  
                  <div className="w-full md:w-1/2 flex flex-col gap-4">
                    <div className="bg-slate-50 rounded-2xl p-4 flex items-center gap-4 border border-slate-100">
                      <div className="w-10 h-10 rounded-full bg-navy-50 text-navy-900 flex items-center justify-center shrink-0">
                        <Users className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="block font-sans text-[10px] font-bold uppercase tracking-widest text-slate-400">Guest Capacity</span>
                        <span className="block font-display text-lg text-navy-950">{ships[activeIndex].guests} Guests</span>
                      </div>
                    </div>
                    
                    <div className="bg-slate-50 rounded-2xl p-4 flex items-center gap-4 border border-slate-100">
                      <div className="w-10 h-10 rounded-full bg-ice-100 text-accent-700 flex items-center justify-center shrink-0">
                        <Star className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="block font-sans text-[10px] font-bold uppercase tracking-widest text-slate-400">Best For</span>
                        <span className="block font-display text-lg text-navy-950">{ships[activeIndex].bestFor}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ElegantFleetShowcase;
