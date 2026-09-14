import React from 'react';
import FadeIn from './FadeIn';

const MinimalQuickFacts = ({ title, items }) => {
  if (!items || items.length === 0) return null;

  return (
    <section className="bg-ice-50 py-16 md:py-24 border-y border-navy-100/50">
      <div className="max-w-7xl mx-auto px-6">
        
        {title && (
          <FadeIn direction="up">
            <h2 className="font-sans text-sm md:text-base uppercase tracking-[0.2em] text-navy-500 font-semibold mb-12 md:mb-16 text-center">
              {title}
            </h2>
          </FadeIn>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 md:gap-y-16 max-w-5xl mx-auto">
          {items.map((item, idx) => (
            <FadeIn key={idx} direction="up" delay={idx * 0.05}>
              <div className="flex flex-col items-center text-center">
                <span className="font-sans text-xs md:text-sm uppercase tracking-widest text-gold-500 font-semibold mb-3">
                  {item.title || item.label}
                </span>
                <span className="font-display text-2xl md:text-3xl text-navy-900 leading-snug">
                  {item.description || item.value}
                </span>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
};

export default MinimalQuickFacts;
