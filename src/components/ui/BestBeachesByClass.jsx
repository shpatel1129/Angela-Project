import React from 'react';
import { Anchor } from 'lucide-react';
import FadeIn from './FadeIn';

/**
 * BestBeachesByClass
 * Displays beach styles categorized by landscape / vacation goals.
 */
const BestBeachesByClass = ({ categories = [], images = [] }) => {
  return (
    <section id="best-beaches-categories" className="py-24 bg-slate-50 border-b border-slate-200 text-left">
      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-sans font-bold tracking-[0.2em] text-[#c9a15c] uppercase mb-4 block">
            BEACH TYPOLOGY
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-light text-navy-950 mb-6">
            Greece's Diverse Coastal Formations
          </h2>
          <p className="font-sans text-slate-600 font-light leading-relaxed">
            Understanding the styles of coastlines available helps narrow your destination choices.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((c, idx) => {
            const cardImg = images[idx % images.length];

            return (
              <FadeIn key={idx} delay={idx * 0.15}>
                <div className="bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 grid grid-cols-1 sm:grid-cols-12 h-full">
                  
                  {/* Left Column Image (5/12 width) */}
                  <div className="sm:col-span-5 h-48 sm:h-full relative">
                    <img src={cardImg} alt={c.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-navy-950/10"></div>
                  </div>

                  {/* Right Column Content (7/12 width) */}
                  <div className="sm:col-span-7 p-8 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <span className="text-[10px] font-sans font-bold tracking-wider text-[#c9a15c] uppercase block">
                        Featured Island: {c.island}
                      </span>
                      <h4 className="font-display text-xl font-bold text-navy-950 leading-tight">
                        {c.title}
                      </h4>
                      <p className="font-sans text-xs text-slate-500 font-light leading-relaxed">
                        {c.description}
                      </p>
                    </div>

                    <div className="border-t border-slate-100 pt-4 flex gap-2 items-center text-[10px] font-sans font-semibold text-navy-950 tracking-wider uppercase">
                      <Anchor className="w-3.5 h-3.5 text-[#c9a15c] flex-shrink-0" />
                      <span>✨ Pure Luxury approach</span>
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

export default BestBeachesByClass;
