import React from 'react';
import FadeIn from './FadeIn';
import MasterImage from './MasterImage';

const ButlerServiceDetails = ({ data, images = [] }) => {
  if (!data) return null;

  return (
    <section className="w-full py-20 lg:py-28 bg-ice-50/50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <FadeIn className="text-center mb-16 lg:mb-20">
          <span className="uppercase tracking-[0.25em] text-[11px] font-bold text-slate-400 mb-4 block">
            {data?.eyebrow || "WHAT YOUR BUTLER CAN DO"}
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-navy-950 leading-tight mb-6">
            {data?.heading}
          </h2>
          <div className="w-14 h-[2px] bg-gold-400 mx-auto mb-6" />
          <p className="font-sans text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            {data?.description}
          </p>
        </FadeIn>

        {/* Zig-Zag Service Items */}
        <div className="flex flex-col gap-16 lg:gap-24">
          {data?.services?.map((service, index) => {
            const isReversed = index % 2 !== 0;
            const img = images[index % images.length];

            return (
              <FadeIn key={index} delay={0.05 * index}>
                <div className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-10 lg:gap-16 items-center`}>
                  {/* Image Side */}
                  <div className="lg:w-1/2 w-full">
                    <div className="relative group">
                      {/* Decorative Number */}
                      <div className={`absolute -top-6 ${isReversed ? '-right-4 lg:-right-6' : '-left-4 lg:-left-6'} z-20`}>
                        <span className="font-display text-8xl lg:text-9xl text-navy-950/[0.06] select-none leading-none">
                          {service?.number}
                        </span>
                      </div>
                      <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-[4/3] border border-slate-200/60">
                        {img ? (
                          <MasterImage
                            src={img}
                            alt={service?.title || "Butler service"}
                            className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-navy-950/10 to-navy-950/20" />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/20 to-transparent" />
                      </div>
                    </div>
                  </div>

                  {/* Text Side */}
                  <div className="lg:w-1/2 w-full">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="font-display text-3xl text-gold-500 font-light">
                        {service?.number}
                      </span>
                      <div className="h-px flex-1 bg-gradient-to-r from-gold-400/40 to-transparent" />
                    </div>
                    <h3 className="font-display text-2xl lg:text-3xl text-navy-950 mb-4 leading-snug">
                      {service?.title}
                    </h3>
                    <p className="font-sans text-base text-slate-600 leading-relaxed mb-5">
                      {service?.description}
                    </p>

                    {/* Highlight Quote */}
                    {service?.highlight && (
                      <div className="border-l-2 border-gold-400 pl-5 mb-5">
                        <p className="font-sans text-sm text-navy-800 italic leading-relaxed">
                          {service.highlight}
                        </p>
                      </div>
                    )}

                    {/* Item Chips */}
                    {service?.items && (
                      <div className="flex flex-wrap gap-2">
                        {service.items.map((item, i) => (
                          <span
                            key={i}
                            className="inline-block px-3 py-1.5 text-xs font-sans font-medium text-navy-800 bg-white border border-slate-200/80 rounded-full hover:border-gold-400/50 transition-colors"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    )}
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

export default ButlerServiceDetails;
