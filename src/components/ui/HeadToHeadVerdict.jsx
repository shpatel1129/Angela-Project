import React, { useState } from 'react';
import FadeIn from './FadeIn';
import { ArrowRight, Trophy } from 'lucide-react';

const HeadToHeadVerdict = ({
  title = "The Final Verdict",
  subtitle = "Which Luxury River Cruise Is Right for You?",
  brand1,
  brand2
}) => {
  const [hoveredBrand, setHoveredBrand] = useState(null);

  const BrandCard = ({ brand, isHovered, onHover, onLeave, id }) => {
    return (
      <div 
        className={`relative w-full overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] cursor-pointer group ${
          hoveredBrand === id ? 'lg:flex-[1.5]' : hoveredBrand ? 'lg:flex-[0.5]' : 'lg:flex-1'
        } h-[600px] lg:h-[700px]`}
        onMouseEnter={onHover}
        onMouseLeave={onLeave}
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={brand.image} 
            alt={brand.name} 
            className="w-full h-full object-cover transition-transform duration-[20s] ease-linear group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-navy-950/40 group-hover:bg-navy-950/20 transition-colors duration-700"></div>
          {/* Gradient for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/60 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end text-white z-10">
          <div className="flex items-center gap-3 mb-4">
            <Trophy className={`w-6 h-6 text-ts-gold ${hoveredBrand === id ? 'animate-pulse' : ''}`} />
            <span className="font-sans text-sm uppercase tracking-[0.2em] font-bold text-ts-gold">
              {brand.winnerTag}
            </span>
          </div>
          <h3 className="font-display text-4xl md:text-5xl lg:text-6xl mb-4 font-light drop-shadow-md">
            {brand.name}
          </h3>
          
          <div className={`overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] ${
            hoveredBrand === id ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 lg:max-h-0 lg:opacity-0 max-h-24 opacity-100' // Always visible on mobile, reveal on hover on desktop
          }`}>
            <p className="font-sans text-base md:text-lg text-white/90 mb-6 max-w-lg leading-relaxed drop-shadow">
              {brand.verdict}
            </p>
            <ul className="space-y-2 mb-8">
              {brand.highlights.map((highlight, idx) => (
                <li key={idx} className="flex items-center gap-3 font-sans text-sm md:text-base text-white/80">
                  <div className="w-1.5 h-1.5 rounded-full bg-ts-gold flex-shrink-0"></div>
                  {highlight}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center gap-2 font-sans text-sm uppercase tracking-[0.1em] text-white font-medium group-hover:text-ts-gold transition-colors">
            <span>Explore {brand.name}</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="w-full bg-navy-950 pt-24 pb-0">
      <div className="max-w-[1400px] mx-auto px-6 mb-16 text-center">
        <FadeIn>
          <h2 className="font-display text-4xl md:text-5xl text-white mb-4">{title}</h2>
          <p className="font-sans text-lg text-white/80 max-w-2xl mx-auto">{subtitle}</p>
        </FadeIn>
      </div>

      <div className="w-full flex flex-col lg:flex-row">
        <BrandCard 
          brand={brand1} 
          id="brand1" 
          isHovered={hoveredBrand === 'brand1'}
          onHover={() => setHoveredBrand('brand1')}
          onLeave={() => setHoveredBrand(null)}
        />
        <BrandCard 
          brand={brand2} 
          id="brand2" 
          isHovered={hoveredBrand === 'brand2'}
          onHover={() => setHoveredBrand('brand2')}
          onLeave={() => setHoveredBrand(null)}
        />
      </div>
    </section>
  );
};

export default HeadToHeadVerdict;
