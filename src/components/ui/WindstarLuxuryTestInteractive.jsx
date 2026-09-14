import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Circle, Ship, Anchor, Coffee, MapPin, Sparkles, Award } from 'lucide-react';

const testQuestions = [
  { id: 1, text: "I prefer small ships to mega-ships.", icon: Ship },
  { id: 2, text: "I care more about destinations than onboard entertainment.", icon: MapPin },
  { id: 3, text: "I enjoy casual luxury.", icon: Coffee },
  { id: 4, text: "I don't need a casino.", icon: Anchor },
  { id: 5, text: "I don't need extensive children's programming.", icon: Sparkles },
  { id: 6, text: "I enjoy sailing.", icon: Ship },
  { id: 7, text: "I prefer intimate restaurants to dozens of choices.", icon: Award },
  { id: 8, text: "I enjoy relaxing without a packed activity schedule.", icon: Coffee },
  { id: 9, text: "I value personalized service.", icon: Sparkles },
  { id: 10, text: "I like yacht-style travel.", icon: Anchor },
];

const WindstarLuxuryTestInteractive = ({ title, subtitle, backgroundImage }) => {
  const [selectedIds, setSelectedIds] = useState([]);
  
  const toggleSelection = (id) => {
    setSelectedIds((prev) => 
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const score = selectedIds.length;

  let resultTitle = "";
  let resultText = "";
  let resultColor = "";

  if (score >= 8) {
    resultTitle = "Excellent Match";
    resultText = "Windstar could be an extraordinarily luxurious match for your travel style.";
    resultColor = "text-gold-400";
  } else if (score >= 5) {
    resultTitle = "Strong Consideration";
    resultText = "Windstar deserves a detailed comparison with other luxury cruise lines to ensure a perfect fit.";
    resultColor = "text-blue-400";
  } else if (score > 0) {
    resultTitle = "Explore Alternatives";
    resultText = "Another luxury cruise style may better match your expectations, though some Windstar elements appeal to you.";
    resultColor = "text-slate-400";
  } else {
    resultTitle = "Take the Test";
    resultText = "Select the statements that describe your travel personality to reveal your match.";
    resultColor = "text-white";
  }

  return (
    <section className="w-full py-24 bg-navy-950 relative overflow-hidden">
      {/* Background with overlay */}
      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          <img src={backgroundImage} alt="Windstar Background" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-900/90 to-navy-950/80"></div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest text-gold-400 font-semibold px-4 py-1.5 rounded-full bg-gold-400/10 border border-gold-400/30 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Matchmaker</span>
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-normal text-white mb-6">
            {title || "The Windstar Luxury Test"}
          </h2>
          <div className="w-16 h-0.5 bg-gold-400 mx-auto mb-6"></div>
          <p className="text-base md:text-lg text-slate-300 leading-relaxed">
            {subtitle || "Give yourself one point for every statement that describes you. Find out if Windstar is the right kind of luxury for your next voyage."}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Questions Grid */}
          <div className="lg:w-2/3 w-full grid grid-cols-1 md:grid-cols-2 gap-4">
            {testQuestions.map((q) => {
              const isSelected = selectedIds.includes(q.id);
              const Icon = q.icon;
              return (
                <motion.div
                  key={q.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => toggleSelection(q.id)}
                  className={`p-5 rounded-2xl cursor-pointer border backdrop-blur-sm transition-all duration-300 flex items-start space-x-4
                    ${isSelected 
                      ? 'bg-gold-400/10 border-gold-400 text-white shadow-lg shadow-gold-400/10' 
                      : 'bg-navy-900/50 border-slate-700/50 text-slate-300 hover:border-gold-400/30 hover:bg-navy-900/80'
                    }`}
                >
                  <div className={`mt-0.5 shrink-0 ${isSelected ? 'text-gold-400' : 'text-slate-500'}`}>
                    {isSelected ? <CheckCircle2 className="w-6 h-6" /> : <Circle className="w-6 h-6" />}
                  </div>
                  <div>
                    <p className="text-sm md:text-base font-medium leading-tight">
                      {q.text}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Sticky Score Panel */}
          <div className="lg:w-1/3 w-full sticky top-32">
            <div className="bg-navy-900/80 border border-gold-400/30 rounded-3xl p-8 backdrop-blur-md shadow-2xl text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-gold-400/10 rounded-full blur-3xl pointer-events-none"></div>
              
              <h3 className="text-sm uppercase tracking-widest text-slate-400 font-semibold mb-6">
                Your Match Score
              </h3>
              
              <div className="flex justify-center items-baseline space-x-2 mb-8">
                <span className="text-7xl font-display text-white">
                  {score}
                </span>
                <span className="text-2xl text-slate-500 font-display">
                  / 10
                </span>
              </div>

              <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-700 to-transparent mb-8"></div>

              <div className="min-h-[120px] flex flex-col justify-center items-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={resultTitle}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h4 className={`text-xl font-display mb-3 ${resultColor}`}>
                      {resultTitle}
                    </h4>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {resultText}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              {score >= 5 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 }}
                  className="mt-8"
                >
                  <a href="https://www.tripsandships.com/contact" className="inline-block w-full bg-gold-400 hover:bg-gold-500 text-navy-950 font-semibold py-3.5 px-6 rounded-xl text-sm transition-all shadow-lg hover:shadow-gold-400/20">
                    Discuss Your Cruise
                  </a>
                </motion.div>
              )}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WindstarLuxuryTestInteractive;
