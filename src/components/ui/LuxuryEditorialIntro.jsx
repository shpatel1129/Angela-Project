import React from 'react';
import FadeIn from './FadeIn';

const LuxuryEditorialIntro = ({ eyebrow, heading, paragraphs, image1, image2, authorName, authorRole }) => {
  return (
    <section className="w-full bg-white py-24 lg:py-32 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          {/* Typography Section (Left) */}
          <div className="w-full lg:w-[45%] flex flex-col justify-center">
            <FadeIn>
              {eyebrow && (
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-[1px] bg-ts-gold"></div>
                  <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-ts-gold">
                    {eyebrow}
                  </span>
                </div>
              )}
              
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-navy-950 leading-[1.15] mb-10">
                {heading}
              </h2>
              
              <div className="flex flex-col gap-6 font-sans text-slate-600 font-light leading-relaxed">
                {paragraphs?.map((p, i) => (
                  <p key={i} className={i === 0 ? "text-xl text-navy-800 leading-relaxed font-normal" : "text-base md:text-lg"}>
                    {p}
                  </p>
                ))}
              </div>

              {authorName && (
                <div className="pt-6 flex flex-col space-y-1">
                  <span className="font-display text-base font-semibold text-navy-950">
                    {authorName}
                  </span>
                  {authorRole && (
                    <span className="font-sans text-[11px] uppercase tracking-wider text-slate-400">
                      {authorRole}
                    </span>
                  )}
                </div>
              )}
            </FadeIn>
          </div>

          {/* Image Section (Right) */}
          <div className="w-full lg:w-[55%] relative">
            <div className="grid grid-cols-12 gap-0 relative items-center">
              {/* Background decorative block */}
              <div className="absolute top-1/2 left-1/4 right-0 h-[110%] bg-[#c9a15c]/5 z-0 transform -translate-y-1/2 rounded-3xl"></div>
              
              {/* Overlapping smaller image (Left-aligned, middle) */}
              {image2 && (
                <FadeIn className="col-span-7 col-start-1 relative z-20" delay={0.2}>
                  <div className="aspect-[4/5] p-3 bg-white shadow-xl rotate-[-3deg] hover:rotate-0 transition-transform duration-500 ease-out border border-slate-100">
                    <img src={image2} alt="Editorial Secondary" className="w-full h-full object-cover" />
                  </div>
                </FadeIn>
              )}

              {/* Main tall image (Right-aligned) */}
              <FadeIn className={`col-span-8 ${image2 ? 'col-start-5 -ml-12 mt-16' : 'col-start-3'} relative z-10`} delay={0.4}>
                <div className="aspect-[3/4] p-3 bg-white shadow-2xl rotate-[4deg] hover:rotate-0 transition-transform duration-500 ease-out border border-slate-100">
                  <img src={image1} alt="Editorial Main" className="w-full h-full object-cover" />
                </div>
              </FadeIn>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default LuxuryEditorialIntro;
