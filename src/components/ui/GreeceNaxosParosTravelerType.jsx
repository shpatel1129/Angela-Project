import React from 'react';
import FadeIn from './FadeIn';

/**
 * GreeceNaxosParosTravelerType
 * Renders matchmaking recommendations by traveler type.
 */
const GreeceNaxosParosTravelerType = ({ images = [] }) => {
  const profiles = [
    {
      title: "Honeymooners & Couples",
      island: "Paros (Highly Recommended)",
      desc: "Naoussa harbor sunset dinners, private sailing cruises to Antiparos, and sleek boutique design hotels make Paros one of the most stylish romantic settings in the Aegean.",
      highlight: "A sunset dining table overlooking the Naoussa port."
    },
    {
      title: "Families with Kids",
      island: "Naxos (Highly Recommended)",
      desc: "Naxos is perfect for family vacations. Wide sandy shorelines, calm shallow waters, agricultural village farms, and a spacious landscape offer endless activities.",
      highlight: "Private family villas along the golden sands of Plaka Beach."
    },
    {
      title: "Social Luxury & Dining",
      island: "Paros",
      desc: "Travelers seeking trendy beach clubs, cocktail lounges, high-end sushi bars, and high-fashion shopping in Chora will appreciate Paros' social energy.",
      highlight: "Cocktails and local seafood in Naoussa harbor."
    },
    {
      title: "Active Explorers & Hikers",
      island: "Naxos",
      desc: "Naxos features the highest peak in the Cyclades (Mount Zeus), scenic valleys, ancient marble quarries, and traditional mountain villages like Apiranthos.",
      highlight: "Hiking the ancient network of paths connecting village centers."
    }
  ];

  return (
    <section id="naxos-paros-matchmaker" className="py-24 bg-slate-50 border-b border-slate-200 text-left">
      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-sans font-bold tracking-[0.2em] text-[#c9a15c] uppercase mb-4 block">
            MATCHMAKING GUIDE
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-light text-navy-950 mb-6">
            Which Island Fits Your Travel Vibe?
          </h2>
          <p className="font-sans text-slate-600 font-light leading-relaxed">
            Choose the island that best aligns with your vacation goals and style.
          </p>
        </div>

        {/* Profiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {profiles.map((p, idx) => {
            const cardImg = images[idx % images.length];

            return (
              <FadeIn key={idx} delay={idx * 0.15}>
                <div className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between h-full">
                  <div className="h-40 overflow-hidden relative">
                    <img src={cardImg} alt={p.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-slate-950/40"></div>
                    <div className="absolute bottom-3 left-4 right-4 text-left">
                      <span className="text-[9px] font-sans font-bold text-amber-300 uppercase tracking-widest block mb-1">
                        RECOMMENDATION
                      </span>
                      <h4 className="font-display text-base font-semibold text-white">
                        {p.island}
                      </h4>
                    </div>
                  </div>

                  <div className="p-5 space-y-4 flex-grow flex flex-col justify-between">
                    <div>
                      <h3 className="font-display text-lg font-bold text-navy-950 mb-2">
                        {p.title}
                      </h3>
                      <p className="font-sans text-xs text-slate-600 font-light leading-relaxed">
                        {p.desc}
                      </p>
                    </div>

                    <div className="border-t border-slate-100 pt-3 text-[11px] font-sans text-slate-500">
                      <strong className="text-navy-950 font-medium block">Key Highlight:</strong>
                      {p.highlight}
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

export default GreeceNaxosParosTravelerType;
