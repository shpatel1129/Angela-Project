import React from 'react';
import { motion } from 'framer-motion';

const BoutiqueVsResortFaceoff = ({ data, boutiqueImg, resortImg }) => {
  return (
    <section className="py-24 px-8 bg-ice-50 text-navy-900 overflow-hidden">
      <div className="max-w-6xl mx-auto">
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

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-8 items-center relative">
          {/* Boutique Side */}
          <motion.div
            className="flex-1 flex flex-col gap-8 w-full"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl h-96 group">
              <img src={boutiqueImg} alt={data.boutique.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-100">
              <h3 className="text-2xl text-navy-900 mb-2 font-display">{data.boutique.title}</h3>
              <h4 className="text-sm text-ts-gold uppercase tracking-wider mb-6 font-semibold">{data.boutique.subtitle}</h4>
              <ul className="space-y-3">
                {data.boutique.features.map((feature, i) => (
                  <li key={i} className="relative pl-6 text-slate-700">
                    <span className="absolute left-0 text-ts-gold font-bold">→</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* VS Badge */}
          <motion.div
            className="hidden lg:flex w-20 h-20 rounded-full bg-ts-gold text-white items-center justify-center font-display text-2xl font-bold z-10 shadow-xl border-4 border-ice-50 absolute left-1/2 -translate-x-1/2"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, delay: 0.5 }}
          >
            VS
          </motion.div>
          <div className="lg:hidden w-16 h-16 rounded-full bg-ts-gold text-white flex items-center justify-center font-display text-xl font-bold shadow-xl border-4 border-ice-50 -my-10 z-10 relative">
            VS
          </div>

          {/* Resort Side */}
          <motion.div
            className="flex-1 flex flex-col gap-8 w-full"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl h-96 group">
              <img src={resortImg} alt={data.resort.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-100">
              <h3 className="text-2xl text-navy-900 mb-2 font-display">{data.resort.title}</h3>
              <h4 className="text-sm text-ts-gold uppercase tracking-wider mb-6 font-semibold">{data.resort.subtitle}</h4>
              <ul className="space-y-3">
                {data.resort.features.map((feature, i) => (
                  <li key={i} className="relative pl-6 text-slate-700">
                    <span className="absolute left-0 text-ts-gold font-bold">→</span>
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

export default BoutiqueVsResortFaceoff;
