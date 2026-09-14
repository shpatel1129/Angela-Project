import React from 'react';
import FadeIn from './FadeIn';

/**
 * GreeceRentalPractical
 * Renders the hotel connection guidelines, budgets, and caution panels.
 */
const GreeceRentalPractical = ({ mapImage }) => {
  return (
    <section id="rental-practical" className="py-24 bg-white">
      <div className="max-w-[1280px] mx-auto px-6 space-y-20">
        
        {/* Top Split Block */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start text-left">
          
          {/* Left Panel: Checklist */}
          <FadeIn>
            <div className="space-y-6">
              <span className="text-xs uppercase tracking-[0.25em] text-[#c9a15c] font-bold block">
                LOGISTICS AUDIT
              </span>
              <h2 className="font-display text-3xl md:text-4xl text-navy-950 leading-tight font-light">
                The Hotel-Transportation Connection
              </h2>
              <p className="font-sans text-slate-600 font-light leading-relaxed">
                Before booking any Greek hotel or villa, always evaluate accessibility. Pedestrian town centers require zero driving, whereas remote clifftop or coastal properties make dedicated transportation crucial.
              </p>

              <div className="space-y-3 pt-4 border-t border-slate-100">
                <span className="text-[10px] font-sans font-bold tracking-wider text-slate-400 uppercase block mb-1">
                  CRITICAL QUESTIONS TO ASK
                </span>
                <div className="flex gap-2 items-center text-xs font-sans text-slate-600">
                  <span className="text-[#c9a15c] font-bold">?</span>
                  <span>Can a normal private transfer vehicle reach the hotel entrance?</span>
                </div>
                <div className="flex gap-2 items-center text-xs font-sans text-slate-600">
                  <span className="text-[#c9a15c] font-bold">?</span>
                  <span>Does the property offer secure on-site parking for rental cars?</span>
                </div>
                <div className="flex gap-2 items-center text-xs font-sans text-slate-600">
                  <span className="text-[#c9a15c] font-bold">?</span>
                  <span>What private excursions or transfer shuttles are pre-arranged?</span>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Right Panel: Map image */}
          <FadeIn delay={0.2}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#c9a15c]/10 to-transparent rounded-3xl blur-2xl z-0"></div>
              <img
                src={mapImage}
                alt="Greek island groups travel map"
                className="relative z-10 w-full h-[380px] object-cover rounded-3xl shadow-xl border border-slate-100"
                loading="lazy"
              />
            </div>
          </FadeIn>

        </div>

        {/* Bottom Warning/Budget Box */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          <div className="bg-slate-50 border border-slate-100 p-8 rounded-2xl">
            <span className="text-xs font-sans font-bold tracking-wider text-[#c9a15c] uppercase block mb-3">
              CAUTION WARNING
            </span>
            <h4 className="font-display text-xl font-bold text-navy-950 mb-3">
              The Remote Villa Trap
            </h4>
            <p className="font-sans text-xs text-slate-600 font-light leading-relaxed">
              Booking a private clifftop villa without pre-booking transportation is a common luxury-travel mistake. You may arrive to discover limited taxi availability, difficult unpaved road access, and no food delivery. Always secure your transfers or rental cars at the same moment you book lodging.
            </p>
          </div>

          <div className="bg-navy-950 text-white p-8 rounded-2xl border border-slate-800">
            <span className="text-xs font-sans font-bold tracking-wider text-[#c9a15c] uppercase block mb-3">
              ADVISOR BENEFITS
            </span>
            <h4 className="font-display text-xl font-bold text-white mb-3">
              Seamless Greece Travel
            </h4>
            <p className="font-sans text-xs text-slate-300 font-light leading-relaxed">
              Planning transportation isn't simply about hiring a vehicle. Trips & Ships coordinates the entire journey—combining first-class ferry seats, private transfers, domestic flights, and private drivers to eliminate friction. Let our connections make your Greek vacation effortless.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default GreeceRentalPractical;
