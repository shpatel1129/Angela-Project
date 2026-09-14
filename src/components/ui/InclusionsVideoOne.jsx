import React from 'react';
import VideoEmbed from './VideoEmbed';

const InclusionsVideoOne = ({ data }) => {
  if (!data) return null;

  const { youtubeId, title, subtitle, description } = data;

  return (
    <section className="bg-navy-950 py-24 px-6 relative overflow-hidden">
      {/* Decorative linear glow */}
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[300px] bg-gold-400/10 rounded-full filter blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Content header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold-400">
            {subtitle}
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-white">
            {title}
          </h2>
          <p className="font-sans text-slate-400 text-sm md:text-base leading-relaxed">
            {description}
          </p>
        </div>

        {/* Video wrapper with premium border overlay */}
        <div className="relative rounded-[32px] overflow-hidden p-2 bg-gradient-to-tr from-white/10 via-white/5 to-white/10 shadow-2xl">
          <div className="rounded-[24px] overflow-hidden bg-slate-900 aspect-[16/9]">
            <VideoEmbed youtubeId={youtubeId} title={title} />
          </div>
        </div>

      </div>
    </section>
  );
};

export default InclusionsVideoOne;
