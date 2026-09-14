import React from 'react';
import FadeIn from './FadeIn';

/**
 * GreeceSantoriniMykonosComparison
 * Detailed category-by-category luxury travel comparison.
 */
const GreeceSantoriniMykonosComparison = ({ images = [] }) => {
  const categories = [
    {
      title: "Luxury Hotels & Suites",
      santorini: "Built into the cliffs of Oia and Imerovigli, featuring private plunge pools, cave-style architecture, and spectacular caldera views.",
      mykonos: "Boutique seaside resorts and whitewashed design hotels located along the southern beaches or overlooking Mykonos Town.",
      metric: "Santorini wins for views; Mykonos wins for beach access."
    },
    {
      title: "Beaches & Swimming",
      santorini: "Unique volcanic beaches with black, red, or white pebbles. Beautiful to look at but less ideal for a classic sandy beach experience.",
      mykonos: "Exceptional golden sand beaches (like Psarou, Elia, and Platis Gialos) with calm, crystal-clear waters perfect for swimming.",
      metric: "Mykonos wins comfortably for a classic beach vacation."
    },
    {
      title: "Romance, Proposals & Honeymoons",
      santorini: "Widely regarded as one of the world's most romantic destinations. Sunset sailing, private dinners, and quiet cliffside luxury.",
      mykonos: "Strong for active couples who want a mix of beach relaxation, high-end shopping, fine dining, and energetic evenings.",
      metric: "Santorini is the classic honeymoon choice."
    },
    {
      title: "Dining, Gastronomy & Beach Clubs",
      santorini: "Excellent local volcanic wines (Assyrtiko), organic local products, and cliffside restaurants overlooking the caldera.",
      mykonos: "Cosmopolitan dining scene featuring international chef collaborations, high-end sushi, and legendary beach club lunches.",
      metric: "Santorini wins for wine; Mykonos wins for social dining."
    },
    {
      title: "Shopping & Art Galleries",
      santorini: "Boutique art galleries, local jewelry designers, and unique volcanic craft shops tucked along the narrow paths.",
      mykonos: "Chora (Mykonos Town) is a major shopping destination featuring flagship stores for major global luxury fashion houses.",
      metric: "Mykonos wins for designer luxury retail."
    },
    {
      title: "Yachting & Private Sailing Charters",
      santorini: "Outstanding for private catamaran day sails inside the caldera crescent to swim in hot springs and watch the sunset.",
      mykonos: "Perfect starting point for multi-day yacht charters, island hopping to Delos and Rhenia, or cruising the southern coastline.",
      metric: "Santorini wins for caldera day cruises; Mykonos for yachts."
    }
  ];

  return (
    <section id="detailed-comparison" className="py-24 bg-white border-b border-slate-200">
      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-sans font-bold tracking-[0.2em] text-blue-600 uppercase mb-4 block">
            DETAILED LUXURY TRAVEL BENCHMARKS
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-light text-navy-950 mb-6">
            Santorini vs Mykonos: The Pillars of Luxury Travel
          </h2>
          <p className="font-sans text-slate-600 font-light leading-relaxed">
            How the two iconic islands stack up across the key categories that matter to luxury travelers.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((cat, idx) => {
            const cardImg = images[idx % images.length];

            return (
              <FadeIn key={idx} delay={idx * 0.1}>
                <div className="bg-slate-50 border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between text-left">
                  {/* Aspect Ratio Image wrapper */}
                  <div className="h-48 overflow-hidden relative">
                    <img 
                      src={cardImg} 
                      alt={cat.title} 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                    <h3 className="absolute bottom-4 left-6 font-display text-xl font-semibold text-white">
                      {cat.title}
                    </h3>
                  </div>

                  <div className="p-6 space-y-4 flex-grow flex flex-col justify-between">
                    <div className="space-y-3">
                      <div>
                        <span className="text-[10px] font-sans font-bold tracking-wider text-amber-600 uppercase block mb-1">
                          SANTORINI
                        </span>
                        <p className="font-sans text-xs text-slate-600 font-light leading-relaxed">
                          {cat.santorini}
                        </p>
                      </div>
                      <div>
                        <span className="text-[10px] font-sans font-bold tracking-wider text-blue-600 uppercase block mb-1">
                          MYKONOS
                        </span>
                        <p className="font-sans text-xs text-slate-600 font-light leading-relaxed">
                          {cat.mykonos}
                        </p>
                      </div>
                    </div>

                    <div className="bg-white border border-slate-100 rounded-xl p-3 mt-4 text-xs font-sans text-slate-500 italic">
                      <strong className="text-navy-950 font-medium not-italic block mb-1">Advisor Verdict:</strong>
                      {cat.metric}
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

export default GreeceSantoriniMykonosComparison;
