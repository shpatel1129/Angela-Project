import React from 'react';
import FadeIn from './FadeIn';
import MasterImage from './MasterImage';

const StickyScrollRevealGrid = ({
  title,
  subtitle,
  items = []
}) => {
  if (!items || items.length === 0) return null;

  // We will use standard CSS sticky positioning instead of complex JS scroll listeners for performance
  
  return (
    <section className="w-full bg-navy-950 text-white relative">
      <div className="flex flex-col lg:flex-row w-full max-w-[1600px] mx-auto">
        
        {/* Sticky Left Column (Hero Image & Title) */}
        <div className="w-full lg:w-1/2 lg:sticky lg:top-0 h-auto lg:h-screen p-6 lg:p-16 flex flex-col justify-center relative overflow-hidden">
          
          <div className="absolute inset-0 z-0">
             {/* Using the first item's image as the sticky background */}
             <MasterImage 
               src={items[0].image} 
               alt="Sticky Background" 
               className="w-full h-full object-cover opacity-30" 
             />
             <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/80 to-transparent"></div>
          </div>

          <div className="relative z-10 max-w-lg">
            <FadeIn>
              {subtitle && (
                <span className="font-sans text-xs font-bold tracking-[0.2em] uppercase text-ts-gold mb-6 block">
                  {subtitle}
                </span>
              )}
              <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-8">
                {title}
              </h2>
              <div className="w-20 h-1 bg-ts-gold mb-8"></div>
              <p className="font-sans text-lg text-white/70 font-light leading-relaxed">
                Scroll to discover the nuances that set our experiences apart.
              </p>
            </FadeIn>
          </div>
        </div>

        {/* Scrolling Right Column (Data Cards) */}
        <div className="w-full lg:w-1/2 p-6 lg:p-16 lg:py-32 flex flex-col gap-12 lg:gap-24 relative z-10">
          {items.map((item, index) => (
            <FadeIn key={index} direction="up" delay={0.2} className="w-full">
              <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl p-8 lg:p-12 hover:bg-white/10 transition-colors duration-500 shadow-2xl">
                
                <div className="flex items-center gap-6 mb-8">
                  <span className="font-display text-6xl text-ts-gold/30">
                    {(index + 1).toString().padStart(2, '0')}
                  </span>
                  <h3 className="font-display text-3xl lg:text-4xl text-white">
                    {item.title}
                  </h3>
                </div>

                <div className="aspect-video w-full rounded-2xl overflow-hidden mb-8 lg:hidden">
                  <MasterImage src={item.image} alt={item.title} className="w-full h-full object-cover" />
                </div>

                <p className="font-sans text-white/80 leading-relaxed font-light text-lg mb-8">
                  {item.description}
                </p>

                {item.stats && (
                  <div className="grid grid-cols-2 gap-6 pt-8 border-t border-white/10">
                    {item.stats.map((stat, idx) => (
                      <div key={idx}>
                        <div className="font-display text-2xl text-ts-gold mb-1">{stat.value}</div>
                        <div className="font-sans text-[10px] font-bold uppercase tracking-widest text-white/50">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                )}

              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
};

export default StickyScrollRevealGrid;
