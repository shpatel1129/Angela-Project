import React from 'react';
import FadeIn from './FadeIn';

const UltimateSilverseaFleet = ({ image }) => {
  const classes = [
    {
      title: "Nova Class",
      desc: "Silversea's next-generation ships featuring an asymmetrical architectural design, vast open spaces, glass-focused panoramas, and extensive premium dining choices.",
      ships: ["Silver Nova (728 guests)", "Silver Ray (728 guests)"],
      focus: "Contemporary Design & Multiple Dining Venues"
    },
    {
      title: "Classic Ships",
      desc: "Traditional luxury ocean liners delivering signature intimate atmosphere, personalized service, and a broad range of worldwide itineraries.",
      ships: [
        "Silver Dawn (596 guests)",
        "Silver Moon (596 guests)",
        "Silver Muse (596 guests)",
        "Silver Spirit (608 guests)",
        "Silver Shadow (388 guests)",
        "Silver Whisper (392 guests)"
      ],
      focus: "Sophisticated Intimacy & Classic Cruising"
    },
    {
      title: "Expedition Fleet",
      desc: "Purpose-built, ice-class hulls designed to visit the earth's most remote locations while maintaining butler-service standards.",
      ships: [
        "Silver Cloud (254 guests)",
        "Silver Wind (274 guests)",
        "Silver Endeavour (220 guests)",
        "Silver Origin (100 guests - Galápagos)"
      ],
      focus: "Luxury Exploration & Zodiac Adventures"
    }
  ];

  return (
    <section className="w-full bg-white py-24 border-b border-slate-200">
      <div className="max-w-[1280px] mx-auto px-6">

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <FadeIn>
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-gold-500 font-bold mb-4 block">
                The Fleet Guide
              </span>
              <h2 className="font-display text-3xl md:text-4xl text-navy-950 mb-6 leading-tight">
                Which Silversea Ship Is Right for You?
              </h2>
              <p className="font-sans text-slate-600 font-light leading-relaxed">
                Silversea's fleet spans multiple ship styles and classifications. From the new open-design Nova Class to remote ice-class expedition ships, each vessel offers a slightly different way to experience ultra-luxury at sea.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={image}
                alt="Silversea fleet lineup"
                className="w-full h-[380px] object-cover"
                loading="lazy"
              />
            </div>
          </FadeIn>
        </div>

        {/* Fleet Classes Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {classes.map((cls, idx) => (
            <FadeIn key={idx} delay={0.05 * (idx + 1)}>
              <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 hover:border-gold-500 hover:shadow-lg transition-all duration-300 h-full flex flex-col justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-gold-600 font-bold mb-2 block">{cls.focus}</span>
                  <h3 className="font-display text-xl text-navy-950 mb-4">{cls.title}</h3>
                  <p className="font-sans text-slate-600 text-xs font-light leading-relaxed mb-6">{cls.desc}</p>
                </div>
                <div className="border-t border-slate-200 pt-6">
                  <h4 className="font-display text-[11px] uppercase tracking-wider text-navy-950 font-bold mb-3">Sailing in this class:</h4>
                  <ul className="space-y-2">
                    {cls.ships.map((ship, i) => (
                      <li key={i} className="font-sans text-slate-700 text-xs font-light flex items-center gap-2">
                        <span className="w-1 h-1 bg-gold-500 rounded-full"></span>
                        {ship}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
};

export default UltimateSilverseaFleet;
