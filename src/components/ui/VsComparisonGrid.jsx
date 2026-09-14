import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const VsComparisonGrid = ({ data }) => {
  if (!data) return null;
  const { title, rhine, danube } = data;

  return (
    <section className="py-24 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-serif text-ts-blue mb-4"
          >
            {title}
          </motion.h2>
          <div className="w-24 h-1 bg-ts-gold mx-auto"></div>
        </div>

        <div className="relative flex flex-col md:flex-row gap-8 md:gap-12 items-stretch max-w-5xl mx-auto">
          
          {/* VS Badge */}
          <div className="hidden md:flex absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-16 h-16 bg-ts-gold rounded-full items-center justify-center text-white font-serif font-bold text-2xl shadow-xl border-4 border-white">
            VS
          </div>
          
          {/* Mobile VS Badge */}
          <div className="md:hidden self-center w-12 h-12 bg-ts-gold rounded-full flex items-center justify-center text-white font-serif font-bold text-lg shadow-md border-4 border-white my-[-2rem] z-10 relative">
            VS
          </div>

          {/* Rhine Side */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="flex-1 bg-white p-8 md:p-12 rounded-3xl shadow-lg border border-gray-100 flex flex-col relative z-0"
          >
            <div className="text-center mb-10">
              <h3 className="text-3xl font-serif text-ts-blue mb-3">{rhine.title}</h3>
              <span className="inline-block px-4 py-1.5 bg-ts-gold/10 text-ts-gold font-medium rounded-full text-sm tracking-wider uppercase">
                {rhine.subtitle}
              </span>
            </div>
            <ul className="space-y-6 flex-grow">
              {rhine.features.map((feature, idx) => (
                <li key={idx} className="flex items-start group">
                  <div className="mt-1 mr-4 bg-ts-gold/10 rounded-full p-1 group-hover:bg-ts-gold/20 transition-colors">
                    <Check className="w-4 h-4 text-ts-gold" />
                  </div>
                  <span className="text-gray-700 leading-relaxed text-lg">{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Danube Side */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="flex-1 bg-white p-8 md:p-12 rounded-3xl shadow-lg border border-gray-100 flex flex-col relative z-0"
          >
            <div className="text-center mb-10">
              <h3 className="text-3xl font-serif text-ts-blue mb-3">{danube.title}</h3>
              <span className="inline-block px-4 py-1.5 bg-ts-gold/10 text-ts-gold font-medium rounded-full text-sm tracking-wider uppercase">
                {danube.subtitle}
              </span>
            </div>
            <ul className="space-y-6 flex-grow">
              {danube.features.map((feature, idx) => (
                <li key={idx} className="flex items-start group">
                  <div className="mt-1 mr-4 bg-ts-gold/10 rounded-full p-1 group-hover:bg-ts-gold/20 transition-colors">
                    <Check className="w-4 h-4 text-ts-gold" />
                  </div>
                  <span className="text-gray-700 leading-relaxed text-lg">{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default VsComparisonGrid;
