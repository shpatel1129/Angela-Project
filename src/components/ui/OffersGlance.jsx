import React from 'react';
import FadeIn from './FadeIn';
import { Tag, Crown, Check } from 'lucide-react';

const OffersGlance = ({ image }) => {
  return (
    <section className="w-full bg-slate-50 py-24 md:py-32 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-ice-100/30 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 z-0 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-gold-500/5 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/4 z-0 pointer-events-none"></div>
      
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-20 md:mb-28">
          <FadeIn>
            <span className="text-xs uppercase tracking-[0.3em] text-gold-500 font-bold mb-4 block">
              Offers vs Loyalty
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-navy-950 mb-6 leading-tight">
              Silversea Offers and Venetian Society Benefits at a Glance
            </h2>
            <div className="w-16 h-[1px] bg-gold-400 mx-auto mb-8"></div>
            <p className="font-sans text-lg text-slate-600 font-light leading-relaxed">
              Silversea offers are promotions available to eligible travelers on selected cruises, while Venetian Society benefits are loyalty rewards earned by returning guests. Understanding how they differ is essential for maximizing value.
            </p>
          </FadeIn>
        </div>

        {/* Magazine-style Asymmetric Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Image Column */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <FadeIn direction="right" delay={0.2}>
              <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl group">
                <div className="absolute inset-0 bg-navy-950/20 group-hover:bg-transparent transition-colors duration-700 z-10 pointer-events-none"></div>
                <img 
                  src={image} 
                  alt="Silversea cruise ship at sea"
                  className="w-full aspect-[4/5] object-cover scale-105 group-hover:scale-100 transition-transform duration-[1.5s] ease-out"
                  loading="lazy"
                />
              </div>
              {/* Decorative Accent on Image */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 border-b-2 border-l-2 border-gold-400 z-0 hidden lg:block"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 border-t-2 border-r-2 border-gold-400 z-0 hidden lg:block"></div>
            </FadeIn>
          </div>

          {/* Cards Column */}
          <div className="lg:col-span-7 space-y-6 relative z-20 order-1 lg:order-2">
            
            {/* Card 1: Offers (Light/Public Theme) */}
            <FadeIn direction="up" delay={0.3}>
              <div className="bg-white/90 backdrop-blur-md border border-white/50 rounded-2xl p-8 lg:p-10 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-500">
                <div className="flex items-center gap-5 mb-6">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gold-500/10 text-gold-500 shrink-0">
                    <Tag size={22} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl text-navy-950">Silversea Offers</h3>
                </div>
                
                <span className="inline-block px-3 py-1 bg-slate-100 text-slate-500 text-[10px] uppercase tracking-widest font-semibold rounded-full mb-4">Public Promotions</span>
                
                <p className="font-sans text-slate-600 text-base font-light leading-relaxed mb-6">
                  Designed to incentivize bookings on specific voyages, suite categories, or travel seasons. They are capacity-controlled and change periodically throughout the year.
                </p>
                <ul className="space-y-3">
                  {[
                    "Fare discounts and reduced deposits",
                    "Destination-specific flight credits",
                    "Limited-time shipboard credit offers"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check size={16} className="text-gold-500 mt-1 shrink-0" strokeWidth={2} />
                      <span className="font-sans text-sm text-slate-700 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            {/* Card 2: Venetian Society (Dark/Exclusive Theme) */}
            <FadeIn direction="up" delay={0.4}>
              <div className="bg-navy-950 rounded-2xl p-8 lg:p-10 shadow-2xl hover:shadow-[0_20px_40px_-15px_rgba(26,34,56,0.5)] hover:-translate-y-1 transition-all duration-500 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/5 rounded-full blur-3xl group-hover:bg-gold-500/10 transition-colors duration-700 pointer-events-none"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-5 mb-6">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gold-500/20 text-gold-400 shrink-0 border border-gold-500/30">
                      <Crown size={22} strokeWidth={1.5} />
                    </div>
                    <h3 className="font-display text-2xl md:text-3xl text-white">Venetian Society</h3>
                  </div>

                  <span className="inline-block px-3 py-1 bg-white/10 text-gold-300 text-[10px] uppercase tracking-widest font-semibold rounded-full mb-4 border border-white/5">Earned Loyalty</span>

                  <p className="font-sans text-ice-200 text-base font-light leading-relaxed mb-6">
                    Privileges tied to your personal cruise history (measured in VS Days). They remain valid regardless of public sales campaigns and unlock permanent status tiers and milestone rewards.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Milestone savings (5% to 10%) on selected sailings",
                      "Onboard credits, premium Wi-Fi, and laundry",
                      "Free cruises at 350 and 500+ VS Days"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check size={16} className="text-gold-400 mt-1 shrink-0" strokeWidth={2} />
                        <span className="font-sans text-sm text-ice-50 font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>

          </div>
        </div>
      </div>
    </section>
  );
};

export default OffersGlance;
