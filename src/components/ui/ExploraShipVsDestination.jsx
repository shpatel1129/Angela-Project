import React, { useState } from 'react';
import FadeIn from './FadeIn';

const ExploraShipVsDestination = ({ image }) => {
  const [activeTab, setActiveTab] = useState('silversea');

  const tabs = {
    silversea: {
      label: "Silversea Ships",
      heading: "Classic Ultra-Luxury With an Exploratory Personality",
      features: [
        "Intimate luxury with smaller ships",
        "All-suite accommodations with butler service",
        "Destination-focused itineraries",
        "Purpose-built expedition vessels",
        "Fine dining with S.A.L.T. culinary program",
        "Easy access to smaller, unusual ports",
        "Personalized butler hospitality",
        "Extensive global itineraries"
      ],
      quote: "The ship provides the luxury infrastructure. The destination provides the story.",
      appeal: "Particularly appealing to travelers who want their cruise to feel like a luxury expedition with exceptional hospitality."
    },
    explora: {
      label: "Explora Ships",
      heading: "A Contemporary Luxury Aesthetic",
      features: [
        "Contemporary European design",
        "Ocean-facing spaces throughout",
        "Multiple pools — resort-inspired",
        "Modern restaurants and lounges",
        "Comprehensive wellness facilities",
        "Residential-style spacious suites",
        "Casual sophistication atmosphere",
        "456 ocean-front suites per ship"
      ],
      quote: "The ship feels less like a traditional cruise ship and more like a luxury hospitality environment that happens to move.",
      appeal: "Particularly attractive to travelers accustomed to Aman, Four Seasons, Rosewood, Mandarin Oriental, and contemporary boutique hotels."
    }
  };

  const active = tabs[activeTab];

  return (
    <section className="w-full bg-white py-24 border-b border-slate-200">
      <div className="max-w-[1280px] mx-auto px-6">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left: Image + Decision Test */}
          <FadeIn>
            <div>
              <img 
                src={image}
                alt="Ship design comparison"
                className="w-full h-[380px] object-cover rounded-2xl shadow-lg mb-8"
                loading="lazy"
              />
              <div className="bg-navy-950 rounded-2xl p-8 text-white">
                <h4 className="font-display text-lg text-gold-400 mb-4">The "Ship vs Destination" Test</h4>
                <p className="font-sans text-slate-300 text-sm font-light leading-relaxed mb-4">
                  Ask yourself: <em>"If the itinerary disappeared, would I still be excited about spending seven days on this ship?"</em>
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="text-gold-400 font-bold text-sm mt-0.5">Yes →</span>
                    <span className="text-slate-300 text-sm font-light">Explora Journeys deserves serious consideration</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-gold-400 font-bold text-sm mt-0.5">No →</span>
                    <span className="text-slate-300 text-sm font-light">Silversea may be the better match</span>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Right: Tabbed content */}
          <FadeIn delay={0.2}>
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-gold-500 font-bold mb-4 block">
                Ship Design Comparison
              </span>
              <h2 className="font-display text-3xl md:text-4xl text-navy-950 mb-8 leading-tight">
                Ships, Suites & Service
              </h2>

              {/* Tabs */}
              <div className="flex gap-2 mb-8">
                {Object.entries(tabs).map(([key, tab]) => (
                  <button
                    key={key}
                    onClick={() => setActiveTab(key)}
                    className={`px-5 py-2.5 rounded-full text-sm font-display transition-all duration-300 ${
                      activeTab === key
                        ? 'bg-navy-950 text-gold-400'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <h3 className="font-display text-xl text-navy-950 mb-4">{active.heading}</h3>

              <ul className="space-y-3 mb-8">
                {active.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="w-4 h-4 text-gold-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="font-sans text-slate-600 text-sm font-light">{feature}</span>
                  </li>
                ))}
              </ul>

              <blockquote className="border-l-3 border-gold-400 pl-5 mb-6">
                <p className="font-sans text-slate-500 text-sm italic font-light">{active.quote}</p>
              </blockquote>

              <p className="font-sans text-slate-500 text-sm font-light">{active.appeal}</p>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
};

export default ExploraShipVsDestination;
