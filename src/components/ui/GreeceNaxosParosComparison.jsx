import React from 'react';
import FadeIn from './FadeIn';

/**
 * GreeceNaxosParosComparison
 * Grid displaying detailed benchmark comparison categories between Naxos and Paros.
 */
const GreeceNaxosParosComparison = ({ images = [] }) => {
  const comparisons = [
    {
      title: "Hotels & Stays",
      naxos: "Luxury in Naxos centers around spacious private estates, family villas, and low-key beach suites. There are fewer mega-resorts, offering a quieter and highly private alternative.",
      paros: "Paros is a hotspot for high-design boutique luxury. Resorts like Cosme and Parilio showcase sleek Cycladic minimalism, high-end spas, and sophisticated social lounges.",
      verdict: "Verdict: Paros for stylish design hotels; Naxos for spacious private family villas."
    },
    {
      title: "Beaches & Water",
      naxos: "Naxos claims some of the absolute best sandy shorelines in Greece. Plaka, Agios Prokopios, and Agia Anna offer miles of soft golden sand and calm, shallow, crystal-clear water.",
      paros: "Paros features smaller, wind-protected coves like Kolymbithres (famous for sculpted granite boulders) and active, windsurfing-friendly bays like Golden Beach.",
      verdict: "Verdict: Naxos for vast sandy beaches; Paros for boutique bays and windsurfing."
    },
    {
      title: "Gastronomy & Dining",
      naxos: "Naxos is agricultural, meaning it does not rely solely on tourism. The island produces its own potatoes, olive oil, wine, meats, and world-class cheeses (like Graviera).",
      paros: "Paros has a sophisticated, cosmopolitan dining scene. The harbor of Naoussa is lined with upscale sushi bars, modern tavernas, and fine-dining seafood spots.",
      verdict: "Verdict: Naxos for rich local farm-to-table food; Paros for trendy harbor-front fine dining."
    }
  ];

  return (
    <section id="naxos-paros-comparison" className="py-24 bg-white border-b border-slate-200 text-left">
      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-sans font-bold tracking-[0.2em] text-[#c9a15c] uppercase mb-4 block">
            DETAILED BENCHMARKS
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-light text-navy-950 mb-6">
            Category Breakdown: Naxos vs Paros
          </h2>
          <p className="font-sans text-slate-600 font-light leading-relaxed">
            Let's evaluate how both islands compare on the three key travel benchmarks: Stays, Shorelines, and Dining.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {comparisons.map((c, idx) => {
            const cardImg = images[idx % images.length];

            return (
              <FadeIn key={idx} delay={idx * 0.15}>
                <div className="bg-slate-50 border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between h-full">
                  
                  {/* Card Image Header */}
                  <div className="h-44 overflow-hidden relative">
                    <img src={cardImg} alt={c.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-slate-900/30"></div>
                    <span className="absolute bottom-3 left-5 text-xs font-sans font-bold text-white uppercase tracking-wider block">
                      {c.title}
                    </span>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 space-y-6 flex-grow flex flex-col justify-between">
                    <div className="space-y-4">
                      <div>
                        <span className="text-[10px] font-sans font-bold tracking-wider text-[#c9a15c] uppercase block mb-1">
                          NAXOS STYLE
                        </span>
                        <p className="font-sans text-xs text-slate-600 font-light leading-relaxed">
                          {c.naxos}
                        </p>
                      </div>
                      <div>
                        <span className="text-[10px] font-sans font-bold tracking-wider text-[#c9a15c] uppercase block mb-1">
                          PAROS STYLE
                        </span>
                        <p className="font-sans text-xs text-slate-600 font-light leading-relaxed">
                          {c.paros}
                        </p>
                      </div>
                    </div>

                    <div className="border-t border-slate-200/60 pt-4 text-[11px] font-sans font-semibold text-navy-950 italic">
                      {c.verdict}
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

export default GreeceNaxosParosComparison;
