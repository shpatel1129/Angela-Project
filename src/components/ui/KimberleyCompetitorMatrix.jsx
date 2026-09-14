import React from 'react';
import FadeIn from './FadeIn';

const KimberleyCompetitorMatrix = () => {
  const comparisons = [
    {
      operator: "Silversea Cruises",
      bestFor: "Classic luxury service combined with high-capacity Zodiac exploration.",
      keySpecs: "Silver Cloud (254 guests, 20 Zodiacs, 10 kayaks).",
      advantages: "Personalized butler service in all suites, all-inclusive luxury pricing, fine dining variety.",
      limitations: "Higher base price; larger guest count than regional niche vessels."
    },
    {
      operator: "Seabourn Cruises",
      bestFor: "Contemporary luxury expedition format with premium yacht aesthetics.",
      keySpecs: "Seabourn Pursuit (264 guests, 24 Zodiacs, double submersibles).",
      advantages: "Very modern vessels (built 2023), spacious modern layouts, strong wellness program.",
      limitations: "Submersibles cannot operate in the Kimberley's shallow/murky tidal rivers."
    },
    {
      operator: "Ponant Cruises",
      bestFor: "Active expedition cruisers seeking French-influenced cuisine and styling.",
      keySpecs: "Le Laperouse / Le Soleal (184 guests, 10-12 Zodiacs).",
      advantages: "Slightly smaller ship format, elegant interior designs, bilingual French-English crew.",
      limitations: "Smaller entry-level cabins compared to Silversea's all-suite standard."
    },
    {
      operator: "Local Niche Operators",
      bestFor: "Ultra-flexible sailing formats accessing shallow channels.",
      keySpecs: "True North / Coral Expeditions (36 - 120 guests).",
      advantages: "Shallow draft hull access, helicopter platforms on board, very casual atmosphere.",
      limitations: "Traditional cabins with minimal suites, no butler service or large-ship dining options."
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
              Silversea vs. Other Kimberley Operators
            </h2>
            <p className="font-sans text-slate-400 font-light leading-relaxed">
              Choosing a Kimberley operator is about matching your preferred luxury style and activity goals with the ship's specific footprint and excursions.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {comparisons.map((item, idx) => (
            <FadeIn 
              key={idx} 
              delay={idx * 0.1}
              className="bg-slate-800/30 border border-slate-850 p-8 rounded-3xl hover:bg-slate-805 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <h3 className="font-display text-2xl text-gold-400 mb-4 pb-4 border-b border-slate-800">
                  {item.operator}
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold block mb-1">
                      Best For
                    </span>
                    <p className="text-sm text-slate-200 font-sans font-light leading-relaxed">
                      {item.bestFor}
                    </p>
                  </div>
                  
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold block mb-1">
                      Vessel & Fleet Spec
                    </span>
                    <p className="text-sm text-slate-300 font-sans font-light">
                      {item.keySpecs}
                    </p>
                  </div>

                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold block mb-1">
                      Key Strengths
                    </span>
                    <p className="text-sm text-slate-300 font-sans font-light leading-relaxed">
                      {item.advantages}
                    </p>
                  </div>

                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold block mb-1">
                      Trade-Offs
                    </span>
                    <p className="text-sm text-slate-400 font-sans font-light leading-relaxed">
                      {item.limitations}
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

export default KimberleyCompetitorMatrix;
