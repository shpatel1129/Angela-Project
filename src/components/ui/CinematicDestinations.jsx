import React from 'react';
import FadeIn from './FadeIn';

const CinematicDestinations = ({ title, subtitle, items }) => {
  if (!items || items.length === 0) return null;

  return (
    <section className="bg-navy-950 py-24 relative">
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Sticky Left Column */}
          <div className="lg:w-1/3 relative">
            <div className="lg:sticky lg:top-32">
              <FadeIn>
                <div className="w-16 h-1 bg-gold-400 mb-8"></div>
                <h2 className="font-display text-4xl md:text-5xl text-white mb-6 leading-tight">
                  {title}
                </h2>
                {subtitle && (
                  <p className="font-sans text-lg text-ice-100 leading-relaxed max-w-md">
                    {subtitle}
                  </p>
                )}
              </FadeIn>
            </div>
          </div>

          {/* Scrolling Right Column */}
          <div className="lg:w-2/3 space-y-12 md:space-y-24">
            {items.map((item, idx) => (
              <FadeIn key={idx} delay={0.2}>
                <div className="group relative rounded-3xl overflow-hidden aspect-[4/3] md:aspect-[16/9] shadow-2xl border border-white/10">
                  {/* Background Image */}
                  <div className="absolute inset-0 bg-navy-900">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000 ease-in-out"
                    />
                  </div>
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent opacity-90"></div>

                  {/* Content Box */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                    <h3 className="font-display text-3xl md:text-4xl text-white mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      {item.title}
                    </h3>
                    <p className="font-sans text-ice-100 leading-relaxed max-w-2xl opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                      {item.description}
                    </p>
                    
                    {item.features && item.features.length > 0 && (
                      <div className="flex flex-wrap gap-3 mt-6 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-200">
                        {item.features.map((feature, fIdx) => (
                          <span key={fIdx} className="px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-xs uppercase tracking-widest text-gold-400 font-semibold">
                            {feature}
                          </span>
                        ))}
                      </div>
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

export default CinematicDestinations;
