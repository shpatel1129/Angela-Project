import React from 'react';
import FadeIn from './FadeIn';

const getMatchLabel = (rating) => {
  if (rating >= 5) return 'Perfect Match';
  if (rating >= 4) return 'Highly Recommended';
  if (rating >= 3) return 'Good Fit';
  return 'Consider Options';
};

const TravelerRatingsAward = ({ title, subtitle, ratings }) => {
  if (!ratings || ratings.length === 0) return null;

  return (
    <section className="w-full bg-white py-32 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        
        {/* Header Area */}
        <FadeIn>
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div className="max-w-2xl">
              {subtitle && (
                <span className="font-sans text-ts-gold uppercase tracking-widest text-sm font-bold mb-6 block">
                  {subtitle}
                </span>
              )}
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-navy-950 leading-tight">
                {title}
              </h2>
            </div>
            {/* Minimalist decorative line instead of a centered one */}
            <div className="hidden md:block w-32 h-px bg-ts-gold mb-4"></div>
          </div>
        </FadeIn>

        {/* Editorial Ledger List */}
        <div className="border-t border-navy-900/10">
          {ratings.map((item, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              {/* 
                We use negative margins and matching padding so the hover effect 
                bleeds slightly outside the text alignment, creating a premium feel. 
              */}
              <div className="group relative flex flex-col md:flex-row md:items-center justify-between py-10 md:py-12 border-b border-navy-900/10 transition-all duration-700 hover:bg-ice-50 -mx-6 px-6 sm:-mx-10 sm:px-10">
                
                {/* 1. Traveler Type */}
                <div className="md:w-1/3 mb-6 md:mb-0">
                  <h3 className="font-display text-3xl md:text-4xl text-navy-950 group-hover:text-ts-gold transition-colors duration-500">
                    {item.travelerType}
                  </h3>
                </div>

                {/* 2. Reasoning / Description */}
                <div className="md:w-5/12 mb-6 md:mb-0 md:pr-8">
                  <p className="font-sans text-navy-700/80 text-lg leading-relaxed">
                    {item.why}
                  </p>
                </div>

                {/* 3. Match Rating (Typography-based instead of stars/bars) */}
                <div className="md:w-1/4 flex justify-start md:justify-end">
                  <div className="inline-flex items-center justify-center border border-navy-900/20 rounded-full px-6 py-3 group-hover:border-ts-gold group-hover:bg-ts-gold transition-all duration-500">
                    <span className="font-sans text-xs uppercase tracking-[0.2em] font-bold text-navy-950 group-hover:text-white transition-colors duration-500 text-center">
                      {getMatchLabel(item.rating)}
                    </span>
                  </div>
                </div>

              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TravelerRatingsAward;
