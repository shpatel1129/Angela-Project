import React from 'react';
import { Check } from 'lucide-react';
import FadeIn from './FadeIn';

const ContainedShowdown = ({ title, brandA, brandB }) => {
  return (
    <section className="w-full bg-navy-950 py-12 md:py-20 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Title */}
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl text-white tracking-wide">
              {title}
            </h2>
          </div>
        </FadeIn>

        {/* Comparison Cards */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          
          {/* Brand A Card */}
          <FadeIn direction="left" delay={0.1}>
            <div className="flex flex-col bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-colors duration-500 shadow-2xl h-full">
              {/* Image Header */}
              <div className="h-64 md:h-80 w-full relative overflow-hidden group">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-[2000ms] ease-out group-hover:scale-110"
                  style={{ backgroundImage: `url('${brandA.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 to-transparent opacity-80" />
                <h3 className="absolute bottom-6 left-8 font-display text-3xl text-white drop-shadow-md">
                  {brandA.name}
                </h3>
              </div>
              
              {/* Content */}
              <div className="p-8 md:p-10 flex-grow flex flex-col justify-start">
                <ul className="space-y-5">
                  {brandA.features?.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="w-5 h-5 mr-4 flex-shrink-0 mt-0.5 text-ts-gold drop-shadow-md" />
                      <span className="font-sans text-base md:text-lg leading-relaxed text-ice-50">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeIn>

          {/* Brand B Card */}
          <FadeIn direction="right" delay={0.2}>
            <div className="flex flex-col bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-colors duration-500 shadow-2xl h-full">
              {/* Image Header */}
              <div className="h-64 md:h-80 w-full relative overflow-hidden group">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-[2000ms] ease-out group-hover:scale-110"
                  style={{ backgroundImage: `url('${brandB.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 to-transparent opacity-80" />
                <h3 className="absolute bottom-6 left-8 font-display text-3xl text-white drop-shadow-md">
                  {brandB.name}
                </h3>
              </div>
              
              {/* Content */}
              <div className="p-8 md:p-10 flex-grow flex flex-col justify-start">
                <ul className="space-y-5">
                  {brandB.features?.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="w-5 h-5 mr-4 flex-shrink-0 mt-0.5 text-ts-gold drop-shadow-md" />
                      <span className="font-sans text-base md:text-lg leading-relaxed text-ice-50">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
};

export default ContainedShowdown;
