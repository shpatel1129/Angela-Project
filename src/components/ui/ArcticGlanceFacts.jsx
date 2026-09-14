import React from 'react';
import FadeIn from './FadeIn';

const ArcticGlanceFacts = ({ title, items }) => {
  return (
    <section className="w-full bg-slate-900 py-16 text-white border-b border-slate-800">
      <div className="max-w-[1280px] mx-auto px-6">
        <FadeIn>
          <h2 className="text-center font-display text-3xl md:text-4xl mb-12 tracking-wide text-slate-100">
            {title}
          </h2>
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items?.map((item, idx) => (
            <FadeIn key={idx} delay={idx * 0.15}>
              <div className="relative group overflow-hidden bg-slate-800/50 backdrop-blur-md border border-slate-700/50 rounded-2xl p-8 hover:bg-slate-800/80 transition-all duration-300 hover:border-gold-400/50 hover:shadow-xl">
                <div className="absolute top-0 left-0 w-2 h-full bg-gold-400 transform -skew-x-12 origin-left transition-transform duration-300 group-hover:scale-x-110"></div>
                <span className="text-xs uppercase tracking-widest text-gold-400 font-semibold mb-2 block">
                  {item.label}
                </span>
                <h3 className="text-2xl font-display font-medium text-white mb-3 group-hover:text-gold-300 transition-colors duration-300">
                  {item.value}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed font-light">
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

export default ArcticGlanceFacts;
