import React from 'react';
import { Check } from 'lucide-react';
import FadeIn from './FadeIn';

const GenericChecklistCards = ({ title, subtitle, cards }) => {
  if (!cards || cards.length === 0) return null;

  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-[1280px] mx-auto px-6">
        <FadeIn className="text-center mb-16">
          {subtitle && (
            <div className="inline-block border border-navy-900 text-navy-900 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">
              {subtitle}
            </div>
          )}
          <h2 className="font-display text-4xl md:text-5xl text-navy-950">{title}</h2>
        </FadeIn>
        
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 w-full mx-auto ${
          cards.length === 2 || cards.length === 4 ? 'max-w-5xl lg:grid-cols-2' : 'lg:grid-cols-3 max-w-7xl'
        }`}>
          {cards.map((card, cardIdx) => (
            <FadeIn key={cardIdx} delay={cardIdx * 0.1} className="flex flex-col h-full">
              <div className="bg-white border border-border-light rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow flex-grow">
                <h3 className="font-sans font-bold text-xl text-navy-900 mb-8 border-b border-border-light pb-4">
                  {card.title}
                </h3>
                <ul className="space-y-4">
                  {card.items?.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-ice-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check size={16} strokeWidth={2} className="text-navy-800" />
                      </div>
                      <span className="font-sans text-slate-700 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GenericChecklistCards;
