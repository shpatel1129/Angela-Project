import React from 'react';
import FadeIn from './FadeIn';

const ExplorerSuites = ({ data, tableData, image }) => {
  if (!data) return null;

  return (
    <section className="w-full py-20 bg-white relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy-950">
              {data.title || "Accommodations & Design"}
            </h2>
            <div className="w-12 h-1 bg-ts-gold mx-auto mt-4 mb-6"></div>
            <p className="font-sans text-sm text-slate-500 leading-relaxed font-light">
              {data.designDescription}
            </p>
          </FadeIn>
        </div>

        {/* Split Section: Spec Table & Highlight Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 items-stretch">
          {/* Table */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {tableData && (
              <FadeIn direction="right" className="bg-slate-50 border border-slate-200/60 rounded-3xl p-6 md:p-8">
                <h3 className="font-display text-xl font-bold text-navy-950 mb-6 font-serif">
                  {tableData.title}
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-left font-sans text-xs sm:text-sm">
                    <thead>
                      <tr className="border-b border-slate-200">
                        {tableData.headers?.map((h, i) => (
                          <th key={i} className="pb-3 text-navy-950 font-bold uppercase tracking-wider">{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {tableData.rows?.map((row, i) => (
                        <tr key={i} className="hover:bg-slate-100/50 transition-colors">
                          <td className="py-3 font-semibold text-navy-950">{row[0]}</td>
                          <td className="py-3 text-slate-600">{row[1]}</td>
                          <td className="py-3 text-slate-500 font-light italic">{row[2]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </FadeIn>
            )}
          </div>

          {/* Suite Hero Image */}
          <div className="lg:col-span-5 relative">
            <FadeIn direction="left" className="h-full rounded-3xl overflow-hidden shadow-xl border border-slate-200 min-h-[300px] relative">
              {image && (
                <img
                  src={image}
                  alt="Seven Seas Explorer Suite Interior"
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white z-10">
                <span className="font-sans text-[10px] text-ts-gold font-bold uppercase tracking-widest block mb-2">SUITE SPECIFICATIONS</span>
                <p className="font-serif text-sm text-slate-200 leading-relaxed font-light">
                  {data.suitesDescription}
                </p>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Categories Grid (3 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.categories?.map((cat, idx) => (
            <FadeIn key={idx} delay={idx * 0.05} className="bg-slate-50 border border-slate-200/50 rounded-2xl p-6 flex flex-col justify-between hover:shadow-md transition-all hover:-translate-y-1 duration-300">
              <div>
                <span className="font-sans text-[10px] text-ts-gold font-bold uppercase tracking-widest block mb-2">
                  {cat.size}
                </span>
                <h3 className="font-display text-lg font-bold text-navy-950 mb-3 font-serif">
                  {cat.name}
                </h3>
                <p className="font-sans text-xs text-slate-500 leading-relaxed font-light mb-4">
                  {cat.description}
                </p>
              </div>
              <div className="border-t border-slate-200/60 pt-4 mt-4">
                <span className="font-sans text-[10px] text-navy-950/70 font-semibold block uppercase mb-1">Key Features:</span>
                <p className="font-sans text-[11px] text-slate-400 font-light italic">{cat.features}</p>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ExplorerSuites;
