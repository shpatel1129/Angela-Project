import React from 'react';
import { motion } from 'framer-motion';
import { Map, BedDouble, CalendarDays, MapPin } from 'lucide-react';

const iconMap = {
  destination: Map,
  cabin: BedDouble,
  flexibility: CalendarDays,
  extend: MapPin,
};

const QuestionsToAskGrid = ({ data }) => {
  if (!data) return null;

  return (
    <section className="py-24 bg-white relative overflow-hidden">
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
            className="text-lg text-slate-500 font-sans tracking-widest uppercase"
          >
            {data.subtitle}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.questions.map((q, index) => {
            const Icon = iconMap[q.id] || Map;
            
            // Center the orphaned 5th item in a 4-column grid and make it span 2 columns so it looks balanced
            const isOrphaned = data.questions.length === 5 && index === 4;
            const spanClass = isOrphaned ? 'md:col-span-2 lg:col-start-2 lg:col-span-2 max-w-2xl mx-auto w-full' : '';

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`group relative bg-slate-50 rounded-2xl p-8 hover:bg-slate-900 transition-colors duration-500 overflow-hidden ${spanClass}`}
              >
                {/* Decorative background shape */}
                <div className="absolute -right-8 -top-8 w-32 h-32 bg-slate-100 rounded-full group-hover:bg-slate-800 transition-colors duration-500" />
                
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform duration-500">
                    <Icon className="w-6 h-6 text-slate-900" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-white transition-colors duration-300">
                    {q.title}
                  </h3>
                  
                  <p className="text-slate-600 font-light leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                    {q.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default QuestionsToAskGrid;
