import React from 'react';
import FadeIn from './FadeIn';

/**
 * GreeceNaxosParosOverview
 * Premium 50:50 text + image blend section for the Naxos vs Paros Guide.
 */
const GreeceNaxosParosOverview = ({ image }) => {
  return (
    <section id="naxos-paros-overview" className="w-full bg-white py-24 border-b border-slate-200">
      <div className="max-w-[1280px] mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text Block */}
          <FadeIn>
            <div className="text-left space-y-6">
              <span className="text-xs uppercase tracking-[0.25em] text-[#c9a15c] font-bold block">
                THE NEIGHBORING RIVALS
              </span>
              <h2 className="font-display text-3xl md:text-4xl text-navy-950 leading-tight">
                Naxos vs Paros: Which Greek Island is Better?
              </h2>
              <p className="font-sans text-slate-600 font-light leading-relaxed">
                Naxos or Paros? If you are planning your luxury trip to Greece, choosing between these two neighboring Cycladic gems can be a defining decision. While both offer stunning beaches, direct ferry links, and luxury accommodations, they present contrasting styles of Greek island living.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                <div className="border-l-2 border-[#c9a15c] pl-4">
                  <h4 className="font-display text-base font-semibold text-navy-950 mb-1">
                    Naxos is about the authenticity.
                  </h4>
                  <p className="text-xs text-slate-500 font-light leading-relaxed">
                    Long Sandy Beaches • Family Travel • Mountain Villages • Gastronomy • Privacy
                  </p>
                </div>
                <div className="border-l-2 border-[#c9a15c] pl-4">
                  <h4 className="font-display text-base font-semibold text-navy-950 mb-1">
                    Paros is about the lifestyle.
                  </h4>
                  <p className="text-xs text-slate-500 font-light leading-relaxed">
                    Boutique Hotels • Naoussa Port • Sailing • Watersports • Nightlife • Design
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Right: Scenic Image */}
          <FadeIn delay={0.2}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#c9a15c]/10 to-transparent rounded-3xl blur-2xl z-0"></div>
              <img
                src={image}
                alt="Scenic Cycladic coast and waters"
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

export default GreeceNaxosParosOverview;
