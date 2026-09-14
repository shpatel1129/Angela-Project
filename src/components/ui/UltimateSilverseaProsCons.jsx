import React from 'react';
import FadeIn from './FadeIn';

const UltimateSilverseaProsCons = () => {
  const pros = [
    "Comprehensive all-suite accommodations across all ships",
    "Butler service included for every single suite category",
    "Exceptional dining program featuring local S.A.L.T. cuisine",
    "Highly-rated expedition cruises (Antarctica, Arctic, Galápagos)",
    "Extensive inclusions - drinks, gratuities, Wi-Fi and excursions",
    "Refined, sophisticated, and intimate small-ship environment"
  ];

  const cons = [
    "Premium pricing represents a significant initial travel investment",
    "Formal night requirements on classic voyages may not suit all",
    "Limited youth programs and family-friendly play areas",
    "Certain specialty restaurants require additional cover charges",
    "Port-to-port options have strict limitations on cancellations"
  ];

  return (
    <section className="w-full bg-white py-24 border-b border-slate-200">
      <div className="max-w-[1280px] mx-auto px-6">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <span className="text-xs uppercase tracking-[0.25em] text-gold-500 font-bold mb-4 block">
              Honest Review
            </span>
            <h2 className="font-display text-3xl md:text-5xl text-navy-950 mb-6 leading-tight">
              Silversea Cruises Pros &amp; Cons
            </h2>
            <p className="font-sans text-slate-500 font-light leading-relaxed">
              Every luxury travel product has strengths and compromises. Here is a balanced assessment of a Silversea cruise.
            </p>
          </FadeIn>
        </div>

        {/* Splits */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Pros */}
          <FadeIn>
            <div className="bg-emerald-50/50 border border-emerald-100 rounded-3xl p-8">
              <h3 className="font-display text-lg text-emerald-950 mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-600">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </span>
                The Advantages (Pros)
              </h3>
              <ul className="space-y-4">
                {pros.map((pro, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="font-sans text-slate-700 text-sm font-light leading-relaxed">{pro}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          {/* Cons */}
          <FadeIn delay={0.1}>
            <div className="bg-amber-50/50 border border-amber-100 rounded-3xl p-8">
              <h3 className="font-display text-lg text-amber-950 mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center text-amber-600">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                  </svg>
                </span>
                The Considerations (Cons)
              </h3>
              <ul className="space-y-4">
                {cons.map((con, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="font-sans text-slate-700 text-sm font-light leading-relaxed">{con}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>

      </div>
    </section>
  );
};

export default UltimateSilverseaProsCons;
