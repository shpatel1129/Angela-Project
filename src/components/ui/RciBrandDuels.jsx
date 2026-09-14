import React from 'react';
import FadeIn from './FadeIn';

const RciBrandDuels = ({ duels, image }) => {
  if (!duels) return null;

  return (
    <section className="w-full py-20 lg:py-28 bg-stone-50 relative overflow-hidden">
      {/* Background shape */}
      <div className="absolute right-0 top-1/4 w-32 h-64 bg-ts-gold/5 rounded-l-full pointer-events-none"></div>

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          <div className="lg:col-span-8">
            <FadeIn>
              <span className="font-sans text-[10px] font-bold tracking-[0.3em] uppercase text-ts-gold block mb-2">DECISION MATRIX</span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950 leading-tight">
                Which Regent Itinerary Is Right for You?
              </h2>
              <div className="w-16 h-1 bg-ts-gold my-6"></div>
              <p className="font-sans text-sm text-slate-655 leading-relaxed font-light">
                No single itinerary is the best match for every traveler. Review the regional profiles and checklists below to select your perfect journey.
              </p>
            </FadeIn>
          </div>
          {image && (
            <div className="lg:col-span-4 relative rounded-2xl overflow-hidden shadow-sm border border-slate-200 h-32 hidden lg:block">
              <img src={image} alt="Vessel cruising past coastline" className="w-full h-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-navy-950/20"></div>
            </div>
          )}
        </div>

        {/* 4-Column Grid for Itinerary Comparisons (4 columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {duels.map((duel, idx) => (
            <FadeIn
              key={idx}
              delay={idx * 0.08}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="font-sans text-[8px] font-bold tracking-widest text-slate-400 block uppercase mb-1">REGION FIT</span>
                <h4 className="font-display text-base font-bold text-navy-950 mb-6">{duel.region} Cruises</h4>
                
                <div className="space-y-4 pt-4 border-t border-slate-100 text-left">
                  <div>
                    <span className="font-sans text-[8px] font-bold text-emerald-600 uppercase tracking-widest block mb-1.5">✓ Choose If You</span>
                    <ul className="space-y-1.5 text-[11px] font-light text-slate-650 leading-relaxed">
                      {duel.pros?.map((pro, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-1">
                          <span className="text-emerald-500 mt-0.5">•</span>
                          <span>{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="pt-3 border-t border-slate-100/60">
                    <span className="font-sans text-[8px] font-bold text-rose-500 uppercase tracking-widest block mb-1.5">✕ Avoid If You</span>
                    <ul className="space-y-1.5 text-[11px] font-light text-slate-650 leading-relaxed">
                      {duel.cons?.map((con, cIdx) => (
                        <li key={cIdx} className="flex items-start gap-1">
                          <span className="text-rose-450 mt-0.5">•</span>
                          <span>{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="font-sans text-[9px] text-slate-450 font-bold uppercase tracking-wider">Itinerary Style</span>
                <span className="font-sans text-[9px] text-navy-950 font-bold uppercase tracking-wider">Decision Matrix</span>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
};

export default RciBrandDuels;
