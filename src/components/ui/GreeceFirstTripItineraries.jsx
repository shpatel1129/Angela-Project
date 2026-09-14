import React from 'react';

/**
 * GreeceFirstTripItineraries
 * Renders Part 3 (Planning Your Ideal Itinerary).
 * Layout: A clean, vertical timeline with visual bullet connections and gold highlights.
 */
const GreeceFirstTripItineraries = ({ itineraries = [] }) => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1000px] mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-sans font-bold tracking-[0.2em] text-blue-600 uppercase mb-4 block">
            ITINERARY BLUEPRINTS
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-light text-navy-950 mb-6">
            Recommended First-Time Itineraries
          </h2>
          <p className="font-sans text-slate-600 font-light leading-relaxed">
            Choose the travel speed and pairing of islands that matches the vacation experience you actually want.
          </p>
        </div>

        {/* Timeline Stack */}
        <div className="relative border-l border-slate-200 pl-8 ml-4 space-y-12 text-left">
          {itineraries.map((it, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline dot */}
              <div className="absolute -left-[41px] top-1 bg-white border-2 border-blue-500 w-5 h-5 rounded-full flex items-center justify-center group-hover:bg-blue-500 transition-colors">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full group-hover:bg-white" />
              </div>

              <div className="p-6 bg-slate-50 border border-slate-100 rounded-2xl group-hover:shadow-md transition-all duration-300">
                <span className="text-[10px] font-sans font-bold text-blue-600 uppercase tracking-wider mb-2 block">
                  OPTION {idx + 1}
                </span>
                <h3 className="font-display text-xl font-semibold text-navy-950 mb-4">
                  {it.title}
                </h3>
                <p className="font-sans text-xs text-slate-600 font-light leading-relaxed">
                  {it.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default GreeceFirstTripItineraries;
