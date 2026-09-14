import React, { useState } from 'react';
import FadeIn from './FadeIn';

import riverImg from '../../assets/Amawaterways/tain-l-hermitage-rhone-river-vineyards-france.webp';
import oceanImg from '../../assets/Amawaterways/AmaMagna_Exterior_Aerial_AT_Grein_Danube_Jul 2024_PhotogVV_DJI_175451_0122_D_LE_Edit-3.webp'; // Using a wide/grand shot to represent "Ocean/Large" scale if an ocean pic isn't available

const InteractiveComparisonSlider = ({ title, subtitle, features }) => {
  const [activeSide, setActiveSide] = useState('river'); // 'river' or 'ocean'

  return (
    <section className="relative w-full min-h-[85vh] bg-navy-950 overflow-hidden flex flex-col justify-center py-20">
      
      {/* Background Images with Crossfade */}
      <div 
        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${activeSide === 'river' ? 'opacity-40 scale-105' : 'opacity-0 scale-100'}`}
        style={{ backgroundImage: `url(${riverImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      <div 
        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${activeSide === 'ocean' ? 'opacity-40 scale-105' : 'opacity-0 scale-100'}`}
        style={{ backgroundImage: `url(${oceanImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      
      {/* Dark Overlay for Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/60 to-navy-950/90 z-10" />

      <div className="relative z-20 container mx-auto px-6 h-full flex flex-col">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-4xl md:text-5xl text-white mb-4">
              {title}
            </h2>
            <p className="font-sans text-lg text-ice-200">
              {subtitle}
            </p>
          </div>
        </FadeIn>

        {/* Interactive Toggle */}
        <div className="flex justify-center mb-12">
          <div className="bg-white/10 backdrop-blur-md p-1 rounded-full border border-white/20 flex relative">
            <div 
              className={`absolute top-1 bottom-1 left-1 w-[calc(50%-4px)] bg-white rounded-full transition-transform duration-500 ease-out ${activeSide === 'ocean' ? 'translate-x-full' : 'translate-x-0'}`} 
            />
            <button 
              className={`relative z-10 px-8 py-3 rounded-full font-sans text-sm tracking-widest uppercase transition-colors duration-300 w-48 ${activeSide === 'river' ? 'text-navy-950 font-semibold' : 'text-white'}`}
              onClick={() => setActiveSide('river')}
            >
              River Cruise
            </button>
            <button 
              className={`relative z-10 px-8 py-3 rounded-full font-sans text-sm tracking-widest uppercase transition-colors duration-300 w-48 ${activeSide === 'ocean' ? 'text-navy-950 font-semibold' : 'text-white'}`}
              onClick={() => setActiveSide('ocean')}
            >
              Ocean Cruise
            </button>
          </div>
        </div>

        {/* Features Comparison List */}
        <div className="max-w-5xl mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, idx) => (
              <div 
                key={idx} 
                className="bg-navy-900/60 backdrop-blur-md border border-white/10 rounded-xl p-6 transition-transform duration-300 hover:-translate-y-1"
              >
                <h4 className="text-gold-400 font-sans text-xs uppercase tracking-widest mb-3">
                  {feature.name}
                </h4>
                <div className="relative h-16 overflow-hidden">
                  <div className={`absolute inset-0 transition-transform duration-500 ease-in-out ${activeSide === 'river' ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
                    <p className="text-white font-sans text-lg">{feature.river}</p>
                  </div>
                  <div className={`absolute inset-0 transition-transform duration-500 ease-in-out ${activeSide === 'ocean' ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
                    <p className="text-ice-300 font-sans text-lg">{feature.ocean}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default InteractiveComparisonSlider;
