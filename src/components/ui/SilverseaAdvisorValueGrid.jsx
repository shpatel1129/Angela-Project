import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const SilverseaAdvisorValueGrid = ({ data }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

  if (!data) return null;

  return (
    <section ref={ref} className="w-full bg-ice-50 py-20 lg:py-32 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-bl from-navy-100/40 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-gold-100/30 to-transparent pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-16 lg:mb-24"
        >
          <span className="block text-gold-500 font-sans text-sm md:text-base tracking-[0.2em] uppercase mb-4">
            {data.eyebrow || "The Planning Journey"}
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-navy-900 mb-6">
            {data.title || "What We Help You Evaluate"}
          </h2>
          <p className="font-sans text-lg md:text-xl text-navy-600 leading-relaxed">
            {data.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {data.items?.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.1 * idx }}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow duration-500 border border-navy-100 group flex flex-col"
            >
              <div className="w-12 h-12 rounded-full bg-navy-50 flex items-center justify-center text-gold-500 font-display text-xl mb-6 group-hover:bg-navy-900 group-hover:text-white transition-colors duration-500">
                {idx + 1}
              </div>
              <h3 className="font-display text-2xl text-navy-900 mb-4 group-hover:text-gold-500 transition-colors duration-500">
                {item.title}
              </h3>
              <p className="font-sans text-base text-navy-600 leading-relaxed flex-grow">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SilverseaAdvisorValueGrid;
