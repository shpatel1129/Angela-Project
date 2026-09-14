import React from 'react';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

const SmartSpendingSplit = ({ title, subtitle, spendMore, spendLess }) => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-display text-navy-950 mb-6">
            {title}
          </h2>
          <div className="w-16 h-0.5 bg-gold-400 mx-auto mb-6"></div>
          <p className="text-base md:text-lg text-slate-600">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Spend More Column */}
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-lg border border-slate-100 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <ArrowUpRight className="w-24 h-24 text-gold-500" />
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl font-display text-navy-950 mb-6 flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-gold-50 flex items-center justify-center text-gold-600">
                  <ArrowUpRight className="w-5 h-5" />
                </span>
                Where to Spend More
              </h3>
              <ul className="space-y-6">
                {spendMore.map((item, idx) => (
                  <li key={idx}>
                    <h4 className="text-lg font-semibold text-navy-900 mb-2">{item.title}</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Spend Less Column */}
          <div className="bg-navy-950 rounded-3xl p-8 md:p-10 shadow-lg relative overflow-hidden group text-white">
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <ArrowDownRight className="w-24 h-24 text-gold-400" />
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl font-display text-white mb-6 flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-navy-900 flex items-center justify-center text-gold-400 border border-slate-800">
                  <ArrowDownRight className="w-5 h-5" />
                </span>
                Where NOT to Overspend
              </h3>
              <ul className="space-y-6">
                {spendLess.map((item, idx) => (
                  <li key={idx}>
                    <h4 className="text-lg font-semibold text-gold-400 mb-2">{item.title}</h4>
                    <p className="text-slate-300 text-sm leading-relaxed">{item.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartSpendingSplit;
