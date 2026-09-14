import React from 'react';
import { motion } from 'framer-motion';

const PricingFactorsGrid = ({ data }) => {
  if (!data) return null;

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif text-slate-900 mb-6"
          >
            {data.title}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 font-light"
          >
            {data.description}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.factors.map((factor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="w-12 h-12 bg-blue-50 text-blue-900 rounded-full flex items-center justify-center mb-6 text-xl font-bold font-serif group-hover:scale-110 group-hover:bg-blue-900 group-hover:text-white transition-all duration-300">
                {index + 1}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{factor.title}</h3>
              <p className="text-slate-600 leading-relaxed font-light">{factor.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingFactorsGrid;
