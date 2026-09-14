import React from 'react';
import FadeIn from './FadeIn';

const DynamicCulinaryShowcase = ({ title, subtitle, items, images = [] }) => {
  return (
    <section className="py-24 bg-white overflow-hidden relative">
      <div className="max-w-[1440px] mx-auto px-6 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="font-display text-4xl md:text-5xl text-navy-950 mb-4">{title}</h2>
            {subtitle && (
              <p className="font-sans text-lg md:text-xl text-navy-600">
                {subtitle}
              </p>
            )}
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items?.map((item, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <div className={`group relative rounded-2xl overflow-hidden h-[400px] md:h-[500px] ${idx % 2 !== 0 ? 'md:mt-12' : ''} shadow-lg transition-all duration-700 hover:shadow-2xl`}>
                <div className="absolute inset-0 bg-navy-950/20 group-hover:bg-navy-950/40 transition-colors duration-500 z-10" />
                
                {images[idx % images.length] ? (
                  <img 
                    src={images[idx % images.length]} 
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    loading="lazy"
                  />
                ) : (
                  <div className="absolute inset-0 bg-ice-100" />
                )}

                <div className="absolute inset-0 z-20 p-6 flex flex-col justify-end bg-gradient-to-t from-navy-950/90 via-navy-950/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500">
                  <h3 className="font-display text-2xl text-white mb-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    {item.title}
                  </h3>
                  <p className="font-sans text-ice-50 text-sm opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100 line-clamp-4">
                    {item.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DynamicCulinaryShowcase;
