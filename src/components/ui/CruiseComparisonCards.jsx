import React from 'react';
import FadeIn from './FadeIn';

const CruiseComparisonCards = ({ comparison }) => {
  if (!comparison || !comparison.rows) return null;

  return (
    <section className="py-24 bg-ice-50 relative">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="uppercase tracking-[0.2em] text-gold-400 text-xs font-bold mb-4 block">Compare the Best</span>
            <h2 className="font-display text-4xl md:text-5xl text-navy-950 mb-6">{comparison.title}</h2>
            <div className="w-24 h-1 bg-gold-400 mx-auto"></div>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {comparison.rows.map((row, idx) => {
            const isOrphaned = comparison.rows.length % 3 === 1 && idx === comparison.rows.length - 1;
            return (
            <FadeIn key={idx} className={`${isOrphaned ? 'lg:col-span-3 lg:max-w-lg lg:mx-auto w-full' : ''} h-full`}>
              <div className="bg-white rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-ice-200 overflow-hidden hover:shadow-[0_15px_40px_rgba(0,0,0,0.1)] transition-all duration-300 h-full flex flex-col group">
                {/* Image Header */}
                <div className="relative h-48 md:h-56">
                  {/* Clipped image container */}
                  <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/20 to-transparent z-10 group-hover:from-navy-950/80 transition-colors duration-300"></div>
                    <img 
                      src={row.image}
                      alt={row.name}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  
                  {/* Overlay Badge */}
                  <div className="absolute top-4 right-4 z-20">
                    <span className="inline-block px-3 py-1 bg-gold-400 text-navy-950 text-[10px] uppercase font-bold tracking-widest rounded-sm shadow-md">
                      {row.level}
                    </span>
                  </div>

                  {/* Rating Bubble */}
                  <div className="absolute -bottom-6 right-6 z-30 bg-white rounded-full shadow-lg border border-ice-200 flex flex-col items-center justify-center w-16 h-16 transform transition-transform group-hover:-translate-y-1">
                    <span className="font-display text-lg text-navy-900 font-bold leading-none">{row.rating.split('/')[0]}</span>
                    <span className="text-[10px] text-slate-500 font-bold uppercase mt-0.5">/10</span>
                  </div>
                  
                  <div className="absolute bottom-4 left-6 z-20 pr-24">
                     <h3 className="font-display text-3xl text-white drop-shadow-md">{row.name}</h3>
                  </div>
                </div>
                
                {/* Ratings Grid */}
                <div className="p-8 flex-grow">
                  <div className="grid grid-cols-2 gap-y-5 gap-x-4 mb-8 pb-8 border-b border-ice-100">
                    <div className="flex flex-col">
                      <span className="text-[11px] text-slate-500 uppercase tracking-wider mb-1 font-semibold">Dining</span>
                      <div className="flex text-gold-400 text-sm">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <span key={i} className={i < row.dining ? "opacity-100" : "opacity-30"}>★</span>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[11px] text-slate-500 uppercase tracking-wider mb-1 font-semibold">Excursions</span>
                      <div className="flex text-gold-400 text-sm">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <span key={i} className={i < row.excursions ? "opacity-100" : "opacity-30"}>★</span>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[11px] text-slate-500 uppercase tracking-wider mb-1 font-semibold">Cabins</span>
                      <div className="flex text-gold-400 text-sm">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <span key={i} className={i < row.cabins ? "opacity-100" : "opacity-30"}>★</span>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[11px] text-slate-500 uppercase tracking-wider mb-1 font-semibold">Service</span>
                      <div className="flex text-gold-400 text-sm">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <span key={i} className={i < row.service ? "opacity-100" : "opacity-30"}>★</span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Best For */}
                  {row.bestFor && row.bestFor.length > 0 && (
                    <div className="mb-6">
                      <h4 className="text-[13px] font-bold text-navy-900 uppercase tracking-wider mb-3 flex items-center">
                        <span className="text-teal-600 mr-2 text-lg leading-none">✓</span> Best For
                      </h4>
                      <ul className="text-[14px] text-slate-600 space-y-2">
                        {row.bestFor.map((item, i) => (
                          <li key={i} className="flex items-start">
                             <span className="text-ice-300 mr-2 mt-1 text-xs">•</span>
                             <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Not Ideal For */}
                  {row.notIdealFor && row.notIdealFor.length > 0 && (
                    <div>
                      <h4 className="text-[13px] font-bold text-navy-900 uppercase tracking-wider mb-3 flex items-center">
                        <span className="text-red-400 mr-2 text-lg leading-none">✕</span> Not Ideal For
                      </h4>
                      <ul className="text-[14px] text-slate-600 space-y-2">
                        {row.notIdealFor.map((item, i) => (
                          <li key={i} className="flex items-start">
                             <span className="text-ice-300 mr-2 mt-1 text-xs">•</span>
                             <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
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

export default CruiseComparisonCards;

