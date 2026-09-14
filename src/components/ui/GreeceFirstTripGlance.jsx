import React from 'react';

/**
 * GreeceFirstTripGlance
 * Renders Part 1 Glance Quick Answers.
 * Layout:
 * - Left: Large display title and summary.
 * - Right: Key-value list formatted as a luxury index.
 */
const GreeceFirstTripGlance = ({ glanceItems = [] }) => {
  return (
    <section id="first-trip-glance" className="py-24 bg-white">
      <div className="max-w-[1280px] mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Heading Panel */}
          <div className="lg:col-span-5 text-left space-y-6 lg:sticky lg:top-24">
            <span className="text-xs font-sans font-bold tracking-[0.2em] text-blue-600 uppercase block">
              QUICK ANSWERS
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-light text-navy-950 leading-tight">
              Where to Go in Greece
            </h2>
            <div className="w-16 h-0.5 bg-blue-500" />
            <p className="font-sans text-slate-600 font-light leading-relaxed">
              If this is your first trip, trying to see everything is the fastest path to exhaustion. Use this curated checklist of island recommendations matched to your travel priorities.
            </p>
          </div>

          {/* Right Column: Key-Value Table Deck */}
          <div className="lg:col-span-7 space-y-4">
            {glanceItems.map((item, idx) => (
              <div
                key={idx}
                className="p-5 bg-slate-50 border border-slate-100 rounded-xl hover:bg-slate-100/50 hover:shadow-sm transition-all duration-300 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-left"
              >
                <div className="flex items-center gap-3">
                  <span className="text-xs font-sans font-bold text-blue-600 bg-blue-50 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0">
                    {idx + 1}
                  </span>
                  <span className="font-sans text-sm font-semibold text-navy-950">
                    {item.scenario}
                  </span>
                </div>
                <div className="font-sans text-xs text-slate-600 bg-white border border-slate-200 px-4 py-2 rounded-lg font-medium shadow-sm">
                  {item.recommendation}
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default GreeceFirstTripGlance;
