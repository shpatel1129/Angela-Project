import React from 'react';
import FadeIn from './FadeIn';

const WindstarVsLargeVideo2 = ({ youtubeId, title, description }) => {
  return (
    <section className="w-full py-16 bg-navy-950 text-white relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-ts-gold/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Details */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <FadeIn>
              <span className="font-sans text-xs font-bold uppercase tracking-[0.25em] text-ts-gold block">
                EXPERIENCE COMPARISON
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold leading-tight text-white mt-2">
                {title || "Specialty Activities & Pools Showcase"}
              </h3>
              <p className="font-sans text-xs sm:text-sm text-ice-100/80 leading-relaxed mt-4">
                {description || "Discover the real difference in your travel agenda. Megaships bring broad theatrical variety, whereas Windstar provides an open-ocean watersports marina."}
              </p>
              
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 mt-6">
                <span className="font-sans text-[10px] text-ts-gold font-bold uppercase tracking-widest block mb-2">
                  Key Differences
                </span>
                <ul className="space-y-2 font-sans text-xs text-ice-200">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-ts-gold"></span>
                    <span>Stern watersports platform vs pool deck crowds</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-ts-gold"></span>
                    <span>Boutique local entertainment vs broadway musicals</span>
                  </li>
                </ul>
              </div>
            </FadeIn>
          </div>

          {/* Right Column: YouTube Embed */}
          <div className="lg:col-span-7">
            <FadeIn delay={0.1}>
              <div className="relative rounded-3xl overflow-hidden aspect-video bg-navy-900 border-2 border-ts-gold shadow-2xl">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${youtubeId}?rel=0`}
                  title="Yacht Experience vs Megaship Activities"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WindstarVsLargeVideo2;
