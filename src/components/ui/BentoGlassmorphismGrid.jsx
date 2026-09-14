import React from 'react';
import FadeIn from './FadeIn';
import MasterImage from './MasterImage';

const BentoGlassmorphismGrid = ({
  title,
  subtitle,
  bentoItems = []
}) => {
  if (!bentoItems || bentoItems.length === 0) return null;

  return (
    <section className="w-full py-24 lg:py-32 bg-navy-950 text-white relative overflow-hidden">
      {/* Dynamic Glowing Orbs for Glassmorphism Effect */}
      <div className="absolute top-[10%] left-[10%] w-[40vw] h-[40vw] bg-ts-gold/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>
      <div className="absolute bottom-[10%] right-[10%] w-[35vw] h-[35vw] bg-blue-500/20 rounded-full blur-[100px] pointer-events-none mix-blend-screen"></div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 lg:mb-24">
          <FadeIn>
            {subtitle && (
              <span className="font-sans text-xs font-bold tracking-[0.2em] uppercase text-ts-gold mb-4 block">
                {subtitle}
              </span>
            )}
            <h2 className="font-display text-4xl md:text-5xl lg:text-7xl text-white drop-shadow-lg">
              {title}
            </h2>
          </FadeIn>
        </div>

        {/* Hyper-Modern Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6 auto-rows-[250px]">
          {bentoItems.map((item, index) => {
            // Complex spanning logic based on index to create a true bento feel
            let spanClass = "col-span-1 row-span-1";
            if (index === 0) spanClass = "md:col-span-2 lg:col-span-2 row-span-2"; // Massive feature block
            else if (index === 1) spanClass = "md:col-span-1 lg:col-span-2 row-span-1"; // Wide banner
            else if (index === 2 && bentoItems.length === 4) spanClass = "md:col-span-1 lg:col-span-1 row-span-1";
            else if (index === 3 && bentoItems.length === 4) spanClass = "md:col-span-3 lg:col-span-1 row-span-1"; // Span full width on md to avoid orphans
            else if (index === 4) spanClass = "md:col-span-3 lg:col-span-2 row-span-2"; // Bottom heavy block
            else if (index === 5) spanClass = "md:col-span-2 lg:col-span-1 row-span-1"; // Medium wide block

            return (
              <FadeIn 
                key={index} 
                delay={index * 0.1}
                className={`${spanClass} h-full w-full`}
              >
                <div className="group relative w-full h-full rounded-[2.5rem] overflow-hidden bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl transition-all duration-700 hover:bg-white/10 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(203,160,82,0.15)] flex flex-col justify-end p-6 md:p-8">
                  
                  {/* Background Image (if present) */}
                  {item.image && (
                    <>
                      <MasterImage
                        src={item.image}
                        alt={item.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-60"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/20 to-transparent"></div>
                    </>
                  )}

                  {/* Glass Content */}
                  <div className="relative z-10 flex flex-col h-full justify-between">
                    {/* Top Right Label/Icon area */}
                    <div className="flex justify-end w-full">
                      {item.stat && (
                        <span className="font-display text-3xl lg:text-5xl text-ts-gold drop-shadow-md break-words text-right max-w-full">
                          {item.stat}
                        </span>
                      )}
                    </div>

                    {/* Bottom Text area */}
                    <div className="mt-auto">
                      <h3 className="font-display text-2xl lg:text-3xl text-white mb-2 leading-tight">
                        {item.title}
                      </h3>
                      {item.description && (
                        <p className="font-sans text-sm text-white/70 font-light line-clamp-3 group-hover:line-clamp-none transition-all duration-500">
                          {item.description}
                        </p>
                      )}
                    </div>
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

export default BentoGlassmorphismGrid;
