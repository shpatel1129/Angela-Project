import React from 'react';
import FadeIn from './FadeIn';

const RvcDestinations = ({ data, image }) => {
  if (!data) return null;

  return (
    <section className="w-full py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute right-0 bottom-0 w-48 h-96 bg-ts-gold/5 rounded-l-full pointer-events-none"></div>

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <FadeIn className="mb-16 text-center">
          <span className="font-sans text-[10px] font-bold tracking-[0.3em] uppercase text-ts-gold block mb-3">DESTINATIONS & TRAVEL STYLE</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950 leading-tight">
            {data.title}
          </h2>
          <div className="w-20 h-1 bg-ts-gold mx-auto mt-5"></div>
          <p className="font-sans text-sm text-slate-650 mt-6 max-w-2xl mx-auto leading-relaxed font-light">
            {data.intro}
          </p>
        </FadeIn>

        {/* 12-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left: Image Card (col-span-4) */}
          {image && (
            <div className="lg:col-span-4 relative rounded-3xl overflow-hidden shadow-lg border border-slate-200 min-h-[300px]">
              <img
                src={image}
                alt="Cruising Port of Call"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/10 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white z-10">
                <span className="font-sans text-[9px] text-ts-gold font-bold uppercase tracking-widest block mb-2">WORLD VOYAGES</span>
                <p className="font-serif text-xs text-slate-200 leading-normal font-light">
                  Compare Regent's port-intensive scheduling with Crystal's Abercrombie & Kent private boutique tours.
                </p>
              </div>
            </div>
          )}

          {/* Right: Content Cards Split (col-span-8) */}
          <div className="lg:col-span-8 space-y-6 flex flex-col justify-between">
            
            {/* Regent Destinations block */}
            <FadeIn className="bg-slate-50 rounded-3xl p-6 border border-slate-200/60 shadow-sm flex-1">
              <span className="font-sans text-[9px] text-navy-950 font-bold tracking-widest block uppercase mb-1">{data.regent?.title}</span>
              <p className="font-sans text-xs text-slate-650 leading-relaxed font-light mb-4">
                {data.regent?.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {data.regent?.highlights?.map((hl, idx) => (
                  <span key={idx} className="bg-navy-950/5 text-navy-950 px-3 py-1 rounded-full font-sans text-[10px] font-bold border border-navy-950/10">
                    {hl}
                  </span>
                ))}
              </div>
            </FadeIn>

            {/* Crystal Destinations block */}
            <FadeIn className="bg-slate-50 rounded-3xl p-6 border border-slate-200/60 shadow-sm flex-1">
              <span className="font-sans text-[9px] text-ts-gold font-bold tracking-widest block uppercase mb-1">{data.crystal?.title}</span>
              <p className="font-sans text-xs text-slate-650 leading-relaxed font-light mb-4">
                {data.crystal?.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {data.crystal?.highlights?.map((hl, idx) => (
                  <span key={idx} className="bg-ts-gold/5 text-ts-gold px-3 py-1 rounded-full font-sans text-[10px] font-bold border border-ts-gold/10">
                    {hl}
                  </span>
                ))}
              </div>
            </FadeIn>

          </div>

        </div>

      </div>
    </section>
  );
};

export default RvcDestinations;
