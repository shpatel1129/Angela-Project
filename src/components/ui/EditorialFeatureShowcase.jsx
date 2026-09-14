import React from 'react';
import FadeIn from './FadeIn';

const EditorialFeatureShowcase = ({ title, subtitle, image, features, bgClass = 'bg-white' }) => {
  return (
    <section className={`relative w-full py-24 overflow-hidden ${bgClass}`}>
      <div className="absolute top-0 left-0 w-full h-[60%] bg-stone-50 z-0 hidden lg:block"></div>
      
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="font-display text-4xl md:text-6xl text-navy-900 mb-6 leading-tight">
              {title}
            </h2>
            <p className="font-sans text-lg md:text-xl text-navy-600">
              {subtitle}
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0 items-center">
          {/* Image Side */}
          <div className="lg:col-span-7 relative">
            <FadeIn delay={0.2}>
              <div className="relative aspect-[4/5] md:aspect-[16/10] lg:aspect-[4/5] overflow-hidden shadow-2xl">
                <img 
                  src={image} 
                  alt="AmaDahlia Luxury Feature" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-navy-900/10 mix-blend-multiply"></div>
              </div>
              {/* Decorative Element */}
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gold-100 rounded-full mix-blend-multiply opacity-50 blur-2xl"></div>
            </FadeIn>
          </div>

          {/* Editorial Content Side */}
          <div className="lg:col-span-5 lg:-ml-16 z-20 relative">
            <div className="bg-white p-8 md:p-12 shadow-xl border border-stone-100">
              <FadeIn delay={0.4}>
                <div className="space-y-10">
                  {features.map((feature, idx) => (
                    <div key={idx} className="relative group">
                      <div className="absolute -left-6 top-0 bottom-0 w-0.5 bg-stone-200 group-hover:bg-gold-500 transition-colors duration-500"></div>
                      <span className="font-display text-gold-500 text-sm tracking-[0.2em] uppercase block mb-2">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <h3 className="font-display text-2xl text-navy-900 mb-3 group-hover:text-gold-700 transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="font-sans text-navy-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditorialFeatureShowcase;
