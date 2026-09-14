import React from 'react';
import { Link } from 'react-router-dom';
import { Check, X } from 'lucide-react';
import MasterImage from './MasterImage';

const FeatureSplit = ({ 
  imagePosition = 'right', 
  theme = 'light', // 'light' | 'white'
  image,
  title,
  subtitles = [],
  features = [],
  summary,
  bestFor = [],
  notIdealFor = [],
  ctaText,
  ctaLink,
  children
}) => {
  const isRight = imagePosition === 'right';
  const bgClass = theme === 'light' ? 'bg-ice-50' : 'bg-white';

  if (!title && !summary && (!features || features.length === 0)) return null;

  return (
    <section className={`w-full py-16 ${bgClass}`}>
      <div className="max-w-[1280px] mx-auto px-6 flex flex-col md:flex-row items-stretch gap-16">
        
        {/* Text Content */}
        <div className={`flex-1 flex flex-col justify-center ${isRight ? 'order-1 md:order-1' : 'order-1 md:order-2'}`}>
          <h2 className="font-display text-4xl text-navy-950 mb-6">{title}</h2>
          
          {subtitles.length > 0 && (
            <div className="flex flex-col gap-2 mb-8">
              {subtitles.map((sub, idx) => (
                <h3 key={idx} className="font-sans text-lg font-medium text-navy-800">
                  {sub}
                </h3>
              ))}
            </div>
          )}

          {features.length > 0 && (
            <ul className="mb-8 space-y-4">
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-navy-800 mt-2 flex-shrink-0" />
                  {typeof feature === 'object' && feature !== null ? (
                    <div className="font-sans text-slate-700">
                      {feature.title && <strong className="font-semibold text-navy-950 block mb-1">{feature.title}</strong>}
                      <span className="text-sm sm:text-base leading-relaxed">{feature.description || ''}</span>
                    </div>
                  ) : (
                    <span className="font-sans text-slate-700">{feature}</span>
                  )}
                </li>
              ))}
            </ul>
          )}

          {summary && (
            <p className="font-sans text-lg text-slate-700 italic border-l-4 border-navy-800 pl-4 mb-8">
              {summary}
            </p>
          )}

          {ctaText && (
            <div className="mt-4">
              <Link
                to={ctaLink || "/contact"}
                className="inline-flex items-center justify-center px-8 py-3 bg-navy-950 text-white font-sans text-sm font-bold tracking-widest uppercase hover:bg-navy-900 transition-all rounded-full shadow-lg hover:scale-105"
              >
                {ctaText}
              </Link>
            </div>
          )}

          {(bestFor.length > 0 || notIdealFor.length > 0) && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-4">
              {bestFor.length > 0 && (
                <div>
                  <h4 className="font-sans font-bold text-navy-950 mb-4 uppercase tracking-wider text-sm">Best For</h4>
                  <ul className="space-y-2">
                    {bestFor.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-slate-600">
                        <div className="w-6 h-6 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0">
                          <Check size={14} strokeWidth={2} className="text-green-600" />
                        </div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {notIdealFor.length > 0 && (
                <div>
                  <h4 className="font-sans font-bold text-navy-950 mb-4 uppercase tracking-wider text-sm">Not Ideal For</h4>
                  <ul className="space-y-2">
                    {notIdealFor.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-slate-600">
                        <div className="w-6 h-6 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0">
                          <X size={14} strokeWidth={2} className="text-red-500" />
                        </div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {children}
        </div>

        {/* Image / Placeholder */}
        <div className={`flex-1 min-h-[400px] md:min-h-full rounded-2xl overflow-hidden bg-slate-100 relative border border-slate-200 ${isRight ? 'order-2 md:order-2' : 'order-2 md:order-1'}`}>
          {image ? (
            <MasterImage
              asBackground={true}
              src={image}
              className="absolute inset-0 bg-cover bg-center"
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-slate-50 to-slate-200 border-2 border-dashed border-slate-300 flex flex-col items-center justify-center p-8 text-center">
              <span className="font-sans text-xs font-bold tracking-[0.2em] text-slate-400 uppercase mb-3">IMAGE PLACEHOLDER</span>
              <span className="font-display text-2xl text-slate-600 max-w-md">{title || 'Featured Content'}</span>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

export default FeatureSplit;
