import React from 'react';
import FadeIn from './FadeIn';

const UltimateVideoEmbedTwo = () => {
  return (
    <section className="w-full bg-slate-100 py-20 border-b border-slate-200">
      <div className="max-w-[1000px] mx-auto px-6 text-center">
        <FadeIn>
          <span className="text-xs uppercase tracking-[0.25em] text-gold-600 font-bold mb-3 block">
            Inside the Fleet
          </span>
          <h2 className="font-display text-2xl md:text-3xl text-navy-950 mb-8">
            Behind the Scenes: Sailing Windstar Yachts
          </h2>
          <div className="relative aspect-video w-full rounded-3xl overflow-hidden shadow-xl border border-slate-300 bg-slate-900 p-2 bg-white">
            <div className="w-full h-full rounded-2xl overflow-hidden relative">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/82SfE15vCZo"
                title="Sailing with Windstar Cruises"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default UltimateVideoEmbedTwo;
