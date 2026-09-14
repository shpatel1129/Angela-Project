import React, { useState } from 'react';
import FadeIn from './FadeIn';

/**
 * CreteCycladesItineraries
 * Tabbed itinerary blueprints comparing three luxury travel pathways.
 */
const CreteCycladesItineraries = ({ itineraries = [], mapImage }) => {
  const [activeItinerary, setActiveItinerary] = useState(0);

  return (
    <section id="crete-cyclades-itineraries" className="py-24 bg-white border-b border-slate-200 text-left">
      <div className="max-w-[1280px] mx-auto px-6 space-y-20">
        
        {/* Top: Header Split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <FadeIn>
            <div className="space-y-6">
              <span className="text-xs uppercase tracking-[0.25em] text-[#c9a15c] font-bold block">
                ITINERARY BLUEPRINTS
              </span>
              <h2 className="font-display text-3xl md:text-4xl text-navy-950 leading-tight font-light">
                Luxury Greece Itinerary Strategies
              </h2>
              <p className="font-sans text-slate-600 font-light leading-relaxed">
                Whether you have a single week to explore or a full fortnight for a combined vacation, Trips & Ships designs custom routes that maximize relaxation and minimize transit fatigue.
              </p>
              
              <div className="bg-[#c9a15c]/5 border-l-4 border-[#c9a15c] p-6 rounded-r-xl space-y-3">
                <span className="text-xs font-sans font-bold tracking-wider text-[#c9a15c] uppercase block">
                  Angela's Logistics Rule
                </span>
                <p className="text-xs text-slate-600 font-light leading-relaxed">
                  "Never overload a transfer day. A smart itinerary prioritizes destination depth over collecting ports. Spending three or four nights in one luxury resort provides a far more premium experience than changing hotels every other day."
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#c9a15c]/10 to-transparent rounded-3xl blur-2xl z-0"></div>
              <img
                src={mapImage}
                alt="Greece travel planning map illustration"
                className="relative z-10 w-full h-[380px] object-cover rounded-3xl shadow-xl border border-slate-100"
                loading="lazy"
              />
            </div>
          </FadeIn>
        </div>

        {/* Tabbed Layout */}
        <div className="border-t border-slate-100 pt-16">
          <style dangerouslySetInnerHTML={{__html: `
            .no-scrollbar::-webkit-scrollbar { display: none; }
            .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
          `}} />

          {/* Tab Buttons */}
          <div className="flex border-b border-slate-200 gap-4 overflow-x-auto pb-1 no-scrollbar mb-10">
            {itineraries.map((it, idx) => (
              <button
                key={idx}
                onClick={() => setActiveItinerary(idx)}
                className={`py-3 px-5 text-xs font-sans font-medium uppercase tracking-wider border-b-2 whitespace-nowrap transition-all ${
                  activeItinerary === idx
                    ? 'border-[#c9a15c] text-[#c9a15c]'
                    : 'border-transparent text-slate-400 hover:text-slate-600'
                }`}
              >
                {it.title}
              </button>
            ))}
          </div>

          {/* Active Tab Panel */}
          <div className="bg-slate-50 border border-slate-100 p-8 rounded-2xl">
            <h4 className="font-display text-lg font-bold text-navy-950 mb-2">
              {itineraries[activeItinerary].title}
            </h4>
            <p className="font-sans text-xs text-slate-500 font-light leading-relaxed mb-6">
              {itineraries[activeItinerary].summary}
            </p>

            <div className="space-y-6">
              {itineraries[activeItinerary].days.map((d, idx) => (
                <div key={idx} className="flex gap-6 items-start">
                  <span className="font-display text-xs font-bold uppercase tracking-wider text-[#c9a15c] bg-[#c9a15c]/10 px-3 py-1 rounded-full whitespace-nowrap font-medium">
                    {d.day}
                  </span>
                  <div>
                    <h5 className="font-display text-base font-semibold text-navy-950 mb-1">
                      {d.title}
                    </h5>
                    <p className="font-sans text-xs text-slate-600 font-light leading-relaxed">
                      {d.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CreteCycladesItineraries;
