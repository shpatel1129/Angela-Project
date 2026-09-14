import React from 'react';
import FadeIn from './FadeIn';

const AvalonSuiteExperience = ({ title, subtitle, items }) => {
  if (!items || items.length === 0) return null;

  return (
    <section className="py-24 bg-navy-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('../../assets/avalon-inclusions/Exterior Artistry II 8.webp')] opacity-5 bg-cover bg-center"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/90 to-transparent"></div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <h2 className="font-display text-4xl md:text-5xl text-gold-400 mb-6">{title}</h2>
            {subtitle && (
              <p className="font-sans text-lg text-ice-100 leading-relaxed">
                {subtitle}
              </p>
            )}
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {items.map((item, idx) => (
            <FadeIn key={idx} delay={idx * 150} className="h-full">
              <div className="group relative h-full rounded-2xl overflow-hidden border border-navy-800 bg-navy-900/50 hover:bg-navy-800 transition-colors duration-500 flex flex-col">
                <div className="p-8 pb-0">
                  <h3 className="font-display text-2xl text-white mb-2 group-hover:text-gold-400 transition-colors">{item.title}</h3>
                  <h4 className="font-sans text-sm tracking-widest uppercase text-gold-500 font-bold mb-6">{item.subtitle}</h4>
                </div>
                
                <div className="px-8 pb-8 flex-grow">
                  <ul className="space-y-4">
                    {item.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start">
                        <svg className="w-5 h-5 text-gold-400 mt-1 mr-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="font-sans text-ice-50 leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="w-full h-2 bg-gradient-to-r from-transparent via-gold-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 mt-auto"></div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AvalonSuiteExperience;
