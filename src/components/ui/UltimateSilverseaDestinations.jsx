import React from 'react';
import FadeIn from './FadeIn';

const UltimateSilverseaDestinations = ({ image }) => {
  const dests = [
    {
      name: "Antarctica",
      season: "November – March",
      desc: "Ice-class hulls, Zodiac landings, penguin colonies and dramatic polar vistas managed by expert expeditions teams.",
      tag: "Polar Expedition"
    },
    {
      name: "Galápagos Islands",
      season: "Year-round",
      desc: "Sailing aboard Silver Origin, explore natural history, volcanic landscapes, and endemic wildlife face-to-face.",
      tag: "Wildlife Eco-Tour"
    },
    {
      name: "Mediterranean",
      season: "April – November",
      desc: "Sophisticated boutique harbors, history, and culinary highlights curated via the S.A.L.T. program.",
      tag: "Classic Cruise"
    },
    {
      name: "Alaska",
      season: "May – September",
      desc: "Mighty glaciers, coastal rainforests, and marine wildlife viewed from ultra-luxury veranda suites.",
      tag: "Scenic Wilderness"
    }
  ];

  return (
    <section className="w-full bg-slate-50 py-24 border-b border-slate-200">
      <div className="max-w-[1280px] mx-auto px-6">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Sticky Image */}
          <FadeIn>
            <div className="sticky top-24">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-tr from-gold-500/10 to-transparent rounded-[32px] blur-2xl z-0"></div>
                <img
                  src={image}
                  alt="Silversea expedition cruise in Antarctica"
                  className="relative z-10 w-full h-[480px] object-cover rounded-3xl shadow-xl"
                  loading="lazy"
                />
              </div>
              <div className="bg-white border border-slate-200 rounded-2xl p-6 mt-6 shadow-sm">
                <h4 className="font-display text-sm text-navy-950 font-bold mb-2">Angela's Destination Framework</h4>
                <p className="font-sans text-slate-500 text-xs font-light leading-relaxed italic">
                  "Silversea allows you to combine polar exploration with boutique cruising. Choose Antarctica or the Galápagos for active discovery, and the Mediterranean or Alaska for relaxed sophistication."
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Right: Destinations List */}
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-gold-500 font-bold mb-4 block">
              Global Itineraries
            </span>
            <h2 className="font-display text-3xl md:text-4xl text-navy-950 mb-6 leading-tight">
              Where Can You Sail With Silversea?
            </h2>
            <p className="font-sans text-slate-600 font-light leading-relaxed mb-10">
              With itineraries spanning all seven continents, Silversea connects you with the world's most remote locations as well as classic cultural harbors.
            </p>

            <div className="space-y-6">
              {dests.map((dest, i) => (
                <FadeIn key={i} delay={0.05 * (i + 1)}>
                  <div className="bg-white border border-slate-200 rounded-3xl p-6 hover:border-gold-500 transition-all duration-300">
                    <div className="flex flex-wrap justify-between items-start gap-4 mb-3">
                      <div>
                        <span className="bg-navy-950 text-gold-400 text-[10px] font-display uppercase tracking-widest px-2.5 py-1 rounded-md font-semibold mb-2 block w-fit">
                          {dest.tag}
                        </span>
                        <h3 className="font-display text-lg text-navy-950">{dest.name}</h3>
                      </div>
                      <span className="text-xs text-slate-400 font-sans">{dest.season}</span>
                    </div>
                    <p className="font-sans text-slate-500 text-xs font-light leading-relaxed">{dest.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default UltimateSilverseaDestinations;
