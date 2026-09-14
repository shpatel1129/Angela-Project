import React from 'react';
import FadeIn from './FadeIn';

const VibeComparisonBoard = ({ title, subtitle, categories }) => {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-20">
          <FadeIn>
            <span className="font-sans text-xs uppercase tracking-[0.2em] text-gold-500 font-bold mb-3 block">
              {subtitle || "Lifestyle Head-to-Head"}
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-navy-950 font-bold">
              {title || "Luxury Yacht vs. Tall Ship Adventure"}
            </h2>
            <div className="w-12 h-[2px] bg-gold-400 mx-auto mt-6"></div>
          </FadeIn>
        </div>

        {/* Dynamic Vibe Board Grid */}
        <div className="space-y-12">
          {categories.map((cat, idx) => (
            <FadeIn key={idx} delay={idx * 50}>
              <div className="bg-slate-50 rounded-3xl overflow-hidden shadow-xl border border-slate-100/60 grid grid-cols-1 lg:grid-cols-12 gap-0 group">
                
                {/* Visual Category Label */}
                <div className="lg:col-span-12 bg-navy-950 text-white px-8 py-4.5 flex items-center justify-between border-b border-navy-900">
                  <h3 className="font-display text-lg font-bold uppercase tracking-widest">{cat.category}</h3>
                  <span className="w-2.5 h-2.5 rounded-full bg-gold-500"></span>
                </div>

                {/* Left Side: Windstar */}
                <div className="lg:col-span-6 p-8 md:p-10 border-r border-slate-200/60 flex flex-col justify-between hover:bg-white transition-colors duration-300">
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="font-sans text-xs text-gold-600 font-bold uppercase tracking-wider">Windstar Approach</span>
                    </div>
                    <p className="font-sans text-slate-700 leading-relaxed font-light text-sm md:text-base mb-6">
                      {cat.windstarDesc}
                    </p>
                    <ul className="space-y-3">
                      {cat.windstarPoints.map((pt, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="w-5 h-5 rounded-full bg-navy-950 text-white flex items-center justify-center font-bold text-xs select-none mt-0.5">✓</span>
                          <span className="font-sans text-sm text-slate-600 font-light">{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right Side: Star Clippers */}
                <div className="lg:col-span-6 p-8 md:p-10 flex flex-col justify-between hover:bg-white transition-colors duration-300">
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="font-sans text-xs text-gold-600 font-bold uppercase tracking-wider">Star Clippers Approach</span>
                    </div>
                    <p className="font-sans text-slate-700 leading-relaxed font-light text-sm md:text-base mb-6">
                      {cat.seacreamDesc || cat.starClippersDesc}
                    </p>
                    <ul className="space-y-3">
                      {cat.starClippersPoints.map((pt, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="w-5 h-5 rounded-full bg-gold-500 text-navy-950 flex items-center justify-center font-bold text-xs select-none mt-0.5">✓</span>
                          <span className="font-sans text-sm text-slate-600 font-light">{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
};

export default VibeComparisonBoard;
