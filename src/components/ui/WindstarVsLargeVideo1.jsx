import React from 'react';
import FadeIn from './FadeIn';

const WindstarVsLargeVideo1 = ({ youtubeId, title, description }) => {
  return (
    <section className="w-full py-16 bg-navy-950 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-ts-gold/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-[1000px] mx-auto px-6 text-center relative z-10">
        
        <FadeIn className="mb-10">
          <span className="font-sans text-xs font-bold uppercase tracking-[0.25em] text-ts-gold block">
            FLEET IN MOTION
          </span>
          <h3 className="font-display text-2xl sm:text-3xl font-bold mt-2">
            {title || "Compare Onboard Scale & Lifestyles"}
          </h3>
          <p className="font-sans text-xs sm:text-sm text-ice-100/75 max-w-xl mx-auto mt-4 leading-relaxed">
            {description || "Watch a visual showcase exploring the contrast between Windstar's intimate, uncrowded deck spaces and massive resort-style megaships."}
          </p>
        </FadeIn>

        {/* Video Frame */}
        <FadeIn delay={0.2}>
          <div className="relative rounded-3xl overflow-hidden aspect-video max-w-4xl mx-auto bg-navy-900 border-2 border-ts-gold shadow-2xl">
            <iframe
              className="absolute inset-0 w-full h-full"
              src={`https://www.youtube.com/embed/${youtubeId}?rel=0`}
              title="Windstar Yacht Experience vs Megaships"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </FadeIn>

      </div>
    </section>
  );
};

export default WindstarVsLargeVideo1;
