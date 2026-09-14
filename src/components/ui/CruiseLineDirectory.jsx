import React from 'react';
import FadeIn from './FadeIn';

const CruiseLineDirectory = ({ title, subtitle, items }) => {
  if (!items || items.length === 0) return null;

  return (
    <section className="py-24 bg-ice-50 relative border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-6">
        
        <FadeIn className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-gold-500 font-sans font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
            The Fleet
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

        <div className="space-y-16">
          {items.map((item, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <FadeIn key={idx} delay={0.1}>
                <div className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-100`}>
                  
                  {/* Image Section */}
                  <div className="w-full md:w-1/2 h-72 md:h-auto relative overflow-hidden group">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute top-6 left-6 bg-navy-950/80 backdrop-blur text-white font-sans text-xs uppercase tracking-widest px-4 py-2 rounded-full">
                      {item.subtitle || item.category}
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="w-full md:w-1/2 p-10 lg:p-14 flex flex-col justify-center">
                    <h3 className="font-display text-3xl text-navy-900 mb-6">
                      {item.title}
                    </h3>
                    <p className="font-sans text-slate-600 leading-relaxed mb-8">
                      {item.description}
                    </p>

                    {item.features && (
                      <div className="mt-auto">
                        <h4 className="font-sans text-xs font-bold text-navy-900 uppercase tracking-widest mb-4">
                          Signature Elements
                        </h4>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
                          {item.features.map((feature, i) => (
                            <li key={i} className="flex items-start">
                              <span className="text-gold-500 mr-3 mt-0.5 font-bold">✓</span>
                              <span className="font-sans text-sm text-slate-600">{feature}</span>
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

export default CruiseLineDirectory;
