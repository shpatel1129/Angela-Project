import React from 'react';
import FadeIn from './FadeIn';

const RvoProsCons = ({ data, image }) => {
  if (!data) return null;

  return (
    <section id="pros-cons" className="w-full py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-ice-50/50 rounded-bl-full pointer-events-none"></div>

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <FadeIn className="mb-14 text-center">
          <span className="font-sans text-[10px] font-bold tracking-[0.3em] uppercase text-ts-gold block mb-3">DECISION MATRIX</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950 leading-tight">
            {data.title}
          </h2>
          <div className="w-20 h-1 bg-ts-gold mx-auto mt-5"></div>
        </FadeIn>

        {/* Double-column grid showing Regent vs Oceania Pros/Cons side-by-side */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch mb-16">
          
          {/* Regent Columns */}
          <div className="lg:col-span-6 flex flex-col justify-between bg-slate-50 border border-slate-200/80 rounded-3xl p-6 sm:p-8">
            <FadeIn delay={0.1} className="space-y-6">
              <div className="border-b border-slate-200 pb-4">
                <span className="font-sans text-[10px] font-bold tracking-widest text-navy-950 uppercase block mb-1">REGENT SEVEN SEAS</span>
                <h3 className="font-display text-xl font-bold text-navy-950">Strengths & Trade-offs</h3>
              </div>

              {/* Pros */}
              <div>
                <span className="font-sans text-[9px] font-bold tracking-widest text-teal-accent uppercase block mb-3">THE PROS</span>
                <ul className="space-y-3">
                  {data.regent?.pros?.map((pro, idx) => (
                    <li key={idx} className="flex items-start text-xs sm:text-sm text-slate-700 font-sans font-light">
                      <span className="text-teal-accent mr-3 text-base leading-none">✓</span>
                      <span>{pro}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Cons */}
              <div className="border-t border-slate-200/60 pt-6">
                <span className="font-sans text-[9px] font-bold tracking-widest text-ts-gold uppercase block mb-3">THE CONS</span>
                <ul className="space-y-3">
                  {data.regent?.cons?.map((con, idx) => (
                    <li key={idx} className="flex items-start text-xs sm:text-sm text-slate-600 font-sans font-light">
                      <span className="text-ts-gold mr-3 text-base leading-none">!</span>
                      <span>{con}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>

          {/* Oceania Columns */}
          <div className="lg:col-span-6 flex flex-col justify-between bg-slate-50 border border-slate-200/80 rounded-3xl p-6 sm:p-8">
            <FadeIn delay={0.2} className="space-y-6">
              <div className="border-b border-slate-200 pb-4">
                <span className="font-sans text-[10px] font-bold tracking-widest text-ts-gold uppercase block mb-1">OCEANIA CRUISES</span>
                <h3 className="font-display text-xl font-bold text-navy-950">Strengths & Trade-offs</h3>
              </div>

              {/* Pros */}
              <div>
                <span className="font-sans text-[9px] font-bold tracking-widest text-teal-accent uppercase block mb-3">THE PROS</span>
                <ul className="space-y-3">
                  {data.oceania?.pros?.map((pro, idx) => (
                    <li key={idx} className="flex items-start text-xs sm:text-sm text-slate-700 font-sans font-light">
                      <span className="text-teal-accent mr-3 text-base leading-none">✓</span>
                      <span>{pro}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Cons */}
              <div className="border-t border-slate-200/60 pt-6">
                <span className="font-sans text-[9px] font-bold tracking-widest text-ts-gold uppercase block mb-3">THE CONS</span>
                <ul className="space-y-3">
                  {data.oceania?.cons?.map((con, idx) => (
                    <li key={idx} className="flex items-start text-xs sm:text-sm text-slate-600 font-sans font-light">
                      <span className="text-ts-gold mr-3 text-base leading-none">!</span>
                      <span>{con}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>

        </div>

        {/* Small Bottom Quote block with image next to it */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-8">
            <FadeIn delay={0.3} className="bg-ice-50/50 border border-slate-200/60 rounded-3xl p-6 sm:p-8">
              <p className="font-serif text-sm sm:text-base text-slate-700 leading-relaxed font-light italic">
                "One of the most common mistakes is choosing a brand before examining the actual sailing. A newer Oceania ship can be the better choice for one traveler, while a smaller Regent ship can be the better choice for another. The best process is: Cruise line → ship → suite → itinerary → inclusions → total cost → traveler profile."
              </p>
            </FadeIn>
          </div>

          <div className="lg:col-span-4 relative min-h-[180px] lg:min-h-auto h-full">
            <FadeIn direction="left" className="h-full rounded-3xl overflow-hidden shadow-md border border-slate-250 absolute inset-0">
              {image && (
                <img
                  src={image}
                  alt="Oceania Cruise Ship in Mykonos Greece"
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
              )}
            </FadeIn>
          </div>
        </div>

      </div>
    </section>
  );
};

export default RvoProsCons;
