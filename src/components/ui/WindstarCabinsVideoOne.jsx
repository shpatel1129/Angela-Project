import React from 'react';
import VideoEmbed from './VideoEmbed';
import FadeIn from './FadeIn';

const WindstarCabinsVideoOne = ({ title, subtitle, description, youtubeId }) => {
  return (
    <section className="bg-navy-950 py-24 px-6 relative overflow-hidden text-white border-t border-b border-navy-900">
      {/* Decorative vector background */}
      <div className="absolute top-1/2 left-1/2 w-[700px] h-[350px] bg-ts-gold/5 rounded-full filter blur-[150px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Panel: Description */}
          <div className="lg:col-span-4 space-y-6">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-ts-gold">
              {subtitle || "Video Walkthrough"}
            </span>
            <h3 className="font-display text-3xl sm:text-4xl text-white leading-tight">
              {title || "Step Inside a Luxury Windstar Suite"}
            </h3>
            <div className="w-12 h-1 bg-ts-gold rounded-full"></div>
            <p className="font-sans text-slate-300 text-sm sm:text-base leading-relaxed">
              {description || "Explore the layout, wood accents, open verandas, and luxury bath fittings that define Windstar's all-suite experience."}
            </p>
          </div>

          {/* Right Panel: Embedded Player */}
          <div className="lg:col-span-8 relative">
            <div className="absolute -bottom-4 -left-4 w-full h-full bg-ts-gold/10 rounded-[32px] -z-10"></div>
            <div className="rounded-[32px] overflow-hidden p-2.5 bg-gradient-to-tr from-white/15 via-white/5 to-white/15 shadow-2xl">
              <div className="rounded-[22px] overflow-hidden bg-slate-900 aspect-[16/9]">
                <VideoEmbed youtubeId={youtubeId || "GzUIiFRg-fg"} title={title || "Step Inside a Luxury Windstar Suite"} />
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default WindstarCabinsVideoOne;
