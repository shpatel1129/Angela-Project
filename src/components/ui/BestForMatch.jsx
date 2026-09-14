import React from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

const BestForMatch = ({ data }) => {
  if (!data) return null;

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
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
            className="text-lg text-slate-600 font-light tracking-wide uppercase"
          >
            {data.subtitle}
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Best For */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border-t-4 border-emerald-500 h-full"
            >
              <h3 className="text-2xl font-serif text-slate-900 mb-8 pb-4 border-b border-slate-100">
                {data.bestForTitle}
              </h3>
              <ul className="space-y-6">
                {data.bestFor.map((item, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1 w-6 h-6 rounded-full bg-emerald-50 flex items-center justify-center">
                      <Check className="w-4 h-4 text-emerald-600" />
                    </div>
                    <div>
                      <span className="font-bold text-slate-900 block mb-1">{item.title}</span>
                      <span className="text-slate-600 font-light text-sm">{item.description}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Not Best For */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border-t-4 border-slate-300 h-full"
            >
              <h3 className="text-2xl font-serif text-slate-900 mb-8 pb-4 border-b border-slate-100">
                {data.notForTitle}
              </h3>
              <ul className="space-y-6">
                {data.notFor.map((item, index) => (
                  <li key={index} className="flex items-start gap-4 opacity-75">
                    <div className="flex-shrink-0 mt-1 w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center">
                      <X className="w-4 h-4 text-slate-500" />
                    </div>
                    <div>
                      <span className="font-bold text-slate-800 block mb-1">{item.title}</span>
                      <span className="text-slate-500 font-light text-sm">{item.description}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BestForMatch;
