import React from 'react';
import MasterImage from './MasterImage';

const SilverseaDestinationScroll = ({ destinations, images, bgClass = 'bg-white' }) => {
  if (!destinations?.length) return null;

  return (
    <section className={`py-24 ${bgClass}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-gold-400 font-bold tracking-[0.3em] uppercase text-xs block mb-3">Where Will You Go?</span>
          <h2 className="font-display text-4xl md:text-5xl text-navy-950">Silversea Destinations</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((dest, i) => {
            const img = images?.[i % images.length];
            return (
              <div
                key={i}
                className="group flex flex-col bg-white rounded-3xl overflow-hidden cursor-pointer border border-slate-100 shadow-sm hover:shadow-xl transition-shadow duration-300"
              >
                {/* Image Section - fully visible right away */}
                <div className="relative h-[250px] md:h-[300px] w-full overflow-hidden">
                  {img && (
                    <MasterImage
                      src={img}
                      alt={dest.region}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  )}
                  {/* Season badge */}
                  <div className="absolute top-4 right-4 bg-navy-950/80 backdrop-blur rounded-full px-3 py-1.5 z-10">
                    <span className="text-white text-[10px] font-bold uppercase tracking-widest">{dest.season}</span>
                  </div>
                </div>

                {/* Content Section - visible immediately */}
                <div className="p-8 flex flex-col flex-grow">
                  <p className="text-gold-500 text-[10px] font-bold uppercase tracking-widest mb-2">{dest.tagline}</p>
                  <h3 className="font-display text-3xl text-navy-950 mb-3">{dest.region}</h3>
                  <p className="text-slate-600 font-medium text-sm mb-4">{dest.bestFor}</p>
                  
                  <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow">{dest.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {dest.highlights?.map((h, hi) => (
                      <span key={hi} className="bg-slate-100 text-slate-600 text-[11px] font-medium px-3 py-1 rounded-full">{h}</span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SilverseaDestinationScroll;
