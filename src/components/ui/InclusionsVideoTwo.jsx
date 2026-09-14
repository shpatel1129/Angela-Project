import React from 'react';
import VideoEmbed from './VideoEmbed';

const InclusionsVideoTwo = ({ data }) => {
  if (!data) return null;

  const { youtubeId, title, subtitle, description } = data;

  return (
    <section className="bg-slate-50 py-24 px-6 relative border-t border-b border-slate-200/60">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left panel: text details */}
          <div className="lg:col-span-4 space-y-6">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold-400">
              {subtitle}
            </span>
            <h2 className="font-display text-3xl md:text-4xl text-navy-950 leading-tight">
              {title}
            </h2>
            <div className="w-12 h-1 bg-gold-400 rounded-full"></div>
            <p className="font-sans text-slate-600 text-sm leading-relaxed">
              {description}
            </p>
          </div>

          {/* Right panel: clean video embed with shadow offset */}
          <div className="lg:col-span-8 relative">
            {/* Offset shadow card */}
            <div className="absolute -bottom-4 -left-4 w-full h-full bg-navy-950/5 rounded-3xl -z-10"></div>
            <div className="rounded-3xl overflow-hidden shadow-lg border border-slate-200/80 bg-white p-2">
              <div className="rounded-2xl overflow-hidden aspect-[16/9] bg-slate-900">
                <VideoEmbed youtubeId={youtubeId} title={title} />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default InclusionsVideoTwo;
