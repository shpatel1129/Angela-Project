import React from 'react';
import FadeIn from './FadeIn';

const CostAndInclusionsPanel = ({ title, subtitle, items }) => {
  if (!items || items.length === 0) return null;

  return (
    <section className="py-24 bg-ice-50 relative border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-6">
        
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-navy-900 font-sans font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
            Investment Guide
          </span>
          <h2 className="text-4xl md:text-5xl font-display text-navy-950 mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="font-sans text-lg text-slate-500">
              {subtitle}
            </p>
          )}
        </FadeIn>

        <div className={`grid grid-cols-1 ${items.length === 2 ? 'md:grid-cols-2 max-w-4xl mx-auto' : 'md:grid-cols-3'} gap-8`}>
          {items.map((item, idx) => {
            const inclusionsList = item.inclusions || item.points || item.features || item.items || [];
            const isHighlighted = item.isPopular || item.badge || (idx === 1 && item.tier && items.length === 3);
            const badgeLabel = item.badge || (isHighlighted ? "Most Popular" : null);

            return (
              <FadeIn key={idx} delay={idx * 0.1}>
                <div className={`h-full bg-white rounded-2xl p-8 border flex flex-col justify-between ${
                  isHighlighted ? 'border-gold-500 shadow-2xl relative transform md:-translate-y-4' : 'border-slate-200 shadow-lg'
                }`}>
                  
                  {badgeLabel && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gold-500 text-white font-sans text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-md whitespace-nowrap">
                      {badgeLabel}
                    </div>
                  )}

                  <div>
                    <div className="text-center mb-8 pb-8 border-b border-slate-100">
                      <h3 className="font-display text-2xl text-navy-900 mb-4">
                        {item.tier || item.title}
                      </h3>
                      {(item.price || item.subtitle) && (
                        <div className="text-gold-500 font-sans font-medium text-lg">
                          {item.price || item.subtitle}
                        </div>
                      )}
                      {item.category ? (
                        <div className="text-slate-400 font-sans text-xs uppercase tracking-wider mt-2">
                          {item.category}
                        </div>
                      ) : item.price && item.price.includes('$') ? (
                        <div className="text-slate-400 font-sans text-xs uppercase tracking-wider mt-2">Per Person</div>
                      ) : null}
                      {item.description && (
                        <p className="text-slate-500 font-sans text-xs mt-3 leading-relaxed">
                          {item.description}
                        </p>
                      )}
                    </div>

                    {inclusionsList.length > 0 && (
                      <ul className="space-y-4">
                        {inclusionsList.map((inclusion, i) => (
                          <li key={i} className="flex items-start text-sm font-sans text-slate-600">
                            <svg className="w-5 h-5 text-gold-500 mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="leading-tight">{inclusion}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                  
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CostAndInclusionsPanel;
