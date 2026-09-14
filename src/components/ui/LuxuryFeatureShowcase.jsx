import React from 'react';
import FadeIn from './FadeIn';

const LuxuryFeatureShowcase = ({ title, subtitle, items }) => {
  if (!items || items.length === 0) return null;

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-ice-50 rounded-full blur-[100px] opacity-60 -z-10 translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[50vw] h-[50vw] bg-ice-50 rounded-full blur-[120px] opacity-50 -z-10 -translate-x-1/3 translate-y-1/3"></div>

      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-24 relative z-10">
          <FadeIn>
            {subtitle && (
              <span className="font-sans text-gold-600 uppercase tracking-[0.2em] text-sm font-bold block mb-4">
                {subtitle}
              </span>
            )}
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-navy-950 mb-6 relative inline-block">
              {title}
            </h2>
            <div className="w-24 h-0.5 bg-gold-500 mx-auto mt-2"></div>
          </FadeIn>
        </div>

        {/* Alternating Features */}
        <div className="space-y-32">
          {items.map((item, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <div 
                key={idx} 
                className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${
                  isEven ? '' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Image Side */}
                <div className="w-full lg:w-1/2 relative group">
                  <FadeIn direction={isEven ? 'right' : 'left'} delay={0.1}>
                    <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl transition-transform duration-700 ease-out group-hover:scale-[1.02]">
                      {item.image ? (
                        <img 
                          src={item.image} 
                          alt={item.title} 
                          className="w-full h-auto object-cover aspect-[4/3]"
                          loading="lazy"
                        />
                      ) : (
                        <div className="w-full h-auto aspect-[4/3] bg-ice-100 flex items-center justify-center">
                          <span className="text-navy-300 font-sans">Image Pending</span>
                        </div>
                      )}
                    </div>
                    {/* Decorative Offset Box */}
                    <div className={`absolute top-6 bottom-6 w-full border border-gold-300/40 -z-10 rounded-lg transition-all duration-700 group-hover:border-gold-400 ${
                      isEven ? '-right-6' : '-left-6'
                    }`}></div>
                  </FadeIn>
                </div>

                {/* Text Side */}
                <div className="w-full lg:w-1/2 relative z-10">
                  <FadeIn direction="up" delay={0.3}>
                    <div className="pl-0 lg:px-8">
                      {/* Number Indicator */}
                      <span className="font-display text-6xl md:text-8xl text-ice-200 font-bold leading-none block mb-[-20px] md:mb-[-30px] opacity-50 relative z-[-1]">
                        0{idx + 1}
                      </span>
                      
                      {item.subtitle && (
                        <h4 className="font-sans text-gold-600 uppercase tracking-widest text-sm font-semibold mb-3">
                          {item.subtitle}
                        </h4>
                      )}
                      
                      <h3 className="font-display text-3xl md:text-4xl text-navy-950 mb-6 leading-tight">
                        {item.title}
                      </h3>
                      
                      <div className="w-12 h-1 bg-ice-300 mb-6"></div>
                      
                      <p className="font-sans text-navy-700 leading-relaxed text-lg">
                        {item.description}
                      </p>
                      
                      {item.features && item.features.length > 0 && (
                        <ul className="mt-8 space-y-3">
                          {item.features.map((feature, fIdx) => (
                            <li key={fIdx} className="flex items-start text-navy-700 font-sans">
                              <span className="text-gold-500 mr-3 mt-1">✦</span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
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

export default LuxuryFeatureShowcase;
