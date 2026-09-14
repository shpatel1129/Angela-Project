import React from 'react';
import { Wine, UtensilsCrossed, Star, ChefHat } from 'lucide-react';
import { motion } from 'framer-motion';

const PremiumTextShowcase = ({ title, subtitle, items }) => {
  // Map icons based on index to give each card a unique visual flair without needing images
  const icons = [
    <UtensilsCrossed className="w-8 h-8 text-gold-400" />,
    <Wine className="w-8 h-8 text-gold-400" />,
    <ChefHat className="w-8 h-8 text-gold-400" />,
    <Star className="w-8 h-8 text-gold-400" />
  ];

  return (
    <section className="py-24 bg-navy-950 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-gold-500/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-blue-500/5 blur-[120px] rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[1px] bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold-400 tracking-[0.2em] text-sm font-semibold uppercase mb-4 block"
          >
            Culinary Excellence
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display text-white mb-6 leading-tight"
          >
            {title}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-300 leading-relaxed font-light"
          >
            {subtitle}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * (index + 1), duration: 0.6, ease: "easeOut" }}
              className="group relative p-10 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-500 overflow-hidden backdrop-blur-sm"
            >
              {/* Hover effect gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-16 h-16 rounded-full bg-navy-900 border border-gold-500/30 flex items-center justify-center mb-8 shadow-[0_0_15px_rgba(212,175,55,0.1)] group-hover:scale-110 transition-transform duration-500">
                  {icons[index % icons.length]}
                </div>
                
                <h3 className="text-2xl font-display text-white mb-4 group-hover:text-gold-300 transition-colors duration-300">
                  {item.name || item.title}
                </h3>
                
                <p className="text-slate-300 leading-relaxed font-light flex-grow text-lg">
                  {item.description}
                </p>
                
                <div className="mt-8 w-12 h-[1px] bg-gold-500/50 group-hover:w-full transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PremiumTextShowcase;
