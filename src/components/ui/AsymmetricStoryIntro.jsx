import React from 'react';
import { Link } from 'react-router-dom';
import FadeIn from './FadeIn';
import MasterImage from './MasterImage';

const AsymmetricStoryIntro = ({ 
  eyebrow, 
  subtitle,
  heading, 
  title, 
  paragraphs, 
  highlights, 
  image1, 
  image2, 
  image1Placeholder,
  image2Placeholder,
  ctaText, 
  ctaLink 
}) => {
  const displayHeading = heading || title;
  const displayEyebrow = eyebrow || subtitle;

  return (
    <section className="bg-white py-20 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
          
          {/* Image Collage Side */}
          <div className="col-span-1 lg:col-span-5 relative">
            <FadeIn direction="right">
              <div className="relative w-full max-w-md mx-auto lg:mx-0 lg:ml-auto">
                {/* Main Portrait Image */}
                <div className="relative aspect-[3/4] w-5/6 rounded-sm overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 bg-navy-900/10 mix-blend-multiply z-10 pointer-events-none" />
                  <MasterImage 
                    src={image1} 
                    alt={displayHeading || "Luxury Experience"} 
                    placeholderLabel={image1Placeholder || "SEABOURN LUXURY HOSPITALITY"}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Secondary Landscape Image */}
                {(image2 || image2Placeholder) && (
                  <div className="absolute -bottom-8 -right-4 md:-bottom-12 md:-right-8 w-2/3 aspect-[4/3] rounded-sm overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] border-[8px] border-white z-20">
                    <MasterImage 
                      src={image2} 
                      alt="Interior & Suite Detail" 
                      placeholderLabel={image2Placeholder || "IN-SUITE LUXURY & HOSPITALITY"}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
              </div>
            </FadeIn>
          </div>

          {/* Text Content Side */}
          <div className="col-span-1 lg:col-span-7 lg:pl-16 xl:pl-24 mt-12 lg:mt-0">
            <FadeIn direction="left" delay={0.2}>
              {displayEyebrow && (
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-px bg-gold-500"></div>
                  <span className="font-sans text-xs font-bold uppercase tracking-[0.25em] text-gold-500">
                    {displayEyebrow}
                  </span>
                </div>
              )}
              {displayHeading && (
                <h2 className="font-display text-4xl md:text-5xl text-navy-900 leading-tight mb-6">
                  {displayHeading}
                </h2>
              )}
              
              <div className="w-16 h-0.5 bg-gold-500 mb-8"></div>

              {paragraphs && paragraphs.length > 0 && (
                <div className="space-y-6 mb-10">
                  {paragraphs.map((p, idx) => (
                    <p key={idx} className={`font-sans leading-relaxed ${idx === 0 ? 'text-xl font-medium text-navy-900' : 'text-lg text-navy-700'}`}>
                      {p}
                    </p>
                  ))}
                </div>
              )}

              {/* Highlights List */}
              {highlights && highlights.length > 0 && (
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                  {highlights.map((highlight, idx) => {
                    const splitIndex = highlight.indexOf(':');
                    let titleText = highlight;
                    let descText = '';
                    
                    if (splitIndex !== -1) {
                      titleText = highlight.substring(0, splitIndex + 1);
                      descText = highlight.substring(splitIndex + 1).trim();
                    }
                    
                    return (
                      <li key={idx} className="flex items-start">
                        <svg className="w-5 h-5 text-gold-500 shrink-0 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span className="font-sans text-navy-800 text-sm md:text-base">
                          {descText ? (
                            <>
                              <strong className="font-bold text-navy-900">{titleText}</strong> {descText}
                            </>
                          ) : (
                            highlight
                          )}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              )}

              {ctaText && (
                <div className="mt-8">
                  <Link
                    to={ctaLink || "/contact"}
                    className="inline-flex items-center justify-center px-8 py-3 bg-navy-950 text-white font-sans text-sm font-bold tracking-widest uppercase hover:bg-navy-900 transition-all rounded-full shadow-lg hover:scale-105"
                  >
                    {ctaText}
                  </Link>
                </div>
              )}
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AsymmetricStoryIntro;
