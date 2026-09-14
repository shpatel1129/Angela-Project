import React from 'react';
import FadeIn from './FadeIn';

const ExplorerIntro = ({ data, image }) => {
  if (!data) return null;

  return (
    <section id="quick-verdict" className="w-full py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Side: Editorial Content */}
        <div className="lg:col-span-7 space-y-8">
          <FadeIn>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950 leading-tight">
              {data.title || "The Quick Verdict"}
            </h2>
            <div className="w-16 h-1 bg-ts-gold mt-4"></div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="font-serif text-lg text-slate-700 leading-relaxed font-light border-l-4 border-ts-gold pl-6 py-2">
              {data.verdict}
            </p>
          </FadeIn>

          {/* Pros and Cons Split List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
            {/* Pros */}
            <FadeIn direction="right" delay={0.2} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
              <h3 className="font-display text-lg font-bold text-navy-950 mb-4 flex items-center gap-2">
                <span className="text-navy-950">✓</span> {data.prosTitle || "Strengths"}
              </h3>
              <ul className="space-y-3">
                {data.pros?.map((pro, idx) => (
                  <li key={idx} className="font-sans text-xs text-slate-600 leading-relaxed flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-navy-950 flex-shrink-0 mt-2"></span>
                    <span>{pro}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>

            {/* Cons */}
            <FadeIn direction="left" delay={0.2} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
              <h3 className="font-display text-lg font-bold text-navy-950 mb-4 flex items-center gap-2">
                <span className="text-amber-500">⚠</span> {data.consTitle || "Limitations"}
              </h3>
              <ul className="space-y-3">
                {data.cons?.map((con, idx) => (
                  <li key={idx} className="font-sans text-xs text-slate-600 leading-relaxed flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0 mt-2"></span>
                    <span>{con}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </div>

        {/* Right Side: Editorial Image Frame */}
        <div className="lg:col-span-5 relative">
          <FadeIn delay={0.3} className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
            {image && (
              <img
                src={image}
                alt="Seven Seas Explorer at Sea"
                className="w-full h-[500px] object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/30 to-transparent"></div>
          </FadeIn>
          {/* Decorative floating gold border */}
          <div className="absolute -inset-4 border border-ts-gold/20 rounded-3xl -z-10 translate-x-2 translate-y-2 pointer-events-none"></div>
        </div>

      </div>
    </section>
  );
};

export default ExplorerIntro;
