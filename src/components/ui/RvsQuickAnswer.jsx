import React from 'react';
import FadeIn from './FadeIn';

const RvsQuickAnswer = ({ data, image }) => {
  if (!data) return null;

  return (
    <section id="content" className="w-full py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Subtle decorative corner */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-bl from-ice-50 to-transparent rounded-bl-full opacity-60 pointer-events-none"></div>

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">

        {/* Section Header */}
        <FadeIn className="mb-14">
          <span className="font-sans text-[10px] font-bold tracking-[0.3em] uppercase text-ts-gold block mb-3">EXPERT COMPARISON</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950 leading-tight">{data.title}</h2>
          <div className="w-20 h-1 bg-ts-gold mt-5"></div>
        </FadeIn>

        {/* Intro + Two Brand Summary Columns */}
        <FadeIn delay={0.1} className="mb-14">
          <p className="font-serif text-lg text-slate-700 leading-relaxed font-light max-w-4xl border-l-4 border-slate-200 pl-6 py-2">
            {data.intro}
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Regent Card */}
          <FadeIn direction="right" className="bg-navy-950 text-white rounded-3xl p-8 lg:p-10 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-40 h-40 bg-ts-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-ts-gold/10 transition-colors duration-700"></div>
            <span className="font-sans text-[10px] font-bold tracking-[0.25em] uppercase text-ts-gold block mb-4">REGENT SEVEN SEAS</span>
            <p className="font-serif text-base text-slate-200 leading-relaxed font-light mb-6">{data.regentSummary}</p>
            <div className="border-t border-white/10 pt-5">
              <span className="font-sans text-[9px] font-bold tracking-widest text-slate-400 uppercase block mb-1">BEST FOR</span>
              <p className="font-sans text-xs text-ts-gold font-semibold">All-Inclusive Luxury · Spacious Suites · Included Excursions</p>
            </div>
          </FadeIn>

          {/* Silversea Card */}
          <FadeIn direction="left" className="bg-slate-50 border border-slate-200/60 text-navy-950 rounded-3xl p-8 lg:p-10 relative overflow-hidden group">
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-navy-950/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 group-hover:bg-navy-950/10 transition-colors duration-700"></div>
            <span className="font-sans text-[10px] font-bold tracking-[0.25em] uppercase text-slate-400 block mb-4">SILVERSEA CRUISES</span>
            <p className="font-serif text-base text-slate-600 leading-relaxed font-light mb-6">{data.silverseaSummary}</p>
            <div className="border-t border-slate-200 pt-5">
              <span className="font-sans text-[9px] font-bold tracking-widest text-slate-400 uppercase block mb-1">BEST FOR</span>
              <p className="font-sans text-xs text-navy-950 font-semibold">Expedition Cruising · Butler Service · Remote Destinations</p>
            </div>
          </FadeIn>
        </div>

        {/* Comparison Table + Image Side-by-Side */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Table */}
          <div className="lg:col-span-8">
            <FadeIn className="bg-slate-50 border border-slate-200/60 rounded-3xl p-6 lg:p-8 h-full">
              <div className="overflow-x-auto">
                <table className="w-full text-left font-sans text-sm">
                  <thead>
                    <tr className="border-b-2 border-slate-200">
                      {data.comparisonTable?.headers?.map((h, i) => (
                        <th key={i} className="pb-4 text-navy-950 font-bold uppercase tracking-wider text-xs">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {data.comparisonTable?.rows?.map((row, i) => (
                      <tr key={i} className="hover:bg-white transition-colors">
                        <td className="py-4 text-slate-700 font-medium pr-6">{row[0]}</td>
                        <td className="py-4">
                          <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold tracking-wide ${
                            row[1] === 'Regent' ? 'bg-navy-950 text-white' :
                            row[1] === 'Silversea' ? 'bg-slate-200 text-navy-950' :
                            'bg-ts-gold/10 text-ts-gold'
                          }`}>
                            {row[1]}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </FadeIn>
          </div>

          {/* Accent Image */}
          <div className="lg:col-span-4 relative">
            <FadeIn direction="left" className="h-full rounded-3xl overflow-hidden shadow-xl border border-slate-200 min-h-[350px] relative">
              {image && (
                <img
                  src={image}
                  alt="Luxury Cruise Comparison"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white z-10">
                <span className="font-sans text-[9px] text-ts-gold font-bold uppercase tracking-widest block mb-2">BOTTOM LINE</span>
                <p className="font-serif text-xs text-slate-200 leading-relaxed font-light">
                  {data.bottomLine}
                </p>
              </div>
            </FadeIn>
          </div>
        </div>

      </div>
    </section>
  );
};

export default RvsQuickAnswer;
