import React from 'react';
import FadeIn from './FadeIn';

const AlaskaVideoEmbedTwo = () => {
  return (
    <section className="w-full bg-slate-900 py-20 text-white relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-400/5 rounded-full filter blur-3xl z-0"></div>
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-10">
          <FadeIn>
            <span className="text-xs uppercase tracking-widest text-gold-400 font-bold mb-2 block">
              Expedition Life
            </span>
            <h3 className="font-display text-2xl md:text-3xl text-slate-100">
              Silversea S.A.L.T. Program in Alaska
            </h3>
          </FadeIn>
        </div>

        <FadeIn delay={0.2}>
          <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-2xl border border-slate-800 bg-slate-900">
            <iframe
              src="https://www.youtube.com/embed/vOIwTb60Jxs"
              title="Silversea Alaska Cruising Video 2"
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

export default AlaskaVideoEmbedTwo;
