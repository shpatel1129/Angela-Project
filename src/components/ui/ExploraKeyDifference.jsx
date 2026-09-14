import React from 'react';
import FadeIn from './FadeIn';

const ExploraKeyDifference = ({ image }) => {
  return (
    <section className="w-full bg-navy-950 py-28 text-white relative overflow-hidden">
      {/* Diagonal decorative accent */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-gold-400 via-gold-500 to-transparent z-10"></div>
      <div className="absolute -bottom-48 -right-48 w-[600px] h-[600px] rounded-full border border-gold-400/10 z-0"></div>
      <div className="absolute -top-24 -left-24 w-[400px] h-[400px] rounded-full border border-gold-400/5 z-0"></div>

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Image */}
          <FadeIn>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-gold-400/20 to-transparent rounded-3xl blur-xl z-0"></div>
              <img 
                src={image} 
                alt="Silversea vs Explora Journeys key difference"
                className="relative z-10 w-full h-[480px] object-cover rounded-2xl shadow-2xl"
                loading="lazy"
              />
            </div>
          </FadeIn>

          {/* Right: Content */}
          <FadeIn delay={0.2}>
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-gold-400 font-bold mb-6 block">
                The Key Distinction
              </span>
              <h2 className="font-display text-3xl md:text-4xl text-white mb-8 leading-snug">
                The Biggest Difference Between Silversea and Explora Journeys
              </h2>
              
              <blockquote className="border-l-4 border-gold-400 pl-6 mb-8">
                <p className="font-display text-lg md:text-xl text-gold-300 italic leading-relaxed">
                  "Silversea is designed around exploring the world in luxury. Explora Journeys is designed around experiencing luxury while traveling through the world."
                </p>
              </blockquote>

              <p className="font-sans text-slate-300 font-light leading-relaxed mb-6">
                That may sound like a small distinction. It isn't. It influences the ships, the suites, the service, the dining, the destinations, the excursions, the onboard atmosphere, and the way you spend sea days.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-white/5 rounded-xl p-5 border border-white/10">
                  <h4 className="font-display text-sm text-gold-400 uppercase tracking-wider mb-2">Silversea</h4>
                  <p className="font-sans text-slate-300 text-sm font-light">"Take me somewhere extraordinary."</p>
                </div>
                <div className="bg-white/5 rounded-xl p-5 border border-white/10">
                  <h4 className="font-display text-sm text-gold-400 uppercase tracking-wider mb-2">Explora</h4>
                  <p className="font-sans text-slate-300 text-sm font-light">"Give me an extraordinary place to relax while I travel."</p>
                </div>
              </div>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
};

export default ExploraKeyDifference;
