import React from 'react';
import FadeIn from './FadeIn';

const LuxuryIntroSection = ({ heading, description, highlights, image }) => {
  const paragraphs = description ? description.split('\n\n') : [];

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left: Text Content */}
          <div className="w-full lg:w-1/2">
            <FadeIn>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display text-navy-950 mb-8 leading-tight">
                {heading}
              </h2>
            </FadeIn>
            
            <FadeIn delay={0.1}>
              <div className="space-y-6 text-lg text-slate-600 font-sans leading-relaxed">
                {paragraphs.map((p, idx) => (
                  <p key={idx}>
                    {idx === 0 && (
                      <span className="float-left text-7xl font-display text-gold-500 leading-[0.8] pr-4 mt-2">
                        {p.charAt(0)}
                      </span>
                    )}
                    {idx === 0 ? p.substring(1) : p}
                  </p>
                ))}
              </div>
            </FadeIn>

            {highlights && highlights.length > 0 && (
              <FadeIn delay={0.2} className="mt-12 pt-8 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-3 gap-6">
                {highlights.map((highlight, idx) => (
                  <div key={idx} className="flex flex-col">
                    <span className="text-gold-500 mb-2">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 13l4 4L19 7"></path></svg>
                    </span>
                    <span className="font-sans text-sm font-bold text-navy-900 tracking-wider uppercase">
                      {highlight}
                    </span>
                  </div>
                ))}
              </FadeIn>
            )}
          </div>

          {/* Right: Image Frame */}
          <div className="w-full lg:w-1/2 relative">
            <FadeIn delay={0.3}>
              <div className="relative rounded-t-full overflow-hidden border-[8px] border-ice-50 shadow-2xl aspect-[3/4] md:aspect-square lg:aspect-[3/4]">
                <img 
                  src={image} 
                  alt={heading} 
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/40 to-transparent"></div>
              </div>
              
              {/* Decorative Element */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gold-100 rounded-full mix-blend-multiply blur-2xl opacity-70"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-ice-200 rounded-full mix-blend-multiply blur-2xl opacity-70"></div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
};

export default LuxuryIntroSection;
