import React from 'react';
import { Link } from 'react-router-dom';
import FadeIn from './FadeIn';
import MasterImage from './MasterImage';

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
  return (
    <section className="relative w-full min-h-[65vh] flex flex-col justify-center items-center bg-navy-950 text-white pt-40 pb-20 px-6">
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
          <span className="font-sans text-xs font-bold tracking-[0.2em] uppercase text-white/80 mb-6 block">
            {badge || "Ultimate Guide"}
          </span>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-tight mb-8 drop-shadow-2xl whitespace-pre-line">
            {title}
          </h1>
        </FadeIn>

        {subtitle && (
          <FadeIn delay={0.2} direction="up">
            <p className="font-sans text-xl md:text-2xl text-white/90 leading-relaxed font-light max-w-3xl mx-auto mb-6 drop-shadow-lg">
              {subtitle}
            </p>
            {description && (
              <p className="font-sans text-base md:text-lg text-white/70 leading-relaxed font-light max-w-3xl mx-auto mb-12 drop-shadow-lg">
                {description}
              </p>
            )}
            <div className={`flex flex-col items-center justify-center gap-6 ${!description ? 'mt-12' : ''}`}>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <button
                  onClick={() => document.getElementById('content')?.scrollIntoView({ behavior: 'smooth' })}
                  className="inline-flex items-center justify-center px-10 py-4 bg-white text-navy-950 font-sans text-sm font-bold tracking-widest uppercase hover:bg-slate-100 transition-all rounded-full shadow-2xl hover:scale-105 cursor-pointer"
                >
                  Discover More
                </button>
                {secondaryCtaText && (
                  <Link
                    to={secondaryCtaLink || "/contact"}
                    className="inline-flex items-center justify-center px-10 py-4 bg-white/10 text-white border border-white/30 font-sans text-sm font-bold tracking-widest uppercase hover:bg-white/20 transition-all rounded-full shadow-2xl hover:scale-105"
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
