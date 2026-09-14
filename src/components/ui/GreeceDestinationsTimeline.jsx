import React from 'react';

/**
 * GreeceDestinationsTimeline
 * Renders Part 3 (Lesser-known luxury destinations).
 * Layout: A clean, premium grid of cards with overlapping hover tag effects.
 */
const GreeceDestinationsTimeline = ({ destinations = [], images = [] }) => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-sans font-bold tracking-[0.2em] text-blue-600 uppercase mb-4 block">
            THE HIDDEN SELECTION
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-light text-navy-950 mb-6">
            Lesser-Known Luxury Destinations
          </h2>
          <p className="font-sans text-slate-600 font-light leading-relaxed">
            Beyond the famous names lie islands and mainland treasures offering unparalleled privacy, local culture, and bespoke luxury.
          </p>
        </div>

        {/* 4-Column Grid for the 8 Destinations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {destinations.map((dest, idx) => {
            const imgFile = images[idx] || images[0];

            return (
              <div
                key={idx}
                className="group bg-slate-50 border border-slate-100 rounded-2xl overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full cursor-pointer"
              >
                {/* Image Frame */}
                <div className="relative overflow-hidden aspect-[4/3] bg-slate-900 flex-shrink-0">
                  <img
                    src={imgFile}
                    alt={dest.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-60 pointer-events-none" />

                  {/* Destination Tag */}
                  <span className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm text-[10px] font-sans font-bold tracking-wider text-navy-950 uppercase px-3 py-1 rounded-md">
                    {dest.type}
                  </span>
                </div>

                {/* Card Body */}
                <div className="p-6 flex flex-col flex-grow text-left">
                  <h3 className="text-lg font-semibold text-navy-950 mb-2 group-hover:text-blue-600 transition-colors">
                    {dest.name}
                  </h3>
                  <p className="font-sans text-slate-600 leading-relaxed text-xs font-light flex-grow">
                    {dest.desc}
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

export default GreeceDestinationsTimeline;
