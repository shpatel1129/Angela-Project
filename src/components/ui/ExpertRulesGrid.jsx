import React from 'react';
import FadeIn from './FadeIn';
import { Quote } from 'lucide-react';

const ExpertRulesGrid = ({ title, subtitle, rules = [] }) => {
  if (!rules || rules.length === 0) return null;

  return (
    <section className="w-full py-24 bg-navy-950 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-gold-400/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px bg-gold-500 w-12"></div>
              <span className="text-gold-500 font-sans font-bold tracking-[0.2em] uppercase text-xs">
                Expert Insights
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display text-white mb-6 leading-tight">
              {title}
            </h2>
            {subtitle && (
              <p className="text-lg text-slate-300 font-sans leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>
          
          <div className="hidden md:flex shrink-0">
            <Quote className="w-24 h-24 text-white/5 transform rotate-180" strokeWidth={1} />
          </div>
        </div>

        {/* Masonry-style Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 auto-rows-max">
          {rules.map((rule, idx) => {
            // Create a staggered masonry effect by pushing down the middle column
            const isMiddleColumn = (idx % 3) === 1;
            const isLastColumn = (idx % 3) === 2;
            
            return (
              <FadeIn 
                key={idx} 
                delay={idx * 0.05} 
                className={`relative group h-full ${isMiddleColumn ? 'xl:mt-12' : ''} ${isLastColumn ? 'xl:mt-6' : ''}`}
              >
                <div className="h-full p-8 md:p-10 bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-3xl hover:bg-white/[0.06] transition-all duration-500 flex flex-col relative overflow-hidden group-hover:-translate-y-2 group-hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)]">
                  
                  {/* Hover Accent Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gold-400/0 via-transparent to-gold-400/0 group-hover:from-gold-400/5 group-hover:to-transparent transition-all duration-500"></div>

                  {/* Top Left Accent */}
                  <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-gold-400/0 group-hover:border-gold-400/50 rounded-tl-3xl transition-all duration-700"></div>

                  {/* Stylized Number */}
                  <div className="absolute -top-6 -right-4 font-display text-[120px] leading-none text-white/[0.03] group-hover:text-gold-400/[0.05] transition-colors duration-500 font-bold select-none pointer-events-none z-0">
                    {String(idx + 1).padStart(2, '0')}
                  </div>

                  <div className="relative z-10 flex flex-col h-full">
                    {/* Header line */}
                    <div className="flex items-center justify-between mb-8">
                      <span className="font-sans text-xs uppercase tracking-[0.2em] text-gold-400 font-semibold">
                        Rule {String(idx + 1).padStart(2, '0')}
                      </span>
                      <div className="w-8 h-px bg-white/20 group-hover:bg-gold-400/50 transition-colors duration-300"></div>
                    </div>

                    <h3 className="font-display text-2xl lg:text-3xl text-white mb-6 leading-snug group-hover:text-gold-100 transition-colors duration-300">
                      {rule.title}
                    </h3>
                    
                    <p className="font-sans text-slate-300 leading-relaxed mt-auto font-light">
                      {rule.description}
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

export default ExpertRulesGrid;
