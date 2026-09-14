import React from 'react';
import FadeIn from './FadeIn';
import { Check, Compass } from 'lucide-react';

const RvsFundamentalDifference = ({ data, regentImage, silverseaImage }) => {
  if (!data) return null;

  return (
    <section className="w-full py-20 lg:py-28 bg-ice-50 relative overflow-hidden">
      {/* Decorative diagonal line */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-slate-200/40 to-transparent -translate-x-1/2"></div>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">

        {/* Header */}
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-sans text-[10px] font-bold tracking-[0.3em] uppercase text-slate-400 block mb-3">UNDERSTANDING THE CORE DIFFERENCE</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950">{data.title}</h2>
          <div className="w-12 h-1 bg-ts-gold mx-auto mt-5 mb-6"></div>
          <p className="font-serif text-base md:text-lg text-slate-600 leading-relaxed font-light">{data.intro}</p>
        </FadeIn>

        {/* Two-Column Zig-Zag: Regent on Left, Silversea on Right */}
        <div className="space-y-16">

          {/* REGENT BLOCK — Image Left, Content Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5">
              <FadeIn direction="right">
                <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-200 relative group">
                  {regentImage && (
                    <img src={regentImage} alt="Regent Seven Seas Cruises" className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 to-transparent"></div>
                  <div className="absolute bottom-5 left-5">
                    <span className="bg-navy-950/90 backdrop-blur-sm text-ts-gold text-[9px] font-bold tracking-[0.2em] px-4 py-1.5 rounded-full uppercase">{data.regent?.tagline}</span>
                  </div>
                </div>
              </FadeIn>
            </div>
            <div className="lg:col-span-7">
              <FadeIn direction="left">
                <span className="font-sans text-[10px] font-bold tracking-[0.25em] uppercase text-ts-gold block mb-3">REGENT SEVEN SEAS</span>
                <h3 className="font-display text-2xl font-bold text-navy-950 mb-4">{data.regent?.name}</h3>
                <p className="font-serif text-sm text-slate-600 leading-relaxed font-light mb-6">{data.regent?.philosophy}</p>

                <div className="grid grid-cols-2 gap-3 mb-6">
                  {data.regent?.inclusions?.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span className="font-sans text-xs text-slate-600">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-navy-950/5 rounded-2xl p-5 border border-navy-950/10">
                  <p className="font-sans text-xs text-slate-500 leading-relaxed font-light italic">"{data.regent?.summary}"</p>
                </div>
              </FadeIn>
            </div>
          </div>

          {/* SILVERSEA BLOCK — Content Left, Image Right (Zig-Zag) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 order-2 lg:order-1">
              <FadeIn direction="right">
                <span className="font-sans text-[10px] font-bold tracking-[0.25em] uppercase text-slate-400 block mb-3">SILVERSEA CRUISES</span>
                <h3 className="font-display text-2xl font-bold text-navy-950 mb-4">{data.silversea?.name}</h3>
                <p className="font-serif text-sm text-slate-600 leading-relaxed font-light mb-6">{data.silversea?.philosophy}</p>

                <div className="grid grid-cols-2 gap-3 mb-6">
                  {data.silversea?.strengths?.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <Compass className="w-4 h-4 text-sky-500 flex-shrink-0 mt-0.5" />
                      <span className="font-sans text-xs text-slate-600">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-sky-50/50 rounded-2xl p-5 border border-sky-100">
                  <p className="font-sans text-xs text-slate-500 leading-relaxed font-light italic">"{data.silversea?.summary}"</p>
                </div>
              </FadeIn>
            </div>
            <div className="lg:col-span-5 order-1 lg:order-2">
              <FadeIn direction="left">
                <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-200 relative group">
                  {silverseaImage && (
                    <img src={silverseaImage} alt="Silversea Cruises" className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 to-transparent"></div>
                  <div className="absolute bottom-5 right-5">
                    <span className="bg-white/90 backdrop-blur-sm text-navy-950 text-[9px] font-bold tracking-[0.2em] px-4 py-1.5 rounded-full uppercase">{data.silversea?.tagline}</span>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default RvsFundamentalDifference;
