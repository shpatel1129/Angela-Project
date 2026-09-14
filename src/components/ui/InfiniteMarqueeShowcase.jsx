import React from 'react';
import FadeIn from './FadeIn';
import MasterImage from './MasterImage';

const InfiniteMarqueeShowcase = ({
  marqueeText,
  subtitle,
  cards = []
}) => {
  if (!marqueeText || cards.length === 0) return null;

  // Repeat the marquee text several times to ensure it covers the screen for the animation
  const repeatedText = Array(10).fill(marqueeText).join(" • ");

  return (
    <section className="w-full py-32 bg-ice-50 relative overflow-hidden flex flex-col items-center min-h-[800px]">
      
      {/* Background Animated Marquee */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none z-0">
        <div className="whitespace-nowrap animate-marquee-slow font-display text-[25vw] leading-none tracking-tighter text-transparent" style={{ WebkitTextStroke: '2px rgba(15, 30, 61, 0.05)' }}>
          {repeatedText}
        </div>
      </div>
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none z-0 mt-[25vw]">
        <div className="whitespace-nowrap animate-marquee-slow-reverse font-display text-[25vw] leading-none tracking-tighter text-transparent" style={{ WebkitTextStroke: '2px rgba(15, 30, 61, 0.05)' }}>
          {repeatedText}
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 w-full relative z-10">
        
        <div className="text-center mb-24">
          <FadeIn>
            {subtitle && (
              <span className="font-sans text-xs font-bold tracking-[0.2em] uppercase text-ts-gold mb-4 block">
                {subtitle}
              </span>
            )}
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-navy-950">
              Showcase
            </h2>
          </FadeIn>
        </div>

        {/* Floating Glass Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 pt-12">
          {cards.map((card, index) => (
            <FadeIn 
              key={index} 
              delay={index * 0.2}
              direction={index % 2 === 0 ? "up" : "down"} // Alternate animation direction
            >
              <div 
                className={`relative bg-white/70 backdrop-blur-xl border border-white/50 rounded-3xl p-8 lg:p-10 shadow-2xl hover:shadow-[0_20px_50px_rgba(15,30,61,0.1)] transition-all duration-500 hover:-translate-y-4 group
                  ${index % 2 !== 0 ? 'lg:mt-24' : ''}`} // Stagger the middle card down
              >
                <div className="w-12 h-12 bg-navy-950 rounded-full flex items-center justify-center mb-8 text-white font-display text-xl shadow-lg transform group-hover:rotate-12 transition-transform duration-500">
                  {index + 1}
                </div>
                
                <h3 className="font-display text-3xl text-navy-950 mb-4">{card.title}</h3>
                <p className="font-sans text-slate-600 font-light leading-relaxed mb-8">
                  {card.description}
                </p>

                {card.image && (
                  <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-inner">
                    <MasterImage src={card.image} alt={card.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                  </div>
                )}
              </div>
            </FadeIn>
          ))}
        </div>

      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee-slow {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-slow-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
        .animate-marquee-slow {
          animation: marquee-slow 60s linear infinite;
        }
        .animate-marquee-slow-reverse {
          animation: marquee-slow-reverse 60s linear infinite;
        }
      `}} />
    </section>
  );
};

export default InfiniteMarqueeShowcase;
