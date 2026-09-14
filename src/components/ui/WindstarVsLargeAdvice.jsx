import React from 'react';
import FadeIn from './FadeIn';

const WindstarVsLargeAdvice = ({ data }) => {
  if (!data) return null;

  return (
    <section className="w-full py-20 bg-white relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <FadeIn>
            <span className="font-sans text-xs font-bold uppercase tracking-widest text-slate-500 block">PART 06</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy-950 mt-2">
              {data.title || "Expert Planning Tips & Advice"}
            </h2>
            <div className="w-12 h-1 bg-ts-gold mx-auto mt-4"></div>
          </FadeIn>
        </div>

        {/* 3 Small Cards: Common Mistakes (3,6,9 rule) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {data.mistakes?.map((item, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <div className="bg-slate-50 border border-slate-200/80 rounded-3xl p-6 md:p-8 hover:-translate-y-1 transition-all duration-300">
                <div className="w-10 h-10 rounded-full bg-ts-gold/15 text-ts-gold flex items-center justify-center font-sans font-bold text-sm mb-4">
                  0{idx + 1}
                </div>
                <h3 className="font-display text-lg text-navy-950 font-bold mb-3">
                  {item.title}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-slate-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Booking Strategy callout box */}
        {data.bookingStrategy && (
          <FadeIn>
            <div className="max-w-3xl mx-auto bg-ice-50 border-l-4 border-ts-gold rounded-r-3xl p-6 md:p-8 shadow-sm">
              <span className="font-sans text-[10px] text-ts-gold font-bold uppercase tracking-widest block mb-2">
                Expert Booking Strategy
              </span>
              <p className="font-sans text-xs sm:text-sm text-navy-950 font-medium leading-relaxed">
                {data.bookingStrategy}
              </p>
            </div>
          </FadeIn>
        )}

      </div>
    </section>
  );
};

export default WindstarVsLargeAdvice;
