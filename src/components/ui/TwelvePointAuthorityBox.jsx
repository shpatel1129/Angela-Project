import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Award, Globe, Users, Key, Sailboat, Map, Headphones, PlaneTakeoff, Home, Lock, CheckCircle2 } from 'lucide-react';

const iconMap = {
  "40+ Years Experience": ShieldCheck,
  "121+ Countries Visited": Globe,
  "Award-Winning": Award,
  "Top Industry Voice": Users,
  "Direct Local Contacts": Key,
  "VIP Acropolis Access": CheckCircle2,
  "Exclusive Yachts": Sailboat,
  "Curated Combinations": Map,
  "24/7 Support": Headphones,
  "Seamless Transfers": PlaneTakeoff,
  "Vetted Villas": Home,
  "Flight Protection": Lock
};

export default function TwelvePointAuthorityBox({ data }) {
  if (!data || !data.points) return null;

  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="py-24 bg-zinc-950 relative overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-amber-900/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-900/20 text-amber-500 border border-amber-900/30 mb-6"
          >
            <ShieldCheck size={16} />
            <span className="text-sm font-semibold tracking-wider uppercase">{data.title}</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif text-zinc-100 mb-6"
          >
            {data.subtitle}
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {data.points.map((point, index) => {
            const Icon = iconMap[point.title] || ShieldCheck;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`group relative p-6 rounded-2xl border transition-all duration-500 overflow-hidden ${
                  hoveredIndex === index 
                    ? 'bg-zinc-900/80 border-amber-500/50 scale-[1.02] shadow-2xl shadow-amber-900/20' 
                    : 'bg-zinc-900/40 border-white/5 hover:border-white/10'
                }`}
              >
                {/* Active glow effect */}
                <AnimatePresence>
                  {hoveredIndex === index && (
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-transparent opacity-50"
                    />
                  )}
                </AnimatePresence>

                <div className="relative z-10">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-colors duration-500 ${
                    hoveredIndex === index ? 'bg-amber-500/20 text-amber-400' : 'bg-zinc-800 text-zinc-400'
                  }`}>
                    <Icon size={24} className={hoveredIndex === index ? 'animate-pulse' : ''} />
                  </div>
                  <h3 className={`text-lg font-semibold mb-3 transition-colors duration-300 ${
                    hoveredIndex === index ? 'text-white' : 'text-zinc-200'
                  }`}>
                    {point.title}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    {point.description}
                  </p>
                </div>
                
                {/* Decorative corner */}
                <div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-amber-500/20 to-transparent opacity-0 transition-opacity duration-500 rounded-bl-full ${
                  hoveredIndex === index ? 'opacity-100' : ''
                }`} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
