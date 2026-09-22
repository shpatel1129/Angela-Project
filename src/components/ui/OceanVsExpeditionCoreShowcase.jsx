import React from 'react';
import { Compass, Ship, Sparkles, Check } from 'lucide-react';
import FadeIn from './FadeIn';

const OceanVsExpeditionCoreShowcase = ({ 
  title = "Core Cruise Foundations", 
  subtitle = "DEFINING THE OCEAN VOYAGE VS. EXPEDITION MODEL", 
  items = [] 
}) => {
  return (
    <section className="py-20 md:py-28 bg-white border-t border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <FadeIn>
            {subtitle && (
              <span className="text-xs uppercase tracking-widest text-gold-600 font-bold block mb-3">
                {subtitle}
              </span>
            )}
            <h2 className="text-3xl md:text-5xl font-display text-navy-950 mb-6">
              {title}
            </h2>
            <div className="w-16 h-0.5 bg-gold-400 mx-auto"></div>
          </FadeIn>
        </div>

        {/* Alternating Showcase Cards */}
        <div className="space-y-20 md:space-y-28">
          {items.map((item, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <FadeIn key={idx} delay={0.1}>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                  
                  {/* Image Container Side (Images commented out as requested) */}
                  <div className={`lg:col-span-5 w-full ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="relative group rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-slate-50">
                      
                      {/* ========================================================================= */}
                      {/* IMAGE COMMENTED OUT AS REQUESTED - UNCOMMENT WHEN READY TO DISPLAY IMAGES */}
                      {/* ========================================================================= */}
                      {/* 
                      <img 
                        src={item.image || "https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=1200&q=80"} 
                        alt={item.title} 
                        className="w-full h-full min-h-[380px] lg:min-h-[480px] object-cover transition-transform duration-700 group-hover:scale-105"
                      /> 
                      */}
                      
                      {/* Image Placeholder Frame (Visible while image tag remains commented out above) */}
                      <div className="w-full min-h-[340px] md:min-h-[420px] bg-gradient-to-br from-slate-100 via-ice-50 to-slate-200/70 rounded-2xl border-2 border-dashed border-slate-300 flex flex-col items-center justify-center p-8 text-center relative overflow-hidden">
                        <div className="w-16 h-16 rounded-full bg-navy-950 text-gold-400 flex items-center justify-center mb-4 shadow-md">
                          {idx === 0 ? <Ship className="w-8 h-8" /> : <Compass className="w-8 h-8" />}
                        </div>
                        <h4 className="font-display text-xl text-navy-950 mb-2">{item.title}</h4>
                        <span className="text-xs uppercase tracking-widest text-slate-500 font-semibold bg-white/80 px-3 py-1 rounded-full border border-slate-200">
                          Image Section Ready (Commented Out)
                        </span>
                      </div>

                    </div>
                  </div>

                  {/* Content Container Side */}
                  <div className={`lg:col-span-7 w-full ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="bg-white rounded-2xl p-8 md:p-12 border border-slate-200 shadow-sm flex flex-col justify-between">
                      
                      <div>
                        <div className="flex items-center gap-3 mb-4">
                          <span className="text-xs uppercase tracking-widest text-gold-600 font-bold px-3 py-1 rounded-full bg-gold-50 border border-gold-200/60">
                            {idx === 0 ? "Traditional Small-Ship Luxury" : "Purpose-Built Exploration"}
                          </span>
                        </div>

                        <h3 className="text-2xl md:text-4xl font-display text-navy-950 mb-6">
                          {item.title}
                        </h3>

                        {item.paragraphs && item.paragraphs.map((para, pIdx) => (
                          <p key={pIdx} className="text-slate-600 text-base md:text-lg leading-relaxed mb-6 font-light">
                            {para}
                          </p>
                        ))}

                        {item.listTitle && (
                          <h4 className="text-sm font-bold text-navy-950 uppercase tracking-wider mb-4 border-b border-slate-100 pb-2">
                            {item.listTitle}
                          </h4>
                        )}

                        {item.listItems && item.listItems.length > 0 && (
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                            {item.listItems.map((listItem, lIdx) => (
                              <div key={lIdx} className="flex items-start gap-3 bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                                <span className="w-5 h-5 rounded-full bg-gold-500/10 text-gold-600 flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold">
                                  ✓
                                </span>
                                <span className="text-sm text-slate-700 font-medium">
                                  {listItem}
                                </span>
                              </div>
                            ))}
                          </div>
                        )}

                        {item.footnote && (
                          <div className="p-4 bg-ice-50 rounded-xl border border-ice-100 text-sm text-navy-900 leading-relaxed italic">
                            {item.footnote}
                          </div>
                        )}
                      </div>

                    </div>
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

export default OceanVsExpeditionCoreShowcase;
