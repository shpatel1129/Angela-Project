import React, { useState } from 'react';
import { Waves, Ship, Droplets, Map, Anchor, Compass } from 'lucide-react';

const InteractiveRiverVsOcean = ({ riverImg, oceanImg }) => {
  const [activeView, setActiveView] = useState('ocean');

  const comparisons = {
    river: [
      {
        icon: <Droplets className="w-5 h-5 text-sky-400" />,
        title: "Inland Waterways",
        desc: "Extremely smooth sailing with constantly passing scenery and riverbanks."
      },
      {
        icon: <Map className="w-5 h-5 text-sky-400" />,
        title: "City Center Docking",
        desc: "Often dock right in the historic heart of European capitals."
      },
      {
        icon: <Anchor className="w-5 h-5 text-sky-400" />,
        title: "Structured Rhythm",
        desc: "Included daily walking tours with a set schedule."
      }
    ],
    ocean: [
      {
        icon: <Waves className="w-5 h-5 text-gold-400" />,
        title: "Ocean Horizons",
        desc: "Expansive views, tropical islands, and the thrill of open-water sailing."
      },
      {
        icon: <Ship className="w-5 h-5 text-gold-400" />,
        title: "Small Harbor Access",
        desc: "Navigate into hidden coves and boutique ports large ships can't reach."
      },
      {
        icon: <Compass className="w-5 h-5 text-gold-400" />,
        title: "Flexible Exploration",
        desc: "Active, independent, and varied shore excursions at your own pace."
      }
    ]
  };

  return (
    <section className="w-full py-20 bg-navy-950 text-white relative overflow-hidden border-y border-gold-400/20">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <div 
          className={`absolute inset-0 transition-opacity duration-1000 ${activeView === 'river' ? 'opacity-100' : 'opacity-0'}`}
        >
          <img src={riverImg} alt="River Cruising" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-navy-950/80 backdrop-blur-[2px]"></div>
        </div>
        <div 
          className={`absolute inset-0 transition-opacity duration-1000 ${activeView === 'ocean' ? 'opacity-100' : 'opacity-0'}`}
        >
          <img src={oceanImg} alt="Windstar Ocean Cruising" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-navy-950/85 backdrop-blur-[2px]"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest text-gold-400 font-semibold px-4 py-1.5 rounded-full bg-gold-400/10 border border-gold-400/30 mb-4">
            <Compass className="w-3.5 h-3.5" />
            <span>Interactive Comparison</span>
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-normal text-white mb-6">
            The Water Is Completely Different
          </h2>
          <p className="text-slate-300">
            Select an environment below to see how the core elements of your favorite river cruises translate to Windstar's small-ship ocean experience.
          </p>
        </div>

        {/* Toggle Switch */}
        <div className="flex justify-center mb-16">
          <div className="bg-navy-900/80 backdrop-blur-md p-1.5 rounded-full border border-slate-700 inline-flex shadow-xl shadow-black/20">
            <button
              onClick={() => setActiveView('river')}
              className={`px-8 py-3 rounded-full text-sm font-semibold transition-all duration-300 flex items-center space-x-2 ${
                activeView === 'river' 
                ? 'bg-sky-500/20 text-sky-400 shadow-sm border border-sky-500/30' 
                : 'text-slate-400 hover:text-white border border-transparent'
              }`}
            >
              <Droplets className="w-4 h-4" />
              <span>River Experience</span>
            </button>
            <button
              onClick={() => setActiveView('ocean')}
              className={`px-8 py-3 rounded-full text-sm font-semibold transition-all duration-300 flex items-center space-x-2 ${
                activeView === 'ocean' 
                ? 'bg-gold-400/20 text-gold-400 shadow-sm border border-gold-400/30' 
                : 'text-slate-400 hover:text-white border border-transparent'
              }`}
            >
              <Waves className="w-4 h-4" />
              <span>Windstar Ocean Experience</span>
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {comparisons[activeView].map((item, idx) => (
            <div 
              key={`${activeView}-${idx}`}
              className="bg-navy-900/60 backdrop-blur-xl border border-slate-700 hover:border-gold-400/50 rounded-2xl p-8 transition-all duration-500 hover:-translate-y-1 shadow-lg animate-fade-in-up"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="bg-navy-950 p-3 rounded-xl inline-block mb-6 border border-slate-800 shadow-inner">
                {item.icon}
              </div>
              <h3 className="text-xl font-display text-white mb-3">{item.title}</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InteractiveRiverVsOcean;
