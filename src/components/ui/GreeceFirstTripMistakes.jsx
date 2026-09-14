import React from 'react';

/**
 * GreeceFirstTripMistakes
 * Renders Part 8 (Mistakes first-time visitors make).
 * Layout: Clean list of warning panels with caution-red-gold styling.
 */
const GreeceFirstTripMistakes = ({ mistakes = [] }) => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1000px] mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-sans font-bold tracking-[0.2em] text-red-600 uppercase mb-4 block">
            PLANNING CAUTIONS
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-light text-navy-950 mb-6">
            Mistakes First-Time Visitors Make
          </h2>
          <p className="font-sans text-slate-600 font-light leading-relaxed">
            Avoid these common planning pitfalls to ensure your Mediterranean getaway is relaxed, efficient, and thoroughly memorable.
          </p>
        </div>

        {/* List of mistakes */}
        <div className="space-y-6 text-left">
          {mistakes.map((mistake, idx) => (
            <div
              key={idx}
              className="p-6 bg-slate-50 border border-slate-100 rounded-2xl flex items-start gap-4 hover:shadow-sm transition-shadow duration-300"
            >
              <span className="font-display text-2xl font-light text-red-500 flex-shrink-0 mt-0.5">
                0{idx + 1}
              </span>
              <div>
                <h3 className="text-sm font-semibold text-navy-950 mb-2">
                  {mistake.title}
                </h3>
                <p className="font-sans text-xs text-slate-600 font-light leading-relaxed">
                  {mistake.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default GreeceFirstTripMistakes;
