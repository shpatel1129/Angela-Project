import React from 'react';
import MasterImage from './MasterImage';

const InclusionsBeverageHub = ({ data, wineImg, spiritsImg, nonAlcImg }) => {
  if (!data) return null;

  const { headline, intro, items } = data;

  const images = [wineImg, spiritsImg, nonAlcImg, spiritsImg]; // repeat last if needed or map

  return (
    <section className="bg-navy-950 py-24 px-6 relative overflow-hidden text-white">
      {/* Subtle top and bottom borders */}
      <div className="absolute top-0 left-0 right-0 h-px bg-white/10"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-white/10"></div>

      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold-400">
            Beverage Inclusions
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl">
            {headline}
          </h2>
          <p className="font-sans text-slate-400 text-lg leading-relaxed">
            {intro}
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items?.map((item, idx) => {
            const img = images[idx];
            return (
              <div
                key={idx}
                className="group relative rounded-[32px] overflow-hidden min-h-[380px] flex flex-col justify-end p-8 border border-white/10 hover:border-gold-400/40 transition-all duration-500 shadow-xl"
              >
                {/* Background Image */}
                {img && (
                  <div className="absolute inset-0">
                    <MasterImage
                      src={img}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                    />
                    {/* Dark gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/70 to-navy-950/20 group-hover:via-navy-950/80 transition-all duration-300"></div>
                  </div>
                )}

                {/* Content */}
                <div className="relative z-10 space-y-4">
                  <span className="inline-block text-[10px] font-bold uppercase tracking-[0.2em] text-gold-400 bg-gold-400/10 border border-gold-400/20 px-3 py-1 rounded-full">
                    {item.badge}
                  </span>
                  <h3 className="font-display text-2xl text-white">
                    {item.title}
                  </h3>
                  <p className="font-sans text-slate-300 text-xs md:text-sm leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default InclusionsBeverageHub;
