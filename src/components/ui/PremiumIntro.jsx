import React from 'react';
import { Link } from 'react-router-dom';
import FadeIn from './FadeIn';
import MasterImage from './MasterImage';

const PremiumIntro = ({ sections, image1, image2, alt1, alt2, ctaText, ctaLink, watermarkText = "Verdict" }) => {
  if (!sections || sections.length === 0) return null;

  const [firstSection, ...remainingSections] = sections;
  const paragraphs = firstSection.paragraphs || (firstSection.description ? [firstSection.description] : (firstSection.content ? [firstSection.content] : []));
  const firstParagraph = paragraphs[0];
  const restParagraphs = paragraphs.slice(1);

  return (
    <section className="w-full py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">

        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

          {/* Left: Architectural Arched Image */}
          <div className="w-full lg:w-5/12 relative">
            <FadeIn direction="up">
              {/* Main Arch */}
              <div className="aspect-[3/4] w-full rounded-t-[1000px] rounded-b-xl overflow-hidden shadow-2xl relative border-4 border-white ring-1 ring-slate-100">
                {image1 ? (
                  <MasterImage src={image1} alt={alt1 || sections?.[0]?.heading || "Luxury cruise experience"} className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-1000 ease-out" />
                ) : (
                  <div className="w-full h-full bg-slate-100 flex items-center justify-center">Image</div>
                )}
                {/* Subtle gradient overlay at bottom for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/20 to-transparent"></div>
              </div>

              {/* Decorative Circular Inset (Image 2) */}
              {image2 && (
                <div className="absolute -bottom-8 -right-8 md:-right-12 w-40 h-40 md:w-48 md:h-48 rounded-full bg-white p-2 shadow-xl z-20 hidden sm:block">
                  <div className="w-full h-full rounded-full overflow-hidden border border-ts-gold/20 relative">
                    <MasterImage src={image2} alt={alt2 || "Cruise ship details and amenities"} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-navy-950/25 mix-blend-multiply rounded-full"></div>
                  </div>
                  {/* Floating decorative element */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-navy-950 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-ts-gold font-display text-xl italic">✦</span>
                  </div>
                </div>
              )}
            </FadeIn>
          </div>

          {/* Right: Editorial Typography */}
          <div className="w-full lg:w-7/12 relative pt-8 lg:pt-0">
            {/* Massive Background Text watermark */}
            {watermarkText && (
              <div className="absolute -top-24 -left-12 lg:-left-24 text-ice-50 font-display text-[120px] lg:text-[180px] leading-none whitespace-nowrap z-0 select-none opacity-50 font-bold tracking-tighter">
                {watermarkText}
              </div>
            )}

            <FadeIn direction="left" className="relative z-10 pl-0 lg:pl-12">
              <h2 className="font-display text-3xl md:text-4xl text-navy-950 leading-tight mb-6">
                {firstSection.heading || firstSection.title || "Quick Answer"}
              </h2>
              <div className="relative">
                {/* Decorative quote mark */}
                <span className="absolute -top-10 -left-8 text-6xl text-ts-gold/20 font-display leading-none select-none">"</span>

                {/* The "Hook" Paragraph - rendered large and editorial */}
                {firstParagraph && (
                  <p className="font-display text-xl md:text-2xl text-navy-950 leading-relaxed mb-8 relative z-10 italic">
                    {firstParagraph}
                  </p>
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

              {/* Optional Lists from first section */}
              {firstSection.list && (
                <ul className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                  {firstSection.list.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-ts-gold mt-2 flex-shrink-0"></div>
                      <span className="font-sans text-[15px] text-slate-700 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              )}

              {ctaText && (
                <div className="mt-12">
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

        {/* Render any additional sections in a clean, minimalist list below if they exist */}
        {remainingSections.length > 0 && (
          <div className="mt-32 pt-16 border-t border-slate-100">
            <div className={`grid grid-cols-1 ${remainingSections.length === 1 ? 'max-w-4xl mx-auto' : 'md:grid-cols-2'} gap-12 lg:gap-20`}>
              {remainingSections.map((section, idx) => (
                <FadeIn key={idx} delay={idx * 0.1}>
                  <h3 className={`font-display text-2xl text-navy-950 mb-4 ${remainingSections.length === 1 ? 'text-center md:text-3xl' : ''}`}>{section.heading || section.title}</h3>
                  {/* Decorative underline */}
                  <div className={`w-12 h-px bg-ts-gold mb-6 ${remainingSections.length === 1 ? 'mx-auto' : ''}`}></div>

                  <div className={remainingSections.length === 1 ? 'space-y-4 text-center' : 'space-y-4'}>
                    {(section.paragraphs || (section.description ? [section.description] : (section.content ? [section.content] : []))).map((p, i) => (
                      <p key={i} className="font-sans text-slate-600 leading-relaxed font-light text-lg">{p}</p>
                    ))}
                  </div>

                  {section.list && (
                    <ul className="mt-6 space-y-3">
                      {section.list.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="text-ts-gold font-bold mt-0.5 text-sm">✦</span>
                          <span className="font-sans text-sm text-slate-700 leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </FadeIn>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default PremiumIntro;
