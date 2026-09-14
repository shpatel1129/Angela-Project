import React from 'react';
import FadeIn from './FadeIn';
import { Trophy } from 'lucide-react';

const CategoryAwards = ({ title, subtitle, categories }) => {
  return (
    <section className="w-full bg-navy-950 py-16 md:py-24 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <FadeIn>
          <div className="text-center mb-16">
            {subtitle && (
              <span className="font-sans text-ts-gold uppercase tracking-widest text-sm font-bold mb-4 block">
                {subtitle}
              </span>
            )}
            <h2 className="font-display text-4xl md:text-5xl text-white mb-6">
              {title}
            </h2>
            <div className="w-24 h-1 bg-white/20 mx-auto"></div>
          </div>
        </FadeIn>

        {/* Awards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((item, idx) => (
            <FadeIn key={idx} delay={idx * 0.05}>
              <div className="bg-white/5 border border-white/10 p-8 rounded-xl h-full transition-all duration-300 hover:bg-white/10 hover:-translate-y-1">
                
                {/* Category Name */}
                <h3 className="font-sans text-ice-200 uppercase tracking-widest text-xs font-bold mb-4">
                  {item.category}
                </h3>
                
                {/* Winner Name */}
                <div className="flex items-center mb-4">
                  <Trophy className="w-6 h-6 text-ts-gold mr-3 flex-shrink-0" />
                  <h4 className="font-display text-2xl text-white">
                    {item.winner}
                  </h4>
                </div>

                {/* Description */}
                <p className="font-sans text-ice-300 leading-relaxed text-sm">
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

export default CategoryAwards;
