import React from 'react';
import { Calendar, Globe, Shield, ArrowRight, CheckCircle2, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const InteractiveETIASTimeline = ({ data }) => {
  if (!data || !data.events) return null;

  return (
    <section className="py-24 bg-navy-950 relative overflow-hidden text-white">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-gold-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center space-x-2 mb-4"
          >
            <Shield className="w-5 h-5 text-gold-400" />
            <span className="text-gold-400 font-sans tracking-widest uppercase text-sm font-medium">Travel Requirements</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight"
          >
            {data.title || "The Road to ETIAS"}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-sans text-lg text-slate-300 leading-relaxed"
          >
            Understanding the transition from visa-free travel to the new European authorization system for U.S. citizens.
          </motion.p>
        </div>

        {/* Timeline Layout */}
        <div className="relative mt-12 lg:mt-24">
          
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-gold-500/30 to-transparent -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 relative z-10">
            {data.events.map((event, idx) => {
              
              // Icon mapping
              const Icon = idx === 0 ? Globe : idx === 1 ? Clock : CheckCircle2;
              
              return (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2 }}
                  className="relative group"
                >
                  {/* Timeline Node (Desktop) */}
                  <div className="hidden lg:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-navy-900 border-2 border-gold-400 rounded-full z-20 group-hover:scale-150 transition-transform duration-300"></div>

                  <div className={`
                    bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 
                    hover:bg-white/10 transition-colors duration-300
                    ${idx % 2 === 0 ? 'lg:-translate-y-1/2 lg:mb-12' : 'lg:translate-y-1/2 lg:mt-12'}
                  `}>
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-12 h-12 bg-gold-500/10 rounded-full flex items-center justify-center flex-shrink-0 border border-gold-500/20">
                        <Icon className="w-6 h-6 text-gold-400" />
                      </div>
                      <div>
                        <div className="text-gold-400 font-sans text-sm font-semibold tracking-wider uppercase mb-1">{event.year}</div>
                        <h3 className="font-display text-2xl text-white">{event.title}</h3>
                      </div>
                    </div>
                    
                    <p className="font-sans text-slate-300 leading-relaxed text-base">
                      {event.description}
                    </p>
                    
                    {idx < data.events.length - 1 && (
                      <div className="hidden lg:block absolute top-1/2 -right-8 text-white/20 -translate-y-1/2">
                        <ArrowRight className="w-6 h-6" />
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default InteractiveETIASTimeline;
