import React from 'react';
import { Layers } from 'lucide-react';

const CostComparisonMatrix = ({ title, subtitle, items }) => {
  return (
    <section className="py-20 bg-ice-50 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-display text-navy-950 mb-6">
            {title}
          </h2>
          <div className="w-16 h-0.5 bg-gold-400 mx-auto mb-6"></div>
          <p className="text-base md:text-lg text-slate-600">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-lg hover:border-gold-400/40 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-ice-100 text-navy-900 rounded-full flex items-center justify-center mb-6 group-hover:bg-navy-950 group-hover:text-gold-400 transition-colors">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-display text-navy-950 mb-2">{item.category}</h3>
              <p className="text-2xl text-gold-600 font-semibold mb-4">{item.cost}</p>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                {item.description}
              </p>
              <div className="pt-4 border-t border-slate-100">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Luxury Priority</p>
                <p className="text-sm text-navy-900 font-medium">{item.priority}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CostComparisonMatrix;
