import React from 'react';
import { Link } from 'react-router-dom';
import MasterImage from './MasterImage';

/**
 * InteractivePillarHubGrid
 * Matching the exact AmaWaterways / Expedition Cruises reference design.
 * (https://www.tripsandships.com/amawaterways-ultimate-guide)
 */
const InteractivePillarHubGrid = ({
  title = "Where You Can Go in Greece",
  subtitle = "From ancient monuments to secluded Aegean coves, explore our curated destination guides and island comparisons.",
  items = [],
  variant = "destination"
}) => {
  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200/60">
      <div className="max-w-[1280px] mx-auto px-6">
        {(title || subtitle) && (
          <div className="text-center max-w-3xl mx-auto mb-16">
            {title && (
              <h2 className="font-display text-3xl md:text-5xl font-light text-navy-950 mb-6 tracking-tight">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="font-sans text-lg md:text-xl text-slate-600 font-light leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, idx) => {
            const hasLinks = item.links && item.links.length > 0;
            const badgeCount = item.badgeCount || (hasLinks ? item.links.length : 0);

            return (
              <div
                key={idx}
                className="rounded-xl border border-slate-200/80 bg-white shadow-sm group hover:shadow-2xl transition-all duration-300 overflow-hidden relative flex flex-col h-full"
              >
                {/* Top Image & Overlay Section */}
                <div className="relative overflow-hidden w-full h-64 sm:h-72 bg-slate-900 flex-shrink-0">
                  <MasterImage
                    src={item.image}
                    alt={item.title || "Destination photo"}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    placeholderLabel={item.placeholderLabel || item.title || "DESTINATION IMAGE"}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-40 group-hover:opacity-90 transition-opacity duration-300 pointer-events-none" />

                  {/* Pulsing Badge (Top Right) */}
                  {badgeCount > 0 && (
                    <div className="absolute top-3 right-3 bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-full tracking-wider shadow-lg z-20 flex items-center gap-1.5">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-white"></span>
                      </span>
                      <span>{badgeCount} {badgeCount === 1 ? 'PAGE' : 'PAGES'}</span>
                    </div>
                  )}

                  {/* Buttons Overlay on Top of Image (Matching Screenshot 2) */}
                  <div className="absolute inset-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex flex-col justify-center gap-2 overflow-y-auto bg-black/40 backdrop-blur-[1px]">
                    <span className="inline-flex items-center justify-center bg-white/90 text-navy-950/90 font-bold text-[11px] sm:text-xs uppercase tracking-wider py-2 px-3 rounded-lg shadow cursor-default">
                      {item.actionLabel || "EXPLORE THIS DESTINATION"}
                    </span>

                    {hasLinks && (
                      <div className="flex flex-col gap-1.5">
                        {item.links.map((link, lIdx) => (
                          <Link
                            key={lIdx}
                            to={link.url || "#"}
                            className="inline-flex items-center justify-center bg-navy-950 text-white hover:bg-blue-600 transition-colors duration-200 py-2 px-3 rounded-lg text-xs sm:text-[13px] font-medium shadow-md text-center line-clamp-1 border border-white/5"
                          >
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Content (Always visible below the image) */}
                <div className="p-6 flex flex-col flex-grow">
                  {item.category && (
                    <span className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-1.5 block">
                      {item.category}
                    </span>
                  )}
                  <h3 className="text-xl font-semibold text-navy-950 mb-3 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-sm font-light flex-grow">
                    {item.description}
                  </p>

                  {item.mainUrl && (
                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                      <Link
                        to={item.mainUrl}
                        className="text-xs font-semibold tracking-wider uppercase text-navy-900 hover:text-blue-600 flex items-center gap-1.5 transition-colors"
                      >
                        <span>Read Full Guide</span>
                        <span className="text-base leading-none">→</span>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default InteractivePillarHubGrid;
