import React from 'react';
import FadeIn from './FadeIn';

const UltimateProsConsGrid = () => {
  const pros = [
    "Intimate, relaxed yacht atmosphere with fewer passengers",
    "Sailing yacht options provide a truly unique cruise experience",
    "Small ships reach smaller, less crowded, boutique ports",
    "Excellent culinary quality, partner of the James Beard Foundation",
    "Casual elegant dress code — no formal wear required",
    "Open bridge policy and direct ocean watersports platform"
  ];

  const cons = [
    "Sailing under actual wind power is highly weather-dependent",
    "Suites on classic sailing yachts are relatively compact",
    "Fewer onboard dining venues and public lounge spaces",
    "Extremely limited children's programming and family facilities",
    "No large theater, Broadway-style show, or casino action",
    "Fewer private balcony cabin categories on classic ships"
  ];

  return (
    <section className="w-full bg-white py-24 border-b border-slate-200">
      <div className="max-w-[1280px] mx-auto px-6">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <span className="text-xs uppercase tracking-[0.25em] text-gold-500 font-bold mb-4 block">
              Honest Assessment
            </span>
            <h2 className="font-display text-3xl md:text-5xl text-navy-950 mb-6 leading-tight">
              Windstar Cruises Pros &amp; Cons
            </h2>
            <p className="font-sans text-slate-500 font-light leading-relaxed">
              Every cruise experience involves trade-offs. Here is an honest, unfiltered look at the strengths and compromises of a Windstar cruise.
            </p>
          </FadeIn>
        </div>

        {/* Pros & Cons Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Pros */}
          <FadeIn>
            <div className="bg-emerald-50/50 border border-emerald-100 rounded-3xl p-8 shadow-sm">
              <h3 className="font-display text-lg text-emerald-800 mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-600">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                </span>
                The Advantages (Pros)
              </h3>
              <ul className="space-y-4">
                {pros.map((pro, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="font-sans text-slate-700 text-sm font-light leading-relaxed">{pro}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          {/* Cons */}
          <FadeIn delay={0.1}>
            <div className="bg-amber-50/50 border border-amber-100 rounded-3xl p-8 shadow-sm">
              <h3 className="font-display text-lg text-amber-800 mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center text-amber-600">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                  </svg>
                </span>
                The Considerations (Cons)
              </h3>
              <ul className="space-y-4">
                {cons.map((con, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                    </svg>
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

export default UltimateProsConsGrid;
