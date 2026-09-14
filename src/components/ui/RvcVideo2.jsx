import React from 'react';
import FadeIn from './FadeIn';

const RvcVideo2 = ({ youtubeId, title, description }) => {
  if (!youtubeId) return null;

  return (
    <section className="w-full py-20 bg-white text-navy-950 relative overflow-hidden">
      {/* Visual background circle grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20%" cy="50%" r="200" stroke="#101d2c" strokeWidth="1" fill="none" />
          <circle cx="20%" cy="50%" r="220" stroke="#101d2c" strokeWidth="1" fill="none" strokeDasharray="5,5" />
        </svg>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Narrative Block */}
          <div className="lg:col-span-5 order-2 lg:order-1 space-y-6">
            <FadeIn direction="right">
              <span className="font-sans text-[10px] font-bold tracking-[0.3em] text-ts-gold uppercase block mb-1">
                FLEET DETAIL REVIEW
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold leading-tight text-navy-950">
                {title || "Luxury Vessel Review"}
              </h3>
              <div className="w-12 h-0.5 bg-navy-950 my-4"></div>
              <p className="font-sans text-xs sm:text-sm text-slate-650 leading-relaxed font-light">
                {description || "Take a look inside the suites, public areas, specialized dining spots, and social lounges with an in-depth tour."}
              </p>
              
              {/* Highlight list */}
              <div className="pt-4 space-y-3 border-t border-slate-200">
                <div className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-navy-950"></span>
                  <span className="font-sans text-[11px] sm:text-xs text-slate-600">Onboard activities and culinary venues tour</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-navy-950"></span>
                  <span className="font-sans text-[11px] sm:text-xs text-slate-600">Butler preparation levels analysis</span>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right Column: Premium 16:9 Video Frame */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <FadeIn direction="left" delay={0.1}>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 aspect-video bg-black group">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${youtubeId}?rel=0`}
                  title={title || "YouTube video player"}
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

export default RvcVideo2;
