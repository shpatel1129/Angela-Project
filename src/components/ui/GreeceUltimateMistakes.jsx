import React from 'react';

/**
 * GreeceUltimateMistakes
 * Highlights common Greek travel pitfalls with clear, actionable solutions from luxury advisor Angela Hughes.
 */
const GreeceUltimateMistakes = ({ mistakes = [] }) => {
  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-sans font-bold tracking-[0.25em] text-red-400 uppercase mb-3 block">
            CRITICAL PITFALLS TO AVOID
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-white mb-6">
            The 6 Biggest <span className="font-serif italic text-red-300">Greece Travel Mistakes</span>
          </h2>
          <p className="font-sans text-slate-300 text-base sm:text-lg font-light leading-relaxed">
            Avoid the frequent logistical errors that turn a dream Greek getaway into a stressful transit marathon.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mistakes.map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-slate-800/80 border border-red-900/40 hover:border-red-500/50 shadow-lg space-y-4 flex flex-col justify-between transition-all duration-300"
            >
              <div className="space-y-3">
                <span className="inline-block px-3 py-1 rounded-full bg-red-950/80 border border-red-800/60 text-red-300 text-xs font-mono font-bold">
                  Pitfall {idx + 1}
                </span>
                <h3 className="font-display text-lg font-medium text-white">
                  {item.mistake}
                </h3>
              </div>

              <div className="pt-4 border-t border-slate-700/80 space-y-1">
                <span className="text-xs font-sans font-bold text-emerald-400 uppercase tracking-wider block">
                  The Expert Fix:
                </span>
                <p className="font-sans text-sm text-slate-300 font-light leading-relaxed">
                  {item.fix}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GreeceUltimateMistakes;
