import React from 'react';
import FadeIn from './FadeIn';

const SvsSScorecards = ({ data }) => {
  if (!data) return null;

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <FadeIn>
            <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-gold-500 font-bold mb-3 block">
              {data.subtitle || "Quick Comparisons"}
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-navy-950 font-bold">
              {data.title || "At a Glance Scorecards"}
            </h2>
            <div className="w-12 h-[2px] bg-gold-400 mx-auto mt-6"></div>
          </FadeIn>
        </div>

        {/* Scorecards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* Service Personality */}
          {data.service && (
            <FadeIn delay={0.1}>
              <div className="bg-slate-50 border border-slate-200 rounded-3xl overflow-hidden shadow-lg h-full">
                <div className="bg-navy-950 py-5 px-6">
                  <h3 className="font-display text-xl text-white font-bold text-center">
                    {data.service.title}
                  </h3>
                </div>
                <div className="p-6">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-slate-200">
                        {data.service.headers.map((header, idx) => (
                          <th key={idx} className="py-3 px-2 font-display text-sm md:text-base text-navy-900 font-bold tracking-wide">
                            {header}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {data.service.rows.map((row, rIdx) => (
                        <tr key={rIdx} className="hover:bg-white transition-colors duration-200">
                          <td className="py-3 px-2 font-sans text-sm md:text-base text-slate-600 font-light">
                            {row[0]}
                          </td>
                          <td className={`py-3 px-2 font-sans text-sm md:text-base font-bold ${row[1] === 'Silversea' ? 'text-navy-800' : 'text-gold-600'}`}>
                            {row[1]}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </FadeIn>
          )}

          {/* Food & Atmosphere */}
          {data.atmosphere && (
            <FadeIn delay={0.2}>
              <div className="bg-slate-50 border border-slate-200 rounded-3xl overflow-hidden shadow-lg h-full">
                <div className="bg-navy-950 py-5 px-6">
                  <h3 className="font-display text-xl text-white font-bold text-center">
                    {data.atmosphere.title}
                  </h3>
                </div>
                <div className="p-6">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-slate-200">
                        {data.atmosphere.headers.map((header, idx) => (
                          <th key={idx} className={`py-3 px-2 font-display text-sm md:text-base text-navy-900 font-bold tracking-wide ${idx > 0 ? 'text-center' : ''}`}>
                            {header}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {data.atmosphere.rows.map((row, rIdx) => (
                        <tr key={rIdx} className="hover:bg-white transition-colors duration-200">
                          <td className="py-3 px-2 font-sans text-sm md:text-base text-slate-600 font-light">
                            {row[0]}
                          </td>
                          <td className="py-3 px-2 text-center text-navy-800 tracking-widest text-sm md:text-base">
                            {row[1]}
                          </td>
                          <td className="py-3 px-2 text-center text-gold-600 tracking-widest text-sm md:text-base">
                            {row[2]}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </FadeIn>
          )}

        </div>
      </div>
    </section>
  );
};

export default SvsSScorecards;
