import React from 'react';
import FadeIn from './FadeIn';
import MasterImage from './MasterImage';
import { CheckCircle, Sparkles } from 'lucide-react';

const ButlerQuickAnswer = ({ data, image }) => {
  if (!data) return null;

  return (
    <section id="content" className="w-full py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Eyebrow */}
        <FadeIn>
          <div className="flex items-center gap-4 mb-6">
            <span className="uppercase tracking-[0.25em] text-[11px] font-bold text-slate-400">
              {data?.eyebrow || "THE COMPLETE GUIDE"}
            </span>
            <div className="h-px flex-1 bg-gradient-to-r from-gold-400/40 to-transparent" />
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Editorial Content */}
          <div className="order-2 lg:order-1">
            <FadeIn direction="up">
              <h2 className="font-display text-4xl md:text-5xl lg:text-[3.4rem] text-navy-950 leading-[1.08] tracking-tight mb-8">
                {data?.heading}
              </h2>
              <div className="w-14 h-[2px] bg-gold-400 mb-8" />
              <p className="font-sans text-xl lg:text-[1.35rem] text-navy-800 leading-relaxed font-light mb-6">
                {data?.leadParagraph}
              </p>
              {data?.bodyParagraphs?.map((p, i) => (
                <p key={i} className="font-sans text-base text-slate-600 leading-relaxed mb-4">
                  {p}
                </p>
              ))}
            </FadeIn>

            {/* Callout Box */}
            {data?.callout && (
              <FadeIn delay={0.2}>
                <div className="mt-8 relative overflow-hidden rounded-xl border border-gold-400/30 bg-gradient-to-br from-navy-950/[0.03] to-gold-400/[0.06] p-6">
                  <div className="flex items-start gap-3">
                    <Sparkles className="w-5 h-5 text-gold-500 mt-0.5 flex-shrink-0" />
                    <p className="font-sans text-sm text-navy-800 leading-relaxed font-medium italic">
                      {data.callout}
                    </p>
                  </div>
                </div>
              </FadeIn>
            )}
          </div>

          {/* Right: Image + Bullet List Card */}
          <div className="order-1 lg:order-2 flex flex-col gap-8">
            {/* Image */}
            {image && (
              <FadeIn delay={0.1}>
                <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
                  <MasterImage
                    src={image}
                    alt={data?.image?.alt || "Silversea luxury cruise experience"}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/30 to-transparent" />
                </div>
              </FadeIn>
            )}

            {/* Checklist Card */}
            {data?.bullets && (
              <FadeIn delay={0.2}>
                <div className="rounded-2xl bg-navy-950 p-8 shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-gold-400/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                  <h3 className="font-display text-xl text-white mb-6 relative z-10">
                    {data?.bulletTitle || "What Your Butler Can Help With"}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 relative z-10">
                    {data.bullets.map((item, i) => (
                      <div key={i} className="flex items-start gap-2.5 group">
                        <CheckCircle className="w-4 h-4 text-gold-400 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                        <span className="font-sans text-sm text-white/80 leading-snug">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ButlerQuickAnswer;
