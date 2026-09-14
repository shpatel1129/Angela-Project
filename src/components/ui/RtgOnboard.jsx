import React from 'react';
import FadeIn from './FadeIn';

const RtgOnboard = ({ onboard, image }) => {
  if (!onboard) return null;

  return (
    <section className="w-full py-20 lg:py-28 bg-slate-50 relative overflow-hidden">
      {/* Background shape */}
      <div className="absolute right-0 top-1/4 w-32 h-64 bg-ts-gold/5 rounded-l-full pointer-events-none"></div>

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <FadeIn className="mb-16 text-center">
          <span className="font-sans text-[10px] font-bold tracking-[0.3em] uppercase text-ts-gold block mb-3">LIFE ONBOARD</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950 leading-tight">
            Suites & Dining Onboard Experience
          </h2>
          <div className="w-20 h-1 bg-ts-gold mx-auto mt-5"></div>
        </FadeIn>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column: Suite Explorer (cols 1-6) */}
          <div className="lg:col-span-6 flex flex-col justify-between bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
            <div>
              <span className="font-sans text-[8px] font-bold text-ts-gold uppercase tracking-widest block mb-1">ALL-SUITE COMFORT</span>
              <h3 className="font-display text-lg font-bold text-navy-950 mb-6 pb-2 border-b border-slate-100">
                Spacious Suite Accommodations
              </h3>
              
              <div className="space-y-6 text-left">
                {onboard.suites?.map((suite, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-navy-950 text-white flex-shrink-0 flex items-center justify-center font-sans text-[10px] font-bold mt-0.5">
                      {idx + 1}
                    </span>
                    <div>
                      <h5 className="font-sans text-xs font-bold text-navy-950">{suite.name}</h5>
                      <p className="font-sans text-[11px] text-slate-655 leading-relaxed font-light mt-0.5">{suite.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {image && (
              <div className="mt-8 relative rounded-2xl overflow-hidden shadow-sm border border-slate-200 h-28">
                <img src={image} alt="Signature suite layout" className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-navy-950/20"></div>
              </div>
            )}
          </div>

          {/* Right Column: Culinary Excellence (cols 7-12) */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <span className="font-sans text-[8px] font-bold text-ts-gold uppercase tracking-widest block mb-1">GASTRONOMY STAR</span>
              <h3 className="font-display text-lg font-bold text-navy-950 mb-6 pb-2 border-b border-slate-100">
                Specialty Dining With Zero Cover Charge
              </h3>
              
              <div className="space-y-6 text-left">
                {onboard.dining?.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-ts-gold text-navy-950 flex-shrink-0 flex items-center justify-center font-sans text-[10px] font-bold mt-0.5">
                      ✓
                    </span>
                    <div>
                      <h5 className="font-sans text-xs font-bold text-navy-950">{item.name}</h5>
                      <p className="font-sans text-[11px] text-slate-655 leading-relaxed font-light mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="font-sans text-[9px] text-slate-450 font-bold uppercase tracking-wider">Culinary & Comfort</span>
              <span className="font-sans text-[9px] text-navy-950 font-bold uppercase tracking-wider">Five-Star Yacht Life</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default RtgOnboard;
