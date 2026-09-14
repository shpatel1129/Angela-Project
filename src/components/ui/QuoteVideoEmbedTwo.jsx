import React from 'react';
import FadeIn from './FadeIn';

const QuoteVideoEmbedTwo = () => {
  return (
    <section className="w-full bg-slate-900 py-20 text-white relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-navy-950/20 rounded-full filter blur-3xl z-0"></div>
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-10">
          <FadeIn>
            <span className="text-xs uppercase tracking-widest text-gold-400 font-bold mb-2 block">
              Silversea Fleet Exploration
            </span>
            <h3 className="font-display text-2xl md:text-3xl text-slate-100">
              Inside Silversea's Ultra-Luxury Cruise Ships
            </h3>
          </FadeIn>
        </div>

        <FadeIn delay={0.2}>
          <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-2xl border border-slate-800 bg-slate-950">
            <iframe
              src="https://www.youtube.com/embed/c3SznRxFcZo"
              title="Silversea Cruises Ships Tour"
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

export default QuoteVideoEmbedTwo;
