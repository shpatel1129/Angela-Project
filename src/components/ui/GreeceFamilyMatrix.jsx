import React from 'react';
import FadeIn from './FadeIn';

const GreeceFamilyMatrix = ({ matrixIntro = [], matrixRows = [], strategies = [] }) => {
  const strategyEmojis = ['🧭', '⛵', '📅'];

  // Helper to strip emoji prefix and format table cell content cleanly
  const formatCellText = (text) => {
    if (!text) return '';
    let clean = text.trim();
    if (clean.startsWith('🥇')) {
      return (
        <span className="inline-flex items-center gap-1.5 text-[#c9a15c] font-semibold">
          <span>★</span> {clean.replace(/^🥇\s*/, '')}
        </span>
      );
    }
    if (clean.startsWith('🥈')) {
      return (
        <span className="inline-flex items-center gap-1.5 text-navy-950 font-normal">
          <span>✦</span> {clean.replace(/^🥈\s*/, '')}
        </span>
      );
    }
    if (clean.startsWith('🥉')) {
      return (
        <span className="inline-flex items-center gap-1.5 text-slate-500 font-light">
          <span>•</span> {clean.replace(/^🥉\s*/, '')}
        </span>
      );
    }
    if (clean.startsWith('❌')) {
      return (
        <span className="inline-flex items-center gap-1.5 text-slate-400 font-light line-through">
          {clean.replace(/^❌\s*/, '')}
        </span>
      );
    }
    return clean;
  };

  return (
    <section className="py-24 bg-white border-b border-slate-100 text-left">
      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-sans font-bold tracking-[0.25em] text-[#c9a15c] uppercase block mb-3">
            DECISION MATRIX
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-light text-navy-950">
            Naxos vs. Crete vs. Paros Benchmarks
          </h2>
          <div className="w-16 h-0.5 bg-[#c9a15c] mx-auto mt-6 mb-6"></div>
          <div className="space-y-4 font-sans text-slate-600 font-light leading-relaxed max-w-2xl mx-auto">
            {matrixIntro.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>
        </div>

        {/* Benchmarks Table (Full Width) */}
        <div className="mb-20">
          <FadeIn>
            <div className="overflow-x-auto bg-white border border-slate-100 rounded-3xl shadow-sm">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-navy-950 text-white font-sans text-xs uppercase tracking-wider">
                    <th className="p-5 font-semibold">Benchmark Criteria</th>
                    <th className="p-5 font-semibold text-center">Naxos</th>
                    <th className="p-5 font-semibold text-center">Crete</th>
                    <th className="p-5 font-semibold text-center">Paros</th>
                  </tr>
                </thead>
                <tbody>
                  {matrixRows.map((row, idx) => (
                    <tr 
                      key={idx} 
                      className={`border-b border-slate-100 font-sans text-xs transition-colors duration-200 hover:bg-slate-50 ${
                        idx % 2 === 1 ? 'bg-slate-50/50' : 'bg-white'
                      }`}
                    >
                      <td className="p-5 font-semibold text-navy-950">{row.label}</td>
                      <td className="p-5 text-center">{formatCellText(row.naxos)}</td>
                      <td className="p-5 text-center">{formatCellText(row.crete)}</td>
                      <td className="p-5 text-center">{formatCellText(row.paros)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeIn>
        </div>

        {/* Itinerary Planning Strategies (Full Width 3-Column Grid) */}
        <div className="border-t border-slate-100 pt-16">
          <FadeIn>
            <h3 className="font-display text-2xl font-light text-navy-950 mb-8 text-center">
              Itinerary Planning Strategies
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {strategies.map((p, idx) => (
                <div key={idx} className="p-6 bg-slate-50 border border-slate-100 rounded-2xl flex flex-col justify-between hover:shadow-md transition-all duration-300">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-sans font-bold text-[#c9a15c] uppercase tracking-wider">
                        Strategy 0{idx + 1}
                      </span>
                    </div>
                    <p className="font-sans text-xs text-slate-600 font-light leading-relaxed">
                      {p}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>

      </div>
    </section>
  );
};

export default GreeceFamilyMatrix;
