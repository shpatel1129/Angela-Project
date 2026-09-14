import React from 'react';
import FadeIn from './FadeIn';

const EditorialIntroSection = ({ heading, description, image, highlights }) => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-ice-50 -skew-x-12 transform origin-top-right z-0"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Text Content */}
          <div className="w-full lg:w-1/2">
            <FadeIn>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px bg-gold-500 w-12"></div>
                <span className="text-gold-500 font-sans font-bold tracking-[0.2em] uppercase text-xs">
                  Discover The Rhine
                </span>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display text-navy-950 mb-8 leading-tight">
                {heading}
              </h2>
              
              <div className="font-sans text-lg text-slate-600 leading-relaxed space-y-6">
                {description.split('\n\n').map((paragraph, i) => (
                  <p key={i} className={i === 0 ? "text-xl text-navy-900 font-medium" : ""}>
                    {paragraph}
                  </p>
                ))}
              </div>

              {highlights && (
                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-gold-50 flex items-center justify-center mr-4 shrink-0">
                        <svg className="w-4 h-4 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <span className="font-sans text-sm font-semibold text-navy-900">{highlight}</span>
                    </div>
                  ))}
                </div>
              )}
            </FadeIn>
          </div>

          {/* Image Content */}
          <div className="w-full lg:w-1/2">
            <FadeIn delay={0.2}>
              <div className="relative">
                {/* Image Frame Offset */}
                <div className="absolute inset-0 border-2 border-gold-200 translate-x-6 translate-y-6 rounded-2xl z-0"></div>
                
                {/* Main Image */}
                <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                  <div className="aspect-[4/5] relative">
                    <img 
                      src={image} 
                      alt="Luxury River Cruise"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-navy-900/10"></div>
                  </div>
                </div>

                {/* Floating Badge */}
                <div className="absolute -left-8 top-1/4 bg-white p-6 rounded-xl shadow-xl z-20 max-w-xs hidden md:block">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="w-10 h-10 rounded-full bg-navy-50 flex items-center justify-center">
                      <svg className="w-5 h-5 text-navy-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                    <span className="font-display text-xl text-navy-900">World-Class</span>
                  </div>
                  <p className="font-sans text-xs text-slate-500 leading-relaxed">
                    Experience unparalleled luxury and curated itineraries tailored for the modern explorer.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
};

export default EditorialIntroSection;
