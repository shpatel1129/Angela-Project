import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const PremiumSuiteCategories = ({ data, images }) => {
  if (!data || !data.categories) return null;

  return (
    <section className="w-full py-20 bg-ice-50 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          {data.subtitle && (
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xs uppercase tracking-widest text-gold-500 font-semibold mb-3 block"
            >
              {data.subtitle}
            </motion.span>
          )}
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-5xl font-display text-navy-950 mb-6 bg-gradient-to-r from-gold-600 to-gold-400 bg-clip-text text-transparent px-4 py-2"
          >
            {data.title}
          </motion.h2>
          {data.description && (
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-slate-600 leading-relaxed text-lg"
            >
              {data.description}
            </motion.p>
          )}
        </div>

        {/* Categories List */}
        <div className="space-y-16 lg:space-y-24">
          {data.categories.map((category, index) => {
            const isEven = index % 2 === 0;
            const imageSrc = images[category.imageKey];

            return (
              <motion.div 
                key={category.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
                className={`flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch ${!isEven ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* Image Section */}
                <div className="w-full lg:w-1/2 relative rounded-2xl overflow-hidden shadow-2xl group min-h-[350px] lg:min-h-[450px]">
                  {imageSrc ? (
                    <img 
                      src={imageSrc} 
                      alt={category.name} 
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-slate-200 flex items-center justify-center text-slate-400">
                      Image Missing
                    </div>
                  )}
                  {/* Image Overlay Label */}
                  {category.imageLabel && (
                    <div className="absolute top-4 left-4 bg-navy-950/80 backdrop-blur-sm text-white text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider">
                      {category.imageLabel}
                    </div>
                  )}
                </div>

                {/* Content Section */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center bg-white p-8 lg:p-12 rounded-2xl shadow-lg border border-slate-100">
                  <div className="mb-6">
                    {category.badge && (
                      <span className="text-[10px] uppercase tracking-widest text-gold-500 font-bold mb-3 block flex items-center gap-2">
                        <span className="w-4 h-px bg-gold-400"></span>
                        {category.badge}
                      </span>
                    )}
                    <h3 className="text-2xl lg:text-3xl font-display text-navy-950 mb-6">
                      {category.name}
                    </h3>
                  </div>

                  <ul className="space-y-4 mb-8 flex-grow">
                    {category.features.map((feature, i) => (
                      <li key={i} className="flex items-start text-slate-700">
                        <Check className="w-5 h-5 text-gold-400 mr-3 mt-0.5 shrink-0" strokeWidth={2.5} />
                        <span className="leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {category.bestFor && (
                    <div className="mt-auto bg-slate-50 border border-slate-200 rounded-xl p-5">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
                        BEST FOR
                      </span>
                      <p className="text-sm text-slate-800 italic">
                        "{category.bestFor}"
                      </p>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default PremiumSuiteCategories;
