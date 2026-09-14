import React, { useState } from 'react';
import { Ship, Wind, Anchor, ChevronRight } from 'lucide-react';
import FadeIn from './FadeIn';

const TripleSailingClassCarousel = ({ data, images }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const items = data || [
    {
      title: "Wind Surf",
      subtitle: "The Flagship Sailing Yacht",
      description: "With seven sails and expansive outdoor spaces, Wind Surf is the largest and most iconic of the Wind Class yachts, offering a perfect blend of genuine sailing romance and premium amenities.",
      features: ["342 Guests", "7 Sails", "Largest Wind Class Yacht"]
    },
    {
      title: "Windstar",
      subtitle: "Intimate Sailing Experience",
      description: "An incredibly intimate four-masted sailing yacht. With just 148 guests, it feels like your own private yacht, able to anchor in hidden coves and secluded lagoons.",
      features: ["148 Guests", "4 Sails", "Ultimate Intimacy"]
    },
    {
      title: "Wind Spirit",
      subtitle: "The Sister Ship",
      description: "Identical to Windstar, Wind Spirit brings the classic four-masted sailing experience to some of the world's most beautiful coastal destinations with exceptional personalized service.",
      features: ["148 Guests", "4 Sails", "Classic Elegance"]
    }
  ];

  return (
    <section className="w-full py-20 bg-ice-50 relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gold-400/20"></div>
      <div className="absolute bottom-0 inset-x-0 h-px bg-gold-400/20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest text-gold-400 font-semibold px-4 py-1.5 rounded-full bg-gold-400/10 border border-gold-400/30 mb-4">
              <Ship className="w-3.5 h-3.5" />
              <span>Sailing Class Comparison</span>
            </span>
            <h2 className="text-3xl md:text-5xl font-display text-navy-950">The Wind Class Fleet</h2>
            <p className="text-slate-600 mt-4 max-w-2xl mx-auto">Explore the differences between Windstar's legendary sailing yachts.</p>
          </div>
        </FadeIn>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Navigation/Selection Panel */}
          <div className="w-full lg:w-1/3 flex flex-col space-y-4">
            {items.map((item, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`text-left p-6 rounded-xl transition-all duration-300 border ${
                  activeIndex === idx 
                    ? 'bg-navy-950 text-white border-gold-400 shadow-xl scale-105' 
                    : 'bg-white text-navy-900 border-slate-200 hover:border-gold-400/50 hover:shadow-md'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-display text-2xl">{item.title}</h3>
                  {activeIndex === idx && <ChevronRight className="w-5 h-5 text-gold-400" />}
                </div>
                <div className={`text-sm font-semibold tracking-wide uppercase ${activeIndex === idx ? 'text-gold-400' : 'text-slate-500'}`}>
                  {item.subtitle}
                </div>
              </button>
            ))}
          </div>

          {/* Display Panel */}
          <div className="w-full lg:w-2/3">
            <FadeIn key={activeIndex}>
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200">
                <div className="h-[300px] sm:h-[400px] relative">
                  <img 
                    src={images && images[activeIndex] ? images[activeIndex] : '/api/placeholder/800/600'} 
                    alt={items[activeIndex].title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/20 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-8 w-full">
                    <div className="flex items-center space-x-2 text-gold-400 mb-3">
                      <Wind className="w-5 h-5" />
                      <span className="font-semibold uppercase tracking-widest text-sm">Wind Class</span>
                    </div>
                    <h3 className="text-4xl md:text-5xl font-display text-white mb-2">{items[activeIndex].title}</h3>
                  </div>
                </div>
                <div className="p-8 md:p-10 bg-navy-950 text-white">
                  <p className="text-slate-300 text-lg leading-relaxed mb-8">
                    {items[activeIndex].description}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-slate-800">
                    {items[activeIndex].features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex flex-col">
                        <span className="text-gold-400 mb-2"><Anchor className="w-5 h-5" /></span>
                        <span className="text-sm font-semibold text-white">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TripleSailingClassCarousel;
