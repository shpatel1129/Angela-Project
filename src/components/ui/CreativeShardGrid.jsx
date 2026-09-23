import React from 'react';
import FadeIn from './FadeIn';
import { User, Map, Utensils, Ship, DollarSign, CheckCircle, Eye, Heart, Compass, Maximize, Image, Activity, Calendar, CreditCard } from 'lucide-react';

const iconMap = {
  user: User,
  map: Map,
  utensils: Utensils,
  ship: Ship,
  Ship: Ship,
  dollar: DollarSign,
  check: CheckCircle,
  Eye: Eye,
  Heart: Heart,
  Compass: Compass,
  compass: Compass,
  Coffee: Utensils,
  Maximize: Maximize,
  Image: Image,
  Activity: Activity,
  Calendar: Calendar,
  calendar: Calendar,
  CreditCard: CreditCard,
  creditCard: CreditCard
};

const CreativeShardGrid = ({ eyebrow, title, subtitle, description, items }) => {
  const introText = description || (eyebrow ? subtitle : (subtitle && subtitle.length > 40 ? subtitle : null));
  const eyebrowText = eyebrow || (subtitle && subtitle.length <= 40 ? subtitle : null);

  return (
    <section className="w-full bg-navy-950 py-24 relative overflow-hidden border-y border-white/5">
      {/* Background Graphic: Giant angled stripes */}
      <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden flex justify-center items-center">
        <div className="w-[200%] h-32 bg-gold-400/20 -rotate-12 translate-y-[-200px]"></div>
        <div className="w-[200%] h-32 bg-white/10 -rotate-12 translate-y-[200px]"></div>
      </div>

      <div className="max-w-[1300px] mx-auto px-6 relative z-10">
        
        {/* Header */}
        <FadeIn>
          <div className="text-center mb-16 md:mb-24 max-w-4xl mx-auto">
            {eyebrowText && (
              <span className="font-sans text-gold-400 uppercase tracking-[0.25em] text-xs md:text-sm font-bold mb-4 block">
                {eyebrowText}
              </span>
            )}
            {title && (
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
                {title}
              </h2>
            )}
            {introText && (
              <p className="font-sans text-slate-300 text-base md:text-lg leading-relaxed font-light max-w-3xl mx-auto mb-6">
                {introText}
              </p>
            )}
            <div className="w-24 h-1 bg-gold-400 mx-auto -skew-x-12"></div>
          </div>
        </FadeIn>

        {/* Shard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16 lg:gap-y-0 relative pb-24">
          {items && items.map((item, idx) => {
            const Icon = iconMap[item.icon] || CheckCircle;
            
            // Stagger offsets to create a cascading wave effect
            const offsetClasses = [
              'lg:translate-y-0',
              'lg:translate-y-16',
              'lg:translate-y-32',
              'lg:translate-y-16',
              'lg:translate-y-0',
              'lg:translate-y-16',
              'lg:translate-y-32',
              'lg:translate-y-16'
            ][idx % 8];
            
            // Alternate the skew direction for visual tension
            const skewDirection = idx % 2 === 0 ? '-skew-x-[6deg]' : 'skew-x-[6deg]';
            const unskewDirection = idx % 2 === 0 ? 'skew-x-[6deg]' : '-skew-x-[6deg]';

            return (
              <FadeIn key={idx} delay={idx * 0.1} className={`w-full ${offsetClasses} h-full`}>
                
                {/* The Skewed Card Container */}
                <div 
                  className={`relative w-full h-full transform ${skewDirection} bg-white/5 backdrop-blur-sm border border-white/10 p-8 md:p-10 transition-all duration-500 hover:bg-white/10 hover:-translate-y-3 group overflow-hidden shadow-2xl`}
                >
                  
                  {/* Subtle hover gradient inside the card */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gold-400/0 via-transparent to-gold-400/0 group-hover:from-gold-400/10 group-hover:to-transparent transition-colors duration-700"></div>

                  {/* Un-skewed Content Wrapper (so text is perfectly readable) */}
                  <div className={`relative z-10 flex flex-col h-full transform ${unskewDirection}`}>
                    
                    {/* Header: Number & Icon */}
                    <div className="flex justify-between items-start mb-8">
                      <span className="font-display text-6xl text-white/10 font-bold group-hover:text-gold-400/30 transition-colors duration-500 -ml-2">
                        0{idx + 1}
                      </span>
                      <div className="w-12 h-12 rounded-lg bg-navy-900 border border-white/10 flex items-center justify-center shadow-lg group-hover:border-gold-400/50 transition-colors duration-300 transform group-hover:scale-110 group-hover:rotate-6">
                        <Icon className="w-5 h-5 text-gold-400" />
                      </div>
                    </div>
                    
                    {/* Body Content */}
                    <div className="mt-auto">
                      <h3 className="font-display text-2xl text-white mb-4 group-hover:text-gold-400 transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="font-sans text-slate-300 text-sm leading-relaxed font-normal">
                        {item.description || item.desc || item.text}
                      </p>
                    </div>

                  </div>
                  
                  {/* Top-right corner accent */}
                  <div className="absolute top-0 right-0 w-8 h-8 bg-gold-400/30 -z-10 transition-transform duration-500 group-hover:scale-150 rounded-bl-full"></div>

                </div>
              </FadeIn>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default CreativeShardGrid;
