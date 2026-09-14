import React from 'react';
import FadeIn from './FadeIn';
import { HelpCircle, Star } from 'lucide-react';

const ExpeditionCostValue = ({ data }) => {
  if (!data) return null;

  return (
    <section className="w-full py-20 lg:py-28 bg-ice-50/40 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <FadeIn className="text-center mb-16 lg:mb-20">
          <span className="uppercase tracking-[0.25em] text-[11px] font-bold text-slate-400 mb-4 block">
            {data?.eyebrow || "INCLUSIONS & VALUE"}
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-navy-950 leading-tight mb-6">
            {data?.heading}
          </h2>
          <div className="w-14 h-[2px] bg-gold-400 mx-auto mb-6" />
          <p className="font-sans text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            {data?.description}
          </p>
        </FadeIn>

        {/* 2-Column Split: Table left, Breakdown right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 mb-20 items-stretch">
          
          {/* Left Column: Table (7 cols) */}
          {data?.comparison && (
            <div className="lg:col-span-7 flex flex-col justify-center">
              <FadeIn>
                <div className="bg-white rounded-3xl p-6 lg:p-8 border border-slate-200/80 shadow-sm h-full flex flex-col justify-between">
                  <div>
                    <h3 className="font-display text-2xl text-navy-950 mb-6">{data.comparison.title}</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left">
                        <thead>
                          <tr className="border-b border-slate-200">
                            {data.comparison.headers.map((header, i) => (
                              <th key={i} className="pb-3 font-sans text-xs font-bold tracking-widest uppercase text-navy-950 first:pl-0">
                                {header}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {data.comparison.rows.map((row, i) => (
                            <tr key={i} className="border-b border-slate-100 last:border-0">
                              {row.map((cell, j) => (
                                <td key={j} className={`py-3.5 font-sans text-xs ${j === 0 ? 'text-navy-950 font-bold first:pl-0' : j === 2 ? 'text-gold-600 font-semibold' : 'text-slate-600'}`}>
                                  {cell}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          )}

          {/* Right Column: Breakdown checklist card (5 cols) */}
          {data?.costBreakdown && (
            <div className="lg:col-span-5 flex">
              <FadeIn className="w-full">
                <div className="bg-navy-950 text-white rounded-3xl p-6 lg:p-8 shadow-xl flex flex-col justify-between h-full relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gold-400/5 rounded-full blur-xl translate-x-8 -translate-y-8" />
                  
                  <div>
                    <h3 className="font-display text-2xl text-white mb-3">{data.costBreakdown.title}</h3>
                    <p className="font-sans text-xs text-white/50 leading-relaxed mb-6">
                      {data.costBreakdown.description}
                    </p>
                    
                    <div className="space-y-4">
                      {data.costBreakdown.items?.map((item, idx) => (
                        <div key={idx} className="flex gap-3">
                          <Star className="w-4 h-4 text-gold-400 mt-1 flex-shrink-0" />
                          <div>
                            <h4 className="font-display text-xs text-white uppercase tracking-wider mb-1">
                              {item?.title}
                            </h4>
                            <p className="font-sans text-[11px] text-white/70 leading-relaxed">
                              {item?.details}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          )}

        </div>

        {/* Stats strip at the bottom */}
        {data?.stats && (
          <FadeIn delay={0.2}>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {data.stats.map((stat, i) => (
                <div key={i} className="bg-white border border-slate-200/60 rounded-2xl p-5 text-center shadow-sm">
                  <span className="font-display text-3xl text-gold-500 block mb-1">{stat?.value}</span>
                  <span className="font-sans text-xs text-slate-500 uppercase tracking-widest leading-normal">
                    {stat?.label}
                  </span>
                </div>
              ))}
            </div>
          </FadeIn>
        )}

      </div>
    </section>
  );
};

export default ExpeditionCostValue;
