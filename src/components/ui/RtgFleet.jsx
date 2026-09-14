import React from 'react';
import FadeIn from './FadeIn';

const RtgFleet = ({ fleet, image }) => {
  if (!fleet) return null;

  return (
    <section className="w-full py-20 lg:py-28 bg-stone-50 relative overflow-hidden">
      {/* Background shape */}
      <div className="absolute left-0 top-1/4 w-32 h-64 bg-navy-950/5 rounded-r-full pointer-events-none"></div>

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-8">
            <FadeIn>
              <span className="font-sans text-[10px] font-bold tracking-[0.3em] uppercase text-ts-gold block mb-3">REGENT FLEET DIRECTORY</span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950 leading-tight">
                The World's Most Luxurious Fleet
              </h2>
              <div className="w-20 h-1 bg-ts-gold my-5"></div>
              <p className="font-sans text-sm text-slate-655 leading-relaxed font-light">
                Every Regent ship is designed for the ultra-luxury traveler, offering high space-per-guest ratios, all-suite configurations, and personalized service.
              </p>
            </FadeIn>
          </div>
          {image && (
            <div className="lg:col-span-4 relative rounded-2xl overflow-hidden shadow-sm border border-slate-200 h-32 hidden lg:block">
              <img src={image} alt="Luxury cruise ship at sunset" className="w-full h-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-navy-950/20"></div>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {fleet.map((ship, idx) => (
            <FadeIn
              key={idx}
              delay={idx * 0.06}
              className="bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              <div>
                {/* Ship Card Header Image */}
                {ship.image && (
                  <div className="relative w-full aspect-[16/10] bg-slate-100 mb-6 overflow-hidden">
                    <img src={ship.image} alt={ship.name} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                  </div>
                )}
                
                <div className="px-6 pb-6">
                  {/* Header info */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-sans text-[8px] font-bold text-ts-gold uppercase tracking-widest">
                      LAUNCHED {ship.launched}
                    </span>
                    <span className="px-2 py-0.5 rounded-lg bg-navy-950/5 text-navy-950 font-sans text-[9px] font-bold">
                      {ship.guests} GUESTS
                    </span>
                  </div>
                  
                  <h4 className="font-display text-base font-bold text-navy-950 mb-3">{ship.name}</h4>
                  <p className="font-sans text-xs text-slate-655 leading-relaxed font-light">
                    {ship.bestKnownFor}
                  </p>
                </div>
              </div>

              {/* Card Footer traveler badge */}
              <div className="px-6 pb-6 pt-4 border-t border-slate-100">
                <span className="font-sans text-[8px] font-bold text-slate-400 uppercase tracking-widest block mb-1">BEST SUITED FOR</span>
                <p className="font-sans text-[10px] text-navy-950 font-semibold leading-normal">
                  {ship.idealFor}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
};

export default RtgFleet;
