import React from 'react';
import FadeIn from './FadeIn';
import MasterImage from './MasterImage';
import { Compass, Info, CheckCircle2 } from 'lucide-react';

const OriginQuickAnswer = ({ title, intro, strengths, specs, sideImage }) => {
  return (
    <section className="py-24 px-6 bg-white relative overflow-hidden" id="quick-answer">
      {/* Decorative vector background */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-sky-500/5 rounded-full filter blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Side image (50:50 ratio visual element) */}
          {sideImage && (
            <div className="lg:col-span-5 space-y-6">
              <div className="relative">
                <div className="absolute -inset-3 bg-slate-100 rounded-[32px] -z-10"></div>
                <div className="rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl border border-slate-200/50">
                  <MasterImage 
                    src={sideImage} 
                    alt="Silver Origin ship view" 
                    className="w-full h-full object-cover" 
                  />
                </div>
              </div>
              
              {/* Specification table card */}
              <div className="bg-navy-950 text-white rounded-3xl p-8 space-y-6 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-ts-gold/10 rounded-full filter blur-[30px]"></div>
                <h4 className="font-display text-lg font-bold text-ts-gold uppercase tracking-wider border-b border-white/10 pb-3">
                  Silver Origin Specs
                </h4>
                <div className="space-y-4 text-sm font-sans">
                  {specs && Object.entries(specs).map(([key, val]) => (
                    <div key={key} className="flex justify-between items-center py-1 border-b border-white/5">
                      <span className="text-slate-400 font-semibold">{key}</span>
                      <span className="text-white font-bold">{val}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Right Column: Title, intro, and list of strengths */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.3em] text-ts-gold uppercase bg-slate-50 px-5 py-2 rounded-full border border-slate-100">
                <Compass className="w-3.5 h-3.5" />
                Quick Answer
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-navy-950 leading-tight">
                {title}
              </h2>
              <div className="w-12 h-0.5 bg-ts-gold"></div>
            </div>

            <p className="font-sans text-slate-600 text-sm sm:text-base leading-relaxed">
              {intro}
            </p>

            <div className="space-y-4">
              <h4 className="font-display text-lg text-navy-950 font-bold">Key Strengths:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {strengths && strengths.map((strength, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100">
                    <CheckCircle2 className="w-5 h-5 text-ts-gold shrink-0" />
                    <span className="font-sans text-xs sm:text-sm text-navy-950 font-medium">{strength}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Warning Callout Box */}
            <div className="bg-amber-50 border-l-4 border-ts-gold p-6 rounded-r-2xl flex gap-4 items-start">
              <Info className="w-5 h-5 text-ts-gold shrink-0 mt-0.5" />
              <div className="space-y-1">
                <h5 className="font-display text-sm font-bold text-navy-950 uppercase tracking-wide">Expedition Disclaimer</h5>
                <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Silver Origin is highly luxurious, but the Galápagos remains an active expedition. Expect hiking, Zodiac transfers, wet landings, and snorkeling.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default OriginQuickAnswer;
