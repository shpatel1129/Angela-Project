import React from 'react';

/**
 * GreeceFirstTripHero
 * A completely fresh, premium asymmetrical hero layout.
 * Features:
 * - Asymmetrical grid with a wide, text container floating on a dark background.
 * - Right side displays a double-image overlapping stack (large cruise ship image, small caldera overlay).
 */
const GreeceFirstTripHero = ({ title, subtitle, description, backgroundImage, overlayImage, badge, ctaText = "Request a Quote", ctaLink = "#" }) => {
  return (
    <header className="relative w-full min-h-[90vh] bg-slate-950 flex flex-col justify-center overflow-hidden border-b border-slate-900">
      {/* Abstract Background Accents */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1440px] mx-auto w-full px-6 py-12 md:py-20 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Side: Editorial Content */}
        <div className="lg:col-span-6 text-left space-y-6">
          {badge && (
            <span className="inline-block bg-blue-900/40 border border-blue-500/30 text-blue-400 text-[10px] font-sans font-bold tracking-[0.2em] uppercase px-3 py-1.5 rounded-md">
              {badge}
            </span>
          )}

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight tracking-tight">
            {title}
          </h1>

          <p className="font-sans text-sm md:text-base text-blue-200/60 font-semibold tracking-wider uppercase">
            {subtitle}
          </p>

          <p className="font-sans text-slate-300 font-light leading-relaxed max-w-xl">
            {description}
          </p>

          <div className="pt-4 flex flex-col sm:flex-row gap-4">
            <a
              href={ctaLink}
              className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-500 text-white font-sans text-xs font-semibold uppercase tracking-wider px-8 py-4 rounded-lg shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
            >
              {ctaText}
            </a>
            <a
              href="#first-trip-glance"
              className="inline-flex items-center justify-center border border-slate-800 hover:border-slate-600 text-slate-400 hover:text-white font-sans text-xs font-semibold uppercase tracking-wider px-8 py-4 rounded-lg transition-colors"
            >
              Compare Destinations
            </a>
          </div>
        </div>

        {/* Right Side: Overlapping Image Stack */}
        <div className="lg:col-span-6 relative w-full h-[400px] sm:h-[480px]">
          {/* Main Large Image (Cruise Ship/Yacht) */}
          <div className="w-[85%] h-[85%] rounded-2xl overflow-hidden shadow-2xl border border-slate-800 relative z-10 group">
            <img
              src={backgroundImage}
              alt="Luxury Cruise Ship in Greece"
              className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Overlapping Small Image (Santorini View) */}
          <div className="absolute bottom-0 right-0 w-[45%] h-[45%] rounded-xl overflow-hidden shadow-2xl border-4 border-slate-950 z-20 group">
            <img
              src={overlayImage}
              alt="Santorini caldera view"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Status Label Overlay */}
          <div className="absolute top-6 right-6 bg-slate-950/80 backdrop-blur-md border border-slate-800 rounded-lg px-4 py-2 flex items-center gap-2 z-30">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
            <span className="text-[9px] font-sans font-bold tracking-widest text-slate-300 uppercase">
              First-Time Special
            </span>
          </div>
        </div>

      </div>
    </header>
  );
};

export default GreeceFirstTripHero;
