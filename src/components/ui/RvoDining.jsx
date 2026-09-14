import React from 'react';
import FadeIn from './FadeIn';

const RvoDining = ({ data, image }) => {
  if (!data) return null;

  return (
    <section id="dining-battle" className="w-full py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-ice-50 rounded-full blur-3xl opacity-40 pointer-events-none"></div>

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <FadeIn className="mb-14">
          <span className="font-sans text-[10px] font-bold tracking-[0.3em] uppercase text-ts-gold block mb-3">GASTRONOMY COMPARISON</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950 leading-tight">
            {data.title}
          </h2>
          <div className="w-20 h-1 bg-ts-gold mt-5"></div>
        </FadeIn>

        {/* Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          <div className="lg:col-span-7">
            <FadeIn delay={0.1}>
              <p className="font-serif text-lg md:text-xl text-slate-700 leading-relaxed font-light mb-6">
                {data.intro}
              </p>
            </FadeIn>
          </div>
          
          <div className="lg:col-span-5 relative">
            <FadeIn direction="left" className="rounded-3xl overflow-hidden shadow-xl border border-slate-200 min-h-[220px] relative">
              {image && (
                <img
                  src={image}
                  alt="Fine Dining at Sea"
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
              )}
            </FadeIn>
          </div>
        </div>

        {/* Two-Column Brand Focus Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Oceania Card */}
          <FadeIn direction="right" className="bg-slate-50 border border-slate-200/60 rounded-3xl p-8 hover:shadow-md transition-shadow">
            <span className="font-sans text-[9px] font-bold tracking-widest text-teal-accent uppercase block mb-3">CULINARY EXCELLENCE</span>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-navy-950 mb-4">
              {data.oceania?.title}
            </h3>
            <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
              {data.oceania?.desc}
            </p>
            <div className="mt-6 pt-4 border-t border-slate-200 text-xs text-slate-500 italic">
              Key Venues: Ember, Toscana, Polo Grill, Red Ginger, Jacques.
            </div>
          </FadeIn>

          {/* Regent Card */}
          <FadeIn direction="left" className="bg-navy-950 text-white rounded-3xl p-8 shadow-xl relative overflow-hidden group border border-white/5">
            <div className="absolute top-0 right-0 w-48 h-48 bg-ts-gold/5 rounded-full blur-2xl"></div>
            <span className="font-sans text-[9px] font-bold tracking-widest text-ts-gold uppercase block mb-3">ALL-INCLUSIVE GOURMET</span>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-4">
              {data.regent?.title}
            </h3>
            <p className="font-sans text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
              {data.regent?.desc}
            </p>
            <div className="mt-6 pt-4 border-t border-white/10 text-xs text-slate-400 italic">
              Key Venues: Compass Rose, Prime 7, Chartreuse, Pacific Rim.
            </div>
          </FadeIn>

        </div>

      </div>
    </section>
  );
};

export default RvoDining;
