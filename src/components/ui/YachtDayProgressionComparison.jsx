import React, { useState } from 'react';
import FadeIn from './FadeIn';

const YachtDayProgressionComparison = ({ title, subtitle, progressions }) => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-24 bg-navy-950 text-white relative overflow-hidden">
      {/* Background Ornaments */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold-500/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-ice-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <FadeIn>
            <span className="font-sans text-xs uppercase tracking-[0.25em] text-gold-400 font-bold mb-3 block">
              {subtitle || "A Day at Sea"}
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-white font-bold">
              {title || "A Day in the Life Comparison"}
            </h2>
            <div className="w-16 h-[2px] bg-gold-400 mx-auto mt-6"></div>
          </FadeIn>
        </div>

        {/* Timeline navigation controls */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-navy-900 border border-white/5 p-1.5 rounded-full shadow-2xl">
            {progressions.map((prog, idx) => (
              <button
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`px-5 py-2.5 rounded-full font-sans text-xs md:text-sm font-bold uppercase tracking-wider transition-all duration-300 focus:outline-none ${
                  activeStep === idx 
                    ? 'bg-gold-500 text-navy-950 shadow-lg' 
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {prog.timeLabel}
              </button>
            ))}
          </div>
        </div>

        {/* Progression Card Content */}
        <FadeIn key={activeStep}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            
            {/* Windstar Day Experience */}
            <div className="bg-navy-900/60 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-white/5 shadow-2xl flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-display text-sm font-bold tracking-widest text-gold-400 uppercase">Windstar Cruises</span>
                  <span className="font-sans text-xs text-slate-500 uppercase font-medium">Activity Level: Active</span>
                </div>
                <h3 className="font-display text-2xl text-white font-bold mb-4">
                  {progressions[activeStep].windstar.title}
                </h3>
                <p className="font-sans text-slate-300 leading-relaxed font-light text-base mb-8">
                  {progressions[activeStep].windstar.description}
                </p>
              </div>
              
              {/* Highlight badge */}
              <div className="bg-white/5 border border-white/5 rounded-xl p-4 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse"></span>
                <span className="font-sans text-xs text-gold-300 font-semibold uppercase tracking-wider">
                  Highlight: {progressions[activeStep].windstar.highlight}
                </span>
              </div>
            </div>

            {/* SeaDream Day Experience */}
            <div className="bg-navy-900/60 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-gold-500/20 shadow-2xl flex flex-col justify-between relative">
              {/* Active boundary accent */}
              <div className="absolute inset-x-0 -top-px h-[2px] bg-gradient-to-r from-transparent via-gold-500 to-transparent rounded-t-full"></div>
              
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-display text-sm font-bold tracking-widest text-gold-400 uppercase">SeaDream Yacht Club</span>
                  <span className="font-sans text-xs text-slate-500 uppercase font-medium">Activity Level: Relaxed</span>
                </div>
                <h3 className="font-display text-2xl text-white font-bold mb-4">
                  {progressions[activeStep].seadream.title}
                </h3>
                <p className="font-sans text-slate-300 leading-relaxed font-light text-base mb-8">
                  {progressions[activeStep].seadream.description}
                </p>
              </div>

              {/* Highlight badge */}
              <div className="bg-gold-500/5 border border-gold-500/10 rounded-xl p-4 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse"></span>
                <span className="font-sans text-xs text-gold-300 font-semibold uppercase tracking-wider">
                  Highlight: {progressions[activeStep].seadream.highlight}
                </span>
              </div>
            </div>

          </div>
        </FadeIn>

      </div>
    </section>
  );
};

export default YachtDayProgressionComparison;
