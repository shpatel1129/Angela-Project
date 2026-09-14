import React from 'react';
import FadeIn from './FadeIn';
import { Trophy } from 'lucide-react';

const NonOrthogonalAwards = ({ title, subtitle, categories }) => {
  return (
    <section className="w-full bg-navy-950 py-24 overflow-hidden relative border-y border-white/5">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
        <div className="absolute w-[200%] h-px bg-white/20 top-[30%] -left-[50%] -rotate-12" />
        <div className="absolute w-[200%] h-px bg-white/20 top-[60%] -left-[50%] -rotate-12" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <FadeIn>
          <div className="text-center mb-20">
            {subtitle && (
              <span className="font-sans text-ts-gold uppercase tracking-widest text-sm font-bold mb-4 block">
                {subtitle}
              </span>
            )}
            <h2 className="font-display text-4xl md:text-5xl text-white mb-6">
              {title}
            </h2>
            <div className="w-24 h-1 bg-ts-gold mx-auto -skew-x-12"></div>
          </div>
        </FadeIn>

        {/* Non-Orthogonal Grid */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-x-8 md:gap-y-12">
          {categories.map((item, idx) => {
            // Create a staggered vertical offset for the middle items to enhance the non-orthogonal feel
            const isMiddle = idx % 3 === 1;
            
            return (
              <FadeIn key={idx} delay={idx * 0.1} className={`w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] ${isMiddle ? 'lg:translate-y-8' : ''}`}>
                {/* The Skewed Card */}
                <div className="relative h-full bg-white/5 border border-white/10 p-8 transition-all duration-300 hover:bg-white/10 hover:-translate-y-2 group"
                     style={{ clipPath: 'polygon(5% 0, 100% 0, 95% 100%, 0% 100%)' }}>
                  
                  {/* Un-skewed Content Wrapper (since clip-path doesn't skew content, we just need to pad the sides to stay within the polygon) */}
                  <div className="h-full flex flex-col px-4">
                    
                    {/* Category Name */}
                    <h3 className="font-sans text-ts-gold uppercase tracking-widest text-[10px] font-bold mb-4">
                      {item.category}
                    </h3>
                    
                    {/* Winner Name */}
                    <div className="flex items-center mb-4">
                      <Trophy className="w-5 h-5 text-white/50 mr-3 flex-shrink-0 group-hover:text-ts-gold transition-colors" />
                      <h4 className="font-display text-2xl text-white">
                        {item.winner}
                      </h4>
                    </div>

                    {/* Description */}
                    <p className="font-sans text-ice-300 leading-relaxed text-sm mt-auto">
                      {item.description}
                    </p>
                  </div>

                  {/* Decorative corner accent */}
                  <div className="absolute top-0 right-0 w-8 h-8 bg-ts-gold/20 -z-10 transition-transform group-hover:scale-150 rounded-bl-full"></div>
                </div>
              </FadeIn>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default NonOrthogonalAwards;
