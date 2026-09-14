import React from 'react';
import FadeIn from './FadeIn';
import { Quote } from 'lucide-react';

const ButlerVideoOne = ({ data }) => {
  if (!data?.youtubeId) return null;

  return (
    <section className="w-full py-20 lg:py-24 bg-navy-950 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gold-400/[0.03] rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gold-400/[0.03] rounded-full translate-x-1/3 translate-y-1/3" />

      <div className="max-w-[1100px] mx-auto px-6 relative z-10">
        {/* Video Title */}
        <FadeIn className="text-center mb-10">
          <span className="uppercase tracking-[0.3em] text-[11px] font-bold text-gold-400/70 mb-4 block">
            LUXURY CRUISE EXPERIENCE
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-4">
            {data?.title}
          </h2>
          <div className="w-12 h-[2px] bg-gold-400 mx-auto mb-6" />
          {data?.description && (
            <p className="font-sans text-base text-white/60 max-w-2xl mx-auto leading-relaxed">
              {data.description}
            </p>
          )}
        </FadeIn>

        {/* Video Embed */}
        <FadeIn delay={0.15}>
          <div className="relative">
            {/* Film-grain styled border */}
            <div className="absolute -inset-1 bg-gradient-to-br from-gold-400/20 via-transparent to-gold-400/10 rounded-2xl" />
            <div className="relative w-full aspect-video bg-navy-900 rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube-nocookie.com/embed/${data.youtubeId}?rel=0&modestbranding=1&vq=hd1080`}
                title={data?.title || "Silversea Butler Service"}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </div>
        </FadeIn>

        {/* Expert Quote Below */}
        {data?.quote && (
          <FadeIn delay={0.25}>
            <div className="mt-12 max-w-3xl mx-auto text-center">
              <Quote className="w-8 h-8 text-gold-400/40 mx-auto mb-4 rotate-180" />
              <blockquote className="font-display text-xl lg:text-2xl text-white/90 leading-relaxed italic mb-4">
                "{data.quote.text}"
              </blockquote>
              <div className="flex items-center justify-center gap-3">
                <div className="w-8 h-px bg-gold-400/40" />
                <span className="font-sans text-sm text-gold-400 font-medium tracking-wide">
                  {data.quote.author}
                </span>
                <div className="w-8 h-px bg-gold-400/40" />
              </div>
              <p className="font-sans text-xs text-white/40 mt-1">
                {data.quote.role}
              </p>
            </div>
          </FadeIn>
        )}
      </div>
    </section>
  );
};

export default ButlerVideoOne;
