import React from 'react';
import FadeIn from './FadeIn';

/**
 * CreteCycladesMatchmaker
 * Profiling cards displaying custom matches based on travel personas.
 */
const CreteCycladesMatchmaker = ({ matchmaker = [], images = [] }) => {
  return (
    <section id="crete-cyclades-matchmaker" className="py-24 bg-slate-50 border-b border-slate-200 text-left">
      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-sans font-bold tracking-[0.2em] text-[#c9a15c] uppercase mb-4 block">
            MATCHMAKER GUIDE
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-light text-navy-950 mb-6">
            Find Your Greek Vacation Style
          </h2>
          <p className="font-sans text-slate-600 font-light leading-relaxed">
            Choose the island profile that best aligns with your travel companions, pace, and interests.
          </p>
        </div>

        {/* Profiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {matchmaker.map((m, idx) => {
            const cardImg = images[idx % images.length];

            return (
              <FadeIn key={idx} delay={idx * 0.15}>
                <div className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between h-full">
                  
                  {/* Image header */}
                  <div className="h-40 overflow-hidden relative">
                    <img src={cardImg} alt={m.profile} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-navy-950/20"></div>
                  </div>

                  {/* Profile details */}
                  <div className="p-6 space-y-4 flex-grow flex flex-col justify-between">
                    <div>
                      <h4 className="font-display text-lg font-bold text-navy-950 mb-2">
                        {m.profile}
                      </h4>
                      <p className="font-sans text-xs text-slate-500 font-light leading-relaxed">
                        {m.reason}
                      </p>
                    </div>

                    <div className="border-t border-slate-100 pt-4 flex justify-between items-center text-xs">
                      <span className="text-slate-400 font-sans uppercase tracking-wider">Recommended:</span>
                      <span className="font-sans font-bold text-[#c9a15c] uppercase tracking-wide">
                        {m.recommendation}
                      </span>
                    </div>
                  </div>

                </div>
              </FadeIn>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default CreteCycladesMatchmaker;
