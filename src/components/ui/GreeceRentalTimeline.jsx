import React from 'react';
import FadeIn from './FadeIn';

/**
 * GreeceRentalTimeline
 * Renders the transportation decision formula as a vertical/horizontal timeline path.
 */
const GreeceRentalTimeline = ({ image }) => {
  const steps = [
    {
      label: "Step 1: Destination Scope",
      title: "Assess Island/City Scale",
      desc: "Is it compact (Santorini, Mykonos) where transfers are easy, or vast (Crete, Corfu) where a dedicated vehicle changes the exploration layout?"
    },
    {
      label: "Step 2: Hotel Location",
      title: "Evaluate Access & Infrastructure",
      desc: "Centrally located town hotels or pedestrian harbors need zero cars; secluded villas or remote beach resorts make dedicated transport critical."
    },
    {
      label: "Step 3: Travel Style",
      title: "Weigh Independence vs Relaxation",
      desc: "Do you want to focus on navigating and finding parking, or do you want a professional private driver-guide to manage logistics entirely?"
    },
    {
      label: "Step 4: Group & Logistics",
      title: "Map Out Group Size & Baggage",
      desc: "Luggage capacity and transfer coordination become much easier with private sprinters or minivans booked in advance for group arrivals."
    }
  ];

  return (
    <section id="rental-formula" className="py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-sans font-bold tracking-[0.2em] text-[#c9a15c] uppercase mb-4 block">
            DECISION PATHWAY
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-light text-navy-950 mb-6">
            The Greece Transportation Formula
          </h2>
          <p className="font-sans text-slate-600 font-light leading-relaxed">
            A step-by-step logic guide to help you determine your ideal transit configuration.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-left">
          
          {/* Left: Interactive list */}
          <div className="lg:col-span-7 space-y-8 relative">
            <div className="absolute left-6 top-4 bottom-4 w-[1px] bg-slate-200 z-0"></div>

            {steps.map((s, idx) => (
              <FadeIn key={idx} delay={idx * 0.15}>
                <div className="flex gap-6 items-start relative z-10">
                  <div className="w-12 h-12 rounded-full bg-[#c9a15c] text-white flex items-center justify-center font-display font-bold text-sm shadow-md flex-shrink-0">
                    {idx + 1}
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-[#c9a15c] block">
                      {s.label}
                    </span>
                    <h4 className="font-display text-base font-semibold text-navy-950">
                      {s.title}
                    </h4>
                    <p className="font-sans text-xs text-slate-500 font-light leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Right: Visual Image */}
          <div className="lg:col-span-5 relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#c9a15c]/10 to-transparent rounded-3xl blur-2xl z-0"></div>
            <img
              src={image}
              alt="Luxury family travel at Greece Acropolis ruins"
              className="relative z-10 w-full h-[400px] object-cover rounded-3xl shadow-xl border border-slate-100"
              loading="lazy"
            />
          </div>

        </div>

      </div>
    </section>
  );
};

export default GreeceRentalTimeline;
