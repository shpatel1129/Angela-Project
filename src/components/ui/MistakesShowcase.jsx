import React from 'react';
import FadeIn from './FadeIn';

const MistakesShowcase = ({ mistakes }) => {
  if (!mistakes || mistakes.length === 0) return null;

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-ice-50 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <FadeIn className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-block py-1 px-3 rounded-full bg-amber-50 text-amber-700 text-xs font-bold tracking-[0.2em] uppercase mb-6 border border-amber-100">
            Expert Advisory
          </span>
          <h2 className="text-4xl md:text-5xl font-display text-navy-900 mb-6 leading-tight">
            Common Pitfalls to Avoid
          </h2>
          <p className="text-lg text-slate-600 font-sans">
            Navigating the complexities of luxury river cruising requires insider knowledge. Avoid these costly mistakes to ensure your journey is flawless.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mistakes.map((mistake, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <div className="h-full bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col group">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 rounded-full bg-ice-50 flex items-center justify-center text-navy-800 group-hover:bg-navy-800 group-hover:text-white transition-colors duration-300">
                    <span className="font-display text-xl font-bold">{idx + 1}</span>
                  </div>
                  <svg className="w-6 h-6 text-amber-500/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                  </svg>
                </div>
                
                <h3 className="text-2xl font-display text-navy-900 mb-3">{mistake.title}</h3>
                
                <div className="w-8 h-px bg-slate-200 mb-4 group-hover:bg-amber-400 transition-colors duration-300"></div>
                
                <p className="text-slate-600 font-sans leading-relaxed text-sm flex-grow">
                  {mistake.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default MistakesShowcase;
