import React from 'react';
import FadeIn from './FadeIn';

/**
 * GreeceLuxuryOverview
 * A premium 50:50 text and image blend section.
 * Renders the introductory luxury proposition and bullet points.
 */
const GreeceLuxuryOverview = ({ definitionPoints = [], image }) => {
  return (
    <section id="greece-overview" className="w-full bg-white py-24 border-b border-slate-200">
      <div className="max-w-[1280px] mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text Inclusions */}
          <FadeIn>
            <div className="text-left space-y-6">
              <span className="text-xs uppercase tracking-[0.25em] text-blue-600 font-bold block">
                THE TRAVEL PROPOSITION
              </span>
              <h2 className="font-display text-3xl md:text-4xl text-navy-950 leading-tight">
                Why Greece is Europe's Finest Luxury Escape
              </h2>
              <p className="font-sans text-slate-600 font-light leading-relaxed">
                Greece offers a rare combination of experiences that luxury travelers seek: ancient history, brilliant blue seas, whitewashed villages, and organic cuisine. In Greece, true luxury is personal, flexible, and immersive.
              </p>
              
              {/* List of definition points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {definitionPoints.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="text-blue-500 font-bold mt-0.5">✓</span>
                    <span className="font-sans text-xs text-slate-600 font-light leading-relaxed">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Right: Blended Image */}
          <FadeIn delay={0.2}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500/10 to-transparent rounded-3xl blur-2xl z-0"></div>
              <img
                src={image}
                alt="Luxury yacht sailing Greek islands"
                className="relative z-10 w-full h-[440px] object-cover rounded-3xl shadow-xl border border-slate-100"
                loading="lazy"
              />
            </div>
          </FadeIn>
        </div>

      </div>
    </section>
  );
};

export default GreeceLuxuryOverview;
