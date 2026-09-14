import React from 'react';
import FadeIn from './FadeIn';
import { Star, Award } from 'lucide-react';

const LuxuryScorecardVisual = ({ title, subtitle, items, image }) => {
  if (!items || items.length === 0) return null;

  const topItems = items.slice(0, 5);
  const bottomItems = items.slice(5);

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-ice-50 rounded-full blur-[120px] opacity-60 -translate-x-1/2 -translate-y-1/4"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gold-50 rounded-full blur-[100px] opacity-50 translate-x-1/4 translate-y-1/4"></div>

      <div className="max-w-[1300px] mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-navy-950 rounded-full mb-6">
              <Award className="w-4 h-4 text-gold-400" />
              <span className="font-sans text-xs uppercase tracking-[0.2em] text-gold-400 font-semibold">Expert Rating</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-navy-950 mb-4">{title}</h2>
            {subtitle && <p className="font-sans text-lg text-navy-600 max-w-2xl mx-auto">{subtitle}</p>}
          </FadeIn>
        </div>

        {/* Main Layout: Image + Top Scorecard Items */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
          {/* Image Column */}
          {image && (
            <FadeIn className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl h-full min-h-[480px] group">
                <img 
                  src={image} 
                  alt="Luxury experience" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="flex items-center gap-1 mb-3">
                    {[1,2,3,4,5].map(s => (
                      <Star key={s} size={20} className="fill-gold-400 text-gold-400" />
                    ))}
                  </div>
                  <p className="font-display text-2xl text-white leading-snug">Boutique Luxury<br/>Redefined</p>
                </div>
              </div>
            </FadeIn>
          )}

          {/* Scorecard Items Column */}
          <div className={`${image ? 'lg:col-span-7' : 'lg:col-span-12'} flex flex-col gap-4`}>
            {topItems.map((item, index) => (
              <FadeIn key={index} delay={index * 0.08}>
                <div className="bg-white rounded-2xl p-6 shadow-md border border-slate-100 hover:shadow-lg hover:border-gold-100 transition-all duration-300 flex items-center justify-between group">
                  <div className="flex-1 mr-4">
                    <h3 className="font-display text-lg text-navy-900 mb-1 group-hover:text-navy-950 transition-colors">{item.category}</h3>
                    <p className="font-sans text-sm text-navy-500">{item.description}</p>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="flex gap-1 bg-ice-50 px-3 py-2 rounded-full border border-ice-100 group-hover:border-gold-200 transition-colors">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star 
                          key={star} 
                          size={16} 
                          className={`transition-colors ${star <= item.rating ? 'fill-gold-500 text-gold-500' : 'fill-transparent text-slate-300'}`}
                        />
                      ))}
                    </div>
                    <span className="font-display text-2xl text-navy-900 min-w-[2ch] text-right">{item.rating}</span>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Bottom Row Scorecard Items */}
        {bottomItems.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {bottomItems.map((item, index) => (
              <FadeIn key={index} delay={(index + topItems.length) * 0.08}>
                <div className="bg-navy-950 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gold-500/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-display text-lg text-white">{item.category}</h3>
                      <span className="font-display text-3xl text-gold-400">{item.rating}</span>
                    </div>
                    <p className="font-sans text-sm text-ice-200/80 mb-4">{item.description}</p>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star 
                          key={star} 
                          size={14} 
                          className={`${star <= item.rating ? 'fill-gold-500 text-gold-500' : 'fill-transparent text-navy-600'}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default LuxuryScorecardVisual;
