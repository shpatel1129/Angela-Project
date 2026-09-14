import React, { useState } from 'react';
import FadeIn from './FadeIn';

import springImg from '../../assets/destinations/seine/claude-monet-house-giverny-france-gardens.webp';
import summerImg from '../../assets/destinations/rhone/provence-lavender-fields-senanque-abbey-france.webp';
import autumnImg from '../../assets/destinations/rhone/tain-l-hermitage-rhone-river-vineyards-france.webp';
import winterImg from '../../assets/destinations/christmas/RO_Brasov_Christmas-Market_Guests_PhotogVV_A9208367-Enhanced-NR.webp';

const imageMap = {
  spring: springImg,
  summer: summerImg,
  autumn: autumnImg,
  winter: winterImg,
};

const ImmersiveSeasonSelector = ({ title, subtitle, seasons }) => {
  const [activeSeason, setActiveSeason] = useState(seasons[0]);

  return (
    <section className="relative w-full min-h-[90vh] bg-navy-950 overflow-hidden flex flex-col">
      {/* Background Images */}
      {seasons.map((season) => (
        <div
          key={season.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            activeSeason.id === season.id ? 'opacity-50 scale-105' : 'opacity-0 scale-100'
          }`}
          style={{
            backgroundImage: `url(${imageMap[season.id]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transitionProperty: 'opacity, transform',
          }}
        />
      ))}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950/80 via-navy-900/40 to-navy-950/90 z-10 pointer-events-none" />

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 py-20 flex flex-col flex-grow justify-between">
        
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-4xl md:text-5xl text-white mb-4">
              {title}
            </h2>
            <p className="font-sans text-lg text-white/90">
              {subtitle}
            </p>
          </div>
        </FadeIn>

        {/* Season Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {seasons.map((season) => (
            <button
              key={season.id}
              onMouseEnter={() => setActiveSeason(season)}
              onClick={() => setActiveSeason(season)}
              className={`px-6 py-3 rounded-full font-sans text-sm tracking-widest uppercase transition-all duration-300 backdrop-blur-md border ${
                activeSeason.id === season.id
                  ? 'bg-white text-navy-950 border-white'
                  : 'bg-white/10 text-white border-white/20 hover:bg-white/20'
              }`}
            >
              {season.name.split(' (')[0]}
            </button>
          ))}
        </div>

        {/* Active Season Details */}
        <div className="max-w-4xl mx-auto w-full bg-navy-950/60 backdrop-blur-lg border border-white/10 p-8 md:p-12 rounded-2xl shadow-2xl transition-all duration-500">
          <div className="text-center mb-8">
            <h3 className="font-display text-3xl md:text-4xl text-gold-400 mb-2">
              {activeSeason.name}
            </h3>
            <p className="font-sans text-xl text-white italic">
              {activeSeason.tagline}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h4 className="font-sans text-sm uppercase tracking-widest text-white mb-4 border-b border-white/10 pb-2">
                Why Travelers Love It
              </h4>
              <ul className="space-y-3">
                {activeSeason.advantages.map((adv, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-gold-400 mr-3">✦</span>
                    <span className="text-white/90 text-sm leading-relaxed">{adv}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-sans text-sm uppercase tracking-widest text-white mb-4 border-b border-white/10 pb-2">
                Expert Consideration
              </h4>
              <p className="text-white/90 text-sm leading-relaxed border-l-2 border-gold-400 pl-4 py-1 bg-white/5 rounded-r">
                {activeSeason.considerations}
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ImmersiveSeasonSelector;
