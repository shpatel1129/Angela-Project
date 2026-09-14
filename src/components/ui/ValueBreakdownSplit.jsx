import React from 'react';
import FadeIn from './FadeIn';
import { CheckCircle2, XCircle, DollarSign, TrendingUp } from 'lucide-react';

const ValueBreakdownSplit = ({ title, subtitle, includedTitle, extrasTitle, included = [], extras = [], image }) => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-ice-50 rounded-full blur-[100px] opacity-60 -translate-y-1/2 -translate-x-1/2"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gold-50 rounded-full blur-[80px] opacity-40 translate-y-1/4 translate-x-1/4"></div>

      <div className="max-w-[1300px] mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-navy-950 rounded-full mb-6">
              <DollarSign className="w-4 h-4 text-gold-400" />
              <span className="font-sans text-xs uppercase tracking-[0.2em] text-gold-400 font-semibold">Value Breakdown</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-navy-950 mb-4">{title}</h2>
            {subtitle && <p className="font-sans text-lg text-navy-600 max-w-2xl mx-auto">{subtitle}</p>}
          </FadeIn>
        </div>

        {/* Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Image + Summary */}
          {image && (
            <FadeIn className="lg:col-span-4">
              <div className="sticky top-8">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[400px] group mb-6">
                  <img src={image} alt="Value breakdown" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/30 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp className="w-5 h-5 text-gold-400" />
                      <span className="font-sans text-xs uppercase tracking-widest text-gold-400 font-bold">Premium Value</span>
                    </div>
                    <p className="font-display text-xl text-white">Luxury You Can<br/>Actually Feel</p>
                  </div>
                </div>
                {/* Quick stat */}
                <div className="bg-navy-950 rounded-2xl p-6 text-center">
                  <p className="font-display text-3xl text-gold-400 mb-1">{included.length} Included</p>
                  <p className="font-sans text-sm text-ice-200/70">{extras.length} optional upgrades</p>
                </div>
              </div>
            </FadeIn>
          )}

          {/* Cards */}
          <div className={`${image ? 'lg:col-span-8' : 'lg:col-span-12'} grid grid-cols-1 md:grid-cols-2 gap-6`}>
            {/* Included Column */}
            <FadeIn delay={0.1}>
              <div className="bg-white rounded-3xl p-8 shadow-xl shadow-navy-900/5 border border-ice-100 h-full">
                <div className="flex items-center gap-4 mb-8 pb-6 border-b border-ice-100">
                  <div className="w-12 h-12 bg-navy-950 rounded-full flex items-center justify-center">
                    <CheckCircle2 size={24} className="text-gold-400" />
                  </div>
                  <h3 className="font-display text-2xl text-navy-900">{includedTitle}</h3>
                </div>
                <ul className="space-y-6">
                  {included.map((item, index) => (
                    <li key={index} className="flex items-start gap-4 group">
                      <div className="mt-1"><CheckCircle2 size={20} className="text-gold-500 group-hover:scale-110 transition-transform" /></div>
                      <div>
                        <h4 className="font-sans font-bold text-navy-900 mb-1">{item.title}</h4>
                        <p className="font-sans text-sm text-navy-600 leading-relaxed">{item.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            {/* Extras Column */}
            <FadeIn delay={0.3}>
              <div className="bg-navy-50 rounded-3xl p-8 shadow-inner border border-navy-100 h-full">
                <div className="flex items-center gap-4 mb-8 pb-6 border-b border-navy-200">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-navy-400">
                    <XCircle size={24} />
                  </div>
                  <h3 className="font-display text-2xl text-navy-900">{extrasTitle}</h3>
                </div>
                <ul className="space-y-6">
                  {extras.map((item, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <div className="mt-1"><div className="w-5 h-5 rounded-full border-2 border-slate-300"></div></div>
                      <div>
                        <h4 className="font-sans font-bold text-navy-900 mb-1">{item.title}</h4>
                        <p className="font-sans text-sm text-navy-600 leading-relaxed">{item.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueBreakdownSplit;
