import React, { useState } from 'react';
import FadeIn from './FadeIn';
import { Heart, Compass, Wine, Gem, Star } from 'lucide-react';
import MasterImage from './MasterImage';

const RomanticMilestoneShowcase = ({ data, images = [] }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!data || !data.items || data.items.length === 0) return null;

  // Map icons to milestones conceptually
  const getIcon = (index) => {
    switch(index) {
      case 0: return <Heart className="w-6 h-6 text-ts-gold" />;
      case 1: return <Compass className="w-6 h-6 text-ts-gold" />;
      case 2: return <Wine className="w-6 h-6 text-ts-gold" />;
      case 3: return <Gem className="w-6 h-6 text-ts-gold" />;
      case 4: return <Star className="w-6 h-6 text-ts-gold" />;
      default: return <Heart className="w-6 h-6 text-ts-gold" />;
    }
  };

  return (
    <section className="w-full py-24 lg:py-32 bg-ice-50 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-ts-gold/5 rounded-full blur-[100px] pointer-events-none mix-blend-multiply"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/5 rounded-full blur-[100px] pointer-events-none mix-blend-multiply"></div>

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 lg:mb-24">
          <FadeIn>
            <span className="font-sans text-xs font-bold tracking-[0.2em] uppercase text-ts-gold mb-4 block">
              {data.subtitle}
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-navy-950 max-w-3xl mx-auto">
              {data.title}
            </h2>
            <div className="w-24 h-0.5 bg-ts-gold mx-auto mt-8"></div>
          </FadeIn>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          {/* Left: The Milestone Timeline */}
          <div className="w-full lg:w-1/3 relative">
            {/* The Connecting Path */}
            <div className="absolute left-8 md:left-10 top-10 bottom-10 w-0.5 bg-gradient-to-b from-ts-gold via-navy-800 to-ts-gold/20 hidden lg:block"></div>
            
            <div className="space-y-6">
              {data.items.map((item, idx) => (
                <div 
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`relative cursor-pointer transition-all duration-500 rounded-2xl p-6 border ${
                    activeIndex === idx 
                    ? 'bg-white shadow-xl shadow-ts-gold/10 border-ts-gold/30 scale-105 z-10' 
                    : 'bg-white/50 border-transparent hover:bg-white/80'
                  }`}
                >
                  <div className="flex items-center gap-6">
                    {/* Glowing Marker */}
                    <div className={`relative flex items-center justify-center w-12 h-12 rounded-full border-2 transition-all duration-500 bg-white z-10 ${
                      activeIndex === idx ? 'border-ts-gold shadow-[0_0_20px_rgba(203,160,82,0.4)]' : 'border-slate-200'
                    }`}>
                      {getIcon(idx)}
                      {activeIndex === idx && (
                        <div className="absolute inset-0 rounded-full animate-ping opacity-20 bg-ts-gold"></div>
                      )}
                    </div>
                    
                    <div>
                      <span className={`block font-sans text-xs font-bold tracking-[0.1em] uppercase mb-1 transition-colors ${
                        activeIndex === idx ? 'text-ts-gold' : 'text-slate-400'
                      }`}>
                        {item.year}
                      </span>
                      <h3 className={`font-display text-xl transition-colors ${
                        activeIndex === idx ? 'text-navy-950' : 'text-slate-600'
                      }`}>
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: The Interactive Recommendation Glass Card */}
          <div className="w-full lg:w-2/3">
            <div className="sticky top-32">
              <FadeIn key={activeIndex} className="h-full">
                <div className="relative rounded-[2rem] overflow-hidden bg-navy-950 shadow-2xl h-full min-h-[500px] border border-white/10 group">
                  
                  {/* Dynamic Background Image */}
                  {images[activeIndex] && (
                    <MasterImage 
                      src={images[activeIndex]} 
                      alt={data.items[activeIndex].title}
                      className="absolute inset-0 w-full h-full object-cover opacity-40 transition-transform duration-1000 group-hover:scale-110"
                    />
                  )}
                  
                  {/* Gradient Overlay for Text Readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/80 to-transparent"></div>
                  
                  {/* Glassmorphism Content Box */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12 z-20">
                    <div className="backdrop-blur-xl bg-white/5 border border-white/10 p-8 rounded-3xl shadow-lg">
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ts-gold/20 border border-ts-gold/50 mb-6">
                        <Star className="w-4 h-4 text-ts-gold fill-ts-gold" />
                        <span className="font-sans text-xs font-bold tracking-wider text-ts-gold uppercase">
                          {data.items[activeIndex].year} Expert Pick
                        </span>
                      </div>
                      
                      <h3 className="font-display text-3xl lg:text-4xl text-white mb-4">
                        {data.items[activeIndex].recommendation}
                      </h3>
                      
                      <div className="w-16 h-0.5 bg-ts-gold mb-6"></div>
                      
                      <p className="font-sans text-lg text-white/80 leading-relaxed mb-6 font-light">
                        {data.items[activeIndex].description}
                      </p>
                      
                      <div className="bg-white/10 rounded-xl p-5 border border-white/5">
                        <span className="block font-sans text-xs uppercase tracking-wider text-white/50 mb-2">Why It Works</span>
                        <p className="font-sans text-white/90 font-medium">
                          {data.items[activeIndex].why}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default RomanticMilestoneShowcase;
