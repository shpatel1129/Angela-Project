import React from 'react';
import FadeIn from './FadeIn';

const QuoteVideoEmbedOne = () => {
  return (
    <section className="w-full bg-slate-950 py-20 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,161,92,0.05),transparent_60%)] z-0"></div>
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-10">
          <FadeIn>
            <span className="text-xs uppercase tracking-widest text-gold-400 font-bold mb-2 block">
              Silversea Voyages
            </span>
            <h3 className="font-display text-2xl md:text-3xl text-slate-100">
              The Art of Luxury Ocean Travel
            </h3>
          </FadeIn>
        </div>

        <FadeIn delay={0.2}>
          <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-2xl border border-slate-800 bg-slate-900">
            <iframe
              src="https://www.youtube.com/embed/IU-PyFhwCaM"
              title="Silversea Cruises Video Review"
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

export default QuoteVideoEmbedOne;
