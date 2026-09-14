import React from 'react';
import FadeIn from './FadeIn';

const ItineraryCards = ({ title, items }) => {
  if (!items || items.length === 0) return null;

  return (
    <section className="py-24 bg-ice-50 relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-gold-500 font-sans font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
            Curated Journeys
          </span>
          <h2 className="text-4xl md:text-5xl font-display text-navy-950 mb-4">
            {title}
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {items.map((item, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 flex flex-col h-full group hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full shadow-sm">
                    <span className="font-sans text-xs font-bold text-navy-900 tracking-wider uppercase">
                      {item.duration}
                    </span>
                  </div>
                </div>
                
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="font-display text-2xl text-navy-900 mb-4">
                    {item.title}
                  </h3>
                  <p className="font-sans text-slate-600 text-sm leading-relaxed mb-6 flex-1">
                    {item.description}
                  </p>
                  
                  {item.highlights && (
                    <div className="border-t border-slate-100 pt-6 mt-auto">
                      <h4 className="font-sans text-xs font-bold text-navy-900 uppercase tracking-widest mb-4">
                        Key Highlights
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {item.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-start">
                            <svg className="w-4 h-4 text-gold-500 mr-2 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                            <span className="font-sans text-xs text-slate-500 leading-tight">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ItineraryCards;
