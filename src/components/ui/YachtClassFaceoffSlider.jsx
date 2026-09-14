import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Wind, Ship, Check, ChevronDown } from 'lucide-react';

const YachtClassFaceoffSlider = ({ data, imageSailing, imageSuite }) => {
  if (!data) return null;
  
  const [activeFeature, setActiveFeature] = useState(0);

  const { sailingYachts, allSuiteYachts } = data.comparisonData || {};
  const features = data.featureFaceoff?.features || [];

  return (
    <section className="bg-navy-950 py-24 relative overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-0 left-1/4 w-1/2 h-full bg-ts-gold/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-5xl text-white mb-6"
          >
            {data.featureFaceoff?.title || "Head-to-Head Comparison"}
          </motion.h2>
          <div className="w-24 h-1 bg-ts-gold mx-auto"></div>
        </div>

        {/* Dual Panel Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          
          {/* Sailing Yachts Column */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col h-full"
          >
            <div className="relative aspect-video w-full mb-8 group overflow-hidden border border-white/10">
              <img 
                src={imageSailing || "https://placehold.co/800x600/1e293b/ffffff?text=Sailing+Yacht"} 
                alt="Sailing Yacht" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-80 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-ts-gold/20 backdrop-blur-md flex items-center justify-center border border-ts-gold/50">
                  <Wind className="w-6 h-6 text-ts-gold" />
                </div>
                <div>
                  <h3 className="font-display text-2xl md:text-3xl text-white">{sailingYachts?.name || "Sailing Yachts"}</h3>
                  <p className="font-sans text-sm text-ts-gold uppercase tracking-widest">{sailingYachts?.experience}</p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 p-8 flex-grow">
              <ul className="space-y-4 font-sans text-sm text-slate-300">
                <li className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-white/60">Ships</span>
                  <span className="text-white text-right">{sailingYachts?.ships?.join(", ")}</span>
                </li>
                <li className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-white/60">Atmosphere</span>
                  <span className="text-white text-right">{sailingYachts?.atmosphere}</span>
                </li>
                <li className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-white/60">Suites</span>
                  <span className="text-white text-right">{sailingYachts?.suites}</span>
                </li>
                <li className="flex justify-between pb-2">
                  <span className="text-white/60">Ideal For</span>
                  <span className="text-ts-gold text-right">{sailingYachts?.idealFor}</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* All-Suite Yachts Column */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col h-full"
          >
            <div className="relative aspect-video w-full mb-8 group overflow-hidden border border-white/10">
              <img 
                src={imageSuite || "https://placehold.co/800x600/1e293b/ffffff?text=All-Suite+Yacht"} 
                alt="All-Suite Yacht" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-80 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/30">
                  <Ship className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-display text-2xl md:text-3xl text-white">{allSuiteYachts?.name || "All-Suite Yachts"}</h3>
                  <p className="font-sans text-sm text-white/70 uppercase tracking-widest">{allSuiteYachts?.experience}</p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 p-8 flex-grow">
              <ul className="space-y-4 font-sans text-sm text-slate-300">
                <li className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-white/60">Ships</span>
                  <span className="text-white text-right">{allSuiteYachts?.ships?.join(", ")}</span>
                </li>
                <li className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-white/60">Atmosphere</span>
                  <span className="text-white text-right">{allSuiteYachts?.atmosphere}</span>
                </li>
                <li className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-white/60">Suites</span>
                  <span className="text-white text-right">{allSuiteYachts?.suites}</span>
                </li>
                <li className="flex justify-between pb-2">
                  <span className="text-white/60">Ideal For</span>
                  <span className="text-ts-gold text-right">{allSuiteYachts?.idealFor}</span>
                </li>
              </ul>
            </div>
          </motion.div>

        </div>

        {/* Interactive Feature Accordion */}
        <div className="max-w-[1000px] mx-auto mt-24">
          <h3 className="font-sans text-sm uppercase tracking-[0.2em] text-ts-gold text-center font-bold mb-10">Compare The Details</h3>
          
          <div className="space-y-4">
            {features.map((feature, idx) => (
              <div key={idx} className="border border-white/10 bg-white/5 overflow-hidden transition-colors hover:bg-white/10">
                <button 
                  onClick={() => setActiveFeature(activeFeature === idx ? null : idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left"
                >
                  <span className="font-display text-xl text-white">{feature.name}</span>
                  <ChevronDown className={`w-5 h-5 text-ts-gold transition-transform duration-300 ${activeFeature === idx ? 'rotate-180' : ''}`} />
                </button>
                
                <AnimatePresence>
                  {activeFeature === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-0 grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-white/5 mt-4">
                        <div>
                          <h4 className="font-sans text-xs uppercase tracking-widest text-ts-gold mb-3 flex items-center gap-2">
                            <Wind className="w-3 h-3" /> Sailing Yachts
                          </h4>
                          <p className="font-sans text-sm text-slate-300 leading-relaxed">{feature.sailing}</p>
                        </div>
                        <div>
                          <h4 className="font-sans text-xs uppercase tracking-widest text-white/70 mb-3 flex items-center gap-2">
                            <Ship className="w-3 h-3" /> All-Suite Yachts
                          </h4>
                          <p className="font-sans text-sm text-slate-300 leading-relaxed">{feature.suite}</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default YachtClassFaceoffSlider;
