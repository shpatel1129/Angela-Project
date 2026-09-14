import React from 'react';
import FadeIn from './FadeIn';

const RcaTravelerTypes = ({ travelers, image }) => {
  if (!travelers) return null;

  return (
    <section className="w-full py-20 lg:py-28 bg-stone-50 relative overflow-hidden">
      {/* Background vector paths */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <line x1="50%" y1="0" x2="50%" y2="100%" stroke="#101d2c" strokeWidth="2" strokeDasharray="10,10" />
        </svg>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <FadeIn className="mb-20 text-center">
          <span className="font-sans text-[10px] font-bold tracking-[0.3em] uppercase text-ts-gold block mb-3">TRAVEL STYLE MATCH</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950 leading-tight">
            Matching Destinations to Your Traveler Profile
          </h2>
          <div className="w-20 h-1 bg-ts-gold mx-auto mt-5"></div>
          <p className="font-sans text-sm text-slate-600 mt-6 max-w-2xl mx-auto leading-relaxed">
            The ideal Regent cruise aligns with your passions, preferred pacing, and personal goals. Find your traveler personality below to see matching itinerary recommendations.
          </p>
        </FadeIn>

        {/* Zig-Zag Alternating Layout */}
        <div className="space-y-16 lg:space-y-24">
          {travelers.map((profile, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <div 
                key={idx} 
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
              >
                
                {/* Text Content Column */}
                <div className={`lg:col-span-7 ${isEven ? 'order-1' : 'order-1 lg:order-2'}`}>
                  <FadeIn direction={isEven ? 'right' : 'left'}>
                    <div className="space-y-5">
                      <div className="flex items-center gap-3">
                        <span className="font-sans text-2xl font-bold text-ts-gold/45">
                          0{idx + 1}
                        </span>
                        <div>
                          <span className="font-sans text-[9px] font-bold tracking-widest text-ts-gold block uppercase mb-0.5">{profile.subtitle}</span>
                          <h3 className="font-display text-xl sm:text-2xl font-bold text-navy-950">{profile.title}</h3>
                        </div>
                      </div>
                      <p className="font-sans text-xs sm:text-sm text-slate-650 leading-relaxed font-light">
                        {profile.desc}
                      </p>
                    </div>
                  </FadeIn>
                </div>

                {/* Visual Highlights Grid Column */}
                <div className={`lg:col-span-5 ${isEven ? 'order-2' : 'order-2 lg:order-1'}`}>
                  <FadeIn direction={isEven ? 'left' : 'right'} delay={0.1}>
                    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm relative overflow-hidden">
                      {/* Small corner detail */}
                      <div className="absolute top-0 right-0 w-16 h-16 bg-ts-gold/5 rounded-bl-full pointer-events-none"></div>

                      <h4 className="font-display text-xs font-bold text-navy-950 uppercase tracking-widest mb-4">
                        Ideal Regent Regions
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {profile.highlights?.map((hl, itemIdx) => (
                          <span 
                            key={itemIdx} 
                            className="px-3 py-1.5 rounded-xl bg-slate-50 hover:bg-navy-950 hover:text-white transition-colors duration-300 font-sans text-[10px] font-bold text-slate-600 border border-slate-200/50"
                          >
                            {hl}
                          </span>
                        ))}
                      </div>
                    </div>
                  </FadeIn>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default RcaTravelerTypes;
