import React, { useRef, useState, useCallback } from 'react';
import FadeIn from './FadeIn';

const HolographicCard = ({ card }) => {
  const cardRef = useRef(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback((e) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Calculate mouse position relative to the center of the card
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const centerX = width / 2;
    const centerY = height / 2;
    
    // Calculate rotation (-15deg to 15deg max)
    const rotateX = -((mouseY - centerY) / centerY) * 15;
    const rotateY = ((mouseX - centerX) / centerX) * 15;
    
    setRotation({ x: rotateX, y: rotateY });
    
    // Calculate glare position
    const glareX = (mouseX / width) * 100;
    const glareY = (mouseY / height) * 100;
    setGlarePosition({ x: glareX, y: glareY });
  }, []);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotation({ x: 0, y: 0 }); // Reset rotation
  };

  return (
    <div 
      className="perspective-1000 w-full max-w-sm mx-auto h-[450px]"
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="w-full h-full relative rounded-3xl transition-transform duration-200 ease-out preserve-3d cursor-pointer"
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          transition: isHovered ? 'none' : 'transform 0.5s ease-out'
        }}
      >
        {/* Card Body */}
        <div className="absolute inset-0 bg-navy-950 rounded-3xl shadow-2xl border border-white/10 overflow-hidden flex flex-col justify-between p-10 backface-hidden">
          
          {/* Holographic Glare Effect */}
          <div 
            className="absolute inset-0 z-20 pointer-events-none transition-opacity duration-300 mix-blend-overlay"
            style={{
              opacity: isHovered ? 0.6 : 0,
              background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 60%)`
            }}
          ></div>

          {/* Holographic Rainbow Sheen */}
          <div 
            className="absolute inset-0 z-10 pointer-events-none transition-opacity duration-500 mix-blend-color-dodge opacity-0"
            style={{
              opacity: isHovered ? 0.3 : 0,
              background: `linear-gradient(${rotation.y * 3}deg, transparent 20%, rgba(203,160,82,0.4) 40%, rgba(100,200,255,0.4) 60%, transparent 80%)`
            }}
          ></div>

          <div className="relative z-30 transform translate-z-12">
            <h3 className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-ts-gold mb-2">
              {card.label}
            </h3>
            <p className="font-sans text-sm text-white/60 font-light leading-relaxed">
              {card.description}
            </p>
          </div>

          <div className="relative z-30 transform translate-z-20">
            <div className="font-display text-7xl text-white drop-shadow-2xl">
              {card.value}
            </div>
          </div>
          
        </div>
      </div>
      
      {/* Required custom CSS for 3D transforms */}
      <style dangerouslySetInnerHTML={{__html: `
        .perspective-1000 { perspective: 1000px; }
        .preserve-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        .translate-z-12 { transform: translateZ(30px); }
        .translate-z-20 { transform: translateZ(60px); }
      `}} />
    </div>
  );
};

const HolographicDataCards = ({
  title,
  subtitle,
  cards = []
}) => {
  if (!cards || cards.length === 0) return null;

  return (
    <section className="w-full py-32 bg-ice-50 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <FadeIn>
            {subtitle && (
              <span className="font-sans text-xs font-bold tracking-[0.2em] uppercase text-ts-gold mb-4 block">
                {subtitle}
              </span>
            )}
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-navy-950">
              {title}
            </h2>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {cards.map((card, index) => (
            <FadeIn key={index} delay={index * 0.15}>
              <HolographicCard card={card} />
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HolographicDataCards;
