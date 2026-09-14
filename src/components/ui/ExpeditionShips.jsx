import React from 'react';
import FadeIn from './FadeIn';
import { Shield, Users, Compass, Waves } from 'lucide-react';

const shipIcons = [Compass, Shield, Waves, Users];

const ExpeditionShips = ({ data }) => {
  if (!data) return null;

  return (
    <section className="w-full py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <FadeIn className="text-center mb-16 lg:mb-20">
          <span className="uppercase tracking-[0.25em] text-[11px] font-bold text-slate-400 mb-4 block">
            {data?.eyebrow || "THE EXPEDITION FLEET"}
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-navy-950 leading-tight mb-6">
            {data?.heading}
          </h2>
          <div className="w-14 h-[2px] bg-gold-400 mx-auto mb-6" />
          <p className="font-sans text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            {data?.description}
          </p>
        </FadeIn>

        {/* 4 Cards Grid - Expedition Ships details */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {data?.list?.map((ship, index) => {
            const Icon = shipIcons[index % shipIcons.length];
            return (
              <FadeIn key={index} delay={0.05 * index}>
                <div className="rounded-2xl border border-slate-200 bg-white p-6 h-full flex flex-col justify-between hover:shadow-lg transition-shadow duration-300 relative group overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-navy-950 via-gold-400 to-navy-950 opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-9 h-9 rounded-xl bg-navy-950 flex items-center justify-center">
                        <Icon className="w-4 h-4 text-white" />
                      </div>
                      <span className="font-sans text-xs text-slate-400 font-medium">
                        {ship?.capacity}
                      </span>
                    </div>

                    <h3 className="font-display text-xl text-navy-950 mb-1 group-hover:text-gold-500 transition-colors">
                      {ship?.name}
                    </h3>
                    <p className="font-sans text-xs text-gold-500 font-semibold tracking-wider uppercase mb-4">
                      {ship?.bestFor}
                    </p>

                    <p className="font-sans text-xs text-slate-500 leading-relaxed mb-6">
                      {ship?.description}
                    </p>
                  </div>

                  {ship?.specs && (
                    <div className="border-t border-slate-100 pt-4 space-y-2">
                      {ship.specs.map((spec, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className="w-1 h-1 rounded-full bg-gold-400" />
                          <span className="font-sans text-[11px] text-slate-600 leading-snug">{spec}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* Fleet Comparison Table */}
        {data?.table && (
          <FadeIn delay={0.15}>
            <div className="rounded-3xl border border-slate-200/80 bg-white p-6 lg:p-8 shadow-sm">
              <h3 className="font-display text-2xl text-navy-950 text-center mb-8">
                {data.table.title}
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b-2 border-slate-200">
                      {data.table.headers.map((header, i) => (
                        <th key={i} className="px-5 py-4 font-sans text-xs font-bold tracking-widest uppercase text-navy-950 first:pl-0">
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {data.table.rows.map((row, i) => (
                      <tr key={i} className="border-b border-slate-100 last:border-0 hover:bg-slate-50/50 transition-colors">
                        {row.map((cell, j) => (
                          <td key={j} className={`px-5 py-4 font-sans text-sm ${j === 0 ? 'text-navy-950 font-bold first:pl-0' : 'text-slate-600'}`}>
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </FadeIn>
        )}

      </div>
    </section>
  );
};

export default ExpeditionShips;
