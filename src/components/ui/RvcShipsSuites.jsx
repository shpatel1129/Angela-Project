import React from 'react';
import FadeIn from './FadeIn';

const RvcShipsSuites = ({ data, image }) => {
  if (!data) return null;

  return (
    <section className="w-full py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Decorative vector shape */}
      <div className="absolute left-0 top-1/3 w-24 h-48 bg-navy-950/5 rounded-r-full pointer-events-none"></div>

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <FadeIn className="mb-16 text-center">
          <span className="font-sans text-[10px] font-bold tracking-[0.3em] uppercase text-ts-gold block mb-3">ACCOMMODATIONS</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950 leading-tight">
            {data.title}
          </h2>
          <div className="w-20 h-1 bg-ts-gold mx-auto mt-5"></div>
          <p className="font-sans text-sm text-slate-650 mt-6 max-w-2xl mx-auto leading-relaxed font-light">
            {data.intro}
          </p>
        </FadeIn>

        {/* 12-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          
          {/* Left: Regent Suite Card (col-span-4) */}
          <div className="lg:col-span-4 flex">
            <FadeIn className="bg-navy-950 text-white rounded-3xl p-6 sm:p-8 border border-white/5 shadow-lg flex-1 flex flex-col justify-between">
              <div>
                <span className="font-sans text-[9px] text-ts-gold font-bold tracking-widest block uppercase mb-1">ALL-SUITE ALL-BALCONY</span>
                <h4 className="font-display text-lg font-bold mb-6">Regent Suite Spaces</h4>
                <ul className="space-y-4 text-xs font-light text-slate-300">
                  {data.regentSuites?.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-ts-gold mt-1.5 flex-shrink-0"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8 pt-4 border-t border-white/10 text-center">
                <span className="font-sans text-[9px] font-bold text-ts-gold tracking-wider uppercase block">HIGHLIGHT perk</span>
                <p className="font-sans text-[11px] text-slate-400 mt-1">Veranda included in every single category</p>
              </div>
            </FadeIn>
          </div>

          {/* Center: Crystal Suite Card (col-span-4) */}
          <div className="lg:col-span-4 flex">
            <FadeIn className="bg-white text-navy-950 rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm flex-1 flex flex-col justify-between">
              <div>
                <span className="font-sans text-[9px] text-slate-450 font-bold tracking-widest block uppercase mb-1">RESIDENTIAL ELEGANCE</span>
                <h4 className="font-display text-lg font-bold mb-6">Crystal Suite Spaces</h4>
                <ul className="space-y-4 text-xs font-light text-slate-650">
                  {data.crystalSuites?.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-navy-950 mt-1.5 flex-shrink-0"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8 pt-4 border-t border-slate-100 text-center">
                <span className="font-sans text-[9px] font-bold text-slate-400 tracking-wider uppercase block">HIGHLIGHT perk</span>
                <p className="font-sans text-[11px] text-slate-600 mt-1">Bespoke Italian furnishings and finishes</p>
              </div>
            </FadeIn>
          </div>

          {/* Right: Featured Suite Image Card (col-span-4) */}
          {image && (
            <div className="lg:col-span-4 relative rounded-3xl overflow-hidden shadow-lg border border-slate-200 min-h-[300px]">
              <img
                src={image}
                alt="Penthouse Balcony Suite Layout"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="font-sans text-[9px] text-ts-gold font-bold uppercase tracking-widest block mb-1">SUITE DETAILS</span>
                <p className="font-serif text-[11px] text-slate-200 leading-normal font-light">
                  Decide between Regent's generous square footage and Crystal's boutique room aesthetics.
                </p>
              </div>
            </div>
          )}

        </div>

        {/* Butler Service Section */}
        {data.butlers && (
          <FadeIn className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200/60 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              
              {/* Butler description */}
              <div className="md:col-span-4">
                <span className="font-sans text-[10px] font-bold text-ts-gold tracking-widest block uppercase mb-1">
                  SERVICE POLISH
                </span>
                <h5 className="font-display text-lg font-bold text-navy-950 mb-3">
                  {data.butlers.title}
                </h5>
                <p className="font-sans text-xs text-slate-650 leading-relaxed font-light">
                  {data.butlers.desc}
                </p>
              </div>

              {/* Regent Butlers */}
              <div className="md:col-span-4 border-t md:border-t-0 md:border-l border-slate-250 pt-4 md:pt-0 md:pl-6">
                <span className="font-sans text-[9px] font-bold text-navy-950 uppercase tracking-wider block mb-1">
                  Regent Butlers
                </span>
                <p className="font-sans text-xs text-slate-600 leading-relaxed font-light">
                  {data.butlers.regent}
                </p>
              </div>

              {/* Crystal Butlers */}
              <div className="md:col-span-4 border-t md:border-t-0 md:border-l border-slate-250 pt-4 md:pt-0 md:pl-6">
                <span className="font-sans text-[9px] font-bold text-ts-gold uppercase tracking-wider block mb-1">
                  Crystal Butlers
                </span>
                <p className="font-sans text-xs text-slate-600 leading-relaxed font-light">
                  {data.butlers.crystal}
                </p>
              </div>

            </div>
          </FadeIn>
        )}

      </div>
    </section>
  );
};

export default RvcShipsSuites;
