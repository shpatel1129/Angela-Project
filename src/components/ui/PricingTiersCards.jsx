import React from 'react';
import FadeIn from './FadeIn';

const PricingTiersCards = ({ title, subtitle, items, theme = 'light' }) => {
  if (!items || items.length === 0) return null;

  const isDark = theme === 'dark';

  return (
    <section className={`w-full py-24 ${isDark ? 'bg-navy-950 text-white' : 'bg-ice-50 text-navy-950'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {(title || subtitle) && (
          <div className="text-center mb-16 max-w-3xl mx-auto">
            {subtitle && (
              <span className="font-sans text-xs font-bold tracking-[0.2em] uppercase text-gold-500 mb-4 block">
                {subtitle}
              </span>
            )}
            {title && (
              <h2 className="font-display text-4xl md:text-5xl mb-6">
                {title}
              </h2>
            )}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, idx) => {
            // Center the last item if orphaned in a 2-col or 3-col grid
            const isOrphaned = items.length % 3 !== 0 && idx === items.length - 1;
            const spanClass = isOrphaned && items.length % 3 === 1 ? 'lg:col-span-3 lg:w-1/3 lg:mx-auto' :
                              isOrphaned && items.length % 3 === 2 ? 'lg:col-span-3 lg:w-2/3 lg:mx-auto' : '';
                              
            return (
              <FadeIn 
                key={idx} 
                delay={idx * 0.1} 
                className={`flex flex-col h-full bg-white text-navy-950 border border-slate-200 p-8 shadow-sm hover:shadow-xl transition-all duration-300 rounded-[12px] group relative overflow-hidden ${spanClass}`}
              >
                {/* Decorative background element */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold-400/5 rounded-bl-[100px] -z-0 transition-transform group-hover:scale-110 duration-500" />
                
                <div className="flex-1 flex flex-col relative z-10">
                  <div className="mb-4">
                    <h3 className="font-display text-2xl group-hover:text-gold-600 transition-colors">
                      {item.name}
                    </h3>
                  </div>
                  
                  <div className="mb-6 pb-6 border-b border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="font-sans text-xs uppercase tracking-wider text-slate-500 block mb-1">Starting at</span>
                      <div className="font-display text-3xl text-navy-900">{item.price}</div>
                    </div>
                    {item.nights && (
                      <div className="bg-pill-50 text-navy-800 font-sans text-xs px-4 py-1.5 rounded-full whitespace-nowrap border border-navy-100">
                        {item.nights}
                      </div>
                    )}
                  </div>
                  
                  <p className="font-sans text-slate-600 leading-relaxed mb-6">
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

export default PricingTiersCards;
