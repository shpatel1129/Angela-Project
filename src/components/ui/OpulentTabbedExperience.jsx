import React, { useState } from 'react';
import FadeIn from './FadeIn';

const OpulentTabbedExperience = ({ title, subtitle, tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="relative w-full py-24 bg-navy-950 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-navy-900/50 via-navy-950 to-black/80 z-0"></div>
      
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <FadeIn>
            <h2 className="font-display text-4xl md:text-5xl text-gold-400 mb-4">{title}</h2>
            <p className="font-sans text-lg md:text-xl text-ice-200 max-w-2xl mx-auto">{subtitle}</p>
          </FadeIn>
        </div>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Tab Navigation */}
          <div className="md:w-1/3 flex flex-col space-y-2 border-l border-navy-800">
            {tabs.map((tab, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`text-left px-6 py-5 transition-all duration-300 relative group ${
                  activeTab === idx 
                    ? 'bg-navy-900/50 text-gold-400' 
                    : 'text-ice-400 hover:text-white hover:bg-navy-900/30'
                }`}
              >
                <div className={`absolute left-0 top-0 bottom-0 w-1 transition-all duration-300 ${
                  activeTab === idx ? 'bg-gold-500 shadow-[0_0_15px_rgba(212,175,55,0.5)]' : 'bg-transparent group-hover:bg-navy-700'
                }`}></div>
                <h3 className="font-display text-xl tracking-wide">{tab.title}</h3>
                {activeTab === idx && (
                  <FadeIn>
                    <p className="font-sans text-sm text-ice-200 mt-2 leading-relaxed">
                      {tab.shortDesc}
                    </p>
                  </FadeIn>
                )}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="md:w-2/3">
            <div className="relative aspect-[16/10] md:aspect-square lg:aspect-[16/10] overflow-hidden rounded-sm shadow-2xl bg-navy-900">
              {tabs.map((tab, idx) => (
                <div
                  key={idx}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                    activeTab === idx ? 'opacity-100 z-10' : 'opacity-0 z-0'
                  }`}
                >
                  <img
                    src={tab.image}
                    alt={tab.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-1000 scale-105 hover:scale-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 transform translate-y-0">
                    <span className="font-sans text-gold-500 uppercase tracking-widest text-xs font-bold mb-3 block">
                      {tab.category}
                    </span>
                    <h4 className="font-display text-3xl md:text-4xl text-white mb-4">
                      {tab.highlight}
                    </h4>
                    <p className="font-sans text-ice-200 text-lg leading-relaxed max-w-xl">
                      {tab.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpulentTabbedExperience;
