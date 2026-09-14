import React from 'react';
import MasterImage from './MasterImage';

const InclusionsSuitesDining = ({ data, suiteImg, butlerImg, bathroomImg }) => {
  if (!data) return null;

  const { headline, intro, suite, butler, dining } = data;

  const sections = [
    { ...suite, image: suiteImg, color: 'border-gold-400' },
    { ...butler, image: butlerImg, color: 'border-navy-950' },
    { ...dining, image: bathroomImg, color: 'border-gold-400' }
  ];

  return (
    <section className="bg-white py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="inline-block text-xs font-bold tracking-[0.25em] text-gold-400 uppercase bg-gold-400/10 px-3 py-1 rounded-full">
            Onboard Luxury In Depth
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-navy-950">
            {headline}
          </h2>
          <p className="font-sans text-slate-600 text-lg leading-relaxed">
            {intro}
          </p>
        </div>

        {/* 3 Staggered Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {sections.map((sec, idx) => (
            <div
              key={idx}
              className={`bg-slate-50 border-t-4 ${sec.color} rounded-[32px] overflow-hidden shadow-sm flex flex-col hover:shadow-md transition-all duration-300 group ${
                idx === 1 ? 'lg:translate-y-8' : idx === 2 ? 'lg:translate-y-16' : ''
              }`}
            >
              {/* Image */}
              {sec.image && (
                <div className="h-64 relative overflow-hidden">
                  <MasterImage
                    src={sec.image}
                    alt={sec.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-750"
                  />
                  <div className="absolute inset-0 bg-navy-950/20"></div>
                </div>
              )}

              {/* Content */}
              <div className="p-8 md:p-10 space-y-6 flex-1 flex flex-col justify-between">
                <div className="space-y-4">
                  <h3 className="font-display text-2xl text-navy-950 leading-tight">
                    {sec.title}
                  </h3>
                  <p className="font-sans text-slate-600 text-sm leading-relaxed">
                    {sec.body}
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-200/60 mt-6 bg-white/40 -mx-8 -mb-10 px-8 py-6 rounded-b-[28px]">
                  <p className="text-gold-400 text-[10px] font-bold uppercase tracking-widest mb-2">Angela Hughes' Planning Insight</p>
                  <p className="font-sans text-slate-600 text-xs leading-relaxed italic">
                    "{sec.bestFor}"
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default InclusionsSuitesDining;
