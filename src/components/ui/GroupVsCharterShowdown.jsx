import React, { useState } from 'react';
import FadeIn from './FadeIn';
import { Check, AlertTriangle, Star } from 'lucide-react';

const GroupVsCharterShowdown = ({ title, subtitle, options }) => {
  // null means neither is explicitly hovered (50/50 split). 0 or 1 means one is expanded.
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="w-full bg-navy-950 text-white overflow-hidden pb-0 pt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
        <FadeIn>
          <span className="text-gold-400 text-xs font-bold tracking-widest uppercase mb-3 block">
            The Ultimate Decision
          </span>
          <h2 className="text-3xl md:text-5xl font-display mb-4">{title}</h2>
          <div className="w-24 h-0.5 bg-gold-400 mx-auto mb-6"></div>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto italic">
            "{subtitle}"
          </p>
        </FadeIn>
      </div>

      <div className="flex flex-col md:flex-row w-full min-h-[800px] md:min-h-[700px] relative bg-navy-900 border-y border-gold-400/20">
        {options.map((option, idx) => {
          const isActive = hoveredIndex === idx;
          const isOtherActive = hoveredIndex !== null && hoveredIndex !== idx;

          // Determine width class for desktop
          let widthClass = "md:w-1/2";
          if (isActive) widthClass = "md:w-[65%]";
          if (isOtherActive) widthClass = "md:w-[35%]";

          return (
            <div
              key={idx}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`relative flex flex-col justify-end w-full ${widthClass} transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group border-b md:border-b-0 md:border-r border-gold-400/20 last:border-0`}
            >
              {/* Background Image & Overlays */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                style={{ backgroundImage: `url(${option.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/80 to-transparent opacity-90 transition-opacity duration-700" />
              <div className={`absolute inset-0 bg-navy-950/40 transition-opacity duration-700 ${isActive ? 'opacity-0' : 'opacity-100'}`} />

              {/* Content Container */}
              <div className="relative z-10 p-8 md:p-12 w-full h-full flex flex-col justify-end">
                
                {/* Header (Always visible) */}
                <div className="mb-6">
                  <span className="text-gold-400 font-semibold tracking-wider uppercase text-sm mb-2 block drop-shadow-md">
                    {option.category}
                  </span>
                  <h3 className={`font-display text-4xl md:text-5xl lg:text-6xl text-white drop-shadow-lg transition-all duration-700 ${isOtherActive ? 'md:text-3xl lg:text-4xl' : ''}`}>
                    {option.name}
                  </h3>
                  <p className={`mt-4 text-slate-200 text-lg leading-relaxed transition-all duration-700 ${isOtherActive ? 'opacity-0 h-0 overflow-hidden mt-0' : 'opacity-100 h-auto'}`}>
                    {option.description}
                  </p>
                </div>

                {/* Expanded Details (Fades in when hovered/expanded) */}
                <div className={`transition-all duration-700 overflow-hidden ${isActive ? 'opacity-100 max-h-[800px] translate-y-0' : 'opacity-0 max-h-0 md:opacity-0 translate-y-10 md:translate-y-4'}`}>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-6">
                    {/* Key Advantages */}
                    <div>
                      <h4 className="flex items-center text-gold-400 font-display text-xl mb-4 border-b border-gold-400/30 pb-2">
                        <Check className="w-5 h-5 mr-2" /> Key Advantages
                      </h4>
                      <ul className="space-y-3">
                        {option.keyAdvantages?.map((adv, i) => (
                          <li key={i} className="flex items-start text-slate-200 text-sm md:text-base">
                            <span className="text-gold-400 mr-2 mt-1">•</span>
                            <span>{adv}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-col justify-between">
                      {/* Trade-offs */}
                      <div>
                        <h4 className="flex items-center text-slate-400 font-display text-xl mb-4 border-b border-slate-600 pb-2">
                          <AlertTriangle className="w-5 h-5 mr-2" /> Trade-Offs
                        </h4>
                        <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                          {option.tradeOffs}
                        </p>
                      </div>

                      {/* Verdict */}
                      <div className="mt-8 bg-gold-400/10 p-5 rounded-xl border border-gold-400/30 backdrop-blur-sm">
                        <h4 className="flex items-center text-gold-400 font-display text-lg mb-2">
                          <Star className="w-4 h-4 mr-2" fill="currentColor" /> The Verdict
                        </h4>
                        <p className="text-white font-medium text-sm md:text-base">
                          {option.verdict}
                        </p>
                      </div>
                    </div>
                  </div>

                </div>
                
                {/* Visual cue to hover on desktop */}
                {!isActive && !isOtherActive && (
                  <div className="hidden md:block absolute bottom-8 right-8 text-gold-400/60 text-sm animate-pulse">
                    Hover to explore
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default GroupVsCharterShowdown;
