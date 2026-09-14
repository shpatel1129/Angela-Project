import React from 'react';
import FadeIn from './FadeIn';

const HierarchicalGrid = ({ title, subtitle, items }) => {
  if (!items || items.length === 0) return null;

  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <FadeIn className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl text-navy-950 mb-6">{title}</h2>
          <div className="w-12 h-0.5 bg-navy-800 mx-auto mb-6"></div>
          {subtitle && (
            <p className="font-sans text-lg text-slate-600 max-w-2xl mx-auto">{subtitle}</p>
          )}
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[300px] gap-6">
          {items.map((item, idx) => {
            let spanClass = "md:col-span-1 md:row-span-1";
            if (idx === 0) {
              spanClass = "md:col-span-2 md:row-span-2";
            } else {
              const remainingItems = items.length - 3;
              if (remainingItems > 0) {
                const remainder = remainingItems % 3;
                if (remainder === 1 && idx === items.length - 1) {
                  spanClass = "md:col-span-3 md:row-span-1";
                } else if (remainder === 2 && idx === items.length - 2) {
                  spanClass = "md:col-span-2 md:row-span-1";
                }
              }
            }
            
            return (
              <FadeIn key={idx} delay={idx * 0.1} className={`relative rounded-xl overflow-hidden shadow-md group ${spanClass}`}>
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-navy-900 to-navy-950" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/30 to-transparent"></div>
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <h3 className={`font-display text-white ${idx === 0 ? 'text-3xl md:text-4xl mb-4' : 'text-2xl mb-2'}`}>
                    {item.title}
                  </h3>
                  <p className={`font-sans text-white/90 ${idx === 0 ? 'text-lg line-clamp-3' : 'text-sm line-clamp-2'}`}>
                    {item.description}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HierarchicalGrid;
