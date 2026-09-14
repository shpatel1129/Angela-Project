import React from 'react';
import FadeIn from './FadeIn';

const OffersVideoEmbedTwo = () => {
  return (
    <section className="w-full bg-navy-950 py-20 text-white relative overflow-hidden">
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-gold-400/5 rounded-full filter blur-3xl z-0"></div>
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-10">
          <FadeIn>
            <span className="text-xs uppercase tracking-widest text-gold-400 font-bold mb-2 block">
              Silversea Fleet Tour
            </span>
            <h3 className="font-display text-2xl md:text-3xl text-slate-100">
              Exploring Silversea's Ultra-Luxury Ships
            </h3>
          </FadeIn>
        </div>

        <FadeIn delay={0.2}>
          <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-2xl border border-slate-800 bg-slate-900">
            <iframe
              src="https://www.youtube.com/embed/8icW8RTf1TI"
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

export default OffersVideoEmbedTwo;
