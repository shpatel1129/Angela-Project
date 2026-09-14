import React from 'react';

/**
 * GreeceLuxuryHero
 * A unique, high-end split hero design for the Greece Luxury Travel Guide.
 * Features:
 * - Left side: Navy card with gold border accents, modern display serif typography, and premium description.
 * - Right side: Full-height cruise ship/yacht photo with scale-in animation and subtle overlays.
 */
const GreeceLuxuryHero = ({ title, subtitle, description, backgroundImage, badge, ctaText = "Request a Quote", ctaLink = "#" }) => {
  return (
    <header className="relative w-full min-h-[90vh] bg-slate-950 flex flex-col justify-center overflow-hidden border-b border-slate-900">
      {/* Background Decorative Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />

      <div className="max-w-[1440px] mx-auto w-full px-6 py-12 md:py-20 relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        
        {/* Left Column: Text Content Card */}
        <div className="w-full lg:w-5/12 flex flex-col justify-center text-left">
          <div className="relative p-8 md:p-12 bg-navy-950/90 border border-blue-900/30 rounded-2xl shadow-2xl backdrop-blur-md">
            {/* Gold Corner Accents */}
            <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-blue-500" />
            <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-blue-500" />
            <div className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-blue-500" />
            <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-blue-500" />

            {badge && (
              <span className="inline-block text-[11px] font-sans font-bold tracking-[0.25em] text-blue-400 uppercase mb-6">
                {badge}
              </span>
            )}
            
            <h1 className="font-display text-4xl md:text-5xl font-light text-white leading-tight tracking-tight mb-6">
              {title}
            </h1>

            <div className="w-16 h-0.5 bg-blue-500 mb-6" />

            <p className="font-sans text-sm md:text-base text-blue-200/70 font-semibold tracking-wide uppercase mb-4">
              {subtitle}
            </p>

            <p className="font-sans text-slate-300 font-light leading-relaxed mb-8">
              {description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={ctaLink}
                className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-500 text-white font-sans text-xs font-semibold uppercase tracking-wider px-8 py-4 rounded-lg shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
              >
                {ctaText}
              </a>
              <a
                href="#greece-glance"
                className="inline-flex items-center justify-center border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white font-sans text-xs font-semibold uppercase tracking-wider px-8 py-4 rounded-lg transition-colors"
              >
                Explore Guide
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Premium Image Frame */}
        <div className="w-full lg:w-7/12 relative aspect-[4/3] lg:aspect-[16/11] rounded-2xl overflow-hidden shadow-2xl border border-blue-900/20 group">
          <img
            src={backgroundImage}
            alt="Luxury cruise ship in Greece"
            className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
          />
          {/* Elegant Dark Vignette Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-slate-950/20 pointer-events-none" />
          
          {/* Live Cruise Status Tag */}
          <div className="absolute bottom-6 left-6 bg-slate-950/80 backdrop-blur-md border border-slate-800 rounded-lg px-4 py-2 flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500"></span>
            </span>
            <span className="text-[11px] font-sans font-bold tracking-wider text-slate-300 uppercase">
              Trips & Ships Exclusive Route
            </span>
          </div>
        </div>

      </div>
    </header>
  );
};

export default GreeceLuxuryHero;
