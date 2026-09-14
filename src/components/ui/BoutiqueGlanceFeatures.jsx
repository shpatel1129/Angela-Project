import React from 'react';
import FadeIn from './FadeIn';

const BoutiqueGlanceFeatures = ({ title, subtitle, categories }) => {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-20">
          <FadeIn>
            <span className="font-sans text-xs uppercase tracking-[0.2em] text-gold-500 font-bold mb-3 block">
              {subtitle || "Head to Head Details"}
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-navy-950 font-bold">
              {title || "Boutique Experience Comparison"}
            </h2>
            <div className="w-12 h-[2px] bg-gold-400 mx-auto mt-6"></div>
          </FadeIn>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {categories.map((cat, idx) => (
            <FadeIn key={idx} delay={idx * 100}>
              <div className="bg-slate-50 rounded-3xl p-8 md:p-10 border border-slate-100 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between h-full relative overflow-hidden group">
                {/* Visual border accent */}
                <div className="absolute top-0 left-0 w-2.5 h-full bg-gold-500 transition-colors duration-300"></div>

                <div>
                  <h3 className="font-display text-2xl text-navy-950 font-bold mb-6 pl-4">{cat.title}</h3>
                  
                  {/* Windstar description / advantages */}
                  <div className="mb-6 pl-4">
                    <span className="font-sans text-xs uppercase tracking-wider text-gold-600 font-semibold mb-2 block">Windstar Approach</span>
                    <p className="font-sans text-slate-600 text-sm leading-relaxed mb-4">
                      {cat.windstarDesc}
                    </p>
                    <ul className="space-y-2">
                      {cat.windstarPoints.map((pt, i) => (
                        <li key={i} className="flex items-center gap-2 text-xs font-sans text-slate-500 font-medium">
                          <span className="w-1 h-1 rounded-full bg-slate-400"></span>
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* SeaDream description / advantages */}
                  <div className="mb-8 pl-4">
                    <span className="font-sans text-xs uppercase tracking-wider text-gold-600 font-semibold mb-2 block">SeaDream Approach</span>
                    <p className="font-sans text-slate-600 text-sm leading-relaxed mb-4">
                      {cat.seadreamDesc}
                    </p>
                    <ul className="space-y-2">
                      {cat.seadreamPoints.map((pt, i) => (
                        <li key={i} className="flex items-center gap-2 text-xs font-sans text-slate-500 font-medium">
                          <span className="w-1 h-1 rounded-full bg-slate-400"></span>
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Score bar comparison dashboard */}
                <div className="pl-4 pt-6 border-t border-slate-200/60 mt-auto">
                  <div className="flex items-center justify-between text-xs font-sans text-navy-950 font-bold uppercase tracking-widest mb-4">
                    <span>Expert Weighting</span>
                    <span className="text-gold-600">Comparison Index</span>
                  </div>
                  
                  {/* Windstar bar */}
                  <div className="mb-3">
                    <div className="flex justify-between text-xs font-sans text-slate-500 mb-1.5">
                      <span>Windstar</span>
                      <span>{cat.windstarScore}%</span>
                    </div>
                    <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                      <div className="h-full bg-navy-950 rounded-full transition-all duration-1000" style={{ width: `${cat.windstarScore}%` }}></div>
                    </div>
                  </div>

                  {/* SeaDream bar */}
                  <div>
                    <div className="flex justify-between text-xs font-sans text-slate-500 mb-1.5">
                      <span>SeaDream</span>
                      <span>{cat.seadreamScore}%</span>
                    </div>
                    <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                      <div className="h-full bg-gold-500 rounded-full transition-all duration-1000" style={{ width: `${cat.seadreamScore}%` }}></div>
                    </div>
                  </div>
                </div>

              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BoutiqueGlanceFeatures;
