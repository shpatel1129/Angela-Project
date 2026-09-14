import React from 'react';
import { motion } from 'framer-motion';

const CreativeBookingIntro = ({ data, images }) => {
  if (!data) return null;

  return (
    <section className="py-32 bg-[#FAF9F6] relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white rounded-full blur-[120px] opacity-60 -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24">
          
          {/* Left Side: The Archway Image */}
          <div className="w-full lg:w-5/12 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative w-full max-w-md"
            >
              {/* Arch Image Container */}
              <div className="relative aspect-[3/4] rounded-t-full rounded-b-2xl overflow-hidden shadow-2xl border-8 border-white">
                <motion.img
                  initial={{ scale: 1.1 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5 }}
                  src={images && images[0] ? images[0] : ''} 
                  alt="Avalon Luxury" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent mix-blend-overlay" />
              </div>

              {/* Floating Stat overlapping the arch */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute top-1/4 -left-8 md:-left-16 bg-white py-6 px-8 rounded-2xl shadow-xl border border-slate-100"
              >
                <div className="text-5xl font-serif text-blue-900 mb-1 leading-none">
                  9<span className="text-3xl text-slate-300 mx-1">-</span>18
                </div>
                <div className="text-xs font-bold tracking-[0.2em] uppercase text-slate-500">
                  Months Prior
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Side: Elegant Typography */}
          <div className="w-full lg:w-7/12">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-slate-900 leading-[1.1] mb-8">
                {data.title}
              </h2>
              
              <div className="flex items-center gap-6 mb-10">
                <div className="w-20 h-[1px] bg-blue-900/30" />
                <span className="text-sm font-sans tracking-widest uppercase text-blue-900 font-semibold">
                  Timing is Everything
                </span>
              </div>
              
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-light mb-8">
                For most travelers, the ideal time to book an Avalon Waterways river cruise is 9 to 18 months before departure. This window typically provides the widest selection of itineraries, the best cabin availability, and access to early booking promotions.
              </p>
              
              <div className="pl-6 border-l-2 border-blue-900/20">
                <p className="text-base text-slate-500 font-serif italic">
                  Unlike large ocean cruise ships, Avalon's river ships typically welcome around 150 guests, meaning availability disappears much faster.
                </p>
              </div>
              
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CreativeBookingIntro;
