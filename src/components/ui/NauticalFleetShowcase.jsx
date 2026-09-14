import React from 'react';
import { motion } from 'framer-motion';
import { Anchor, Users, Compass, Wind } from 'lucide-react';

const NauticalFleetShowcase = ({ title, subtitle, ships }) => {
  if (!ships || ships.length === 0) return null;

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Nautical Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-5">
        <svg viewBox="0 0 100 100" className="absolute top-10 left-10 w-64 h-64 animate-[spin_60s_linear_infinite]">
          <circle cx="50" cy="50" r="48" fill="none" stroke="#000" strokeWidth="0.5" strokeDasharray="2 4" />
          <path d="M50 0 L50 100 M0 50 L100 50" stroke="#000" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Wind className="w-8 h-8 mx-auto text-ts-gold mb-6 opacity-70" />
            <h2 className="font-display text-4xl md:text-5xl text-navy-950 mb-6">{title}</h2>
            {subtitle && (
              <p className="font-sans text-lg text-slate-600 max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </motion.div>
        </div>

        <div className="space-y-24">
          {ships.map((ship, index) => {
            const isEven = index % 2 === 0;
            const isSailing = ship.class.includes('Sailing');

            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className={`flex flex-col lg:flex-row items-center gap-12 ${isEven ? '' : 'lg:flex-row-reverse'}`}
              >
                {/* Image Side */}
                <div className="w-full lg:w-1/2 relative group">
                  <div className="absolute inset-0 bg-ts-gold/20 transform -translate-x-4 translate-y-4 -z-10 transition-transform duration-500 group-hover:translate-x-0 group-hover:translate-y-0"></div>
                  <div className="aspect-[4/3] w-full overflow-hidden relative">
                    <img 
                      src={ship.image || "https://placehold.co/800x600/1e293b/ffffff?text=Windstar+Ship"} 
                      alt={ship.name}
                      className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 font-sans text-xs uppercase tracking-widest text-navy-900 font-semibold border border-ts-gold/30 shadow-sm">
                      {ship.class}
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="w-full lg:w-1/2">
                  <div className="flex items-center gap-3 mb-4">
                    {isSailing ? <Wind className="w-5 h-5 text-ts-gold" /> : <Anchor className="w-5 h-5 text-ts-gold" />}
                    <span className="font-sans text-sm uppercase tracking-widest text-slate-500">{ship.signature}</span>
                  </div>
                  
                  <h3 className="font-display text-3xl md:text-4xl text-navy-900 mb-6 group-hover:text-ts-gold transition-colors">
                    {ship.name}
                  </h3>

                  <div className="grid grid-cols-2 gap-4 mb-8 py-6 border-y border-slate-100">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-slate-400" />
                      <span className="font-sans text-sm text-slate-600">{ship.guests} Guests</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Compass className="w-4 h-4 text-slate-400" />
                      <span className="font-sans text-sm text-slate-600">Crew: {ship.crew}</span>
                    </div>
                    <div className="col-span-2 flex items-start gap-2 mt-2">
                      <span className="font-sans text-xs uppercase tracking-widest text-navy-900 font-bold shrink-0 mt-1">Best For:</span>
                      <span className="font-sans text-sm text-slate-600 italic">{ship.bestFor}</span>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-sans text-xs uppercase tracking-widest text-navy-900 font-bold mb-3">Highlights</h4>
                      <ul className="space-y-2">
                        {ship.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-slate-600 font-sans text-sm">
                            <span className="text-ts-gold shrink-0 mt-0.5">✦</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-sans text-xs uppercase tracking-widest text-navy-900 font-bold mb-3">Who Should Book</h4>
                      <div className="flex flex-wrap gap-2">
                        {ship.idealFor.map((ideal, idx) => (
                          <span key={idx} className="px-3 py-1 bg-ice-50 text-navy-700 font-sans text-xs border border-slate-100 rounded-full">
                            {ideal}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default NauticalFleetShowcase;
