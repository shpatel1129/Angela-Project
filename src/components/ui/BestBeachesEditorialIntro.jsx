import React from 'react';
import FadeIn from './FadeIn';

/**
 * BestBeachesEditorialIntro
 * A custom slanted editorial component designed specifically for the Best Beaches guide page.
 */
const BestBeachesEditorialIntro = ({ eyebrow, heading, paragraphs, image1, image2, authorName, authorRole }) => {
  return (
    <section id="best-beaches-expert-intro" className="w-full bg-white py-24 lg:py-32 overflow-hidden border-b border-slate-200">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* Visual Column (Left: 5/12 width) - Swap visual position! */}
          <div className="lg:col-span-5 relative order-last lg:order-first">
            <FadeIn delay={0.2} className="relative z-10">
              <div className="relative p-2 bg-white shadow-2xl rounded-3xl border border-slate-100">
                {/* Asymmetrical decorative gold frame offset to the left */}
                <div className="absolute inset-0 border-2 border-[#c9a15c] rounded-3xl pointer-events-none transform -translate-x-4 -translate-y-4 -z-10"></div>
                <img 
                  src={image1} 
                  alt="Angela Hughes beach advice view" 
                  className="w-full h-[400px] object-cover rounded-2xl"
                  loading="lazy" 
                />
              </div>

              {/* Floating secondary decorative card */}
              {image2 && (
                <div className="absolute -bottom-10 -right-6 w-40 aspect-[4/3] p-2 bg-white shadow-xl rounded-xl border border-slate-50 hidden sm:block">
                  <img 
                    src={image2} 
                    alt="Angela Hughes details view" 
                    className="w-full h-full object-cover rounded-lg"
                    loading="lazy" 
                  />
                </div>
              )}
            </FadeIn>
          </div>

          {/* Typography Column (Right: 7/12 width) */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left space-y-8">
            <FadeIn>
              {eyebrow && (
                <div className="flex items-center gap-4 mb-4">
                  <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-[#c9a15c]">
                    {eyebrow}
                  </span>
                  <div className="w-16 h-[1px] bg-[#c9a15c]"></div>
                </div>
              )}
              
              <h2 className="font-display text-4xl md:text-5xl text-navy-950 leading-tight mb-8">
                {heading}
              </h2>

              <div className="space-y-6">
                {paragraphs?.map((p, idx) => (
                  <p 
                    key={idx} 
                    className={`font-sans leading-relaxed text-slate-600 ${
                      idx === 0 
                        ? 'text-lg md:text-xl font-normal text-navy-950 border-l-2 border-[#c9a15c] pl-6 italic' 
                        : 'text-sm md:text-base font-light'
                    }`}
                  >
                    {p}
                  </p>
                ))}
              </div>

              {/* Author signature element */}
              <div className="pt-6 flex flex-col space-y-1">
                <span className="font-display text-base font-semibold text-navy-950">
                  {authorName}
                </span>
                <span className="font-sans text-[11px] uppercase tracking-wider text-slate-400">
                  {authorRole}
                </span>
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BestBeachesEditorialIntro;
