import React from 'react';
import FadeIn from './FadeIn';

const MistakesGrid = ({ data, title: propTitle, items: propItems }) => {
  const title = propTitle || data?.title;
  const items = propItems || data?.items;

  if (!items || items.length === 0) return null;

  return (
    <section className="w-full py-16 bg-navy-950 relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900/50 to-navy-950"></div>
      
      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        <FadeIn className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl text-white">{title}</h2>
          <div className="w-12 h-0.5 bg-white/40 mx-auto mt-6"></div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((item, idx) => {
            const isLastOddItem = idx === items.length - 1 && items.length % 2 !== 0;
            return (
              <FadeIn key={idx} delay={idx * 0.1} className={isLastOddItem ? "md:col-span-2" : ""}>
                <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-8 lg:p-10 hover:bg-white/10 transition-colors h-full">
                  <span className="font-display text-5xl text-white/15 block mb-4">{item.number || String(idx + 1).padStart(2, '0')}</span>
                  <h3 className="font-sans font-bold text-white text-lg mb-3">{item.title}</h3>
                  <p className="font-sans text-slate-400 text-sm leading-relaxed">{item.description}</p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MistakesGrid;
