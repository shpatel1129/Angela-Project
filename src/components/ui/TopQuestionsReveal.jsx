import React, { useState } from 'react';
import FadeIn from './FadeIn';
import { ChevronRight } from 'lucide-react';

const TopQuestionsReveal = ({ title, subtitle, questions }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="relative w-full bg-navy-950 text-white py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-navy-900 via-navy-950 to-navy-950"></div>
      
      <div className="relative z-10 container mx-auto px-6 max-w-[1024px]">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl mb-4">{title}</h2>
            <p className="font-sans text-lg text-ice-200">{subtitle}</p>
          </div>
        </FadeIn>

        <div className="space-y-6">
          {questions.map((q, idx) => {
            const isActive = activeIndex === idx;
            return (
              <div 
                key={idx}
                className={`group relative overflow-hidden rounded-2xl border transition-all duration-500 ease-out cursor-pointer
                  ${isActive ? 'border-gold-500 bg-white/10 shadow-[0_0_30px_rgba(212,175,55,0.15)]' : 'border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20'}
                `}
                onClick={() => setActiveIndex(isActive ? null : idx)}
              >
                <div className="p-8 md:p-10 flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
                  <div className="flex-1">
                    <h3 className="font-display text-2xl md:text-3xl mb-2 text-white group-hover:text-gold-200 transition-colors">
                      {q.question}
                    </h3>
                    
                    <div className={`grid transition-all duration-500 ease-in-out ${isActive ? 'grid-rows-[1fr] mt-4 opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                      <div className="overflow-hidden">
                        <p className="font-sans text-ice-200 text-lg leading-relaxed">
                          {q.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 border transition-all duration-500
                    ${isActive ? 'border-gold-500 bg-gold-500/20 rotate-90' : 'border-white/20 group-hover:border-white/40 group-hover:bg-white/10'}
                  `}>
                    <ChevronRight className={`w-6 h-6 transition-colors ${isActive ? 'text-gold-400' : 'text-white'}`} />
                  </div>
                </div>
                
                {/* Active Highlight Glow */}
                <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gold-500 transition-all duration-500 ${isActive ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'}`}></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TopQuestionsReveal;
