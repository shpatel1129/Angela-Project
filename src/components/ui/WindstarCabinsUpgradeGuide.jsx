import React from 'react';
import FadeIn from './FadeIn';
import { Landmark, ArrowUpRight, Coins, HelpCircle } from 'lucide-react';
import MasterImage from './MasterImage';

const WindstarCabinsUpgradeGuide = ({ sectionImage }) => {
  return (
    <section className="py-24 px-6 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Balance Image */}
          {sectionImage && (
            <div className="lg:col-span-5 relative order-last lg:order-first">
              <div className="absolute inset-0 bg-ts-gold/10 rounded-[32px] transform -translate-x-3 translate-y-3"></div>
              <div className="rounded-[32px] overflow-hidden aspect-[3/4] shadow-xl border border-slate-100">
                <MasterImage src={sectionImage} alt="Windstar Suite Interior" className="w-full h-full object-cover" />
              </div>
            </div>
          )}

          {/* Right Column: Upgrade Decision Framework */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <span className="inline-block text-xs font-bold tracking-[0.25em] text-ts-gold uppercase bg-ts-gold/10 px-4 py-1.5 rounded-full">
                Upgrade Analysis
              </span>
              <h2 className="font-display text-4xl md:text-5xl text-navy-950 font-bold leading-tight">
                Cabin Upgrade Guide: Are Upgrades Worth It?
              </h2>
              <div className="w-12 h-1 bg-ts-gold rounded-full"></div>
              <p className="font-sans text-slate-600 text-base md:text-lg leading-relaxed font-light">
                Do not upgrade to a higher suite category blindly based on square footage. Analyze the daily upgrade cost against the opportunity cost of other travel luxuries.
              </p>
            </div>

            {/* Three Pillar Cards */}
            <div className="space-y-6">
              
              <div className="bg-slate-50 border border-slate-200/50 rounded-2xl p-6 flex gap-5 hover:border-ts-gold/40 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-navy-950 text-ts-gold flex items-center justify-center shrink-0 shadow-sm">
                  <Coins className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-display text-lg sm:text-xl text-navy-950 font-bold">1. Calculate Cost Per Day</h3>
                  <p className="font-sans text-slate-600 text-sm leading-relaxed font-light">
                    If an upgrade to a Veranda Suite costs $1,400 extra for a 7-night sailing, that represents an additional $200 per day. Ask yourself: Will you spend enough active hours on your balcony to justify $200 per day?
                  </p>
                </div>
              </div>

              <div className="bg-slate-50 border border-slate-200/50 rounded-2xl p-6 flex gap-5 hover:border-ts-gold/40 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-navy-950 text-ts-gold flex items-center justify-center shrink-0 shadow-sm">
                  <Landmark className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-display text-lg sm:text-xl text-navy-950 font-bold">2. Evaluate Opportunity Cost</h3>
                  <p className="font-sans text-slate-600 text-sm leading-relaxed font-light">
                    Would that $1,400 be better spent on other components of your trip? For example, booking business-class air upgrades, adding a 3-night five-star pre-cruise hotel stay, or hiring private vehicles and drivers at ports.
                  </p>
                </div>
              </div>

              <div className="bg-slate-50 border border-slate-200/50 rounded-2xl p-6 flex gap-5 hover:border-ts-gold/40 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-navy-950 text-ts-gold flex items-center justify-center shrink-0 shadow-sm">
                  <HelpCircle className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-display text-lg sm:text-xl text-navy-950 font-bold">3. Itinerary vs Space Balance</h3>
                  <p className="font-sans text-slate-600 text-sm leading-relaxed font-light">
                    On sea-day heavy itineraries or highly scenic routes (like the Norwegian Fjords or Tahiti), private balconies are invaluable. On port-intensive routes where you leave at 8 AM and return at 6 PM, standard suites represent superior value.
                  </p>
                </div>
              </div>

            </div>

            {/* Bottom Highlight Advice */}
            <div className="border-l-4 border-ts-gold pl-6 py-2 bg-slate-50 p-6 rounded-r-2xl border border-slate-200/40">
              <h4 className="font-display text-base font-bold text-navy-950 mb-1">Travel Advisor Principle</h4>
              <p className="font-sans text-slate-600 text-xs sm:text-sm italic">
                "The best cabin is not always the most expensive one. It is the one that aligns with how you actually intend to spend your vacation time."
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default WindstarCabinsUpgradeGuide;
