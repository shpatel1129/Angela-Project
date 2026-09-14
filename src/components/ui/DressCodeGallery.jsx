import React from 'react';
import FadeIn from './FadeIn';
import { Sun, Coffee, Moon, CheckCircle2 } from 'lucide-react';

const icons = {
  daytime: Sun,
  onboard: Coffee,
  evening: Moon
};

const DressCodeGallery = ({ data }) => {
  if (!data || !data.categories) return null;

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left Column: Sticky Header */}
          <div className="lg:w-1/3">
            <div className="sticky top-32">
              <FadeIn direction="right">
                <div className="w-12 h-1 bg-accent-500 mb-8"></div>
                <h2 className="font-display text-4xl md:text-5xl text-navy-950 mb-6 leading-tight">
                  {data.title}
                </h2>
                <p className="font-sans text-xl text-slate-600 leading-relaxed mb-8">
                  {data.subtitle}
                </p>
                
                <div className="hidden lg:block">
                  <p className="font-sans text-sm uppercase tracking-widest text-slate-400 font-semibold mb-4">Categories</p>
                  <ul className="space-y-3">
                    {data.categories.map((cat, idx) => (
                      <li key={idx} className="font-sans text-navy-900 border-l-2 border-slate-200 pl-4 hover:border-accent-500 transition-colors cursor-pointer">
                        {cat.title}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            </div>
          </div>

          {/* Right Column: Content List */}
          <div className="lg:w-2/3">
            <div className="flex flex-col space-y-16 lg:space-y-24">
              {data.categories.map((category, index) => {
                const Icon = icons[category.id] || Sun;
                
                return (
                  <FadeIn key={category.id} direction="up" delay={index * 0.1}>
                    <div className="relative pl-0 md:pl-12">
                      
                      {/* Decorative Line (Desktop) */}
                      <div className="hidden md:block absolute left-0 top-0 bottom-0 w-px bg-slate-200"></div>
                      
                      {/* Icon */}
                      <div className="hidden md:flex absolute -left-6 top-0 w-12 h-12 bg-white border border-slate-200 rounded-full items-center justify-center text-accent-500 shadow-sm">
                        <Icon className="w-5 h-5" />
                      </div>

                      {/* Mobile Icon */}
                      <div className="md:hidden w-12 h-12 bg-ice-50 rounded-full flex items-center justify-center text-accent-500 mb-6">
                        <Icon className="w-6 h-6" />
                      </div>

                      <div className="mb-6">
                        <h3 className="font-display text-3xl md:text-4xl text-navy-950 mb-4">
                          {category.title}
                        </h3>
                        <p className="font-sans text-lg text-slate-600 italic leading-relaxed">
                          "{category.description}"
                        </p>
                      </div>

                      <div className="bg-ice-50/50 rounded-2xl p-6 md:p-8 border border-slate-100">
                        <h4 className="font-sans text-xs uppercase tracking-widest text-navy-800 font-bold mb-6">Packing Essentials</h4>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                          {category.items.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <CheckCircle2 className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5" />
                              <span className="font-sans text-navy-900 leading-relaxed text-sm md:text-base">
                                {item}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default DressCodeGallery;
