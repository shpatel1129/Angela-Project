import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Anchor, Compass, Navigation, Sun, Star, Shield } from 'lucide-react';
import FadeIn from './FadeIn';

const ICON_MAP = {
  Anchor: Anchor,
  Compass: Compass,
  Navigation: Navigation,
  Sun: Sun,
  Star: Star,
  Shield: Shield
};

// Wide horizontal interlocking honeycomb layout to fill the screen width
const HEX_POSITIONS = [
  { x: -375, y: 0 },         // Far Left
  { x: -125, y: -146.5 },    // Mid Left Top
  { x: -125, y: 146.5 },     // Mid Left Bottom
  { x: 125, y: -146.5 },     // Mid Right Top
  { x: 125, y: 146.5 },      // Mid Right Bottom
  { x: 375, y: 0 }           // Far Right
];

const HexagonalSixGrid = ({ title, subtitle, items = [], badgeLine1 = "Avalon", badgeLine2 = "Waterways" }) => {
  const displayItems = items.length === 6 ? items : [
    ...items, 
    ...Array(Math.max(0, 6 - items.length)).fill({ title: 'Feature', description: 'Description', icon: 'Star' })
  ].slice(0, 6);

  return (
    <section className="py-24 md:py-32 bg-slate-50 relative overflow-hidden">
      {/* Background ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-ts-gold/5 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative z-10">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-20 md:mb-32">
            {subtitle && (
              <span className="font-sans text-ts-gold uppercase tracking-widest text-sm font-bold mb-4 block">
                {subtitle}
              </span>
            )}
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-navy-950 font-light leading-tight">
              {title}
            </h2>
            <div className="w-24 h-px bg-ts-gold mx-auto mt-8 opacity-50"></div>
          </div>
        </FadeIn>

        {/* DESKTOP STAGGERED HEX GRID */}
        <div className="hidden lg:block relative w-full max-w-[1050px] mx-auto pb-16">
          
          {/* Center Badge Floating */}
          <div className="absolute top-1/2 left-1/2 z-30" style={{ transform: 'translate(-50%, -50%)' }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="w-[200px] h-[200px] rounded-full bg-white shadow-xl flex flex-col items-center justify-center border-4 border-slate-50"
            >
              <div className="w-[170px] h-[170px] rounded-full border border-ts-gold/50 flex flex-col items-center justify-center bg-ice-50/50">
                <span className="font-display text-ts-gold text-2xl font-medium">{badgeLine1}</span>
                <span className="font-sans text-navy-950 text-[10px] tracking-[0.25em] uppercase mt-1">{badgeLine2}</span>
              </div>
            </motion.div>
          </div>

          {/* Hexagon Grid */}
          <div className="grid grid-cols-3 gap-x-6 gap-y-8 place-items-center relative z-20">
            {displayItems.map((item, index) => {
              const Icon = ICON_MAP[item.icon] || Star;
              const isNavy = index % 2 === 0;
              // Stagger the middle column (index 1 and 4) downwards
              const isCenterCol = index % 3 === 1;

              return (
                <motion.div
                  key={`hex-grid-${index}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className={`relative ${isCenterCol ? 'translate-y-16' : ''}`}
                  style={{ filter: 'drop-shadow(0 20px 25px rgba(15, 23, 42, 0.08))' }}
                >
                  <div 
                    className={`w-[320px] h-[277px] flex flex-col items-center justify-center text-center px-12 transition-transform duration-500 hover:scale-105 cursor-default
                    ${isNavy ? 'bg-navy-950 text-white' : 'bg-white text-navy-950'}`}
                    style={{
                      clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)'
                    }}
                  >
                    <div className="w-12 h-12 flex items-center justify-center mb-3 transition-transform duration-500 group-hover:-translate-y-1">
                      <Icon className="w-8 h-8 text-ts-gold" strokeWidth={1.5} />
                    </div>
                    <h3 className={`font-display text-lg mb-2 font-medium tracking-wide transition-colors duration-300 ${isNavy ? 'text-white' : 'text-navy-950'} hover:text-ts-gold`}>
                      {item.title}
                    </h3>
                    <div className="w-8 h-px bg-ts-gold/50 mx-auto mb-3"></div>
                    <p className={`font-sans text-[13px] leading-relaxed max-w-[200px] ${isNavy ? 'text-navy-100/90' : 'text-slate-600'}`}>
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* MOBILE / TABLET FALLBACK (Stacked Hexagons) */}
        <div className="lg:hidden flex flex-col items-center space-y-4">
          {displayItems.map((item, index) => {
            const Icon = ICON_MAP[item.icon] || Star;
            const isNavy = index % 2 === 0;

            return (
              <div
                key={`mobile-hex-${index}`}
                style={{ filter: 'drop-shadow(0 10px 15px rgba(15, 23, 42, 0.05))' }}
              >
                <div 
                  className={`w-[300px] h-[260px] flex flex-col items-center justify-center text-center p-8
                  ${isNavy ? 'bg-navy-950 text-white' : 'bg-white text-navy-950'}`}
                  style={{
                    clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)'
                  }}
                >
                  <Icon className="w-8 h-8 mb-3 text-ts-gold" strokeWidth={1.5} />
                  <h3 className={`font-display text-lg mb-2 font-medium tracking-wide ${isNavy ? 'text-white' : 'text-navy-950'}`}>
                    {item.title}
                  </h3>
                  <div className="w-8 h-px bg-ts-gold/50 mx-auto mb-3"></div>
                  <p className={`font-sans text-[13px] leading-relaxed max-w-[200px] ${isNavy ? 'text-navy-100/90' : 'text-slate-600'}`}>
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default HexagonalSixGrid;
