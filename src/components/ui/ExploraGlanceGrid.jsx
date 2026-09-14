import React from 'react';
import FadeIn from './FadeIn';

const ExploraGlanceGrid = () => {
  const comparisons = [
    { category: "Overall Luxury", silversea: "Ultra-luxury", explora: "Contemporary ultra-luxury" },
    { category: "Service Style", silversea: "Highly personalized", explora: "Relaxed and contemporary" },
    { category: "Butler Service", silversea: "Major strength", explora: "Different service model" },
    { category: "Ship Design", silversea: "Elegant and intimate", explora: "Contemporary and residential" },
    { category: "Suites", silversea: "All-suite luxury", explora: "Spacious ocean-front suites" },
    { category: "Dining", silversea: "Destination-focused", explora: "Contemporary and varied" },
    { category: "Wellness", silversea: "Strong", explora: "Major focus" },
    { category: "Expedition Travel", silversea: "Major strength", explora: "Limited" },
    { category: "Antarctica", silversea: "Excellent fit", explora: "Not the primary choice" },
    { category: "Mediterranean", silversea: "Excellent", explora: "Excellent" },
    { category: "Destination Immersion", silversea: "Major strength", explora: "Strong" },
    { category: "Ship as Destination", silversea: "Strong", explora: "Major strength" }
  ];

  return (
    <section className="w-full bg-white py-24 border-b border-slate-200">
      <div className="max-w-[1280px] mx-auto px-6">
        
        <div className="max-w-3xl mx-auto text-center mb-16">
          <FadeIn>
            <span className="text-xs uppercase tracking-[0.25em] text-gold-500 font-bold mb-4 block">
              At A Glance
            </span>
            <h2 className="font-display text-3xl md:text-5xl text-navy-950 mb-6 leading-tight">
              Silversea vs Explora Journeys Comparison
            </h2>
            <p className="font-sans text-slate-600 font-light leading-relaxed">
              A side-by-side overview of the key differences between these two luxury cruise brands.
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={0.15}>
          <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-lg">
            {/* Header */}
            <div className="grid grid-cols-3 bg-navy-950 text-white">
              <div className="px-6 py-4 text-xs uppercase tracking-widest font-bold border-r border-slate-700">Category</div>
              <div className="px-6 py-4 text-xs uppercase tracking-widest font-bold border-r border-slate-700 text-gold-400">Silversea</div>
              <div className="px-6 py-4 text-xs uppercase tracking-widest font-bold text-gold-400">Explora Journeys</div>
            </div>
            {/* Rows */}
            {comparisons.map((row, idx) => (
              <div key={idx} className={`grid grid-cols-3 ${idx % 2 === 0 ? 'bg-slate-50' : 'bg-white'} hover:bg-gold-50 transition-colors duration-200`}>
                <div className="px-6 py-4 text-sm font-display font-medium text-navy-950 border-r border-slate-100">{row.category}</div>
                <div className="px-6 py-4 text-sm font-sans text-slate-600 font-light border-r border-slate-100">{row.silversea}</div>
                <div className="px-6 py-4 text-sm font-sans text-slate-600 font-light">{row.explora}</div>
              </div>
            ))}
          </div>
        </FadeIn>

      </div>
    </section>
  );
};

export default ExploraGlanceGrid;
