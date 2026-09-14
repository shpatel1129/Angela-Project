import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const DynamicScrollingMedia = ({ items }) => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section ref={containerRef} className="relative bg-navy-950" style={{ height: `${items.length * 100}vh` }}>
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-navy-950 flex items-center justify-center">
        {items.map((item, index) => {
          const step = 1 / items.length;
          
          // Calculate ranges for opacity
          const fadeInStart = index === 0 ? 0 : index * step - (step * 0.3);
          const fadeInEnd = index === 0 ? 0 : index * step;
          const fadeOutStart = index === items.length - 1 ? 1 : (index + 1) * step - (step * 0.3);
          const fadeOutEnd = index === items.length - 1 ? 1 : (index + 1) * step;

          const opacity = useTransform(
            scrollYProgress,
            [fadeInStart, fadeInEnd, fadeOutStart, fadeOutEnd],
            [index === 0 ? 1 : 0, 1, 1, index === items.length - 1 ? 1 : 0]
          );

          // Subtle zoom effect over the entire scroll duration of this item
          const scale = useTransform(
            scrollYProgress,
            [fadeInStart, fadeOutEnd],
            [1, 1.1]
          );

          // Text slide up effect
          const y = useTransform(
            scrollYProgress,
            [fadeInStart, fadeInEnd],
            [40, 0]
          );

          return (
            <motion.div
              key={index}
              className="absolute inset-0 flex items-center justify-center"
              style={{ opacity }}
            >
              <motion.img 
                src={item.image} 
                alt={item.title} 
                className="absolute inset-0 w-full h-full object-cover"
                style={{ scale }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-900/40 to-transparent" />
              
              <motion.div 
                className="relative z-10 text-center px-6 max-w-5xl mx-auto"
                style={{ y }}
              >
                {item.subtitle && (
                  <span className="font-sans text-sm md:text-base text-ice-200 uppercase tracking-[0.2em] mb-6 block font-semibold drop-shadow-md">
                    {item.subtitle}
                  </span>
                )}
                <h3 className="font-display text-4xl md:text-6xl lg:text-7xl text-white mb-6 drop-shadow-xl leading-tight">
                  {item.title}
                </h3>
                {item.description && (
                  <p className="font-sans text-lg md:text-xl text-ice-100 max-w-2xl mx-auto drop-shadow-md">
                    {item.description}
                  </p>
                )}
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default DynamicScrollingMedia;
