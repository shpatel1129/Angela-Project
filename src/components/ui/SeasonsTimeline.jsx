import React from 'react';
import FadeIn from './FadeIn';

const SeasonsTimeline = ({ title, subtitle, items }) => {
  if (!items || items.length === 0) return null;

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        
        <FadeIn className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-gold-500 font-sans font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
            Time Your Journey
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

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-slate-200 -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10">
            {items.map((item, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <div className="flex flex-col items-center group">
                  
                  {/* Image Circle */}
                  <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-xl mb-8 relative z-10 group-hover:border-gold-300 transition-colors duration-500 bg-white">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <h3 className="font-display text-2xl text-navy-900 mb-2">
                      {item.title}
                    </h3>
                    <div className="font-sans text-xs font-bold uppercase tracking-widest text-gold-500 mb-4">
                      {item.time || item.category}
                    </div>
                    <p className="font-sans text-sm text-slate-600 leading-relaxed mb-6">
                      {item.description}
                    </p>

                    {item.features && (
                      <ul className="space-y-2 inline-block text-left">
                        {item.features.map((feature, i) => (
                          <li key={i} className="flex items-center text-xs text-slate-500 font-sans">
                            <span className="w-1.5 h-1.5 rounded-full bg-gold-400 mr-2 shrink-0"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                  
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default SeasonsTimeline;
