import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MasterImage from './MasterImage';

const InteractiveCompetitorComparison = ({ title, subtitle, competitors, className }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  if (!competitors || competitors.length === 0) return null;
  
  const activeCompetitor = competitors[activeIndex];

  return (
    <section className={`relative w-full overflow-hidden ${className !== undefined ? className : 'py-24 bg-white'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        {(title || subtitle) && (
          <div className="text-center mb-16">
            {subtitle && (
              <span className="font-sans text-xs font-bold tracking-[0.2em] uppercase text-gold-500 mb-4 block">
                {subtitle}
              </span>
            )}
            {title && (
              <h2 className="font-display text-4xl md:text-5xl text-navy-950 mb-6">
                {title}
              </h2>
            )}
          </div>
        )}

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Left: Navigation Tabs */}
          <div className="lg:col-span-4 flex flex-col gap-4 h-full">
            {competitors.map((comp, idx) => {
              const isActive = idx === activeIndex;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`group relative w-full flex-1 text-left px-6 py-4 flex items-center transition-all duration-500 overflow-hidden border ${
                    isActive 
                      ? 'bg-navy-950 border-navy-950 shadow-xl' 
                      : 'bg-white border-slate-200 hover:border-gold-300 hover:bg-slate-50'
                  }`}
                >
                  <div className="relative z-10 w-full">
                    <div className="flex items-center justify-between">
                      <h3 className={`font-display text-xl transition-colors duration-300 ${
                        isActive ? 'text-white' : 'text-navy-950 group-hover:text-gold-600'
                      }`}>
                        {comp.title || comp.name}
                      </h3>
                      <div className={`transform transition-transform duration-300 ${isActive ? 'translate-x-0 opacity-100' : 'opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0'}`}>
                        <svg className={`w-5 h-5 ${isActive ? 'text-gold-400' : 'text-gold-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  {/* Subtle active state background decoration */}
                  {isActive && (
                    <motion.div 
                      layoutId="activeTabIndicator"
                      className="absolute inset-0 bg-navy-950 z-0"
                      initial={false}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Right: Content Area (Image + Text) */}
          <div className="lg:col-span-8 relative h-[600px] lg:h-[700px] bg-slate-100 overflow-hidden shadow-2xl group">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 w-full h-full"
              >
                {/* Background Image */}
                {activeCompetitor.image ? (
                  <MasterImage
                    src={activeCompetitor.image}
                    alt={activeCompetitor.title || activeCompetitor.name || "Comparison"}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 bg-navy-900" />
                )}
                
                {/* Gradient Overlay for Text Legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/30 to-transparent" />

                {/* Content Box (Glassmorphism) */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="backdrop-blur-md bg-white/10 border border-white/20 p-8 shadow-2xl relative overflow-hidden"
                  >
                    {/* Decorative Top Line */}
                    <div className="absolute top-0 left-0 w-16 h-1 bg-gold-500" />
                    
                    <h4 className="font-display text-2xl md:text-3xl text-white mb-4 drop-shadow-md">
                      {activeCompetitor.name || activeCompetitor.title}
                    </h4>
                    <p className="font-sans text-white/90 text-lg leading-relaxed font-light drop-shadow">
                      {activeCompetitor.description}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};

export default InteractiveCompetitorComparison;
