import React from 'react';
import FadeIn from './FadeIn';

const RciIntro = ({ title, description, points, image }) => {
  return (
    <section className="w-full py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Background shape */}
      <div className="absolute right-0 top-1/4 w-32 h-64 bg-slate-50 rounded-l-full pointer-events-none"></div>

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Rankings Intro (cols 1-7) */}
          <div className="lg:col-span-7 space-y-8">
            <FadeIn>
              <span className="font-sans text-[10px] font-bold tracking-[0.3em] uppercase text-ts-gold block mb-2">RANKINGS CRITERIA</span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950 leading-tight">
                {title || "How We Ranked the Best Regent Cruise Itineraries"}
              </h2>
              <div className="w-16 h-1 bg-ts-gold my-6"></div>
              <p className="font-sans text-sm text-slate-655 leading-relaxed font-light">
                {description || "Choosing the right itinerary is often more important than choosing the ship itself. Our rankings evaluate each itinerary across multiple luxury travel criteria."}
              </p>
            </FadeIn>

            {/* Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {points?.map((pt, idx) => (
                <FadeIn key={idx} delay={idx * 0.08} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-navy-950 text-white flex-shrink-0 flex items-center justify-center font-sans text-xs mt-0.5">
                    ✓
                  </span>
                  <p className="font-sans text-xs text-slate-700 leading-relaxed font-medium">
                    {pt}
                  </p>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* Right Column: Featured Image Card (cols 8-12) */}
          {image && (
            <div className="lg:col-span-5">
              <FadeIn direction="left" delay={0.2}>
                <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200 bg-slate-50 min-h-[300px]">
                  <img
                    src={image}
                    alt="Port of Ketchikan Docked Yacht"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/20 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6 text-white z-10">
                    <span className="font-sans text-[9px] text-ts-gold font-bold tracking-widest block uppercase mb-1">ALASKA BOUND</span>
                    <p className="font-serif text-xs text-slate-200 leading-normal font-light">
                      Itinerary decisions dictate shore excursion options, flight routes, and pre-cruise stays.
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>
          )}

        </div>
      </div>
    </section>
  );
};

export default RciIntro;
