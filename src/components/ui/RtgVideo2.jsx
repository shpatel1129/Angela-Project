import React from 'react';
import FadeIn from './FadeIn';

const RtgVideo2 = ({ youtubeId, title, description }) => {
  if (!youtubeId) return null;

  return (
    <section className="w-full py-20 bg-white text-navy-950 relative overflow-hidden">
      {/* Background vector lines */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50%" cy="50%" r="300" stroke="#101d2c" strokeWidth="1" fill="none" />
        </svg>
      </div>

      <div className="max-w-[800px] mx-auto px-6 relative z-10 text-center">
        
        {/* Section Header */}
        <FadeIn className="mb-10">
          <span className="font-sans text-[10px] font-bold tracking-[0.3em] uppercase text-ts-gold block mb-3">SHIPS TOUR VIBES</span>
          <h3 className="font-display text-2xl sm:text-3xl font-bold leading-tight text-navy-950 mb-4">
            {title || "Inside Regent Seven Seas Splendor"}
          </h3>
          <p className="font-sans text-xs sm:text-sm text-slate-655 leading-relaxed font-light max-w-xl mx-auto">
            {description || "Explore the luxurious spaces, design details, suites, and public spaces firsthand through a professional tour."}
          </p>
        </FadeIn>

        {/* Centered Video Frame */}
        <FadeIn delay={0.1}>
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-ts-gold/20 aspect-video bg-black max-w-2xl mx-auto">
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

        {/* Video Footer Info */}
        <FadeIn delay={0.2} className="mt-8 pt-6 border-t border-slate-100 max-w-xl mx-auto flex items-center justify-between">
          <span className="font-sans text-[9px] text-slate-400 font-bold uppercase tracking-wider">Video Walkthrough</span>
          <span className="font-sans text-[9px] text-ts-gold font-bold uppercase tracking-wider">Regent Splendor Review</span>
        </FadeIn>

      </div>
    </section>
  );
};

export default RtgVideo2;
