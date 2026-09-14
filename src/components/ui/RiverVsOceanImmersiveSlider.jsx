import React, { useState } from 'react';
import FadeIn from './FadeIn';

const RiverVsOceanImmersiveSlider = ({ title, subtitle, riverData, oceanData }) => {
  const [hovered, setHovered] = useState('none'); // 'river', 'ocean', 'none'

  return (
    <section className="w-full py-20 bg-navy-950 text-white overflow-hidden relative border-y border-gold-400/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-12 text-center">
        <FadeIn>
          <span className="text-xs uppercase tracking-widest text-gold-400 font-semibold mb-3 block">
            Visual Contrast
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-normal text-white mb-6">
            {title}
          </h2>
          <div className="w-16 h-0.5 bg-gold-400 mx-auto mb-6"></div>
          <p className="text-base md:text-lg text-slate-300 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </FadeIn>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row h-[600px] w-full rounded-2xl overflow-hidden border border-gold-400/30 shadow-2xl relative">
          
          {/* River Side */}
          <div 
            className={`relative h-1/2 md:h-full transition-all duration-700 ease-in-out cursor-pointer overflow-hidden ${
              hovered === 'river' ? 'md:w-3/4' : hovered === 'ocean' ? 'md:w-1/4' : 'md:w-1/2'
            }`}
            onMouseEnter={() => setHovered('river')}
            onMouseLeave={() => setHovered('none')}
          >
            <img 
              src={riverData.image} 
              alt={riverData.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 scale-105 hover:scale-110"
            />
            <div className="absolute inset-0 bg-navy-950/40 hover:bg-navy-950/20 transition-all duration-500"></div>
            
            <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 bg-gradient-to-t from-navy-950 via-navy-950/80 to-transparent flex flex-col justify-end">
              <h3 className="text-2xl md:text-4xl font-display text-white mb-3">
                {riverData.title}
              </h3>
              <p className={`text-slate-200 text-sm md:text-base transition-all duration-500 ${
                hovered === 'river' || hovered === 'none' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 md:hidden'
              }`}>
                {riverData.description}
              </p>
            </div>
          </div>

          {/* Divider line for desktop */}
          <div className="hidden md:block w-1 h-full bg-gold-400 z-10 shrink-0"></div>
          {/* Divider line for mobile */}
          <div className="md:hidden h-1 w-full bg-gold-400 z-10 shrink-0"></div>

          {/* Ocean Side */}
          <div 
            className={`relative h-1/2 md:h-full transition-all duration-700 ease-in-out cursor-pointer overflow-hidden ${
              hovered === 'ocean' ? 'md:w-3/4' : hovered === 'river' ? 'md:w-1/4' : 'md:w-1/2'
            }`}
            onMouseEnter={() => setHovered('ocean')}
            onMouseLeave={() => setHovered('none')}
          >
            <img 
              src={oceanData.image} 
              alt={oceanData.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 scale-105 hover:scale-110"
            />
            <div className="absolute inset-0 bg-navy-950/40 hover:bg-navy-950/20 transition-all duration-500"></div>
            
            <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 bg-gradient-to-t from-navy-950 via-navy-950/80 to-transparent flex flex-col justify-end">
              <h3 className="text-2xl md:text-4xl font-display text-white mb-3">
                {oceanData.title}
              </h3>
              <p className={`text-slate-200 text-sm md:text-base transition-all duration-500 ${
                hovered === 'ocean' || hovered === 'none' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 md:hidden'
              }`}>
                {oceanData.description}
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default RiverVsOceanImmersiveSlider;
