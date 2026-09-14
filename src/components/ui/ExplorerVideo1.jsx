import React from 'react';
import FadeIn from './FadeIn';

const ExplorerVideo1 = ({ youtubeId, title, description }) => {
  if (!youtubeId) return null;

  return (
    <section className="w-full py-20 bg-navy-950 text-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-ts-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-navy-900/40 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Side: Youtube Player */}
        <div className="lg:col-span-7">
          <FadeIn direction="right">
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

        {/* Right Side: Editorial Callout */}
        <div className="lg:col-span-5 space-y-6">
          <FadeIn direction="left">
            <span className="font-sans text-xs font-bold tracking-[0.2em] text-ts-gold uppercase block">VIDEO INSIGHT</span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold leading-tight mt-2 text-white">
              {title || "Seven Seas Explorer Video Tour"}
            </h3>
            <div className="w-12 h-1 bg-ts-gold my-4"></div>
            <p className="font-serif text-sm text-slate-300 leading-relaxed font-light">
              {description || "Take a step-by-step walkthrough of Regent Seven Seas Explorer's elegant public spaces, observation lounges, and world-class specialty dining options."}
            </p>
            <div className="pt-4">
              <span className="font-sans text-[10px] text-slate-400 font-bold uppercase tracking-wider block mb-1">RECOMMENDED VIEWING</span>
              <p className="font-sans text-xs text-slate-500 font-light italic">Walkthrough of Compass Rose, Pacific Rim, Pool Deck and lounges.</p>
            </div>
          </FadeIn>
        </div>

      </div>
    </section>
  );
};

export default ExplorerVideo1;
