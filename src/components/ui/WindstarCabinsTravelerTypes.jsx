import React, { useState } from 'react';
import FadeIn from './FadeIn';
import { Heart, Compass, Users, User, Calendar, Map, Activity, Layers, ArrowRight } from 'lucide-react';
import MasterImage from './MasterImage';

const WindstarCabinsTravelerTypes = ({ sectionImage }) => {
  const [activeTab, setActiveTab] = useState(0);

  const travelerTabs = [
    {
      title: 'Couples & Romance',
      icon: Heart,
      badge: '🏆 Star Seeker Horizon Owner\'s Suite',
      headline: 'Best for Honeymoons, Anniversaries & Celebrating Together',
      paragraphs: [
        'For couples who want their suite to feel like a private resort, the Horizon Owner\'s Suite on Star Seeker is the ultimate choice. It provides 548 sq ft of indoor space alongside a massive 248 sq ft wraparound private balcony.',
        'This allows you to enjoy breakfast overlooking the ocean, watch the sunset privately, and return to an exceptionally spacious environment after days exploring ports.'
      ],
      checklist: [
        'Wraparound private veranda',
        'Separate bedroom & living rooms',
        'Milestone-worthy experience',
        'Exceptional storage & double vanity'
      ]
    },
    {
      title: 'Solo Travelers',
      icon: User,
      badge: '💡 Veranda or Standard Suite',
      headline: 'Best for Maximizing Overall Vacation Budget',
      paragraphs: [
        'Solo travelers shouldn\'t automatically book the largest suite since they bear the single occupancy cost alone. Instead, focus on a well-located standard or veranda suite.',
        'The money saved can be put towards pre-cruise luxury hotels, private excursions, premium flights, or unique destination dining, yielding a much richer overall journey.'
      ],
      checklist: [
        'Comfortable midship location',
        'Ample closet space',
        'Saves budget for custom touring',
        'Maintains access to sailing lifestyle'
      ]
    },
    {
      title: 'Families & Groups',
      icon: Users,
      badge: '⚓ Star Class Connecting Suites',
      headline: 'Best for Multi-Generational Intimate Travel',
      paragraphs: [
        'Windstar is not a mega-ship brand, which is exactly why families love it. The Star Class yachts (Star Seeker, Pride, Legend, Breeze) offer the most flexible configurations.',
        'Connecting suites and triple occupancy cabins allow parents and grandparents to maintain close contact while having private retreats.'
      ],
      checklist: [
        'Connecting suite layouts',
        'Spacious bathrooms with bathtubs',
        'Easy access to public decks',
        'Star Class layout flexibility'
      ]
    },
    {
      title: 'Scenic & Long Voyages',
      icon: Map,
      badge: '🏔️ Scenic Private Balcony',
      headline: 'Best for Alaska, Tahiti & Northern Europe',
      paragraphs: [
        'Scenic cruising turns your balcony into a private viewing platform. Rather than fighting for deck chair spots, you can watch glaciers or tropical islands glide past from your own veranda.',
        'For long cruises (10+ nights), additional suite space becomes essential. Sleeping and sitting room separation allows partners to rest independently.'
      ],
      checklist: [
        'Veranda suite on scenic coasts',
        'Bathtubs for relaxing evenings',
        'Separate layout for long stays',
        'Large ocean-facing windows'
      ]
    },
    {
      title: 'Motion-Sensitive Guests',
      icon: Activity,
      badge: '🌊 Lower Midship Suites',
      headline: 'Best Cabin Location for Stability at Sea',
      paragraphs: [
        'Small luxury yachts experience ocean motion differently from massive mega-ships. If you are prone to seasickness, ignore the suite size and look first at deck placement.',
        'Lower decks and midship positions experience significantly less vertical and lateral movement, providing a more stable and restful sailing experience.'
      ],
      checklist: [
        'Decks 3 & 4 midship locations',
        'Standard oceanview stability',
        'Avoid far-forward or far-aft bow',
        'Consult custom deck plans'
      ]
    }
  ];

  const active = travelerTabs[activeTab];
  const IconComp = active.icon;

  return (
    <section className="py-24 px-6 bg-white relative border-b border-slate-100">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-block text-xs font-bold tracking-[0.25em] text-ts-gold uppercase bg-ts-gold/10 px-4 py-1.5 rounded-full">
            Traveler Profiles
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-navy-950">
            Best Windstar Cabins by Traveler Type
          </h2>
          <div className="w-12 h-1 bg-ts-gold mx-auto"></div>
          <p className="font-sans text-slate-600 text-base md:text-lg">
            Every traveler is unique. Discover the recommended cabin configuration based on your personal travel style, companions, and destination.
          </p>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Interactive vertical tabs */}
          <div className="lg:col-span-4 flex flex-col justify-start space-y-3">
            {travelerTabs.map((tab, idx) => {
              const TabIcon = tab.icon;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 flex items-center justify-between group ${
                    activeTab === idx
                      ? 'bg-navy-950 border-navy-950 text-white shadow-lg scale-102'
                      : 'bg-slate-50 border-slate-100 text-navy-900 hover:bg-slate-100/60'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-2.5 rounded-xl ${activeTab === idx ? 'bg-ts-gold text-navy-950' : 'bg-navy-950/5 text-navy-950'}`}>
                      <TabIcon className="w-5 h-5" />
                    </div>
                    <span className="font-display text-base font-bold">{tab.title}</span>
                  </div>
                  <ArrowRight className={`w-4 h-4 transition-transform ${activeTab === idx ? 'text-ts-gold translate-x-1' : 'text-slate-400 opacity-0 group-hover:opacity-100'}`} />
                </button>
              );
            })}

            {/* Side visual box to achieve 50:50 balance */}
            {sectionImage && (
              <div className="pt-6 relative hidden lg:block">
                <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-md border border-slate-200">
                  <MasterImage src={sectionImage} alt="Honeymoon deck views" className="w-full h-full object-cover" />
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Active Profile Detailed Layout Card */}
          <div className="lg:col-span-8 bg-slate-50 border border-slate-200/60 rounded-[32px] p-8 md:p-12 flex flex-col justify-between relative shadow-sm overflow-hidden">
            {/* Soft backdrop radial gradient */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-ts-gold/5 rounded-full filter blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
            
            <div className="space-y-8 relative z-10">
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-200/60">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-ts-gold/10 text-ts-gold flex items-center justify-center">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <span className="font-sans text-xs font-bold uppercase tracking-[0.15em] text-navy-950">
                    Traveler Type Recommendation
                  </span>
                </div>
                <span className="bg-navy-950 text-white text-[11px] font-bold tracking-wider px-3.5 py-1.5 rounded-full border border-navy-900 shadow-md">
                  {active.badge}
                </span>
              </div>

              <div className="space-y-4">
                <h3 className="font-display text-2xl sm:text-3xl text-navy-950 font-bold leading-tight">
                  {active.headline}
                </h3>
                {active.paragraphs.map((p, i) => (
                  <p key={i} className="font-sans text-slate-600 text-sm sm:text-base leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>

              {/* Unique layout list structure */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-slate-200/60 mt-8">
                {active.checklist.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-white p-4 rounded-xl border border-slate-100 shadow-xs">
                    <div className="w-5 h-5 rounded-full bg-ts-gold/10 text-ts-gold flex items-center justify-center shrink-0">
                      <span className="text-[10px] font-bold">✦</span>
                    </div>
                    <span className="font-sans text-xs sm:text-sm text-navy-950 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 pt-6 border-t border-slate-200/60 text-slate-400 text-xs flex justify-between items-center relative z-10">
              <span>Trips & Ships Luxury Travel Expert Alignment</span>
              <span className="text-ts-gold font-bold uppercase tracking-widest text-[10px]">E-E-A-T Certified</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default WindstarCabinsTravelerTypes;
