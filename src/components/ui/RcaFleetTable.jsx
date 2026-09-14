import React from 'react';
import FadeIn from './FadeIn';

const RcaFleetTable = ({ fleet, image }) => {
  if (!fleet) return null;

  return (
    <section className="w-full py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Dynamic background element */}
      <div className="absolute right-0 top-1/4 w-32 h-64 bg-slate-50 rounded-l-full pointer-events-none border border-slate-100"></div>

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-8">
            <FadeIn>
              <span className="font-sans text-[10px] font-bold tracking-[0.3em] uppercase text-ts-gold block mb-2">FLEET SELECTION</span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950 leading-tight">
                Understanding the Regent Fleet at a Glance
              </h2>
              <div className="w-16 h-1 bg-ts-gold my-6"></div>
              <p className="font-sans text-sm text-slate-650 leading-relaxed font-light">
                Each Regent ship delivers the brand's hallmark all-inclusive luxury, but every vessel has its own personality, size, atmosphere, and strengths. Select the one that matches your travel priorities.
              </p>
            </FadeIn>
          </div>
          {image && (
            <div className="lg:col-span-4 hidden lg:block">
              <FadeIn className="rounded-2xl overflow-hidden shadow-md border border-slate-200 h-32 relative">
                <img src={image} alt="Regent Ships in Port" className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-navy-950/20"></div>
              </FadeIn>
            </div>
          )}
        </div>

        {/* 3-Column Grid for 6 Ships (2 rows of 3 columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {fleet.map((ship, idx) => (
            <FadeIn
              key={idx}
              delay={idx * 0.08}
              className="bg-white rounded-3xl p-6 sm:p-8 border-t-4 border-t-ts-gold border-x border-b border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="font-sans text-[9px] font-bold tracking-widest text-slate-400 block uppercase mb-1">REGENT SEVEN SEAS</span>
                <h4 className="font-display text-lg font-bold text-navy-950 mb-4">{ship.name}</h4>
                
                <div className="space-y-4 pt-4 border-t border-slate-100">
                  <div>
                    <span className="font-sans text-[8px] font-bold text-slate-400 uppercase tracking-widest block mb-0.5">BEST KNOWN FOR</span>
                    <p className="font-sans text-xs text-slate-650 leading-relaxed font-light">{ship.bestKnownFor}</p>
                  </div>
                  <div>
                    <span className="font-sans text-[8px] font-bold text-slate-400 uppercase tracking-widest block mb-0.5">IDEAL TRAVELER</span>
                    <p className="font-sans text-xs text-slate-650 leading-relaxed font-light">{ship.idealTraveler}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="font-sans text-[9px] text-slate-400 font-bold uppercase tracking-wider">Atmosphere Style</span>
                <span className="px-3 py-1 rounded-full bg-navy-950 text-white font-sans text-[9px] font-bold tracking-wider uppercase">
                  {ship.luxuryStyle}
                </span>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
};

export default RcaFleetTable;
