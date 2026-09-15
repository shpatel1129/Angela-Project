import React from 'react';
import FadeIn from './FadeIn';
import MasterImage from './MasterImage';

const EditorialIntroSection = ({ 
  eyebrow = "The Value Proposition", 
  subtitle,
  heading, 
  title, 
  description, 
  paragraphs, 
  image, 
  placeholderLabel = "SEABOURN CRUISE VALUE PROPOSITION",
  badgeTitle = "True Luxury Value",
  badgeDescription = "All-inclusive peace of mind with transparent luxury inclusions.",
  highlights = [] 
}) => {
  const displayHeading = heading || title;
  const displayEyebrow = eyebrow || subtitle;

  const renderParagraphs = () => {
    if (paragraphs && Array.isArray(paragraphs)) {
      return paragraphs.map((p, idx) => (
        <p key={idx} className={idx === 0 ? "text-xl text-navy-900 font-medium" : "text-lg text-slate-600"}>
          {p}
        </p>
      ));
    }
    if (description && typeof description === 'string') {
      return description.split('\n\n').map((p, idx) => (
        <p key={idx} className={idx === 0 ? "text-xl text-navy-900 font-medium" : "text-lg text-slate-600"}>
          {p}
        </p>
      ));
    }
    return null;
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-ice-50/70 -skew-x-12 transform origin-top-right z-0 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Text Content */}
          <div className="w-full lg:w-1/2">
            <FadeIn>
              {displayEyebrow && (
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-px bg-gold-500 w-12"></div>
                  <span className="text-gold-500 font-sans font-bold tracking-[0.2em] uppercase text-xs">
                    {displayEyebrow}
                  </span>
                </div>
              )}
              
              {displayHeading && (
                <h2 className="text-4xl md:text-5xl lg:text-5xl font-display text-navy-950 mb-8 leading-tight">
                  {displayHeading}
                </h2>
              )}
              
              <div className="font-sans leading-relaxed space-y-6">
                {renderParagraphs()}
              </div>

              {highlights && highlights.length > 0 && (
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-4 border-t border-slate-100">
                  {highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center">
                      <div className="w-7 h-7 rounded-full bg-gold-50 border border-gold-200 flex items-center justify-center mr-3 shrink-0">
                        <svg className="w-3.5 h-3.5 text-gold-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <span className="font-sans text-sm font-semibold text-navy-900">{highlight}</span>
                    </div>
                  ))}
                </div>
              )}
            </FadeIn>
          </div>

          {/* Image Content */}
          <div className="w-full lg:w-1/2">
            <FadeIn delay={0.2}>
              <div className="relative">
                {/* Image Frame Offset */}
                <div className="absolute inset-0 border-2 border-gold-300/60 translate-x-6 translate-y-6 rounded-3xl z-0"></div>
                
                {/* Main Image Container */}
                <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl bg-slate-100 border border-slate-200">
                  <div className="aspect-[4/5] relative">
                    <MasterImage 
                      src={image} 
                      alt={displayHeading || "Seabourn Ultra-Luxury Value"}
                      placeholderLabel={placeholderLabel}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/40 via-transparent to-transparent pointer-events-none"></div>
                  </div>
                </div>

                {/* Floating Badge */}
                {badgeTitle && (
                  <div className="absolute -left-6 md:-left-8 -bottom-6 bg-white p-6 rounded-2xl shadow-xl z-20 max-w-xs border border-slate-100">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-9 h-9 rounded-xl bg-navy-950 text-gold-400 flex items-center justify-center shadow-sm">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                        </svg>
                      </div>
                      <span className="font-display text-lg font-semibold text-navy-950">{badgeTitle}</span>
                    </div>
                    <p className="font-sans text-xs text-slate-500 leading-relaxed font-light">
                      {badgeDescription}
                    </p>
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

export default EditorialIntroSection;
