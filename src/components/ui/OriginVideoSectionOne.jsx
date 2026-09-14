import React from 'react';
import FadeIn from './FadeIn';
import MasterImage from './MasterImage';
import { Film } from 'lucide-react';

const OriginVideoSectionOne = ({ youtubeId, title, subtitle, description, sideImage }) => {
  return (
    <section className="py-24 px-6 bg-navy-950 text-white relative overflow-hidden" id="video-1">
      {/* Decorative gradients */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-ts-gold/5 rounded-full filter blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Text & Features */}
          <div className="lg:col-span-5 space-y-6">
            <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-ts-gold bg-white/5 border border-white/10 px-4 py-2 rounded-full">
              <Film className="w-3.5 h-3.5" />
              {subtitle || "Excursion Video Guide"}
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-white font-bold leading-tight">
              {title}
            </h2>
            <div className="w-12 h-0.5 bg-ts-gold"></div>
            <p className="font-sans text-slate-300 text-sm sm:text-base leading-relaxed">
              {description}
            </p>
            {sideImage && (
              <div className="rounded-2xl overflow-hidden aspect-[16/9] border border-white/10 shadow-lg relative group">
                <MasterImage src={sideImage} alt="Video preview thumbnail" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-navy-950/20 group-hover:bg-transparent transition-colors"></div>
              </div>
            )}
          </div>

          {/* Right Column: Embedded YouTube Player */}
          <div className="lg:col-span-7">
            <div className="relative aspect-video w-full rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-slate-900">
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube.com/embed/${youtubeId}?rel=0`}
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default OriginVideoSectionOne;
