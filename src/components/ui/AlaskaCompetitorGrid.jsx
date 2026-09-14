import React from 'react';
import FadeIn from './FadeIn';
import { Check, X, Shield, Star, Info } from 'lucide-react';

const AlaskaCompetitorGrid = () => {
  const competitors = [
    {
      brand: "Silversea Cruises",
      character: "Refined & Culinary Focused",
      strengths: [
        "Butler service for every single suite",
        "S.A.L.T. program for destination dining integration",
        "Intimate vessels with high space ratios"
      ],
      drawbacks: [
        "Specialty restaurants may require reservations",
        "Shore excursions are not 100% unlimited"
      ],
      bestFor: "Travelers who prioritize gourmet dining, butler care, and elegant smaller ships."
    },
    {
      brand: "Regent Seven Seas",
      character: "Ultimate All-Inclusive",
      strengths: [
        "Almost all shore excursions are fully included",
        "No-charge specialty dining venues",
        "Extremely spacious suites with walk-in closets"
      ],
      drawbacks: [
        "Higher upfront booking cost compared to Silversea",
        "Slightly larger passenger count on select ships"
      ],
      bestFor: "Travelers who want an effortless budget where everything is completely prepaid."
    },
    {
      brand: "Seabourn Cruises",
      character: "Active & Yacht Club Style",
      strengths: [
        "Caviar in the Surf and relaxed outdoor service",
        "Partnerships for active expedition shore excursions",
        "Warm, highly social crew service style"
      ],
      drawbacks: [
        "Butler service is not provided in standard suites",
        "Fewer dining venues compared to larger ships"
      ],
      bestFor: "Travelers who prefer a club-like, highly social atmosphere and active recreation."
    },
    {
      brand: "Viking Ocean Cruises",
      character: "Cultural & Scandi Minimalist",
      strengths: [
        "Excellent destination lectures and reading lists",
        "Sleek Scandinavian design and quiet public spaces",
        "No casinos on board, no children under 18"
      ],
      drawbacks: [
        "Butler service and high-end luxury details are simpler",
        "Dining is high quality but less gourmet-focused"
      ],
      bestFor: "Travelers who seek a quiet, education-first exploration of Alaska's history."
    }
  ];

  return (
    <section className="w-full bg-slate-900 py-24 text-white border-b border-slate-800">
      <div className="max-w-[1280px] mx-auto px-6">
        
        <div className="max-w-3xl mx-auto text-center mb-20">
          <FadeIn>
            <span className="text-xs uppercase tracking-[0.25em] text-gold-400 font-bold mb-4 block">
              Brand Comparison
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-slate-100 mb-6">
              Silversea vs. Other Luxury Cruise Lines
            </h2>
            <p className="font-sans text-slate-400 font-light leading-relaxed">
              Every luxury brand has a different design identity and onboard philosophy. Use our comparison matrix to find the correct match for your travel style.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {competitors.map((comp, idx) => (
            <FadeIn key={idx} delay={idx * 0.15} className="bg-slate-800/30 border border-slate-800 rounded-3xl p-8 hover:bg-slate-800/50 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="mb-6">
                  <span className="text-xs uppercase tracking-widest text-gold-400 font-bold block mb-1">
                    {comp.character}
                  </span>
                  <h3 className="font-display text-2xl text-white">
                    {comp.brand}
                  </h3>
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-emerald-400 font-bold block mb-2">Key Strengths</span>
                    <ul className="space-y-2">
                      {comp.strengths.map((s, sIdx) => (
                        <li key={sIdx} className="flex items-start gap-2 text-xs md:text-sm text-slate-300">
                          <Check size={14} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                          <span>{s}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-slate-800">
                    <span className="text-[10px] uppercase tracking-widest text-red-400 font-bold block mb-2">Key Considerations</span>
                    <ul className="space-y-2">
                      {comp.drawbacks.map((d, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2 text-xs md:text-sm text-slate-400">
                          <X size={14} className="text-red-500 mt-0.5 flex-shrink-0" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-slate-800/50 rounded-xl border border-slate-800 flex items-start gap-2.5">
                <Info size={16} className="text-gold-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-[9px] uppercase tracking-widest text-slate-500 font-bold block mb-0.5">Best For</span>
                  <p className="text-xs text-slate-300 leading-normal font-sans font-light">
                    {comp.bestFor}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AlaskaCompetitorGrid;
