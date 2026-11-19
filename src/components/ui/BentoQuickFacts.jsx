import React from 'react';
import FadeIn from './FadeIn';

const BentoQuickFacts = ({ title, items, paragraphs }) => {
  if (!items || items.length === 0) return null;

  // 10-Item Interlocking Bento Config (for 10 items)
  const bentoConfigs10 = [
    { span: "col-span-1 md:col-span-2 lg:col-span-2", bg: "bg-navy-900 text-white border-none", labelColor: "text-ice-200/70" }, // 0: Top Left Wide
    { span: "col-span-1 md:col-span-2 lg:col-span-2", bg: "bg-ice-50 text-navy-900 border-none", labelColor: "text-gold-600" }, // 1: Top Right Wide
    { span: "col-span-1 md:col-span-1 lg:col-span-1", bg: "bg-white border border-navy-100 text-navy-900", labelColor: "text-navy-400" }, // 2: Row 2 Card 1
    { span: "col-span-1 md:col-span-1 lg:col-span-1", bg: "bg-white border border-navy-100 text-navy-900", labelColor: "text-navy-400" }, // 3: Row 2 Card 2
    { span: "col-span-1 md:col-span-1 lg:col-span-1", bg: "bg-gold-50 text-navy-900 border-none", labelColor: "text-gold-700" }, // 4: Row 2 Card 3 (Gold Accent)
    { span: "col-span-1 md:col-span-1 lg:col-span-1", bg: "bg-white border border-navy-100 text-navy-900", labelColor: "text-navy-400" }, // 5: Row 2 Card 4
    { span: "col-span-1 md:col-span-2 lg:col-span-2", bg: "bg-ice-50 text-navy-900 border-none", labelColor: "text-gold-600" }, // 6: Row 3 Left Wide
    { span: "col-span-1 md:col-span-2 lg:col-span-2", bg: "bg-white border border-navy-100 text-navy-900", labelColor: "text-navy-400" }, // 7: Row 3 Right Wide
    { span: "col-span-1 md:col-span-2 lg:col-span-2", bg: "bg-white border border-navy-100 text-navy-900", labelColor: "text-navy-400" }, // 8: Row 4 Left Wide
    { span: "col-span-1 md:col-span-2 lg:col-span-2", bg: "bg-navy-950 text-white border-none", labelColor: "text-gold-500" }, // 9: Row 4 Right Wide
  ];

  // 6-Item Executive Bento Config (2 Wide Lead Cards + 4 Supporting Cards)
  const bentoConfigs6 = [
    { span: "col-span-1 md:col-span-2 lg:col-span-2", bg: "bg-navy-900 text-white border-none", labelColor: "text-ice-200/80" }, // 0: Top Left Wide
    { span: "col-span-1 md:col-span-2 lg:col-span-2", bg: "bg-ice-50 text-navy-950 border border-ice-200/60", labelColor: "text-ts-gold" }, // 1: Top Right Wide
    { span: "col-span-1 md:col-span-1 lg:col-span-1", bg: "bg-white border border-slate-200/70 text-navy-950", labelColor: "text-slate-400" }, // 2: Card 1
    { span: "col-span-1 md:col-span-1 lg:col-span-1", bg: "bg-white border border-slate-200/70 text-navy-950", labelColor: "text-slate-400" }, // 3: Card 2
    { span: "col-span-1 md:col-span-1 lg:col-span-1", bg: "bg-[#fbf7f0] border border-[#e8dfcf] text-navy-950", labelColor: "text-ts-gold font-bold" }, // 4: Gold Accent
    { span: "col-span-1 md:col-span-1 lg:col-span-1", bg: "bg-white border border-slate-200/70 text-navy-950", labelColor: "text-slate-400" }, // 5: Card 4
  ];

  const getCardConfig = (idx, total) => {
    if (total === 10) return bentoConfigs10[idx] || bentoConfigs10[0];
    if (total === 6) return bentoConfigs6[idx] || bentoConfigs6[0];
    
    // Fallback for other counts
    if (idx === total - 1 && total % 2 !== 0) {
      return { span: "col-span-1 md:col-span-2 lg:col-span-4", bg: "bg-navy-950 text-white", labelColor: "text-ts-gold" };
    }
    return { span: "col-span-1 md:col-span-1 lg:col-span-1", bg: "bg-white border border-slate-200 text-navy-950", labelColor: "text-slate-400" };
  };

  const renderContent = (text) => {
    if (!text) return null;
    const len = text.length;

    // Short stat / metric (e.g., "3 Nights", "95% Satisfaction", "$450 / night")
    if (len <= 25) {
      return (
        <span className="font-display text-2xl sm:text-3xl font-semibold leading-tight break-words">
          {text}
        </span>
      );
    }

    // Medium phrase / key summary
    if (len <= 65) {
      return (
        <span className="font-display text-lg sm:text-xl font-medium leading-snug break-words">
          {text}
        </span>
      );
    }

    // Long explanatory editorial sentence / paragraph
    return (
      <p className="font-serif italic text-base sm:text-lg font-normal leading-relaxed break-words opacity-95">
        {text}
      </p>
    );
  };

  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        
        {title && (
          <FadeIn direction="up">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-navy-950 mb-6 text-center">
              {title}
            </h2>
            <div className="w-12 h-0.5 bg-ts-gold mx-auto mb-8"></div>
            {paragraphs && paragraphs.length > 0 && (
              <div className="max-w-4xl mx-auto text-center mb-14 space-y-4">
                {paragraphs.map((p, i) => (
                  <p key={i} className="font-sans text-base sm:text-lg text-slate-600 leading-relaxed font-normal">{p}</p>
                ))}
              </div>
            )}
          </FadeIn>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {items.map((item, idx) => {
            const config = getCardConfig(idx, items.length);
            const mainText = item.value || item.description || item.text;
            
            return (
              <FadeIn 
                key={idx} 
                delay={idx * 0.04}
                className={`rounded-2xl p-6 sm:p-7 flex flex-col justify-start transition-all duration-300 hover:shadow-lg relative overflow-hidden ${config.span} ${config.bg}`}
              >
                <span className={`font-sans text-[11px] uppercase tracking-widest font-bold mb-3 ${config.labelColor}`}>
                  {item.title || item.label}
                </span>

                <div className="mt-1">
                  {renderContent(mainText)}
                </div>

                {item.value && item.description && item.value !== item.description && (
                  <p className="font-sans text-sm leading-relaxed opacity-85 mt-3 pt-3 border-t border-current/10">
                    {item.description}
                  </p>
                )}
              </FadeIn>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default BentoQuickFacts;
