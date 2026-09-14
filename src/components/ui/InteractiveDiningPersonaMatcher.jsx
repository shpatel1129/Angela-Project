import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const InteractiveDiningPersonaMatcher = ({ data, images = [] }) => {
  const [activeId, setActiveId] = useState(data?.personas?.[0]?.id);

  if (!data || !data.personas) return null;

  const activePersona = data.personas.find(p => p.id === activeId) || data.personas[0];
  const activeIndex = data.personas.findIndex(p => p.id === activeId);
  const displayImage = images[activeIndex % images.length] || '';

  return (
    <section className="py-24 bg-navy-900 text-sand-50 relative overflow-hidden">
      {/* Background Abstract */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gold-500 rounded-full blur-[150px] mix-blend-screen translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500 rounded-full blur-[120px] mix-blend-screen -translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-gold-400 uppercase tracking-[0.2em] text-sm font-semibold mb-4 block">
            {data.eyebrow}
          </span>
          <h2 className="text-4xl md:text-5xl font-light mb-6">
            {data.heading}
          </h2>
          <p className="text-lg text-sand-300 font-light">
            {data.description}
          </p>
        </div>

        {/* Persona Selector Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {data.personas.map((persona) => {
            const isActive = activeId === persona.id;
            return (
              <button
                key={persona.id}
                onClick={() => setActiveId(persona.id)}
                className={`relative px-8 py-4 rounded-full text-sm tracking-wider transition-all duration-500 ${
                  isActive 
                    ? 'text-navy-900 bg-gold-400 font-medium shadow-[0_0_20px_rgba(212,175,55,0.3)]' 
                    : 'text-sand-300 border border-sand-300/20 hover:border-gold-400/50 hover:text-gold-400 bg-navy-800/50'
                }`}
              >
                {persona.name}
              </button>
            );
          })}
        </div>

        {/* Active Persona Content */}
        <div className="bg-navy-800/40 border border-sand-100/10 rounded-3xl p-1 overflow-hidden backdrop-blur-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 relative rounded-[22px] overflow-hidden">
            
            {/* Image Side */}
            <div className="relative h-[400px] lg:h-auto overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={displayImage}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
                  className="absolute inset-0"
                >
                  {displayImage ? (
                    <img 
                      src={displayImage} 
                      alt={activePersona.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-navy-800 flex items-center justify-center">
                      <span className="text-sand-100/20">Luxury Image</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-navy-900/20 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-navy-900/90" />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Content Side */}
            <div className="p-10 md:p-16 flex flex-col justify-center relative bg-navy-900/50 lg:bg-transparent">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activePersona.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                >
                  <h3 className="text-3xl font-light text-white mb-4">
                    {activePersona.name}
                  </h3>
                  <div className="w-12 h-1 bg-gold-400 mb-8" />
                  
                  <h4 className="text-xl text-gold-300 font-medium mb-4 italic">
                    "{activePersona.description}"
                  </h4>
                  
                  <div className="space-y-4">
                    <p className="text-sand-300 leading-relaxed font-light">
                      <strong className="text-sand-100 font-medium">Dining Strategy: </strong>
                      {activePersona.strategy}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveDiningPersonaMatcher;
