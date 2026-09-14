import React from 'react';
import FadeIn from './FadeIn';

const BudgetBreakdownTable = ({ data }) => {
  if (!data || !data.headers || data.headers.length === 0) return null;

  return (
    <section className="w-full py-16 bg-ice-50">
      <div className="max-w-[800px] mx-auto px-6">
        <FadeIn className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl text-navy-950 mb-6">
            {data.title}
          </h2>
          {data.description && (
            <p className="font-sans text-lg text-slate-600 max-w-2xl mx-auto">
              {data.description}
            </p>
          )}
          <div className="w-16 h-[1px] bg-gold-400 mx-auto mt-8"></div>
        </FadeIn>
        
        <FadeIn delay={0.2}>
          <div className="bg-white rounded-xl shadow-sm border border-border-light overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-navy-950 text-white">
                  {data.headers.map((header, idx) => (
                    <th 
                      key={idx} 
                      className={`px-6 py-5 font-sans font-medium tracking-wide uppercase text-sm ${idx === 1 ? 'text-right' : ''}`}
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-slate-100">
                {data.rows.map((row, rowIndex) => (
                  <tr key={rowIndex} className="hover:bg-slate-50 transition-colors">
                    {row.map((cell, cellIndex) => (
                      <td 
                        key={cellIndex} 
                        className={`px-6 py-5 font-sans text-base ${cellIndex === 0 ? 'font-medium text-navy-900' : 'text-slate-600 text-right font-medium'}`}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="bg-slate-50 p-6 text-sm text-slate-500 font-sans italic text-center border-t border-slate-100">
              *Actual costs vary by season, itinerary, departure city, cabin category, and promotional offers.
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default BudgetBreakdownTable;
