import React from 'react';
import FadeIn from './FadeIn';
import { Check, Minus } from 'lucide-react';

const ProsConsWithImage = ({ title, bestFor, notBestFor, bottomNote, prosTitle, consTitle, image }) => {
  if (!bestFor || !notBestFor) return null;

  return (
    <section className="w-full py-16 bg-white relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6">
        <FadeIn className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl text-navy-950">{title}</h2>
          <div className="w-12 h-0.5 bg-navy-800 mx-auto mt-6"></div>
        </FadeIn>

        <div className={`grid grid-cols-1 ${image ? 'lg:grid-cols-12' : 'md:grid-cols-2'} gap-8 md:gap-12 items-center`}>

          {image && (
            <FadeIn className="lg:col-span-5 h-full min-h-[500px] hidden lg:block rounded-3xl overflow-hidden relative shadow-xl">
              <img src={image} alt="Pros and Cons visual" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-navy-950/10"></div>
            </FadeIn>
          )}

          <div className={`${image ? 'lg:col-span-7 flex flex-col gap-8' : 'grid grid-cols-1 md:grid-cols-2 gap-8'}`}>
            {/* Best For Card */}
            <FadeIn direction="right">
              <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 lg:p-10 h-full relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-navy-800 rounded-t-2xl"></div>
                <h3 className="font-sans text-sm font-bold uppercase tracking-[0.15em] text-navy-900 mb-8 mt-2">{prosTitle || "Best For"}</h3>
                <ul className="space-y-5">
                  {bestFor.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-4 font-sans text-slate-700">
                      <Check className="w-5 h-5 text-navy-700 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            {/* Not Best For Card */}
            <FadeIn direction="left">
              <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 lg:p-10 h-full relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-slate-300 rounded-t-2xl"></div>
                <h3 className="font-sans text-sm font-bold uppercase tracking-[0.15em] text-navy-900 mb-8 mt-2">{consTitle || "May Not Be Best For"}</h3>
                <ul className="space-y-5">
                  {notBestFor.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-4 font-sans text-slate-500">
                      <Minus className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>

        {bottomNote && (
          <FadeIn delay={0.2} className="mt-12 text-center max-w-2xl mx-auto">
            <p className="font-sans text-slate-400 italic text-sm">
              {bottomNote}
            </p>
          </FadeIn>
        )}
      </div>
    </section>
  );
};

export default ProsConsWithImage;
