import React from 'react';
import FadeIn from './FadeIn';
import { Star } from 'lucide-react';

const ValueComparisonPanel = ({ title, description, categories }) => {
  if (!categories || categories.length === 0) return null;

  const renderStars = (ratingStr) => {
    const rating = parseFloat(ratingStr) || 0;
    
    return (
      <div className="flex gap-1.5 items-center">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star 
            key={star}
            size={16}
            className={star <= rating ? 'fill-gold-500 text-gold-500' : 'text-navy-600'}
            strokeWidth={star <= rating ? 2 : 1.5}
          />
        ))}
      </div>
    );
  };

  return (
    <section className="py-24 bg-navy-950 relative overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[500px] bg-navy-900 rounded-full blur-[120px] opacity-40 pointer-events-none"></div>

      <div className="max-w-[1100px] mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <FadeIn>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-6">
              {title}
            </h2>
            <p className="font-sans text-lg text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
              {description}
            </p>
            <div className="w-16 h-1 bg-gold-500 mx-auto rounded-full"></div>
          </FadeIn>
        </div>

        {/* Scorecard Table */}
        <FadeIn delay={0.2}>
          <div className="rounded-xl border border-navy-800 overflow-hidden bg-navy-950/80 backdrop-blur-sm shadow-2xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[700px]">
                <thead>
                  <tr className="border-b border-navy-800">
                    <th className="w-[40%] py-6 px-6 md:px-8 font-sans text-xs font-bold uppercase tracking-widest text-gold-500 bg-navy-950">
                      Feature
                    </th>
                    <th className="w-[30%] py-6 px-6 font-sans text-xs font-bold uppercase tracking-widest text-slate-400 bg-white/[0.03] border-l border-r border-navy-800/50">
                      Regent Seven Seas
                    </th>
                    <th className="w-[30%] py-6 px-6 font-sans text-xs font-bold uppercase tracking-widest text-slate-400 bg-navy-950">
                      Seabourn
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-navy-800">
                  {categories.map((cat, idx) => (
                    <tr key={idx} className="hover:bg-white/[0.02] transition-colors group">
                      <td className="py-5 px-6 md:px-8 font-sans font-bold text-[15px] text-white">
                        {cat.name}
                      </td>
                      <td className="py-5 px-6 bg-white/[0.03] border-l border-r border-navy-800/50 group-hover:bg-white/[0.05] transition-colors">
                        {renderStars(cat.brand1)}
                      </td>
                      <td className="py-5 px-6">
                        {renderStars(cat.brand2)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </FadeIn>
        
      </div>
    </section>
  );
};

export default ValueComparisonPanel;
