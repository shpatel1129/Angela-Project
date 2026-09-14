import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const profiles = [
  { id: 'first-timer', label: 'First-Timer', priority: 'history' },
  { id: 'couple', label: 'Romantic Couple', priority: 'vibe' },
  { id: 'family', label: 'Family', priority: 'logistics' },
  { id: 'luxury', label: 'Luxury Seeker', priority: 'convenience' },
  { id: 'foodie', label: 'Food & Nightlife', priority: 'energy' },
];

const neighborhoods = {
  history: {
    name: 'Plaka & Makrygianni',
    tagline: 'The Classic Athens Experience',
    description: 'Wake up surrounded by history. You are steps away from the Acropolis, the new museum, and charming pedestrian streets.',
    image: '/assets/plaka-athens-acropolis-luxury-travel.webp', // Extrapolated typical webp name based on instructions
    icon: '🏛️',
    why: 'Perfect for immersing yourself immediately into the ancient world.',
  },
  vibe: {
    name: 'Koukaki',
    tagline: 'Local & Relaxed',
    description: 'Trade the bustling tourist center for a genuine Athenian neighborhood feel. Enjoy quiet mornings and local cafes just minutes from the ruins.',
    image: '/assets/koukaki-athens-neighborhood.webp',
    icon: '🌿',
    why: 'Ideal for travelers wanting authenticity without sacrificing location.',
  },
  logistics: {
    name: 'Syntagma',
    tagline: 'Convenience & Full-Service',
    description: 'The center of modern Athens. Perfect for those who want five-star luxury hotels, easy transportation, and minimal friction.',
    image: '/assets/syntagma-athens-luxury-hotels.webp',
    icon: '⭐',
    why: 'When seamless access and premium amenities matter most.',
  },
  convenience: {
    name: 'Kolonaki',
    tagline: 'Sophisticated Athens',
    description: 'Designer boutiques, contemporary art, and upscale dining. Experience the modern, cosmopolitan side of the Greek capital.',
    image: '/assets/kolonaki-athens-luxury-shopping.webp',
    icon: '🛍️',
    why: 'For the luxury traveler seeking culture and refinement beyond the ruins.',
  },
  energy: {
    name: 'Monastiraki & Psyrri',
    tagline: 'Energy & Nightlife',
    description: 'Athens stays awake with you. Rooftop cocktail bars facing the illuminated Acropolis, vibrant street art, and endless dining options.',
    image: '/assets/monastiraki-athens-acropolis-rooftop.webp',
    icon: '🌙',
    why: 'For those who want to feel the pulse and rhythm of the city.',
  }
};

const AthensNeighborhoodMatchmaker = () => {
  const [activeProfile, setActiveProfile] = useState(profiles[0]);
  const activeMatch = neighborhoods[activeProfile.priority];

  return (
    <section className="py-24 bg-navy-950 text-white overflow-hidden relative">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold-500/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="font-sans text-[11px] tracking-[0.2em] uppercase text-gold-400 mb-4 block">Interactive Guide</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-6">Find Your Perfect Base</h2>
          <p className="font-sans text-lg text-slate-300 max-w-2xl mx-auto font-light">
            Tell us how you travel, and we'll reveal the Athens neighborhood that matches your rhythm.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Controls */}
          <div className="lg:col-span-5 flex flex-col space-y-4">
            {profiles.map((profile) => (
              <button
                key={profile.id}
                onClick={() => setActiveProfile(profile)}
                className={`relative p-6 text-left rounded-2xl transition-all duration-300 overflow-hidden group ${
                  activeProfile.id === profile.id
                    ? 'bg-white/10 border-gold-500/50 shadow-[0_0_30px_rgba(212,175,55,0.1)]'
                    : 'bg-white/5 hover:bg-white/10 border-transparent'
                } border backdrop-blur-sm`}
              >
                {activeProfile.id === profile.id && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute left-0 top-0 bottom-0 w-1 bg-gold-400"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <div className="flex items-center justify-between">
                  <span className={`font-display text-xl transition-colors ${
                    activeProfile.id === profile.id ? 'text-gold-400' : 'text-slate-300 group-hover:text-white'
                  }`}>
                    {profile.label}
                  </span>
                  <div className={`w-8 h-8 rounded-full border flex items-center justify-center transition-colors ${
                     activeProfile.id === profile.id ? 'border-gold-400 text-gold-400' : 'border-slate-600 text-slate-600'
                  }`}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Result Card */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProfile.id}
                initial={{ opacity: 0, x: 20, filter: 'blur(10px)' }}
                animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, x: -20, filter: 'blur(10px)' }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="relative rounded-3xl overflow-hidden aspect-[4/5] sm:aspect-square lg:aspect-[4/3] group"
              >
                {/* Background Image with Overlay */}
                <div className="absolute inset-0">
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/60 to-transparent z-10" />
                  <img 
                    src={activeMatch.image} 
                    alt={activeMatch.name}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="absolute inset-0 z-20 p-8 md:p-12 flex flex-col justify-end">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                  >
                    <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/10 backdrop-blur-md text-2xl mb-6 border border-white/20">
                      {activeMatch.icon}
                    </span>
                    <h3 className="font-sans text-[11px] tracking-[0.2em] uppercase text-gold-400 mb-2">
                      {activeMatch.tagline}
                    </h3>
                    <h4 className="font-display text-4xl md:text-5xl text-white mb-4">
                      {activeMatch.name}
                    </h4>
                    <p className="font-sans text-lg text-slate-200 font-light mb-6 max-w-lg">
                      {activeMatch.description}
                    </p>
                    <div className="p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 inline-block">
                      <span className="font-sans text-[10px] tracking-wider uppercase text-slate-400 block mb-1">Why it fits</span>
                      <span className="font-sans text-sm text-white font-medium">{activeMatch.why}</span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AthensNeighborhoodMatchmaker;
