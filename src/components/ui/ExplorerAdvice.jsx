import React from 'react';
import FadeIn from './FadeIn';

const ExplorerAdvice = ({ data }) => {
  if (!data) return null;

  const items = data.mistakes || data.tips;

  return (
    <section className="w-full py-20 lg:py-28 bg-navy-950 text-white relative overflow-hidden">
      {/* Decorative glows */}
      <div className="absolute top-0 left-1/4 w-80 h-80 bg-ts-gold/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-navy-900/40 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <span className="font-sans text-[10px] font-bold tracking-[0.3em] text-ts-gold uppercase block mb-2">EXPERT GUIDANCE</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
              {data.title || "Expert Planning Tips"}
            </h2>
            <div className="w-12 h-1 bg-ts-gold mx-auto mt-4 mb-6"></div>
            {data.bookingStrategy && (
              <p className="font-serif text-sm text-slate-300 leading-relaxed font-light">
                {data.bookingStrategy}
              </p>
            )}
          </FadeIn>
        </div>

        {/* 3 Numbered Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items?.map((item, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-ts-gold/30 transition-all duration-300 h-full flex flex-col">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-ts-gold/10 text-ts-gold flex items-center justify-center font-display text-xl font-bold flex-shrink-0">
                    {idx + 1}
                  </div>
                  <h3 className="font-display text-lg font-bold text-white">
                    {item.title}
                  </h3>
                </div>
                <p className="font-sans text-sm text-slate-400 leading-relaxed font-light">
                  {item.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ExplorerAdvice;
