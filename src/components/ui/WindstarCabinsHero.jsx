import React from 'react';
import MasterImage from './MasterImage';
import FadeIn from './FadeIn';

const WindstarCabinsHero = ({ title, subtitle, description, backgroundImage }) => {
  return (
    <div className="relative w-full min-h-[75vh] flex items-center justify-center overflow-hidden bg-navy-950">
      {/* Background Image with subtle zoom micro-animation */}
      <div className="absolute inset-0 z-0">
        <MasterImage
          src={backgroundImage}
          alt="Windstar Luxury Cruise Ship"
          className="w-full h-full object-cover object-center transform scale-105 animate-subtleZoom opacity-70"
        />
        {/* Navy/Gold luxury gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/60 via-transparent to-navy-950/60"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center py-20">
        <FadeIn direction="up" delay={0.1}>
          <span className="inline-block text-xs font-bold uppercase tracking-[0.3em] text-ts-gold bg-ts-gold/10 border border-ts-gold/30 px-4 py-1.5 rounded-full mb-6">
            Windstar 2026 Fleet Insights
          </span>
        </FadeIn>
        
        <FadeIn direction="up" delay={0.2}>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight font-extrabold tracking-tight whitespace-pre-line drop-shadow-lg">
            {title}
          </h1>
        </FadeIn>

        <div className="w-24 h-0.5 bg-ts-gold mx-auto my-8 animate-pulse"></div>

        <FadeIn direction="up" delay={0.3}>
          <p className="font-display text-xl sm:text-2xl text-slate-200 italic font-light max-w-3xl mx-auto mb-6">
            {subtitle}
          </p>
        </FadeIn>

        <FadeIn direction="up" delay={0.4}>
          <p className="font-sans text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
        </FadeIn>

        {/* Floating Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400">
          <span className="text-[10px] uppercase tracking-[0.2em] font-bold">Explore Cabins</span>
          <div className="w-1 h-8 rounded-full bg-slate-400/20 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-3 bg-ts-gold rounded-full animate-scrollIndicator"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WindstarCabinsHero;
