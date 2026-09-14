import React from 'react';
import FadeIn from './FadeIn';

/**
 * BestBeachesTiming
 * Focuses on seasonal timing recommendations for planning a beach trip.
 */
const BestBeachesTiming = ({ timing = [], images = [] }) => {
  return (
    <section id="best-beaches-timing" className="py-24 bg-slate-50 border-b border-slate-200 text-left">
      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-sans font-bold tracking-[0.2em] text-[#c9a15c] uppercase mb-4 block">
            SEASONAL TIMING
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-light text-navy-950 mb-6">
            The Best Time for a Greece Beach Trip
          </h2>
          <p className="font-sans text-slate-600 font-light leading-relaxed">
            Choose the perfect month based on water temperature, winds, and guest crowds.
          </p>
        </div>

        {/* Timing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {timing.map((t, idx) => {
            const cardImg = images[idx % images.length];

            return (
              <FadeIn key={idx} delay={idx * 0.15}>
                <div className="bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between h-full">
                  
                  {/* Image header */}
                  <div className="h-44 overflow-hidden relative">
                    <img src={cardImg} alt={t.period} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-navy-950/20"></div>
                  </div>

                  {/* Details */}
                  <div className="p-6 space-y-4 flex-grow flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-sans font-bold tracking-wider text-[#c9a15c] uppercase block mb-1">
                        {t.period}
                      </span>
                      <h4 className="font-display text-lg font-bold text-navy-950 mb-2">
                        {t.title}
                      </h4>
                      <p className="font-sans text-xs text-slate-500 font-light leading-relaxed">
                        {t.desc}
                      </p>
                    </div>

                    <div className="border-t border-slate-100 pt-4 text-[10px] font-sans font-bold text-navy-950 tracking-wider uppercase flex justify-between">
                      <span>🌡️ Perfect balance</span>
                      <span className="text-[#c9a15c]">Rating: ★★★★★</span>
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

export default BestBeachesTiming;
