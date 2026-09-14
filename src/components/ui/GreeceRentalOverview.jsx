import React from 'react';
import FadeIn from './FadeIn';

/**
 * GreeceRentalOverview
 * Premium 50:50 text + image blend section for the Rental Car Guide.
 */
const GreeceRentalOverview = ({ image }) => {
  return (
    <section id="rental-overview" className="w-full bg-white py-24 border-b border-slate-200">
      <div className="max-w-[1280px] mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text Block */}
          <FadeIn>
            <div className="text-left space-y-6">
              <span className="text-xs uppercase tracking-[0.25em] text-[#c9a15c] font-bold block">
                THE TRANSPORTATION DILEMMA
              </span>
              <h2 className="font-display text-3xl md:text-4xl text-navy-950 leading-tight">
                Do You Need a Rental Car in Greece?
              </h2>
              <p className="font-sans text-slate-600 font-light leading-relaxed">
                Do you need a rental car in Greece? Not necessarily. For many travelers, especially those visiting Athens, Santorini, Mykonos or smaller Greek islands, a rental car can be more of a hassle than a benefit. But on larger islands such as Crete, Rhodes, Corfu and Kefalonia, having your own vehicle—or arranging a private driver—can make a significant difference.
              </p>
              <div className="bg-[#c9a15c]/5 border-l-4 border-[#c9a15c] p-4 rounded-r-lg mt-4">
                <span className="text-xs font-sans font-bold tracking-wider text-[#c9a15c] uppercase block mb-1">
                  The Luxury Traveler's Question
                </span>
                <p className="text-xs text-slate-600 leading-relaxed font-light">
                  "Do you need a rental car, or do you simply need effortless private transportation?" That distinction can completely change how you plan a Greek vacation. A thoughtfully designed luxury itinerary may combine private airport transfers, ferries, domestic flights, private drivers, and rental cars only when they genuinely improve the experience.
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Right: Scenic Image */}
          <FadeIn delay={0.2}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#c9a15c]/10 to-transparent rounded-3xl blur-2xl z-0"></div>
              <img
                src={image}
                alt="Scenic Greek road overlooking coast"
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

export default GreeceRentalOverview;
