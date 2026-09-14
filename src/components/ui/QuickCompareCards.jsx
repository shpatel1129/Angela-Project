import React from 'react';

const QuickCompareCards = ({ ama, avalon, cards }) => {
  const left = ama || (cards && cards.length > 0 ? {
    style: cards[0].features[0],
    name: cards[0].title,
    description: cards[0].bestFor
  } : null);
  
  const right = avalon || (cards && cards.length > 1 ? {
    style: cards[1].features[0],
    name: cards[1].title,
    description: cards[1].bestFor
  } : null);

  if (!left || !right) return null;

  return (
    <section className="w-full max-w-[1280px] mx-auto px-6 -mt-16 relative z-20 mb-24">
      <div className="bg-white rounded-lg shadow-xl border border-border-light overflow-hidden flex flex-col md:flex-row">
        
        {/* Left Card */}
        <div className="flex-1 p-10 md:p-14 border-b md:border-b-0 md:border-r border-border-light relative overflow-hidden group">
          <div className="absolute inset-0 bg-ice-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />
          <div className="relative z-10">
            <span className="block font-sans text-sm font-bold tracking-widest text-navy-800 uppercase mb-3">
              {left.style}
            </span>
            <h2 className="font-display text-4xl text-navy-950 mb-4">
              {left.name}
            </h2>
            <p className="font-sans text-slate-600 leading-relaxed">
              {left.description}
            </p>
          </div>
        </div>

        {/* VS Divider */}
        <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-navy-950 text-white rounded-full items-center justify-center font-display text-xl z-30 shadow-lg border-4 border-white">
          VS
        </div>

        {/* Right Card */}
        <div className="flex-1 p-10 md:p-14 bg-navy-950 text-white relative overflow-hidden group">
          <div className="absolute inset-0 bg-navy-900 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />
          <div className="relative z-10">
            <span className="block font-sans text-sm font-bold tracking-widest text-slate-300 uppercase mb-3">
              {right.style}
            </span>
            <h2 className="font-display text-4xl text-white mb-4">
              {right.name}
            </h2>
            <p className="font-sans text-slate-300 leading-relaxed">
              {right.description}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default QuickCompareCards;
