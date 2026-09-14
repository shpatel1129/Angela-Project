import React from 'react';
import FadeIn from './FadeIn';
import MasterImage from './MasterImage';

const CircularDataOrbit = ({
  title,
  subtitle,
  centerImage,
  orbitItems = []
}) => {
  if (!centerImage || orbitItems.length === 0) return null;

  return (
    <section className="w-full py-32 bg-white relative overflow-hidden flex flex-col items-center min-h-[900px] lg:min-h-[1100px] justify-center">
      
      <div className="absolute top-20 text-center z-20 w-full px-6">
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

      {/* Orbit Container */}
      <div className="relative w-full max-w-[800px] aspect-square mt-24">
        
        {/* Central Core Image */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden shadow-[0_30px_60px_rgba(15,30,61,0.2)] z-10 border-8 border-white">
          <MasterImage src={centerImage} alt="Central Core" className="w-full h-full object-cover" />
        </div>

        {/* Outer Orbit Rings (Decorative) */}
        <div className="absolute inset-0 rounded-full border border-slate-200/50 animate-[spin_60s_linear_infinite]"></div>
        <div className="absolute inset-[10%] rounded-full border border-dashed border-slate-200 animate-[spin_40s_linear_infinite_reverse]"></div>

        {/* Orbit Items */}
        {orbitItems.map((item, index) => {
          // Calculate positions along a circle using trigonometry
          const totalItems = orbitItems.length;
          const angle = (index / totalItems) * (2 * Math.PI) - (Math.PI / 2); // Start at top (-90deg)
          
          // Radius as a percentage of the container size
          const radius = 45; // 45% to keep it inside the container slightly
          
          const top = `calc(50% + ${Math.sin(angle) * radius}%)`;
          const left = `calc(50% + ${Math.cos(angle) * radius}%)`;

          return (
            <div 
              key={index}
              className="absolute z-20 w-[180px] lg:w-[220px] -translate-x-1/2 -translate-y-1/2 group"
              style={{ top, left }}
            >
              <FadeIn delay={index * 0.15}>
                <div className="bg-white/80 backdrop-blur-md p-4 lg:p-6 rounded-3xl shadow-xl border border-slate-100 text-center transform transition-all duration-500 hover:scale-110 hover:-translate-y-2 hover:bg-white hover:shadow-2xl">
                  {item.icon && (
                    <div className="w-12 h-12 mx-auto mb-4 bg-ice-50 rounded-full flex items-center justify-center text-ts-gold">
                      {/* Simple icon placeholder if real icons aren't passed */}
                      <span className="font-display text-xl">{index + 1}</span>
                    </div>
                  )}
                  <h3 className="font-display text-xl lg:text-2xl text-navy-950 mb-2">{item.title}</h3>
                  <p className="font-sans text-xs text-slate-500 leading-relaxed font-light hidden lg:block">{item.description}</p>
                </div>
              </FadeIn>
            </div>
          );
        })}

      </div>
    </section>
  );
};

export default CircularDataOrbit;
