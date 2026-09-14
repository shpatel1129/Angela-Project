import React from 'react';
import FadeIn from './FadeIn';

const RvoShipsSuites = ({ data, image }) => {
  if (!data) return null;

  return (
    <section id="ships-suites" className="w-full py-20 lg:py-28 bg-ice-50 relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <FadeIn className="mb-14">
          <span className="font-sans text-[10px] font-bold tracking-[0.3em] uppercase text-ts-gold block mb-3">HARDWARE & COMFORT</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950 leading-tight">
            {data.title}
          </h2>
          <div className="w-20 h-1 bg-ts-gold mt-5"></div>
        </FadeIn>

        {/* Layout with detail cards and main featured image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Card list */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <FadeIn delay={0.1} className="space-y-6">
              <p className="font-serif text-lg text-slate-700 leading-relaxed font-light mb-6">
                {data.intro}
              </p>

              {data.sections?.map((item, idx) => (
                <div key={idx} className="bg-white border border-slate-200/60 rounded-3xl p-6 sm:p-8 hover:shadow-md transition-shadow">
                  <h4 className="font-display text-lg sm:text-xl font-bold text-navy-950 mb-3">{item.title}</h4>
                  <p className="font-sans text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </FadeIn>
          </div>

          {/* Featured Suite Image */}
          <div className="lg:col-span-5 relative min-h-[350px] lg:min-h-auto">
            <FadeIn direction="left" className="h-full rounded-3xl overflow-hidden shadow-xl border border-slate-250 absolute inset-0">
              {image && (
                <img
                  src={image}
                  alt="Regent Seven Seas Luxury Penthouse Suite"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-navy-950/10 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white z-10">
                <span className="font-sans text-[9px] text-ts-gold font-bold uppercase tracking-widest block mb-1">SUITE DETAILS</span>
                <p className="font-serif text-xs text-slate-200 leading-relaxed font-light">
                  Spacious living rooms, private verandas, and walk-in closets are standards in Regent's suite product.
                </p>
              </div>
            </FadeIn>
          </div>

        </div>

      </div>
    </section>
  );
};

export default RvoShipsSuites;
