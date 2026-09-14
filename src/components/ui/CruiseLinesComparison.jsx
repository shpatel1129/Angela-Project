import React from 'react';
import FadeIn from './FadeIn';

const CruiseLinesComparison = ({ title, subtitle, items }) => {
  if (!items || items.length === 0) return null;

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-6xl mx-auto px-6">
        
        <FadeIn className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-gold-500 font-sans font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
            Expert Analysis
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

        <div className="space-y-16 lg:space-y-24">
          {items.map((item, idx) => {
            const isEven = idx % 2 === 1;
            
            return (
              <FadeIn key={idx} delay={0.1}>
                <div className={`flex flex-col lg:flex-row gap-8 lg:gap-16 items-center ${isEven ? 'lg:flex-row-reverse' : ''}`}>
                  
                  {/* Image Column */}
                  <div className="w-full lg:w-1/2">
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl group">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
                      />
                      <div className="absolute inset-0 bg-navy-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
                      
                      {/* Floating Category Tag */}
                      <div className={`absolute top-6 ${isEven ? 'right-6' : 'left-6'} bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg`}>
                        <span className="font-sans text-xs font-bold text-navy-900 uppercase tracking-widest">
                          {item.category}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Text Column */}
                  <div className="w-full lg:w-1/2 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="w-12 h-[1px] bg-gold-400"></span>
                      <span className="font-display text-4xl text-navy-900 opacity-20">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                    </div>
                    
                    <h3 className="font-display text-3xl md:text-4xl text-navy-950 mb-6">
                      {item.title}
                    </h3>
                    
                    <p className="font-sans text-slate-600 text-lg leading-relaxed mb-8">
                      {item.description}
                    </p>
                    
                    {item.features && (
                      <div className="bg-ice-50 p-6 rounded-xl border border-slate-100">
                        <h4 className="font-sans text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
                          Why We Love It
                        </h4>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {item.features.map((feature, i) => (
                            <li key={i} className="font-sans text-sm text-navy-800 flex items-start gap-3">
                              <svg className="w-5 h-5 text-gold-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                              <span className="leading-tight">{feature}</span>
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

export default CruiseLinesComparison;
