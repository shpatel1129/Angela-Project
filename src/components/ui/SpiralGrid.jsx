import React from 'react';
import { Castle, Landmark, Heart, Wine, Sun, Church } from 'lucide-react';
import FadeIn from './FadeIn';

const iconMap = {
  "Castle": Castle,
  "Landmark": Landmark,
  "Heart": Heart,
  "Wine": Wine,
  "Sun": Sun,
  "Church": Church
};

const SpiralGrid = ({ title, items }) => {
  // Circular "Spiderweb" / Radar layout for Desktop to match the user's "squiral" diagram
  // Angles mapped to Box 1..6 positions (counter-clockwise from 3 o'clock = 0 deg)
  // Box 1 (Top Left): 120 deg
  // Box 2 (Top Right): 60 deg
  // Box 3 (Right): 0 deg
  // Box 4 (Bottom Right): 300 deg
  // Box 5 (Bottom Left): 240 deg
  // Box 6 (Left): 180 deg
  const R = 400; // Increased Radius for even spacing between circular boxes
  const itemAngles = [120, 60, 0, 300, 240, 180];

  return (
    <section className="py-24 bg-ice-50 font-sans overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16 relative z-20">
            <h2 className="font-display text-4xl md:text-5xl text-navy-950 mb-6">{title}</h2>
            <div className="w-24 h-1 bg-ts-gold mx-auto"></div>
          </div>
        </FadeIn>

        {/* MOBILE & TABLET: Standard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:hidden">
          {items.map((item, index) => {
            const Icon = iconMap[item.icon] || Landmark;
            return (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="h-full p-8 bg-white border border-ice-200 hover:border-ts-gold transition-colors duration-300 flex flex-col items-center justify-center text-center rounded-full shadow-sm hover:shadow-md aspect-square max-w-[340px] mx-auto">
                  <div className="w-14 h-14 rounded-full bg-navy-950 flex items-center justify-center mb-4 text-ts-gold">
                    <Icon size={24} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display text-xl text-navy-900 mb-2">{item.title}</h3>
                  <span className="font-sans text-[10px] uppercase tracking-widest text-ts-gold font-bold mb-3 block">
                    {item.subtitle}
                  </span>
                  <p className="font-sans text-navy-600 leading-relaxed text-xs px-4">
                    {item.content}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* DESKTOP: Circular "Spiderweb" Layout matching the diagram */}
        <div className="hidden lg:block relative w-full h-[1050px] mx-auto max-w-[1150px]">
          
          {/* Radar / Spiderweb SVG Background */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="-600 -525 1200 1050">
            {/* Concentric Circles */}
            {[1, 2, 3, 4, 5, 6].map(i => (
              <circle key={`c-${i}`} cx="0" cy="0" r={i * 85} fill="none" stroke="#CBD5E1" strokeWidth="1" className="opacity-60" />
            ))}
            
            {/* Radiating Lines (Bisecting the boxes at 30, 90, 150, 210, 270, 330 degrees) */}
            {[30, 90, 150, 210, 270, 330].map(angle => {
              const rad = angle * Math.PI / 180;
              return (
                <line 
                  key={`l-${angle}`}
                  x1="0" y1="0" 
                  x2={600 * Math.cos(rad)} 
                  y2={-600 * Math.sin(rad)} 
                  stroke="#CBD5E1" strokeWidth="1" className="opacity-60"
                />
              );
            })}
          </svg>

          {/* Central Luxury Hub */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36 rounded-full bg-white border-2 border-ts-gold flex items-center justify-center shadow-xl z-20">
            <div className="w-32 h-32 rounded-full border border-ice-200 flex items-center justify-center">
              <span className="font-display text-navy-950 text-2xl text-center leading-snug">European<br/>Rivers</span>
            </div>
          </div>

          {/* Placed Circular Items */}
          {items.map((item, index) => {
            const Icon = iconMap[item.icon] || Landmark;
            const angle = itemAngles[index];
            const rad = angle * Math.PI / 180;
            const x = R * Math.cos(rad);
            const y = -R * Math.sin(rad); // CSS top goes down

            const style = {
              left: `calc(50% + ${x}px)`,
              top: `calc(50% + ${y}px)`,
              transform: 'translate(-50%, -50%)',
            };

            return (
              <div 
                key={index}
                className="absolute z-30 w-[340px] h-[340px] bg-white/95 backdrop-blur-sm border border-ice-200 hover:border-ts-gold p-8 rounded-full shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col items-center justify-center text-center group aspect-square"
                style={style}
              >
                {/* Visual Connector Node at the edge facing the center */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                   <div className="absolute inset-0 ring-2 ring-ts-gold rounded-full scale-[1.03] transition-transform duration-500"></div>
                </div>

                <div className="w-16 h-16 rounded-full bg-navy-950 flex items-center justify-center mb-4 text-ts-gold shadow-md ring-4 ring-white relative z-10 shrink-0">
                  <Icon size={26} strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-xl text-navy-900 mb-2 relative z-10 shrink-0">{item.title}</h3>
                <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-ts-gold font-bold mb-3 block relative z-10 shrink-0">
                  {item.subtitle}
                </span>
                <p className="font-sans text-slate-600 leading-relaxed text-xs relative z-10 px-2 line-clamp-4">
                  {item.content}
                </p>
                
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SpiralGrid;
