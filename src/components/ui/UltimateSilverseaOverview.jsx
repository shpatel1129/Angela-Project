import React from 'react';
import FadeIn from './FadeIn';

const UltimateSilverseaOverview = ({ image }) => {
  const features = [
    { title: "All-Suite Accommodation", desc: "Private retreats with spacious layouts, separate living areas and premium bath amenities." },
    { title: "Personal Butler Service", desc: "Dedicated white-glove service for every suite across the entire fleet." },
    { title: "S.A.L.T. Culinary Program", desc: "Sea and Land Taste connects local culture and ingredients with dining." },
    { title: "Worldwide Expeditions", desc: "Remote exploration to Antarctica and Galápagos without sacrificing luxury." }
  ];

  return (
    <section className="w-full bg-white py-24 border-b border-slate-200">
      <div className="max-w-[1280px] mx-auto px-6">

        {/* Overview Split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <FadeIn>
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-gold-500 font-bold mb-4 block">
                The Luxury Proposition
              </span>
              <h2 className="font-display text-3xl md:text-4xl text-navy-950 mb-6 leading-tight">
                What Is Silversea Cruises?
              </h2>
              <p className="font-sans text-slate-600 font-light leading-relaxed mb-6">
                Silversea is an ultra-luxury cruise line specializing in all-suite accommodations, personalized service, butler service, destination-focused itineraries, sophisticated dining and both classic and expedition cruising.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {features.map((feat, idx) => (
                  <div key={idx} className="border-l-2 border-gold-500 pl-4">
                    <h3 className="font-display text-sm text-navy-950 font-semibold mb-1">{feat.title}</h3>
                    <p className="font-sans text-slate-500 text-xs font-light leading-relaxed">{feat.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="relative p-2 bg-gradient-to-tr from-gold-500/20 to-transparent rounded-[32px]">
              <img
                src={image}
                alt="Silversea ultra-luxury cruise ship in Nafplion"
                className="w-full h-[460px] object-cover rounded-[24px] shadow-xl border border-slate-100"
                loading="lazy"
              />
            </div>
          </FadeIn>
        </div>

        {/* Why it Matters */}
        <FadeIn delay={0.1}>
          <div className="max-w-4xl mx-auto bg-navy-950 text-center rounded-3xl p-10 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(201,161,92,0.06),transparent_60%)] z-0"></div>
            <div className="relative z-10">
              <h3 className="font-display text-2xl text-white mb-4">Why Silversea Matters to Today's Traveler</h3>
              <p className="font-sans text-slate-300 text-sm font-light leading-relaxed max-w-2xl mx-auto">
                Modern luxury is not just about opulent design or the price tag — it is about accessing remote destinations in comfort, dining on authentic local cuisines, and exploring without the crowds of mega-ships. Silversea matches these desires with an intimate yacht-like atmosphere.
              </p>
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
};

export default UltimateSilverseaOverview;
