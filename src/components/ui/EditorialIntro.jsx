import React from 'react';
import FadeIn from './FadeIn';
import MasterImage from './MasterImage';

const EditorialIntro = ({ heading, paragraphs, primaryImage, secondaryImage, eyebrow = "EXPERT GUIDE" }) => {
  return (
    <section className="w-full py-20 md:py-32 bg-white relative">
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* Centered Header block */}
        <div className="text-center max-w-4xl mx-auto mb-16 md:mb-24">
          <FadeIn direction="up">
            <span className="uppercase tracking-[0.3em] text-sm font-bold text-accent-500 mb-6 block">
              {eyebrow}
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-7xl text-navy-950 leading-tight">
              {heading}
            </h2>
          </FadeIn>
        </div>

        {/* Asymmetrical Image Gallery */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 mb-16 md:mb-24">
           {/* Large primary image spanning 8 columns */}
           <FadeIn direction="right" delay={0.2} className="lg:col-span-8 h-[400px] lg:h-[600px] relative rounded-2xl overflow-hidden shadow-lg group">
              {primaryImage && (
                <MasterImage 
                  asBackground={true} 
                  src={primaryImage} 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-[3000ms] group-hover:scale-105" 
                />
              )}
           </FadeIn>
           
           {/* Secondary image spanning 4 columns, offset vertically */}
           <FadeIn direction="left" delay={0.4} className="lg:col-span-4 h-[300px] lg:h-[600px] relative rounded-2xl overflow-hidden shadow-lg mt-0 lg:mt-24 group">
              {secondaryImage && (
                <MasterImage 
                  asBackground={true} 
                  src={secondaryImage} 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-[3000ms] group-hover:scale-105" 
                />
              )}
           </FadeIn>
        </div>

        {/* Elegant Split Text Layout */}
        <div className="flex flex-col md:flex-row gap-12 lg:gap-24 border-t border-slate-200 pt-16 mt-16 md:mt-24">
           {/* Left Side: Bold Lead Paragraph */}
           <div className="md:w-5/12">
             <FadeIn direction="right">
                <p className="font-display text-2xl lg:text-3xl text-navy-950 leading-snug italic relative">
                  <span className="absolute -left-6 -top-4 text-6xl text-ice-200 font-serif opacity-50">"</span>
                  {paragraphs && paragraphs[0]}
                </p>
             </FadeIn>
           </div>
           
           {/* Right Side: Supporting Paragraphs */}
           <div className="md:w-7/12">
             <FadeIn direction="left" delay={0.2}>
                <div className="space-y-6 text-slate-600 font-sans leading-relaxed text-lg lg:text-xl font-light">
                  {paragraphs?.slice(1).map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>
             </FadeIn>
           </div>
        </div>

      </div>
    </section>
  );
};

export default EditorialIntro;
