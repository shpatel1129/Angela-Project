import React from 'react';

const SideBySideScorecard = ({ quickComparison, title = "The Verdict: At a Glance", subtitle = "How the two leading river cruise lines stack up." }) => {
  if (!quickComparison || quickComparison.length === 0) return null;

  return (
    <section className="py-24 bg-white font-sans">
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-amber-600 font-bold tracking-[0.3em] uppercase text-xs block mb-4">Quick Comparison</span>
          <h2 className="text-4xl md:text-5xl font-display text-navy-950 mb-4">{title}</h2>
          <p className="text-slate-500">{subtitle}</p>
        </div>

        {/* Brand Headers */}
        <div className="grid grid-cols-[1fr_160px_1fr] items-center mb-6 px-4">
          <div className="text-center">
            <div className="inline-flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-amber-500"></div>
              <span className="font-display text-xl text-navy-950">Avalon Waterways</span>
            </div>
          </div>
          <div></div>
          <div className="text-center">
            <div className="inline-flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-slate-400"></div>
              <span className="font-display text-xl text-navy-950">Viking River Cruises</span>
            </div>
          </div>
        </div>

        {/* Scorecard Rows */}
        <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
          {quickComparison.map((item, idx) => (
            <div
              key={idx}
              className={`grid grid-cols-[1fr_160px_1fr] items-center min-h-[64px] border-b border-slate-100 last:border-0 group hover:bg-amber-50/40 transition-colors ${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}`}
            >
              {/* Avalon value */}
              <div className="px-6 py-4 text-right">
                <span className="text-navy-900 font-sans font-medium text-base">{item.avalon}</span>
              </div>

              {/* Category label — center spine */}
              <div className="px-4 py-4 flex items-center justify-center">
                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400 text-center leading-tight group-hover:text-amber-600 transition-colors">{item.feature}</span>
              </div>

              {/* Viking value */}
              <div className="px-6 py-4 text-left">
                <span className="text-navy-700 font-sans font-medium text-base">{item.viking}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="flex items-center justify-center gap-8 mt-8 text-xs text-slate-400 font-medium uppercase tracking-widest">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-amber-500"></div>
            Left column = Avalon
          </div>
          <div className="w-px h-4 bg-slate-200"></div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-slate-400"></div>
            Right column = Viking
          </div>
        </div>
      </div>
    </section>
  );
};

export default SideBySideScorecard;
