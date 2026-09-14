import React from 'react';
import FadeIn from './FadeIn';

const UltimateWindstarGlance = () => {
  const features = [
    {
      title: "Small Ships",
      desc: "Intimate vessels with 148–342 guests rather than floating mega-resorts carrying thousands.",
      icon: (
        <svg className="w-6 h-6 text-gold-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v16.5M20.25 3v16.5M3.75 12h16.5M4 19.5h16" />
        </svg>
      )
    },
    {
      title: "Sailing Yachts",
      desc: "Selected ships offer the distinctive experience of sailing under wind power when conditions permit.",
      icon: (
        <svg className="w-6 h-6 text-gold-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
        </svg>
      )
    },
    {
      title: "Yacht Atmosphere",
      desc: "Relaxed, intimate and less formal than many traditional luxury cruise products.",
      icon: (
        <svg className="w-6 h-6 text-gold-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
        </svg>
      )
    },
    {
      title: "Destination Focus",
      desc: "Significant emphasis on ports, shore experiences and destination immersion over onboard attractions.",
      icon: (
        <svg className="w-6 h-6 text-gold-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25s-7.5-4.108-7.5-11.25a7.5 7.5 0 1115 0z" />
        </svg>
      )
    },
    {
      title: "Relaxed Luxury",
      desc: "Personalized service, good food, comfortable accommodations and a casual luxury atmosphere.",
      icon: (
        <svg className="w-6 h-6 text-gold-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.746 3.746 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
        </svg>
      )
    },
    {
      title: "Small-Ship Access",
      desc: "Smaller vessels reach intimate ports and hidden harbors that large cruise ships simply cannot visit.",
      icon: (
        <svg className="w-6 h-6 text-gold-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21V9.75M3.284 14.253A9 9 0 0012 21m0-11.25V3.75" />
        </svg>
      )
    }
  ];

  const rightFor = [
    "A small yacht rather than a floating city",
    "Fewer passengers and a more intimate atmosphere",
    "Beautiful destinations rather than endless onboard attractions",
    "Relaxed rather than highly formal luxury",
    "Excellent food without dozens of restaurant choices",
    "Interesting shore excursions and local experiences",
    "The possibility of sailing on selected Windstar yachts",
    "Quiet time on deck watching the destination go by"
  ];

  const notFor = [
    "Very large suites above all else",
    "A private balcony on every cabin category",
    "Large-scale entertainment",
    "Waterparks and mega-ship attractions",
    "Extensive children's programming",
    "Dozens of restaurants",
    "Formal ultra-luxury service",
    "Large casinos and nightlife venues"
  ];

  return (
    <section className="w-full bg-slate-50 py-24 border-b border-slate-200">
      <div className="max-w-[1280px] mx-auto px-6">

        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <span className="text-xs uppercase tracking-[0.25em] text-gold-500 font-bold mb-4 block">
              At a Glance
            </span>
            <h2 className="font-display text-3xl md:text-5xl text-navy-950 mb-6 leading-tight">
              Windstar Cruises at a Glance
            </h2>
          </FadeIn>
        </div>

        {/* 6-card feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {features.map((f, idx) => (
            <FadeIn key={idx} delay={0.05 * (idx + 1)}>
              <div className="bg-white border border-slate-200 rounded-2xl p-7 hover:border-gold-400 hover:shadow-lg transition-all duration-300 h-full">
                <div className="w-12 h-12 rounded-xl bg-navy-950 flex items-center justify-center mb-5">
                  {f.icon}
                </div>
                <h3 className="font-display text-base text-navy-950 font-semibold mb-2">{f.title}</h3>
                <p className="font-sans text-slate-600 text-sm font-light leading-relaxed">{f.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Right For / Not Right For */}
        <FadeIn delay={0.15}>
          <div className="max-w-5xl mx-auto">
            <h3 className="font-display text-2xl md:text-3xl text-navy-950 text-center mb-10">
              Is Windstar Cruises Right for You?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

              {/* Right for */}
              <div className="bg-emerald-50/50 border border-emerald-200 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-emerald-600 flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <h4 className="font-display text-sm uppercase tracking-widest text-emerald-800 font-bold">Windstar is great if you want</h4>
                </div>
                <ul className="space-y-3">
                  {rightFor.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="font-sans text-slate-700 text-sm font-light leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Not right for */}
              <div className="bg-amber-50/50 border border-amber-200 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-amber-600 flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                    </svg>
                  </div>
                  <h4 className="font-display text-sm uppercase tracking-widest text-amber-800 font-bold">Consider alternatives if you need</h4>
                </div>
                <ul className="space-y-3">
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

export default UltimateWindstarGlance;
