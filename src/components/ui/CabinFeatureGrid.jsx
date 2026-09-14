import React from 'react';
import FadeIn from './FadeIn';
import { ShieldCheck, ArrowRight, Eye, Sparkles } from 'lucide-react';

const CabinFeatureGrid = ({ data, image1, image2 }) => {
  if (!data) return null;

  return (
    <section className="py-24 bg-ice-50 relative overflow-hidden">
      <div className="max-w-[1300px] mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <FadeIn>
            <span className="font-sans text-xs uppercase tracking-[0.2em] text-navy-500 font-bold px-4 py-1 bg-white rounded-full border border-ice-100 inline-block mb-4">
              Comparison Choice
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-navy-950 mb-4">{data.title}</h2>
            {data.subtitle && <p className="font-sans text-lg text-navy-600 max-w-2xl mx-auto">{data.subtitle}</p>}
            <div className="w-16 h-0.5 bg-navy-800 mx-auto mt-6"></div>
          </FadeIn>
        </div>

        {/* Comparison Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          
          {/* Oceanview Cabins Card */}
          <FadeIn delay={0.1}>
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-ice-100/60 h-full flex flex-col justify-between group">
              <div>
                {image1 && (
                  <div className="relative h-64 overflow-hidden">
                    <img src={image1} alt={data.oceanview.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-navy-950/20 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 right-6 flex items-center gap-3">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/20">
                        <Eye className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="font-display text-2xl text-white">{data.oceanview.title}</h3>
                    </div>
                  </div>
                )}
                <div className="p-8 lg:p-10">
                  <p className="font-sans text-base text-navy-700 leading-relaxed mb-8">
                    {data.oceanview.bestFor}
                  </p>
                  
                  <h4 className="font-sans text-xs uppercase tracking-widest text-navy-400 font-bold mb-4">
                    Key Advantages
                  </h4>
                  <ul className="space-y-4">
                    {data.oceanview.advantages.map((adv, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <ShieldCheck className="w-5 h-5 text-gold-500 mt-0.5 flex-shrink-0" />
                        <span className="font-sans text-sm text-navy-700">{adv}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="p-8 lg:p-10 pt-0">
                <div className="border-t border-ice-100 pt-6 flex items-center justify-between text-navy-900 group-hover:text-gold-600 transition-colors">
                  <span className="font-sans text-xs uppercase tracking-widest font-bold">Smart Value Choice</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Balcony Suites Card */}
          <FadeIn delay={0.2}>
            <div className="bg-navy-950 rounded-3xl overflow-hidden shadow-xl border border-navy-900 h-full flex flex-col justify-between group text-white">
              <div>
                {image2 && (
                  <div className="relative h-64 overflow-hidden">
                    <img src={image2} alt={data.balcony.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/20 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 right-6 flex items-center gap-3">
                      <div className="w-12 h-12 bg-gold-500/20 backdrop-blur-md rounded-xl flex items-center justify-center border border-gold-500/30">
                        <Sparkles className="w-6 h-6 text-gold-400" />
                      </div>
                      <h3 className="font-display text-2xl text-white">{data.balcony.title}</h3>
                    </div>
                  </div>
                )}
                <div className="p-8 lg:p-10">
                  <p className="font-sans text-base text-ice-200/80 leading-relaxed mb-8">
                    {data.balcony.bestFor}
                  </p>
                  
                  <h4 className="font-sans text-xs uppercase tracking-widest text-gold-400 font-bold mb-4">
                    Key Advantages
                  </h4>
                  <ul className="space-y-4">
                    {data.balcony.advantages.map((adv, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <ShieldCheck className="w-5 h-5 text-gold-400 mt-0.5 flex-shrink-0" />
                        <span className="font-sans text-sm text-ice-200/80">{adv}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="p-8 lg:p-10 pt-0">
                <div className="border-t border-navy-800 pt-6 flex items-center justify-between text-gold-400 group-hover:text-gold-300 transition-colors">
                  <span className="font-sans text-xs uppercase tracking-widest font-bold font-semibold">Premium Experience</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
};

export default CabinFeatureGrid;
