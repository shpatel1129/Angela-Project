import React from 'react';
import { motion } from 'framer-motion';

const DayInTheLifeCompare = ({ data }) => {
  if (!data) return null;

  return (
    <section className="w-full py-24 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-ice-50 to-white pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-5xl text-navy-900 mb-4"
          >
            {data.title}
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="h-1 w-24 bg-gold-500 mx-auto rounded-full mb-6"
          ></motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-sans text-navy-600 text-lg uppercase tracking-widest"
          >
            {data.subtitle}
          </motion.p>
        </div>

        {/* Timeline Headers (Desktop) */}
        <div className="hidden md:flex justify-between items-center mb-8 px-8">
          <div className="w-[40%] text-center">
            <h3 className="font-display text-2xl text-navy-900">Avalon Waterways</h3>
          </div>
          <div className="w-[20%] text-center"></div>
          <div className="w-[40%] text-center">
            <h3 className="font-display text-2xl text-navy-900">Viking</h3>
          </div>
        </div>

        {/* Timeline Container */}
        <div className="relative w-full">
          {/* Center Vertical Line (Desktop) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-ice-200 -translate-x-1/2 z-0"></div>

          {/* Timeline Items */}
          <div className="flex flex-col gap-12 md:gap-8">
            {data.timeline.map((item, idx) => (
              <div key={idx} className="relative flex flex-col md:flex-row items-center w-full z-10">
                
                {/* Mobile Time Badge */}
                <div className="md:hidden flex items-center justify-center bg-navy-900 text-white font-sans font-bold text-sm px-4 py-1 rounded-full mb-6 shadow-md z-20">
                  {item.time}
                </div>

                {/* Left Side (Avalon) */}
                <motion.div 
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="w-full md:w-[40%] flex justify-end md:pr-12 mb-6 md:mb-0"
                >
                  <div className="bg-white p-6 md:p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-ice-100 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow w-full">
                    <div className="md:hidden font-display text-xl text-navy-900 mb-2">Avalon</div>
                    <p className="font-serif text-lg text-navy-700 leading-relaxed">
                      {item.avalon}
                    </p>
                  </div>
                </motion.div>

                {/* Center Time Badge (Desktop) */}
                <div className="hidden md:flex w-[20%] justify-center relative z-20">
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 200, delay: idx * 0.1 }}
                    className="bg-navy-900 text-white font-sans font-bold text-sm px-5 py-2 rounded-full shadow-lg border-4 border-white whitespace-nowrap"
                  >
                    {item.time}
                  </motion.div>
                </div>

                {/* Right Side (Viking) */}
                <motion.div 
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="w-full md:w-[40%] flex justify-start md:pl-12"
                >
                  <div className="bg-ice-50 p-6 md:p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-ice-100 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow w-full">
                    <div className="md:hidden font-display text-xl text-navy-900 mb-2">Viking</div>
                    <p className="font-serif text-lg text-navy-700 leading-relaxed">
                      {item.viking}
                    </p>
                  </div>
                </motion.div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default DayInTheLifeCompare;
