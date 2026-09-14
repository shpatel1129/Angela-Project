import React from 'react';
import FadeIn from './FadeIn';

const AuthorityGrid = ({ title, subtitle, items }) => {
  return (
    <section className="py-16 md:py-24 bg-white relative">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <FadeIn>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-navy-950 mb-6 leading-tight">
              {title}
            </h2>
            {subtitle && (
              <p className="font-sans text-lg md:text-xl text-navy-600">
                {subtitle}
              </p>
            )}
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {items?.map((item, index) => (
            <FadeIn key={index} delay={index * 0.1} className="h-full">
              <div className="group h-full flex flex-col items-center text-center p-8 border border-ice-200 bg-ice-50/50 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-navy-950 text-white mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <span className="font-display text-2xl">{index + 1}</span>
                </div>
                <h3 className="font-display text-xl md:text-2xl text-navy-900 mb-4 group-hover:text-gold-600 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="font-sans text-navy-600 leading-relaxed text-sm md:text-base">
                  {item.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AuthorityGrid;
