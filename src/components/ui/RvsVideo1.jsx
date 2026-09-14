import React from 'react';
import FadeIn from './FadeIn';

const RvsVideo1 = ({ youtubeId, title, description }) => {
  if (!youtubeId) return null;

  return (
    <section className="w-full py-20 bg-navy-950 text-white relative overflow-hidden">
      {/* Decorative radial glow */}
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-ts-gold/3 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

      <div className="max-w-[1100px] mx-auto px-6 relative z-10">
        <FadeIn className="text-center mb-10">
          <span className="font-sans text-[10px] font-bold tracking-[0.3em] uppercase text-ts-gold block mb-3">VIDEO INSIGHT</span>
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">{title || "Regent vs Silversea: Expert Video Analysis"}</h3>
          <div className="w-12 h-1 bg-ts-gold mx-auto mt-4 mb-4"></div>
          <p className="font-serif text-sm text-slate-300 leading-relaxed font-light max-w-2xl mx-auto">
            {description || "Watch our expert analysis of how these two luxury cruise lines compare across key categories."}
          </p>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl border border-white/10">
            <iframe
              src={`https://www.youtube.com/embed/${youtubeId}?rel=0`}
              title={title || "YouTube video player"}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full border-0"
            ></iframe>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default RvsVideo1;
