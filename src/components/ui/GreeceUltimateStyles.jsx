import React from 'react';

/**
 * GreeceUltimateStyles
 * High-touch guide matching different travel personas (First-timers, Honeymoons, Families, Foodies, Yachting)
 * to customized Greece itinerary strategies.
 */
const GreeceUltimateStyles = ({ styles = [] }) => {
  return (
    <section className="py-24 bg-white border-b border-slate-100">
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-sans font-bold tracking-[0.25em] text-blue-600 uppercase mb-3 block">
            CUSTOM TRAVEL PERSONAS
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-light text-navy-950 tracking-tight mb-6">
            Greece by Travel Style: <span className="font-serif italic text-blue-900">Tailored Planning</span>
          </h2>
          <p className="font-sans text-slate-600 text-base sm:text-lg font-light leading-relaxed">
            The ideal Greece itinerary for a romantic honeymoon is vastly different from a multigenerational family journey or a small-ship sailing expedition.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {styles.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-slate-200/90 bg-gradient-to-b from-white to-slate-50/50 p-8 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-blue-600 bg-blue-50 border border-blue-200/60 px-2.5 py-1 rounded-full">
                    {item.idealLength}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-slate-300 group-hover:bg-blue-600 transition-colors" />
                </div>

                <h3 className="font-display text-xl sm:text-2xl font-light text-navy-950 group-hover:text-blue-900 transition-colors">
                  {item.style}
                </h3>

                <p className="font-serif italic text-sm text-slate-500 font-medium">
                  {item.focus}
                </p>

                <p className="font-sans text-sm text-slate-700 font-light leading-relaxed pt-2 border-t border-slate-100">
                  {item.recommendation}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-sans font-semibold text-blue-800 uppercase tracking-wider flex items-center gap-1 group-hover:gap-2 transition-all">
                <span>Tailor This Experience</span>
                <span>→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GreeceUltimateStyles;
