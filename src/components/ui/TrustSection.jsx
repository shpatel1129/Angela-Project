import React from 'react';
import FadeIn from './FadeIn';
import { ShieldCheck, Map, Anchor, Star } from 'lucide-react';
import MasterImage from './MasterImage';

const TrustSection = ({ sections, mainImage, secondaryImage }) => {
  if (!sections || sections.length === 0) return null;

  const [trustSection, chooseUsSection, planningSection] = sections;

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-ice-50/50 skew-y-3 transform -translate-y-20 z-0"></div>

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        
        {/* Top Part: Text + Unique Right Side */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 mb-24">
          
          {/* Left: Text */}
          <div className="lg:w-1/2">
            <FadeIn direction="right">
              <div className="flex items-center gap-3 mb-6">
                <ShieldCheck className="text-accent-600 w-6 h-6" />
                <span className="font-sans font-bold text-xs uppercase tracking-[0.2em] text-navy-800">Expertise & Trust</span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl text-navy-950 mb-8 leading-tight">
                {trustSection.heading}
              </h2>
              
              <div className="space-y-6 mb-8">
                {trustSection.paragraphs?.map((p, idx) => (
                  <p key={idx} className="font-sans text-lg text-slate-600 leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
              
              {trustSection.conclusion && (
                <div className="bg-ice-50 border-l-4 border-accent-500 p-6 rounded-r-xl">
                  <p className="font-sans text-navy-900 font-medium italic">
                    {trustSection.conclusion}
                  </p>
                </div>
              )}
            </FadeIn>
          </div>

          {/* Right: Unique Composition */}
          <div className="lg:w-1/2 w-full">
            <FadeIn direction="left" delay={0.2}>
              <div className="relative">
                {/* Main Large Image */}
                <div className="w-full h-[450px] md:h-[550px] rounded-3xl overflow-hidden shadow-2xl relative">
                  {mainImage ? (
                    <MasterImage src={mainImage} alt="Luxury Travel" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
                  ) : (
                    <div className="w-full h-full bg-slate-200"></div>
                  )}
                  
                  {/* Overlay Gradient for elegance */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 to-transparent"></div>
                  
                  {/* Decorative Elements inside Image */}
                  <div className="absolute bottom-8 left-8 right-8 flex items-center justify-between text-white">
                    <div>
                      <p className="font-display text-3xl mb-1">Tailored</p>
                      <p className="font-sans text-sm uppercase tracking-widest text-ice-100">For Your Travel Style</p>
                    </div>
                    <Star className="w-8 h-8 text-accent-400 fill-accent-400 opacity-80" />
                  </div>
                </div>

                {/* Floating Experience Card */}
                <div className="absolute -left-6 md:-left-12 top-1/4 bg-white p-6 rounded-2xl shadow-xl border border-ice-100 flex items-center gap-4 animate-float hidden md:flex">
                  <div className="w-12 h-12 bg-accent-50 rounded-full flex items-center justify-center">
                    <Map className="w-6 h-6 text-accent-600" />
                  </div>
                  <div>
                    <p className="font-display text-2xl text-navy-950">121+</p>
                    <p className="font-sans text-xs uppercase tracking-wider text-slate-500 font-bold">Countries Visited</p>
                  </div>
                </div>

                {/* Secondary Offset Image (Round / Medallion style) */}
                <div className="absolute -right-4 md:-right-8 -bottom-8 w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden shadow-xl border-8 border-white hidden sm:block">
                  {secondaryImage ? (
                    <MasterImage src={secondaryImage} alt="Details" className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full bg-slate-300"></div>
                  )}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Bottom Part: The two remaining sections side-by-side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Why Travelers Choose Us */}
          {chooseUsSection && (
            <FadeIn delay={0.3} className="h-full">
              <div className="bg-navy-950 rounded-3xl p-8 md:p-12 h-full text-white shadow-xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                  <Anchor className="w-32 h-32 text-white" />
                </div>
                <h3 className="font-display text-3xl mb-6 relative z-10">{chooseUsSection.heading}</h3>
                <p className="font-sans text-ice-100 mb-8 relative z-10">{chooseUsSection.paragraphs?.[0]}</p>
                
                {chooseUsSection.list && (
                  <ul className="space-y-4 relative z-10">
                    {chooseUsSection.list.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="mt-1 w-5 h-5 rounded-full bg-accent-500/20 flex items-center justify-center flex-shrink-0">
                          <div className="w-2 h-2 rounded-full bg-accent-400"></div>
                        </div>
                        <span className="font-sans text-sm text-ice-50 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
                
                {chooseUsSection.conclusion && (
                  <div className="mt-8 pt-6 border-t border-white/10 relative z-10">
                    <p className="font-sans text-sm font-semibold text-accent-300 uppercase tracking-widest">{chooseUsSection.conclusion}</p>
                  </div>
                )}
              </div>
            </FadeIn>
          )}

          {/* Planning a River Cruise? */}
          {planningSection && (
            <FadeIn delay={0.4} className="h-full">
              <div className="bg-ice-50 rounded-3xl p-8 md:p-12 h-full border border-slate-100 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-3xl text-navy-950 mb-6">{planningSection.heading}</h3>
                  <div className="space-y-4 mb-8">
                    {planningSection.paragraphs?.map((p, idx) => (
                      <p key={idx} className="font-sans text-slate-600 leading-relaxed">
                        {p}
                      </p>
                    ))}
                  </div>
                </div>
                
                {planningSection.list && (
                  <ul className="bg-white p-6 rounded-2xl border border-ice-100 space-y-3">
                    {planningSection.list.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <ShieldCheck className="w-5 h-5 text-accent-500 flex-shrink-0" />
                        <span className="font-sans text-sm text-navy-800 font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </FadeIn>
          )}

        </div>
      </div>
    </section>
  );
};

export default TrustSection;
