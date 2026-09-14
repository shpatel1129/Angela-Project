import React from 'react';
import FadeIn from './FadeIn';

/**
 * BestBeachesLogistics
 * Process columns outlining step-by-step advice for planning logistics.
 */
const BestBeachesLogistics = ({ logistics = [] }) => {
  return (
    <section id="best-beaches-logistics" className="py-24 bg-white border-b border-slate-200 text-left">
      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-sans font-bold tracking-[0.2em] text-[#c9a15c] uppercase mb-4 block">
            TRANSIT ADVICE
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-light text-navy-950 mb-6">
            Greek Beach Logistics & Planning
          </h2>
          <p className="font-sans text-slate-600 font-light leading-relaxed">
            Planning transport properly avoids transit fatigue and maximizes your actual beach relaxation time.
          </p>
        </div>

        {/* Numbers Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {logistics.map((l, idx) => (
            <FadeIn key={idx} delay={idx * 0.15}>
              <div className="space-y-4">
                <div className="flex items-baseline gap-4">
                  <span className="font-display text-5xl font-extrabold text-[#c9a15c]/25">
                    {l.step}
                  </span>
                  <h4 className="font-display text-lg font-bold text-navy-950">
                    {l.title}
                  </h4>
                </div>
                <p className="font-sans text-xs text-slate-600 font-light leading-relaxed pl-12 border-l border-slate-100">
                  {l.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BestBeachesLogistics;
