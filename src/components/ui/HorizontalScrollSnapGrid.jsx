import React from 'react';
import FadeIn from './FadeIn';
import MasterImage from './MasterImage';

const HorizontalScrollSnapGrid = ({
  title,
  subtitle,
  cards = []
}) => {
  if (!cards || cards.length === 0) return null;

  return (
    <section className="w-full py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 mb-12 lg:mb-20">
        <FadeIn>
          {subtitle && (
            <span className="font-sans text-xs font-bold tracking-[0.2em] uppercase text-ts-gold mb-4 block">
              {subtitle}
            </span>
          )}
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-navy-950">
            {title}
          </h2>
        </FadeIn>
      </div>

      {/* Horizontal Scroll Snap Container */}
      <div className="w-full overflow-x-auto pb-12 snap-x snap-mandatory hide-scrollbar pl-6 lg:pl-12 xl:pl-[calc((100vw-1400px)/2+3rem)] flex gap-6 lg:gap-10">
        
        {/* Force a pseudo-element to allow scrolling past the last item elegantly */}
        {cards.map((card, index) => (
          <div 
            key={index} 
            className="snap-center shrink-0 w-[85vw] md:w-[600px] lg:w-[800px] flex flex-col"
          >
            <div className="relative aspect-[16/9] w-full rounded-3xl overflow-hidden shadow-2xl group cursor-pointer">
              <MasterImage
                src={card.image}
                alt={card.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>
              
              <div className="absolute inset-0 p-8 lg:p-12 flex flex-col justify-end">
                <h3 className="font-display text-3xl lg:text-5xl text-white mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {card.title}
                </h3>
                <p className="font-sans text-white/90 font-light leading-relaxed max-w-lg opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                  {card.description}
                </p>
              </div>
            </div>

            {/* Optional Stats Below Card */}
            {card.stats && (
              <div className="grid grid-cols-3 gap-4 mt-8 px-4">
                {card.stats.map((stat, idx) => (
                  <div key={idx} className="border-t border-slate-200 pt-4">
                    <div className="font-display text-2xl text-navy-900 mb-1">{stat.value}</div>
                    <div className="font-sans text-[10px] font-bold uppercase tracking-widest text-slate-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
        
        {/* Spacer to allow scrolling to the end elegantly */}
        <div className="shrink-0 w-6 lg:w-[calc((100vw-1400px)/2)]"></div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </section>
  );
};

export default HorizontalScrollSnapGrid;
