import React from 'react';
import FadeIn from './FadeIn';

const RvcProsCons = ({ data, image }) => {
  if (!data) return null;

  return (
    <section className="w-full py-20 lg:py-28 bg-ice-50 relative overflow-hidden">
      {/* Background vector elements */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <line x1="0" y1="20%" x2="100%" y2="20%" stroke="#101d2c" strokeWidth="1" />
          <line x1="0" y1="80%" x2="100%" y2="80%" stroke="#101d2c" strokeWidth="1" />
        </svg>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <FadeIn className="mb-16 text-center">
          <span className="font-sans text-[10px] font-bold tracking-[0.3em] uppercase text-ts-gold block mb-3">DECISION MATRIX</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950 leading-tight">
            {data.title}
          </h2>
          <div className="w-20 h-1 bg-ts-gold mx-auto mt-5"></div>
        </FadeIn>

        {/* 12-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Block: Comparative pros/cons cards (col-span-8) */}
          <div className="lg:col-span-8 space-y-6 flex flex-col justify-between">
            
            {/* Regent block */}
            <FadeIn className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm flex-1">
              <span className="font-sans text-[9px] text-navy-950 font-bold tracking-widest block uppercase mb-4 pb-2 border-b border-slate-100">
                REGENT SEVEN SEAS ADVANTAGES & LIMITS
              </span>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-sans text-xs font-bold text-emerald-600 mb-3 flex items-center gap-1.5">
                    <span>✓</span> Strengths
                  </h5>
                  <ul className="space-y-2 text-xs font-light text-slate-650">
                    {data.regent?.pros?.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1 h-1 rounded-full bg-emerald-500 mt-2 flex-shrink-0"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h5 className="font-sans text-xs font-bold text-rose-500 mb-3 flex items-center gap-1.5">
                    <span>✕</span> Considerations
                  </h5>
                  <ul className="space-y-2 text-xs font-light text-slate-650">
                    {data.regent?.cons?.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1 h-1 rounded-full bg-rose-450 mt-2 flex-shrink-0"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>

            {/* Crystal block */}
            <FadeIn className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm flex-1">
              <span className="font-sans text-[9px] text-ts-gold font-bold tracking-widest block uppercase mb-4 pb-2 border-b border-slate-100">
                CRYSTAL CRUISES ADVANTAGES & LIMITS
              </span>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-sans text-xs font-bold text-emerald-600 mb-3 flex items-center gap-1.5">
                    <span>✓</span> Strengths
                  </h5>
                  <ul className="space-y-2 text-xs font-light text-slate-650">
                    {data.crystal?.pros?.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1 h-1 rounded-full bg-emerald-500 mt-2 flex-shrink-0"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h5 className="font-sans text-xs font-bold text-rose-500 mb-3 flex items-center gap-1.5">
                    <span>✕</span> Considerations
                  </h5>
                  <ul className="space-y-2 text-xs font-light text-slate-650">
                    {data.crystal?.cons?.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1 h-1 rounded-full bg-rose-450 mt-2 flex-shrink-0"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>

          </div>

          {/* Right Block: Image & Booking Timeline Callout (col-span-4) */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
            {image && (
              <FadeIn className="rounded-3xl overflow-hidden shadow-md border border-slate-200 h-56 relative">
                <img
                  src={image}
                  alt="Sorrento Docking Yacht View"
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-navy-950/40"></div>
                <div className="absolute inset-0 flex items-center justify-center p-6 text-center z-10">
                  <p className="font-serif text-xs text-white leading-relaxed italic">
                    "Deciding early secures the best suites, dates, and promotions."
                  </p>
                </div>
              </FadeIn>
            )}

            <FadeIn className="bg-navy-950 text-white rounded-3xl p-6 border border-white/5 shadow-lg flex-1 flex flex-col justify-between">
              <div>
                <span className="font-sans text-[9px] text-ts-gold font-bold tracking-widest block uppercase mb-1">
                  PLANNING STRATEGY
                </span>
                <h4 className="font-display text-sm font-bold mb-4">
                  When to Lock In Your Voyage?
                </h4>
                <p className="font-sans text-xs text-slate-300 leading-relaxed font-light mb-4">
                  Because Regent and Crystal operate small, specialized fleets, suite availability on Alaska, Europe, and World Cruises evaporates up to 10–12 months in advance.
                </p>
              </div>
              <div className="pt-4 border-t border-white/10">
                <span className="font-sans text-[9px] text-ts-gold font-bold tracking-wider uppercase block">Advisor recommendation</span>
                <p className="font-sans text-[11px] text-slate-400 mt-1">Book early to secure suites and promotion credentials.</p>
              </div>
            </FadeIn>
          </div>

        </div>

      </div>
    </section>
  );
};

export default RvcProsCons;
