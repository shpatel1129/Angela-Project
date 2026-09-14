import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const VibeColumn = ({ data, image, align = 'left', theme = 'warm' }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yPos = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  const themeClasses = theme === 'warm' 
    ? 'from-gold-900/80 to-gold-950/90' 
    : 'from-navy-900/80 to-navy-950/90';

  const textClasses = theme === 'warm' ? 'text-gold-100' : 'text-ice-100';
  const highlightClasses = theme === 'warm' ? 'text-gold-300' : 'text-ice-300';

  return (
    <div ref={containerRef} className="relative w-full md:w-1/2 min-h-[80vh] overflow-hidden flex items-center justify-center py-20 px-6">
      {/* Parallax Background */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y: yPos }}
      >
        <img src={image} alt={data.title} className="w-full h-[120%] object-cover object-center" />
      </motion.div>
      
      {/* Overlay */}
      <div className={`absolute inset-0 z-10 bg-gradient-to-b ${themeClasses}`}></div>

      {/* Content */}
      <div className="relative z-20 w-full max-w-md mx-auto flex flex-col gap-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="font-display text-4xl md:text-5xl text-white mb-2">{data.title}</h3>
          <div className={`h-1 w-20 ${theme === 'warm' ? 'bg-gold-500' : 'bg-ice-500'} mb-8 rounded-full`}></div>
        </motion.div>

        {['atmosphere', 'design', 'pace'].map((key, idx) => (
          <motion.div 
            key={key}
            initial={{ opacity: 0, x: align === 'left' ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-2xl hover:bg-white/15 transition-colors"
          >
            <h4 className={`font-sans uppercase tracking-widest text-xs font-bold ${highlightClasses} mb-2`}>
              {key}
            </h4>
            <p className={`font-serif text-lg leading-relaxed ${textClasses}`}>
              {data[key]}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const VisualVibeCheck = ({ data, image1, image2 }) => {
  if (!data) return null;

  return (
    <section className="w-full bg-navy-950 overflow-hidden py-16">
      <div className="text-center mb-12 px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-5xl text-white mb-4"
        >
          {data.title}
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-sans text-ice-200 text-lg uppercase tracking-widest"
        >
          {data.subtitle}
        </motion.p>
      </div>

      <div className="flex flex-col md:flex-row w-full max-w-[1600px] mx-auto rounded-3xl overflow-hidden shadow-2xl border border-white/10">
        <VibeColumn data={data.avalon} image={image1} align="left" theme="warm" />
        <VibeColumn data={data.viking} image={image2} align="right" theme="cool" />
      </div>
    </section>
  );
};

export default VisualVibeCheck;
