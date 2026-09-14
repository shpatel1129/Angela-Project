import React from 'react';
import FadeIn from './FadeIn';
import { Star } from 'lucide-react';

const LuxuryScorecard = ({ title, subtitle, items }) => {
  return (
    <section className="py-24 bg-ice-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl opacity-60 -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <FadeIn>
            <h2 className="font-display text-4xl md:text-5xl text-navy-950 mb-4">{title}</h2>
            {subtitle && <p className="font-sans text-lg text-navy-600">{subtitle}</p>}
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {items.map((item, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-ice-100 hover:shadow-md transition-shadow flex items-center justify-between group">
                <div className="flex-1">
                  <h3 className="font-display text-lg text-navy-900 mb-1">{item.category}</h3>
                  <p className="font-sans text-sm text-navy-600">{item.description}</p>
                </div>
                
                <div className="flex gap-1 ml-4 bg-ice-50 px-3 py-2 rounded-full border border-ice-100 group-hover:border-gold-200 transition-colors">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star 
                      key={star} 
                      size={16} 
                      className={`${star <= item.rating ? 'fill-gold-500 text-gold-500' : 'fill-transparent text-slate-300'}`}
                    />
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LuxuryScorecard;
