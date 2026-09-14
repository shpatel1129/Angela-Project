import React from 'react';
import FadeIn from './FadeIn';

const ExploraVideoEmbedTwo = () => {
  return (
    <section className="w-full bg-slate-900 py-20 text-white relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-400/5 rounded-full filter blur-3xl z-0"></div>
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-10">
          <FadeIn>
            <span className="text-xs uppercase tracking-widest text-gold-400 font-bold mb-2 block">
              Explora Journeys
            </span>
            <h3 className="font-display text-2xl md:text-3xl text-slate-100">
              Experience Explora Journeys: A New Era of Ocean Travel
            </h3>
          </FadeIn>
        </div>

        <FadeIn delay={0.2}>
          <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-2xl border border-slate-800 bg-slate-900">
            <iframe
              src="https://www.youtube.com/embed/UMgm4cjYWZQ"
              title="Explora Journeys Luxury Ocean Travel"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default ExploraVideoEmbedTwo;
