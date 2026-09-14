import React, { useState } from 'react';
import FadeIn from './FadeIn';

const RvoExpertAdvice = ({ data, image }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  if (!data) return null;

  return (
    <section id="expert-advice" className="w-full py-20 lg:py-28 bg-ice-50 relative overflow-hidden">
      {/* Decorative side shape */}
      <div className="absolute top-0 left-0 w-80 h-full bg-white/40 skew-x-12 origin-top-left pointer-events-none"></div>

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <FadeIn className="mb-14">
          <span className="font-sans text-[10px] font-bold tracking-[0.3em] uppercase text-ts-gold block mb-3">{data.subtitle}</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950 leading-tight">
            {data.title}
          </h2>
          <div className="w-20 h-1 bg-ts-gold mt-5"></div>
        </FadeIn>

        {/* Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          <div className="lg:col-span-8">
            <FadeIn delay={0.1}>
              <p className="font-serif text-lg text-slate-700 leading-relaxed font-light mb-8 max-w-3xl">
                {data.intro}
              </p>

              {/* Five Core Advice Questions */}
              <div className="space-y-6">
                {data.questions?.map((item, idx) => (
                  <div key={idx} className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/60 shadow-sm">
                    <h4 className="font-display text-base sm:text-lg font-bold text-navy-950 mb-2 flex items-center">
                      <span className="font-sans text-xs text-ts-gold font-bold mr-3 border border-ts-gold/30 rounded-full w-6 h-6 flex items-center justify-center">
                        {idx + 1}
                      </span>
                      {item.q}
                    </h4>
                    <p className="font-sans text-sm text-slate-600 font-light pl-9">
                      {item.ans}
                    </p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Interactive Matcher Module */}
          <div className="lg:col-span-4 mt-8 lg:mt-0">
            <FadeIn direction="left" delay={0.2} className="bg-navy-950 text-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-ts-gold/5 rounded-full blur-2xl"></div>
              
              <h3 className="font-display text-xl sm:text-2xl text-white mb-2">{data.interactiveQuiz?.title}</h3>
              <p className="font-sans text-xs text-slate-400 font-light mb-6 border-b border-white/10 pb-4">
                {data.interactiveQuiz?.questionText}
              </p>

              {selectedOption === null ? (
                <div className="space-y-3">
                  {data.interactiveQuiz?.options?.map((option, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedOption(idx)}
                      className="w-full text-left font-sans text-xs bg-white/5 border border-white/10 hover:border-ts-gold hover:bg-white/10 rounded-xl p-3 transition-all duration-300 text-slate-250 flex justify-between items-center group"
                    >
                      <span>{option.text}</span>
                      <span className="text-ts-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300 ml-2">→</span>
                    </button>
                  ))}
                </div>
              ) : (
                <div className="space-y-6 animate-fadeIn duration-500">
                  <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
                    <span className="font-sans text-[9px] text-ts-gold font-bold tracking-widest block uppercase mb-1">
                      RECOMMENDED DIRECTION:
                    </span>
                    <h4 className="font-display text-lg font-bold text-white mb-3">
                      {data.interactiveQuiz?.options[selectedOption].result}
                    </h4>
                    <p className="font-sans text-xs text-slate-300 leading-relaxed font-light">
                      {data.interactiveQuiz?.options[selectedOption].reason}
                    </p>
                  </div>

                  <button
                    onClick={() => setSelectedOption(null)}
                    className="w-full text-center font-sans text-xs font-bold border border-white/20 hover:border-ts-gold text-white rounded-xl py-3 hover:bg-white/5 transition-all duration-300"
                  >
                    Compare Another Priority
                  </button>
                </div>
              )}
            </FadeIn>
          </div>
        </div>

      </div>
    </section>
  );
};

export default RvoExpertAdvice;
