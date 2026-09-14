import React, { useState } from 'react';
import FadeIn from './FadeIn';

const RvoSideBySide = ({ data, image }) => {
  const [activeTab, setActiveTab] = useState('living');

  if (!data) return null;

  // Map category names to their respective tabs
  const tabMapping = {
    living: [
      'Luxury positioning',
      'Ship atmosphere',
      'Accommodation',
      'Standard accommodation space',
      'Private balconies',
      'Butler service',
      'Ship intimacy',
      'Casual sophistication'
    ],
    dining: [
      'Culinary identity',
      'Specialty dining variety',
      'Culinary enrichment',
      'Specialty restaurants',
      'Premium beverages'
    ],
    service: [
      'Shore excursions',
      'Wi-Fi',
      'Gratuities',
      'Laundry',
      'Service personalization',
      'Entertainment',
      'Wellness'
    ],
    value: [
      'New-ship appeal',
      'Destination focus',
      'All-inclusive simplicity',
      'Value for heavy users of inclusions',
      'Value for selective spenders'
    ]
  };

  // Group rows based on the tab mapping
  const filterRowsByTab = (tabKey) => {
    const categories = tabMapping[tabKey] || [];
    return data.table?.rows?.filter((row) => categories.includes(row[0])) || [];
  };

  const tabs = [
    { id: 'living', label: 'Living & Space' },
    { id: 'dining', label: 'Dining & Wine' },
    { id: 'service', label: 'Shore & Service' },
    { id: 'value', label: 'Value & Fleet' }
  ];

  const currentRows = filterRowsByTab(activeTab);

  return (
    <section id="comparison-matrix" className="w-full py-20 lg:py-28 bg-ice-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-white to-transparent rounded-bl-full opacity-60 pointer-events-none"></div>

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <FadeIn className="mb-12 text-center">
          <span className="font-sans text-[10px] font-bold tracking-[0.3em] uppercase text-ts-gold block mb-3">COMPARISON MATRIX</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950 leading-tight">
            {data.title}
          </h2>
          <div className="w-20 h-1 bg-ts-gold mx-auto mt-5"></div>
          <p className="font-sans text-sm text-slate-650 mt-6 max-w-2xl mx-auto leading-relaxed">
            {data.intro}
          </p>
        </FadeIn>

        {/* Tab Selection Navigation */}
        <FadeIn className="mb-10">
          <div className="flex flex-wrap justify-center gap-2 border-b border-slate-200 pb-3">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2.5 rounded-full font-sans text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-navy-950 text-white shadow-md'
                    : 'bg-white/60 hover:bg-white text-slate-600 hover:text-navy-950 border border-slate-200/60'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Layout Grid: Content Grid on Left, Image Card on Right */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          
          {/* Grid of Category Comparison Cards */}
          <div className="md:col-span-7 lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {currentRows.map((row, idx) => (
                <FadeIn
                  key={idx}
                  delay={idx * 0.05}
                  className="bg-white rounded-3xl p-6 border border-slate-200/70 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Category Title */}
                    <h4 className="font-display text-base font-bold text-navy-950 mb-4 pb-2 border-b border-slate-100">
                      {row[0]}
                    </h4>

                    {/* Left/Right Comparisons */}
                    <div className="space-y-3 mb-6">
                      <div>
                        <span className="font-sans text-[8px] font-bold tracking-widest text-navy-800 uppercase block mb-0.5">REGENT SEVEN SEAS</span>
                        <p className="font-sans text-xs text-slate-600 font-light">{row[1]}</p>
                      </div>
                      <div className="border-t border-slate-50 pt-2">
                        <span className="font-sans text-[8px] font-bold tracking-widest text-ts-gold uppercase block mb-0.5">OCEANIA CRUISES</span>
                        <p className="font-sans text-xs text-slate-650 font-light">{row[2]}</p>
                      </div>
                    </div>
                  </div>

                  {/* Advantage Badge */}
                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                    <span className="font-sans text-[9px] text-slate-400 font-bold uppercase tracking-wider">Advantage</span>
                    <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wide ${
                      row[3] === 'Regent' ? 'bg-navy-950 text-white' :
                      row[3] === 'Oceania' ? 'bg-ts-gold text-navy-950 font-semibold' :
                      'bg-slate-100 text-slate-600'
                    }`}>
                      {row[3]}
                    </span>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* Featured Visual Image (Desktop & Tablet) */}
          {image && (
            <div className="hidden md:block md:col-span-5 lg:col-span-4 relative min-h-[450px]">
              <FadeIn direction="left" className="h-full rounded-3xl overflow-hidden shadow-xl border border-slate-200/80 absolute inset-0">
                <img
                  src={image}
                  alt="Luxury Cruise Vessel in Port"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white z-10">
                  <span className="font-sans text-[10px] text-ts-gold font-bold uppercase tracking-widest block mb-2">EXPERIENCE SHAPING</span>
                  <p className="font-serif text-sm text-slate-200 leading-relaxed font-light">
                    Two exceptional cruise brands. Two very different approaches to luxury. Select each category tab to compare their differences.
                  </p>
                </div>
              </FadeIn>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};

export default RvoSideBySide;
