import React from 'react';
import FadeIn from './FadeIn';
import MasterImage from './MasterImage';

const LuxuryZigZagShowcase = ({ title, subtitle, items, images = [] }) => {
  if (!items || items.length === 0) return null;

  return (
    <section className="w-full py-20 lg:py-32 bg-slate-50 relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="lux-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#lux-grid)" />
        </svg>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        <FadeIn className="text-center mb-20 lg:mb-28">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-navy-950 mb-6 tracking-tight">
            {title}
          </h2>
          <div className="w-16 h-0.5 bg-ts-gold mx-auto mb-6"></div>
          {subtitle && (
            <p className="font-sans text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
              {subtitle}
            </p>
          )}
        </FadeIn>

        <div className="flex flex-col gap-24 lg:gap-32">
          {items.map((item, index) => {
            const isEven = index % 2 === 0;
            const imageSrc = images[index % images.length];

            return (
              <div 
                key={index} 
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-10 lg:gap-0`}
              >
                {/* Image Section */}
                <FadeIn 
                  direction={isEven ? 'right' : 'left'} 
                  className="w-full lg:w-7/12 relative z-0"
                >
                  <div className={`relative aspect-[4/3] lg:aspect-[16/10] overflow-hidden rounded-2xl shadow-2xl group ${isEven ? 'lg:mr-[-10%]' : 'lg:ml-[-10%]'}`}>
                    {imageSrc && (
                      <MasterImage
                        src={imageSrc}
                        alt={item.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                      />
                    )}
                    <div className="absolute inset-0 bg-navy-950/10 transition-opacity duration-700 group-hover:opacity-0"></div>
                  </div>
                </FadeIn>

                {/* Text Card Section */}
                <FadeIn 
                  direction={isEven ? 'left' : 'right'} 
                  className="w-full lg:w-6/12 relative z-10"
                >
                  <div className="bg-white p-10 lg:p-14 rounded-2xl shadow-xl border border-slate-100">
                    {/* Number / Category */}
                    <div className="flex items-center gap-4 mb-6">
                      <span className="font-display text-4xl text-ts-gold/40 select-none">
                        {(index + 1).toString().padStart(2, '0')}
                      </span>
                      {item.category && (
                        <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-navy-600 pt-1">
                          {item.category}
                        </span>
                      )}
                    </div>

                    <h3 className="font-display text-3xl lg:text-4xl text-navy-950 mb-6 leading-tight">
                      {item.title}
                    </h3>

                    <p className="font-sans text-slate-600 text-base leading-relaxed font-light mb-8">
                      {item.description}
                    </p>

                    {item.bestFor && (
                      <div className="pt-6 border-t border-slate-100 flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-ice-100 flex items-center justify-center flex-shrink-0">
                          <span className="text-ts-gold text-lg">✦</span>
                        </div>
                        <div>
                          <span className="font-sans text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-1">
                            Ideal For
                          </span>
                          <span className="font-sans text-sm text-navy-900 font-medium leading-snug block">
                            {item.bestFor}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                </FadeIn>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LuxuryZigZagShowcase;
