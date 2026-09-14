import React from 'react';
import FadeIn from './FadeIn';

const StickyEditorialIntro = ({ eyebrow, heading, paragraphs, highlights, image1 }) => {
  return (
    <section className="py-24 md:py-32 bg-white relative">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left Side: Arched Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <FadeIn>
              <div className="relative w-full max-w-[500px]">
                {/* Decorative background shape */}
                <div className="absolute inset-0 bg-ice-100 rounded-t-full transform translate-x-6 translate-y-6 -z-10"></div>
                
                <div className="aspect-[3/4] w-full overflow-hidden rounded-t-[500px] rounded-b-2xl shadow-xl relative z-0">
                  {image1 ? (
                    <img 
                      src={image1} 
                      alt="Editorial Feature" 
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-slate-200"></div>
                  )}
                  {/* Subtle inner overlay for luxury feel */}
                  <div className="absolute inset-0 border border-white/20 rounded-t-[500px] rounded-b-2xl pointer-events-none"></div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right Side: Clean Typography */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <FadeIn delay={0.2}>
              {eyebrow && (
                <div className="mb-6">
                  <span className="font-sans text-xs uppercase tracking-[0.3em] font-bold text-ts-gold">
                    {eyebrow}
                  </span>
                </div>
              )}
              
              <h2 className="font-display text-4xl lg:text-5xl xl:text-6xl text-navy-950 leading-[1.1] mb-8">
                {heading}
              </h2>

              {paragraphs && paragraphs.length > 0 && (
                <div className="space-y-6 mb-12">
                  {paragraphs.map((p, idx) => (
                    <p key={idx} className={`font-sans leading-relaxed ${idx === 0 ? 'text-xl font-light text-navy-800' : 'text-base text-slate-500'}`}>
                      {p}
                    </p>
                  ))}
                </div>
              )}

              {highlights && highlights.length > 0 && (
                <div className="relative">
                  <div className="absolute left-0 top-0 bottom-0 w-px bg-ts-gold/40"></div>
                  <ul className="space-y-6 pl-8">
                    {highlights.map((highlight, idx) => {
                      const parts = highlight.split(':');
                      const boldPart = parts.length > 1 ? parts[0] + ':' : null;
                      const restPart = parts.length > 1 ? parts.slice(1).join(':') : highlight;

                      return (
                        <li key={idx} className="relative">
                          <div className="absolute -left-[36px] top-2 w-2 h-2 rounded-full bg-ts-gold shadow-sm"></div>
                          <div className="font-sans text-sm md:text-base leading-relaxed">
                            {boldPart && <strong className="font-bold text-navy-950 block mb-1 uppercase tracking-wider text-xs">{boldPart}</strong>}
                            <span className="text-slate-600">{restPart}</span>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
};

export default StickyEditorialIntro;
