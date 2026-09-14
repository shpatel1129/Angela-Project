import React, { useState } from 'react';
import { motion } from 'framer-motion';
import FadeIn from './FadeIn';
import MasterImage from './MasterImage';

const RiverJourneyShowcase = ({ title, subtitle, regions }) => {
  const [activeIdx, setActiveIdx] = useState(0);

  if (!regions || regions.length === 0) return null;

  return (
    <section className="relative w-full py-32 bg-[#f8fafc] overflow-hidden">
      
      {/* 
        PROPER RIVER FLOW DESIGN 
        A beautiful, meandering SVG river that scales gracefully.
      */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-40">
        <svg 
          className="absolute left-1/2 top-0 h-full w-[800px] transform -translate-x-1/2" 
          viewBox="0 0 1000 1000" 
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M500,0 C700,250 300,750 500,1000" 
            fill="none" 
            stroke="url(#riverGradDark)" 
            strokeWidth="120" 
            strokeLinecap="round"
            className="opacity-20"
          />
          <path 
            d="M500,0 C700,250 300,750 500,1000" 
            fill="none" 
            stroke="url(#riverGradLight)" 
            strokeWidth="60" 
            strokeLinecap="round"
            className="opacity-70"
          />
          <defs>
            <linearGradient id="riverGradDark" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#cbd5e1" stopOpacity="0" />
              <stop offset="25%" stopColor="#3b82f6" stopOpacity="0.8" />
              <stop offset="75%" stopColor="#2563eb" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#cbd5e1" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="riverGradLight" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#e2e8f0" stopOpacity="0" />
              <stop offset="25%" stopColor="#93c5fd" stopOpacity="0.9" />
              <stop offset="75%" stopColor="#60a5fa" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#e2e8f0" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <FadeIn className="text-center mb-24 md:mb-40">
          {subtitle && (
             <span className="font-sans text-ts-gold uppercase tracking-widest text-sm font-bold mb-4 block">
                {subtitle}
             </span>
          )}
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-navy-950 mb-8 leading-tight">
            {title}
          </h2>
          <div className="w-24 h-1.5 bg-blue-500 mx-auto rounded-full shadow-lg"></div>
        </FadeIn>

        {/* River Journey Container */}
        <div className="relative flex flex-col gap-32 md:gap-48 pb-24">
          
          {/* Subtle straight line acting as a guide rail for the dots */}
          <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-[1px] bg-slate-300 transform md:-translate-x-1/2 z-0 hidden md:block"></div>

          {regions.map((region, idx) => {
            const isEven = idx % 2 === 0;
            const isActive = activeIdx === idx;
            
            return (
              <div 
                key={idx} 
                className={`relative flex flex-col md:flex-row items-center w-full min-h-[400px] group cursor-pointer ${!isEven ? 'md:flex-row-reverse' : ''}`}
                onMouseEnter={() => setActiveIdx(idx)}
              >
                
                {/* 
                  INTERACTIVE HOVER POINT 
                  Uses Framer Motion layoutId to physically move the point to the hovered section
                */}
                <div className="absolute left-[28px] md:left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 flex items-center justify-center w-16 h-16">
                  {/* Inactive Dot */}
                  <div className={`w-3 h-3 rounded-full transition-colors duration-500 ${isActive ? 'bg-transparent' : 'bg-slate-300 group-hover:bg-blue-300'}`}></div>
                  
                  {/* The Moving Active Dot */}
                  {isActive && (
                    <motion.div 
                      layoutId="river-marker"
                      className="absolute w-6 h-6 bg-ts-gold rounded-full border-[3px] border-white flex items-center justify-center shadow-[0_0_25px_rgba(212,175,55,1)]"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    >
                      <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
                    </motion.div>
                  )}
                </div>

                {/* Spacer for the opposite side */}
                <div className="hidden md:block w-1/2"></div>

                {/* Content Container - Rich, Premium, Asymmetric Overlap */}
                <div className={`w-full md:w-1/2 pt-16 md:pt-0 ${isEven ? 'md:pr-16 lg:pr-24' : 'md:pl-16 lg:pl-24'}`}>
                  <FadeIn direction={isEven ? 'right' : 'left'}>
                    
                    <div className="relative w-full flex items-center justify-center">
                      
                      {/* Large Premium Image */}
                      <div className={`relative w-full md:w-[90%] h-[400px] md:h-[550px] rounded-[2rem] overflow-hidden shadow-2xl transition-transform duration-[1500ms] ease-out ${isActive ? 'scale-105 shadow-3xl' : 'scale-100'} ${isEven ? 'md:mr-auto' : 'md:ml-auto'}`}>
                        <MasterImage 
                          src={region.image} 
                          alt={region.title} 
                          className="w-full h-full object-cover" 
                        />
                        {/* Cinematic Overlay */}
                        <div className={`absolute inset-0 transition-colors duration-700 ${isActive ? 'bg-navy-950/20' : 'bg-navy-950/40'}`}></div>
                      </div>

                      {/* Overlapping Glassmorphism Content Card */}
                      <div className={`absolute z-10 w-[95%] md:w-[85%] max-w-[450px] bg-white/95 backdrop-blur-xl border border-white/50 p-8 md:p-12 shadow-2xl transition-all duration-700 
                        ${isActive ? '-translate-y-4 shadow-[0_20px_40px_rgba(0,0,0,0.1)]' : 'translate-y-0 shadow-lg'}
                        ${isEven ? 'bottom-[-2rem] md:bottom-auto md:right-0 md:rounded-tl-[3rem] md:rounded-br-[3rem] md:rounded-tr-xl md:rounded-bl-xl' : 'bottom-[-2rem] md:bottom-auto md:left-0 md:rounded-tr-[3rem] md:rounded-bl-[3rem] md:rounded-tl-xl md:rounded-br-xl'}
                        rounded-2xl
                      `}>
                        <h4 className="font-sans text-ts-gold font-bold tracking-widest uppercase text-[10px] md:text-xs mb-3">{region.category}</h4>
                        <h3 className="font-display text-3xl md:text-5xl text-navy-950 mb-4 leading-none">{region.title}</h3>
                        {region.subtitle && (
                          <p className="font-sans text-blue-600 font-medium mb-4">{region.subtitle}</p>
                        )}
                        <p className="font-sans text-slate-600 leading-relaxed text-sm md:text-base">
                          {region.description}
                        </p>
                      </div>

                    </div>

                  </FadeIn>
                </div>

              </div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
};

export default RiverJourneyShowcase;
