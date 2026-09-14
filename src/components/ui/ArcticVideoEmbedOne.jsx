import React from 'react';
import FadeIn from './FadeIn';

const ArcticVideoEmbedOne = () => {
  return (
    <section className="w-full bg-slate-950 py-20 text-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-400/5 rounded-full filter blur-3xl z-0"></div>
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-10">
          <FadeIn>
            <span className="text-xs uppercase tracking-widest text-gold-400 font-bold mb-2 block">
              Virtual Voyage
            </span>
            <h3 className="font-display text-2xl md:text-3xl text-slate-100">
              Exploring the Far North: Silver Endeavour in Action
            </h3>
          </FadeIn>
        </div>

        <FadeIn delay={0.2}>
          <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-2xl border border-slate-800 bg-slate-900">
            <iframe
              src="https://www.youtube.com/embed/OsRUq3r3Huk"
              title="Silversea Arctic Expedition Video 1"
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

export default ArcticVideoEmbedOne;
