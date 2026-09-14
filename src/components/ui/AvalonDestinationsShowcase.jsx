import React, { useState } from 'react';
import FadeIn from './FadeIn';

// Use realistic images for destinations
import danubeImg from '../../assets/Amawaterways/hungarian-parliament-danube-river-view.webp';
import rhineImg from '../../assets/Amawaterways/AmaSiena_DE_Rhineland_MausCastle_SG_DSC03900.webp';
import seineImg from '../../assets/destinations/seine/paris-seine-river-pont-neuf-bridge.webp';
import rhoneImg from '../../assets/destinations/rhone/FR_Avignon_AmaCello_PhotogVV_GH_DJI_0825.webp';
import douroImg from '../../assets/destinations/douro/douro-valley-vineyards-portugal-river-cruise.webp';
import moselleImg from '../../assets/destinations/rhone/tain-l-hermitage-rhone-river-vineyards-france.webp';
import mekongImg from '../../assets/destinations/mekong/AmaDara_Exterior_Mekong.webp';
import nileImg from '../../assets/destinations/nile/Nile_River_View.webp';
import christmasImg from '../../assets/destinations/christmas/RO_Brasov_Christmas-Market_PhotogVV_A9208387-Enhanced-NR.webp';

const imageMap = {
  danube_placeholder: danubeImg,
  rhine_placeholder: rhineImg,
  seine_placeholder: seineImg,
  rhone_placeholder: rhoneImg,
  douro_placeholder: douroImg,
  moselle_placeholder: moselleImg,
  mekong_placeholder: mekongImg,
  nile_placeholder: nileImg,
  christmas_placeholder: christmasImg,
};

const AvalonDestinationsShowcase = ({ destinations }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!destinations || destinations.length === 0) return null;

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <h2 className="font-display text-4xl md:text-5xl text-navy-950 mb-6">River by River Reviews</h2>
            <p className="font-sans text-lg text-navy-800 leading-relaxed">
              Explore Avalon's most popular river cruise regions. Choose the destination first, then the ship.
            </p>
          </FadeIn>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 min-h-[600px]">
          {/* Navigation Sidebar */}
          <div className="lg:w-1/3 flex flex-col space-y-2">
            {destinations.map((dest, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`text-left px-6 py-4 rounded-xl transition-all duration-300 border-l-4 ${
                  activeIndex === idx
                    ? 'bg-navy-950 text-white border-gold-500 shadow-xl'
                    : 'bg-ice-50 text-navy-900 border-transparent hover:bg-ice-100'
                }`}
              >
                <div className="flex justify-between items-center">
                  <span className="font-display text-xl">{dest.river}</span>
                  <span className={`text-sm ${activeIndex === idx ? 'text-gold-400' : 'text-gold-600'}`}>{dest.rating}</span>
                </div>
                <div className={`text-sm mt-1 ${activeIndex === idx ? 'text-ice-100' : 'text-navy-600'}`}>
                  {dest.countries.slice(0, 3).join(', ')}{dest.countries.length > 3 ? '...' : ''}
                </div>
              </button>
            ))}
          </div>

          {/* Active Content Area */}
          <div className="lg:w-2/3 relative rounded-2xl overflow-hidden shadow-2xl group">
            {destinations.map((dest, idx) => {
              const bgImg = imageMap[dest.imageKey || dest.image] || danubeImg;
              return (
                <div
                  key={idx}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                    activeIndex === idx ? 'opacity-100 z-10' : 'opacity-0 z-0'
                  }`}
                >
                  <div 
                    className="absolute inset-0 bg-cover bg-center transform group-hover:scale-105 transition-transform duration-[10s]"
                    style={{ backgroundImage: `url(${bgImg})` }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/60 to-transparent"></div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white">
                    <FadeIn key={`content-${idx}`}>
                      <h3 className="font-display text-4xl md:text-5xl text-gold-400 mb-4">{dest.river}</h3>
                      <p className="font-sans text-lg text-ice-50 mb-6 leading-relaxed max-w-3xl">
                        {dest.description}
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 border-t border-white/20 pt-8">
                        <div>
                          <h4 className="font-sans text-sm tracking-widest uppercase text-gold-500 font-bold mb-3">Best For</h4>
                          <ul className="space-y-2">
                            {dest.bestFor.slice(0,4).map((item, i) => (
                              <li key={i} className="flex items-center text-sm text-ice-100">
                                <span className="w-1.5 h-1.5 bg-gold-400 rounded-full mr-2"></span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-sans text-sm tracking-widest uppercase text-gold-500 font-bold mb-3">Highlights</h4>
                          <ul className="space-y-2">
                            {dest.highlights.slice(0,4).map((item, i) => (
                              <li key={i} className="flex items-center text-sm text-ice-100">
                                <span className="w-1.5 h-1.5 bg-gold-400 rounded-full mr-2"></span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </FadeIn>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AvalonDestinationsShowcase;
