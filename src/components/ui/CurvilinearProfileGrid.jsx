import React from 'react';
import FadeIn from './FadeIn';
import { Compass, Star, Heart, Shield, Activity, Wallet, Ship, Anchor, Map, Navigation } from 'lucide-react';

const iconMap = {
  Compass, Star, Heart, Shield, Activity, Wallet, Ship, Anchor, Map, Navigation
};

const CurvilinearProfileGrid = ({ title, subtitle, items }) => {
  
  // A set of organic, curvilinear border radius combinations to give a fluid, puzzle-like look.
  const curvilinearShapes = [
    "rounded-[60px] rounded-tr-[120px] rounded-bl-[120px]", 
    "rounded-[40px] rounded-tl-[100px] rounded-br-[100px]",
    "rounded-full rounded-br-[30px]",
    "rounded-[50px] rounded-bl-[100px] rounded-tr-[80px]",
    "rounded-[70px] rounded-tl-[120px]",
    "rounded-[80px] rounded-br-[140px] rounded-tl-[40px]"
  ];

  const getColSpan = (idx, totalItems) => {
    // Creating an asymmetrical bento-style layout
    const spans = [1, 2, 2, 1, 1, 2, 2, 1];
    
    // If this is the last item, stretch it to fill the remaining space in the row
    if (idx === totalItems - 1) {
      let colsUsedInRow = 0;
      for (let i = 0; i < idx; i++) {
        colsUsedInRow = (colsUsedInRow + spans[i % spans.length]) % 3;
      }
      const remainingCols = 3 - colsUsedInRow;
      return `md:col-span-${remainingCols}`;
    }
    
    return `md:col-span-${spans[idx % spans.length]}`;
  };

  return (
    <section className="py-24 bg-navy-950 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        
        <FadeIn>
          <div className="text-center mb-20">
            {subtitle && (
              <span className="font-sans text-xs font-bold uppercase tracking-widest text-ts-gold mb-3 block">
                {subtitle}
              </span>
            )}
            <h2 className="font-display text-4xl md:text-6xl text-white">
              {title}
            </h2>
            <div className="w-24 h-1 mt-8 mx-auto bg-ts-gold/50 rounded-full"></div>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {items.map((item, idx) => {
            const IconComponent = iconMap[item.iconName] || Star;
            const isAvalon = item.brand.toLowerCase() === 'avalon' || item.brand.toLowerCase() === 'avalon waterways';
            
            // Brand-specific styling
            const bgGradient = isAvalon 
              ? "bg-gradient-to-br from-navy-900 to-navy-800" 
              : "bg-gradient-to-br from-navy-800 to-navy-900";
              
            const borderColors = isAvalon
              ? "border border-ts-gold/20 hover:border-ts-gold/60"
              : "border border-white/10 hover:border-white/40";
              
            const iconColor = isAvalon ? "text-ts-gold/10" : "text-white/5";
            const hoverIconColor = isAvalon ? "group-hover:text-ts-gold/20" : "group-hover:text-white/10";
            const brandTextColor = isAvalon ? "text-ts-gold" : "text-ice-100";

            return (
              <FadeIn 
                key={idx} 
                delay={0.1 * idx} 
                direction="up" 
                className={`${getColSpan(idx, items.length)} flex`}
              >
                <div 
                  className={`group relative w-full p-10 md:p-14 overflow-hidden flex flex-col justify-center
                    shadow-2xl transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] hover:-translate-y-2
                    ${bgGradient} ${borderColors} ${curvilinearShapes[idx % curvilinearShapes.length]}`}
                >
                  {/* Massive Background Icon */}
                  <div className={`absolute -right-8 -bottom-8 md:-right-12 md:-bottom-12 transition-all duration-1000 ease-out transform group-hover:scale-110 group-hover:rotate-12 ${iconColor} ${hoverIconColor}`}>
                    <IconComponent className="w-64 h-64 md:w-80 md:h-80 opacity-50" strokeWidth={1} />
                  </div>

                  <div className="relative z-10 flex flex-col justify-center">
                    <div className="mb-6">
                      <span className={`font-sans text-xs font-bold uppercase tracking-widest mb-3 block ${brandTextColor}`}>
                        {item.brand}
                      </span>
                      <h3 className="font-display text-3xl md:text-4xl text-white leading-tight">
                        {item.title}
                      </h3>
                    </div>
                    
                    <p className="font-sans text-ice-50/90 text-base md:text-lg leading-relaxed max-w-2xl">
                      {item.description}
                    </p>
                  </div>
                  
                  {/* Subtle top-left icon for immediate recognition */}
                  <div className={`absolute top-8 right-8 ${isAvalon ? 'text-ts-gold' : 'text-white/50'}`}>
                     <IconComponent className="w-8 h-8 opacity-80" strokeWidth={1.5} />
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

export default CurvilinearProfileGrid;
