import React, { useState } from 'react';
import FadeIn from './FadeIn';
import { ChevronDown, ChevronUp, Star, Check, AlertCircle, User } from 'lucide-react';

const BrandComparisonCarousel = ({ title, brands }) => {
  const [expandedIndex, setExpandedIndex] = useState(0);

  if (!brands || brands.length === 0) return null;

  const toggleExpanded = (index) => {
    setExpandedIndex(expandedIndex === index ? -1 : index);
  };

  const getStarCount = (brand) => {
    if (brand.yachtStyle?.includes('Discovery') || brand.name?.includes('Ritz') || brand.name?.includes('Four Seasons')) return 5;
    if (brand.yachtStyle?.includes('Boutique')) return 4;
    return 5;
  };

  return (
    <section className="py-24 bg-ice-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white rounded-full blur-[120px] opacity-60 translate-x-1/4 -translate-y-1/4"></div>

      <div className="max-w-[1100px] mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <FadeIn>
            <p className="font-sans text-xs uppercase tracking-[0.25em] text-navy-500 font-bold mb-4">Brand Guide</p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-navy-950 mb-4">{title}</h2>
            <div className="w-24 h-1 bg-gold-500 mx-auto rounded-full"></div>
          </FadeIn>
        </div>

        {/* Brand Cards */}
        <div className="space-y-4">
          {brands.map((brand, index) => {
            const isExpanded = expandedIndex === index;
            const stars = getStarCount(brand);

            return (
              <FadeIn key={index} delay={index * 0.05}>
                <div className={`bg-white rounded-2xl shadow-sm border transition-all duration-500 overflow-hidden ${
                  isExpanded ? 'border-gold-200 shadow-lg' : 'border-ice-100 hover:border-ice-200 hover:shadow-md'
                }`}>
                  {/* Header Row — Always Visible */}
                  <button 
                    onClick={() => toggleExpanded(index)}
                    className="w-full flex items-center justify-between p-6 lg:p-8 text-left cursor-pointer group"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-3 flex-wrap">
                        <h3 className="font-display text-xl lg:text-2xl text-navy-950 group-hover:text-navy-800 transition-colors">{brand.name}</h3>
                        <span className="font-sans text-xs uppercase tracking-widest text-navy-400 bg-ice-50 px-3 py-1 rounded-full border border-ice-100">{brand.yachtStyle}</span>
                      </div>
                      <p className="font-sans text-sm text-navy-600 mt-2">{brand.bestFor}</p>
                    </div>

                    <div className="flex items-center gap-4 ml-4">
                      <div className="hidden md:flex gap-0.5">
                        {[1,2,3,4,5].map(s => (
                          <Star key={s} size={14} className={s <= stars ? 'fill-gold-500 text-gold-500' : 'fill-transparent text-slate-300'} />
                        ))}
                      </div>
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                        isExpanded ? 'bg-navy-950 text-white' : 'bg-ice-50 text-navy-600'
                      }`}>
                        {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                      </div>
                    </div>
                  </button>

                  {/* Expanded Content */}
                  <div className={`transition-all duration-500 ease-in-out ${
                    isExpanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                  } overflow-hidden`}>
                    <div className="px-6 lg:px-8 pb-8 pt-0">
                      <div className="border-t border-ice-100 pt-8">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                          {/* Highlights */}
                          <div>
                            <h4 className="font-sans text-xs uppercase tracking-widest text-navy-500 font-bold mb-4 flex items-center gap-2">
                              <Star size={14} className="text-gold-500" />
                              Highlights
                            </h4>
                            <ul className="space-y-3">
                              {brand.highlights.map((h, i) => (
                                <li key={i} className="flex items-start gap-3 font-sans text-sm text-navy-700">
                                  <div className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-1.5 flex-shrink-0"></div>
                                  {h}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Advantages */}
                          <div>
                            <h4 className="font-sans text-xs uppercase tracking-widest text-navy-500 font-bold mb-4 flex items-center gap-2">
                              <Check size={14} className="text-emerald-500" />
                              Advantages
                            </h4>
                            <ul className="space-y-3">
                              {brand.advantages.map((a, i) => (
                                <li key={i} className="flex items-start gap-3 font-sans text-sm text-navy-700">
                                  <Check size={14} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                                  {a}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Considerations + Ideal Traveler */}
                          <div>
                            <h4 className="font-sans text-xs uppercase tracking-widest text-navy-500 font-bold mb-4 flex items-center gap-2">
                              <AlertCircle size={14} className="text-amber-500" />
                              Consider Before Booking
                            </h4>
                            <ul className="space-y-3 mb-6">
                              {brand.considerations.map((c, i) => (
                                <li key={i} className="flex items-start gap-3 font-sans text-sm text-navy-600">
                                  <AlertCircle size={14} className="text-amber-400 mt-0.5 flex-shrink-0" />
                                  {c}
                                </li>
                              ))}
                            </ul>

                            <div className="bg-navy-950 rounded-xl p-5">
                              <h4 className="font-sans text-xs uppercase tracking-widest text-gold-400 font-bold mb-2 flex items-center gap-2">
                                <User size={14} />
                                Ideal Traveler
                              </h4>
                              <p className="font-sans text-sm text-ice-100/80 leading-relaxed">{brand.idealTraveler}</p>
                            </div>
                          </div>
                        </div>
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

export default BrandComparisonCarousel;
