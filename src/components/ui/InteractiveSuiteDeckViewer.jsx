import React, { useState } from 'react';
import FadeIn from './FadeIn';
import MasterImage from './MasterImage';
import { Check } from 'lucide-react';

const InteractiveSuiteDeckViewer = ({ title, subtitle, suites }) => {
  const [activeSuiteIndex, setActiveSuiteIndex] = useState(0);

  if (!suites || suites.length === 0) return null;

  const activeSuite = suites[activeSuiteIndex];

  return (
    <section className="w-full py-24 lg:py-32 bg-navy-950 text-white relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none mix-blend-screen">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-ts-gold rounded-full blur-[150px]"></div>
        <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600 rounded-full blur-[150px]"></div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <FadeIn>
            {subtitle && (
              <span className="font-sans text-xs font-bold tracking-[0.2em] uppercase text-ts-gold mb-4 block">
                {subtitle}
              </span>
            )}
            <h2 className="font-display text-4xl md:text-5xl lg:text-7xl text-white drop-shadow-lg mb-6">
              {title}
            </h2>
          </FadeIn>
        </div>

        {/* Interactive Layout */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          
          {/* Suite Selectors (Left side on desktop) */}
          <div className="w-full lg:w-1/3 flex flex-col gap-4">
            {suites.map((suite, index) => {
              const isActive = index === activeSuiteIndex;
              return (
                <button
                  key={index}
                  onClick={() => setActiveSuiteIndex(index)}
                  className={`relative overflow-hidden text-left p-6 lg:p-8 rounded-3xl transition-all duration-500 border ${
                    isActive 
                      ? 'bg-white/10 border-ts-gold shadow-[0_0_30px_rgba(203,160,82,0.15)] scale-105' 
                      : 'bg-transparent border-white/10 hover:bg-white/5 hover:border-white/20'
                  }`}
                >
                  <div className="flex justify-between items-center mb-2">
                    <h3 className={`font-display text-2xl lg:text-3xl ${isActive ? 'text-ts-gold' : 'text-white'}`}>
                      {suite.name}
                    </h3>
                  </div>
                  <p className="font-sans text-sm text-white/60 mb-4">{suite.size}</p>
                  
                  {/* Subtle active indicator bar */}
                  {isActive && (
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-ts-gold to-transparent rounded-l-3xl"></div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Suite Visualizer (Right side on desktop) */}
          <div className="w-full lg:w-2/3 relative min-h-[600px] lg:min-h-[700px] rounded-[2.5rem] overflow-hidden bg-black/40 border border-white/10 backdrop-blur-md">
            
            {/* Image Crossfade Container */}
            <div className="absolute inset-0 w-full h-full">
              {suites.map((suite, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                    index === activeSuiteIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                  }`}
                >
                  {suite.image && (
                    <MasterImage
                      src={suite.image}
                      alt={suite.name}
                      className="w-full h-full object-cover object-center"
                    />
                  )}
                  {/* Gradient Overlay for Text Readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent"></div>
                </div>
              ))}
            </div>

            {/* Content Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12 z-20">
              <FadeIn key={`content-${activeSuiteIndex}`} direction="up">
                <div className="max-w-2xl">
                  <h4 className="font-display text-3xl lg:text-4xl text-white mb-4">
                    {activeSuite.name}
                  </h4>
                  <p className="font-sans text-base lg:text-lg text-white/80 leading-relaxed mb-8">
                    {activeSuite.description}
                  </p>
                  
                  {/* Features List */}
                  {activeSuite.features && activeSuite.features.length > 0 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {activeSuite.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className="w-6 h-6 rounded-full bg-ts-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check className="w-3.5 h-3.5 text-ts-gold" />
                          </div>
                          <span className="font-sans text-sm text-white/90">{feature}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </FadeIn>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default InteractiveSuiteDeckViewer;
