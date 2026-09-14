import React from 'react';

/**
 * GreeceExperiencesGrid
 * Renders Part 2 (Best experiences beyond tourist attractions).
 * Layout: Staggered grid where each experience alternates left/right image placements (zig-zag).
 */
const GreeceExperiencesGrid = ({ experiences = [], images = [] }) => {
  return (
    <section className="py-24 bg-slate-50 border-t border-b border-slate-200/60">
      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <span className="text-xs font-sans font-bold tracking-[0.2em] text-blue-600 uppercase mb-4 block">
            ESSENTIAL EXPERIENCES
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-light text-navy-950 mb-6">
            Best Experiences Beyond the Obvious
          </h2>
          <p className="font-sans text-slate-600 font-light leading-relaxed">
            From dawn-lit ancient temples to private yacht excursions in volcanic calderas, explore our curated signature Greek experiences.
          </p>
        </div>

        {/* Staggered Rows */}
        <div className="space-y-24">
          {experiences.map((exp, idx) => {
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
                <div className="w-full lg:w-1/2 aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-slate-200 relative group">
                  <img
                    src={imgFile}
                    alt={exp.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 pointer-events-none" />
                </div>

                {/* Content Block */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center text-left">
                  <span className="text-[10px] font-sans font-bold tracking-widest text-blue-600 uppercase mb-2">
                    {exp.subtitle}
                  </span>
                  <h3 className="font-display text-3xl font-light text-navy-950 mb-6">
                    {exp.title}
                  </h3>
                  <div className="w-12 h-0.5 bg-blue-500 mb-6" />
                  <p className="font-sans text-slate-600 font-light leading-relaxed">
                    {exp.description}
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

export default GreeceExperiencesGrid;
