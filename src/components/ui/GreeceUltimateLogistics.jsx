import React from 'react';

/**
 * GreeceUltimateLogistics
 * Strategic breakdown of transit logistics: the Door-to-Door rule, 3-night minimum, flights vs ferries, private drivers.
 */
const GreeceUltimateLogistics = ({ rules = [] }) => {
  return (
    <section className="py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-sans font-bold tracking-[0.25em] text-blue-600 uppercase mb-3 block">
            TRANSIT & LOGISTICS BLUEPRINT
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-light text-navy-950 tracking-tight mb-6">
            Getting Around Greece: <span className="font-serif italic text-blue-900">The 4 Golden Rules</span>
          </h2>
          <p className="font-sans text-slate-600 text-base sm:text-lg font-light leading-relaxed">
            Transportation is where good Greece trips succeed and poorly planned ones fall apart. Master these four strategic logistics principles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {rules.map((rule, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-8 border border-slate-200/90 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-900 font-mono text-sm font-bold flex items-center justify-center flex-shrink-0">
                    {idx + 1}
                  </span>
                  <h3 className="font-display text-xl font-medium text-navy-950">
                    {rule.title}
                  </h3>
                </div>
                <p className="font-sans text-sm sm:text-base text-slate-600 font-light leading-relaxed pl-11">
                  {rule.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GreeceUltimateLogistics;
