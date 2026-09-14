import React, { useState } from 'react';
import FadeIn from './FadeIn';

/**
 * GreeceNaxosParosPractical
 * Combines seasons, logistics, hotel strategies, and itinerary recommendations.
 */
const GreeceNaxosParosPractical = ({ mapImage }) => {
  const [activeItinerary, setActiveItinerary] = useState(0);

  const itineraries = [
    {
      title: "The Ultimate Cyclades Duo Itinerary (7 Nights)",
      summary: "Combine both islands to get the best of both worlds. Spend 4 nights in Naxos (beaches, authenticity, mountains) and 3 nights in Paros (chic dining, sailing, boutique luxury).",
      days: [
        { day: "Days 1–4", title: "Naxos: Beaches, Villages & Local Food", desc: "Fly or ferry to Naxos. Check into a beachside estate. Spend your days relaxing on Plaka Beach, hiking to Apeiranthos mountain village, and tasting local Graviera cheese." },
        { day: "Day 5", title: "Transition Ferry to Paros", desc: "Take a short 30-minute afternoon ferry to Paros. Transfer to a design hotel in Naoussa and enjoy a sunset dinner on the waterfront." },
        { day: "Days 6–7", title: "Paros: Naoussa, Antiparos Sailing & Yachting", desc: "Take a private sailing catamaran cruise to the beautiful coves of Antiparos. Spend your evenings enjoying cosmopolitan dining and shopping in Naoussa." }
      ]
    },
    {
      title: "Naxos-Focused Active & Family Escape (5 Nights)",
      summary: "Ideal for families or travelers looking for space, quiet beaches, ancient ruins, and mountain exploration.",
      days: [
        { day: "Day 1", title: "Arrive Naxos & Temple of Apollo Sunset", desc: "Transfer to your beach resort. Walk to the Portara (Temple of Apollo) for a spectacular sunset view." },
        { day: "Day 2", title: "Beach Day at Agios Prokopios", desc: "Relax on the golden sands and enjoy clear, shallow waters. Book a beachfront dinner." },
        { day: "Day 3", title: "Mountain Village Expedition", desc: "Take a private driver or rental car to explore Halki, Filoti, and Apeiranthos. Visit an olive press and ancient marble quarries." },
        { day: "Day 4", title: "Private Greek Cooking Class", desc: "Spend the morning at a family farm in the Naxian countryside learning to make traditional dishes with fresh local ingredients." }
      ]
    }
  ];

  return (
    <section id="naxos-paros-practical" className="py-24 bg-white text-left">
      <div className="max-w-[1280px] mx-auto px-6 space-y-20">
        
        {/* Top: Seasons & Stays */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <FadeIn>
            <div className="space-y-6">
              <span className="text-xs uppercase tracking-[0.25em] text-[#c9a15c] font-bold block">
                PRACTICAL PLANNING
              </span>
              <h2 className="font-display text-3xl md:text-4xl text-navy-950 leading-tight font-light">
                When to Visit & Accommodation Tips
              </h2>
              
              <div className="space-y-4">
                <h4 className="font-display text-lg font-bold text-navy-950">
                  Best Time to Visit
                </h4>
                <p className="font-sans text-xs text-slate-600 font-light leading-relaxed">
                  <strong>May, June, and September</strong> are the absolute best times to visit both Naxos and Paros. The weather is warm, the crowds are manageable, and all restaurants and ferries are operating. August is very busy, particularly in Paros where Naoussa port dining can be difficult to book without advanced reservations.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="font-display text-lg font-bold text-navy-950">
                  Frictionless Inter-Island Transit
                </h4>
                <p className="font-sans text-xs text-slate-600 font-light leading-relaxed">
                  Combining Naxos and Paros is incredibly simple. Multiple high-speed ferries run daily between the two islands, taking only <strong>30 to 45 minutes</strong>. Pre-booking private transfers at both ports ensures a seamless arrival at your boutique hotel.
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#c9a15c]/10 to-transparent rounded-3xl blur-2xl z-0"></div>
              <img
                src={mapImage}
                alt="Cyclades travel map highlighting Naxos and Paros"
                className="relative z-10 w-full h-[380px] object-cover rounded-3xl shadow-xl border border-slate-100"
                loading="lazy"
              />
            </div>
          </FadeIn>
        </div>

        {/* Tabbed Itineraries */}
        <div className="border-t border-slate-100 pt-16">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-sans font-bold tracking-[0.2em] text-[#c9a15c] uppercase mb-4 block">
              ITINERARY BLUEPRINTS
            </span>
            <h3 className="font-display text-3xl text-navy-950 font-light">
              Cycladic Itineraries Curated by Trips & Ships
            </h3>
          </div>

          <style dangerouslySetInnerHTML={{__html: `
            .no-scrollbar::-webkit-scrollbar { display: none; }
            .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
          `}} />

          {/* Tab buttons */}
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
                {idx === 0 ? "The Cyclades Duo" : "Naxos Escape"}
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

export default GreeceNaxosParosPractical;
