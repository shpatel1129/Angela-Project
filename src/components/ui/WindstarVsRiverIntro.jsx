import React from 'react';
import FadeIn from './FadeIn';

const WindstarVsRiverIntro = ({ data, quickAnswer }) => {
  if (!data || !quickAnswer) return null;

  return (
    <section id="comparison" className="w-full py-20 bg-white relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* Intro Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          <div className="lg:col-span-5 border-l-4 border-ts-gold pl-6">
            <FadeIn>
              <span className="font-sans text-xs font-bold uppercase tracking-widest text-slate-500 block">PART 01</span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-navy-950 font-bold leading-tight mt-2">
                {data.title}
              </h2>
            </FadeIn>
          </div>
          
          <div className="lg:col-span-7">
            <FadeIn delay={0.1}>
              <div className="space-y-4">
                {data.paragraphs?.map((p, idx) => (
                  <p key={idx} className="font-sans text-xs sm:text-sm text-slate-500 leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>

        {/* 2 Big Comparison Cards (satisfying the 2,4,6 big card rule) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          
          {/* Card 1: Windstar Wins */}
          <FadeIn direction="right">
            <div className="bg-slate-50 border-2 border-slate-100 rounded-2xl p-8 flex flex-col justify-between h-full hover:border-ts-gold/40 transition-all duration-300">
              <div>
                <span className="font-sans text-[10px] text-ts-gold font-bold uppercase tracking-widest block mb-2">
                  EXPLORATION ADVANTAGE
                </span>
                <h3 className="font-display text-2xl text-navy-950 font-bold mb-4">
                  Where Windstar Wins
                </h3>
                <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {quickAnswer.windstarWins}
                </p>
              </div>
              <div className="pt-4 mt-6 border-t border-slate-200/60">
                <span className="font-sans text-[11px] font-bold text-navy-950 uppercase tracking-widest">
                  Yacht Style Sea Cruises
                </span>
              </div>
            </div>
          </FadeIn>

          {/* Card 2: River Cruise Wins */}
          <FadeIn direction="left">
            <div className="bg-slate-50 border-2 border-slate-100 rounded-2xl p-8 flex flex-col justify-between h-full hover:border-ts-gold/40 transition-all duration-300">
              <div>
                <span className="font-sans text-[10px] text-ts-gold font-bold uppercase tracking-widest block mb-2">
                  EXPLORATION ADVANTAGE
                </span>
                <h3 className="font-display text-2xl text-navy-950 font-bold mb-4">
                  Where River Cruising Wins
                </h3>
                <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {quickAnswer.riverCruiseWins}
                </p>
              </div>
              <div className="pt-4 mt-6 border-t border-slate-200/60">
                <span className="font-sans text-[11px] font-bold text-navy-950 uppercase tracking-widest">
                  Inland River Journeys
                </span>
              </div>
            </div>
          </FadeIn>

        </div>

        {/* Full-width Quick Verdict Box */}
        <FadeIn>
          <div className="bg-navy-950 border border-ts-gold/40 rounded-3xl p-8 sm:p-10 text-white relative overflow-hidden shadow-xl">
            <div className="absolute top-0 right-0 w-32 h-32 bg-ts-gold/10 rounded-full blur-2xl"></div>
            <span className="font-sans text-xs font-bold text-ts-gold uppercase tracking-[0.2em] block mb-3">
              THE QUICK VERDICT
            </span>
            <p className="font-display text-lg sm:text-xl text-ice-100 italic leading-relaxed max-w-4xl">
              "{quickAnswer.verdict}"
            </p>
          </div>
        </FadeIn>

      </div>
    </section>
  );
};

export default WindstarVsRiverIntro;
