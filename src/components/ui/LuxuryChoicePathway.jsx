import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Compass, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function LuxuryChoicePathway({ data }) {
  const [activeStep, setActiveStep] = useState(0);
  const [selectedResult, setSelectedResult] = useState(null);

  if (!data || !data.options) return null;

  const handleSelect = (index) => {
    setActiveStep(index);
    // Add a slight delay before showing the result for dramatic effect
    setTimeout(() => {
      setSelectedResult(data.options[index].result);
    }, 400);
  };

  const reset = () => {
    setActiveStep(0);
    setSelectedResult(null);
  };

  return (
    <section className="py-24 bg-zinc-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-zinc-200/50 to-transparent rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-stone-200/40 to-transparent rounded-full blur-[80px] translate-y-1/3 -translate-x-1/4 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-zinc-900 text-amber-500 mb-6 shadow-xl shadow-zinc-900/10"
          >
            <Compass size={32} />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif text-zinc-900 mb-6"
          >
            {data.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-zinc-600 max-w-2xl mx-auto"
          >
            Which statement best describes your ideal Greece vacation?
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Options Column */}
          <div className="space-y-4">
            {data.options.map((option, index) => {
              const isSelected = activeStep === index && selectedResult;

              return (
                <motion.button
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                  onClick={() => handleSelect(index)}
                  className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 relative overflow-hidden group ${isSelected
                    ? 'bg-zinc-900 border-zinc-900 shadow-xl'
                    : 'bg-white border-zinc-200 hover:border-zinc-400 hover:shadow-lg'
                    }`}
                >
                  <div className="flex items-start gap-4 relative z-10">
                    <div className={`mt-1 flex-shrink-0 transition-colors duration-300 ${isSelected ? 'text-amber-500' : 'text-zinc-400 group-hover:text-zinc-600'
                      }`}>
                      {isSelected ? <CheckCircle2 size={24} /> : <div className="w-6 h-6 rounded-full border-2 border-current" />}
                    </div>
                    <span className={`text-lg transition-colors duration-300 ${isSelected ? 'text-white' : 'text-zinc-700 group-hover:text-zinc-900'
                      }`}>
                      {option.statement}
                    </span>
                  </div>

                  {/* Hover background for unselected */}
                  {!isSelected && (
                    <div className="absolute inset-0 bg-zinc-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  )}
                </motion.button>
              );
            })}
          </div>

          {/* Result Column */}
          <div className="sticky top-24">
            <AnimatePresence mode="wait">
              {selectedResult ? (
                <motion.div
                  key="result"
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -20 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-zinc-900 rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden shadow-2xl"
                >
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=2574&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay" />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/80 to-transparent" />

                  <div className="relative z-10">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/20 text-amber-400 text-sm font-semibold tracking-wider uppercase mb-8">
                      Your Recommendation
                    </span>

                    <h3 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">
                      {selectedResult}
                    </h3>

                    <button
                      onClick={reset}
                      className="mt-8 text-zinc-400 hover:text-white transition-colors duration-300 text-sm flex items-center justify-center gap-2 mx-auto"
                    >
                      Reset selection <ArrowRight size={16} />
                    </button>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="placeholder"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="bg-white/50 border border-zinc-200 border-dashed rounded-3xl p-12 text-center h-full min-h-[400px] flex flex-col items-center justify-center"
                >
                  <Compass size={48} className="text-zinc-300 mb-6" />
                  <p className="text-zinc-500 text-lg">
                    Select a statement on the left to reveal your personalized recommendation.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
