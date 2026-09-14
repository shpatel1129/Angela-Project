import React from 'react';
import FadeIn from './FadeIn';

const DiningVenuesMasonry = ({ title, subtitle, items }) => {
  if (!items || items.length === 0) return null;

  return (
    <section className="py-24 bg-navy-950 px-6">
      <div className="max-w-[1400px] mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl text-white mb-6 tracking-wide">
              {title}
            </h2>
            {subtitle && (
              <p className="font-sans text-lg md:text-xl text-ice-200 max-w-3xl mx-auto leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>
        </FadeIn>

        {/* Mosaic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => {
            // Make every 4th item span 2 columns on large screens for a masonry feel
            const isWide = index === 0 || index === 5;
            
            return (
              <FadeIn 
                key={index} 
                delay={index * 0.1}
                className={isWide ? 'lg:col-span-2' : ''}
              >
                <div className="group relative w-full h-[400px] rounded-2xl overflow-hidden cursor-pointer shadow-2xl">
                  {/* Background Image */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  
                  {/* Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-900/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>

                  {/* Content Container */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                    <div className="transform transition-transform duration-500 translate-y-8 group-hover:translate-y-0">
                      
                      {/* Top Label */}
                      <span className="inline-block px-3 py-1 bg-gold-500/20 text-gold-400 border border-gold-500/30 rounded-full text-xs font-bold tracking-widest uppercase mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                        {item.category}
                      </span>
                      
                      {/* Title */}
                      <h3 className="font-display text-3xl md:text-4xl mb-4 group-hover:text-gold-400 transition-colors duration-300">
                        {item.title}
                      </h3>
                      
                      {/* Description */}
                      <p className="font-sans text-ice-200 line-clamp-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200 leading-relaxed">
                        {item.description}
                      </p>
                      
                      {/* Decorative Line */}
                      <div className="h-0.5 w-12 bg-gold-500 mt-6 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-300"></div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DiningVenuesMasonry;
