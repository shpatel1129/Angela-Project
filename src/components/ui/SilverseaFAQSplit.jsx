import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const SilverseaFAQSplit = ({ data, imageClassic, imageExpedition }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

  if (!data) return null;

  return (
    <section ref={ref} className="w-full bg-white py-20 lg:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-16 lg:mb-24"
        >
          <span className="block text-gold-500 font-sans text-sm md:text-base tracking-[0.2em] uppercase mb-4">
            {data.eyebrow || "The Fundamental Distinction"}
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-navy-900 mb-6">
            {data.title || "Classic vs. Expedition"}
          </h2>
          <p className="font-sans text-lg md:text-xl text-navy-600 leading-relaxed">
            {data.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8">
          
          {/* Classic Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="group relative"
          >
            <div className="relative h-[60vh] min-h-[500px] w-full rounded-2xl overflow-hidden mb-8 shadow-2xl">
              <div className="absolute inset-0 bg-navy-900/20 group-hover:bg-transparent transition-colors duration-700 z-10" />
              <img 
                src={imageClassic} 
                alt={data.classic?.title || "Classic Silversea"}
                className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-navy-900/40 to-transparent z-20 flex flex-col justify-end p-8 md:p-12">
                <h3 className="font-display text-3xl md:text-4xl text-white mb-4">
                  {data.classic?.title}
                </h3>
                <p className="font-sans text-base md:text-lg text-white/90 leading-relaxed mb-6">
                  {data.classic?.description}
                </p>
                <ul className="space-y-3">
                  {data.classic?.points?.map((point, idx) => (
                    <li key={idx} className="flex items-center text-white/80 font-sans">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold-400 mr-4" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Expedition Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="group relative lg:mt-24"
          >
            <div className="relative h-[60vh] min-h-[500px] w-full rounded-2xl overflow-hidden mb-8 shadow-2xl">
              <div className="absolute inset-0 bg-navy-900/20 group-hover:bg-transparent transition-colors duration-700 z-10" />
              <img 
                src={imageExpedition} 
                alt={data.expedition?.title || "Silversea Expedition"}
                className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-navy-900/40 to-transparent z-20 flex flex-col justify-end p-8 md:p-12">
                <h3 className="font-display text-3xl md:text-4xl text-white mb-4">
                  {data.expedition?.title}
                </h3>
                <p className="font-sans text-base md:text-lg text-white/90 leading-relaxed mb-6">
                  {data.expedition?.description}
                </p>
                <ul className="space-y-3">
                  {data.expedition?.points?.map((point, idx) => (
                    <li key={idx} className="flex items-center text-white/80 font-sans">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold-400 mr-4" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default SilverseaFAQSplit;
