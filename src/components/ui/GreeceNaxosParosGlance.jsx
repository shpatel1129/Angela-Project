import React from 'react';
import FadeIn from './FadeIn';

/**
 * GreeceNaxosParosGlance
 * Renders comparison matrix categories.
 */
const GreeceNaxosParosGlance = ({ glanceItems = [] }) => {
  return (
    <section id="naxos-paros-glance" className="py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-sans font-bold tracking-[0.2em] text-[#c9a15c] uppercase mb-4 block">
            COMPARISON MATRIX
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-light text-navy-950 mb-6">
            Naxos vs Paros at a Glance
          </h2>
          <p className="font-sans text-slate-600 font-light leading-relaxed">
            A quick category-by-category index to help you map your priorities.
          </p>
        </div>

        {/* Responsive Table */}
        <FadeIn>
          <div className="max-w-4xl mx-auto overflow-hidden bg-white border border-slate-100 rounded-2xl shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="bg-navy-950 text-white font-sans text-xs uppercase tracking-wider">
                    <th className="py-5 px-6 font-semibold">Category</th>
                    <th className="py-5 px-6 font-semibold">Naxos</th>
                    <th className="py-5 px-6 font-semibold">Paros</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-sans text-sm text-slate-600">
                  {glanceItems.map((item, idx) => (
                    <tr key={idx} className="hover:bg-slate-50 transition-colors">
                      <td className="py-4 px-6 font-medium text-navy-950">{item.category}</td>
                      <td className="py-4 px-6 font-light">{item.naxos}</td>
                      <td className="py-4 px-6 font-light">{item.paros}</td>
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

export default GreeceNaxosParosGlance;
