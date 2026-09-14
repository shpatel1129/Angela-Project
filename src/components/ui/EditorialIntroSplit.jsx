import React from 'react';
import FadeIn from './FadeIn';
import MasterImage from './MasterImage';

const EditorialIntroSplit = ({ heading, paragraphs, primaryImage, secondaryImage, eyebrow = "EXPERT GUIDE" }) => {
  return (
    <section className="w-full py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 items-center">
          
          {/* Left Side: Content */}
          <div className="lg:w-1/2 w-full flex flex-col justify-center relative z-10">
            <FadeIn direction="up">
              {/* Eyebrow */}
              <div className="flex items-center gap-6 mb-10">
                <span className="uppercase tracking-[0.3em] text-[11px] font-bold text-slate-400">
                  {eyebrow}
                </span>
                <div className="h-px flex-1 bg-gradient-to-r from-gold-400/50 to-transparent"></div>
              </div>
              
              {/* Heading */}
              <h2 className="font-display text-5xl lg:text-6xl text-navy-950 leading-[1.05] tracking-tight mb-8 pr-4">
                {heading}
              </h2>
              
              <div className="w-12 h-0.5 bg-gold-400 mb-10"></div>
              
              {/* Text Content */}
              <div className="relative">
                {/* First paragraph as a large, elegant lead */}
                {paragraphs && paragraphs.length > 0 && (
                  <p className="font-sans text-xl lg:text-2xl text-navy-800 leading-relaxed font-light mb-6">
                    {paragraphs[0]}
                  </p>
                )}
                
                {/* Subsequent paragraphs */}
                {paragraphs && paragraphs.length > 1 && (
                  <div className="flex flex-col gap-6 text-navy-700 font-sans text-base leading-relaxed">
                    {paragraphs.slice(1).map((p, idx) => (
                      <p key={idx}>{p}</p>
                    ))}
                  </div>
                )}
              </div>
            </FadeIn>
          </div>

          {/* Right Side: Image Gallery */}
          <div className="lg:w-1/2 w-full relative h-[550px] lg:h-[750px] mt-8 lg:mt-0">
             {/* Decorative Background Element */}
             <div className="absolute top-1/2 -translate-y-1/2 right-0 w-3/4 h-4/5 bg-ice-50 rounded-3xl -z-10 hidden lg:block"></div>
             
             {/* Primary Image */}
             <FadeIn direction="left" delay={0.2} className="absolute top-0 right-0 w-full lg:w-[85%] h-[85%] rounded-2xl overflow-hidden shadow-2xl">
               {primaryImage && (
                 <MasterImage 
                   src={primaryImage} 
                   className="w-full h-full object-cover transition-transform duration-[3000ms] hover:scale-105" 
                   alt="Primary Editorial Image"
                 />
               )}
             </FadeIn>
             
             {/* Secondary Image Overlap */}
             {secondaryImage && (
               <FadeIn direction="up" delay={0.4} className="absolute bottom-0 left-4 lg:left-[-5%] w-[65%] lg:w-[55%] h-[55%] lg:h-[45%] rounded-2xl overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.2)] border-8 border-white z-20">
                 <MasterImage 
                   src={secondaryImage} 
                   className="w-full h-full object-cover transition-transform duration-[3000ms] hover:scale-105" 
                   alt="Secondary Editorial Image"
                 />
               </FadeIn>
             )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default EditorialIntroSplit;

