import React from 'react';
import FadeIn from './FadeIn';

const RtgDestinations = ({ destinations, image }) => {
  if (!destinations) return null;

  return (
    <section className="w-full py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute right-0 top-1/3 w-24 h-48 bg-ts-gold/5 rounded-l-full pointer-events-none"></div>

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-8">
            <FadeIn>
              <span className="font-sans text-[10px] font-bold tracking-[0.3em] uppercase text-ts-gold block mb-2">SAILING REGIONS</span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950 leading-tight">
                Extraordinary Destinations & Itineraries
              </h2>
              <div className="w-16 h-1 bg-ts-gold my-6"></div>
              <p className="font-sans text-sm text-slate-655 leading-relaxed font-light">
                With voyages across all seven continents and over 550 ports of call, Regent allows travelers to experience the world's most fascinating ports with remarkable depth.
              </p>
            </FadeIn>
          </div>
          {image && (
            <div className="lg:col-span-4 relative rounded-2xl overflow-hidden shadow-sm border border-slate-200 h-32 hidden lg:block">
              <img src={image} alt="Scenic bay coastal cruise" className="w-full h-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-navy-950/20"></div>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((dest, idx) => (
            <FadeIn
              key={idx}
              delay={idx * 0.06}
              className="bg-slate-50 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md hover:bg-white transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              <div>
                {/* Destination Card Header Image */}
                {dest.image && (
                  <div className="relative w-full aspect-[16/10] bg-slate-100 mb-6 overflow-hidden">
                    <img src={dest.image} alt={dest.name} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                  </div>
                )}
                
                <div className="px-6 pb-6">
                  <span className="font-sans text-[8px] font-bold tracking-widest text-ts-gold block uppercase mb-1">
                    FOCUS: {dest.focus}
                  </span>
                  <h4 className="font-display text-base font-bold text-navy-950 mb-3">{dest.name}</h4>
                  <p className="font-sans text-xs text-slate-655 leading-relaxed font-light">
                    {dest.desc}
                  </p>
                </div>
              </div>

              {/* Card Footer ideal traveler badge */}
              <div className="px-6 pb-6 pt-4 border-t border-slate-200/60">
                <span className="font-sans text-[8px] font-bold text-slate-400 uppercase tracking-widest block mb-1">IDEAL TRAVELERS</span>
                <p className="font-sans text-[10px] text-navy-950 font-semibold leading-normal">
                  {dest.idealFor}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
};

export default RtgDestinations;
