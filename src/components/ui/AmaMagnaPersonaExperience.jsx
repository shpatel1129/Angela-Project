import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FadeIn from './FadeIn';

const AmaMagnaPersonaExperience = ({ title, subtitle, personas }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="w-full py-24 bg-white relative overflow-hidden">
      {/* Background elegant pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#d4af37 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="font-sans text-accent-600 tracking-[0.2em] uppercase text-sm font-bold mb-4 block">
              Curated Luxury
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-navy-950 mb-6">
              {title}
            </h2>
            <p className="font-sans text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          </div>
        </FadeIn>

        {/* Persona Selectors */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {personas.map((persona, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`relative px-8 py-4 rounded-full font-sans text-sm md:text-base tracking-widest uppercase transition-all duration-300 ${
                activeTab === index 
                  ? 'text-white bg-navy-950 shadow-xl scale-105' 
                  : 'text-navy-900 bg-ice-50 hover:bg-ice-100'
              }`}
            >
              {persona.name}
              {activeTab === index && (
                <motion.div 
                  layoutId="activeTabIndicator"
                  className="absolute inset-0 rounded-full border-2 border-accent-500"
                  initial={false}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Active Persona Content */}
        <div className="relative min-h-[600px] rounded-3xl overflow-hidden bg-navy-950 text-white shadow-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex flex-col lg:flex-row"
            >
              {/* Image Section */}
              <div className="lg:w-1/2 relative h-64 lg:h-full">
                <img 
                  src={personas[activeTab].image} 
                  alt={personas[activeTab].name}
                  className="absolute inset-0 w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-navy-950 via-navy-950/40 to-transparent"></div>
              </div>

              {/* Content Section */}
              <div className="lg:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center relative z-10">
                <span className="inline-block px-4 py-1 rounded-full bg-accent-500/20 border border-accent-500/30 text-accent-400 font-sans text-xs uppercase tracking-[0.2em] mb-6 self-start">
                  The Perfect Day
                </span>
                
                <h3 className="font-display text-3xl md:text-4xl text-white mb-6">
                  {personas[activeTab].headline}
                </h3>
                
                <p className="font-sans text-ice-200 leading-relaxed mb-10 text-lg">
                  {personas[activeTab].description}
                </p>

                <div className="space-y-6">
                  {personas[activeTab].highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 mt-1">
                        <span className="font-display text-accent-400 text-lg">{idx + 1}</span>
                      </div>
                      <div>
                        <h4 className="font-sans font-bold text-white text-lg mb-1">{highlight.title}</h4>
                        <p className="font-sans text-sm text-ice-300 leading-relaxed">{highlight.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default AmaMagnaPersonaExperience;
