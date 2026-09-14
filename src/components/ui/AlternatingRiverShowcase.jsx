import React from 'react';
import FadeIn from './FadeIn';
import { ChevronRight } from 'lucide-react';

const AlternatingRiverShowcase = ({ title, description, rivers }) => {
  return (
    <section className="py-24 bg-ice-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <FadeIn>
            <h2 className="font-display text-4xl md:text-5xl text-navy-900 mb-6">{title}</h2>
            {description && (
              <p className="font-sans text-lg text-navy-600 max-w-3xl mx-auto">{description}</p>
            )}
            <div className="w-24 h-1 bg-ts-gold mx-auto mt-8"></div>
          </FadeIn>
        </div>

        <div className="space-y-24 md:space-y-32">
          {rivers.map((river, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <FadeIn key={idx} delay={0.1}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                  {/* Image Side */}
                  <div className={`w-full relative group rounded-2xl overflow-hidden shadow-2xl ${isEven ? 'order-1' : 'order-1 lg:order-2'}`}>
                    <div className="aspect-[4/3] lg:aspect-square xl:aspect-[4/3] w-full overflow-hidden bg-navy-900">
                      <img 
                        src={river.image} 
                        alt={river.name} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
                      />
                    </div>
                    {/* Decorative element */}
                    <div className="absolute inset-0 border-2 border-white/30 rounded-2xl m-4 pointer-events-none transition-all duration-700 group-hover:m-6"></div>
                  </div>

                  {/* Content Side */}
                  <div className={`w-full ${isEven ? 'order-2' : 'order-2 lg:order-1'}`}>
                    <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-ice-100">
                      <div className="flex items-center gap-4 mb-6 border-b border-ice-100 pb-5">
                        <span className="font-display text-4xl md:text-5xl text-ts-gold font-bold">
                          0{idx + 1}
                        </span>
                        <h3 className="font-display text-3xl md:text-4xl text-navy-900">{river.name}</h3>
                      </div>
                      
                      <p className="font-sans text-navy-700 mb-8 leading-relaxed text-lg">
                        {river.description}
                      </p>

                      <div className="space-y-3 mb-8 bg-ice-50 p-5 rounded-xl border border-ice-100">
                        <h4 className="font-sans font-bold text-navy-900 uppercase tracking-widest text-sm border-b border-ice-200 pb-2">Best For</h4>
                        <p className="font-sans text-navy-700 italic text-base">{river.bestFor}</p>
                      </div>
                      
                      <div className="space-y-4">
                        <h4 className="font-sans font-bold text-navy-900 uppercase tracking-widest text-sm border-b border-ice-100 pb-2">Highlights</h4>
                        <ul className="space-y-3 pt-2">
                          {river.highlights.map((highlight, hIdx) => (
                            <li key={hIdx} className="flex items-start gap-3">
                              <ChevronRight className="w-5 h-5 text-ts-gold shrink-0 mt-0.5" />
                              <span className="font-sans text-navy-700 text-base">{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AlternatingRiverShowcase;
