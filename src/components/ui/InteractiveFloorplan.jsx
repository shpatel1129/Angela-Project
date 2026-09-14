import React, { useState } from 'react';
import FadeIn from './FadeIn';

const InteractiveFloorplan = ({ data }) => {
  const [activeZone, setActiveZone] = useState('bed');

  if (!data) return null;

  const activeZoneData = data.zones.find((z) => z.id === activeZone);

  return (
    <section className="py-24 md:py-32 bg-navy-950 overflow-hidden relative border-y border-white/5">
      {/* Background Architectural Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]" 
           style={{ backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
            <span className="block text-amber-500 font-sans tracking-[0.2em] uppercase text-sm mb-4">
              {data.subtitle}
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white tracking-tight leading-tight">
              {data.title}
            </h2>
            <p className="mt-6 text-navy-200 text-lg leading-relaxed font-sans max-w-2xl mx-auto">
              {data.description}
            </p>
          </div>
        </FadeIn>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left: The CSS Blueprint */}
          <FadeIn className="w-full lg:w-3/5" delay={0.2}>
            {/* The Blueprint Container */}
            <div className="relative w-full aspect-[4/3] md:aspect-[16/9] bg-navy-900/50 border-2 border-white/10 rounded-2xl p-3 md:p-6 shadow-2xl backdrop-blur-sm">
              <div className="absolute -top-3 left-8 bg-navy-950 px-4 text-xs font-mono text-white/40 tracking-widest uppercase">
                Cabin Layout Plan 1:50
              </div>
              
              <div className="w-full h-full grid grid-cols-12 grid-rows-6 gap-2 md:gap-3">
                
                {/* Entrance */}
                <div 
                  onClick={() => setActiveZone('entrance')}
                  className={`col-span-1 row-span-6 border-2 transition-all cursor-pointer group flex items-center justify-center relative overflow-hidden ${
                    activeZone === 'entrance' ? 'border-amber-500 bg-amber-500/10' : 'border-white/15 hover:border-amber-500/50'
                  }`}
                >
                  <span className="-rotate-90 whitespace-nowrap text-[10px] md:text-xs tracking-widest font-mono text-white/50 group-hover:text-amber-400">
                    FOYER
                  </span>
                </div>

                {/* Storage */}
                <div 
                  onClick={() => setActiveZone('storage')}
                  className={`col-span-2 row-span-3 border-2 transition-all cursor-pointer group flex items-center justify-center ${
                    activeZone === 'storage' ? 'border-amber-500 bg-amber-500/10' : 'border-white/15 hover:border-amber-500/50'
                  }`}
                >
                  <span className="text-[10px] md:text-xs tracking-widest font-mono text-white/50 group-hover:text-amber-400 text-center">
                    WARDROBE
                  </span>
                </div>

                {/* Bathroom */}
                <div 
                  onClick={() => setActiveZone('bathroom')}
                  className={`col-span-2 row-span-3 border-2 transition-all cursor-pointer group flex flex-col items-center justify-center ${
                    activeZone === 'bathroom' ? 'border-amber-500 bg-amber-500/10' : 'border-white/15 hover:border-amber-500/50'
                  }`}
                >
                  <div className="w-8 h-8 rounded-full border border-white/20 mb-2 opacity-50"></div>
                  <span className="text-[10px] md:text-xs tracking-widest font-mono text-white/50 group-hover:text-amber-400 text-center">
                    BATH
                  </span>
                </div>

                {/* Bed Area */}
                <div 
                  onClick={() => setActiveZone('bed')}
                  className={`col-span-7 row-span-4 border-2 transition-all cursor-pointer group flex items-center justify-center relative ${
                    activeZone === 'bed' ? 'border-amber-500 bg-amber-500/10' : 'border-white/15 hover:border-amber-500/50'
                  }`}
                >
                   <div className={`absolute top-1/2 -translate-y-1/2 left-2 md:left-6 w-12 md:w-24 h-16 md:h-24 border-2 rounded-r-xl md:rounded-r-2xl transition-colors ${
                     activeZone === 'bed' ? 'border-amber-500/50' : 'border-white/20'
                   }`}></div>
                   <span className="text-[10px] md:text-xs tracking-widest font-mono text-white/50 group-hover:text-amber-400 ml-12 md:ml-24">
                     SIGNATURE BED
                   </span>
                </div>

                {/* Living Area */}
                <div 
                  onClick={() => setActiveZone('living')}
                  className={`col-span-7 row-span-2 border-2 transition-all cursor-pointer group flex items-center justify-center relative ${
                    activeZone === 'living' ? 'border-amber-500 bg-amber-500/10' : 'border-white/15 hover:border-amber-500/50'
                  }`}
                >
                   <div className="w-12 border-t-2 border-white/20 absolute left-8"></div>
                   <span className="text-[10px] md:text-xs tracking-widest font-mono text-white/50 group-hover:text-amber-400">
                     LOUNGE & TECH
                   </span>
                </div>

                {/* Balcony */}
                <div 
                  onClick={() => setActiveZone('balcony')}
                  className={`col-span-2 row-span-6 border-2 border-dashed transition-all cursor-pointer group flex items-center justify-center relative overflow-hidden ${
                    activeZone === 'balcony' ? 'border-amber-500 bg-amber-500/10' : 'border-white/25 hover:border-amber-500/50'
                  }`}
                >
                   <span className="-rotate-90 whitespace-nowrap text-[10px] md:text-xs tracking-widest font-mono text-white/50 group-hover:text-amber-400">
                     TWIN BALCONY
                   </span>
                </div>

              </div>
            </div>
            
            <div className="text-center mt-6">
              <span className="text-white/40 text-sm font-mono tracking-widest">TAP A ZONE TO EXPLORE</span>
            </div>
          </FadeIn>

          {/* Right: Dynamic Content Panel */}
          <div className="w-full lg:w-2/5 min-h-[300px] flex items-center">
            {activeZoneData && (
              <div 
                key={activeZone} // forces re-animation on change
                className="animate-in fade-in slide-in-from-right-8 duration-700 w-full"
              >
                <div className="border-l-2 border-amber-500 pl-6 md:pl-10">
                  <span className="text-amber-500 font-mono tracking-[0.2em] uppercase text-xs mb-3 block">
                    Zone Selected
                  </span>
                  <h3 className="text-3xl md:text-4xl font-serif text-white mb-6 leading-tight">
                    {activeZoneData.title}
                  </h3>
                  <p className="text-navy-200 text-lg leading-relaxed font-sans">
                    {activeZoneData.details}
                  </p>
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default InteractiveFloorplan;
