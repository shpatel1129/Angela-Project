import React from 'react';
import FadeIn from './FadeIn';

const SoloBrandMatrix = () => {
  const brands = [
    {
      name: "Silversea Cruises",
      bestFor: "Solo travelers seeking classic butler service and formal/elegant social dining.",
      supplement: "Standard single supplement applies; frequent promotions offer 10% - 25% supplement rates.",
      socialVibe: "Hosted solo cocktail meetups, butler-coordinated table sharing, subtle and low-pressure connections.",
      cabinApproach: "No dedicated solo cabins; guests reside in full-size double occupancy suites."
    },
    {
      name: "Windstar Cruises",
      bestFor: "Solo guests seeking an ultra-casual, friendly yacht-like community environment.",
      supplement: "Frequent 'no single supplement' promotions on selected regional yacht sailings.",
      socialVibe: "Extremely open, highly social open-seating dining, easy conversations in the Lounge or pool deck.",
      cabinApproach: "Standard staterooms and suites are booked; occasional single cabins on selected ocean-crossing sailings."
    },
    {
      name: "Seabourn Cruises",
      bestFor: "Solo travelers seeking contemporary, modern luxury with active outdoor activities.",
      supplement: "Standard supplement; seasonal promotions offer reduced solo pricing.",
      socialVibe: "Natural conversations at the club, table sharing, and naturalist briefings on expeditions.",
      cabinApproach: "Full-size oceanfront veranda suites; no small solo staterooms."
    },
    {
      name: "Explora Journeys",
      bestFor: "Solo travelers seeking a larger resort-style luxury ship with active wellness centers.",
      supplement: "Supplement applies; introductory single occupancy rates on qualifying cruises.",
      socialVibe: "Bustling cosmopolitan social lounges, multiple small-group bars, active fitness classes.",
      cabinApproach: "Spacious Ocean Terraces; designed around double occupancy standard."
    }
  ];

  return (
    <section className="w-full bg-slate-900 py-24 text-white">
      <div className="max-w-[1280px] mx-auto px-6">
        
        <div className="max-w-3xl mx-auto text-center mb-20">
          <FadeIn>
            <span className="text-xs uppercase tracking-[0.25em] text-gold-400 font-bold mb-4 block">
              Comparison Table
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-slate-100 mb-6">
              Solo Cruise Comparison: Silversea vs. Other Luxury Lines
            </h2>
            <p className="font-sans text-slate-400 font-light leading-relaxed">
              Different cruise lines cater to solo guests differently. Choose the brand that aligns with your desired privacy, supplement pricing, and onboard atmosphere.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {brands.map((brand, idx) => (
            <FadeIn 
              key={idx} 
              delay={idx * 0.1}
              className="bg-slate-800/30 border border-slate-850 p-8 rounded-3xl hover:bg-slate-805 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <h3 className="font-display text-2xl text-gold-400 mb-4 pb-4 border-b border-slate-800">
                  {brand.name}
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold block mb-1">
                      Best For
                    </span>
                    <p className="text-sm text-slate-200 font-sans font-light leading-relaxed">
                      {brand.bestFor}
                    </p>
                  </div>
                  
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold block mb-1">
                      Supplement Structure
                    </span>
                    <p className="text-sm text-slate-300 font-sans font-light">
                      {brand.supplement}
                    </p>
                  </div>

                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold block mb-1">
                      Social Atmosphere
                    </span>
                    <p className="text-sm text-slate-300 font-sans font-light leading-relaxed">
                      {brand.socialVibe}
                    </p>
                  </div>

                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold block mb-1">
                      Accommodations
                    </span>
                    <p className="text-sm text-slate-400 font-sans font-light leading-relaxed">
                      {brand.cabinApproach}
                    </p>
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

export default SoloBrandMatrix;
