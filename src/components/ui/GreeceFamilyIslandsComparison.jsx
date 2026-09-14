import React from 'react';
import FadeIn from './FadeIn';

const GreeceFamilyIslandsComparison = ({ islands = [], images = [] }) => {
  return (
    <section className="py-24 bg-slate-50 border-b border-slate-200 text-left">
      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <span className="text-xs font-sans font-bold tracking-[0.25em] text-[#c9a15c] uppercase block mb-3">
            ISLAND PROFILES
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-light text-navy-950">
            Island-by-Island Family Comparison
          </h2>
          <div className="w-16 h-0.5 bg-[#c9a15c] mx-auto mt-6 mb-4"></div>
          <p className="font-sans text-slate-600 font-light leading-relaxed">
            Every Greek island group offers a distinct pace. Below, we compare the top five family options for beach style, villa layout, and travel logistics.
          </p>
        </div>

        {/* Islands Grid list */}
        <div className="space-y-24">
          {islands.map((island, idx) => {
            const isEven = idx % 2 === 0;
            const cardImg = images[idx % images.length];

            return (
              <div 
                key={idx} 
                className={`flex flex-col lg:flex-row gap-12 lg:gap-16 items-center ${
                  isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Image Column */}
                <div className="w-full lg:w-[45%]">
                  <FadeIn direction={isEven ? 'right' : 'left'}>
                    <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-lg border border-slate-100 group">
                      <img 
                        src={cardImg} 
                        alt={island.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                      />
                      <div className="absolute inset-0 bg-navy-950/10 pointer-events-none"></div>
                    </div>
                  </FadeIn>
                </div>

                {/* Text Column */}
                <div className="w-full lg:w-[55%] space-y-6">
                  <FadeIn direction={isEven ? 'left' : 'right'}>
                    <span className="text-[10px] font-sans font-bold tracking-wider text-[#c9a15c] uppercase block mb-1">
                      {island.featured}
                    </span>
                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-navy-950">
                      {island.title}
                    </h3>
                    
                    <div className="space-y-4 font-sans text-sm text-slate-600 font-light leading-relaxed">
                      {island.paragraphs.slice(0, 2).map((p, pIdx) => (
                        <p key={pIdx}>{p}</p>
                      ))}
                    </div>
                  </FadeIn>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default GreeceFamilyIslandsComparison;
