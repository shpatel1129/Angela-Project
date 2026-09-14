import React from 'react';
import FadeIn from './FadeIn';

const ExplorerInclusions = ({ data, tableData, image }) => {
  if (!data) return null;

  return (
    <section className="w-full py-20 bg-white relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* Header block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy-950">
              {data.title || "True Inclusions & Pricing Value"}
            </h2>
            <div className="w-12 h-1 bg-ts-gold mx-auto mt-4 mb-6"></div>
            <p className="font-sans text-sm text-slate-500 leading-relaxed font-light">
              {data.intro}
            </p>
          </FadeIn>
        </div>

        {/* Layout: Spec Comparison & Visual Callout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Visual Frame left */}
          <div className="lg:col-span-4 relative">
            <FadeIn direction="right" className="h-full rounded-3xl overflow-hidden shadow-xl border border-slate-200 min-h-[300px] relative">
              {image && (
                <img
                  src={image}
                  alt="Regent Seven Seas Atrium Staircase"
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white z-10">
                <span className="font-sans text-[10px] text-ts-gold font-bold uppercase tracking-widest block mb-2">ALL-INCLUSIVE COMFORT</span>
                <p className="font-serif text-xs text-slate-300 leading-relaxed font-light">
                  Regent fares are designed to leave your wallet in your suite safe. Wi-Fi, fine wines, premium spirits, specialty dining, gratuities, and excursions are fully covered.
                </p>
              </div>
            </FadeIn>
          </div>

          {/* Table Right */}
          <div className="lg:col-span-8 flex flex-col justify-center">
            {tableData && (
              <FadeIn direction="left" className="bg-slate-50 border border-slate-200/60 rounded-3xl p-6 md:p-8">
                <div className="overflow-x-auto">
                  <table className="w-full text-left font-sans text-xs sm:text-sm">
                    <thead>
                      <tr className="border-b border-slate-200">
                        {tableData.headers?.map((h, i) => (
                          <th key={i} className="pb-3 text-navy-950 font-bold uppercase tracking-wider">{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200/60">
                      {tableData.rows?.map((row, i) => (
                        <tr key={i} className="hover:bg-slate-100/50 transition-colors">
                          <td className="py-4 font-semibold text-navy-950 pr-4">{row[0]}</td>
                          <td className="py-4 text-navy-950 font-semibold pr-4">✓ {row[1]}</td>
                          <td className="py-4 text-slate-400 font-light italic">{row[2]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </FadeIn>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};

export default ExplorerInclusions;
