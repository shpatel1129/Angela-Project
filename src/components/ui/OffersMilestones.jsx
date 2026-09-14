import React from 'react';
import FadeIn from './FadeIn';
import { Anchor, Shield, Medal, Star, Gem, Crown } from 'lucide-react';

const OffersMilestones = () => {
  const tiers = [
    { level: "base", icon: Anchor, days: "1–14 VS Days", title: "Venetian Member", benefits: "Venetian Society savings on selected sailings, private loyalty offers, and invitations to exclusive member-only events onboard." },
    { level: "base", icon: Shield, days: "15–49 VS Days", title: "Welcome Tier", benefits: "All previous benefits plus a one-time welcome offer in addition to the standard program savings on selected voyages." },
    { level: "base", icon: Medal, days: "50–99 VS Days", title: "Bronze Tier", benefits: "All previous benefits plus $150 shipboard credit per person on qualifying new bookings under the current program terms." },
    { level: "mid", icon: Star, days: "100–249 VS Days", title: "Silver Tier", benefits: "Enhanced booking savings plus additional onboard perks, including priority booking windows and complimentary laundry services." },
    { level: "mid", icon: Star, days: "250–349 VS Days", title: "Gold Tier", benefits: "10% booking savings, premium unlimited Wi-Fi on one device, priority embarkation, enhanced Champagne welcome, and wet cleaning." },
    { level: "mid", icon: Star, days: "350–499 VS Days", title: "Platinum Tier", benefits: "All previous benefits plus a complimentary 7-day cruise under the current program terms, subject to sailing availability." },
    { level: "elite", icon: Gem, days: "500–649 VS Days", title: "Diamond Tier", benefits: "Complimentary 14-day cruise, plus premium loyalty benefits, priority embarkation, and enhanced onboard butler support." },
    { level: "elite", icon: Gem, days: "650–799 VS Days", title: "Double Diamond", benefits: "Complimentary 14-day cruise, plus an additional complimentary 7-day cruise for completing the milestone." },
    { level: "ultimate", icon: Crown, days: "800+ VS Days", title: "Centurion Diamond", benefits: "Additional complimentary 7-day cruise rewards for every 150 subsequent VS Days, plus customized onboard VIP invitations." }
  ];

  // Helper to get card styles based on prestige level using STRICTLY defined theme colors
  const getCardStyles = (level) => {
    switch (level) {
      case "base":
        return {
          container: "bg-white/[0.03] border-white/10 hover:border-white/30",
          badgeBg: "bg-white/10",
          badgeText: "text-ice-300",
          title: "text-white",
          iconColor: "text-ice-300"
        };
      case "mid":
        return {
          container: "bg-gold-400/5 border-gold-400/30 hover:border-gold-400/60",
          badgeBg: "bg-gold-400/10",
          badgeText: "text-gold-400",
          title: "text-white",
          iconColor: "text-gold-400"
        };
      case "elite":
        return {
          container: "bg-gold-400/10 border-gold-400/80 hover:border-gold-400 shadow-[0_0_30px_-5px_rgba(212,175,55,0.2)] hover:shadow-[0_0_40px_-5px_rgba(212,175,55,0.4)]",
          badgeBg: "bg-gold-400",
          badgeText: "text-navy-950 font-bold",
          title: "text-gold-400",
          iconColor: "text-gold-400"
        };
      case "ultimate":
        return {
          container: "bg-gold-400/15 border-gold-400 shadow-[0_0_40px_-5px_rgba(212,175,55,0.3)] hover:shadow-[0_0_50px_0px_rgba(212,175,55,0.6)] transform hover:-translate-y-2",
          badgeBg: "bg-gold-400",
          badgeText: "text-navy-950 font-bold",
          title: "text-gold-400",
          iconColor: "text-gold-400"
        };
      default:
        return {};
    }
  };

  return (
    <section className="w-full bg-navy-950 py-24 relative overflow-hidden">
      {/* Decorative luxury radial gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[500px] bg-gold-400/5 rounded-full blur-[120px] pointer-events-none z-0"></div>
      
      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <FadeIn>
            <span className="text-xs uppercase tracking-[0.3em] text-gold-400 font-bold mb-4 block">
              Loyalty Tiers
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
              Venetian Society Milestones
            </h2>
            <div className="w-16 h-[1px] bg-gold-400/50 mx-auto mb-8"></div>
            <p className="font-sans text-lg text-ice-200 font-light leading-relaxed">
              As you accumulate VS Days through qualifying sailings, you reach milestones that unlock increasingly exclusive benefits, culminating in complimentary voyages.
            </p>
          </FadeIn>
        </div>

        {/* VIP Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {tiers.map((tier, idx) => {
            const styles = getCardStyles(tier.level);
            const Icon = tier.icon;
            
            return (
              <FadeIn key={idx} delay={0.1 * (idx % 3)}>
                <div className={`relative h-full flex flex-col justify-between p-8 rounded-3xl border backdrop-blur-md transition-all duration-500 group ${styles.container}`}>
                  
                  {/* Subtle inner glow for elite tiers */}
                  {(tier.level === 'elite' || tier.level === 'ultimate') && (
                    <div className="absolute inset-0 bg-gold-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none"></div>
                  )}

                  <div className="relative z-10">
                    <div className="flex justify-between items-start gap-4 mb-6">
                      <span className={`inline-flex items-center px-4 py-1.5 rounded-full font-display text-[11px] uppercase tracking-widest ${styles.badgeBg} ${styles.badgeText}`}>
                        {tier.days}
                      </span>
                      <Icon className={`w-6 h-6 shrink-0 opacity-80 ${styles.iconColor}`} strokeWidth={1.5} />
                    </div>
                    
                    <h3 className={`font-display text-2xl mb-4 ${styles.title}`}>
                      {tier.title}
                    </h3>
                    
                    <p className={`font-sans text-sm font-light leading-relaxed ${tier.level === 'ultimate' || tier.level === 'elite' ? 'text-white' : 'text-ice-200'}`}>
                      {tier.benefits}
                    </p>
                  </div>

                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* Footer Disclaimer */}
        <div className="mt-16 text-center">
          <FadeIn delay={0.5}>
            <p className="font-sans text-ice-300/50 text-xs italic font-light max-w-2xl mx-auto">
              * Silversea periodically updates Venetian Society benefits. Confirm current program rules and qualifying voyages before booking.
            </p>
          </FadeIn>
        </div>

      </div>
    </section>
  );
};

export default OffersMilestones;
