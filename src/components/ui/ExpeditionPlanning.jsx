import React from 'react';
import FadeIn from './FadeIn';
import { Check, AlertTriangle, ListChecks } from 'lucide-react';

const ExpeditionPlanning = ({ data }) => {
  if (!data) return null;

  return (
    <section className="w-full py-20 lg:py-28 bg-ice-50/30">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <FadeIn className="text-center mb-16">
          <span className="uppercase tracking-[0.25em] text-[11px] font-bold text-slate-400 mb-4 block">
            {data?.eyebrow || "PLANNING FRAMEWORK & CHECKS"}
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-navy-950 leading-tight mb-6">
            {data?.heading}
          </h2>
          <div className="w-14 h-[2px] bg-gold-400 mx-auto mb-6" />
          <p className="font-sans text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            {data?.description}
          </p>
        </FadeIn>

        {/* 7-Step Framework (Numbered Grid / Cards) */}
        {data?.steps && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {data.steps.map((step, idx) => (
              <FadeIn key={idx} delay={0.05 * idx} className={idx === 6 ? 'lg:col-span-2 md:col-span-2' : ''}>
                <div className="bg-white rounded-2xl p-6 border border-slate-200/60 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col justify-between group">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-display text-3xl text-gold-400 font-light group-hover:text-gold-500 transition-colors">
                        {step?.number}
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                    </div>
                    <h3 className="font-display text-base text-navy-950 mb-2 leading-snug">
                      {step?.title}
                    </h3>
                    <p className="font-sans text-xs text-slate-500 leading-relaxed">
                      {step?.text}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        )}

        {/* 2-Column Split: Mistakes Left, Checklist Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          
          {/* Left Column: Common Booking Mistakes (7 cols) */}
          {data?.mistakes && (
            <div className="lg:col-span-7 flex flex-col justify-between h-full">
              <FadeIn className="h-full">
                <div className="bg-white rounded-3xl p-6 lg:p-8 border border-red-100/60 bg-gradient-to-br from-red-50/[0.04] to-white h-full flex flex-col">
                  <h3 className="font-display text-2xl text-navy-950 mb-6 flex items-center gap-3">
                    <AlertTriangle className="w-5 h-5 text-red-500" />
                    Common Booking Mistakes
                  </h3>
                  
                  <div className="space-y-6 flex-1 flex flex-col justify-around">
                    {data.mistakes.map((mistake, idx) => (
                      <div key={idx} className="border-l-2 border-red-300 pl-5">
                        <h4 className="font-display text-base text-navy-950 mb-1.5">
                          {mistake?.title}
                        </h4>
                        <p className="font-sans text-xs text-slate-500 leading-relaxed">
                          {mistake?.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            </div>
          )}

          {/* Right Column: Pre-Departure Preparation Checklist (5 cols) */}
          {data?.checklist && (
            <div className="lg:col-span-5 flex">
              <FadeIn className="w-full">
                <div className="bg-navy-950 text-white rounded-3xl p-6 lg:p-8 shadow-xl flex flex-col h-full relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gold-400/5 rounded-full blur-xl translate-x-8 -translate-y-8" />
                  
                  <h3 className="font-display text-2xl text-white mb-6 flex items-center gap-3">
                    <ListChecks className="w-5 h-5 text-gold-400" />
                    {data.checklist.title}
                  </h3>

                  <div className="space-y-4 flex-1 flex flex-col justify-around">
                    {data.checklist.items?.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3.5">
                        <div className="w-5 h-5 rounded-md border border-white/20 bg-white/5 flex items-center justify-center flex-shrink-0">
                          <Check className="w-3.5 h-3.5 text-gold-400" />
                        </div>
                        <span className="font-sans text-xs text-white/80 leading-relaxed">
                          {item}
                        </span>
                      </div>
                    ))}
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

export default ExpeditionPlanning;
