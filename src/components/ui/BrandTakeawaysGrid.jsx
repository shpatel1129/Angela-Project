import React from 'react';
import FadeIn from './FadeIn';

const BrandTakeawaysGrid = ({ title, subtitle, items = [] }) => {
  if (!items || items.length === 0) return null;

  return (
    <section className="w-full py-16 bg-slate-50 border-t border-slate-100">
      <div className="max-w-[1200px] mx-auto px-6">
        <FadeIn className="text-center mb-12">
          {subtitle && (
            <p className="font-sans text-xs font-bold uppercase tracking-[0.25em] text-gold-400 mb-3">
              {subtitle}
            </p>
          )}
          <h3 className="font-display text-3xl md:text-4xl text-navy-950">{title}</h3>
          <div className="w-12 h-0.5 bg-navy-800 mx-auto mt-4" />
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, idx) => {
            const itemTitle = item.title || item.name || (Array.isArray(item) ? item[0] : `Point ${idx + 1}`);
            const itemDesc = item.description || item.text || (Array.isArray(item) ? item[1] : item);

            return (
              <FadeIn key={idx} delay={idx * 0.05} className="h-full">
                <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
                  <h4 className="font-display text-xl text-navy-900 mb-3 font-semibold">{itemTitle}</h4>
                  <p className="font-sans text-slate-600 text-sm leading-relaxed flex-grow">{itemDesc}</p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BrandTakeawaysGrid;
