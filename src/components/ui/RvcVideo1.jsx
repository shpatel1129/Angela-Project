import React from 'react';
import FadeIn from './FadeIn';

const RvcVideo1 = ({ youtubeId, title, description }) => {
  if (!youtubeId) return null;

  return (
    <section className="w-full py-20 bg-navy-950 text-white relative overflow-hidden">
      {/* Accent vector grid */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <line x1="10%" y1="0" x2="10%" y2="100%" stroke="#fff" strokeWidth="1" />
          <line x1="30%" y1="0" x2="30%" y2="100%" stroke="#fff" strokeWidth="1" />
          <line x1="70%" y1="0" x2="70%" y2="100%" stroke="#fff" strokeWidth="1" />
        </svg>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Premium 16:9 Video Frame */}
          <div className="lg:col-span-7">
            <FadeIn direction="right">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 aspect-video bg-black group">
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

          {/* Right Column: Narrative Block */}
          <div className="lg:col-span-5 space-y-6">
            <FadeIn direction="left" delay={0.1}>
              <span className="font-sans text-[10px] font-bold tracking-[0.3em] text-ts-gold uppercase block mb-1">
                FIRSTHAND LOOK
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold leading-tight">
                {title || "Luxury Onboard Walkthrough"}
              </h3>
              <div className="w-12 h-0.5 bg-ts-gold my-4"></div>
              <p className="font-sans text-xs sm:text-sm text-slate-350 leading-relaxed font-light">
                {description || "Explore the luxurious spaces, design details, suites, and public spaces firsthand through a professional tour."}
              </p>
              
              {/* Highlight list */}
              <div className="pt-4 space-y-3 border-t border-white/10">
                <div className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-ts-gold"></span>
                  <span className="font-sans text-[11px] sm:text-xs text-slate-300">Detailed suite space inspection</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-ts-gold"></span>
                  <span className="font-sans text-[11px] sm:text-xs text-slate-300">Public spaces & restaurant dining walkthrough</span>
                </div>
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
};

export default RvcVideo1;
