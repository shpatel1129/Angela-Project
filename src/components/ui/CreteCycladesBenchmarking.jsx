import React from 'react';
import { Compass } from 'lucide-react';
import FadeIn from './FadeIn';

/**
 * CreteCycladesBenchmarking
 * Visual benchmark cards illustrating key stylistic and functional differences.
 */
const CreteCycladesBenchmarking = ({ benchmarks = [], images = [] }) => {
  return (
    <section id="crete-cyclades-benchmarks" className="py-24 bg-white border-b border-slate-200 text-left">
      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-sans font-bold tracking-[0.2em] text-[#c9a15c] uppercase mb-4 block">
            CORE BENCHMARKS
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-light text-navy-950 mb-6">
            Category Comparison: Crete vs. Cyclades
          </h2>
          <p className="font-sans text-slate-600 font-light leading-relaxed">
            A structured breakdown of where each destination shines best.
          </p>
        </div>

        {/* Benchmarks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {benchmarks.map((b, idx) => {
            const cardImg = images[idx % images.length];

            return (
              <FadeIn key={idx} delay={idx * 0.15}>
                <div className="bg-slate-50 border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between h-full">
                  
                  {/* Card Header Image */}
                  <div className="h-48 overflow-hidden relative">
                    <img src={cardImg} alt={b.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-slate-900/30"></div>
                    <span className="absolute bottom-4 left-6 text-sm font-sans font-bold text-white uppercase tracking-wider block">
                      {b.title}
                    </span>
                  </div>

                  {/* Card Content */}
                  <div className="p-8 space-y-6 flex-grow flex flex-col justify-between">
                    <div className="space-y-6">
                      <div>
                        <span className="text-[10px] font-sans font-bold tracking-wider text-[#c9a15c] uppercase block mb-1">
                          Crete Style
                        </span>
                        <p className="font-sans text-xs text-slate-600 font-light leading-relaxed">
                          {b.crete}
                        </p>
                      </div>
                      <div>
                        <span className="text-[10px] font-sans font-bold tracking-wider text-[#c9a15c] uppercase block mb-1">
                          Cyclades Style
                        </span>
                        <p className="font-sans text-xs text-slate-600 font-light leading-relaxed">
                          {b.cyclades}
                        </p>
                      </div>
                    </div>

                    <div className="border-t border-slate-200 pt-4 flex gap-2 items-start text-[11px] font-sans font-semibold text-navy-950 italic">
                      <Compass className="w-4 h-4 text-[#c9a15c] flex-shrink-0 mt-[2px]" />
                      <span>Summary: {b.verdict}</span>
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

export default CreteCycladesBenchmarking;
