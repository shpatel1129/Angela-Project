import React from 'react';
import { motion } from 'framer-motion';

const TimelineBookingJourney = ({ data }) => {
  if (!data) return null;

  return (
    <section className="py-24 bg-white overflow-hidden relative">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif text-brand-navy mb-4"
          >
            {data.title}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600"
          >
            {data.subtitle}
          </motion.p>
        </div>

        <div className="relative">
          {/* Central Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-brand-gold/30 -translate-x-1/2" />

          <div className="space-y-12">
            {data.items.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div key={index} className="relative flex flex-col md:flex-row items-center md:justify-between group">
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-brand-gold -translate-x-1/2 z-10 shadow-[0_0_0_4px_white,0_0_0_6px_rgba(212,175,55,0.2)] group-hover:scale-125 transition-transform duration-300" />

                  {/* Content Container */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? -30 : 30, y: 20 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className={`w-full md:w-[45%] pl-12 md:pl-0 ${isEven ? 'md:text-right md:pr-12' : 'md:ml-auto md:pl-12'}`}
                  >
                    <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-1 h-full bg-brand-gold" />
                      <span className="inline-block px-3 py-1 bg-brand-navy text-brand-gold text-xs font-semibold tracking-wider uppercase rounded-full mb-4">
                        {item.timeframe}
                      </span>
                      <h3 className="text-2xl font-serif text-brand-navy mb-3">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                  
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default TimelineBookingJourney;
