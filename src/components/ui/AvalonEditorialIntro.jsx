import React from 'react';
import FadeIn from './FadeIn';
import MasterImage from './MasterImage';

const AvalonEditorialIntro = ({ heading, paragraphs, primaryImage }) => {
  return (
    <section className="w-full relative bg-white overflow-hidden py-20 lg:py-0">
      
      {/* Background Decorative Non-Orthogonal Shapes */}
      <div className="absolute top-0 right-0 w-[60%] h-full bg-ice-50" style={{ clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0 100%)' }}></div>
      <div className="absolute -top-[10%] -right-[5%] w-[40%] h-[50%] bg-gold-100/30 rotate-12 transform origin-center rounded-3xl mix-blend-multiply"></div>
      
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Desktop Layout: Diagonal Interlock */}
        <div className="flex flex-col lg:flex-row min-h-[750px]">
          
          {/* LEFT: Non-Orthogonal Image Cut */}
          <div className="w-full lg:w-7/12 relative flex items-center pt-12 lg:pt-0 pb-12 lg:pb-0 z-20">
            <FadeIn direction="right" className="w-full h-[500px] lg:h-[80%] relative shadow-2xl">
              <div 
                className="absolute inset-0 overflow-hidden shadow-2xl"
                // The Non-Orthogonal Polygon Mask (slanted right edge)
                style={{ clipPath: 'polygon(0 0, 90% 0, 100% 100%, 0% 100%)' }}
              >
                {primaryImage ? (
                  <MasterImage 
                    asBackground={true} 
                    src={primaryImage} 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-[5000ms] hover:scale-110" 
                  />
                ) : (
                  <div className="absolute inset-0 bg-slate-200" />
                )}
                
                {/* Diagonal light sweep effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-navy-950/40 via-transparent to-transparent mix-blend-overlay"></div>
              </div>
              
              {/* Decorative Gold Frame that matches the slant but is offset */}
              <div 
                className="hidden lg:block absolute -inset-6 border-2 border-ts-gold/30 pointer-events-none z-[-1]"
                style={{ clipPath: 'polygon(0 0, 90% 0, 100% 100%, 0% 100%)' }}
              ></div>
            </FadeIn>
          </div>

          {/* RIGHT: Typography Section overlapping the diagonal */}
          <div className="w-full lg:w-5/12 flex items-center relative z-30 lg:-ml-[8%]">
            <FadeIn direction="left" delay={0.2} className="w-full">
              {/* 
                We use a glass-like polygon that slants exactly parallel to the image, 
                creating a negative space diagonal gap. 
              */}
              <div className="bg-white/95 backdrop-blur-md p-10 md:p-14 shadow-2xl border-l-[6px] border-navy-950 relative">
                
                {/* Diagonal accent on the card itself */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-ice-100" style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }}></div>
                
                <div className="relative z-10">
                  <span className="inline-flex items-center gap-4 font-sans text-xs font-bold tracking-[0.25em] uppercase text-ts-gold mb-8">
                    <span className="w-8 h-px bg-ts-gold"></span>
                    The Avalon Standard
                  </span>
                  
                  <h2 className="font-display text-4xl lg:text-5xl text-navy-950 leading-[1.15] mb-10">
                    {heading}
                  </h2>
                  
                  <div className="space-y-6">
                    {paragraphs && paragraphs.map((p, idx) => (
                      <p key={idx} className={`font-sans leading-relaxed text-slate-600 ${idx === 0 ? 'text-xl font-light text-slate-800' : 'text-base lg:text-lg'}`}>
                        {p}
                      </p>
                    ))}
                  </div>

                  {/* Non-orthogonal decorative button/line at the bottom */}
                  <div className="mt-12 flex items-center gap-6">
                    <div className="w-16 h-1 bg-navy-950 transform skew-x-[-30deg]"></div>
                    <span className="font-serif italic text-navy-800 text-sm tracking-wide">Discover the difference</span>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AvalonEditorialIntro;
