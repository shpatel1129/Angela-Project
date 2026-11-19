import React from 'react';
import FadeIn from './FadeIn';

const BrandComparisonTable = ({ title, subtitle, headers = [], rows = [], data }) => {
  const tableTitle = title || data?.title;
  const tableSubtitle = subtitle || data?.subtitle;
  const tableHeaders = (headers && headers.length > 0) ? headers : (data?.headers || []);
  const tableRows = (rows && rows.length > 0) ? rows : (data?.rows || []);

  if (!tableRows || tableRows.length === 0) return null;

  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-[1100px] mx-auto px-6">
        <FadeIn className="text-center mb-14">
          {tableSubtitle && (
            <p className="font-sans text-xs font-bold uppercase tracking-[0.25em] text-gold-400 mb-4">
              {tableSubtitle}
            </p>
          )}
          {tableTitle && (
            <h2 className="font-display text-4xl md:text-5xl text-navy-950">{tableTitle}</h2>
          )}
          <div className="w-12 h-0.5 bg-navy-800 mx-auto mt-6" />
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="overflow-x-auto rounded-2xl border border-slate-100 shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-navy-950">
                  {tableHeaders.map((header, idx) => (
                    <th
                      key={idx}
                      className={`px-6 py-5 font-sans font-medium uppercase text-xs tracking-[0.18em] text-white/90 ${
                        idx === 0 ? 'w-[30%]' : ''
                      }`}
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white">
                {tableRows.map((row, rowIndex) => {
                  const cells = Array.isArray(row)
                    ? row
                    : [
                        row.category || row.feature || Object.values(row)[0],
                        row.avalon || row.col1 || Object.values(row)[1],
                        row.ama || row.col2 || Object.values(row)[2],
                        row.winner || row.verdict || Object.values(row)[3],
                      ].filter((v) => v !== undefined);

                  return (
                    <tr
                      key={rowIndex}
                      className="border-b border-slate-100 last:border-b-0 hover:bg-ice-50/60 transition-colors"
                    >
                      {cells.map((cell, cellIndex) => (
                        <td
                          key={cellIndex}
                          className={`px-6 py-5 font-sans text-sm ${
                            cellIndex === 0
                              ? 'font-semibold text-navy-900'
                              : 'text-slate-600'
                          }`}
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default BrandComparisonTable;
