import React from 'react';
import FadeIn from './FadeIn';

const DualBrandComparisonTable = ({ title, subtitle, headers, rows }) => {
  if (!rows || rows.length === 0) return null;

  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-[1100px] mx-auto px-6">
        <FadeIn className="text-center mb-14">
          {subtitle && (
            <p className="font-sans text-xs font-bold uppercase tracking-[0.25em] text-gold-400 mb-4">
              {subtitle}
            </p>
          )}
          <h2 className="font-display text-4xl md:text-5xl text-navy-950">{title}</h2>
          <div className="w-12 h-0.5 bg-navy-800 mx-auto mt-6" />
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="overflow-x-auto rounded-2xl border border-slate-100 shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-navy-950">
                  {(headers || []).map((header, idx) => (
                    <th
                      key={idx}
                      className={`px-6 py-5 font-sans font-medium uppercase text-xs tracking-[0.18em] text-white/90 ${idx === 0 ? 'w-[28%]' : idx === 3 ? 'w-[18%]' : 'w-[27%]'}`}
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white">
                {rows.map((row, rowIndex) => (
                  <tr
                    key={rowIndex}
                    className="border-b border-slate-100 last:border-b-0 hover:bg-ice-50/60 transition-colors"
                  >
                    <td className="px-6 py-5 font-sans font-semibold text-navy-900 text-sm">
                      {row.category}
                    </td>
                    <td className="px-6 py-5 font-sans text-sm text-slate-600">
                      {row.avalon}
                    </td>
                    <td className="px-6 py-5 font-sans text-sm text-slate-600">
                      {row.ama}
                    </td>
                    <td className="px-6 py-5">
                      {row.winner && (
                        <span className={`inline-block font-sans text-[11px] font-bold uppercase tracking-[0.15em] px-3 py-1.5 rounded-full border ${
                          row.winner.toLowerCase() === 'tie'
                            ? 'bg-slate-100 text-slate-500 border-slate-200'
                            : row.winner.toLowerCase().includes('avalon')
                            ? 'bg-navy-800/10 text-navy-900 border-navy-200'
                            : 'bg-ice-50 text-navy-800 border-ice-200'
                        }`}>
                          {row.winner}
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default DualBrandComparisonTable;
