import React from 'react';
import VideoEmbed from './VideoEmbed';
import FadeIn from './FadeIn';

const WindstarCabinsVideoTwo = ({ title, subtitle, description, youtubeId }) => {
  return (
    <section className="bg-white py-24 px-6 relative border-t border-b border-slate-200/60">
      <div className="max-w-6xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Panel: Embedded Player */}
          <div className="lg:col-span-8 order-last lg:order-first relative">
            <div className="absolute -bottom-4 -right-4 w-full h-full bg-slate-100 rounded-[32px] -z-10"></div>
            <div className="rounded-[32px] overflow-hidden p-2.5 bg-white shadow-xl border border-slate-200/80">
              <div className="rounded-[22px] overflow-hidden bg-slate-900 aspect-[16/9]">
                <VideoEmbed youtubeId={youtubeId || "Ww2VGZJjTfM"} title={title || "Windstar Star Seeker Experience"} />
              </div>
            </div>
          </div>

          {/* Right Panel: Description */}
          <div className="lg:col-span-4 space-y-6">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-navy-900">
              {subtitle || "Yacht Atmosphere"}
            </span>
            <h3 className="font-display text-3xl sm:text-4xl text-navy-950 leading-tight">
              {title || "Sailing with Windstar: 180° Ordinary"}
            </h3>
            <div className="w-12 h-1 bg-ts-gold rounded-full"></div>
            <p className="font-sans text-slate-600 text-sm sm:text-base leading-relaxed font-light">
              {description || "Discover the magic of Windstar sailing yachts, featuring iconic five-mast structures and a closer, intimate relationship to the ocean."}
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default WindstarCabinsVideoTwo;
