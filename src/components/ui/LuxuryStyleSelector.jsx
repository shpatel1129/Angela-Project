import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LuxuryStyleSelector = ({ data }) => {
  const [selectedMatch, setSelectedMatch] = useState(null);
  const [activeId, setActiveId] = useState(null);

  if (!data) return null;

  const handleSelect = (option) => {
    setActiveId(option.id);
    // Use dynamic matchDetails if provided in the option, otherwise fallback to hardcoded legacy matches
    if (option.matchDetails) {
      setSelectedMatch(option.matchDetails);
    } else {
      setSelectedMatch(getLegacyMatchDetails(option.match));
    }
  };

  const getLegacyMatchDetails = (match) => {
    if (match === 'amawaterways') {
      return {
        title: "Your Match: AmaWaterways",
        description: "You value active exploration, regional culinary excellence, and a warm, sociable environment. AmaWaterways delivers premium luxury with an emphasis on personal connection and wellness.",
        color: "bg-amber-50 text-amber-900 border-amber-200",
        badge: "Premium & Active"
      };
    }
    if (match === 'scenic') {
      return {
        title: "Your Match: Scenic",
        description: "You value effortless, ultra-luxury where everything is taken care of. With butler service and true all-inclusive pricing, Scenic provides a sophisticated, refined retreat.",
        color: "bg-slate-50 text-slate-900 border-slate-200",
        badge: "Ultra-Luxury & All-Inclusive"
      };
    }
    return null;
  };

  return (
    <section className="py-20 bg-ice-50">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display text-navy-950 mb-4">
            {data.title || "Which Luxury Style Fits You?"}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-sans">
            {data.subtitle || "Select the priority that matters most to you on vacation to discover your perfect river cruise match."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {data.options?.map((option) => (
            <motion.button
              key={option.id}
              onClick={() => handleSelect(option)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`p-6 text-left rounded-xl border transition-all duration-300 ${
                activeId === option.id 
                  ? 'border-navy-900 bg-navy-50 shadow-md ring-2 ring-navy-900/20' 
                  : 'border-gray-200 bg-white hover:border-navy-300 hover:shadow-sm'
              }`}
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-display text-navy-950 mb-2">{option.label}</h3>
                  <p className="text-gray-600 font-sans text-sm leading-relaxed">{option.description}</p>
                </div>
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 ml-4 ${
                  activeId === option.id ? 'border-navy-900 bg-navy-900' : 'border-gray-300'
                }`}>
                  {activeId === option.id && (
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
              </div>
            </motion.button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {selectedMatch && (
            <motion.div
              key={selectedMatch.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className={`p-8 rounded-2xl border ${selectedMatch.color} shadow-lg bg-white`}
            >
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1">
                  <span className="inline-block px-3 py-1 rounded-full bg-white/60 backdrop-blur-sm text-sm font-semibold tracking-wide uppercase mb-4 shadow-sm">
                    {selectedMatch.badge}
                  </span>
                  <h3 className="text-3xl font-display mb-4">{selectedMatch.title}</h3>
                  <p className="text-lg opacity-90 font-sans leading-relaxed">
                    {selectedMatch.description}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default LuxuryStyleSelector;
