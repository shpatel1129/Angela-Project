import React from 'react';
import FadeIn from './FadeIn';

const RvcInclusionsPricing = ({ data, image }) => {
  if (!data) return null;

  return (
    <section className="w-full py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Soft background visual */}
      <div className="absolute left-0 bottom-0 w-[400px] h-[400px] bg-slate-50 rounded-tr-full opacity-50 pointer-events-none"></div>

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <FadeIn className="mb-16 text-center">
          <span className="font-sans text-[10px] font-bold tracking-[0.3em] uppercase text-ts-gold block mb-3">INCLUSIONS & TRUE COST</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950 leading-tight">
            {data.title}
          </h2>
          <div className="w-20 h-1 bg-ts-gold mx-auto mt-5"></div>
          <p className="font-sans text-sm text-slate-600 mt-6 max-w-2xl mx-auto leading-relaxed">
            {data.intro}
          </p>
        </FadeIn>

        {/* 12-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch mb-16">
          
          {/* Left Block: Inclusions Columns (col-span-8) */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-50/50 rounded-3xl p-6 sm:p-8 border border-slate-100">
            
            {/* Regent Path */}
            <div className="space-y-6">
              <div className="pb-3 border-b border-slate-200">
                <span className="font-sans text-[9px] font-bold tracking-wider text-navy-950 block uppercase mb-1">{data.regentPricing?.tagline}</span>
                <h4 className="font-display text-lg font-bold text-navy-950">{data.regentPricing?.title}</h4>
              </div>
              <ul className="space-y-4 relative pl-4 border-l border-navy-950/20">
                {data.regentPricing?.points?.map((pt, idx) => (
                  <li key={idx} className="relative text-xs text-slate-650 leading-relaxed font-light">
                    <span className="absolute -left-[21px] top-1.5 w-2.5 h-2.5 rounded-full bg-navy-950 border-2 border-white"></span>
                    {pt}
                  </li>
                ))}
              </ul>
            </div>

            {/* Crystal Path */}
            <div className="space-y-6 md:border-l md:border-slate-200 md:pl-6">
              <div className="pb-3 border-b border-slate-200">
                <span className="font-sans text-[9px] font-bold tracking-wider text-ts-gold block uppercase mb-1">{data.crystalPricing?.tagline}</span>
                <h4 className="font-display text-lg font-bold text-navy-950">{data.crystalPricing?.title}</h4>
              </div>
              <ul className="space-y-4 relative pl-4 border-l border-ts-gold/30">
                {data.crystalPricing?.points?.map((pt, idx) => (
                  <li key={idx} className="relative text-xs text-slate-650 leading-relaxed font-light">
                    <span className="absolute -left-[21px] top-1.5 w-2.5 h-2.5 rounded-full bg-ts-gold border-2 border-white"></span>
                    {pt}
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Right Block: Photo Card (col-span-4) */}
          {image && (
            <div className="lg:col-span-4 relative rounded-3xl overflow-hidden shadow-lg border border-slate-200 min-h-[300px]">
              <img
                src={image}
                alt="Cruising Santorini"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/10 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white z-10">
                <span className="font-sans text-[9px] text-ts-gold font-bold uppercase tracking-widest block mb-2">BUDGET EFFICIENCY</span>
                <p className="font-serif text-xs text-slate-200 leading-normal font-light">
                  Compare total vacation costs—excursions, dining, and transit—to evaluate true value.
                </p>
              </div>
            </div>
          )}

        </div>

        {/* Bottom Section: Booking Mistakes Grid (3 Columns) */}
        <div>
          <FadeIn className="mb-6">
            <h3 className="font-display text-xl font-bold text-navy-950 text-center uppercase tracking-wider">
              Booking Mistakes to Avoid
            </h3>
            <div className="w-12 h-0.5 bg-ts-gold mx-auto mt-3"></div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.bookingMistakes?.map((mistake, idx) => (
              <FadeIn
                key={idx}
                delay={idx * 0.1}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-200/60 shadow-sm relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-12 h-12 bg-navy-950/5 flex items-center justify-center rounded-bl-3xl">
                  <span className="font-sans text-xs font-bold text-navy-950">!</span>
                </div>
                <h5 className="font-display text-sm font-bold text-navy-950 mb-3 pr-8">
                  {mistake.title}
                </h5>
                <p className="font-sans text-xs text-slate-650 leading-relaxed font-light">
                  {mistake.desc}
                </p>
              </FadeIn>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default RvcInclusionsPricing;
