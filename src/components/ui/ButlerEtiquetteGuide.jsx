import React, { useState } from 'react';
import FadeIn from './FadeIn';
import MasterImage from './MasterImage';
import { ChevronDown, Check, X, MessageSquare } from 'lucide-react';

const ButlerEtiquetteGuide = ({ data, image }) => {
  const [openItem, setOpenItem] = useState(0);

  if (!data) return null;

  return (
    <section className="w-full py-20 lg:py-28 bg-ice-50/30">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <FadeIn className="text-center mb-16">
          <span className="uppercase tracking-[0.25em] text-[11px] font-bold text-slate-400 mb-4 block">
            {data?.eyebrow}
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-navy-950 leading-tight mb-6">
            {data?.heading}
          </h2>
          <div className="w-14 h-[2px] bg-gold-400 mx-auto mb-6" />
          <p className="font-sans text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            {data?.description}
          </p>
        </FadeIn>

        {/* Golden Rule */}
        {data?.goldenRule && (
          <FadeIn delay={0.1}>
            <div className="max-w-3xl mx-auto mb-16 bg-navy-950 rounded-2xl p-8 text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent" />
              <span className="font-sans text-xs font-bold tracking-widest uppercase text-gold-400 mb-4 block">
                THE GOLDEN RULE
              </span>
              <p className="font-display text-lg lg:text-xl text-white/90 italic leading-relaxed">
                "{data.goldenRule}"
              </p>
            </div>
          </FadeIn>
        )}

        {/* Two Column: Image + Accordion */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
          {/* Image */}
          {image && (
            <FadeIn>
              <div className="rounded-2xl overflow-hidden shadow-xl aspect-[3/4] lg:aspect-auto lg:h-full sticky top-24">
                <MasterImage
                  src={image}
                  alt="Silversea luxury cruise etiquette"
                  className="w-full h-full object-cover"
                />
              </div>
            </FadeIn>
          )}

          {/* Accordion */}
          <FadeIn delay={0.1}>
            <div className="space-y-3">
              {data?.etiquetteItems?.map((item, i) => (
                <div
                  key={i}
                  className={`rounded-xl border overflow-hidden transition-all duration-300 ${openItem === i ? 'border-gold-400/50 shadow-md bg-white' : 'border-slate-200/60 bg-white hover:shadow-sm'}`}
                >
                  <button
                    onClick={() => setOpenItem(openItem === i ? -1 : i)}
                    className="w-full flex items-center justify-between px-6 py-4 text-left"
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-display text-lg text-gold-500 w-6">{String(i + 1).padStart(2, '0')}</span>
                      <span className="font-sans text-sm font-medium text-navy-950">{item?.title}</span>
                    </div>
                    <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-300 flex-shrink-0 ${openItem === i ? 'rotate-180' : ''}`} />
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openItem === i ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="px-6 pb-5 pl-14">
                      <p className="font-sans text-sm text-slate-600 leading-relaxed">
                        {item?.content}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>

        {/* Useful Requests Grid */}
        {data?.usefulRequests && (
          <FadeIn delay={0.15}>
            <div className="mb-20">
              <h3 className="font-display text-2xl lg:text-3xl text-navy-950 text-center mb-10">
                {data.usefulRequests.title}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {data.usefulRequests.categories?.map((cat, i) => (
                  <div key={i} className="bg-white rounded-xl border border-slate-200/60 p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-2 mb-4">
                      <MessageSquare className="w-4 h-4 text-gold-500" />
                      <h4 className="font-display text-base text-navy-950">{cat?.category}</h4>
                    </div>
                    <div className="space-y-2.5">
                      {cat?.requests?.map((req, j) => (
                        <p key={j} className="font-sans text-xs text-slate-600 leading-relaxed pl-3 border-l border-gold-400/30">
                          "{req}"
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        )}

        {/* Best For vs Not Best For Table */}
        {data?.bestForTable && (
          <FadeIn delay={0.2}>
            <div className="max-w-4xl mx-auto">
              <h3 className="font-display text-2xl text-navy-950 text-center mb-8">
                {data.bestForTable.title}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Best For */}
                <div className="bg-white rounded-xl border border-emerald-200/60 p-6">
                  <h4 className="font-sans text-xs font-bold tracking-widest uppercase text-emerald-600 mb-5 flex items-center gap-2">
                    <Check className="w-4 h-4" /> Best For
                  </h4>
                  <div className="space-y-3">
                    {data.bestForTable.bestFor?.map((item, i) => (
                      <div key={i} className="flex items-center gap-2.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                        <span className="font-sans text-sm text-slate-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* May Matter Less */}
                <div className="bg-white rounded-xl border border-slate-200/60 p-6">
                  <h4 className="font-sans text-xs font-bold tracking-widest uppercase text-slate-400 mb-5 flex items-center gap-2">
                    <X className="w-4 h-4" /> May Matter Less To
                  </h4>
                  <div className="space-y-3">
                    {data.bestForTable.mayMatterLess?.map((item, i) => (
                      <div key={i} className="flex items-center gap-2.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0" />
                        <span className="font-sans text-sm text-slate-500">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        )}
      </div>
    </section>
  );
};

export default ButlerEtiquetteGuide;
