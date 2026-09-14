import React from 'react';
import FadeIn from './FadeIn';
import MasterImage from './MasterImage';

const ChaoticOverlapGrid = ({
  title,
  subtitle,
  items = []
}) => {
  if (!items || items.length < 3) return null; // Needs at least 3 items to look chaotic

  return (
    <section className="w-full py-32 bg-ice-50 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 relative min-h-[800px] flex flex-col items-center">
        
        {/* Central Title Node */}
        <FadeIn className="text-center relative z-20 mt-12 mb-20 lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 w-full max-w-lg bg-white/80 backdrop-blur-xl p-10 rounded-[2rem] shadow-2xl border border-white">
          {subtitle && (
            <span className="font-sans text-xs font-bold tracking-[0.2em] uppercase text-ts-gold mb-4 block">
              {subtitle}
            </span>
          )}
          <h2 className="font-display text-5xl md:text-6xl text-navy-950 leading-tight">
            {title}
          </h2>
        </FadeIn>

        {/* Floating "Chaotic" Elements */}
        <div className="w-full relative lg:static h-full flex flex-col lg:block gap-12">
          
          {/* Element 1 (Top Left) */}
          <FadeIn 
            delay={0.1} 
            direction="up"
            className="w-full lg:w-[350px] lg:absolute lg:top-0 lg:left-0 z-10"
          >
            <div className="relative group">
              <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl transform transition-transform duration-700 group-hover:-rotate-3 group-hover:scale-105">
                <MasterImage src={items[0].image} alt={items[0].title} className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-navy-950 text-white p-6 rounded-2xl shadow-xl w-[250px] transform transition-transform duration-700 group-hover:rotate-2">
                <h3 className="font-display text-xl text-ts-gold mb-2">{items[0].title}</h3>
                <p className="font-sans text-xs font-light text-white/80">{items[0].description}</p>
              </div>
            </div>
          </FadeIn>

          {/* Element 2 (Bottom Right) */}
          <FadeIn 
            delay={0.3} 
            direction="left"
            className="w-full lg:w-[400px] lg:absolute lg:bottom-10 lg:right-0 z-30"
          >
            <div className="relative group">
              <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl transform transition-transform duration-700 group-hover:rotate-3 group-hover:scale-105">
                <MasterImage src={items[1].image} alt={items[1].title} className="w-full h-full object-cover" />
              </div>
              <div className="absolute -top-12 -left-12 bg-white text-navy-950 p-6 rounded-2xl shadow-xl w-[220px] transform transition-transform duration-700 group-hover:-rotate-2 border border-slate-100">
                <h3 className="font-display text-xl text-navy-900 mb-2">{items[1].title}</h3>
                <p className="font-sans text-xs font-light text-slate-600">{items[1].description}</p>
              </div>
            </div>
          </FadeIn>

          {/* Element 3 (Top Right / Abstract) */}
          <FadeIn 
            delay={0.5} 
            direction="down"
            className="w-full lg:w-[300px] lg:absolute lg:top-20 lg:right-20 z-10"
          >
            <div className="relative group">
              <div className="aspect-[4/3] rounded-full overflow-hidden shadow-2xl transform transition-transform duration-700 group-hover:scale-110">
                <MasterImage src={items[2].image} alt={items[2].title} className="w-full h-full object-cover" />
              </div>
              {items[2].stat && (
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
                  <span className="font-display text-6xl text-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]">
                    {items[2].stat}
                  </span>
                </div>
              )}
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
};

export default ChaoticOverlapGrid;
