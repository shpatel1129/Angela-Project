import React from 'react';
import FadeIn from './FadeIn';
import { HelpCircle, ArrowRight } from 'lucide-react';

const RvsIsRegentBetter = ({ data, image }) => {
  if (!data) return null;

  return (
    <section className="w-full py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6">

        {/* Header */}
        <FadeIn className="max-w-3xl mb-14">
          <span className="font-sans text-[10px] font-bold tracking-[0.3em] uppercase text-slate-400 block mb-3">THE HONEST ANSWER</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950 leading-tight">{data.title}</h2>
          <div className="w-20 h-1 bg-ts-gold mt-5 mb-6"></div>
          <p className="font-display text-xl text-slate-500 font-light italic">{data.subtitle}</p>
        </FadeIn>

        {/* Two Definition Blocks + Factors Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">

          {/* Left — Definitions */}
          <div className="lg:col-span-7 space-y-6">
            {/* Regent Definition */}
            <FadeIn delay={0.05} className="bg-navy-950 text-white rounded-2xl p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-ts-gold/5 rounded-full blur-2xl translate-x-1/2 -translate-y-1/2"></div>
              <span className="font-sans text-[9px] font-bold tracking-[0.25em] uppercase text-ts-gold block mb-2">REGENT MAY BE BETTER IF YOUR DEFINITION OF LUXURY IS</span>
              <p className="font-display text-lg text-white font-bold relative z-10">{data.regentDefinition}</p>
            </FadeIn>

            {/* Silversea Definition */}
            <FadeIn delay={0.1} className="bg-slate-50 border border-slate-200/60 rounded-2xl p-6 relative overflow-hidden">
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-sky-100/30 rounded-full blur-2xl -translate-x-1/2 translate-y-1/2"></div>
              <span className="font-sans text-[9px] font-bold tracking-[0.25em] uppercase text-slate-400 block mb-2">SILVERSEA MAY BE BETTER IF YOUR DEFINITION OF LUXURY IS</span>
              <p className="font-display text-lg text-navy-950 font-bold relative z-10">{data.silverseaDefinition}</p>
            </FadeIn>

            {/* Factors Timeline */}
            <FadeIn delay={0.15}>
              <div className="bg-ice-50 rounded-2xl p-6 border border-slate-100">
                <h4 className="font-sans text-[10px] font-bold tracking-[0.25em] uppercase text-slate-400 mb-5">THE BEST RECOMMENDATION DEPENDS ON</h4>
                <div className="space-y-4">
                  {data.factors?.map((factor, idx) => (
                    <div key={idx} className="flex items-center gap-4 group">
                      <div className="w-8 h-8 rounded-full bg-navy-950 text-ts-gold flex items-center justify-center flex-shrink-0 font-sans text-xs font-bold group-hover:bg-ts-gold group-hover:text-navy-950 transition-colors duration-300">
                        {idx + 1}
                      </div>
                      <ArrowRight className="w-3 h-3 text-slate-300 flex-shrink-0" />
                      <span className="font-sans text-sm text-slate-700 font-medium">{factor}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right — Accent Image */}
          <div className="lg:col-span-5 relative">
            <FadeIn direction="left" className="sticky top-32">
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-200 relative group">
                {image && (
                  <img src={image} alt="Luxury cruise ship at port" className="w-full h-[520px] object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-navy-950/10 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white z-10">
                  <HelpCircle className="w-5 h-5 text-ts-gold mb-2" />
                  <p className="font-display text-sm text-white leading-relaxed font-light">
                    Neither answer is automatically correct. The right luxury cruise depends entirely on your personal priorities.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>

        </div>

      </div>
    </section>
  );
};

export default RvsIsRegentBetter;
