import React from 'react';
import FadeIn from './FadeIn';

const UltimateDestinationMap = ({ image }) => {
  const destinations = [
    {
      name: "Greek Islands",
      season: "April – October",
      ships: "Wind Star, Wind Surf",
      highlights: "Intimate ports like Nafplio, Monemvasia and Mykonos that large ships cannot access easily.",
      icon: (
        <svg className="w-5 h-5 text-gold-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M3 12h2.25m-.386-6.364l1.591 1.591M12 7.5a4.5 4.5 0 100 9 4.5 4.5 0 000-9z" />
        </svg>
      )
    },
    {
      name: "French Polynesia",
      season: "Year-round",
      ships: "Wind Spirit, Star Breeze",
      highlights: "Tahiti, Bora Bora, Moorea — an unmatched sailing-yacht honeymoon destination.",
      icon: (
        <svg className="w-5 h-5 text-gold-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
        </svg>
      )
    },
    {
      name: "Mediterranean",
      season: "May – November",
      ships: "Wind Star, Wind Surf, Star Pride",
      highlights: "Italy, France, Croatia, Spain — destination-rich itineraries visiting small coastal gems.",
      icon: (
        <svg className="w-5 h-5 text-gold-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21V9.75M3.284 14.253A9 9 0 0012 21m0-11.25V3.75" />
        </svg>
      )
    },
    {
      name: "Caribbean",
      season: "November – April",
      ships: "Wind Surf, Star Pride",
      highlights: "Windward and Leeward Islands, Tobago Cays, intimate beach-focused itineraries.",
      icon: (
        <svg className="w-5 h-5 text-gold-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg>
      )
    },
  ];

  return (
    <section className="w-full bg-slate-50 py-24 border-b border-slate-200">
      <div className="max-w-[1280px] mx-auto px-6">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left: destination cards */}
          <div>
            <FadeIn>
              <span className="text-xs uppercase tracking-[0.25em] text-gold-500 font-bold mb-4 block">
                Destinations
              </span>
              <h2 className="font-display text-3xl md:text-4xl text-navy-950 mb-6 leading-tight">
                Where Can You Sail With Windstar?
              </h2>
              <p className="font-sans text-slate-600 font-light leading-relaxed mb-10">
                Windstar's small ships reach ports and harbors that larger vessels simply cannot visit, creating destination experiences that feel fundamentally different from mainstream cruising.
              </p>
            </FadeIn>

            <div className="space-y-4">
              {destinations.map((dest, i) => (
                <FadeIn key={i} delay={0.05 * (i + 1)}>
                  <div className="bg-white border border-slate-200 rounded-2xl p-5 hover:border-gold-400 transition-colors duration-300">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-navy-950 flex items-center justify-center flex-shrink-0 mt-1">
                        {dest.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3 mb-1">
                          <h3 className="font-display text-sm text-navy-950 font-semibold">{dest.name}</h3>
                          <span className="text-xs text-slate-400 font-sans">{dest.season}</span>
                        </div>
                        <p className="font-sans text-slate-600 text-xs font-light leading-relaxed mb-2">{dest.highlights}</p>
                        <p className="font-display text-xs text-gold-500 tracking-wider">{dest.ships}</p>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* Right: sticky image + expert callout */}
          <FadeIn delay={0.15}>
            <div className="sticky top-24">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-tr from-gold-500/10 to-transparent rounded-3xl blur-2xl z-0"></div>
                <img
                  src={image}
                  alt="Windstar yacht in Greek Islands port"
                  className="relative z-10 w-full h-[480px] object-cover rounded-2xl shadow-xl"
                  loading="lazy"
                />
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border border-slate-200 mt-6">
                <h4 className="font-display text-sm text-navy-950 uppercase tracking-wider mb-3">Angela's Destination Advice</h4>
                <p className="font-sans text-slate-600 text-sm font-light leading-relaxed italic">
                  "Start with the destination, not the ship. A spectacular itinerary aboard a ship that is not your first choice can create a much better vacation than your favorite ship sailing an itinerary that does not excite you."
                </p>
              </div>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
};

export default UltimateDestinationMap;
