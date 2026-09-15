import React from 'react';
import FadeIn from './FadeIn';
import { ArrowRight } from 'lucide-react';

const CenterCTA = ({ 
  title = "Ready to Begin Your Journey?", 
  description = "Speak with our luxury travel advisors to design your perfect itinerary.", 
  buttonText = "Contact an Advisor", 
  buttonLink = "/contact",
  image,
  imagePosition = "object-center",
  theme = "dark"
}) => {
  const isDark = theme === "dark";

  return (
    <section className={`w-full py-24 relative overflow-hidden flex items-center justify-center ${isDark ? '' : 'bg-ice-50'}`}>
      {image ? (
        <img 
          src={image} 
          alt="CTA Background" 
          className={`absolute inset-0 w-full h-full object-cover ${imagePosition}`}
        />
      ) : (
        isDark && <div className="absolute inset-0 bg-navy-900"></div>
      )}
      
      {/* Dark Overlay (only if dark theme and image exists, or just dark theme) */}
      {isDark && <div className="absolute inset-0 bg-navy-950/70"></div>}
      
      {/* Content */}
      <div className="relative z-10 max-w-[800px] mx-auto px-6 text-center">
        <FadeIn>
          <h2 className={`font-display text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight ${isDark ? 'text-white drop-shadow-lg' : 'text-navy-950'}`}>
            {title}
          </h2>
          <div className={`w-16 h-0.5 mx-auto mb-6 ${isDark ? 'bg-ts-gold' : 'bg-navy-900'}`}></div>
          <p className={`font-sans text-lg md:text-xl mb-10 max-w-2xl mx-auto font-light ${isDark ? 'text-white/90 drop-shadow' : 'text-slate-600'}`}>
            {description}
          </p>
          <a 
            href={buttonLink}
            className={`inline-flex items-center justify-center gap-3 font-sans font-medium uppercase tracking-[0.15em] text-sm px-10 py-4 transition-colors shadow-xl ${
              isDark 
                ? 'bg-white text-navy-950 hover:bg-gold-500 hover:text-navy-950' 
                : 'bg-navy-950 text-white hover:bg-gold-500 hover:text-navy-950'
            }`}
          >
            {buttonText}
            <ArrowRight className="w-4 h-4" />
          </a>
        </FadeIn>
      </div>
    </section>
  );
};

export default CenterCTA;
