import React from 'react';
import FadeIn from './FadeIn';
import MasterImage from './MasterImage';

const ThreeColumnGrid = ({ title, subtitle, items }) => {
  if (!items || items.length === 0) return null;

  return (
    <section className="w-full py-16">
      <div className="max-w-[1280px] mx-auto px-6">
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-4xl md:text-5xl text-navy-950 mb-4">{title}</h2>
          <div className="w-12 h-0.5 bg-navy-800 mx-auto mt-4 mb-6"></div>
          {subtitle && (
            <p className="font-sans text-lg text-slate-500">{subtitle}</p>
          )}
        </FadeIn>

        {(() => {
          const n = items.length;
          const remainder = n % 3;
          // For items that start the last partial row, offset to center them
          const lastRowStart = n - remainder; // index of first item in last partial row

          return (
            <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
              {items.map((item, idx) => {
                // Default: each item spans 2 columns (out of 6), effectively taking 1/3 of the row
                let colClass = 'md:col-span-2';
                
                // If 1 item is orphaned, center it by starting at column 3 (uses cols 3-4 out of 6)
                if (remainder === 1 && idx === lastRowStart) colClass = 'md:col-span-2 md:col-start-3';
                
                // If 2 items are orphaned, center them by starting the first one at column 2 (uses cols 2-3, next uses 4-5)
                if (remainder === 2 && idx === lastRowStart) colClass = 'md:col-span-2 md:col-start-2';

                return (
                  <FadeIn key={idx} delay={idx * 0.1} className={`h-full ${colClass}`}>
                    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden h-full flex flex-col group hover:shadow-md transition-shadow">
                      
                      {/* Image */}
                      <div className="h-48 bg-slate-200 relative overflow-hidden flex-shrink-0">
                        {item.image ? (
                          <MasterImage 
                            src={item.image} 
                            alt={item.title}
                            className="w-full h-full object-cover absolute inset-0"
                          />
                        ) : (
                          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 text-slate-500 font-sans tracking-widest text-xs uppercase text-center px-4 border-b border-dashed border-slate-300">
                            <span className="font-bold text-slate-400 tracking-[0.2em] mb-1 text-[10px]">IMAGE PLACEHOLDER</span>
                            <span className="font-display text-sm text-slate-600 font-normal">{item.title}</span>
                          </div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/30 to-transparent"></div>
                      </div>

                      <div className="p-8 flex flex-col flex-grow">
                        {/* Category Label */}
                        {item.category && (
                          <span className="font-sans text-xs font-bold text-slate-400 uppercase tracking-[0.15em] mb-3 block">
                            {item.category}
                          </span>
                        )}
                        
                        <h3 className="font-display text-2xl text-navy-900 mb-4 italic">{item.title}</h3>
                        
                        {item.description && (
                          <p className="font-sans text-slate-500 mb-6 text-sm leading-relaxed">{item.description}</p>
                        )}

                        {/* Stats Grid (New distinct structure for Specs/Ships) */}
                        {item.stats && (
                          <div className="mt-auto bg-slate-50/80 rounded-xl p-5 border border-slate-100 shadow-sm">
                            <div className="grid grid-cols-2 gap-y-5 gap-x-4">
                              {item.stats.map((stat, i) => (
                                <div key={i} className="flex flex-col">
                                  <span className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.2em] mb-1.5">{stat.label}</span>
                                  <span className="font-display text-navy-950 text-[1.35rem] leading-none">{stat.value}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Bullet Points */}
                        {item.features && (
                          <ul className="space-y-3 mb-8 flex-grow">
                            {item.features.map((feature, i) => (
                              <li key={i} className="font-sans text-sm text-slate-600 flex items-start gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-navy-700 mt-2 flex-shrink-0"></span> 
                                {feature}
                              </li>
                            ))}
                          </ul>
                        )}

                        {/* Highlight Box */}
                        {item.highlight && (
                          <div className="mt-auto bg-ice-50 border-l-2 border-navy-400 p-4 rounded-r-lg">
                            <p className="font-sans text-sm italic text-slate-500">
                              {item.highlight}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          );
        })()}
      </div>
    </section>
  );
};

export default ThreeColumnGrid;
