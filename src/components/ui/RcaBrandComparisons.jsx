import React from 'react';
import FadeIn from './FadeIn';

const RcaBrandComparisons = ({ brands, image }) => {
  if (!brands) return null;

  return (
    <section className="w-full py-20 lg:py-28 bg-stone-50 relative overflow-hidden">
      {/* Decorative side accent lines */}
      <div className="absolute right-0 bottom-1/4 w-32 h-64 bg-navy-950/5 rounded-l-full pointer-events-none"></div>

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          <div className="lg:col-span-8">
            <FadeIn>
              <span className="font-sans text-[10px] font-bold tracking-[0.3em] uppercase text-ts-gold block mb-2">COMPETITIVE POSITIONING</span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950 leading-tight">
                Regent Compared to Other Luxury Cruise Lines
              </h2>
              <div className="w-16 h-1 bg-ts-gold my-6"></div>
              <p className="font-sans text-sm text-slate-650 leading-relaxed font-light">
                Every ultra-luxury line follows a distinct brand philosophy. Compare Regent side-by-side with Silversea, Seabourn, Crystal, and Viking to determine which matches your travel ideals.
              </p>
            </FadeIn>
          </div>
          {image && (
            <div className="lg:col-span-4 relative rounded-2xl overflow-hidden shadow-sm border border-slate-200 h-32">
              <img src={image} alt="Vessel docked in historic harbor" className="w-full h-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-navy-950/20"></div>
            </div>
          )}
        </div>

        {/* 4-Column Card Grid (4 columns on desktop, 2 columns on tablet, 1 on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {brands.map((item, idx) => (
            <FadeIn
              key={idx}
              delay={idx * 0.08}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-350 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="font-sans text-[8px] font-bold tracking-widest text-slate-400 block uppercase mb-1">BRAND DUEL</span>
                <h4 className="font-display text-base font-bold text-navy-950 mb-6">Regent vs {item.brand}</h4>
                
                <div className="space-y-4 pt-4 border-t border-slate-100 text-left">
                  <div>
                    <span className="font-sans text-[8px] font-bold text-navy-950 uppercase tracking-widest block mb-0.5">CHOOSE REGENT IF YOU PREFER</span>
                    <p className="font-sans text-[11px] text-slate-600 leading-relaxed font-light">{item.regentPros}</p>
                  </div>
                  <div className="pt-3 border-t border-slate-100/60">
                    <span className="font-sans text-[8px] font-bold text-ts-gold uppercase tracking-widest block mb-0.5">CHOOSE {item.brand.toUpperCase()} IF YOU PREFER</span>
                    <p className="font-sans text-[11px] text-slate-600 leading-relaxed font-light">{item.competitorPros}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="font-sans text-[9px] text-slate-450 font-bold uppercase tracking-wider">Advantage</span>
                <span className="font-sans text-[9px] text-navy-950 font-bold uppercase tracking-wider">Brand Dependent</span>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
};

export default RcaBrandComparisons;
