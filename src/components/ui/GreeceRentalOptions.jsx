import React from 'react';
import FadeIn from './FadeIn';

/**
 * GreeceRentalOptions
 * Grid displaying the pros and details of the three main transport modes.
 */
const GreeceRentalOptions = ({ images = [] }) => {
  const options = [
    {
      title: "Option 1: The Rental Car",
      pros: ["Complete scheduling independence", "Cost-effective for long island stays", "Required for remote beaches"],
      description: "Best for Cretan highlands, Rhodes coastlines, Corfu exploring, or group family travel where luggage volume and timing flexibility are critical.",
      vibe: "Best for: Exploration & Independence"
    },
    {
      title: "Option 2: The Private Driver",
      pros: ["Zero navigation or parking stress", "Worry-free wine and culinary tastings", "Local insights and route efficiency"],
      description: "Best for sightseeing days, tours through archaeological ruins, or transferring between towns without navigating steep cliffside roads.",
      vibe: "Best for: Ultimate Comfort & Relaxation"
    },
    {
      title: "Option 3: Transfers & Connection Hop",
      pros: ["Seamless luggage handling", "Speedy 45-min domestic flights", "First-class ferry lounge access"],
      description: "Best for Santorini and Mykonos itineraries, where central hotels handle local transit, leaving you to explore on foot or charter private boats.",
      vibe: "Best for: Inter-Island Transitions"
    }
  ];

  return (
    <section id="rental-options" className="py-24 bg-white border-b border-slate-200">
      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-sans font-bold tracking-[0.2em] text-[#c9a15c] uppercase mb-4 block">
            TRANSPORT MODES
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-light text-navy-950 mb-6">
            Compare Your Luxury Travel Options
          </h2>
          <p className="font-sans text-slate-600 font-light leading-relaxed">
            Understanding the advantages of renting a vehicle versus arranging dedicated private drivers and transfers.
          </p>
        </div>

        {/* Options Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {options.map((opt, idx) => {
            const cardImg = images[idx % images.length];

            return (
              <FadeIn key={idx} delay={idx * 0.15}>
                <div className="bg-slate-50 border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between h-full text-left">
                  
                  {/* Image Header wrapper */}
                  <div className="h-44 overflow-hidden relative">
                    <img src={cardImg} alt={opt.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-slate-900/40"></div>
                    <span className="absolute bottom-3 left-5 text-xs font-sans font-bold text-sky-300 uppercase tracking-wider block">
                      {opt.vibe}
                    </span>
                  </div>

                  <div className="p-6 space-y-6 flex-grow flex flex-col justify-between">
                    <div className="space-y-4">
                      <h3 className="font-display text-xl font-bold text-navy-950">
                        {opt.title}
                      </h3>
                      <p className="font-sans text-xs text-slate-600 font-light leading-relaxed">
                        {opt.description}
                      </p>
                    </div>

                    <div className="border-t border-slate-100 pt-4 space-y-2">
                      <span className="text-[10px] font-sans font-bold tracking-wider text-slate-400 uppercase block mb-1">
                        KEY PROS
                      </span>
                      {opt.pros.map((p, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs font-sans text-slate-500">
                          <span className="text-[#c9a15c]">✓</span>
                          <span>{p}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </FadeIn>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default GreeceRentalOptions;
