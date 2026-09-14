import React from 'react';
import FadeIn from './FadeIn';

const UltimateSilverseaGlance = () => {
  const pillars = [
    {
      title: "All-Suite Retreats",
      desc: "Silversea accommodations are exclusively ocean-view suites, many with private balconies and spacious separate sitting rooms.",
      icon: (
        <svg className="w-5 h-5 text-gold-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg>
      )
    },
    {
      title: "Signature Butler Service",
      desc: "Every suite includes butler service. Your butler will unpack luggage, polish shoes, make dining reservations and handle laundry.",
      icon: (
        <svg className="w-5 h-5 text-gold-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
        </svg>
      )
    },
    {
      title: "S.A.L.T. Culinary Focus",
      desc: "Sea and Land Taste program allows you to dive deep into local cuisine via themed cooking lessons, curated excursions and bespoke menus.",
      icon: (
        <svg className="w-5 h-5 text-gold-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
        </svg>
      )
    },
    {
      title: "Elite Expedition Fleet",
      desc: "Purpose-built expedition ships bring you face-to-face with wildlife in Antarctica, Arctic regions, Galápagos and remote islands.",
      icon: (
        <svg className="w-5 h-5 text-gold-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21V9.75M3.284 14.253A9 9 0 0012 21m0-11.25V3.75" />
        </svg>
      )
    }
  ];

  const rightFor = [
    "Ultra-luxury travelers seeking refined personalized butler service",
    "All-suite cruising with private verandas and separate sitting spaces",
    "Culinary enthusiasts eager to explore S.A.L.T. dining programs",
    "Couples seeking a sophisticated, quiet, romance-centered vacation",
    "Luxury expedition seekers visiting Antarctica, Arctic and Galápagos"
  ];

  const notFor = [
    "Travelers seeking high-energy night clubs, water parks or huge casinos",
    "Families requiring extensive kids' clubs and children-focused facilities",
    "Travelers looking for a casual resort-style dress code every single evening",
    "Cruisers looking for the lowest possible price point"
  ];

  return (
    <section className="w-full bg-slate-50 py-24 border-b border-slate-200">
      <div className="max-w-[1280px] mx-auto px-6">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <span className="text-xs uppercase tracking-[0.25em] text-gold-500 font-bold mb-4 block">
              At a Glance
            </span>
            <h2 className="font-display text-3xl md:text-5xl text-navy-950 mb-6 leading-tight">
              Silversea Cruises at a Glance
            </h2>
          </FadeIn>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {pillars.map((pillar, idx) => (
            <FadeIn key={idx} delay={0.05 * (idx + 1)}>
              <div className="bg-white border border-slate-200 rounded-3xl p-8 hover:shadow-xl hover:border-gold-500 transition-all duration-300 flex items-start gap-5">
                <div className="w-12 h-12 rounded-2xl bg-navy-950 flex items-center justify-center flex-shrink-0">
                  {pillar.icon}
                </div>
                <div>
                  <h3 className="font-display text-base text-navy-950 font-semibold mb-2">{pillar.title}</h3>
                  <p className="font-sans text-slate-500 text-sm font-light leading-relaxed">{pillar.desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Suitability Segment */}
        <FadeIn delay={0.15}>
          <div className="max-w-5xl mx-auto">
            <h3 className="font-display text-2xl text-navy-950 text-center mb-10">Is Silversea Right for You?</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Right for */}
              <div className="bg-emerald-50/40 border border-emerald-100 rounded-3xl p-8">
                <h4 className="font-display text-sm text-emerald-800 font-semibold uppercase tracking-wider mb-6 flex items-center gap-2">
                  <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Silversea is ideal if you value
                </h4>
                <ul className="space-y-4">
                  {rightFor.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="font-sans text-slate-700 text-sm font-light leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Not right for */}
              <div className="bg-amber-50/40 border border-amber-100 rounded-3xl p-8">
                <h4 className="font-display text-sm text-amber-800 font-semibold uppercase tracking-wider mb-6 flex items-center gap-2">
                  <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                  </svg>
                  Silversea might not suit you if you want
                </h4>
                <ul className="space-y-4">
                  {notFor.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="font-sans text-slate-700 text-sm font-light leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
};

export default UltimateSilverseaGlance;
