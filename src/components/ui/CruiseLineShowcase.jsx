import React, { useState } from 'react';
import FadeIn from './FadeIn';

/**
 * CruiseLineShowcase
 *
 * A horizontal scrollable showcase of cruise lines with star ratings,
 * best-for tags, and image backgrounds. Unique alternative to ThreeColumnGrid.
 */
const CruiseLineShowcase = ({ title, eyebrow, subtitle, items = [], images = [] }) => {
  const [hovered, setHovered] = useState(null);

  const luxuryBadges = [
    { label: 'Premium Luxury', color: 'bg-gold-400 text-navy-950' },
    { label: 'Boutique Luxury', color: 'bg-teal-700 text-white' },
    { label: 'Ultra-Luxury', color: 'bg-navy-800 text-white' },
    { label: 'Premium', color: 'bg-slate-600 text-white' },
    { label: 'Contemporary', color: 'bg-sky-700 text-white' },
    { label: 'Inclusive Luxury', color: 'bg-purple-700 text-white' },
    { label: 'Ultra-Luxury', color: 'bg-rose-700 text-white' },
  ];

  return (
    <section className="w-full py-20 md:py-28 bg-ice-50">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Header */}
        <FadeIn>
          <div className="text-center mb-14">
            {eyebrow && (
              <span className="font-sans text-xs uppercase tracking-[0.25em] text-gold-400 mb-4 block">
                {eyebrow}
              </span>
            )}
            <h2 className="font-display text-4xl md:text-5xl text-navy-800 mb-4">{title}</h2>
            <div className="w-16 h-px bg-gold-400 mx-auto mb-6" />
            {subtitle && (
              <p className="font-sans text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>
        </FadeIn>

        {/* Grid Container */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item, idx) => {
              const img = images[idx % images.length];
              const badge = luxuryBadges[idx % luxuryBadges.length];
              const isHov = hovered === idx;

              return (
                <FadeIn key={idx} delay={idx * 0.07}>
                  <div
                    className="relative rounded-2xl overflow-hidden cursor-pointer group w-full"
                    style={{ height: '420px' }}
                    onMouseEnter={() => setHovered(idx)}
                    onMouseLeave={() => setHovered(null)}
                  >
                    {/* Background image */}
                    {img && (
                      <img
                        src={img}
                        alt={item?.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                      />
                    )}
                    {/* Overlay */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-t transition-all duration-500 ${
                        isHov
                          ? 'from-navy-950 via-navy-950/70 to-navy-950/30'
                          : 'from-navy-950 via-navy-950/50 to-transparent'
                      }`}
                    />

                    {/* Badge top-left */}
                    <div className="absolute top-4 left-4">
                      <span
                        className={`font-sans text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full ${badge.color}`}
                      >
                        {item?.category || badge.label}
                      </span>
                    </div>

                    {/* Content bottom */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="font-display text-2xl text-white mb-2">{item?.title}</h3>

                      {/* Description — expands on hover */}
                      <div
                        className={`overflow-hidden transition-all duration-500 ${
                          isHov ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                        }`}
                      >
                        <p className="font-sans text-sm text-white/85 leading-relaxed mb-4">
                          {item?.description}
                        </p>
                      </div>

                      {/* "Best for" tag — always visible */}
                      {item?.description && (
                        <div
                          className={`transition-all duration-300 ${
                            isHov ? 'opacity-0 max-h-0' : 'opacity-100 max-h-12'
                          } overflow-hidden`}
                        >
                          <p className="font-sans text-xs text-white/60 line-clamp-2">
                            {item.description}
                          </p>
                        </div>
                      )}

                      <div className="mt-3 w-10 h-px bg-gold-400 transition-all duration-300 group-hover:w-full" />
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CruiseLineShowcase;
