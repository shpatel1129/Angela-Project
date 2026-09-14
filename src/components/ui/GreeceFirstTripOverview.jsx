import React from 'react';
import FadeIn from './FadeIn';

/**
 * GreeceFirstTripOverview
 * A premium 50:50 text and image blend section for the First Trip to Greece Guide.
 */
const GreeceFirstTripOverview = ({ image }) => {
  return (
    <section id="first-trip-overview" className="w-full bg-white py-24 border-b border-slate-200">
      <div className="max-w-[1280px] mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text Block */}
          <FadeIn>
            <div className="text-left space-y-6">
              <span className="text-xs uppercase tracking-[0.25em] text-blue-600 font-bold block">
                THE DECISION CHALLENGE
              </span>
              <h2 className="font-display text-3xl md:text-4xl text-navy-950 leading-tight">
                Why Greece is Difficult to Choose for a First Trip
              </h2>
              <p className="font-sans text-slate-600 font-light leading-relaxed">
                Greece can look deceptively simple on a map. You see Athens, Santorini, Mykonos, Crete and a collection of beautiful islands. Then you start researching, and suddenly you are choosing among dozens of islands with completely different personalities.
              </p>
              <p className="font-sans text-slate-600 font-light leading-relaxed text-sm">
                That variety is one of Greece's greatest strengths—and one of the reasons first-time travelers can easily create an itinerary that looks impressive on paper but feels exhausting in reality.
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg mt-4">
                <span className="text-xs font-sans font-bold tracking-wider text-blue-700 uppercase block mb-1">
                  Our Recommendation
                </span>
                <p className="text-xs text-slate-600 leading-relaxed font-light">
                  Focus on fewer moves. Better hotels. Better guides. Longer lunches. More memorable experiences. That is how your first Greek vacation becomes truly exceptional.
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Right: Blended Image */}
          <FadeIn delay={0.2}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500/10 to-transparent rounded-3xl blur-2xl z-0"></div>
              <img
                src={image}
                alt="Scenic Greek harbor panorama"
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

export default GreeceFirstTripOverview;
