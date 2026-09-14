import React from 'react';
import { motion } from 'framer-motion';

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-ts-gold mr-4 flex-shrink-0">
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

const YachtVsOceanFaceoff = ({ data, yachtImage, oceanImage }) => {
  return (
    <section className="py-24 px-8 bg-ice-50 text-navy-900 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl text-navy-950 mb-4 font-display"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {data.title}
          </motion.h2>
          <motion.p
            className="text-lg text-slate-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {data.description}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 relative group"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="h-72 w-full overflow-hidden relative">
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent z-10"></div>
              <img src={yachtImage} alt={data.yacht.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-10 relative z-20 -mt-8">
              <h3 className="text-3xl text-navy-900 mb-2 font-display">{data.yacht.title}</h3>
              <h4 className="text-lg text-ts-gold mb-8 font-medium">{data.yacht.subtitle}</h4>
              <ul className="space-y-4">
                {data.yacht.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-slate-700 leading-relaxed">
                    <CheckIcon />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 relative group"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="h-72 w-full overflow-hidden relative">
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent z-10"></div>
              <img src={oceanImage} alt={data.ocean.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-10 relative z-20 -mt-8">
              <h3 className="text-3xl text-navy-900 mb-2 font-display">{data.ocean.title}</h3>
              <h4 className="text-lg text-ts-gold mb-8 font-medium">{data.ocean.subtitle}</h4>
              <ul className="space-y-4">
                {data.ocean.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-slate-700 leading-relaxed">
                    <CheckIcon />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default YachtVsOceanFaceoff;
