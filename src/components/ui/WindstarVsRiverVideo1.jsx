import React from 'react';
import FadeIn from './FadeIn';

const WindstarVsRiverVideo1 = ({ youtubeId, title, description }) => {
  return (
    <section className="w-full py-16 bg-navy-950 text-white relative overflow-hidden">
      {/* Decorative gradients */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-ts-gold/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-[1000px] mx-auto px-6 text-center relative z-10">
        
        <FadeIn className="mb-10">
          <span className="font-sans text-xs font-bold uppercase tracking-[0.25em] text-ts-gold block">
            VIDEO OVERVIEW
          </span>
          <h3 className="font-display text-2xl sm:text-3xl font-bold mt-2">
            {title || "The Romance of Small Ship Sailing"}
          </h3>
          <p className="font-sans text-xs sm:text-sm text-ice-100/75 max-w-xl mx-auto mt-4 leading-relaxed">
            {description || "Watch this comparative showcase highlighting the luxury yacht lifestyle of Windstar and the scenic river journeys of Europe."}
          </p>
        </FadeIn>

        {/* Video Player Box */}
        <FadeIn delay={0.2}>
          <div className="relative rounded-3xl overflow-hidden aspect-video max-w-4xl mx-auto bg-navy-900 border-2 border-ts-gold shadow-2xl">
            <iframe
              className="absolute inset-0 w-full h-full"
              src={`https://www.youtube.com/embed/${youtubeId}?rel=0`}
              title="Windstar Cruises Experience"
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

export default WindstarVsRiverVideo1;
