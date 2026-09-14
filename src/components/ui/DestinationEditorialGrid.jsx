import React from 'react';
import FadeIn from './FadeIn';

/**
 * DestinationEditorialGrid
 *
 * A magazine-style asymmetric editorial layout for showcasing destinations.
 * Layout alternates large-left / large-right for visual rhythm.
 * Each pair = one large feature card + two stacked smaller cards.
 */
const DestinationEditorialGrid = ({ title, eyebrow, subtitle, items = [], images = [] }) => {
  const pairs = [];
  for (let i = 0; i < items.length; i += 3) {
    pairs.push(items.slice(i, i + 3));
  }

  return (
    <section className="w-full py-20 md:py-28 bg-navy-950">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Header */}
        <FadeIn>
          <div className="text-center mb-16">
            {eyebrow && (
              <span className="font-sans text-xs uppercase tracking-[0.25em] text-gold-400 mb-4 block">
                {eyebrow}
              </span>
            )}
            <h2 className="font-display text-4xl md:text-5xl text-white mb-4">{title}</h2>
            <div className="w-16 h-px bg-gold-400 mx-auto mb-6" />
            {subtitle && (
              <p className="font-sans text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>
        </FadeIn>

        {/* Editorial Grid Pairs */}
        <div className="space-y-6">
          {pairs.map((group, pairIdx) => {
            const isReversed = pairIdx % 2 === 1;
            const featuredItem = group[0];
            const sideItems = group.slice(1);
            const featuredImg = images[pairIdx * 3] || images[0];

            const FeaturedCard = () => (
              <FadeIn delay={0.1}>
                <div className="relative rounded-2xl overflow-hidden h-[420px] md:h-[500px] group">
                  {featuredImg && (
                    <img
                      src={featuredImg}
                      alt={featuredItem?.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  )}
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent" />

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    {featuredItem?.category && (
                      <span className="inline-block font-sans text-xs uppercase tracking-[0.2em] text-gold-400 mb-3 bg-navy-950/60 px-3 py-1 rounded-full">
                        {featuredItem.category}
                      </span>
                    )}
                    <h3 className="font-display text-3xl md:text-4xl text-white mb-3 leading-tight">
                      {featuredItem?.title}
                    </h3>
                    <p className="font-sans text-sm md:text-base text-white/80 leading-relaxed">
                      {featuredItem?.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            );

            const SideCards = () => (
              <div className="flex flex-col gap-6">
                {sideItems.map((item, sIdx) => {
                  const sideImg = images[pairIdx * 3 + sIdx + 1] || images[sIdx + 1];
                  return (
                    <FadeIn key={sIdx} delay={0.15 + sIdx * 0.1}>
                      <div className="relative rounded-2xl overflow-hidden h-[195px] md:h-[232px] group">
                        {sideImg && (
                          <img
                            src={sideImg}
                            alt={item?.title}
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            loading="lazy"
                          />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/30 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          {item?.category && (
                            <span className="inline-block font-sans text-xs uppercase tracking-[0.18em] text-gold-400 mb-2">
                              {item.category}
                            </span>
                          )}
                          <h3 className="font-display text-xl md:text-2xl text-white mb-1">
                            {item?.title}
                          </h3>
                          <p className="font-sans text-xs text-white/70 line-clamp-2 leading-relaxed">
                            {item?.description}
                          </p>
                        </div>
                      </div>
                    </FadeIn>
                  );
                })}
              </div>
            );

            return (
              <div
                key={pairIdx}
                className={`grid md:grid-cols-2 gap-6 ${isReversed ? 'md:[grid-template-areas:"side_featured"]' : ''}`}
              >
                {isReversed ? (
                  <>
                    <div className="md:[grid-area:side]">
                      <SideCards />
                    </div>
                    <div className="md:[grid-area:featured]">
                      <FeaturedCard />
                    </div>
                  </>
                ) : (
                  <>
                    <FeaturedCard />
                    <SideCards />
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DestinationEditorialGrid;
