import React from 'react';
import FadeIn from './FadeIn';
import { Check } from 'lucide-react';

const BrandShowcase = ({ brand, index }) => {
  const isEven = index % 2 === 0;

  return (
    <section className="w-full bg-ice-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`flex flex-col gap-12 lg:gap-20 ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center`}>
          
          {/* Image Side */}
          <div className="w-full lg:w-1/2">
            <FadeIn direction={isEven ? 'left' : 'right'}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[400px] md:h-[600px] group">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-[3000ms] ease-out group-hover:scale-105"
                  style={{ backgroundImage: `url('${brand.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent opacity-80" />
                <h3 className="absolute bottom-8 left-8 font-display text-4xl text-white drop-shadow-lg">
                  {brand.name}
                </h3>
              </div>
            </FadeIn>
          </div>

          {/* Content Side */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <FadeIn direction={isEven ? 'right' : 'left'}>
              
              {/* Best For */}
              <div className="mb-8">
                <h4 className="font-sans text-ts-gold uppercase tracking-widest text-sm font-bold mb-2">
                  Best For
                </h4>
                <p className="font-display text-2xl text-navy-950">
                  {brand.bestFor}
                </p>
              </div>

              {/* What Makes It Stand Out */}
              <div className="mb-8">
                <h4 className="font-display text-xl text-navy-950 mb-3">
                  Why {brand.name} Stands Out
                </h4>
                <p className="font-sans text-navy-700 leading-relaxed">
                  {brand.whatMakesItStandOut}
                </p>
              </div>

              {/* Strengths & Considerations Grid */}
              {(brand.strengths?.length > 0 || brand.considerations?.length > 0) && (
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  
                  {/* Strengths */}
                  {brand.strengths?.length > 0 && (
                    <div>
                      <h4 className="font-sans text-navy-950 uppercase tracking-wider text-xs font-bold mb-4 pb-2 border-b border-navy-200">
                        Strengths
                      </h4>
                      <ul className="space-y-3">
                        {brand.strengths.map((strength, idx) => (
                          <li key={idx} className="flex items-start">
                            <Check className="w-4 h-4 mr-3 flex-shrink-0 mt-1 text-ts-gold" />
                            <span className="font-sans text-sm text-navy-700 leading-tight">
                              {strength}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Considerations */}
                  {brand.considerations?.length > 0 && (
                    <div>
                      <h4 className="font-sans text-navy-950 uppercase tracking-wider text-xs font-bold mb-4 pb-2 border-b border-navy-200">
                        Things to Consider
                      </h4>
                      <ul className="space-y-3">
                        {brand.considerations.map((consideration, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="w-4 h-4 mr-3 flex-shrink-0 mt-1 text-navy-400 flex items-center justify-center font-bold text-lg leading-none">-</span>
                            <span className="font-sans text-sm text-navy-700 leading-tight">
                              {consideration}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                </div>
              )}

            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BrandShowcase;
