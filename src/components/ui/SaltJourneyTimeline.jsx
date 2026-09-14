import React from 'react';
import FadeIn from './FadeIn';

const SaltJourneyTimeline = ({ data }) => {
  if (!data || !data.items) return null;

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-ice-50 rounded-full mix-blend-multiply filter blur-3xl opacity-50 translate-x-1/3 -translate-y-1/2"></div>
      
      <div className="max-w-[1024px] mx-auto px-6 relative z-10">
        <FadeIn>
          <div className="text-center mb-20">
            <h2 className="font-display text-4xl md:text-5xl text-navy-900 mb-6">{data.title}</h2>
            {data.subtitle && (
              <p className="font-sans text-xl text-navy-600 max-w-2xl mx-auto">
                {data.subtitle}
              </p>
            )}
          </div>
        </FadeIn>

        <div className="relative">
          {/* Timeline connecting line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-ice-200 transform md:-translate-x-1/2"></div>

          <div className="space-y-12 md:space-y-24">
            {data.items.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={index} className={`relative flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-white border-4 border-gold-500 rounded-full transform -translate-x-1/2 shadow-[0_0_0_4px_white] z-10 flex items-center justify-center">
                     <span className="text-[10px] font-bold text-navy-900">{item.step}</span>
                  </div>

                  {/* Content Box */}
                  <div className={`w-full pl-16 md:pl-0 md:w-1/2 ${isEven ? 'md:pr-16 text-left md:text-right' : 'md:pl-16 text-left'}`}>
                    <FadeIn delay={index * 0.1}>
                      <div className="bg-white p-8 rounded-2xl shadow-sm border border-ice-100 hover:shadow-xl transition-shadow duration-300 relative group overflow-hidden">
                        {/* Decorative subtle numbering */}
                        <div className={`absolute text-[120px] font-display font-black text-ice-50 opacity-50 pointer-events-none -top-8 ${isEven ? '-left-4' : '-right-4'} group-hover:scale-110 transition-transform duration-500`}>
                          0{item.step}
                        </div>
                        <div className="relative z-10">
                          <h3 className="font-display text-3xl text-navy-900 mb-4 group-hover:text-gold-600 transition-colors">
                            {item.title}
                          </h3>
                          <p className="font-sans text-navy-600 leading-relaxed text-lg">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </FadeIn>
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SaltJourneyTimeline;
