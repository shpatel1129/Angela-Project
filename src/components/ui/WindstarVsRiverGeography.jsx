import React from 'react';
import FadeIn from './FadeIn';

const WindstarVsRiverGeography = ({ data, tableData, image1, image2 }) => {
  if (!data) return null;

  return (
    <section className="w-full py-20 bg-ice-50 relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <FadeIn>
            <span className="font-sans text-xs font-bold uppercase tracking-widest text-ts-gold block">PART 02</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy-950 mt-2">
              {data.title}
            </h2>
            <div className="w-12 h-1 bg-ts-gold mx-auto mt-4"></div>
            <p className="font-sans text-xs sm:text-sm text-slate-500 max-w-xl mx-auto mt-4 leading-relaxed">
              {data.intro}
            </p>
          </FadeIn>
        </div>

        {/* 2 Big Cards (satisfying the 2,4,6 rule) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          
          {/* Card 1 */}
          <FadeIn direction="right">
            <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden flex flex-col justify-between h-full hover:shadow-lg transition-all duration-300">
              {image1 && (
                <div className="w-full h-56 overflow-hidden relative">
                  <img src={image1} alt="Coastal Port Access" className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/20 to-transparent"></div>
                </div>
              )}
              <div className="p-8 flex-grow flex flex-col justify-between">
                <div>
                  <span className="text-ts-gold font-sans text-[10px] font-bold uppercase tracking-widest block mb-2">
                    GEOGRAPHY & ACCESS
                  </span>
                  <h3 className="font-display text-2xl text-navy-950 font-bold mb-4">
                    {data.windstarDestinations?.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-slate-500 leading-relaxed">
                    {data.windstarDestinations?.description}
                  </p>
                </div>
                <div className="pt-4 mt-6 border-t border-slate-100">
                  <span className="font-sans text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                    Coastal Harbors & Island Bays
                  </span>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Card 2 */}
          <FadeIn direction="left">
            <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden flex flex-col justify-between h-full hover:shadow-lg transition-all duration-300">
              {image2 && (
                <div className="w-full h-56 overflow-hidden relative">
                  <img src={image2} alt="Inland River Access" className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/20 to-transparent"></div>
                </div>
              )}
              <div className="p-8 flex-grow flex flex-col justify-between">
                <div>
                  <span className="text-ts-gold font-sans text-[10px] font-bold uppercase tracking-widest block mb-2">
                    GEOGRAPHY & ACCESS
                  </span>
                  <h3 className="font-display text-2xl text-navy-950 font-bold mb-4">
                    {data.riverDestinations?.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-slate-500 leading-relaxed">
                    {data.riverDestinations?.description}
                  </p>
                </div>
                <div className="pt-4 mt-6 border-t border-slate-100">
                  <span className="font-sans text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                    Inland River Channels & Towns
                  </span>
                </div>
              </div>
            </div>
          </FadeIn>

        </div>

        {/* Comparison Table */}
        {tableData && (
          <FadeIn>
            <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-md">
              <h3 className="font-display text-xl sm:text-2xl text-navy-950 font-bold mb-6 text-center">
                {tableData.title}
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
                          <td key={cIdx} className="py-4 font-sans text-xs sm:text-sm text-slate-600 leading-normal">
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

export default WindstarVsRiverGeography;
