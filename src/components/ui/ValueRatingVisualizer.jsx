import React, { useEffect, useState } from 'react';
import FadeIn from './FadeIn';

const ValueRatingVisualizer = ({ data }) => {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    // Small delay to trigger the CSS transition on mount
    const timer = setTimeout(() => {
      setAnimated(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  if (!data || !data.categories) return null;

  return (
    <section className="w-full py-24 bg-navy-950 relative overflow-hidden border-y border-white/5">
      {/* Background styling */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-navy-900/50 via-navy-950 to-navy-950 pointer-events-none"></div>
      
      <div className="max-w-[1100px] mx-auto px-6 relative z-10 flex flex-col lg:flex-row gap-16 items-center">
        
        {/* Left Side: Overall Score */}
        <div className="w-full lg:w-1/3 flex flex-col items-center justify-center text-center">
          <FadeIn>
            <h2 className="font-display text-3xl md:text-4xl text-white mb-2">
              {data.title}
            </h2>
            <p className="font-sans text-ice-300 text-sm tracking-wide mb-10">
              {data.subtitle}
            </p>
            
            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full flex flex-col items-center justify-center shadow-[0_0_60px_rgba(212,175,55,0.15)] bg-navy-900/50 backdrop-blur-sm mx-auto">
              {/* SVG Circular Progress */}
              <svg className="absolute inset-0 w-full h-full -rotate-90">
                <circle 
                  cx="50%" 
                  cy="50%" 
                  r="48%" 
                  fill="transparent" 
                  stroke="rgba(212,175,55,0.15)" 
                  strokeWidth="4" 
                />
                <circle 
                  cx="50%" 
                  cy="50%" 
                  r="48%" 
                  fill="transparent" 
                  stroke="#D4AF37" 
                  strokeWidth="6" 
                  strokeDasharray="300"
                  strokeDashoffset={animated ? 300 - (300 * (data.overallScore / 10)) : 300}
                  strokeLinecap="round"
                  className="transition-all duration-[2000ms] ease-out"
                />
              </svg>
              
              <span className="font-display text-5xl md:text-7xl text-white drop-shadow-md">
                {data.overallScore}
              </span>
              <span className="font-sans text-ts-gold text-sm font-bold uppercase tracking-widest mt-2">
                Out of 10
              </span>
            </div>
          </FadeIn>
        </div>

        {/* Right Side: Category Bars */}
        <div className="w-full lg:w-2/3">
          <div className="space-y-8">
            {data.categories.map((category, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <div className="group">
                  <div className="flex justify-between items-end mb-2">
                    <h3 className="font-sans text-white text-base font-bold tracking-wide uppercase">
                      {category.name}
                    </h3>
                    <span className="font-display text-xl text-ts-gold">
                      {category.score}<span className="text-sm text-white/40">/10</span>
                    </span>
                  </div>
                  
                  {/* Progress Bar Background */}
                  <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                    {/* Progress Fill */}
                    <div 
                      className="h-full bg-ts-gold rounded-full relative"
                      style={{ 
                        width: animated ? `${(category.score / 10) * 100}%` : '0%', 
                        transition: 'width 1.5s cubic-bezier(0.4, 0, 0.2, 1)' 
                      }}
                    >
                      {/* Glow effect at the tip */}
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-ts-gold rounded-full opacity-50 blur-sm mix-blend-screen"></div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ValueRatingVisualizer;
