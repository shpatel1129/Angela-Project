import React from 'react';
import { Landmark, Utensils, Mountain, Camera, HeartPulse, Compass, Shield, Search } from 'lucide-react';
import { motion } from 'framer-motion';

const iconMap = {
  History: Landmark,
  Coffee: Utensils,
  Image: Camera,
  Leaf: Mountain,
  Activity: HeartPulse,
  Star: Shield,
  Compass: Compass,
  Search: Search
};

const ExcursionTypesShowcase = ({ data }) => {
  if (!data) return null;

  return (
    <section className="py-24 bg-brand-light-gray relative overflow-hidden">
      {/* Abstract Background Element */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif text-brand-navy mb-6"
          >
            {data.title}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600"
          >
            {data.subtitle}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 auto-rows-[250px]">
          {data.items.map((item, index) => {
            const Icon = iconMap[item.icon] || Compass;
            
            // Create an asymmetric masonry-like layout using row spans
            const isLarge = index === 0 || index === 3;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`group relative overflow-hidden rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 ease-out flex flex-col justify-end p-8 ${
                  isLarge ? 'md:row-span-2' : ''
                }`}
              >
                {/* Hover Background Shift */}
                <div className="absolute inset-0 bg-brand-navy translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-out rounded-2xl z-0" />
                
                <div className="relative z-10 h-full flex flex-col">
                  <div className={`mb-auto w-14 h-14 rounded-full flex items-center justify-center transition-colors duration-500 ${
                    isLarge ? 'bg-brand-gold/10 group-hover:bg-brand-gold/20' : 'bg-gray-50 group-hover:bg-white/10'
                  }`}>
                    <Icon className={`w-7 h-7 transition-colors duration-500 ${
                      isLarge ? 'text-brand-gold group-hover:text-white' : 'text-brand-navy group-hover:text-brand-gold'
                    }`} />
                  </div>
                  
                  <div className="mt-8">
                    <h3 className="text-2xl font-serif text-brand-navy group-hover:text-white transition-colors duration-500 mb-3">
                      {item.title}
                    </h3>
                    <p className={`transition-colors duration-500 leading-relaxed ${
                      isLarge ? 'text-gray-600 group-hover:text-gray-200 text-lg' : 'text-gray-500 group-hover:text-gray-300'
                    }`}>
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExcursionTypesShowcase;
