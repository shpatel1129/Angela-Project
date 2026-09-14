import React, { useState } from 'react';
import FadeIn from './FadeIn';
import { Eye, Wind, Maximize2, Star, ChevronRight } from 'lucide-react';

const iconMap = { Eye, Wind, Maximize2 };

const BalconyTypesShowcase = ({ data }) => {
  const [activeType, setActiveType] = useState(0);

  if (!data || !data.types) return null;
  const icons = [Eye, Wind, Maximize2];

  return (
    <section className="py-28 px-6 bg-gradient-to-br from-slate-50 via-white to-slate-50 relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-20 right-20 w-80 h-80 border border-ts-gold/10 rounded-full pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-60 h-60 border border-navy-950/5 rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section Header */}
        <div className="max-w-3xl mb-20 space-y-5">
          <span className="inline-block text-[11px] font-bold tracking-[0.3em] text-navy-900 uppercase bg-navy-950/5 px-5 py-2 rounded-full">
            Terminology Guide
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-navy-950 leading-[1.1]">
            {data.title}
          </h2>
          <div className="flex items-center gap-3">
            <div className="w-16 h-0.5 bg-ts-gold"></div>
            <div className="w-4 h-0.5 bg-ts-gold/40"></div>
          </div>
          <p className="font-sans text-slate-600 text-base md:text-lg leading-relaxed max-w-2xl">
            {data.intro}
          </p>
        </div>

        {/* Horizontal Tab Switcher */}
        <div className="flex flex-wrap gap-3 mb-12">
          {data.types.map((type, idx) => {
            const Icon = icons[idx];
            return (
              <button
                key={idx}
                onClick={() => setActiveType(idx)}
                className={`flex items-center gap-3 px-6 py-4 rounded-full border text-sm font-bold transition-all duration-300 ${
                  activeType === idx
                    ? 'bg-navy-950 text-white border-navy-950 shadow-lg scale-105'
                    : 'bg-white text-navy-900 border-slate-200 hover:border-ts-gold/50 hover:bg-slate-50'
                }`}
              >
                <Icon className={`w-4 h-4 ${activeType === idx ? 'text-ts-gold' : 'text-slate-400'}`} />
                <span>{type.name}</span>
              </button>
            );
          })}
        </div>

        {/* Active Type Detail — Magazine Spread Layout */}
        {(() => {
          const type = data.types[activeType];
          const Icon = icons[activeType];
          return (
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 bg-white rounded-[40px] border border-slate-200/60 shadow-xl overflow-hidden">
              
              {/* Left: Rating & Visual */}
              <div className="lg:col-span-2 bg-navy-950 p-10 md:p-14 flex flex-col justify-between text-white relative">
                <div className="absolute top-0 right-0 w-48 h-48 bg-ts-gold/10 rounded-full filter blur-[80px] pointer-events-none"></div>
                <div className="space-y-6 relative z-10">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-ts-gold/20 text-ts-gold">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                      Balcony Type {activeType + 1}
                    </span>
                  </div>
                  <h3 className="font-display text-3xl sm:text-4xl text-white leading-tight">
                    {type.name}
                  </h3>
                  <p className="font-sans text-slate-300 text-sm italic">
                    "{type.tagline}"
                  </p>
                </div>

                {/* Star Rating */}
                <div className="mt-12 pt-6 border-t border-white/10 relative z-10">
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500 block mb-2">
                    Outdoor Usability
                  </span>
                  <div className="flex gap-1.5">
                    {[1,2,3,4,5].map(i => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${i <= type.rating ? 'text-ts-gold fill-ts-gold' : 'text-slate-700'}`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Right: Details & Features */}
              <div className="lg:col-span-3 p-10 md:p-14 flex flex-col justify-between">
                <div className="space-y-6">
                  <p className="font-sans text-slate-700 text-sm sm:text-base leading-relaxed">
                    {type.description}
                  </p>

                  <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6">
                    <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-ts-gold block mb-4">
                      Key Features
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {type.features.map((f, i) => (
                        <div key={i} className="flex items-center gap-2.5">
                          <ChevronRight className="w-3.5 h-3.5 text-ts-gold shrink-0" />
                          <span className="font-sans text-xs sm:text-sm text-slate-700 font-medium">{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-10 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-400 block">Best For</span>
                    <span className="font-display text-sm text-navy-950 font-bold">{type.bestFor}</span>
                  </div>
                  <span className="bg-ts-gold/10 text-ts-gold text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-ts-gold/20">
                    Expert Verified
                  </span>
                </div>
              </div>

            </div>
          );
        })()}

      </div>
    </section>
  );
};

export default BalconyTypesShowcase;
