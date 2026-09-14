import React from 'react';
import FadeIn from './FadeIn';

/**
 * GreeceSantoriniMykonosGlance
 * Renders the comparison table in a beautiful, responsive layout.
 */
const GreeceSantoriniMykonosGlance = ({ glanceItems = [] }) => {
  return (
    <section id="santorini-mykonos-glance" className="py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-sans font-bold tracking-[0.2em] text-blue-600 uppercase mb-4 block">
            COMPARISON MATRIX
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-light text-navy-950 mb-6">
            Santorini vs Mykonos at a Glance
          </h2>
          <p className="font-sans text-slate-600 font-light leading-relaxed">
            A quick-reference guide to help you decide based on your specific vacation priorities.
          </p>
        </div>

        {/* Comparison Table */}
        <FadeIn>
          <div className="max-w-3xl mx-auto overflow-hidden bg-white border border-slate-100 rounded-2xl shadow-xl">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-navy-950 text-white font-sans text-xs uppercase tracking-wider">
                  <th className="py-5 px-6 font-semibold">If you want...</th>
                  <th className="py-5 px-6 font-semibold text-right">Choose</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-sans text-sm text-slate-600">
                {glanceItems.map((item, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors">
                    <td className="py-4 px-6 font-light">{item.question}</td>
                    <td className="py-4 px-6 text-right font-medium text-navy-950">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                        item.answer.includes('Santorini') 
                          ? 'bg-amber-50 text-amber-700 border border-amber-100' 
                          : item.answer.includes('Mykonos')
                          ? 'bg-blue-50 text-blue-700 border border-blue-100'
                          : 'bg-emerald-50 text-emerald-700 border border-emerald-100'
                      }`}>
                        {item.answer}
                      </span>
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

export default GreeceSantoriniMykonosGlance;
