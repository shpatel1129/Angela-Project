import React from 'react';
import FadeIn from './FadeIn';

const WindstarVsLargeValue = ({ data, tableData }) => {
  if (!data || !tableData) return null;

  return (
    <section className="w-full py-20 bg-ice-50 relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <FadeIn>
            <span className="font-sans text-xs font-bold uppercase tracking-widest text-slate-500 block">PART 04</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy-950 mt-2">
              {data.title || "Cost, Inclusions & True Value"}
            </h2>
            <div className="w-12 h-1 bg-ts-gold mx-auto mt-4"></div>
            <p className="font-sans text-xs sm:text-sm text-slate-500 max-w-xl mx-auto mt-4 leading-relaxed">
              {data.intro}
            </p>
          </FadeIn>
        </div>

        {/* Value Matrix Table */}
        <FadeIn>
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-md">
            <h3 className="font-display text-xl sm:text-2xl text-navy-950 font-bold mb-6 text-center">
              True Price & Inclusions Analysis
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-200">
                    {tableData.headers?.map((header, idx) => (
                      <th key={idx} className="pb-4 font-sans text-xs font-bold text-navy-950 uppercase tracking-widest">
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {tableData.rows?.map((row, rIdx) => (
                    <tr key={rIdx} className="border-b border-slate-100 hover:bg-slate-50/60 transition-colors">
                      {row.map((cell, cIdx) => (
                        <td key={cIdx} className="py-4.5 font-sans text-xs sm:text-sm text-slate-600 leading-normal">
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

      </div>
    </section>
  );
};

export default WindstarVsLargeValue;
