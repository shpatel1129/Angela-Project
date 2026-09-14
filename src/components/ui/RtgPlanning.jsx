import React from 'react';
import FadeIn from './FadeIn';

const RtgPlanning = ({ planning, image }) => {
  if (!planning) return null;

  return (
    <section className="w-full py-20 lg:py-28 bg-stone-50 relative overflow-hidden">
      {/* Background vector graphics */}
      <div className="absolute right-0 top-1/4 w-32 h-64 bg-slate-50 rounded-l-full pointer-events-none"></div>

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-8">
            <FadeIn>
              <span className="font-sans text-[10px] font-bold tracking-[0.3em] uppercase text-ts-gold block mb-2">PLANNING DESK</span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950 leading-tight">
                {planning.title || "Insider Planning Strategy"}
              </h2>
              <div className="w-16 h-1 bg-ts-gold my-6"></div>
              <p className="font-sans text-sm text-slate-655 leading-relaxed font-light">
                {planning.description || "Thoughtful pre-cruise planning is what elevates a good cruise into an unforgettable luxury journey."}
              </p>
            </FadeIn>
          </div>
          {image && (
            <div className="lg:col-span-4 relative rounded-2xl overflow-hidden shadow-sm border border-slate-200 h-32 hidden lg:block">
              <img src={image} alt="Luxury cruise balcony check-in view" className="w-full h-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-navy-950/20"></div>
            </div>
          )}
        </div>

        {/* 2-Column Grid for 4 Planning Tips (matching cards rule) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {planning.tips?.map((tip, idx) => (
            <FadeIn
              key={idx}
              delay={idx * 0.08}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-start gap-4">
                <span className="w-8 h-8 rounded-full bg-navy-950 text-white flex-shrink-0 flex items-center justify-center font-sans text-xs font-bold mt-0.5">
                  0{idx + 1}
                </span>
                <div>
                  <h4 className="font-display text-base font-bold text-navy-950 mb-2">{tip.title}</h4>
                  <p className="font-sans text-xs sm:text-sm text-slate-650 leading-relaxed font-light">
                    {tip.desc}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
};

export default RtgPlanning;
