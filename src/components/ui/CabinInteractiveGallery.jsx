import React, { useState } from 'react';
import FadeIn from './FadeIn';
import { Ship, LayoutGrid, Info, Compass, CheckCircle2 } from 'lucide-react';

const CabinInteractiveGallery = ({ sailingData, starClassData, sailingImages, starClassImages }) => {
  const [activeTab, setActiveTab] = useState('sailing'); // 'sailing' | 'starClass'
  const [activeShipSubtab, setActiveShipSubtab] = useState('windSurf'); // 'windSurf' | 'windStarSpirit'

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-50 rounded-full blur-[100px] opacity-60 -translate-y-1/4 translate-x-1/4"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-ice-50 rounded-full blur-[120px] opacity-60 translate-y-1/4 -translate-x-1/4"></div>

      <div className="max-w-[1300px] mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <FadeIn>
            <span className="font-sans text-xs uppercase tracking-[0.2em] text-gold-500 font-semibold px-4 py-1.5 bg-gold-50 rounded-full inline-block mb-4">
              Explore Accommodations
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-navy-950 mb-6">
              Compare Yacht Accommodations
            </h2>
            <div className="w-24 h-1 bg-gold-500 mx-auto rounded-full"></div>
          </FadeIn>
        </div>

        {/* Fleet Class Switcher (Sailing vs Star Class) */}
        <div className="flex justify-center mb-12">
          <FadeIn className="bg-navy-950 p-2 rounded-2xl flex gap-2">
            <button
              onClick={() => setActiveTab('sailing')}
              className={`flex items-center gap-3 px-6 py-3.5 rounded-xl font-sans text-sm font-bold tracking-wider uppercase transition-all duration-300 ${
                activeTab === 'sailing'
                  ? 'bg-gold-500 text-navy-950 shadow-lg'
                  : 'text-ice-200/80 hover:text-white'
              }`}
            >
              <Compass className="w-5 h-5" />
              Sailing Yachts
            </button>
            <button
              onClick={() => setActiveTab('starClass')}
              className={`flex items-center gap-3 px-6 py-3.5 rounded-xl font-sans text-sm font-bold tracking-wider uppercase transition-all duration-300 ${
                activeTab === 'starClass'
                  ? 'bg-gold-500 text-navy-950 shadow-lg'
                  : 'text-ice-200/80 hover:text-white'
              }`}
            >
              <Ship className="w-5 h-5" />
              Star Class Suites
            </button>
          </FadeIn>
        </div>

        {/* Sailing Yacht Section */}
        {activeTab === 'sailing' && (
          <FadeIn key="sailing-tab">
            <div className="text-center mb-10">
              <p className="font-sans text-navy-600 max-w-3xl mx-auto mb-8">
                {sailingData.description}
              </p>
              
              {/* Sailing Ship Sub-tabs */}
              <div className="flex justify-center gap-4">
                <button
                  onClick={() => setActiveShipSubtab('windSurf')}
                  className={`px-5 py-2.5 rounded-full font-sans text-xs uppercase font-bold tracking-widest border transition-all duration-300 ${
                    activeShipSubtab === 'windSurf'
                      ? 'bg-navy-950 text-white border-navy-950'
                      : 'bg-white text-navy-700 border-ice-200 hover:border-navy-950'
                  }`}
                >
                  Wind Surf (Flagship)
                </button>
                <button
                  onClick={() => setActiveShipSubtab('windStarSpirit')}
                  className={`px-5 py-2.5 rounded-full font-sans text-xs uppercase font-bold tracking-widest border transition-all duration-300 ${
                    activeShipSubtab === 'windStarSpirit'
                      ? 'bg-navy-950 text-white border-navy-950'
                      : 'bg-white text-navy-700 border-ice-200 hover:border-navy-950'
                  }`}
                >
                  Wind Star & Wind Spirit
                </button>
              </div>
            </div>

            {/* Ship Categories Display */}
            {activeShipSubtab === 'windSurf' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {sailingData.windSurf.categories.map((cat, idx) => (
                  <div key={idx} className="bg-ice-50/50 rounded-3xl p-8 border border-ice-100/80 hover:border-gold-300/50 transition-all duration-500 shadow-sm flex flex-col justify-between group">
                    <div>
                      {sailingImages && sailingImages[idx] && (
                        <div className="relative h-48 overflow-hidden rounded-2xl mb-6">
                          <img 
                            src={sailingImages[idx]} 
                            alt={cat.name} 
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                        </div>
                      )}
                      <div className="flex justify-between items-start gap-4 mb-4">
                        <h3 className="font-display text-2xl text-navy-950">{cat.name}</h3>
                        <span className="font-sans text-xs font-bold uppercase tracking-widest text-gold-600 bg-gold-50 border border-gold-200/50 px-3 py-1 rounded-full whitespace-nowrap">
                          {cat.size}
                        </span>
                      </div>
                      <p className="font-sans text-sm text-navy-700 leading-relaxed mb-6">
                        {cat.details}
                      </p>
                    </div>
                    <div className="border-t border-ice-100 pt-6 mt-6">
                      <p className="font-sans text-xs uppercase tracking-wider text-navy-400 font-bold mb-1">
                        Best For
                      </p>
                      <p className="font-sans text-sm text-navy-800 font-medium">
                        {cat.bestFor}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Wind Star */}
                <div className="bg-ice-50/30 rounded-3xl p-8 border border-ice-100 shadow-sm">
                  <h3 className="font-display text-3xl text-navy-950 mb-4">{sailingData.windStar.title}</h3>
                  <p className="font-sans text-sm text-navy-600 mb-8">{sailingData.windStar.description}</p>
                  {sailingData.windStar.categories.map((cat, idx) => (
                    <div key={idx} className="bg-white rounded-2xl p-6 border border-ice-100">
                      <div className="flex justify-between items-center mb-3">
                        <h4 className="font-sans font-bold text-navy-900">{cat.name}</h4>
                        <span className="font-sans text-xs font-bold text-navy-500 bg-ice-50 px-3 py-1 rounded-full">{cat.size}</span>
                      </div>
                      <p className="font-sans text-sm text-navy-600 mb-4">{cat.details}</p>
                      <p className="font-sans text-xs text-navy-500"><strong className="text-navy-700">Best For:</strong> {cat.bestFor}</p>
                    </div>
                  ))}
                </div>

                {/* Wind Spirit */}
                <div className="bg-ice-50/30 rounded-3xl p-8 border border-ice-100 shadow-sm">
                  <h3 className="font-display text-3xl text-navy-950 mb-4">{sailingData.windSpirit.title}</h3>
                  <p className="font-sans text-sm text-navy-600 mb-8">{sailingData.windSpirit.description}</p>
                  <div className="space-y-4">
                    {sailingData.windSpirit.categories.map((cat, idx) => (
                      <div key={idx} className="bg-white rounded-2xl p-6 border border-ice-100">
                        <div className="flex justify-between items-center mb-3">
                          <h4 className="font-sans font-bold text-navy-900">{cat.name}</h4>
                          <span className="font-sans text-xs font-bold text-navy-500 bg-ice-50 px-3 py-1 rounded-full">{cat.size}</span>
                        </div>
                        <p className="font-sans text-sm text-navy-600 mb-4">{cat.details}</p>
                        <p className="font-sans text-xs text-navy-500"><strong className="text-navy-700">Best For:</strong> {cat.bestFor}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </FadeIn>
        )}

        {/* Star Class All-Suite Yachts */}
        {activeTab === 'starClass' && (
          <FadeIn key="star-class-tab">
            <p className="font-sans text-navy-600 max-w-3xl mx-auto text-center mb-12">
              {starClassData.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {starClassData.suites.map((suite, idx) => (
                <div key={idx} className="bg-navy-950 rounded-3xl p-8 border border-navy-800 hover:border-gold-500/50 transition-all duration-500 shadow-xl flex flex-col justify-between group text-white">
                  <div>
                    {starClassImages && starClassImages[idx] && (
                      <div className="relative h-56 overflow-hidden rounded-2xl mb-6">
                        <img 
                          src={starClassImages[idx]} 
                          alt={suite.name} 
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/20 to-transparent"></div>
                      </div>
                    )}
                    <div className="flex justify-between items-start gap-4 mb-4">
                      <h3 className="font-display text-2xl text-white">{suite.name}</h3>
                      <span className="font-sans text-xs font-bold uppercase tracking-widest text-gold-400 bg-gold-950 border border-gold-500/30 px-3 py-1 rounded-full whitespace-nowrap">
                        {suite.size}
                      </span>
                    </div>
                    <p className="font-sans text-sm text-ice-200/80 leading-relaxed mb-6">
                      {suite.details}
                    </p>
                  </div>
                  <div className="border-t border-navy-800 pt-6 mt-6">
                    <p className="font-sans text-xs uppercase tracking-wider text-gold-500 font-bold mb-1">
                      Best For
                    </p>
                    <p className="font-sans text-sm text-white font-medium">
                      {suite.bestFor}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        )}
      </div>
    </section>
  );
};

export default CabinInteractiveGallery;
