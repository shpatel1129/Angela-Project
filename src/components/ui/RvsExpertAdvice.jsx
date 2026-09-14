import React from 'react';
import FadeIn from './FadeIn';

const RvsExpertAdvice = ({ data }) => {
  if (!data) return null;

  return (
    <section className="w-full py-20 bg-white relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <FadeIn>
            <span className="font-sans text-xs font-bold uppercase tracking-widest text-slate-500 block">EXPERT GUIDANCE</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy-950 mt-2">
              {data.title || "Expert Cruise Advice"}
            </h2>
            <div className="w-12 h-1 bg-ts-gold mx-auto mt-4"></div>
          </FadeIn>
        </div>

        {/* 5 Questions Grid (2,4,6 columns / grid layout with final item spanning nicely) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.questions?.map((q, idx) => {
            const isLast = idx === data.questions.length - 1;
            // Balance the final odd item in a 3-column layout
            const cardClass = isLast ? "lg:col-span-3 max-w-xl mx-auto w-full" : "";

            return (
              <FadeIn key={idx} delay={idx * 0.05} className={cardClass}>
                <div className="bg-slate-50 border border-slate-200/80 rounded-3xl p-6 md:p-8 hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-10 h-10 rounded-full bg-ts-gold/15 text-ts-gold flex items-center justify-center font-sans font-bold text-sm flex-shrink-0">
                      0{q.number}
                    </div>
                    <h3 className="font-display text-lg text-navy-950 font-bold">
                      {q.question}
                    </h3>
                  </div>
                  <p className="font-sans text-xs sm:text-sm text-slate-500 leading-relaxed">
                    {q.detail}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* Expert Booking Strategy / Intro Callout Box */}
        {data.intro && (
          <FadeIn>
            <div className="max-w-3xl mx-auto bg-ice-50 border-l-4 border-ts-gold rounded-r-3xl p-6 md:p-8 shadow-sm mt-16">
              <span className="font-sans text-[10px] text-ts-gold font-bold uppercase tracking-widest block mb-2">
                Expert Strategy & Advice
              </span>
              <p className="font-sans text-xs sm:text-sm text-navy-950 font-medium leading-relaxed">
                {data.intro}
              </p>
            </div>
          </FadeIn>
        )}

      </div>
    </section>
  );
};

export default RvsExpertAdvice;
