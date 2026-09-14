import React from 'react';
import { Compass } from 'lucide-react';
import FadeIn from './FadeIn';

/**
 * BestBeachesIslandProfiles
 * Detailed layout showcasing key features of individual island coastlines.
 */
const BestBeachesIslandProfiles = ({ islands = [], images = [] }) => {
  return (
    <section id="best-beaches-islands" className="py-24 bg-white border-b border-slate-200 text-left">
      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-sans font-bold tracking-[0.2em] text-[#c9a15c] uppercase mb-4 block">
            ISLAND FOCUS
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-light text-navy-950 mb-6">
            The Top Greek Beach Destinations
          </h2>
          <p className="font-sans text-slate-600 font-light leading-relaxed">
            A deeper look into the specific beach profiles, highlights, and travel styles of the best islands.
          </p>
        </div>

        {/* Islands Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {islands.map((is, idx) => {
            const cardImg = images[idx % images.length];

            return (
              <FadeIn key={idx} delay={idx * 0.15}>
                <div className="bg-slate-50 border border-slate-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between h-full">
                  
                  {/* Image header */}
                  <div className="h-64 overflow-hidden relative">
                    <img src={cardImg} alt={is.name} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-navy-950/20"></div>
                    <span className="absolute bottom-6 left-6 text-xl font-display font-semibold text-white tracking-wide block">
                      {is.name}
                    </span>
                  </div>

                  {/* Profile details */}
                  <div className="p-8 space-y-6 flex-grow flex flex-col justify-between">
                    <div className="space-y-4">
                      <p className="font-sans text-sm text-slate-600 font-light leading-relaxed">
                        {is.description}
                      </p>
                      
                      <div className="bg-white p-4 rounded-xl border border-slate-100">
                        <span className="text-[10px] font-sans font-bold tracking-wider text-[#c9a15c] uppercase block mb-1">
                          Key Beaches & Highlights:
                        </span>
                        <p className="font-sans text-xs text-navy-950 font-medium leading-relaxed">
                          {is.highlights}
                        </p>
                      </div>
                    </div>

                    <div className="border-t border-slate-200 pt-4 flex gap-2 items-center text-xs font-sans font-semibold text-navy-950">
                      <Compass className="w-4 h-4 text-[#c9a15c] flex-shrink-0" />
                      <span>Recommended Travel Segment</span>
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

export default BestBeachesIslandProfiles;
