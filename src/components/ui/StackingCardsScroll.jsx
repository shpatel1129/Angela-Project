import React from 'react';
import FadeIn from './FadeIn';
import MasterImage from './MasterImage';

const StackingCardsScroll = ({
  title,
  subtitle,
  cards = []
}) => {
  if (!cards || cards.length === 0) return null;

  return (
    <section className="w-full bg-navy-950 text-white relative py-32">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 mb-32 text-center">
        <FadeIn>
          {subtitle && (
            <span className="font-sans text-xs font-bold tracking-[0.2em] uppercase text-ts-gold mb-6 block">
              {subtitle}
            </span>
          )}
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl text-white">
            {title}
          </h2>
        </FadeIn>
      </div>

      <div className="max-w-[1000px] mx-auto px-4 lg:px-0 relative pb-[20vh]">
        {cards.map((card, index) => {
          // Calculate top offset so they stack slightly below each other
          const topOffset = `calc(20vh + ${index * 40}px)`;

          return (
            <div 
              key={index}
              className="sticky w-full h-[60vh] lg:h-[70vh] rounded-[3rem] overflow-hidden shadow-[0_-20px_50px_rgba(15,30,61,0.5)] mb-[20vh]"
              style={{ top: topOffset }}
            >
              <MasterImage 
                src={card.image} 
                alt={card.title} 
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* Complex gradient overlay to ensure text is always readable */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/60 to-navy-950/10"></div>
              
              {/* Card Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-10 lg:p-16">
                
                <div className="flex items-center gap-6 mb-6">
                  <div className="w-16 h-px bg-ts-gold"></div>
                  <span className="font-sans text-sm font-bold tracking-[0.2em] uppercase text-ts-gold">
                    0{index + 1}
                  </span>
                </div>

                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
                  <div className="max-w-xl">
                    <h3 className="font-display text-4xl lg:text-6xl text-white mb-6 leading-tight drop-shadow-lg">
                      {card.title}
                    </h3>
                    <p className="font-sans text-lg text-white/80 font-light leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                  
                  {card.stats && (
                    <div className="flex gap-8 border-l border-white/20 pl-8 shrink-0">
                      {card.stats.map((stat, idx) => (
                        <div key={idx}>
                          <div className="font-display text-4xl text-white mb-2">{stat.value}</div>
                          <div className="font-sans text-[10px] font-bold uppercase tracking-widest text-white/50">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default StackingCardsScroll;
