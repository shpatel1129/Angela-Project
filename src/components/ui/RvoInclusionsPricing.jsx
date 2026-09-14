import React from 'react';
import FadeIn from './FadeIn';

const RvoInclusionsPricing = ({ data, image }) => {
  if (!data) return null;

  return (
    <section id="pricing-inclusions" className="w-full py-20 lg:py-28 bg-navy-950 text-white relative overflow-hidden">
      {/* Decorative luxury circles */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-ts-gold/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-navy-900/40 rounded-full blur-3xl translate-y-1/3 translate-x-1/3"></div>

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <FadeIn className="mb-14">
          <span className="font-sans text-[10px] font-bold tracking-[0.3em] uppercase text-ts-gold block mb-3">FINANCIAL LAYERS</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            {data.title}
          </h2>
          <div className="w-20 h-1 bg-ts-gold mt-5"></div>
        </FadeIn>

        {/* Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          <div className="lg:col-span-7">
            <FadeIn delay={0.1}>
              <p className="font-serif text-lg md:text-xl text-slate-200 leading-relaxed font-light mb-6">
                {data.intro}
              </p>
              <p className="font-sans text-sm sm:text-base text-slate-400 leading-relaxed font-light">
                {data.trueCostExplain}
              </p>
            </FadeIn>
          </div>

          <div className="lg:col-span-5 relative">
            <FadeIn direction="left" className="rounded-3xl overflow-hidden shadow-2xl border border-white/10 min-h-[250px] relative">
              {image && (
                <img
                  src={image}
                  alt="Compass Rose Dining Room"
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
              )}
              <div className="absolute inset-0 bg-navy-950/40"></div>
            </FadeIn>
          </div>
        </div>

        {/* Value Equation & Comparison Cards */}
        <div className="border-t border-white/10 pt-16">
          <FadeIn className="mb-8">
            <h3 className="font-display text-2xl font-bold text-white mb-2">{data.calculations?.title}</h3>
            <p className="font-sans text-sm text-slate-400 font-light">{data.calculations?.desc}</p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.calculations?.items?.map((item, idx) => (
              <FadeIn key={idx} delay={idx * 0.1} className="bg-navy-900 border border-white/5 rounded-2xl p-6 hover:border-ts-gold/30 transition-all duration-300">
                <span className="font-sans text-[10px] font-bold tracking-widest text-ts-gold uppercase block mb-3">
                  {item.name}
                </span>
                
                <div className="space-y-4 mt-4">
                  <div>
                    <span className="font-sans text-[9px] text-slate-450 uppercase font-semibold block mb-1">REGENT SEVEN SEAS</span>
                    <p className="font-serif text-sm text-slate-100 font-light">{item.regent}</p>
                  </div>
                  <div className="border-t border-white/5 pt-3">
                    <span className="font-sans text-[9px] text-slate-450 uppercase font-semibold block mb-1">OCEANIA CRUISES</span>
                    <p className="font-serif text-sm text-slate-355 font-light">{item.oceania}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default RvoInclusionsPricing;
