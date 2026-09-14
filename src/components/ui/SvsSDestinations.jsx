import React from 'react';
import FadeIn from './FadeIn';

const SvsSDestinations = ({ data }) => {
  if (!data) return null;

  return (
    <section className="py-24 bg-ice-50 relative">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <FadeIn>
            <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-gold-600 font-bold mb-3 block">
              {data.subtitle}
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-navy-950 font-bold mb-6">
              {data.title}
            </h2>
            <div className="w-12 h-[2px] bg-gold-500 mx-auto mb-6"></div>
            <p className="font-sans text-base md:text-lg text-slate-600 leading-relaxed font-light">
              {data.intro}
            </p>
          </FadeIn>
        </div>

        {/* Comparison Table */}
        <FadeIn delay={0.2}>
          <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-navy-950 text-white">
                    {data.table?.headers.map((header, index) => (
                      <th 
                        key={index} 
                        className="py-5 px-6 font-display text-sm md:text-base font-bold tracking-wide border-b border-navy-900"
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {data.table?.rows.map((row, rowIndex) => (
                    <tr key={rowIndex} className="hover:bg-slate-50 transition-colors duration-200">
                      {row.map((cell, cellIndex) => (
                        <td 
                          key={cellIndex} 
                          className={`py-4 px-6 font-sans text-sm md:text-base ${cellIndex === 0 ? 'font-bold text-navy-900' : 'text-slate-600 font-light'}`}
                        >
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

        {/* Note */}
        {data.expeditionNote && (
          <FadeIn delay={0.3}>
            <p className="mt-6 text-center font-sans text-xs md:text-sm text-slate-500 italic max-w-2xl mx-auto">
              {data.expeditionNote}
            </p>
          </FadeIn>
        )}
      </div>
    </section>
  );
};

export default SvsSDestinations;
