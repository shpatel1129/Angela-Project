import React from 'react';
import FadeIn from './FadeIn';

const EditorialCabinExperience = ({ data }) => {
  if (!data) return null;

  return (
    <section className="py-24 md:py-32 bg-stone-50 overflow-hidden relative">
      {/* Decorative large background text */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none pointer-events-none opacity-5 select-none font-serif text-[15vw] whitespace-nowrap text-stone-900 flex items-center justify-center -translate-y-1/4">
        {data.bgText || "Windstar Cruises"}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeIn>
          <div className="mb-16 md:mb-24 text-center">
            <span className="block text-amber-700 font-sans tracking-[0.2em] uppercase text-sm mb-4">
              {data.subtitle}
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif text-navy-950 tracking-tight leading-tight max-w-4xl mx-auto">
              {data.title}
            </h2>
          </div>
        </FadeIn>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left Column: Philosophy */}
          <div className="lg:w-5/12 flex flex-col justify-center">
            <FadeIn delay={0.2}>
              <div className="pl-6 md:pl-10 border-l-4 border-amber-600">
                <h3 className="text-2xl md:text-3xl font-serif text-navy-900 mb-6">
                  {data.philosophy.heading}
                </h3>
                <p className="text-lg md:text-xl text-stone-600 font-serif italic leading-relaxed">
                  {data.philosophy.text}
                </p>
              </div>
            </FadeIn>
          </div>

          {/* Right Column: Timeline */}
          <div className="lg:w-7/12 relative">
            <div className="absolute left-[27px] md:left-[39px] top-4 bottom-4 w-px bg-stone-300"></div>
            
            <div className="space-y-12 md:space-y-16">
              {data.timeline.map((item, idx) => (
                <FadeIn key={idx} delay={idx * 0.2 + 0.3}>
                  <div className="relative pl-20 md:pl-28">
                    {/* Timeline Node */}
                    <div className="absolute left-0 top-1.5 w-14 md:w-20 h-14 md:h-20 bg-white rounded-full border border-stone-200 shadow-sm flex items-center justify-center z-10">
                      <div className="w-10 md:w-16 h-10 md:h-16 rounded-full border border-amber-600/30 flex items-center justify-center">
                        <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div>
                      <span className="font-sans text-amber-700 font-bold tracking-widest text-sm uppercase block mb-2">
                        {item.time}
                      </span>
                      <h4 className="text-2xl font-serif text-navy-950 mb-4">
                        {item.title}
                      </h4>
                      <p className="text-stone-600 font-sans leading-relaxed text-base md:text-lg">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default EditorialCabinExperience;
