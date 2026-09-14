import React from 'react';

/**
 * GreeceGlanceOverview
 * Combines "Greece at a Glance" cards and "Why Greece is a Luxury Destination" content block.
 * Features:
 * - A beautiful 3-column grid of key-value cards (Glance) with subtle shadows.
 * - Staggered layout for luxury definition points.
 * - Dark luxury "Biggest Mistake" highlight card.
 */
const GreeceGlanceOverview = ({ glanceItems = [], definitionPoints = [], mistakes = [], image }) => {
  return (
    <section id="greece-glance" className="py-24 bg-white">
      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-sans font-bold tracking-[0.2em] text-blue-600 uppercase mb-4 block">
            DESTINATION SNAPSHOT
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-light text-navy-950 mb-6">
            Greece at a Glance
          </h2>
          <p className="font-sans text-slate-600 font-light leading-relaxed">
            Essential facts and expert strategies to help you plan your journey before we dive into the islands and itineraries.
          </p>
        </div>

        {/* 1. Glance Cards Grid (3 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {glanceItems.map((item, idx) => (
            <div
              key={idx}
              className="p-6 bg-slate-50 border border-slate-100 rounded-xl hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <span className="text-xs font-sans font-bold tracking-wider text-slate-400 uppercase mb-2 block">
                {item.question}
              </span>
              <span className="font-display text-lg text-navy-950 font-medium">
                {item.answer}
              </span>
            </div>
          ))}
        </div>

        {/* 2. Staggered Content split: Luxury Definition & Mistakes */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left: Why Greece is Luxury & Points */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <span className="text-xs font-sans font-bold tracking-[0.2em] text-blue-600 uppercase mb-4 block">
                THE TRAVEL PROPOSITION
              </span>
              <h3 className="font-display text-3xl font-light text-navy-950 mb-6">
                Why Greece is Europe's Finest Luxury Escape
              </h3>
              <p className="font-sans text-slate-600 font-light leading-relaxed mb-6">
                Greece offers a rare combination of experiences that luxury travelers seek: ancient history, brilliant blue seas, whitewashed villages, and organic cuisine. In Greece, true luxury is personal and flexible.
              </p>
            </div>

            {/* List of points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {definitionPoints.map((point, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <span className="text-blue-500 font-bold mt-0.5">✓</span>
                  <span className="font-sans text-sm text-slate-600 font-light leading-relaxed">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: The Biggest Mistake Card */}
          <div className="lg:col-span-5">
            <div className="relative bg-navy-950 text-white p-8 md:p-10 rounded-2xl shadow-xl border border-blue-900/40">
              {/* Corner accent line */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-500/20 to-transparent rounded-tr-2xl pointer-events-none" />

              <span className="text-xs font-sans font-bold tracking-[0.25em] text-blue-400 uppercase mb-4 block">
                ADVISOR WARNING
              </span>
              <h4 className="font-display text-2xl font-light text-white mb-6">
                The Biggest Mistake in Greece Planning
              </h4>

              <div className="space-y-6">
                {mistakes.map((mistake, idx) => (
                  <div key={idx} className="border-l border-blue-900/60 pl-4 py-1">
                    <span className="font-sans text-xs font-bold text-blue-400 block mb-1">
                      {idx + 1}. {mistake.title}
                    </span>
                    <p className="font-sans text-xs text-slate-300 font-light leading-relaxed">
                      {mistake.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default GreeceGlanceOverview;
