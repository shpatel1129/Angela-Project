import React from 'react';
import FadeIn from './FadeIn';

const ValueScale = ({ title, description, scenarios }) => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-4xl md:text-5xl text-navy-900 mb-6">{title}</h2>
            {description && (
              <p className="font-sans text-lg text-navy-600 leading-relaxed">
                {description}
              </p>
            )}
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {scenarios.map((scenario, idx) => {
            const isAllInclusive = scenario.recommendation.toLowerCase().includes('all-inclusive');
            
            return (
              <FadeIn key={idx} delay={idx * 0.1}>
                <div className={`h-full flex flex-col rounded-2xl p-8 border ${isAllInclusive ? 'bg-navy-950 border-navy-950 text-white' : 'bg-ice-50 border-ice-200 text-navy-900'} relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}>
                  
                  {/* Decorative background accent */}
                  {isAllInclusive && (
                    <div className="absolute -top-24 -right-24 w-48 h-48 bg-white opacity-5 rounded-full blur-2xl pointer-events-none"></div>
                  )}

                  <div className="relative z-10 flex-grow">
                    <h3 className={`font-display text-2xl mb-6 ${isAllInclusive ? 'text-white' : 'text-navy-900'}`}>
                      {scenario.title}
                    </h3>
                    
                    <div className="mb-8">
                      <p className={`text-sm font-bold uppercase tracking-wider mb-4 ${isAllInclusive ? 'text-ice-200' : 'text-navy-500'}`}>
                        Daily Habits:
                      </p>
                      <ul className="space-y-3">
                        {scenario.habits.map((habit, hIdx) => (
                          <li key={hIdx} className="flex items-start">
                            <svg className={`w-5 h-5 mr-3 flex-shrink-0 mt-0.5 ${isAllInclusive ? 'text-gold-400' : 'text-navy-400'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className={`text-sm md:text-base ${isAllInclusive ? 'text-gray-300' : 'text-navy-700'}`}>
                              {habit}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="relative z-10 mt-auto pt-6 border-t border-opacity-20 border-current">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs uppercase tracking-widest font-bold opacity-80">Recommendation</span>
                    </div>
                    <p className={`font-display text-xl ${isAllInclusive ? 'text-gold-400' : 'text-navy-800'}`}>
                      {scenario.recommendation}
                    </p>
                    <p className={`mt-3 text-sm leading-relaxed ${isAllInclusive ? 'text-ice-100' : 'text-navy-600'}`}>
                      {scenario.description}
                    </p>
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

export default ValueScale;
