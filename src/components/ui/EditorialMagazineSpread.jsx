import React from 'react';
import FadeIn from './FadeIn';
import MasterImage from './MasterImage';

const EditorialMagazineSpread = ({
  headline,
  dropcapLetter,
  paragraphs = [],
  images = [],
  stats = []
}) => {
  if (!headline || paragraphs.length === 0) return null;

  return (
    <section className="w-full py-32 bg-white relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
        {/* Magazine Header */}
        <div className="mb-24 relative border-b border-navy-950/10 pb-12">
          <FadeIn>
            <h2 className="font-display text-5xl md:text-7xl lg:text-8xl text-navy-950 uppercase tracking-tighter leading-[0.9]">
              {headline}
            </h2>
          </FadeIn>
          {/* Subtle Decorative Line */}
          <div className="absolute bottom-0 left-0 w-32 h-[2px] bg-ts-gold"></div>
        </div>

        {/* Content Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 relative">
          
          {/* Left Column: Dropcap & Text */}
          <div className="lg:col-span-5 relative z-10">
            <FadeIn delay={0.2}>
              <div className="prose prose-lg prose-slate max-w-none">
                <p className="font-sans text-lg text-slate-600 font-light leading-loose text-justify relative">
                  {dropcapLetter && (
                    <span className="float-left font-display text-[120px] leading-[0.8] pr-6 pt-2 text-navy-950">
                      {dropcapLetter}
                    </span>
                  )}
                  {paragraphs[0]}
                </p>
                {paragraphs.slice(1).map((para, idx) => (
                  <p key={idx} className="font-sans text-lg text-slate-600 font-light leading-loose mt-8 text-justify">
                    {para}
                  </p>
                ))}
              </div>
            </FadeIn>

            {/* In-text Stats */}
            {stats.length > 0 && (
              <div className="mt-16 flex flex-col gap-8 border-l border-ts-gold pl-8">
                {stats.map((stat, idx) => (
                  <FadeIn key={idx} delay={0.3 + (idx * 0.1)}>
                    <div className="font-display text-4xl text-navy-950 mb-1">{stat.value}</div>
                    <div className="font-sans text-xs font-bold uppercase tracking-widest text-slate-400">{stat.label}</div>
                  </FadeIn>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Editorial Image Composition */}
          <div className="lg:col-span-6 lg:col-start-7 relative min-h-[600px]">
            {images.length > 0 && (
              <>
                {/* Main Large Image */}
                <FadeIn delay={0.4} direction="left" className="absolute top-0 right-0 w-[90%] aspect-[3/4] z-10">
                  <div className="w-full h-full p-2 bg-white shadow-2xl rotate-2">
                    <MasterImage src={images[0].src} alt={images[0].alt} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
                  </div>
                </FadeIn>

                {/* Secondary Floating Image */}
                {images.length > 1 && (
                  <FadeIn delay={0.6} direction="up" className="absolute bottom-12 -left-12 w-[60%] aspect-square z-20 hidden md:block">
                    <div className="w-full h-full p-2 bg-white shadow-2xl -rotate-6">
                      <MasterImage src={images[1].src} alt={images[1].alt} className="w-full h-full object-cover" />
                    </div>
                  </FadeIn>
                )}
              </>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};

export default EditorialMagazineSpread;
