import React from 'react';
import FadeIn from './FadeIn';

const CountriesGrid = ({ title, subtitle, items }) => {
  if (!items || items.length === 0) return null;

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-navy-900 font-sans font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
            Regional Highlights
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <div className="group relative h-[450px] overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/40 to-transparent transition-opacity duration-500"></div>
                
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <h3 className="font-display text-2xl text-white mb-2 transform transition-transform duration-500 group-hover:-translate-y-2">
                    {item.title}
                  </h3>
                  <div className="opacity-0 max-h-0 overflow-hidden transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:max-h-[200px]">
                    <p className="font-sans text-sm text-slate-200 mb-4 leading-relaxed">
                      {item.description}
                    </p>
                    {item.features && (
                      <ul className="space-y-1">
                        {item.features.slice(0, 3).map((feature, i) => (
                          <li key={i} className="font-sans text-xs text-gold-400 flex items-center">
                            <span className="w-1.5 h-1.5 rounded-full bg-gold-500 mr-2"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CountriesGrid;
