import React from 'react';
import FadeIn from './FadeIn';

const RcaItinerarySeasons = ({ seasons, image }) => {
  if (!seasons) return null;

  return (
    <section className="w-full py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Decorative background shape */}
      <div className="absolute left-0 bottom-0 w-48 h-48 bg-slate-50 rounded-tr-full opacity-50 pointer-events-none"></div>

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          <div className="lg:col-span-8">
            <FadeIn>
              <span className="font-sans text-[10px] font-bold tracking-[0.3em] uppercase text-ts-gold block mb-2">SEASONAL ANALYSIS</span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950 leading-tight">
                Choosing the Best Season for Your Regent Cruise
              </h2>
              <div className="w-16 h-1 bg-ts-gold my-6"></div>
              <p className="font-sans text-sm text-slate-650 leading-relaxed font-light">
                Timing significantly shapes your cruising experience. Select the optimal month to enhance scenic viewpoints, wildlife migration patterns, and port temperatures.
              </p>
            </FadeIn>
          </div>
          {image && (
            <div className="lg:col-span-4 relative rounded-2xl overflow-hidden shadow-sm border border-slate-200 h-32">
              <img src={image} alt="Vessel cruising through nature" className="w-full h-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-navy-950/20"></div>
            </div>
          )}
        </div>

        {/* 4-Quadrant Season Matrix (4 columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {seasons.map((season, idx) => (
            <FadeIn
              key={idx}
              delay={idx * 0.08}
              className="bg-slate-50 rounded-3xl p-6 border border-slate-200/80 shadow-sm hover:shadow-md hover:bg-white transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="font-sans text-[8px] font-bold tracking-widest text-slate-400 block uppercase mb-1">RECOMMENDED VOYAGE TIME</span>
                <h4 className="font-display text-lg font-bold text-navy-950 mb-4">{season.name}</h4>
                
                <div className="space-y-4 pt-4 border-t border-slate-200">
                  <div>
                    <span className="font-sans text-[8px] font-bold text-ts-gold uppercase tracking-widest block mb-0.5">BEST DESTINATIONS</span>
                    <p className="font-sans text-xs font-semibold text-navy-950 leading-relaxed">{season.destinations}</p>
                  </div>
                  <div>
                    <span className="font-sans text-[8px] font-bold text-slate-400 uppercase tracking-widest block mb-0.5">WHY TRAVEL THEN</span>
                    <p className="font-sans text-xs text-slate-650 leading-relaxed font-light">{season.why}</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-3 border-t border-slate-200/60 flex items-center justify-between">
                <span className="font-sans text-[9px] text-slate-400 font-bold uppercase tracking-wider">Pacing</span>
                <span className="font-sans text-[9px] text-ts-gold font-bold uppercase tracking-wider">Optimal</span>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
};

export default RcaItinerarySeasons;
