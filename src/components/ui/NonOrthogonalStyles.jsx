import React from 'react';
import FadeIn from './FadeIn';
import { Compass, Wine, Heart, Landmark, Camera } from 'lucide-react';

const iconMap = {
  "First-Time Visitors": Compass,
  "Couples": Heart,
  "Food & Wine Lovers": Wine,
  "History Enthusiasts": Landmark,
  "Scenic Beauty": Camera
};

const NonOrthogonalStyles = ({ title, categories }) => {
  const n = categories.length;
  let gridClass = 'md:grid-cols-3';
  if (n === 2 || n === 4) {
    gridClass = 'md:grid-cols-2';
  }

  return (
    <section className="relative w-full bg-navy-950 py-32 md:py-48 overflow-hidden z-0">
      
      {/* Background Graphic: Giant Non-Orthogonal intersecting lines */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute top-[-20%] left-[-10%] w-[150%] h-[50%] bg-ts-gold transform -rotate-12 blur-3xl"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[150%] h-[50%] bg-blue-900 transform rotate-12 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <FadeIn>
          <div className="text-center mb-24">
            <h2 className="font-display text-4xl md:text-6xl text-white mb-6 uppercase tracking-widest drop-shadow-lg">
              {title}
            </h2>
            <div className="w-32 h-1 bg-ts-gold mx-auto"></div>
          </div>
        </FadeIn>

        {/* 
          NON-ORTHOGONAL GRID IMPLEMENTATION
          We rotate the entire grid container by -3 degrees to break the orthogonal plane.
          We then counter-rotate the cards slightly, but keep them on the slanted axis.
          We use a 3x2 grid layout for perfectly even spacing.
        */}
        <div className={`w-full max-w-[1400px] mx-auto grid grid-cols-1 ${gridClass} gap-8 md:gap-12 transform md:-rotate-3 transition-transform duration-1000`}>
          
          {categories.map((item, idx) => {
            const Icon = iconMap[item.name] || Compass;
            
            return (
              <FadeIn 
                key={idx} 
                delay={idx * 0.15} 
                className="group w-full h-full flex"
              >
                <div className="
                  relative overflow-hidden w-full flex flex-col
                  bg-navy-900/80 backdrop-blur-md border border-white/10 
                  hover:border-ts-gold/50 transition-all duration-700
                  p-8 md:p-10 shadow-2xl hover:shadow-ts-gold/20
                  /* The card itself is skewed to create non-orthogonal trapezoid edges */
                  transform md:skew-x-[-4deg] md:rotate-3
                  hover:-translate-y-2 hover:scale-[1.02]
                ">
                  {/* Internal counter-skew so text is perfectly readable and orthogonal */}
                  <div className="transform md:skew-x-[4deg] flex flex-col flex-grow">
                    
                    <div className="flex flex-col xl:flex-row xl:items-center justify-between mb-6">
                      <div className="flex items-center mb-4 xl:mb-0">
                        <div className="w-12 h-12 rounded-full bg-ts-gold/20 flex items-center justify-center text-ts-gold mr-4 shrink-0">
                          <Icon size={24} strokeWidth={1.5} />
                        </div>
                        <h3 className="font-sans text-white/80 uppercase tracking-[0.25em] text-xs font-bold">
                          {item.name}
                        </h3>
                      </div>
                      <div className="h-[1px] flex-grow bg-gradient-to-r from-ts-gold/0 via-ts-gold/50 to-ts-gold/0 mx-6 hidden xl:block"></div>
                    </div>
                    
                    <h4 className="font-display text-2xl md:text-3xl text-white mb-4 leading-tight">
                      {item.winner}
                    </h4>
                    
                    <p className="font-sans text-ice-300 leading-relaxed text-sm md:text-base flex-grow">
                      {item.description}
                    </p>
                    
                  </div>
                  
                  {/* Decorative glowing orb inside card */}
                  <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-ts-gold/10 rounded-full blur-2xl group-hover:bg-ts-gold/20 transition-colors duration-700 pointer-events-none"></div>
                </div>
              </FadeIn>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default NonOrthogonalStyles;
