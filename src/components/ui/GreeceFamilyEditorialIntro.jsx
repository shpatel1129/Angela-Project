import React from 'react';
import FadeIn from './FadeIn';

const GreeceFamilyEditorialIntro = ({
  eyebrow,
  heading,
  paragraphs = [],
  image1,
  image2,
  authorName,
  authorRole
}) => {
  return (
    <section className="w-full bg-[#fbf9f6] py-24 lg:py-32 overflow-hidden text-left border-y border-slate-200/50">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          {/* Left Column: Custom Overlapping Image Layout (Asymmetrical layout: images on left) */}
          <div className="w-full lg:w-[50%] relative order-last lg:order-first">
            <div className="grid grid-cols-12 gap-0 relative items-center">
              
              {/* Asymmetrical gold frame backdrop */}
              <div className="absolute top-0 bottom-0 left-0 right-1/4 bg-[#c9a15c]/5 z-0 rounded-3xl transform rotate-[-2deg]"></div>
              
              {/* Image 1: Main larger picture (Left side) */}
              <FadeIn className="col-span-8 relative z-10" delay={0.2}>
                <div className="aspect-[3/4] p-3.5 bg-white shadow-2xl rounded-2xl transform hover:scale-[1.02] transition-all duration-500 ease-out border border-slate-100/50">
                  <img src={image1} alt="Family Main" className="w-full h-full object-cover rounded-xl" />
                </div>
              </FadeIn>

              {/* Image 2: Secondary overlapping picture (Right side, offset bottom) */}
              {image2 && (
                <FadeIn className="col-span-6 col-start-7 -ml-16 mt-24 relative z-20" delay={0.4}>
                  <div className="aspect-[4/5] p-3 bg-white shadow-xl rounded-2xl transform rotate-[3deg] hover:rotate-0 transition-all duration-500 ease-out border border-slate-100/50">
                    <img src={image2} alt="Family Secondary" className="w-full h-full object-cover rounded-lg" />
                  </div>
                </FadeIn>
              )}

            </div>
          </div>

          {/* Right Column: Typography block styled in a beautiful card container (Text on right) */}
          <div className="w-full lg:w-[50%]">
            <FadeIn>
              <div className="bg-white border border-slate-100 p-8 lg:p-12 rounded-3xl shadow-xl space-y-8 relative">
                
                {eyebrow && (
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-[1px] bg-[#c9a15c]"></span>
                    <span className="font-sans text-[10px] font-bold uppercase tracking-[0.25em] text-[#c9a15c]">
                      {eyebrow}
                    </span>
                  </div>
                )}

                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-navy-950 leading-tight">
                  {heading}
                </h2>

                <div className="space-y-4 font-sans text-slate-600 font-light leading-relaxed text-xs lg:text-sm">
                  {paragraphs.map((p, idx) => (
                    <p key={idx} className={idx === 0 ? "text-base text-navy-900 font-normal leading-relaxed" : ""}>
                      {p}
                    </p>
                  ))}
                </div>

                {/* Author Signature */}
                {authorName && (
                  <div className="pt-6 border-t border-slate-100 flex items-center gap-4">
                    <div className="flex flex-col">
                      <span className="font-display text-sm font-bold text-navy-950">
                        {authorName}
                      </span>
                      {authorRole && (
                        <span className="font-sans text-[10px] uppercase tracking-wider text-slate-400">
                          {authorRole}
                        </span>
                      )}
                    </div>
                  </div>
                )}

              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
};

export default GreeceFamilyEditorialIntro;
