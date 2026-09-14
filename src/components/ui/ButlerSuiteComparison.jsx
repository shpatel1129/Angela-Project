import React, { useState } from 'react';
import FadeIn from './FadeIn';
import MasterImage from './MasterImage';
import { Check, ChevronDown, HelpCircle } from 'lucide-react';

const accentColors = {
  ice: { bg: 'bg-ice-50', border: 'border-sky-200/60', badge: 'bg-sky-100 text-sky-700', accent: 'text-sky-600' },
  silver: { bg: 'bg-slate-50', border: 'border-slate-300/60', badge: 'bg-slate-200 text-slate-700', accent: 'text-slate-600' },
  gold: { bg: 'bg-amber-50/50', border: 'border-gold-400/40', badge: 'bg-gold-400/20 text-amber-700', accent: 'text-amber-600' },
  platinum: { bg: 'bg-navy-950/[0.03]', border: 'border-navy-950/20', badge: 'bg-navy-950/10 text-navy-950', accent: 'text-navy-800' },
};

const ButlerSuiteComparison = ({ data, images = [] }) => {
  const [openQuestion, setOpenQuestion] = useState(null);

  if (!data) return null;

  return (
    <section className="w-full py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <FadeIn className="text-center mb-16">
          <span className="uppercase tracking-[0.25em] text-[11px] font-bold text-slate-400 mb-4 block">
            {data?.eyebrow}
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-navy-950 leading-tight mb-6">
            {data?.heading}
          </h2>
          <div className="w-14 h-[2px] bg-gold-400 mx-auto mb-6" />
          <p className="font-sans text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            {data?.description}
          </p>
        </FadeIn>

        {/* Question Callout */}
        {data?.questionCallout && (
          <FadeIn delay={0.1}>
            <div className="max-w-2xl mx-auto mb-16 text-center">
              <div className="inline-block px-8 py-4 rounded-full bg-navy-950 text-white font-display text-lg lg:text-xl italic">
                "{data.questionCallout}"
              </div>
            </div>
          </FadeIn>
        )}

        {/* Suite Cards — 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {data?.suites?.map((suite, index) => {
            const colors = accentColors[suite?.accent] || accentColors.ice;
            const img = images[index];

            return (
              <FadeIn key={index} delay={0.05 * index}>
                <div className={`rounded-2xl ${colors.bg} border ${colors.border} p-7 h-full flex flex-col hover:shadow-xl transition-shadow duration-500 group relative overflow-hidden`}>
                  {/* Decorative circle */}
                  <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-gradient-to-br from-gold-400/5 to-transparent" />

                  {/* Suite Tier Badge */}
                  <div className="flex items-center justify-between mb-5 relative z-10">
                    <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase ${colors.badge}`}>
                      {suite?.tier}
                    </span>
                    <span className="font-sans text-xs text-slate-400 italic">
                      Best for: {suite?.bestFor}
                    </span>
                  </div>

                  {/* Image */}
                  {img && (
                    <div className="rounded-xl overflow-hidden aspect-[16/9] mb-5 shadow-md">
                      <MasterImage
                        src={img}
                        alt={suite?.title || "Suite category"}
                        className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
                      />
                    </div>
                  )}

                  {/* Title */}
                  <h3 className={`font-display text-xl lg:text-2xl text-navy-950 mb-3 ${colors.accent}`}>
                    {suite?.title}
                  </h3>

                  <p className="font-sans text-sm text-slate-600 leading-relaxed mb-5 flex-1">
                    {suite?.description}
                  </p>

                  {/* Feature List */}
                  {suite?.features && (
                    <div className="space-y-2 mb-4">
                      {suite.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2.5">
                          <Check className={`w-4 h-4 ${colors.accent} flex-shrink-0`} />
                          <span className="font-sans text-xs text-slate-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Expert Tip */}
                  {suite?.tip && (
                    <div className="mt-auto pt-4 border-t border-slate-200/60">
                      <p className="font-sans text-xs text-slate-500 italic leading-relaxed">
                        💡 {suite.tip}
                      </p>
                    </div>
                  )}
                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* Comparison Table */}
        {data?.comparisonTable && (
          <FadeIn delay={0.1}>
            <div className="mb-16">
              <h3 className="font-display text-2xl text-navy-950 text-center mb-8">
                At-a-Glance Comparison
              </h3>
              <div className="overflow-x-auto rounded-xl border border-slate-200/80 shadow-sm">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-navy-950">
                      {data.comparisonTable.headers.map((header, i) => (
                        <th key={i} className="px-5 py-4 font-sans text-xs font-bold tracking-widest uppercase text-white/90 first:rounded-tl-xl last:rounded-tr-xl">
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {data.comparisonTable.rows.map((row, i) => (
                      <tr key={i} className={`${i % 2 === 0 ? 'bg-white' : 'bg-ice-50/40'} border-t border-slate-100`}>
                        {row.map((cell, j) => (
                          <td key={j} className={`px-5 py-3.5 font-sans text-sm ${j === 0 ? 'text-navy-950 font-medium' : 'text-slate-600'}`}>
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

export default ButlerSuiteComparison;
