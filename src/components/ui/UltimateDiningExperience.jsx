import React from 'react';
import FadeIn from './FadeIn';

const UltimateDiningExperience = ({ image }) => {
  const diningVenues = [
    {
      name: "Amphora",
      desc: "Windstar's main restaurant featuring globally inspired cuisine with regionally influenced menus that change based on the itinerary and destination.",
      highlight: "Destination-inspired menus"
    },
    {
      name: "Candles",
      desc: "Intimate outdoor dining on deck under the stars, offering a more refined multi-course evening experience that is uniquely Windstar.",
      highlight: "Al fresco fine dining"
    },
    {
      name: "Stella Bistro",
      desc: "A more relaxed dining option available on Star Class ships, offering bistro-style cuisine in an informal setting throughout the day.",
      highlight: "Casual yacht-style dining"
    },
    {
      name: "Star Grill by Steven Raichlen",
      desc: "Premium grilled cuisine available on Star Class motor yachts, emphasizing quality ingredients and expert preparation.",
      highlight: "Signature grilled cuisine"
    }
  ];

  const onboardFeatures = [
    {
      title: "James Beard Foundation Partnership",
      desc: "Windstar's partnership with the James Beard Foundation reflects a serious commitment to culinary quality rarely found on ships this size.",
      icon: (
        <svg className="w-5 h-5 text-gold-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M18.75 4.236c.982.143 1.954.317 2.916.52A6.003 6.003 0 0016.27 9.728M18.75 4.236V4.5c0 2.108-.966 3.99-2.48 5.228m0 0a6.023 6.023 0 01-7.54 0" />
        </svg>
      )
    },
    {
      title: "Watersports Platform",
      desc: "Selected ships feature the Windstar Watersports Platform — an open stern providing direct ocean access for kayaking, paddleboarding and swimming.",
      icon: (
        <svg className="w-5 h-5 text-gold-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
      )
    },
    {
      title: "WindSpa",
      desc: "Windstar's onboard spa offers wellness treatments designed to complement the relaxed atmosphere and destination-focused experience.",
      icon: (
        <svg className="w-5 h-5 text-gold-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
        </svg>
      )
    },
    {
      title: "Sail Away & Deck Events",
      desc: "The Windstar Sail Away — when sails unfurl as the ship departs — is one of the most iconic moments in modern cruising, best enjoyed from the open deck.",
      icon: (
        <svg className="w-5 h-5 text-gold-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z" />
        </svg>
      )
    }
  ];

  return (
    <section className="w-full bg-white py-24 border-b border-slate-200">
      <div className="max-w-[1280px] mx-auto px-6">

        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <span className="text-xs uppercase tracking-[0.25em] text-gold-500 font-bold mb-4 block">
              Dining & Onboard Life
            </span>
            <h2 className="font-display text-3xl md:text-5xl text-navy-950 mb-6 leading-tight">
              What Is Life Aboard Windstar Really Like?
            </h2>
            <p className="font-sans text-slate-500 font-light leading-relaxed">
              Windstar's onboard experience reflects its core philosophy: quality over quantity, intimacy over spectacle, and destination-inspired authenticity.
            </p>
          </FadeIn>
        </div>

        {/* Dining venues — zig-zag layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          <FadeIn>
            <div className="relative h-full">
              <div className="absolute -inset-3 bg-gradient-to-tr from-gold-500/10 to-transparent rounded-3xl blur-2xl z-0"></div>
              <img
                src={image}
                alt="Windstar Amphora restaurant dining"
                className="relative z-10 w-full h-full min-h-[400px] object-cover rounded-2xl shadow-xl"
                loading="lazy"
              />
            </div>
          </FadeIn>
          <div className="space-y-4">
            {diningVenues.map((venue, i) => (
              <FadeIn key={i} delay={0.05 * (i + 1)}>
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 hover:border-gold-400 transition-colors duration-300">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-display text-base text-navy-950 font-semibold">{venue.name}</h3>
                    <span className="text-xs font-display text-gold-500 tracking-wider uppercase">{venue.highlight}</span>
                  </div>
                  <p className="font-sans text-slate-600 text-sm font-light leading-relaxed">{venue.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Onboard features — 2x2 grid */}
        <FadeIn delay={0.15}>
          <div className="max-w-5xl mx-auto">
            <h3 className="font-display text-2xl text-navy-950 text-center mb-10">
              Beyond Dining: The Windstar Experience
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {onboardFeatures.map((feat, i) => (
                <div key={i} className="bg-navy-950 rounded-2xl p-7 hover:shadow-2xl transition-shadow duration-300">
                  <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center mb-5">
                    {feat.icon}
                  </div>
                  <h4 className="font-display text-sm text-gold-400 uppercase tracking-wider mb-3 font-bold">{feat.title}</h4>
                  <p className="font-sans text-slate-300 text-sm font-light leading-relaxed">{feat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
};

export default UltimateDiningExperience;
