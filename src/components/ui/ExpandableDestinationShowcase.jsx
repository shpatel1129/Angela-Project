import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MasterImage from './MasterImage';

const ExpandableDestinationShowcase = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!items || items.length === 0) return null;

  return (
    <section className="w-full bg-navy-950 py-16 px-4 md:px-8">
      <div className="max-w-[1400px] mx-auto mb-12 text-center">
        <h2 className="font-display text-4xl md:text-5xl text-white mb-4">
          Unforgettable Horizons
        </h2>
        <div className="w-12 h-0.5 bg-ice-500 mx-auto mb-6"></div>
        <p className="font-sans text-ice-200 text-lg max-w-2xl mx-auto">
          Hover over each destination to discover the unparalleled luxury and exploration that await you on a Regent cruise.
        </p>
      </div>

      {/* Accordion Container */}
      <div className="w-full h-[600px] max-w-[1400px] mx-auto flex gap-2 overflow-hidden rounded-2xl">
        {items.map((item, index) => {
          const isActive = activeIndex === index;

          return (
            <motion.div
              key={index}
              layout
              initial={false}
              onMouseEnter={() => setActiveIndex(index)}
              onClick={() => setActiveIndex(index)}
              animate={{
                flex: isActive ? (typeof window !== 'undefined' && window.innerWidth < 768 ? 4 : 6) : 1,
              }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 25,
                mass: 0.8
              }}
              className={`relative overflow-hidden cursor-pointer rounded-xl bg-navy-900 shadow-xl ${
                !isActive && 'group'
              }`}
            >
              {/* Background Image */}
              <div className="absolute inset-0 w-full h-full">
                <MasterImage 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out origin-center"
                  style={{
                    transform: isActive ? 'scale(1.05)' : 'scale(1)'
                  }}
                />
                
                {/* Gradient Overlays */}
                <div 
                  className={`absolute inset-0 transition-opacity duration-700 ${
                    isActive 
                      ? 'bg-gradient-to-t from-navy-950 via-navy-950/60 to-transparent opacity-90' 
                      : 'bg-navy-950/40 group-hover:bg-navy-950/20'
                  }`}
                />
              </div>

              {/* Inactive Vertical Title */}
              <AnimatePresence>
                {!isActive && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="absolute inset-0 flex items-center justify-center pointer-events-none"
                  >
                    <div className="transform -rotate-90 whitespace-nowrap">
                      <span className="font-display text-2xl md:text-3xl text-white tracking-wider drop-shadow-md">
                        {item.title}
                      </span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Active Content */}
              <AnimatePresence>
                {isActive && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.4, delay: 0.15 }}
                    className="absolute bottom-0 left-0 right-0 p-6 md:p-10 pointer-events-none"
                  >
                    {item.subtitle && (
                      <span className="font-sans text-xs md:text-sm text-ice-300 font-bold tracking-[0.2em] uppercase mb-3 block">
                        {item.subtitle}
                      </span>
                    )}
                    <h3 className="font-display text-4xl md:text-6xl text-white mb-4 drop-shadow-lg leading-tight">
                      {item.title}
                    </h3>
                    {item.description && (
                      <p className="font-sans text-sm md:text-base text-ice-100 max-w-xl drop-shadow leading-relaxed">
                        {item.description}
                      </p>
                    )}
                    
                    <motion.div 
                      className="w-12 h-1 bg-ice-400 mt-6"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: 0.4, duration: 0.5 }}
                      style={{ transformOrigin: 'left' }}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default ExpandableDestinationShowcase;
