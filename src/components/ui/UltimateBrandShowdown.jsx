import React, { useState } from 'react';
import FadeIn from './FadeIn';
import { Check, X } from 'lucide-react';

const UltimateBrandShowdown = ({ vikingComparison, otherComparisons }) => {
  if (!vikingComparison || !otherComparisons) return null;

  return (
    <section className="py-24 bg-navy-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950"></div>
      
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        
        {/* Main Event: Avalon vs Viking */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeIn>
              <h2 className="font-display text-4xl md:text-5xl text-gold-400 mb-6">{vikingComparison.title}</h2>
              <p className="font-sans text-lg text-ice-100 leading-relaxed">
                The most frequently asked question in river cruising. Here is how they stack up.
              </p>
            </FadeIn>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 relative">
            {/* VS Badge */}
            <div className="hidden md:flex absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gold-500 rounded-full items-center justify-center z-20 shadow-2xl border-4 border-navy-950">
              <span className="font-display text-2xl text-navy-950 font-bold">VS</span>
            </div>

            {vikingComparison.items.map((item, idx) => (
              <FadeIn key={idx} delay={idx * 200}>
                <div className={`h-full p-10 rounded-2xl border ${idx === 1 ? 'bg-navy-800/80 border-gold-500/50 shadow-[0_0_30px_rgba(212,175,55,0.1)]' : 'bg-navy-900/50 border-navy-700'}`}>
                  <h3 className={`font-display text-3xl mb-6 ${idx === 1 ? 'text-gold-400' : 'text-white'}`}>{item.title}</h3>
                  <p className="font-sans text-lg text-ice-50 leading-relaxed">
                    {item.description}
                  </p>
                  
                  <div className="mt-8 pt-8 border-t border-white/10">
                    <ul className="space-y-4">
                      {idx === 0 ? (
                        <>
                          <li className="flex items-center text-ice-100"><Check className="w-5 h-5 text-gold-500 mr-3 shrink-0" /> Scandinavian Design</li>
                          <li className="flex items-center text-ice-100"><Check className="w-5 h-5 text-gold-500 mr-3 shrink-0" /> Educational Lectures</li>
                          <li className="flex items-center text-ice-100"><Check className="w-5 h-5 text-gold-500 mr-3 shrink-0" /> Traditional Balconies</li>
                        </>
                      ) : (
                        <>
                          <li className="flex items-center text-ice-100"><Check className="w-5 h-5 text-gold-500 mr-3 shrink-0" /> Open-Air Balcony&reg;</li>
                          <li className="flex items-center text-ice-100"><Check className="w-5 h-5 text-gold-500 mr-3 shrink-0" /> Active & Discovery Excursions</li>
                          <li className="flex items-center text-ice-100"><Check className="w-5 h-5 text-gold-500 mr-3 shrink-0" /> Flexible Dining</li>
                        </>
                      )}
                    </ul>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* The Undercard: Other Competitors */}
        <div>
          <div className="text-center mb-16">
            <FadeIn>
              <h2 className="font-display text-3xl md:text-4xl text-white mb-4">Avalon vs. The Rest of the Fleet</h2>
              <div className="w-24 h-1 bg-gold-500 mx-auto rounded-full"></div>
            </FadeIn>
          </div>

          <div className="space-y-6">
            {otherComparisons.map((comp, idx) => (
              <FadeIn key={idx} delay={idx * 100}>
                <div className="bg-navy-900/40 border border-navy-800 rounded-xl overflow-hidden hover:bg-navy-800/60 transition-colors duration-300">
                  <div className="p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-6">
                    <div className="md:w-1/4">
                      <h4 className="font-display text-2xl text-white mb-2">{comp.competitor}</h4>
                      <span className="inline-block px-3 py-1 bg-gold-500/10 text-gold-400 text-xs font-bold uppercase tracking-wider rounded-full border border-gold-500/20">
                        Winner: {comp.winner}
                      </span>
                    </div>
                    
                    <div className="md:w-3/4 grid md:grid-cols-2 gap-6 relative">
                      <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-px bg-navy-700 -translate-x-1/2"></div>
                      
                      <div>
                        <h5 className="text-xs uppercase tracking-widest text-ice-300 mb-2 font-semibold">Their Focus</h5>
                        <p className="text-sm text-ice-100 leading-relaxed">{comp.competitorFocus}</p>
                      </div>
                      
                      <div className="md:pl-6">
                        <h5 className="text-xs uppercase tracking-widest text-gold-400 mb-2 font-semibold">Avalon's Focus</h5>
                        <p className="text-sm text-white leading-relaxed">{comp.avalonFocus}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default UltimateBrandShowdown;
