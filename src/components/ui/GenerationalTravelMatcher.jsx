import React, { useState } from 'react';
import { Sparkles, ArrowRight, User, Heart, Briefcase, Anchor } from 'lucide-react';

const GenerationalTravelMatcher = ({ 
  title = "Windstar Age Demographics by Generation", 
  subtitle = "Discover why travel style matters more than your birth year.",
  generations = []
}) => {
  const [activeTab, setActiveTab] = useState(0);

  // Fallback data if none provided
  const defaultGenerations = [
    {
      id: "millennials",
      name: "Millennials (30s & 40s)",
      icon: <Heart className="w-5 h-5" />,
      idealFor: "Honeymoons, Boutique Luxury, Authentic Exploration",
      description: "For younger luxury travelers, the attraction is often the yacht experience rather than a traditional 'cruise.' Millennials looking for adventure, boutique hotels, and authentic experiences without formality are a perfect Windstar match.",
      highlights: ["Intimate Tahiti sailings", "Boutique hotel mindset", "Experience-driven dining"]
    },
    {
      id: "genx",
      name: "Gen X (40s & 50s)",
      icon: <Briefcase className="w-5 h-5" />,
      idealFor: "Anniversaries, Destination Immersion, Escaping Crowds",
      description: "Gen X travelers with growing disposable income and no interest in mass-market ships find their ideal balance on Windstar. They appreciate premium service, fewer crowds, and highly personalized luxury.",
      highlights: ["Quality over quantity", "Anniversary celebrations", "Culinary exploration"]
    },
    {
      id: "boomers",
      name: "Boomers (60s & 70s)",
      icon: <User className="w-5 h-5" />,
      idealFor: "Active Exploring, Shared Experiences, Cultural Depth",
      description: "Travelers in their 50s and 60s are among the most naturally aligned with Windstar's mature, experienced profile. They value comfort, destination immersion, and deep cultural connections.",
      highlights: ["Experienced international travelers", "Bucket-list Mediterranean", "Extended vacations"]
    },
    {
      id: "retirees",
      name: "Active Retirees (70s+)",
      icon: <Anchor className="w-5 h-5" />,
      idealFor: "Long Voyages, Flexibility, Meaningful Travel",
      description: "Retirees can take advantage of longer voyages, flexible travel dates, and extended pre- or post-cruise stays. Age itself isn't a barrier; it's about mobility and an appetite for active luxury travel.",
      highlights: ["Extended ocean crossings", "Flexible travel dates", "Paced but active exploration"]
    }
  ];

  const dataToUse = generations.length > 0 ? generations : defaultGenerations;

  return (
    <section className="w-full py-20 bg-slate-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-navy-900/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest text-gold-500 font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Demographic Matcher</span>
          </span>
          <h2 className="text-3xl md:text-5xl font-display text-navy-950 mb-6">
            {title}
          </h2>
          <div className="w-16 h-0.5 bg-gold-400 mx-auto mb-6"></div>
          <p className="text-base md:text-lg text-slate-600 leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Interactive Main Body */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column: Navigation Tabs */}
          <div className="lg:w-1/3 flex flex-col space-y-3">
            {dataToUse.map((gen, idx) => {
              const isActive = activeTab === idx;
              return (
                <button
                  key={gen.id}
                  onClick={() => setActiveTab(idx)}
                  className={`flex flex-col text-left p-5 rounded-2xl transition-all duration-300 border ${
                    isActive 
                      ? 'bg-navy-950 text-white border-navy-950 shadow-xl shadow-navy-900/20 transform scale-[1.02]' 
                      : 'bg-white text-navy-950 border-slate-200 hover:border-gold-400 hover:shadow-md'
                  }`}
                >
                  <div className="flex items-center justify-between w-full mb-2">
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-lg ${isActive ? 'bg-gold-400/20 text-gold-400' : 'bg-slate-100 text-slate-500'}`}>
                        {gen.icon}
                      </div>
                      <span className="font-display text-lg">{gen.name}</span>
                    </div>
                    {isActive && <ArrowRight className="w-4 h-4 text-gold-400" />}
                  </div>
                  <span className={`text-xs uppercase tracking-wider font-semibold ${isActive ? 'text-slate-300' : 'text-slate-500'}`}>
                    {gen.idealFor}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Column: Active Display Card */}
          <div className="lg:w-2/3 h-full">
            <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl p-8 md:p-12 h-full flex flex-col justify-center relative overflow-hidden transition-all duration-500">
              {/* Glass subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold-50/50 via-transparent to-slate-50/80 pointer-events-none"></div>
              
              <div className="relative z-10">
                <div className="inline-block bg-navy-50 text-navy-800 text-xs px-4 py-1.5 rounded-full font-semibold mb-6 border border-navy-100">
                  Target Profile: {dataToUse[activeTab].name}
                </div>
                
                <h3 className="text-2xl md:text-4xl font-display text-navy-950 mb-6 leading-tight">
                  "{dataToUse[activeTab].idealFor}"
                </h3>
                
                <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-10">
                  {dataToUse[activeTab].description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-t border-slate-100 pt-8">
                  {dataToUse[activeTab].highlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="flex flex-col space-y-2">
                      <div className="w-8 h-8 rounded-full bg-gold-50 flex items-center justify-center">
                        <span className="text-gold-600 font-display font-semibold text-sm">{hIdx + 1}</span>
                      </div>
                      <span className="text-sm text-navy-900 font-semibold leading-snug">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default GenerationalTravelMatcher;
