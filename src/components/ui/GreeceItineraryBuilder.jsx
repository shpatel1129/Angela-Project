import React, { useState } from 'react';

/**
 * GreeceItineraryBuilder
 * Renders Part 4 (How to build a seamless luxury itinerary).
 * Features:
 * - A clean, tabbed layout allowing the user to select and view the 3 luxury itineraries.
 * - Staggered layout with a dark container for key takeaways.
 */
const GreeceItineraryBuilder = ({ itineraries = [], image }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-24 bg-slate-50 border-t border-b border-slate-200/60">
      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-sans font-bold tracking-[0.2em] text-blue-600 uppercase mb-4 block">
            ITINERARY ARCHITECTURE
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-light text-navy-950 mb-6">
            Seamless Luxury Itineraries
          </h2>
          <p className="font-sans text-slate-600 font-light leading-relaxed">
            Our luxury travel advisors have engineered these recommended templates to maximize relaxation and reduce transit friction.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Tab Selectors & Active Tab Content */}
          <div className="lg:col-span-8 space-y-8 text-left">
            {/* Style override to hide scrollbars */}
            <style dangerouslySetInnerHTML={{__html: `
              .no-scrollbar::-webkit-scrollbar {
                display: none;
              }
              .no-scrollbar {
                -ms-overflow-style: none;  /* IE and Edge */
                scrollbar-width: none;  /* Firefox */
              }
            `}} />

            {/* Tabs Row */}
            <div className="flex border-b border-slate-200 gap-4 overflow-x-auto pb-1 no-scrollbar">
              {itineraries.map((it, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`py-4 px-6 text-sm font-sans font-medium uppercase tracking-wider border-b-2 whitespace-nowrap transition-all ${
                    activeTab === idx
                      ? 'border-blue-600 text-blue-600 font-semibold'
                      : 'border-transparent text-slate-500 hover:text-navy-900'
                  }`}
                >
                  {it.title.split(' (')[0]}
                </button>
              ))}
            </div>

            {/* Active Content Box */}
            <div className="p-8 bg-white border border-slate-200/80 rounded-2xl shadow-sm space-y-6">
              <h3 className="font-display text-2xl font-light text-navy-950">
                {itineraries[activeTab]?.title}
              </h3>
              <p className="font-sans text-slate-600 font-light leading-relaxed text-sm md:text-base">
                {itineraries[activeTab]?.description}
              </p>
              
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                <span className="text-xs font-sans font-bold tracking-wider text-blue-700 uppercase block mb-1">
                  Advisor Tip
                </span>
                <p className="text-xs text-slate-600 leading-relaxed font-light">
                  Always fly directly into Athens, spend your initial nights adjusting to the time zone, then transfer smoothly to the islands. This minimizes travel fatigue on your first days.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Key Takeaway Box & Image */}
          <div className="lg:col-span-4 space-y-8">
            {/* Image */}
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-slate-200">
              <img
                src={image}
                alt="Scenic Greek island harbor"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Key Takeaway Card */}
            <div className="p-6 bg-navy-950 text-white rounded-2xl shadow-xl border border-blue-900/30 text-left">
              <span className="text-xs font-sans font-bold tracking-wider text-blue-400 uppercase mb-2 block">
                KEY TAKEAWAY
              </span>
              <p className="font-sans text-xs text-slate-300 font-light leading-relaxed">
                "Minimize hotel changes and maximize local depth. Spend at least 3-4 nights on each island to truly experience the culture, dining, and scenery."
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default GreeceItineraryBuilder;
