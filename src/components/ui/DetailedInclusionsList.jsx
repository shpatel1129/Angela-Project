import React from 'react';
import FadeIn from './FadeIn';
import MasterImage from './MasterImage';

const DetailedInclusionsList = ({ title, intro, items }) => {
  if (!items || items.length === 0) return null;

  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-[1280px] mx-auto px-6">
        <FadeIn className="text-center mb-24">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-navy-950 mb-8">{title}</h2>
          {intro && (
            <div className="font-sans text-lg text-slate-600 leading-relaxed max-w-4xl mx-auto space-y-4">
              {intro.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          )}
          <div className="w-16 h-[1px] bg-navy-800 mx-auto mt-12"></div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {items.map((item, idx) => {
            const isOrphaned = items.length % 2 !== 0 && idx === items.length - 1;
            return (
              <FadeIn key={idx} delay={idx * 0.1} className={`h-full ${isOrphaned ? 'md:col-span-2' : ''}`}>
                <div className={`group relative bg-ice-50 rounded-2xl p-6 md:p-8 border border-slate-100 shadow-sm flex flex-col hover:shadow-md transition-shadow h-full ${isOrphaned ? 'md:max-w-3xl md:mx-auto w-full' : ''}`}>
                  {/* Number Badge */}
                  <div className="absolute -top-6 -right-4 md:-right-6 text-7xl md:text-[100px] font-display text-navy-900/15 select-none z-0 leading-none drop-shadow-sm">
                    {idx + 1}
                  </div>

                  {/* Image Section */}
                  {item.image && (
                    <div className="relative z-10 w-full h-48 md:h-56 mb-8 rounded-xl overflow-hidden shadow-sm">
                      <MasterImage src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    </div>
                  )}

                  {/* Text Content Section */}
                  <div className="relative z-10 flex flex-col flex-grow">
                    <div className="relative z-10">
                      <h3 className="font-display text-3xl text-navy-900 mb-6 border-b border-white pb-4 inline-block">
                        {item.title}
                      </h3>

                      {item.paragraphs?.length > 0 && (
                        <div className="space-y-4 mb-8 font-sans text-slate-600 leading-relaxed">
                          {item.paragraphs.map((p, i) => (
                            <p key={i}>{p}</p>
                          ))}
                        </div>
                      )}

                      {item.lists?.map((listBlock, i) => (
                        <div key={i} className="mb-8 last:mb-0">
                          {listBlock.title && (
                            <h4 className="font-sans font-bold text-navy-800 mb-4 tracking-wide">
                              {listBlock.title}
                            </h4>
                          )}
                          <ul className="flex flex-wrap gap-2 md:gap-3">
                            {listBlock.items.map((listItem, j) => (
                              <li key={j} className="bg-ice-100/70 text-navy-800 px-4 py-2 rounded-full border border-ice-200/50 font-sans text-sm">
                                {listItem}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>

                    {item.highlight && (
                      <div className="mt-8 bg-white border-l-4 border-navy-800 p-6 rounded-xl shadow-sm">
                        {item.highlight.title && (
                          <h4 className="font-sans font-bold text-navy-950 uppercase tracking-widest text-xs mb-2">
                            {item.highlight.title}
                          </h4>
                        )}
                        <p className="font-sans text-sm text-slate-700 italic leading-relaxed">
                          {item.highlight.text}
                        </p>
                      </div>
                    )}

                    {item.paragraphsAfter?.length > 0 && (
                      <div className="space-y-4 mt-8 font-sans text-slate-600 leading-relaxed border-t border-white pt-6">
                        {item.paragraphsAfter.map((p, i) => (
                          <p key={i}>{p}</p>
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

export default DetailedInclusionsList;
