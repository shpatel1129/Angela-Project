import React from 'react';
import FadeIn from './FadeIn';

const ValueShowcase = ({ title, subtitle, items }) => {
  if (!items || items.length === 0) return null;

  return (
    <section className="py-24 bg-navy-950 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-navy-900/50 via-navy-950 to-navy-950"></div>
      
      <div className="max-w-[1300px] mx-auto px-6 relative z-10">
        <FadeIn>
          <div className="text-center mb-16 md:mb-24">
            {subtitle && (
              <span className="font-sans text-ts-gold uppercase tracking-widest text-sm font-bold mb-4 block">
                {subtitle}
              </span>
            )}
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-6">
              {title}
            </h2>
            <div className="w-24 h-[1px] bg-ts-gold/50 mx-auto"></div>
          </div>
        </FadeIn>

        <div className="space-y-24 lg:space-y-32">
          {items.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={index} className={`flex flex-col gap-12 lg:gap-20 ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center`}>
                
                {/* Image Side - Polaroid Style */}
                <div className="w-full lg:w-1/2 flex justify-center">
                  <FadeIn delay={0.2} direction={isEven ? 'left' : 'right'} className="w-full px-4 lg:px-8">
                    <div className={`relative ${isEven ? 'rotate-[-2deg]' : 'rotate-[2deg]'} rounded-sm overflow-hidden shadow-2xl border-[12px] md:border-[16px] border-white bg-white hover:rotate-0 transition-transform duration-500 ease-out z-20 w-full group`}>
                      <div className="aspect-[4/3] relative bg-slate-200">
                        <img 
                          src={item.image} 
                          alt={item.title}
                          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                        />
                      </div>
                      {item.imageCaption && (
                        <div className="pt-5 pb-3 text-center bg-white border-t-2 border-slate-100">
                          <h3 className="font-display text-2xl md:text-3xl text-navy-950 mb-1">
                            {item.imageCaption}
                          </h3>
                        </div>
                      )}
                    </div>
                  </FadeIn>
                </div>

                {/* Content Side */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                  <FadeIn delay={0.3} direction={isEven ? 'right' : 'left'}>
                    <h3 className="font-display text-3xl md:text-4xl text-white mb-6">
                      {item.title}
                    </h3>
                    <p className="font-sans text-ice-100/80 text-lg leading-relaxed mb-8">
                      {item.description}
                    </p>

                    {item.features && item.features.length > 0 && (
                      <ul className="space-y-4">
                        {item.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <div className="w-2 h-2 rounded-full bg-ts-gold shadow-[0_0_8px_rgba(212,175,55,0.8)] flex-shrink-0 mt-2 mr-4"></div>
                            <span className="font-sans text-ice-100 leading-relaxed">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </FadeIn>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ValueShowcase;
