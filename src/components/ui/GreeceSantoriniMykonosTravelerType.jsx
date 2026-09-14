import React from 'react';
import FadeIn from './FadeIn';

/**
 * GreeceSantoriniMykonosTravelerType
 * Renders traveler type matching profiles.
 */
const GreeceSantoriniMykonosTravelerType = ({ images = [] }) => {
  const travelers = [
    {
      title: "Honeymoons & Romantics",
      island: "Santorini (Highly Recommended)",
      desc: "Santorini's cliffside pools, dramatic caldera sunsets, private sailing catamarans, and quiet cave hotels make it one of the most naturally romantic settings on earth.",
      highlight: "Oia suites with private infinity pools overlooking the Aegean."
    },
    {
      title: "Friend Groups & Celebrations",
      island: "Mykonos (Highly Recommended)",
      desc: "Mykonos is designed for social luxury. Large multi-bedroom villas, beach clubs like Nammos and Scorpios, sailing yachts, and fine dining create the perfect group energy.",
      highlight: "Private hilltop villas in Tourlos or Agios Lazaros."
    },
    {
      title: "Multi-Gen Families",
      island: "Both (Depending on Priority)",
      desc: "For beach-focused resort stays with kids, Mykonos is stronger due to its sandy bays and shallow waters. For teenagers interested in sailing, history, and active touring, Santorini is ideal.",
      highlight: "Combine 3 nights Santorini (touring) + 4 nights Mykonos (beach)."
    },
    {
      title: "Solo & Active Travelers",
      island: "Mykonos",
      desc: "Solo luxury travelers looking to meet others, enjoy high-end shopping, dine at cosmopolitan counters, and participate in beach-club socializing will feel right at home.",
      highlight: "Boutique hotels within walking distance of Mykonos Town paths."
    }
  ];

  return (
    <section id="traveler-type" className="py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-sans font-bold tracking-[0.2em] text-blue-600 uppercase mb-4 block">
            MATCHMAKING GUIDE
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-light text-navy-950 mb-6">
            Which Island Is Best for Your Travel Style?
          </h2>
          <p className="font-sans text-slate-600 font-light leading-relaxed">
            Every traveler is different. Find out which island aligns with your specific goals.
          </p>
        </div>

        {/* Profiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {travelers.map((t, idx) => {
            const cardImg = images[idx % images.length];

            return (
              <FadeIn key={idx} delay={idx * 0.15}>
                <div className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between h-full">
                  <div className="h-40 overflow-hidden relative">
                    <img src={cardImg} alt={t.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-slate-950/40"></div>
                    <div className="absolute bottom-3 left-4 right-4">
                      <span className="text-[9px] font-sans font-bold text-amber-300 uppercase tracking-widest block mb-1">
                        RECOMMENDATION
                      </span>
                      <h4 className="font-display text-base font-semibold text-white">
                        {t.island}
                      </h4>
                    </div>
                  </div>

                  <div className="p-5 space-y-4 flex-grow flex flex-col justify-between">
                    <div>
                      <h3 className="font-display text-lg font-bold text-navy-950 mb-2">
                        {t.title}
                      </h3>
                      <p className="font-sans text-xs text-slate-600 font-light leading-relaxed">
                        {t.desc}
                      </p>
                    </div>

                    <div className="border-t border-slate-100 pt-3 text-[11px] font-sans text-slate-500">
                      <strong className="text-navy-950 font-medium block">Key Highlight:</strong>
                      {t.highlight}
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

export default GreeceSantoriniMykonosTravelerType;
