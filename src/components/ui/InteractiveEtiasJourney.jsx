import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plane, Map, ShieldCheck, MapPin, Info } from 'lucide-react';

const InteractiveEtiasJourney = ({ data }) => {
  const [activeJourneyId, setActiveJourneyId] = useState(data.journeys[0].id);
  const activeJourney = data.journeys.find(j => j.id === activeJourneyId);

  return (
    <section className="py-24 bg-gradient-to-b from-[#0a0a0a] to-[#121212] relative overflow-hidden">
      {/* Abstract Background Orbs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-900/10 blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-cyan-900/10 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium tracking-wide uppercase mb-4">
            <Map className="w-4 h-4" />
            <span>Interactive Map</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">
            {data.title}
          </h2>
          <p className="text-gray-400 text-lg">
            {data.description}
          </p>
        </div>

        {/* Interactive Layout */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Journey Selectors (Sidebar) */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            {data.journeys.map((journey) => {
              const isActive = activeJourneyId === journey.id;
              return (
                <button
                  key={journey.id}
                  onClick={() => setActiveJourneyId(journey.id)}
                  className={`relative p-6 rounded-2xl text-left transition-all duration-300 border backdrop-blur-md overflow-hidden ${
                    isActive 
                      ? 'bg-blue-900/20 border-blue-500/40 shadow-[0_0_30px_rgba(59,130,246,0.15)]' 
                      : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                  }`}
                >
                  {isActive && (
                    <motion.div 
                      layoutId="activeIndicator"
                      className="absolute left-0 top-0 w-1 h-full bg-blue-500"
                    />
                  )}
                  <div className="flex items-center justify-between mb-2">
                    <h3 className={`font-serif text-xl ${isActive ? 'text-white' : 'text-gray-300'}`}>
                      {journey.title}
                    </h3>
                  </div>
                  <p className={`text-sm ${isActive ? 'text-blue-300' : 'text-gray-500'}`}>
                    {journey.subtitle}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Journey Visualizer (Main Content) */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeJourneyId}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="bg-white/5 border border-white/10 rounded-3xl p-8 lg:p-12 backdrop-blur-xl relative overflow-hidden"
              >
                {/* Visualizer Background */}
                <div className="absolute top-0 right-0 p-8 opacity-5">
                  <Plane className="w-64 h-64 rotate-45 text-white" />
                </div>

                <div className="relative z-10">
                  <h3 className="text-2xl font-serif text-white mb-4">{activeJourney.title}</h3>
                  <p className="text-gray-300 text-lg mb-10 leading-relaxed">
                    {activeJourney.description}
                  </p>

                  {/* Route Visualization */}
                  <div className="relative mb-12 py-8">
                    {/* Connecting Line */}
                    <div className="absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-y-1/2" />
                    
                    <div className="flex justify-between items-center relative z-10">
                      {activeJourney.highlights.map((point, idx) => (
                        <div key={idx} className="flex flex-col items-center gap-3">
                          <div className="relative">
                            <div className="w-10 h-10 rounded-full bg-[#121212] border-2 border-blue-500 flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                              <MapPin className="w-4 h-4 text-white" />
                            </div>
                            {/* Pulse Effect for first node */}
                            {idx === 0 && (
                              <div className="absolute inset-0 rounded-full border-2 border-blue-400 animate-ping opacity-50" />
                            )}
                          </div>
                          <span className="text-sm font-medium text-gray-200 text-center max-w-[80px] leading-tight">{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Impact Insight Card */}
                  <div className="bg-blue-900/10 border border-blue-500/20 rounded-2xl p-6 flex gap-4 items-start">
                    <div className="p-3 bg-blue-500/20 rounded-xl text-blue-400 shrink-0">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-white font-serif text-lg mb-2 flex items-center gap-2">
                        ETIAS & Border Impact
                        <Info className="w-4 h-4 text-blue-400" />
                      </h4>
                      <p className="text-gray-300 leading-relaxed">
                        {activeJourney.etiasImpact}
                      </p>
                    </div>
                  </div>
                  
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};

export default InteractiveEtiasJourney;
