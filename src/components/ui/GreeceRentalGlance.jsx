import React from 'react';
import FadeIn from './FadeIn';

/**
 * GreeceRentalGlance
 * Renders the transportation index matrix.
 */
const GreeceRentalGlance = ({ glanceItems = [] }) => {
  return (
    <section id="rental-glance" className="py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-sans font-bold tracking-[0.2em] text-[#c9a15c] uppercase mb-4 block">
            DESTINATION MATRIX
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-light text-navy-950 mb-6">
            Greece Transportation at a Glance
          </h2>
          <p className="font-sans text-slate-600 font-light leading-relaxed">
            A quick-reference guide indicating where a rental car is useful and the recommended luxury transit approach.
          </p>
        </div>

        {/* Responsive Table */}
        <FadeIn>
          <div className="max-w-4xl mx-auto overflow-hidden bg-white border border-slate-100 rounded-2xl shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="bg-navy-950 text-white font-sans text-xs uppercase tracking-wider">
                    <th className="py-5 px-6 font-semibold">Destination</th>
                    <th className="py-5 px-6 font-semibold">Do You Need a Car?</th>
                    <th className="py-5 px-6 font-semibold">Best Luxury Approach</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-sans text-sm text-slate-600">
                  {glanceItems.map((item, idx) => (
                    <tr key={idx} className="hover:bg-slate-50 transition-colors">
                      <td className="py-4 px-6 font-medium text-navy-950">{item.destination}</td>
                      <td className="py-4 px-6">
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                          item.needCar.includes('no') || item.needCar.includes('No')
                            ? 'bg-slate-100 text-navy-950 border border-slate-200'
                            : item.needCar.includes('useful') || item.needCar.includes('Useful')
                            ? 'bg-[#c9a15c]/10 text-[#c9a15c] border border-[#c9a15c]/20'
                            : 'bg-[#c9a15c]/5 text-[#c9a15c] border border-[#c9a15c]/10'
                        }`}>
                          {item.needCar}
                        </span>
                      </td>
                      <td className="py-4 px-6 font-light">{item.approach}</td>
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

export default GreeceRentalGlance;
