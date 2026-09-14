import React from 'react';
import FadeIn from './FadeIn';
import { motion } from 'framer-motion';

const PremiumAlternatingShowcase = ({ title, subtitle, features }) => {
  if (!features || features.length === 0) return null;

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative subtle background accents */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-ice-100/50 rounded-l-[150px] mix-blend-multiply opacity-50 blur-3xl pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <FadeIn>
            {title && (
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-navy-950 mb-6">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="font-sans text-lg md:text-xl text-slate-600 leading-relaxed">
                {subtitle}
              </p>
            )}
            <div className="w-16 h-1 bg-gold-400 mx-auto mt-8 rounded-full"></div>
          </FadeIn>
        </div>

        {/* Features List */}
        <div className="space-y-16 md:space-y-24">
          {features.map((feature, idx) => {
            const isReversed = idx % 2 !== 0;

            return (
              <div 
                key={idx} 
                className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-10 lg:gap-16`}
              >
                {/* Image Side */}
                <div className="w-full lg:w-1/2 relative group">
                  <FadeIn delay={0.1} direction={isReversed ? 'left' : 'right'}>
                    <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                      {feature.image ? (
                        <motion.img 
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.7, ease: "easeOut" }}
                          src={feature.image} 
                          alt={feature.title} 
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      ) : (
                        <div className="w-full h-full bg-slate-200" />
                      )}
                      {/* Premium Image Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent opacity-80" />
                    </div>
                  </FadeIn>
                </div>

                {/* Content Side */}
                <div className="w-full lg:w-1/2">
                  <FadeIn delay={0.2} direction={isReversed ? 'right' : 'left'}>
                    <div className="flex flex-col justify-center max-w-xl">
                      {feature.badge && (
                        <span className="inline-block py-1 px-3 rounded-full bg-gold-50 border border-gold-200 text-gold-700 text-xs font-bold uppercase tracking-widest mb-6 self-start">
                          {feature.badge}
                        </span>
                      )}
                      
                      <h3 className="font-display text-3xl md:text-4xl text-navy-950 mb-6 leading-tight">
                        {feature.title}
                      </h3>
                      
                      <p className="font-sans text-lg text-slate-600 mb-8 leading-relaxed">
                        {feature.description}
                      </p>

                      {feature.bullets && feature.bullets.length > 0 && (
                        <ul className="space-y-4">
                          {feature.bullets.map((bullet, bIdx) => (
                            <li key={bIdx} className="flex items-start">
                              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-ice-100 flex items-center justify-center mr-4 mt-0.5">
                                <svg className="w-3.5 h-3.5 text-navy-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                </svg>
                              </span>
                              <span className="font-sans text-navy-800 font-medium">{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </FadeIn>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default PremiumAlternatingShowcase;
