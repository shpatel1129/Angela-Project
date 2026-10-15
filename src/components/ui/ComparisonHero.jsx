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
  imageAlt,
  primaryCtaText,
  primaryCtaLink,
  secondaryCtaText,
  secondaryCtaLink
}) => {
  const handleAnchorClick = (e, href) => {
    if (href && href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId) || document.querySelector(href);
      if (targetElement) {
        const headerOffset = 90;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  const renderButton = (text, link, isPrimary = true) => {
    if (!text) return null;
    const targetLink = link || (isPrimary ? '#content' : '/contact');
    const isAnchor = targetLink.startsWith('#');
    const isExternal =
      targetLink.startsWith('http://') ||
      targetLink.startsWith('https://') ||
      targetLink.startsWith('tel:') ||
      targetLink.startsWith('mailto:');

    const baseClasses = isPrimary
      ? "inline-flex items-center justify-center px-10 py-4 bg-white text-navy-950 font-sans text-sm font-bold tracking-widest uppercase hover:bg-slate-100 transition-all rounded-full shadow-2xl hover:scale-105 cursor-pointer text-center"
      : "inline-flex items-center justify-center px-10 py-4 bg-transparent border-2 border-white/80 text-white font-sans text-sm font-bold tracking-widest uppercase hover:bg-white hover:text-navy-950 transition-all rounded-full shadow-2xl hover:scale-105 cursor-pointer text-center";

    if (isAnchor) {
      return (
        <a
          href={targetLink}
          onClick={(e) => handleAnchorClick(e, targetLink)}
          className={baseClasses}
        >
          {text}
        </a>
      );
    }

    if (isExternal) {
      return (
        <a
          href={targetLink}
          target={targetLink.startsWith('http') ? '_blank' : undefined}
          rel={targetLink.startsWith('http') ? 'noopener noreferrer' : undefined}
          className={baseClasses}
        >
          {text}
        </a>
      );
    }

    return (
      <Link
        to={targetLink}
        className={baseClasses}
      >
        {text}
      </Link>
    );
  };

  return (
    <section className="relative w-full min-h-[65vh] flex flex-col justify-center items-center bg-navy-950 text-white pt-40 pb-20 px-6">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {backgroundImage && imageAlt && (
          // With an alt text the hero renders as a real <img> (eager, fetchpriority high): it is
          // discoverable by the preload scanner, indexable in image search and has an alt.
          <MasterImage
            priority={true}
            src={backgroundImage}
            alt={imageAlt}
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        )}
        {backgroundImage && !imageAlt && (
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

        {(subtitle || primaryCtaText || secondaryCtaText) && (
          <FadeIn delay={0.2} direction="up">
            {subtitle && (
              <p className="font-sans text-xl md:text-2xl text-white/90 leading-relaxed font-light max-w-3xl mx-auto mb-6 drop-shadow-lg">
                {subtitle}
              </p>
            )}
            {description && (
              <p className="font-sans text-base md:text-lg text-white/70 leading-relaxed font-light max-w-3xl mx-auto mb-12 drop-shadow-lg">
                {description}
              </p>
            )}
            <div className={`flex flex-wrap items-center justify-center gap-4 ${!description && subtitle ? 'mt-12' : ''}`}>
              {primaryCtaText && renderButton(primaryCtaText, primaryCtaLink, true)}
              {secondaryCtaText && renderButton(secondaryCtaText, secondaryCtaLink, false)}
            </div>
          </FadeIn>
        )}
      </div>
    </section>
  );
};

export default ComparisonHero;
