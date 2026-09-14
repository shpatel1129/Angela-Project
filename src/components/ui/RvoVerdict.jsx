import React from 'react';
import FadeIn from './FadeIn';

const RvoVerdict = ({ data, image }) => {
  if (!data) return null;

  return (
    <section id="verdict" className="w-full py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Decorative element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-ice-50 to-transparent rounded-bl-full opacity-60 pointer-events-none"></div>

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <FadeIn className="mb-14">
          <span className="font-sans text-[10px] font-bold tracking-[0.3em] uppercase text-ts-gold block mb-3">EXECUTIVE VERDICT</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950 leading-tight">
            {data.title}
          </h2>
          <div className="w-20 h-1 bg-ts-gold mt-5"></div>
        </FadeIn>

        {/* Intro */}
        <FadeIn delay={0.1} className="mb-14 max-w-4xl">
          <p className="font-serif text-lg md:text-xl text-slate-700 leading-relaxed font-light border-l-4 border-ts-gold pl-6 py-2">
            {data.intro}
          </p>
        </FadeIn>

        {/* Brand Comparison Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Regent Seven Seas Card */}
          <FadeIn direction="right" className="bg-navy-950 text-white rounded-3xl p-8 lg:p-10 relative overflow-hidden group border border-white/5 shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-ts-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-ts-gold/10 transition-colors duration-700"></div>
            <span className="font-sans text-[10px] font-bold tracking-[0.25em] uppercase text-ts-gold block mb-4">REGENT SEVEN SEAS</span>
            <p className="font-serif text-lg text-slate-100 font-light leading-relaxed mb-8">{data.regentSummary}</p>
            
            <div className="border-t border-white/10 pt-6">
              <span className="font-sans text-[10px] font-bold tracking-widest text-ts-gold uppercase block mb-4">CHOOSE REGENT IF YOU WANT:</span>
              <ul className="space-y-3">
                {data.regentBullets?.map((bullet, idx) => (
                  <li key={idx} className="flex items-start text-sm text-slate-300 font-sans font-light">
                    <span className="text-ts-gold mr-3 text-base leading-none">✓</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          {/* Oceania Cruises Card */}
          <FadeIn direction="left" className="bg-slate-50 border border-slate-200/60 text-navy-950 rounded-3xl p-8 lg:p-10 relative overflow-hidden group shadow-lg">
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-navy-950/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 group-hover:bg-navy-950/10 transition-colors duration-700"></div>
            <span className="font-sans text-[10px] font-bold tracking-[0.25em] uppercase text-slate-400 block mb-4">OCEANIA CRUISES</span>
            <p className="font-serif text-lg text-navy-900 font-light leading-relaxed mb-8">{data.oceaniaSummary}</p>
            
            <div className="border-t border-slate-200 pt-6">
              <span className="font-sans text-[10px] font-bold tracking-widest text-navy-850 uppercase block mb-4">CHOOSE OCEANIA IF YOU WANT:</span>
              <ul className="space-y-3">
                {data.oceaniaBullets?.map((bullet, idx) => (
                  <li key={idx} className="flex items-start text-sm text-slate-650 font-sans font-light">
                    <span className="text-teal-accent mr-3 text-base leading-none">✓</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>

        {/* Verdict Table & Image side by side */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Table */}
          <div className="lg:col-span-7">
            <FadeIn className="bg-white border border-slate-200/80 rounded-3xl p-6 lg:p-8 h-full shadow-sm">
              <h3 className="font-display text-xl font-bold text-navy-950 mb-6">Regent Seven Seas vs. Oceania: Verdict Summary</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left font-sans text-xs sm:text-sm">
                  <thead>
                    <tr className="border-b-2 border-slate-200">
                      {data.verdictTable?.headers?.map((h, i) => (
                        <th key={i} className="pb-3 text-navy-950 font-bold uppercase tracking-wider text-xs">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {data.verdictTable?.rows?.map((row, i) => (
                      <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                        <td className="py-3 text-slate-700 font-medium pr-6">{row[0]}</td>
                        <td className="py-3">
                          <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wide ${
                            row[1] === 'Regent' ? 'bg-navy-950 text-white' :
                            row[1] === 'Oceania' ? 'bg-ts-gold text-navy-950 font-bold' :
                            'bg-slate-100 text-slate-600'
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
          <div className="lg:col-span-5 relative min-h-[350px]">
            <FadeIn direction="left" className="h-full rounded-3xl overflow-hidden shadow-xl border border-slate-200/80 absolute inset-0">
              {image && (
                <img
                  src={image}
                  alt="Regent Observation Lounge"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/20 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8 text-white z-10">
                <span className="font-sans text-[10px] text-ts-gold font-bold uppercase tracking-widest block mb-2">SUMMARY REFLECTION</span>
                <p className="font-serif text-sm text-slate-150 leading-relaxed font-light">
                  A Regent fare incorporates a broad range of experiences that can otherwise add significant costs to a cruise vacation. The real comparison is which cruise delivers the greatest overall value for the way you actually travel.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>

      </div>
    </section>
  );
};

export default RvoVerdict;
