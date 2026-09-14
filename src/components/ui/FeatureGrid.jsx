import React from 'react';
import FadeIn from './FadeIn';
import { Ship, UtensilsCrossed, Heart, Sparkles } from 'lucide-react';
import MasterImage from './MasterImage';

const iconComponents = [Ship, Sparkles, UtensilsCrossed, Heart];

const FeatureGrid = ({ title, subtitle, features, bgClass = "bg-ice-50" }) => {
  if (!features || features.length === 0) return null;

  const n = features.length;
  
  let gridCols = 'lg:grid-cols-3';
  if (n === 2 || n === 4) {
    gridCols = 'lg:grid-cols-2';
  } else if (n === 5) {
    gridCols = 'lg:grid-cols-6';
  } else if (n === 8) {
    gridCols = 'lg:grid-cols-4';
  }

  return (
    <section className={`w-full py-16 ${bgClass}`}>
      <div className="max-w-[1280px] mx-auto px-6">
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-4xl md:text-5xl text-navy-950 mb-4">{title}</h2>
          <div className="w-12 h-0.5 bg-navy-800 mx-auto mt-4 mb-6"></div>
          {subtitle && (
            <p className="font-sans text-lg text-slate-500">{subtitle}</p>
          )}
        </FadeIn>

        <div className={`grid grid-cols-1 ${gridCols} gap-8 items-stretch`}>
          {features.map((feature, idx) => {
            const IconComp = iconComponents[idx % iconComponents.length];
            
            // Adjust col-span for 5 items layout
            let spanClass = '';
            if (n === 5) {
              spanClass = idx < 3 ? 'lg:col-span-2' : 'lg:col-span-3';
            }
            
            return (
              <FadeIn key={idx} delay={idx * 0.1} hover={true} className={`h-full ${spanClass}`}>
                <div className="bg-white rounded-2xl border border-slate-100 shadow-sm flex flex-col relative overflow-hidden h-full">
                  {/* Top accent border */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-navy-800 z-10"></div>
                  
                  {feature.image && (
                    <div className="w-full h-48 bg-slate-200 relative flex-shrink-0">
                      <MasterImage src={feature.image} alt={feature.title} className="w-full h-full object-cover" />
                    </div>
                  )}
                  
                  <div className="p-10 flex flex-col flex-grow">
                    {!feature.image && (
                      <div className="w-12 h-12 rounded-xl bg-ice-50 text-navy-700 flex items-center justify-center mb-6">
                        <IconComp className="w-6 h-6" />
                      </div>
                    )}
                    
                    <h3 className="font-display text-2xl text-navy-900 mb-4 italic">{feature.title}</h3>
                    <p className="font-sans text-slate-500 mb-8 leading-relaxed">{feature.description}</p>
                    
                    <div className="mt-auto">
                      {/* Separator */}
                      <div className="w-full h-px bg-slate-100 mb-6"></div>
                      
                      {feature.tags && (
                        <div className="flex flex-wrap gap-2 mb-6">
                          {feature.tags.map((tag, i) => (
                            <span key={i} className="bg-ice-50 border border-slate-200 text-slate-600 font-sans text-xs font-medium px-4 py-2 rounded-full">
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                      
                      {feature.highlight && (
                        <div className="bg-ice-50 rounded-xl p-4 flex items-center gap-3 border border-slate-100">
                          <svg className="w-5 h-5 text-navy-700 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                          <span className="font-sans text-sm font-medium text-navy-800">{feature.highlight}</span>
                        </div>
                      )}
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

export default FeatureGrid;
