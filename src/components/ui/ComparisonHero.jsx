import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FadeIn from './FadeIn';
import MasterImage from './MasterImage';
import { ChevronDown, ChevronUp } from 'lucide-react';

const ComparisonHero = ({
  title,
  subtitle,
  description,
  badge,
  backgroundImage,
  bgPosition = "bg-center",
  primaryCtaText,
  primaryCtaLink,
  secondaryCtaText,
  secondaryCtaLink,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const paragraphs = Array.isArray(description)
    ? description
    : typeof description === 'string'
    ? description.split('\n\n').filter(Boolean)
    : [];

  const fullText = typeof description === 'string' ? description : paragraphs.join(' ');
  const isLong = fullText.length > 150 || paragraphs.length > 1;

  return (
    <section className="relative w-full min-h-[75vh] lg:min-h-[80vh] flex flex-col justify-center items-center bg-navy-950 text-white pt-24 sm:pt-28 pb-10 sm:pb-12 px-4 sm:px-6">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {backgroundImage && (
          <MasterImage
            asBackground={true}
            priority={true}
            src={backgroundImage}
            className={`absolute inset-0 bg-cover ${bgPosition}`}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/90 via-navy-950/40 to-navy-950/90" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center w-full my-auto flex flex-col items-center justify-center">
        <FadeIn>
          <span className="font-sans text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase text-white/80 mb-2.5 sm:mb-3 block">
            {badge || "Ultimate Guide"}
          </span>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[54px] leading-[1.12] mb-3 sm:mb-4 drop-shadow-2xl whitespace-pre-line max-w-4xl mx-auto">
            {title}
          </h1>
        </FadeIn>

        {subtitle && (
          <FadeIn delay={0.2} direction="up">
            <p className="font-sans text-base sm:text-lg md:text-xl text-white/90 leading-relaxed font-light max-w-2xl mx-auto mb-3 sm:mb-3.5 drop-shadow-lg">
              {subtitle}
            </p>
            {description && (
              <div className="max-w-2xl mx-auto mb-5 sm:mb-6 drop-shadow-lg">
                {!isExpanded ? (
                  <p className="font-sans text-xs sm:text-sm md:text-base text-white/80 leading-relaxed font-light inline">
                    {isLong ? `${(paragraphs[0] || fullText).slice(0, 135).trim()}... ` : fullText}{' '}
                  </p>
                ) : (
                  <div className="space-y-3.5 font-sans text-xs sm:text-sm md:text-base text-white/80 leading-relaxed font-light text-center">
                    {paragraphs.map((p, idx) => (
                      <p key={idx}>{p}</p>
                    ))}
                  </div>
                )}
                {isLong && (
                  <button
                    type="button"
                    onClick={() => setIsExpanded(!isExpanded)}
                    className={`inline-flex items-center gap-1 font-sans text-xs md:text-sm font-medium tracking-wider text-white hover:text-white/80 transition-colors underline underline-offset-4 cursor-pointer focus:outline-none ${
                      isExpanded ? 'mt-3 block mx-auto' : 'ml-1.5 inline'
                    }`}
                  >
                    {isExpanded ? (
                      <>
                        Read Less <ChevronUp className="w-3.5 h-3.5 inline" />
                      </>
                    ) : (
                      <>
                        Read More <ChevronDown className="w-3.5 h-3.5 inline" />
                      </>
                    )}
                  </button>
                )}
              </div>
            )}
            <div className="flex flex-col items-center justify-center">
              <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
                {primaryCtaLink ? (
                  <Link
                    to={primaryCtaLink}
                    className="inline-flex items-center justify-center px-7 py-3 sm:px-8 sm:py-3.5 bg-white text-navy-950 font-sans text-xs sm:text-sm font-bold tracking-widest uppercase hover:bg-slate-100 transition-all rounded-full shadow-2xl hover:scale-105"
                  >
                    {primaryCtaText || "Discover More"}
                  </Link>
                ) : (
                  <button
                    onClick={() => document.getElementById('content')?.scrollIntoView({ behavior: 'smooth' })}
                    className="inline-flex items-center justify-center px-7 py-3 sm:px-8 sm:py-3.5 bg-white text-navy-950 font-sans text-xs sm:text-sm font-bold tracking-widest uppercase hover:bg-slate-100 transition-all rounded-full shadow-2xl hover:scale-105 cursor-pointer"
                  >
                    {primaryCtaText || "Discover More"}
                  </button>
                )}
                {secondaryCtaText && (
                  <Link
                    to={secondaryCtaLink || "/contact"}
                    className="inline-flex items-center justify-center px-7 py-3 sm:px-8 sm:py-3.5 bg-white/10 text-white border border-white/30 font-sans text-xs sm:text-sm font-bold tracking-widest uppercase hover:bg-white/20 transition-all rounded-full shadow-2xl hover:scale-105"
                  >
                    {secondaryCtaText}
                  </Link>
                )}
              </div>
            </div>
          </FadeIn>
        )}
      </div>
    </section>
  );
};

export default ComparisonHero;
