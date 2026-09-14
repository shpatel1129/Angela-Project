import React, { useState } from 'react';
import { Ship, Anchor, Waves, Wind } from 'lucide-react';
import FadeIn from './FadeIn';

const SplitYachtShowdown = ({ data, leftImage, rightImage }) => {
  const [hoveredSide, setHoveredSide] = useState(null);

  return (
    <section className="w-full relative bg-navy-950 overflow-hidden border-y border-gold-400/20">
      <div className="absolute inset-0 z-0 flex">
        <div 
          className={`relative h-full transition-all duration-700 ease-in-out ${hoveredSide === 'left' ? 'w-2/3' : hoveredSide === 'right' ? 'w-1/3 opacity-50' : 'w-1/2'}`}
        >
          <img src={leftImage} alt="Wind Surf" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950/90 via-navy-950/50 to-transparent"></div>
        </div>
        
        <div 
          className={`relative h-full transition-all duration-700 ease-in-out ${hoveredSide === 'right' ? 'w-2/3' : hoveredSide === 'left' ? 'w-1/3 opacity-50' : 'w-1/2'}`}
        >
          <img src={rightImage} alt="Star Pride" className="w-full h-full object-cover object-right" />
          <div className="absolute inset-0 bg-gradient-to-l from-navy-950/90 via-navy-950/50 to-transparent"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-24 min-h-[600px] flex flex-col justify-center">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest text-gold-400 font-semibold px-4 py-1.5 rounded-full bg-gold-400/10 border border-gold-400/30 mb-4">
              <Anchor className="w-3.5 h-3.5" />
              <span>Interactive Showdown</span>
            </span>
            <h2 className="text-3xl md:text-5xl font-display text-white">The Luxury Split</h2>
            <p className="text-slate-300 mt-4 max-w-2xl mx-auto">Hover to explore the distinct personalities of Windstar's signature fleets.</p>
          </div>
        </FadeIn>

        <div className="flex flex-col md:flex-row w-full gap-8 md:gap-0 items-stretch justify-center h-full">
          <div 
            className="md:w-1/2 flex flex-col items-start justify-center p-8 transition-transform duration-500 cursor-pointer"
            onMouseEnter={() => setHoveredSide('left')}
            onMouseLeave={() => setHoveredSide(null)}
          >
            <div className={`transition-all duration-500 ${hoveredSide === 'left' ? 'scale-105 transform translate-x-4' : 'scale-100 opacity-80'}`}>
              <Wind className="w-12 h-12 text-gold-400 mb-6" />
              <h3 className="text-4xl md:text-5xl font-display text-white mb-4">Wind Surf</h3>
              <div className="text-gold-400 font-sans tracking-widest text-sm uppercase mb-6 border-b border-gold-400/30 pb-4 inline-block">Sailing Yacht</div>
              <ul className="space-y-4 text-slate-200">
                <li className="flex items-center space-x-3">
                  <span className="w-1.5 h-1.5 bg-gold-400 rounded-full"></span>
                  <span>Authentic Sailing Experience</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-1.5 h-1.5 bg-gold-400 rounded-full"></span>
                  <span>Extensive Outdoor Living</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-1.5 h-1.5 bg-gold-400 rounded-full"></span>
                  <span>Distinctive Romance & Atmosphere</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="hidden md:flex flex-col items-center justify-center opacity-50 relative z-20">
            <div className="h-32 w-px bg-gold-400/50"></div>
            <div className="my-4 text-gold-400 font-display italic text-xl px-4 bg-navy-950/50 backdrop-blur-sm rounded-full">VS</div>
            <div className="h-32 w-px bg-gold-400/50"></div>
          </div>

          <div 
            className="md:w-1/2 flex flex-col items-end justify-center p-8 transition-transform duration-500 cursor-pointer text-right"
            onMouseEnter={() => setHoveredSide('right')}
            onMouseLeave={() => setHoveredSide(null)}
          >
            <div className={`transition-all duration-500 flex flex-col items-end ${hoveredSide === 'right' ? 'scale-105 transform -translate-x-4' : 'scale-100 opacity-80'}`}>
              <Ship className="w-12 h-12 text-gold-400 mb-6" />
              <h3 className="text-4xl md:text-5xl font-display text-white mb-4">Star Pride</h3>
              <div className="text-gold-400 font-sans tracking-widest text-sm uppercase mb-6 border-b border-gold-400/30 pb-4 inline-block">All-Suite Motor Yacht</div>
              <ul className="space-y-4 text-slate-200 text-right">
                <li className="flex items-center justify-end space-x-3">
                  <span>Spacious All-Suite Accommodations</span>
                  <span className="w-1.5 h-1.5 bg-gold-400 rounded-full"></span>
                </li>
                <li className="flex items-center justify-end space-x-3">
                  <span>Abundant Private Balconies</span>
                  <span className="w-1.5 h-1.5 bg-gold-400 rounded-full"></span>
                </li>
                <li className="flex items-center justify-end space-x-3">
                  <span>Refined Traditional Luxury</span>
                  <span className="w-1.5 h-1.5 bg-gold-400 rounded-full"></span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SplitYachtShowdown;
