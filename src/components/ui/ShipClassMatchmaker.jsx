import React, { useState } from 'react';
import { Ship, Wind, CheckCircle2, ArrowRight } from 'lucide-react';
import FadeIn from './FadeIn';

const ShipClassMatchmaker = ({ starClassImg, windClassImg }) => {
  const [activeClass, setActiveClass] = useState('star');

  const classes = {
    star: {
      name: "Star Class Motor Yachts",
      tagline: "The Easiest Transition for River Cruisers",
      desc: "All-suite motor yachts offering an easy bridge into small-ship ocean cruising. You get the intimacy you love, comfortable suites, and a familiar luxury environment—without the added dynamic of true wind-powered sailing.",
      img: starClassImg,
      icon: <Ship className="w-5 h-5 text-gold-400" />,
      highlights: [
        "All-suite accommodations",
        "Contemporary luxury yacht experience",
        "Familiar, stable environment",
        "The most comfortable transition from river ships"
      ]
    },
    wind: {
      name: "Wind Class Sailing Yachts",
      tagline: "For the River Cruiser Who Wants Something Different",
      desc: "True sailing yachts that take the qualities you already love—small ships and intimate service—and add the romance of sailing, ocean horizons, and a completely distinctive onboard atmosphere.",
      img: windClassImg,
      icon: <Wind className="w-5 h-5 text-gold-400" />,
      highlights: [
        "True wind-powered sailing experience",
        "Extremely intimate (148 - 342 guests)",
        "Romantic, adventurous atmosphere",
        "A major, exciting departure from European rivers"
      ]
    }
  };

  const activeData = classes[activeClass];

  return (
    <section className="w-full py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest text-navy-950 font-semibold px-4 py-1.5 rounded-full bg-ice-50 border border-slate-200 mb-4">
              <Ship className="w-3.5 h-3.5" />
              <span>Which Ship Is Right For You?</span>
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-normal text-navy-950 mb-6">
              Star Class vs. Wind Class
            </h2>
            <div className="w-16 h-0.5 bg-gold-400 mx-auto mb-6"></div>
            <p className="text-base md:text-lg text-slate-600 leading-relaxed">
              If you already love river cruising, choosing the right Windstar ship may be more important than choosing the right itinerary. Select a class to see which fits your travel style.
            </p>
          </div>
        </FadeIn>

        {/* Tab Selector */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12">
          <button
            onClick={() => setActiveClass('star')}
            className={`w-full sm:w-auto px-8 py-4 rounded-xl font-display text-lg transition-all duration-300 flex items-center justify-center space-x-3 border-2 ${
              activeClass === 'star'
                ? 'bg-navy-950 text-white border-navy-950 shadow-lg scale-105'
                : 'bg-white text-navy-950 border-slate-200 hover:border-gold-400'
            }`}
          >
            <Ship className={`w-5 h-5 ${activeClass === 'star' ? 'text-gold-400' : 'text-slate-400'}`} />
            <span>Star Class Motor Yachts</span>
          </button>
          
          <button
            onClick={() => setActiveClass('wind')}
            className={`w-full sm:w-auto px-8 py-4 rounded-xl font-display text-lg transition-all duration-300 flex items-center justify-center space-x-3 border-2 ${
              activeClass === 'wind'
                ? 'bg-navy-950 text-white border-navy-950 shadow-lg scale-105'
                : 'bg-white text-navy-950 border-slate-200 hover:border-gold-400'
            }`}
          >
            <Wind className={`w-5 h-5 ${activeClass === 'wind' ? 'text-gold-400' : 'text-slate-400'}`} />
            <span>Wind Class Sailing Yachts</span>
          </button>
        </div>

        {/* Content Display */}
        <FadeIn key={activeClass}>
          <div className="bg-slate-50 rounded-3xl overflow-hidden border border-slate-200 flex flex-col lg:flex-row shadow-2xl">
            <div className="lg:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
              <div className="inline-block bg-gold-400/20 text-navy-950 font-semibold px-4 py-1.5 rounded-full text-xs uppercase tracking-widest mb-6 w-max">
                {activeData.tagline}
              </div>
              
              <h3 className="text-3xl md:text-4xl font-display text-navy-950 mb-6 flex items-center space-x-3">
                {activeData.icon}
                <span>{activeData.name}</span>
              </h3>
              
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                {activeData.desc}
              </p>
              
              <ul className="space-y-4 mb-10">
                {activeData.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                    <span className="text-navy-950 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              
              <div>
                <a 
                  href="https://www.tripsandships.com/contact" 
                  className="inline-flex items-center space-x-2 bg-navy-950 hover:bg-gold-400 text-white hover:text-navy-950 font-semibold px-8 py-4 rounded-xl transition-colors duration-300"
                >
                  <span>Request This Ship Class</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
            
            <div className="lg:w-1/2 min-h-[400px] lg:min-h-full relative">
              <img 
                src={activeData.img} 
                alt={activeData.name} 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
};

export default ShipClassMatchmaker;
