import React, { useState } from 'react';
import FadeIn from './FadeIn';
import { Sun, Moon } from 'lucide-react';

const CabinMoodExperience = ({ data }) => {
  const [isEvening, setIsEvening] = useState(false);

  if (!data) return null;

  const currentMode = isEvening ? data.evening : data.morning;

  return (
    <section 
      className={`relative min-h-[90vh] flex flex-col justify-center overflow-hidden transition-colors duration-1000 ease-in-out ${
        isEvening ? 'bg-navy-950 text-white' : 'bg-[#F9F7F1] text-navy-950'
      }`}
    >
      {/* ─── KINETIC TYPOGRAPHY MARQUEE (BACKGROUND) ─── */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full overflow-hidden pointer-events-none select-none opacity-5 mix-blend-overlay z-0 flex whitespace-nowrap">
        {/* Create a very long string for continuous scrolling */}
        <div className="animate-[marquee_60s_linear_infinite] flex">
          {[...Array(6)].map((_, i) => (
            <span key={i} className="text-[15vw] font-serif font-bold uppercase mx-8 leading-none tracking-tighter">
              {currentMode.marquee}
            </span>
          ))}
        </div>
      </div>

      {/* ─── DECORATIVE BACKGROUND GRIDS ─── */}
      {/* Top Right Grid */}
      <div className={`absolute top-0 right-0 w-full max-w-[500px] h-full max-h-[500px] opacity-[0.03] pointer-events-none transition-colors duration-1000 ${isEvening ? 'text-white' : 'text-navy-950'}`}
           style={{ backgroundImage: 'linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)', backgroundSize: '40px 40px', maskImage: 'radial-gradient(circle at top right, black, transparent 70%)', WebkitMaskImage: 'radial-gradient(circle at top right, black, transparent 70%)' }}>
      </div>
      
      {/* Bottom Left Grid */}
      <div className={`absolute bottom-0 left-0 w-full max-w-[600px] h-full max-h-[400px] opacity-[0.02] pointer-events-none transition-colors duration-1000 ${isEvening ? 'text-white' : 'text-navy-950'}`}
           style={{ backgroundImage: 'linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)', backgroundSize: '20px 20px', maskImage: 'radial-gradient(circle at bottom left, black, transparent 70%)', WebkitMaskImage: 'radial-gradient(circle at bottom left, black, transparent 70%)' }}>
      </div>

      {/* Scattered Plus Signs (Crosshairs) */}
      <div className={`absolute inset-0 pointer-events-none transition-colors duration-1000 ${isEvening ? 'text-white/20' : 'text-navy-950/20'}`}>
         <div className="absolute top-[20%] left-[15%] text-2xl font-light leading-none">+</div>
         <div className="absolute top-[60%] right-[20%] text-2xl font-light leading-none">+</div>
         <div className="absolute bottom-[15%] right-[10%] text-2xl font-light leading-none">+</div>
         <div className="absolute top-[30%] right-[30%] text-lg font-light leading-none opacity-50">+</div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-24">
        
        {/* ─── INTERACTIVE TOGGLE ─── */}
        <FadeIn delay={0.1}>
          <div className="flex justify-center mb-16 md:mb-24">
            <div className={`p-1.5 rounded-full flex gap-2 backdrop-blur-md transition-colors duration-700 ${
              isEvening ? 'bg-white/10 border border-white/20' : 'bg-navy-950/5 border border-navy-950/10'
            }`}>
              <button 
                onClick={() => setIsEvening(false)}
                className={`px-6 py-3 rounded-full flex items-center gap-3 text-sm font-sans tracking-widest uppercase transition-all duration-500 ${
                  !isEvening 
                    ? 'bg-white text-navy-950 shadow-md scale-100' 
                    : 'text-white/50 hover:text-white scale-95'
                }`}
              >
                <Sun className={`w-4 h-4 ${!isEvening ? 'text-amber-500 animate-[spin_10s_linear_infinite]' : ''}`} />
                Morning Light
              </button>
              
              <button 
                onClick={() => setIsEvening(true)}
                className={`px-6 py-3 rounded-full flex items-center gap-3 text-sm font-sans tracking-widest uppercase transition-all duration-500 ${
                  isEvening 
                    ? 'bg-navy-900 text-white shadow-[0_0_20px_rgba(255,255,255,0.1)] scale-100' 
                    : 'text-navy-950/50 hover:text-navy-950 scale-95'
                }`}
              >
                <Moon className={`w-4 h-4 ${isEvening ? 'text-amber-200 animate-pulse' : ''}`} />
                Evening Glow
              </button>
            </div>
          </div>
        </FadeIn>

        {/* ─── DYNAMIC CONTENT AREA ─── */}
        <div className="text-center max-w-4xl mx-auto">
          {/* Key forces a re-mount so the FadeIn animation triggers again when mode changes */}
          <div key={isEvening ? 'evening' : 'morning'}>
            
            <FadeIn delay={0.2} direction="up">
              <span className={`block font-sans tracking-[0.3em] uppercase text-xs md:text-sm mb-6 transition-colors duration-1000 ${
                isEvening ? 'text-amber-400' : 'text-amber-700'
              }`}>
                {data.title}
              </span>
            </FadeIn>

            <FadeIn delay={0.3} direction="up">
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif tracking-tight leading-[1.1] mb-10">
                {currentMode.heading}
              </h2>
            </FadeIn>

            <FadeIn delay={0.4} direction="up">
              <p className={`text-xl md:text-2xl lg:text-3xl font-serif italic leading-relaxed mx-auto max-w-3xl transition-colors duration-1000 ${
                isEvening ? 'text-navy-100' : 'text-stone-700'
              }`}>
                "{currentMode.description}"
              </p>
            </FadeIn>

            {/* Floating Keywords */}
            <FadeIn delay={0.6} direction="up">
              <div className="flex flex-wrap justify-center gap-4 mt-16">
                {currentMode.keywords.map((word, idx) => (
                  <span 
                    key={word}
                    className={`px-5 py-2 rounded-full border text-sm md:text-base font-sans tracking-wider transition-colors duration-1000 ${
                      isEvening 
                        ? 'border-white/20 text-white/80 bg-white/5 backdrop-blur-sm' 
                        : 'border-navy-950/20 text-navy-800 bg-navy-950/5 backdrop-blur-sm'
                    }`}
                    style={{
                      animation: `float ${3 + idx}s ease-in-out infinite`,
                      animationDelay: `${idx * 0.5}s`
                    }}
                  >
                    {word}
                  </span>
                ))}
              </div>
            </FadeIn>

          </div>
        </div>

      </div>

      {/* Global styles for the custom animations */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
      `}} />
    </section>
  );
};

export default CabinMoodExperience;
