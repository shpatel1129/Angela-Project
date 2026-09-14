import React from 'react';
import * as LucideIcons from 'lucide-react';
import FadeIn from './FadeIn';

const TravelerTypeGrid = ({ title, subtitle, items }) => {
  if (!items || items.length === 0) return null;

  return (
    <section className="py-24 bg-navy-950 relative overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-5 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, #c4a96a 0%, transparent 60%), radial-gradient(circle at 80% 20%, #4a90d9 0%, transparent 60%)' }} />

      <div className="max-w-[1400px] mx-auto px-6">
        {/* Header */}
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="uppercase tracking-[0.25em] text-gold-400 text-xs font-bold mb-4 block">
              Find Your Match
            </span>
            {title && (
              <h2 className="font-display text-4xl md:text-5xl text-white mb-5">
                {title}
              </h2>
            )}
            <div className="w-16 h-0.5 bg-gold-400 mx-auto mb-5" />
            {subtitle && (
              <p className="font-sans text-lg text-slate-400">
                {subtitle}
              </p>
            )}
          </div>
        </FadeIn>

        {/* Cards Grid — smart columns based on item count */}
        <div className={`grid grid-cols-1 md:grid-cols-2 ${items.length % 3 === 0 ? 'lg:grid-cols-3 max-w-7xl mx-auto' : items.length === 4 ? 'lg:grid-cols-4' : 'lg:grid-cols-3 max-w-6xl mx-auto'} gap-6`}>
          {items.map((item, idx) => {
            const Icon = LucideIcons[item.icon] || LucideIcons.Star;
            const isLastOdd = items.length !== 4 && items.length % 3 !== 0 && idx === items.length - 1 && items.length % 3 === 1;
            return (
              <FadeIn key={idx} delay={idx * 0.07} className={isLastOdd ? 'sm:col-span-2 lg:col-span-1 lg:col-start-2' : ''}>
                <div className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 hover:border-gold-400/50 transition-all duration-500 hover:shadow-[0_20px_60px_rgba(196,169,106,0.15)] h-full flex flex-col">
                  {/* Image */}
                  {item.image && (
                    <div className="relative h-48 overflow-hidden flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/30 to-transparent" />

                      {/* Tag badge on image */}
                      {item.tag && (
                        <div className="absolute top-4 left-4">
                          <span className="inline-block px-3 py-1 bg-gold-400 text-navy-950 text-[10px] uppercase font-bold tracking-widest rounded-sm shadow-md">
                            {item.tag}
                          </span>
                        </div>
                      )}

                      {/* Icon overlay on image */}
                      <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-gold-400" strokeWidth={1.5} />
                      </div>
                    </div>
                  )}

                  {/* Fallback icon when no image */}
                  {!item.image && (
                    <div className="p-6 pb-0 flex justify-start">
                      <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-gold-400" strokeWidth={1.5} />
                      </div>
                    </div>
                  )}

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="font-display text-xl text-white mb-3 group-hover:text-gold-300 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="font-sans text-sm text-slate-400 leading-relaxed flex-grow">
                      {item.description || item.subtitle}
                    </p>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TravelerTypeGrid;

