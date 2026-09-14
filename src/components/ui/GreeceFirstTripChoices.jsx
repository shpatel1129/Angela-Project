import React from 'react';

/**
 * GreeceFirstTripChoices
 * Renders Part 2 (The 6 major choices).
 * Layout: Staggered rows with large webp photos, details list, and tag markings.
 */
const GreeceFirstTripChoices = ({ 
  choices = [], 
  images = [],
  title = "The 6 Essential Greek Islands & Cities",
  subtitle = "Understand the distinct personalities, travel rhythms, and advantages of the primary entry points for a first-time luxury itinerary.",
  eyebrow = "THE DESTINATIONS"
}) => {
  return (
    <section className="py-24 bg-slate-50 border-t border-b border-slate-200/60">
      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <span className="text-xs font-sans font-bold tracking-[0.2em] text-blue-600 uppercase mb-4 block">
            {eyebrow}
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-light text-navy-950 mb-6">
            {title}
          </h2>
          <p className="font-sans text-slate-600 font-light leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Staggered Rows */}
        <div className="space-y-24">
          {choices.map((choice, idx) => {
            const isEven = idx % 2 === 0;
            const imgFile = images[idx] || images[0];

            return (
              <div
                key={idx}
                className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-16 ${
                  isEven ? '' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Image Frame */}
                <div className="w-full lg:w-1/2 aspect-[16/11] rounded-2xl overflow-hidden shadow-xl border border-slate-200 relative group">
                  <img
                    src={imgFile}
                    alt={choice.name}
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Content Block */}
                <div className="w-full lg:w-1/2 text-left space-y-6">
                  <span className="text-xs font-sans font-bold tracking-widest text-blue-600 uppercase">
                    {choice.subtitle}
                  </span>
                  <h3 className="font-display text-3xl font-light text-navy-950">
                    {choice.name}
                  </h3>
                  <div className="w-12 h-0.5 bg-blue-500" />
                  <p className="font-sans text-slate-600 font-light leading-relaxed">
                    {choice.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default GreeceFirstTripChoices;
