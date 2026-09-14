import React from 'react';
import FadeIn from './FadeIn';

/**
 * GreeceSantoriniMykonosOverview
 * 50:50 text + image layout comparing Santorini and Mykonos.
 */
const GreeceSantoriniMykonosOverview = ({ image }) => {
  return (
    <section id="santorini-mykonos-overview" className="w-full bg-white py-24 border-b border-slate-200">
      <div className="max-w-[1280px] mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <FadeIn>
            <div className="text-left space-y-6">
              <span className="text-xs uppercase tracking-[0.25em] text-blue-600 font-bold block">
                THE ULTIMATE AEGEAN CHOICE
              </span>
              <h2 className="font-display text-3xl md:text-4xl text-navy-950 leading-tight">
                Santorini or Mykonos?
              </h2>
              <p className="font-sans text-slate-600 font-light leading-relaxed">
                If you are planning your first luxury trip to Greece, this may be one of the most important decisions in your itinerary. Both islands are spectacular, offering exceptional hotels, private villas, dining, sailing, and scenery, but they deliver very different styles of travel.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                <div className="border-l-2 border-amber-500 pl-4">
                  <h4 className="font-display text-base font-semibold text-navy-950 mb-1">
                    Santorini is about the view.
                  </h4>
                  <p className="text-xs text-slate-500 font-light leading-relaxed">
                    Caldera • Sunset • Romance • Wine • Privacy • Cinematic Scenery
                  </p>
                </div>
                <div className="border-l-2 border-blue-500 pl-4">
                  <h4 className="font-display text-base font-semibold text-navy-950 mb-1">
                    Mykonos is about the lifestyle.
                  </h4>
                  <p className="text-xs text-slate-500 font-light leading-relaxed">
                    Beach • Yacht • Beach Club • Shopping • Dining • Nightlife
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Right: Scenic Image */}
          <FadeIn delay={0.2}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-amber-500/10 to-transparent rounded-3xl blur-2xl z-0"></div>
              <img
                src={image}
                alt="Beautiful Greek island scenery"
                className="relative z-10 w-full h-[460px] object-cover rounded-3xl shadow-xl border border-slate-100"
                loading="lazy"
              />
            </div>
          </FadeIn>
        </div>

      </div>
    </section>
  );
};

export default GreeceSantoriniMykonosOverview;
