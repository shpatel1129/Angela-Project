import React from 'react';
import FadeIn from './FadeIn';

const MagazineStoryIntro = ({ heading, paragraphs, highlights }) => {
  return (
    <section className="bg-white">

      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        {/* Heading */}
        <div className="text-center max-w-4xl mx-auto mb-12 md:mb-16">
          <FadeIn direction="up">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-navy-900 leading-tight">
              {heading}
            </h2>
            <div className="w-24 h-1 bg-gold-500 mx-auto mt-8 opacity-70"></div>
          </FadeIn>
        </div>

        {/* Magazine Text Columns */}
        {paragraphs && paragraphs.length > 0 && (
          <FadeIn direction="up" delay={0.1}>
            <div className="max-w-6xl mx-auto columns-1 md:columns-2 gap-12 lg:gap-16 text-navy-700 font-sans text-lg leading-relaxed mb-16 space-y-6 md:space-y-0">
              {paragraphs.map((p, idx) => (
                <p key={idx} className="break-inside-avoid-column mb-6 md:mb-0">
                  {idx === 0 ? (
                    <span className="float-left text-6xl md:text-7xl font-display text-gold-500 leading-none pr-4 pt-2">
                      {p.charAt(0)}
                    </span>
                  ) : null}
                  {idx === 0 ? p.substring(1) : p}
                </p>
              ))}
            </div>
          </FadeIn>
        )}

        {/* Highlights Grid */}
        {highlights && highlights.length > 0 && (
          <FadeIn direction="up" delay={0.2}>
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {highlights.map((highlight, idx) => (
                  <div 
                    key={idx}
                    className="flex items-start space-x-4 p-5 rounded-lg border border-navy-100 bg-ice-50/50 hover:bg-ice-50 transition-colors"
                  >
                    <svg className="w-6 h-6 text-gold-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="font-sans text-navy-800 leading-snug">
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        )}
      </div>
    </section>
  );
};

export default MagazineStoryIntro;
