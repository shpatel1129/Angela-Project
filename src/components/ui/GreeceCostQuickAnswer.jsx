import React from 'react';
import FadeIn from './FadeIn';
import { Wallet, Sparkles, TrendingUp, AlertCircle } from 'lucide-react';

const GreeceCostQuickAnswer = ({ verdictData }) => {
  const { title, verdictText, levels = [], table = { headers: [], rows: [] } } = verdictData || {};

  return (
    <section id="quick-verdict" className="py-24 bg-gradient-to-b from-white to-slate-50 border-b border-slate-200">
      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-sans font-bold tracking-[0.2em] text-[#c9a15c] uppercase mb-4 block">
            COST OVERVIEW
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-light text-navy-950 mb-6">
            {title || "Greece Travel Cost Breakdown"}
          </h2>
          <p className="font-sans text-slate-600 font-light leading-relaxed text-lg">
            {verdictText}
          </p>
        </div>

        {/* Two-Column Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Side: Verdict Boxes */}
          <div className="lg:col-span-5 space-y-6">
            <FadeIn>
              <div className="bg-navy-950 text-white rounded-3xl p-8 shadow-xl relative overflow-hidden">
                <div className="absolute right-0 top-0 translate-x-8 -translate-y-8 opacity-5">
                  <Wallet size={200} />
                </div>
                <h3 className="font-display text-2xl font-light mb-6 flex items-center gap-3">
                  <AlertCircle className="text-[#c9a15c]" />
                  Average Daily Costs
                </h3>
                
                <div className="space-y-6">
                  {levels.map((level, idx) => (
                    <div key={idx} className="border-l-2 border-[#c9a15c]/40 pl-4 py-1">
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-display text-lg font-medium text-white">{level.name}</span>
                        <span className="text-xs font-sans uppercase tracking-wider text-[#c9a15c] bg-[#c9a15c]/10 px-2.5 py-0.5 rounded-full border border-[#c9a15c]/20 font-semibold">
                          {level.range}
                        </span>
                      </div>
                      <p className="text-xs font-sans font-light text-slate-300 leading-relaxed">{level.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right Side: Cost Table */}
          <div className="lg:col-span-7">
            <FadeIn>
              <div className="bg-white border border-slate-100 rounded-3xl shadow-xl p-8">
                <h3 className="font-display text-2xl font-light text-navy-950 mb-6 flex items-center gap-3">
                  <Sparkles className="text-[#c9a15c]" />
                  Greece Category Comparison
                </h3>
                
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse min-w-[500px]">
                    <thead>
                      <tr className="border-b border-slate-100 text-slate-400 font-sans text-xs uppercase tracking-wider">
                        {table.headers.map((h, i) => (
                          <th key={i} className={`pb-4 ${i === 0 ? "text-left" : "text-center"}`}>{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 font-sans text-sm text-slate-600">
                      {table.rows.map((row, idx) => (
                        <tr key={idx} className="hover:bg-slate-50 transition-colors">
                          <td className="py-4 font-medium text-navy-950">{row[0]}</td>
                          <td className="py-4 text-center">
                            <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold bg-slate-50 text-slate-600 border border-slate-200">
                              {row[1]}
                            </span>
                          </td>
                          <td className="py-4 text-center">
                            <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#c9a15c]/10 text-[#c9a15c] border border-[#c9a15c]/20">
                              {row[2]}
                            </span>
                          </td>
                          <td className="py-4 text-center">
                            <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold bg-navy-950 text-white border border-navy-950">
                              {row[3]}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </FadeIn>
          </div>

        </div>

      </div>
    </section>
  );
};

export default GreeceCostQuickAnswer;
