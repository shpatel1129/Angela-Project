import React from 'react';
import FadeIn from './FadeIn';
import MasterImage from './MasterImage';

const NauticalIntro = ({ 
  title, 
  paragraphs, 
  image1, 
  image2,
  watermark = "WINDSTAR"
}) => {
  if (!paragraphs || paragraphs.length === 0) return null;

  const firstParagraph = paragraphs[0];
  const restParagraphs = paragraphs.slice(1);

  return (
    <section className="w-full py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left: Nautical Dual-Image Layout */}
          <div className="w-full lg:w-5/12 relative pl-8 sm:pl-12 lg:pl-4 pt-8">
            <FadeIn direction="up">
              {/* Main Image: Sail Shape */}
              <div className="aspect-[3/4] w-full rounded-tr-[120px] rounded-bl-[120px] rounded-tl-xl rounded-br-xl overflow-hidden shadow-2xl relative border-[6px] border-white ring-1 ring-slate-100 group">
                {image1 ? (
                  <MasterImage src={image1} alt="Windstar Experience" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out" />
                ) : (
                  <div className="w-full h-full bg-slate-100 flex items-center justify-center">Image 1</div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/30 to-transparent"></div>
              </div>

              {/* Decorative Porthole Inset (Image 2) */}
              {image2 && (
                <div className="absolute -bottom-10 -right-10 md:-right-12 w-48 h-48 md:w-56 md:h-56 bg-white p-2.5 rounded-full shadow-2xl z-20 hidden sm:block">
                  <div className="w-full h-full rounded-full overflow-hidden relative border-2 border-ts-gold">
                    <MasterImage src={image2} alt="Windstar Detail" className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700" />
                    {/* Inner shadow for porthole depth */}
                    <div className="absolute inset-0 shadow-[inset_0_4px_12px_rgba(0,0,0,0.4)] rounded-full pointer-events-none"></div>
                  </div>
                  {/* Floating decorative compass/star element */}
                  <div className="absolute -top-2 right-4 w-12 h-12 bg-navy-950 rounded-full flex items-center justify-center shadow-lg border-2 border-white">
                    <span className="text-ts-gold font-display text-xl">✦</span>
                  </div>
                </div>
              )}
            </FadeIn>
          </div>

          {/* Right: Editorial Typography (Inspired by the Verdict section but unique) */}
          <div className="w-full lg:w-7/12 relative pt-12 lg:pt-0">
            {/* Massive Background Text watermark */}
            <div className="absolute top-0 right-0 lg:-right-12 text-slate-100 font-display text-[100px] sm:text-[140px] lg:text-[180px] leading-none whitespace-nowrap z-0 select-none font-bold tracking-tighter opacity-70">
              {watermark}
            </div>
            
            <FadeIn direction="left" className="relative z-10 lg:pr-12">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-0.5 bg-ts-gold"></div>
                <span className="font-sans text-navy-900 uppercase tracking-[0.2em] text-xs font-bold">
                  {title || "Fleet Overview"}
                </span>
              </div>
              
              <div className="relative bg-white/80 backdrop-blur-sm p-4 -ml-4 rounded-xl">
                {/* The "Hook" Paragraph - rendered large and editorial */}
                {firstParagraph && (
                  <h3 className="font-display text-2xl md:text-3xl lg:text-4xl text-navy-950 leading-snug mb-8">
                    {firstParagraph}
                  </h3>
                )}
                
                {/* The remaining explanation */}
                <div className="space-y-6">
                  {restParagraphs.map((p, idx) => (
                    <p key={idx} className="font-sans text-lg text-slate-600 leading-relaxed font-light">
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
};

export default NauticalIntro;
