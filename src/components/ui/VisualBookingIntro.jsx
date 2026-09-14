import React from 'react';
import { motion } from 'framer-motion';

const VisualBookingIntro = ({ data, images }) => {
  if (!data) return null;

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Images Section (Mini Masonry) */}
          <div className="w-full lg:w-1/2 relative h-[500px]">
            {images && images[0] && (
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="absolute top-0 left-0 w-2/3 h-2/3 rounded-2xl overflow-hidden shadow-2xl z-10"
              >
                <img src={images[0]} alt="River Cruise" className="w-full h-full object-cover" />
              </motion.div>
            )}
            
            {images && images[1] && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="absolute bottom-0 right-0 w-2/3 h-2/3 rounded-2xl overflow-hidden shadow-2xl z-20"
              >
                <img src={images[1]} alt="Luxury Suite" className="w-full h-full object-cover" />
              </motion.div>
            )}
            
            {/* Decorative Element */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-50 rounded-full blur-3xl -z-10 opacity-50" />
          </div>

          {/* Text Section */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-8 leading-tight">
                {data.title}
              </h2>
              <div className="w-20 h-1 bg-blue-900 mb-8" />
              <p className="text-lg text-slate-600 leading-relaxed font-light">
                {data.description}
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default VisualBookingIntro;
