import React from 'react';
import FadeIn from './FadeIn';
import MasterImage from './MasterImage';
import avalonPlaceholder from '../../assets/brands/avalon/avalon_placeholder.svg';

const VisualDeckMap = ({ decks }) => {
  return (
    <section className="w-full bg-ice-50 py-24 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-white skew-x-12 translate-x-1/4 opacity-50 pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-6xl text-navy-950 mb-6">Decks at a Glance</h2>
            <div className="w-24 h-1 bg-ts-gold mx-auto"></div>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {decks.map((deck, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-100 group flex flex-col h-full">
                
                {/* Image Section (Top Half) */}
                <div className="w-full aspect-[4/3] relative overflow-hidden">
                  <MasterImage
                    src={avalonPlaceholder}
                    alt={deck.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
                    <span className="font-display text-ts-gold text-lg font-bold">{deck.rating}</span>
                  </div>
                </div>

                {/* Content Section (Bottom Half) */}
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="font-display text-3xl text-navy-950 mb-4">{deck.name}</h3>
                  <p className="font-sans text-slate-600 mb-8 leading-relaxed font-light">
                    {deck.description}
                  </p>
                  
                  <div className="mt-auto">
                    <span className="text-xs font-bold uppercase tracking-widest text-navy-300 mb-3 block">Key Benefits</span>
                    <ul className="space-y-2">
                      {deck.pros.slice(0, 3).map((pro, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2 text-sm text-navy-800 font-medium">
                          <span className="text-ts-gold mt-1">+</span> {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisualDeckMap;
