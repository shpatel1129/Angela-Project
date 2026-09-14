import React, { useState } from 'react';
import FadeIn from './FadeIn';

/**
 * GreeceSantoriniMykonosPractical
 * Combines seasons, stay locations, cost estimates, itineraries, and logistics.
 */
const GreeceSantoriniMykonosPractical = ({ mapImage }) => {
  const [activeItinerary, setActiveItinerary] = useState(0);

  const itineraries = [
    {
      title: "Santorini-Focused Romantic Escape (4–5 Nights)",
      summary: "Ideal for honeymooners, anniversary couples, or travelers seeking caldera-view relaxation, sunset sailing, and volcanic wine tastings.",
      days: [
        { day: "Day 1", title: "Arrive Santorini & Caldera Sunset", desc: "Private transfer to your cliffside suite in Oia or Imerovigli. Watch the legendary sunset from your private terrace with volcanic wine." },
        { day: "Day 2", title: "Private Caldera Catamaran Cruise", desc: "Spend the day sailing inside the volcanic caldera on a private yacht. Swim in hot springs, see Red Beach, and enjoy a chef-prepared seafood lunch." },
        { day: "Day 3", title: "Akrotiri Ruins & Vineyard Tasting", desc: "Tour the prehistoric Minoan ruins of Akrotiri with a private archaeological guide, followed by an afternoon tasting Santorini's signature Assyrtiko wines." },
        { day: "Day 4", title: "Cliff Walk or Leisurely Spa Day", desc: "Walk the scenic path from Imerovigli to Oia, enjoy a couples massage at a cave spa, and book a cliffside fine dining experience." }
      ]
    },
    {
      title: "Mykonos-Focused Cosmopolitan Beach Escape (4–5 Nights)",
      summary: "Ideal for friends, active couples, or beach lovers seeking sandy shores, cosmopolitan dining, luxury shopping, and sunset beach lounges.",
      days: [
        { day: "Day 1", title: "Arrive Mykonos & Chora Walking Tour", desc: "Private transfer to your boutique resort. Walk the labyrinth of whitewashed paths in Chora and watch the sunset from Little Venice." },
        { day: "Day 2", title: "Private Beach Hopping & Yacht Cruise", desc: "Cruise the southern coastline of Mykonos on a private motor yacht, stopping to swim in secluded bays like Rhenia and anchoring for lunch." },
        { day: "Day 3", title: "Sacred Delos Tour & Beach Club Lunch", desc: "Take a private boat to the uninhabited, sacred island of Delos. Return to Mykonos for a late lunch at Nammos or Scorpios." },
        { day: "Day 4", title: "Relaxed Resort & High-End Shopping", desc: "Spend the day relaxing at your beach resort. In the late afternoon, explore the luxury boutiques of Chora, followed by dinner at Zuma or Nobu." }
      ]
    },
    {
      title: "The Complete Aegean Duo (7–9 Nights)",
      summary: "Recommended. Combine 4 nights in Santorini (scenery, romance, sailing) with 4 nights in Mykonos (beaches, dining, lifestyle) to get the best of both.",
      days: [
        { day: "Days 1–4", title: "Santorini: Caldera, Wine & Catamarans", desc: "Focus on clifftop luxury, archaeological touring at Akrotiri, private wine tastings, and a sunset caldera sail." },
        { day: "Day 5", title: "Fly or Private Yacht Transfer to Mykonos", desc: "Take a high-speed ferry or charter a private motor yacht to transition between islands. Check into your beachside Mykonos resort." },
        { day: "Days 6–9", title: "Mykonos: Beaches, Clubs, Shopping & Delos", desc: "Transition into a beach lifestyle. Explore Chora, tour Delos ruins, swim at Platis Gialos, and dine at waterfront restaurants." }
      ]
    }
  ];

  return (
    <section id="practical-planning" className="py-24 bg-white">
      <div className="max-w-[1280px] mx-auto px-6 space-y-24">
        
        {/* 1. Seasons & Staying Location */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start text-left">
          <FadeIn>
            <div className="space-y-6">
              <span className="text-xs uppercase tracking-[0.25em] text-blue-600 font-bold block">
                PRACTICAL PLANNING
              </span>
              <h2 className="font-display text-3xl md:text-4xl text-navy-950 leading-tight">
                When to Visit & Where to Stay
              </h2>
              
              <div className="space-y-4">
                <h4 className="font-display text-lg font-bold text-navy-950">
                  Best Seasons
                </h4>
                <p className="font-sans text-xs text-slate-600 font-light leading-relaxed">
                  <strong>May, June, and September</strong> are the sweet spots for luxury travelers. You enjoy warm weather, open restaurants, and full services with fewer crowds than July and August. Shoulder months like April and October are beautiful, but ferry schedules are reduced and some beach resorts may be closed.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="font-display text-lg font-bold text-navy-950">
                  Where to Stay Strategy
                </h4>
                <p className="font-sans text-xs text-slate-600 font-light leading-relaxed">
                  In <strong>Santorini</strong>, choose clifftop hotels in Oia for the classic postcard views and luxury shops, or Imerovigli for a quieter, highly private alternative. In <strong>Mykonos</strong>, choose southern beach resorts (Ornos, Platis Gialos, or Psarou) for direct beach access, or Tourlos for elevated private villas near town.
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500/10 to-transparent rounded-3xl blur-2xl z-0"></div>
              <img
                src={mapImage}
                alt="Greece Cyclades Travel Map"
                className="relative z-10 w-full h-[400px] object-cover rounded-3xl shadow-xl border border-slate-100"
                loading="lazy"
              />
            </div>
          </FadeIn>
        </div>

        {/* 2. Itinerary Architect Tabbed Section */}
        <div className="border-t border-slate-100 pt-20">
          {/* Section Heading */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-sans font-bold tracking-[0.2em] text-blue-600 uppercase mb-4 block">
              ITINERARY BLUEPRINTS
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-light text-navy-950 mb-6">
              Bespoke Greek Island Itineraries
            </h2>
            <p className="font-sans text-slate-600 font-light leading-relaxed">
              Explore three different planning templates curated by our luxury travel advisors.
            </p>
          </div>

          {/* Style to hide scrollbar */}
          <style dangerouslySetInnerHTML={{__html: `
            .no-scrollbar::-webkit-scrollbar { display: none; }
            .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
          `}} />

          {/* Tabs Container */}
          <div className="flex border-b border-slate-200 gap-4 overflow-x-auto pb-1 no-scrollbar mb-12">
            {itineraries.map((it, idx) => (
              <button
                key={idx}
                onClick={() => setActiveItinerary(idx)}
                className={`py-4 px-6 text-xs font-sans font-medium uppercase tracking-wider border-b-2 whitespace-nowrap transition-all ${
                  activeItinerary === idx
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-slate-400 hover:text-slate-600'
                }`}
              >
                {idx === 0 ? "Santorini Focus" : idx === 1 ? "Mykonos Focus" : "Aegean Duo (Recommended)"}
              </button>
            ))}
          </div>

          {/* Active Tab Content */}
          <div className="bg-slate-50 border border-slate-100 p-8 rounded-2xl text-left">
            <h3 className="font-display text-xl font-bold text-navy-950 mb-2">
              {itineraries[activeItinerary].title}
            </h3>
            <p className="font-sans text-xs text-slate-500 font-light leading-relaxed mb-8 max-w-3xl">
              {itineraries[activeItinerary].summary}
            </p>

            <div className="space-y-6">
              {itineraries[activeItinerary].days.map((d, idx) => (
                <div key={idx} className="flex gap-6 items-start">
                  <span className="font-display text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full whitespace-nowrap">
                    {d.day}
                  </span>
                  <div>
                    <h4 className="font-display text-base font-semibold text-navy-950 mb-1">
                      {d.title}
                    </h4>
                    <p className="font-sans text-xs text-slate-600 font-light leading-relaxed">
                      {d.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 3. Logistics & Budget Block */}
        <div className="border-t border-slate-100 pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 text-left">
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
              <span className="text-xs font-sans font-bold tracking-wider text-blue-600 uppercase block mb-3">
                COSTS & VALUE
              </span>
              <h4 className="font-display text-xl font-bold text-navy-950 mb-4">
                Luxury Santorini vs Mykonos Budgets
              </h4>
              <p className="font-sans text-xs text-slate-600 font-light leading-relaxed mb-4">
                Both islands are high-end destinations, but they command budgets in different ways. Expect to allocate a higher portion of your budget to <strong>cliffside suites</strong> in Santorini, while Mykonos will command higher spends for <strong>beach resorts, large private villas, private yachts, and beach-club dining.</strong>
              </p>
              <div className="text-[11px] font-sans text-slate-500 italic">
                *Advisor Tip: Booking a travel advisor gives you access to complimentary amenities, VIP perks, and room upgrades at Virtuoso properties on both islands.
              </div>
            </div>

            <div className="bg-navy-950 text-white p-8 rounded-2xl border border-blue-900/40">
              <span className="text-xs font-sans font-bold tracking-wider text-blue-400 uppercase block mb-3">
                LOGISTICS & TRANSIT
              </span>
              <h4 className="font-display text-xl font-bold text-white mb-4">
                Frictionless Transitions
              </h4>
              <p className="font-sans text-xs text-slate-300 font-light leading-relaxed mb-4">
                Avoid booking random ferry schedules. During peak summer, ferries get crowded and winds can cause delays. We recommend booking <strong>first-class ferry seats or chartered yachts</strong> to move between islands, and pre-booking <strong>private Mercedes transfers</strong> for all port and airport arrivals.
              </p>
              <div className="text-[11px] font-sans text-slate-400">
                *Athens Link: Both Santorini and Mykonos have local airports with frequent 45-minute flight links to Athens, making connecting flights simple.
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default GreeceSantoriniMykonosPractical;
