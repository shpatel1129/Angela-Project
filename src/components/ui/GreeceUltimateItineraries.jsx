import React, { useState } from 'react';

/**
 * GreeceUltimateItineraries
 * Curated 7-day, 10-day, and 14-day luxury Greece itinerary blueprints.
 */
const GreeceUltimateItineraries = ({ blueprints = [] }) => {
  const [activePlan, setActivePlan] = useState(0);

  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-sans font-bold tracking-[0.25em] text-blue-400 uppercase mb-3 block">
            CURATED MASTER ITINERARIES
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-white mb-6">
            Proven Greece Itinerary <span className="font-serif italic text-blue-200">Blueprints</span>
          </h2>
          <p className="font-sans text-slate-300 text-base sm:text-lg font-light leading-relaxed">
            Eliminate guesswork. These balanced luxury blueprints maximize unforgettable experiences while eliminating transit fatigue.
          </p>
        </div>

        {/* Blueprint Selector */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {blueprints.map((bp, idx) => (
            <button
              key={idx}
              onClick={() => setActivePlan(idx)}
              className={`px-6 py-3.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider transition-all duration-300 ${
                activePlan === idx
                  ? 'bg-blue-600 text-white shadow-xl scale-105'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700'
              }`}
            >
              {bp.name}
            </button>
          ))}
        </div>

        {/* Blueprint Detail Timeline Card */}
        {blueprints[activePlan] && (
          <div className="bg-slate-800/80 border border-slate-700 rounded-3xl p-8 sm:p-12 shadow-2xl backdrop-blur-md">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-700/80 pb-6 mb-8">
              <div>
                <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-widest block mb-1">
                  {blueprints[activePlan].tag}
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-light text-white">
                  {blueprints[activePlan].name}
                </h3>
              </div>
              <a
                href="https://tripsandships.com/contact/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold uppercase tracking-wider transition-all shadow-md self-start md:self-auto"
              >
                Customize This Route
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {blueprints[activePlan].days.map((d, dIdx) => (
                <div
                  key={dIdx}
                  className="p-6 rounded-2xl bg-slate-900/60 border border-slate-700/60 flex flex-col justify-between space-y-4 hover:border-blue-500/40 transition-colors"
                >
                  <div className="space-y-2">
                    <span className="text-xs font-mono font-bold text-blue-400 bg-blue-950/80 border border-blue-800/50 px-2 py-1 rounded">
                      {d.span}
                    </span>
                    <h4 className="font-display text-lg font-light text-white pt-2">
                      {d.destination}
                    </h4>
                  </div>
                  <p className="font-sans text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                    {d.activity}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GreeceUltimateItineraries;
