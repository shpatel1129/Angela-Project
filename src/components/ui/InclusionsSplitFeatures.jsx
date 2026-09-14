import React from 'react';
import { Check, X } from 'lucide-react';
import MasterImage from './MasterImage';

const InclusionsSplitFeatures = ({ data, image }) => {
  if (!data) return null;

  const { headline, description, pullQuote, whatIsIncluded, whatIsExtra } = data;

  return (
    <section className="bg-slate-50 py-24 px-6 relative overflow-hidden">
      {/* Decorative vector shape background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gold-400/5 rounded-full filter blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          
          {/* Left Panel: Narrative, Image, Pullquote */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <span className="inline-block text-xs font-bold tracking-[0.25em] text-gold-400 uppercase">
                The Frictionless Journey
              </span>
              <h2 className="font-display text-4xl md:text-5xl text-navy-950 leading-tight">
                {headline}
              </h2>
              <p className="font-sans text-slate-600 leading-relaxed text-base">
                {description}
              </p>
            </div>

            {/* Inclusions Image */}
            {image && (
              <div className="relative rounded-[32px] overflow-hidden aspect-[4/3] shadow-md border border-white">
                <MasterImage src={image} alt="Luxury cruise ship" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-navy-950/20"></div>
              </div>
            )}

            {/* Premium Blockquote */}
            <blockquote className="border-l-4 border-gold-400 pl-6 py-2 bg-white/50 backdrop-blur p-6 rounded-r-3xl border border-slate-100 shadow-sm">
              <p className="font-display text-lg md:text-xl text-navy-900 italic leading-relaxed">
                "{pullQuote}"
              </p>
            </blockquote>
          </div>

          {/* Right Panel: Included vs Extra Lists */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* List 1: What is Included */}
            <div className="bg-navy-950 text-white rounded-[32px] p-8 flex flex-col justify-between shadow-xl relative overflow-hidden border border-navy-900">
              {/* Background accent */}
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-gold-400/10 rounded-full filter blur-xl"></div>
              
              <div className="space-y-8 relative z-10">
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <h3 className="font-display text-2xl text-gold-400">{whatIsIncluded.title}</h3>
                  <Check className="w-5 h-5 text-gold-400" />
                </div>
                <div className="space-y-6">
                  {whatIsIncluded.items?.map((item, idx) => (
                    <div key={idx} className="space-y-1">
                      <h4 className="font-display text-base text-white font-medium">{item.title}</h4>
                      <p className="font-sans text-slate-300 text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* List 2: What is Extra */}
            <div className="bg-white text-navy-950 rounded-[32px] p-8 flex flex-col justify-between shadow-sm border border-slate-200/80">
              <div className="space-y-8">
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <h3 className="font-display text-2xl text-navy-950">{whatIsExtra.title}</h3>
                  <X className="w-5 h-5 text-rose-500" />
                </div>
                <div className="space-y-6">
                  {whatIsExtra.items?.map((item, idx) => (
                    <div key={idx} className="space-y-1">
                      <h4 className="font-display text-base text-navy-900 font-medium">{item.title}</h4>
                      <p className="font-sans text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default InclusionsSplitFeatures;
