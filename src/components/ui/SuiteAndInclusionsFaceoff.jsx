import React from 'react';
import FadeIn from './FadeIn';

const SuiteAndInclusionsFaceoff = ({ data, imageAvalon, imageScenic }) => {
  if (!data) return null;

  return (
    <section className="py-24 bg-navy-950 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-navy-900/50 via-navy-950 to-navy-950"></div>
      
      <div className="max-w-[1300px] mx-auto px-6 relative z-10">
        <FadeIn>
          <div className="text-center mb-16 md:mb-24">
            <span className="font-sans text-ts-gold uppercase tracking-widest text-sm font-bold mb-4 block">
              {data.subtitle}
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-6">
              {data.title}
            </h2>
            <div className="w-24 h-[1px] bg-ts-gold/50 mx-auto"></div>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 relative">
          
          {/* VS Badge (desktop only) */}
          <div className="hidden lg:flex absolute left-1/2 top-1/4 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-ts-gold text-navy-950 font-display text-2xl items-center justify-center z-30 shadow-2xl border-4 border-navy-950">
            VS
          </div>

          {/* AVALON COLUMN */}
          <div className="flex flex-col relative">
            <FadeIn delay={0.1}>
              {/* Polaroid Image */}
              <div className="relative rotate-[-4deg] rounded-sm overflow-hidden shadow-2xl border-[12px] md:border-[16px] border-white bg-white hover:rotate-0 transition-transform duration-500 ease-out z-20 mx-auto max-w-md w-full group">
                <div className="aspect-[4/3] relative bg-slate-200">
                  <img 
                    src={imageAvalon} 
                    alt={data.avalon.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                  />
                </div>
                <div className="pt-5 pb-3 text-center bg-white border-t-2 border-slate-100">
                  <h3 className="font-display text-2xl md:text-3xl text-navy-950 mb-1">
                    {data.avalon.title}
                  </h3>
                  <span className="font-sans text-xs font-bold uppercase tracking-widest text-navy-600">
                    {data.avalon.subtitle}
                  </span>
                </div>
              </div>
            </FadeIn>

            {/* Features List */}
            <div className="mt-16 space-y-8 max-w-md mx-auto w-full">
              {data.avalon.inclusions.map((item, idx) => (
                <FadeIn key={idx} delay={0.2 + (idx * 0.1)} direction="up">
                  <div className="flex gap-6">
                    <div className="flex-shrink-0 mt-1 flex flex-col items-center">
                      <div className="w-3 h-3 rounded-full bg-ts-gold shadow-[0_0_10px_rgba(212,175,55,0.5)]"></div>
                      {idx !== data.avalon.inclusions.length - 1 && (
                        <div className="w-px h-full bg-white/20 mt-3 min-h-[40px]"></div>
                      )}
                    </div>
                    <div className="pb-2">
                      <h4 className="font-sans font-bold text-white text-xl mb-1">{item.name}</h4>
                      <p className="font-sans text-ice-100/70 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* SCENIC COLUMN */}
          <div className="flex flex-col relative mt-12 lg:mt-0">
            <FadeIn delay={0.3}>
              {/* Polaroid Image */}
              <div className="relative rotate-[3deg] rounded-sm overflow-hidden shadow-2xl border-[12px] md:border-[16px] border-white bg-white hover:rotate-0 transition-transform duration-500 ease-out z-20 mx-auto max-w-md w-full group">
                <div className="aspect-[4/3] relative bg-slate-200">
                  <img 
                    src={imageScenic} 
                    alt={data.scenic.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                  />
                </div>
                <div className="pt-5 pb-3 text-center bg-white border-t-2 border-slate-100">
                  <h3 className="font-display text-2xl md:text-3xl text-navy-950 mb-1">
                    {data.scenic.title}
                  </h3>
                  <span className="font-sans text-xs font-bold uppercase tracking-widest text-navy-600">
                    {data.scenic.subtitle}
                  </span>
                </div>
              </div>
            </FadeIn>

            {/* Features List */}
            <div className="mt-16 space-y-8 max-w-md mx-auto w-full">
              {data.scenic.inclusions.map((item, idx) => (
                <FadeIn key={idx} delay={0.4 + (idx * 0.1)} direction="up">
                  <div className="flex gap-6">
                    <div className="flex-shrink-0 mt-1 flex flex-col items-center">
                      <div className="w-3 h-3 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)]"></div>
                      {idx !== data.scenic.inclusions.length - 1 && (
                        <div className="w-px h-full bg-white/20 mt-3 min-h-[40px]"></div>
                      )}
                    </div>
                    <div className="pb-2">
                      <h4 className="font-sans font-bold text-white text-xl mb-1">{item.name}</h4>
                      <p className="font-sans text-ice-100/70 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SuiteAndInclusionsFaceoff;
