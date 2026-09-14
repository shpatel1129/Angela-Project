import React, { useState } from 'react';
import FadeIn from './FadeIn';

const InteractiveFleetComparison = ({ title, subtitle, ships }) => {
  const [activeShip, setActiveShip] = useState(0);

  if (!ships || ships.length === 0) return null;

  const current = ships[activeShip];

  return (
    <section className="py-20 bg-ice-50 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <h2 className="font-display text-4xl md:text-5xl text-navy-950 mb-6">{title}</h2>
            {subtitle && (
              <p className="font-sans text-lg text-navy-600">{subtitle}</p>
            )}
          </FadeIn>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          
          {/* Navigation / Selection List */}
          <div className="w-full lg:w-1/3 flex flex-col gap-3">
            {ships.map((ship, index) => (
              <button
                key={index}
                onClick={() => setActiveShip(index)}
                className={`group relative flex items-center justify-between p-5 rounded-2xl transition-all duration-500 overflow-hidden ${
                  activeShip === index 
                    ? 'bg-navy-950 text-white shadow-xl scale-[1.02]' 
                    : 'bg-white text-navy-900 hover:bg-navy-50 border border-ice-200'
                }`}
              >
                {/* Background shimmer for active state */}
                {activeShip === index && (
                  <div className="absolute inset-0 bg-gradient-to-r from-navy-800 to-navy-950 opacity-50"></div>
                )}
                
                <div className="relative z-10 text-left">
                  <h3 className="font-display text-xl md:text-2xl mb-1 group-hover:text-gold-500 transition-colors">
                    {ship.name}
                  </h3>
                  <p className={`font-sans text-sm tracking-wide uppercase ${activeShip === index ? 'text-ice-200' : 'text-navy-500'}`}>
                    {ship.type}
                  </p>
                </div>
                
                <div className="relative z-10">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 ${activeShip === index ? 'bg-gold-500 text-navy-950 rotate-90' : 'bg-ice-100 text-navy-400 group-hover:bg-gold-100 group-hover:text-gold-600'}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Main Display Area */}
          <div className="w-full lg:w-2/3 bg-white rounded-3xl p-6 lg:p-10 shadow-2xl border border-ice-100 relative min-h-[600px] flex flex-col justify-center">
            
            {/* Animated content wrapper based on active index */}
            <div key={activeShip} className="animate-fade-in-up">
              
              <div className="flex flex-col xl:flex-row gap-8 items-center mb-8">
                {/* Image Showcase */}
                <div className="w-full xl:w-1/2 rounded-2xl overflow-hidden aspect-[4/3] shadow-lg relative group">
                  <div className="absolute inset-0 bg-navy-950/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                  <img 
                    src={current.image} 
                    alt={current.name} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  {/* Floating Badge */}
                  <div className="absolute bottom-4 right-4 z-20 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-lg">
                    <span className="font-sans text-xs font-bold uppercase tracking-wider text-navy-900">
                      {current.guests} Guests
                    </span>
                  </div>
                </div>

                {/* Description & Overview */}
                <div className="w-full xl:w-1/2">
                  <h3 className="font-display text-3xl text-navy-950 mb-4">{current.name}</h3>
                  <p className="font-sans text-navy-600 leading-relaxed mb-6">
                    {current.description}
                  </p>
                  
                  {/* Ideal For Note */}
                  <div className="bg-ice-50 p-4 rounded-xl border border-ice-200 border-l-4 border-l-gold-500">
                    <span className="block font-sans text-xs uppercase tracking-widest text-navy-400 font-bold mb-1">Ideal For</span>
                    <span className="font-display text-navy-900 text-lg">{current.idealFor}</span>
                  </div>
                </div>
              </div>

              {/* Specification Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-8 border-t border-ice-100">
                
                <div className="bg-white border border-ice-200 rounded-xl p-4 text-center hover:border-gold-300 transition-colors shadow-sm">
                  <div className="text-gold-500 mb-2">
                    <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                  </div>
                  <div className="font-sans text-xs uppercase tracking-wider text-navy-400 mb-1">Crew</div>
                  <div className="font-display text-xl text-navy-950">{current.crew}</div>
                </div>

                <div className="bg-white border border-ice-200 rounded-xl p-4 text-center hover:border-gold-300 transition-colors shadow-sm">
                  <div className="text-gold-500 mb-2">
                    <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <div className="font-sans text-xs uppercase tracking-wider text-navy-400 mb-1">Best Regions</div>
                  <div className="font-display text-base text-navy-950 leading-tight">{current.bestRegions}</div>
                </div>

                <div className="bg-white border border-ice-200 rounded-xl p-4 text-center hover:border-gold-300 transition-colors shadow-sm">
                  <div className="text-gold-500 mb-2">
                    <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                  </div>
                  <div className="font-sans text-xs uppercase tracking-wider text-navy-400 mb-1">Rooms</div>
                  <div className="font-display text-xl text-navy-950">{current.rooms}</div>
                </div>

                <div className="bg-white border border-ice-200 rounded-xl p-4 text-center hover:border-gold-300 transition-colors shadow-sm">
                  <div className="text-gold-500 mb-2">
                    <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <div className="font-sans text-xs uppercase tracking-wider text-navy-400 mb-1">Built/Refurb</div>
                  <div className="font-display text-xl text-navy-950">{current.year}</div>
                </div>

              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveFleetComparison;
