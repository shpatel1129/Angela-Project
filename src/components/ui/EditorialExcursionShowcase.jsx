import React from 'react';
import FadeIn from './FadeIn';

const EditorialExcursionShowcase = ({ title, subtitle, items }) => {
  if (!items || items.length === 0) return null;

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <FadeIn>
            <h2 className="font-display text-4xl md:text-5xl text-navy-900 mb-6">{title}</h2>
            {subtitle && (
              <p className="font-sans text-lg md:text-xl text-navy-600">
                {subtitle}
              </p>
            )}
          </FadeIn>
        </div>

        {/* Zigzag Layout */}
        <div className="space-y-24 md:space-y-32">
          {items.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <div 
                key={index} 
                className={`flex flex-col md:flex-row items-center gap-12 lg:gap-20 ${
                  isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Image Side */}
                <div className="w-full md:w-3/5 lg:w-2/3">
                  <FadeIn direction={isEven ? 'right' : 'left'}>
                    <div className="relative aspect-[4/3] md:aspect-[16/10] overflow-hidden rounded-lg shadow-xl">
                      <div className="absolute inset-0 bg-navy-900/10 mix-blend-multiply z-10 transition-opacity duration-500 hover:opacity-0" />
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                  </FadeIn>
                </div>

                {/* Text Side */}
                <div className="w-full md:w-2/5 lg:w-1/3 text-center md:text-left">
                  <FadeIn direction="up" delay={0.2}>
                    {item.category && (
                      <span className="inline-block font-sans text-xs uppercase tracking-widest text-gold-500 mb-4 font-semibold">
                        {item.category}
                      </span>
                    )}
                    <h3 className="font-display text-3xl md:text-4xl text-navy-900 mb-6">
                      {item.title}
                    </h3>
                    <p className="font-sans text-base md:text-lg text-navy-700 leading-relaxed">
                      {item.description}
                    </p>
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

export default EditorialExcursionShowcase;
