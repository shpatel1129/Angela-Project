import React from 'react';
import FadeIn from './FadeIn';
import { CheckCircle2 } from 'lucide-react';

const ExpertPlanning = ({ title, subtitle, sections }) => {
  if (!sections || sections.length === 0) return null;

  return (
    <section className="w-full py-16 bg-ice-50">
      <div className="max-w-[1280px] mx-auto px-6">
        <FadeIn className="text-center mb-16">
          <h2 className="font-sans text-xs font-bold tracking-[0.2em] text-slate-400 uppercase mb-4">
            {subtitle}
          </h2>
          <h3 className="font-display text-4xl md:text-5xl text-navy-950">
            {title}
          </h3>
          <div className="w-12 h-[1px] bg-navy-800 mx-auto mt-8"></div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {sections.map((section, idx) => (
            <FadeIn key={idx} delay={idx * 0.1} hover={true} className="h-full">
              <div className="bg-white rounded-3xl p-8 md:p-10 border border-slate-100 shadow-sm flex flex-col hover:shadow-md transition-shadow h-full">
                <h4 className="font-display text-2xl text-navy-950 mb-6">{section.heading}</h4>
                
                <div className="space-y-4 mb-8">
                  {section.paragraphs?.map((p, i) => (
                    <p key={i} className="font-sans text-slate-600 leading-relaxed">{p}</p>
                  ))}
                </div>

                {section.list && section.list.length > 0 && (
                  <div className="flex flex-wrap gap-3 mb-4">
                    {section.list.map((item, i) => (
                      <span key={i} className="bg-ice-50 text-slate-700 font-sans text-sm px-4 py-2 rounded-full border border-slate-100">
                        {item}
                      </span>
                    ))}
                  </div>
                )}

                {section.conclusion && (
                  <div className="bg-ice-50 rounded-2xl p-6 border border-slate-100/50 flex items-start gap-4 mt-auto">
                    <CheckCircle2 className="w-6 h-6 text-navy-600 flex-shrink-0 mt-0.5" />
                    <p className="font-sans text-slate-700 text-sm leading-relaxed font-medium">
                      {section.conclusion}
                    </p>
                  </div>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertPlanning;
