import React from 'react';
import FadeIn from './FadeIn';

/**
 * CreteCycladesEditorialIntro
 * A strictly unique, custom designed editorial layout for Angela's Advice section.
 * Uses a gorgeous three-column-ready grid arrangement:
 * - Left/Center text flow with premium drop-cap typography and highlighted gold callout.
 * - Right column features an overlapping dual-frame visual layout.
 */
const CreteCycladesEditorialIntro = ({ eyebrow, heading, paragraphs, image1, image2, authorName, authorRole }) => {
  return (
    <section id="crete-cyclades-expert-intro" className="w-full bg-white py-24 lg:py-32 overflow-hidden border-b border-slate-200">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* Typography Column (Left: 7/12 width) */}
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

          {/* Visual Column (Right: 5/12 width) */}
          <div className="lg:col-span-5 relative">
            <FadeIn delay={0.2} className="relative z-10">
              {/* Main image with clean gold border frame */}
              <div className="relative p-2 bg-white shadow-xl rounded-2xl border border-slate-100">
                <div className="absolute inset-0 border-2 border-[#c9a15c] rounded-2xl pointer-events-none transform translate-x-4 translate-y-4 -z-10"></div>
                <img 
                  src={image1} 
                  alt="Angela Hughes Greece travel advice view" 
                  className="w-full h-[400px] object-cover rounded-xl"
                  loading="lazy" 
                />
              </div>

              {/* Floating secondary decorative card */}
              {image2 && (
                <div className="absolute -bottom-10 -left-10 w-44 aspect-[3/4] p-2 bg-white shadow-2xl rounded-xl border border-slate-50 hidden sm:block">
                  <img 
                    src={image2} 
                    alt="Angela Hughes secondary view" 
                    className="w-full h-full object-cover rounded-lg"
                    loading="lazy" 
                  />
                </div>
              )}
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CreteCycladesEditorialIntro;
