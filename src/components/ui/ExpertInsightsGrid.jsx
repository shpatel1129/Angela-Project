import React from 'react';
import { Quote } from 'lucide-react';
import FadeIn from './FadeIn';

const ExpertInsightsGrid = ({ insights, title = "Expert Insights on the Transition", subtitle = "The difference between booking a cruise and planning a luxury journey lies in asking the right questions. Here is Angela's advice for river cruisers." }) => {
  return (
    <section className="w-full py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest text-navy-950 font-semibold px-4 py-1.5 rounded-full bg-navy-100 border border-navy-200 mb-4">
            <Quote className="w-3.5 h-3.5" />
            <span>Angela Hughes' Philosophy</span>
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-normal text-navy-950 mb-6">
            {title}
          </h2>
          <div className="w-16 h-0.5 bg-gold-400 mx-auto mb-6"></div>
          <p className="text-base md:text-lg text-slate-600 leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* 12 Authority Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {insights.map((item, idx) => (
            <FadeIn key={item.id} delay={idx * 50}>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col relative overflow-hidden group">
                
                {/* Decorative background element */}
                <div className="absolute -right-6 -top-6 text-slate-50 opacity-50 transform rotate-12 group-hover:scale-110 transition-transform duration-500">
                  <Quote className="w-32 h-32" />
                </div>

                <div className="relative z-10 flex flex-col h-full">
                  <div className="text-gold-400 font-display text-4xl mb-4 opacity-40">
                    {String(idx + 1).padStart(2, '0')}
                  </div>
                  
                  <h3 className="text-lg font-display text-navy-950 mb-3 font-semibold">
                    {item.title}
                  </h3>
                  
                  <p className="text-sm text-slate-600 leading-relaxed flex-grow">
                    "{item.insight}"
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

export default ExpertInsightsGrid;
