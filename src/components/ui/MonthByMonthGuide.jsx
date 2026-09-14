import React from 'react';
import { motion } from 'framer-motion';
import { Check, Minus, CalendarDays, Sun, CloudRain, Wind, Snowflake, Leaf, ThermometerSun, Anchor, Map, Ship, MapPin } from 'lucide-react';

const MonthByMonthGuide = ({ data }) => {
  if (!data || !data.months) return null;

  // Icons for watermarks based on seasons or month index
  const getWatermarkIcon = (index) => {
    const icons = [Snowflake, CloudRain, Leaf, Sun, ThermometerSun, Map, Anchor, Ship, Wind, MapPin, CalendarDays, Snowflake];
    const Icon = icons[index % icons.length];
    return <Icon className="w-48 h-48 md:w-64 md:h-64 absolute -bottom-12 -right-12 text-white/[0.02] rotate-[-15deg] pointer-events-none" />;
  };

  return (
    <section className="py-24 md:py-32 bg-navy-950 relative overflow-hidden border-t border-white/10">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-gold-400/5 rounded-full blur-[120px] pointer-events-none -translate-x-1/2"></div>
      <div className="absolute bottom-1/4 right-0 w-[600px] h-[600px] bg-gold-400/5 rounded-full blur-[120px] pointer-events-none translate-x-1/2"></div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="uppercase tracking-[0.2em] text-xs font-bold text-gold-400 mb-6 block">Annual Rhythm</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display text-white mb-6 leading-tight">
              {data.title}
            </h2>
            {data.subtitle && (
              <p className="text-lg md:text-xl text-slate-400 font-light leading-relaxed">
                {data.subtitle}
              </p>
            )}
          </motion.div>
        </div>

        {/* 3-Column (3x4) Curvilinear Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6 md:gap-y-10 pb-12">
          {data.months.map((item, index) => {
            const isEven = index % 2 === 0;
            
            // Curvilinear shapes alternate based on odd/even index
            // In a 3-column grid, this naturally creates a beautiful checkerboard weave pattern
            const shapeClass = isEven 
              ? "rounded-2xl rounded-tl-[50px] lg:rounded-tl-[70px] rounded-br-[50px] lg:rounded-br-[70px]" 
              : "rounded-2xl rounded-tr-[50px] lg:rounded-tr-[70px] rounded-bl-[50px] lg:rounded-bl-[70px]";

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
                // IMPORTANT: hover:z-50 prevents overlapping issues!
                className="relative group hover:z-50"
              >
                <div 
                  className={`bg-navy-900/40 backdrop-blur-sm border border-gold-400/20 p-8 shadow-2xl hover:bg-navy-900/80 transition-all duration-500 overflow-hidden h-full flex flex-col hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(212,175,55,0.15)] hover:border-gold-400/40 ${shapeClass}`}
                >
                  {/* Watermark Icon */}
                  {getWatermarkIcon(index)}

                  {/* Header Area */}
                  <div className="flex justify-between items-start mb-6 relative z-10">
                    <div>
                      <span className="uppercase tracking-[0.2em] text-[10px] font-bold text-gold-400 block mb-2">Month {String(index + 1).padStart(2, '0')}</span>
                      <h3 className="text-3xl font-display text-white">
                        {item.month}
                      </h3>
                    </div>
                    
                    {/* Small Decorative Icon top right */}
                    <div className="w-10 h-10 rounded-full border border-gold-400/30 flex items-center justify-center bg-navy-950/50 text-gold-400 opacity-50 group-hover:opacity-100 transition-opacity shrink-0">
                      <CalendarDays size={16} />
                    </div>
                  </div>
                  
                  {/* Verdict */}
                  <p className="text-slate-300 text-sm leading-relaxed mb-6 font-light relative z-10 flex-grow">
                    {item.verdict || item.description}
                  </p>

                  {/* Luxury Minimalist Lists */}
                  <div className="space-y-4 pt-5 border-t border-white/10 relative z-10">
                    {item.bestFor && item.bestFor.length > 0 && (
                      <div>
                        <h4 className="text-[10px] font-bold uppercase tracking-[0.15em] text-gold-300/80 mb-2.5 flex items-center gap-1.5">
                          <Check size={14} className="text-gold-400 shrink-0" /> Best For
                        </h4>
                        <ul className="grid grid-cols-1 gap-1.5">
                          {item.bestFor.map((bf, i) => (
                            <li key={i} className="text-[13px] text-slate-300 flex items-start gap-2 font-light">
                              <span className="text-gold-400/40 mt-1 shrink-0">•</span>
                              <span>{bf}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {item.lessIdeal && item.lessIdeal.length > 0 && (
                      <div className="pt-2">
                        <h4 className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-500 mb-2.5 flex items-center gap-1.5">
                          <Minus size={14} className="text-slate-500 shrink-0" /> Less Ideal
                        </h4>
                        <ul className="grid grid-cols-1 gap-1.5">
                          {item.lessIdeal.map((li, i) => (
                            <li key={i} className="text-[13px] text-slate-400 flex items-start gap-2 font-light">
                              <span className="text-slate-600 mt-1 shrink-0">•</span>
                              <span>{li}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
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

export default MonthByMonthGuide;
