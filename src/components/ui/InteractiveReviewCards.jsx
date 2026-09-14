import React from 'react';
import { motion } from 'framer-motion';
import FadeIn from './FadeIn';

const InteractiveReviewCards = ({ title, subtitle, reviews }) => {
  if (!reviews || reviews.length === 0) return null;

  // Staggered layout classes for 3 columns
  const columnClasses = [
    "lg:mt-0",
    "lg:mt-16",
    "lg:mt-8"
  ];

  const renderIcon = (type) => {
    switch(type) {
      case 'star':
        return (
          <svg className="w-8 h-8 text-accent-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        );
      case 'quote':
        return (
          <svg className="w-8 h-8 text-accent-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
        );
      case 'award':
        return (
          <svg className="w-8 h-8 text-accent-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            <circle cx="12" cy="12" r="9" />
          </svg>
        );
      default:
        return (
          <svg className="w-8 h-8 text-accent-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        );
    }
  };

  return (
    <section className="w-full py-24 bg-ice-50 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-ice-100/50 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <FadeIn>
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="font-display text-4xl md:text-5xl text-navy-950 mb-6">
              {title}
            </h2>
            <p className="font-sans text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          </div>
        </FadeIn>

        {/* Masonry/Staggered Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <div key={idx} className={`${columnClasses[idx % 3]}`}>
              <FadeIn delay={idx * 0.15}>
                <motion.div 
                  className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 relative group cursor-pointer"
                  whileHover={{ 
                    scale: 1.03, 
                    y: -10,
                    boxShadow: "0 20px 40px -10px rgba(0,0,0,0.1)",
                    zIndex: 20
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {/* Subtle Glow Effect on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-500/0 to-accent-500/0 group-hover:from-accent-500/5 group-hover:to-transparent rounded-3xl transition-all duration-500"></div>

                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-2xl bg-ice-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                      {renderIcon(review.icon)}
                    </div>
                    
                    <h3 className="font-display text-2xl text-navy-900 mb-4 group-hover:text-accent-600 transition-colors duration-300">
                      {review.headline}
                    </h3>
                    
                    <p className="font-sans text-slate-600 leading-relaxed mb-8">
                      "{review.text}"
                    </p>
                    
                    <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
                      {review.avatar ? (
                        <img src={review.avatar} alt={review.author} className="w-12 h-12 rounded-full object-cover" />
                      ) : (
                        <div className="w-10 h-10 rounded-full bg-navy-900 flex items-center justify-center">
                          <span className="text-white font-display text-sm">{review.author.charAt(0)}</span>
                        </div>
                      )}
                      <div>
                        <p className="font-sans font-bold text-sm text-navy-950 uppercase tracking-widest">{review.author}</p>
                        <p className="font-sans text-xs text-slate-500 mt-1">{review.role}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </FadeIn>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InteractiveReviewCards;
