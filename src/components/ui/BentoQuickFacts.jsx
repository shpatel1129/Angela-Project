import React from 'react';
import FadeIn from './FadeIn';

const BentoQuickFacts = ({ title, items, paragraphs }) => {
  if (!items || items.length === 0) return null;

  // Specific interlocking grid config for exactly 10 items
  const bentoConfigs = [
    { span: "md:col-span-2 lg:col-span-2", bg: "bg-navy-900 text-white border-none", labelColor: "text-ice-200/70" }, // 0
    { span: "md:col-span-2 lg:col-span-2", bg: "bg-ice-50 text-navy-900 border-none", labelColor: "text-gold-600" }, // 1
    { span: "md:col-span-1 lg:col-span-1", bg: "bg-white border border-navy-100 text-navy-900", labelColor: "text-navy-400" }, // 2
    { span: "md:col-span-1 lg:col-span-1", bg: "bg-white border border-navy-100 text-navy-900", labelColor: "text-navy-400" }, // 3
    { span: "md:col-span-2 lg:col-span-2 lg:row-span-2", bg: "bg-gold-50 text-navy-900 border-none", labelColor: "text-gold-700", isLarge: true }, // 4 (Focal Point)
    { span: "md:col-span-1 lg:col-span-1", bg: "bg-white border border-navy-100 text-navy-900", labelColor: "text-navy-400" }, // 5
    { span: "md:col-span-1 lg:col-span-1", bg: "bg-white border border-navy-100 text-navy-900", labelColor: "text-navy-400" }, // 6
    { span: "md:col-span-2 lg:col-span-2", bg: "bg-ice-50 text-navy-900 border-none", labelColor: "text-gold-600" }, // 7
    { span: "md:col-span-2 lg:col-span-2", bg: "bg-white border border-navy-100 text-navy-900", labelColor: "text-navy-400" }, // 8
    { span: "md:col-span-2 lg:col-span-4", bg: "bg-navy-950 text-white border-none", labelColor: "text-gold-500" }, // 9
  ];

  const getFallbackConfig = (idx, total) => {
    // If it's the last item and uneven, span full
    if (idx === total - 1 && total % 2 !== 0) {
      return { span: "md:col-span-2 lg:col-span-4", bg: "bg-navy-950 text-white", labelColor: "text-gold-500" };
    }
    return { span: "md:col-span-1 lg:col-span-1", bg: "bg-white border border-navy-100 text-navy-900", labelColor: "text-navy-400" };
  };

  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        
        {title && (
          <FadeIn direction="up">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-navy-950 mb-8 text-center">
              {title}
            </h2>
            {paragraphs && paragraphs.length > 0 && (
              <div className="max-w-4xl mx-auto text-center mb-16 space-y-6">
                {paragraphs.map((p, i) => (
                  <p key={i} className="font-sans text-lg md:text-xl text-slate-600 leading-relaxed font-light">{p}</p>
                ))}
              </div>
            )}
          </FadeIn>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-[minmax(120px,auto)]">
          {items.map((item, idx) => {
            const config = items.length === 10 ? bentoConfigs[idx] : getFallbackConfig(idx, items.length);
            
            return (
              <FadeIn 
                key={idx} 
                delay={idx * 0.05}
                className={`rounded-2xl overflow-hidden p-6 md:p-8 flex flex-col justify-center transition-transform duration-300 hover:scale-[1.02] ${config.span} ${config.bg}`}
              >
                <span className={`font-sans text-[10px] md:text-xs uppercase tracking-widest font-semibold mb-3 ${config.labelColor}`}>
                  {item.title || item.label}
                </span>
                <span className={`font-display leading-snug ${config.isLarge ? 'text-3xl md:text-4xl lg:text-5xl' : 'text-2xl md:text-3xl'}`}>
                  {item.description || item.value}
                </span>
              </FadeIn>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default BentoQuickFacts;
