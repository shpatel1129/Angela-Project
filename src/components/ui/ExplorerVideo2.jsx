import React from 'react';
import FadeIn from './FadeIn';

const ExplorerVideo2 = ({ youtubeId, title, description }) => {
  if (!youtubeId) return null;

  return (
    <section className="w-full py-20 bg-slate-50 text-slate-800 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-ts-gold/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Side: Editorial Callout */}
        <div className="lg:col-span-5 space-y-6 order-2 lg:order-1">
          <FadeIn direction="right">
            <span className="font-sans text-xs font-bold tracking-[0.2em] text-ts-gold uppercase block">EXCLUSIVE LOOK</span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold leading-tight mt-2 text-navy-950">
              {title || "The Regent Suite Tour"}
            </h3>
            <div className="w-12 h-1 bg-ts-gold my-4"></div>
            <p className="font-serif text-sm text-slate-600 leading-relaxed font-light">
              {description || "A rare visual tour inside the most prestigious suite at sea—the 4,443 square foot Regent Suite, complete with its own private spa, Steinway piano, and unlimited custom private land tours."}
            </p>
            <div className="pt-4 flex gap-6">
              <div>
                <span className="font-sans text-[18px] font-bold text-navy-950 block">4,443</span>
                <span className="font-sans text-[9px] text-slate-400 font-bold uppercase tracking-wider block">Square Feet</span>
              </div>
              <div className="border-l border-slate-200 pl-6">
                <span className="font-sans text-[18px] font-bold text-navy-950 block">Steinway</span>
                <span className="font-sans text-[9px] text-slate-400 font-bold uppercase tracking-wider block">Custom Piano</span>
              </div>
              <div className="border-l border-slate-200 pl-6">
                <span className="font-sans text-[18px] font-bold text-navy-950 block">Private</span>
                <span className="font-sans text-[9px] text-slate-400 font-bold uppercase tracking-wider block">In-Suite Spa</span>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Right Side: Youtube Player */}
        <div className="lg:col-span-7 order-1 lg:order-2">
          <FadeIn direction="left">
            <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80">
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

      </div>
    </section>
  );
};

export default ExplorerVideo2;
