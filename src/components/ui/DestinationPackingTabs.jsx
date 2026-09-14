import React, { useState } from 'react';
import FadeIn from './FadeIn';
import { MapPin, Sun, Wind, Umbrella, CheckCircle2 } from 'lucide-react';
import MasterImage from './MasterImage';

const DestinationPackingTabs = ({ data, images }) => {
  const [activeTab, setActiveTab] = useState(data?.tabs?.[0]?.id || '');

  if (!data || !data.tabs || data.tabs.length === 0) return null;

  const activeContent = data.tabs.find(tab => tab.id === activeTab) || data.tabs[0];
  const activeImage = images[activeContent.id];

  return (
    <section className="py-24 bg-ice-50 relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn direction="up">
            <h2 className="font-display text-4xl md:text-5xl text-navy-950 mb-6 leading-tight">
              {data.title}
            </h2>
            <p className="font-sans text-xl text-slate-600">
              {data.description}
            </p>
          </FadeIn>
        </div>

        {/* Interactive Tabs */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          
          {/* Left Column: Tab Controls & Information */}
          <div className="lg:w-1/3 flex flex-col">
            <FadeIn direction="right">
              {/* Tab Navigation */}
              <div className="flex lg:flex-col overflow-x-auto lg:overflow-x-visible gap-2 mb-10 pb-4 lg:pb-0 scrollbar-hide">
                {data.tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`whitespace-nowrap px-6 py-4 rounded-xl font-display text-xl transition-all duration-300 text-left flex items-center justify-between group ${
                      activeTab === tab.id 
                        ? 'bg-navy-950 text-white shadow-xl transform lg:translate-x-4' 
                        : 'bg-white text-navy-900 hover:bg-slate-100 hover:text-accent-600'
                    }`}
                  >
                    <span>{tab.label}</span>
                    <MapPin className={`w-5 h-5 transition-transform duration-300 ${
                      activeTab === tab.id ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0'
                    }`} />
                  </button>
                ))}
              </div>
              
              {/* Dynamic Information Box */}
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-ice-100 relative">
                {/* Decorative pin */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-accent-500 rounded-full flex items-center justify-center shadow-lg border-4 border-ice-50">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                
                <div className="mb-6">
                  <h4 className="font-sans text-xs uppercase tracking-widest text-slate-500 mb-2 font-bold">The Vibe</h4>
                  <p className="font-display text-2xl text-navy-950">{activeContent.vibe}</p>
                </div>
                
                <div className="mb-8">
                  <h4 className="font-sans text-xs uppercase tracking-widest text-slate-500 mb-2 font-bold">Climate</h4>
                  <div className="flex items-start gap-3">
                    <Sun className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5" />
                    <p className="font-sans text-slate-600">{activeContent.climate}</p>
                  </div>
                </div>
                
                <div className="border-t border-slate-100 pt-6">
                  <h4 className="font-sans text-xs uppercase tracking-widest text-accent-600 mb-4 font-bold">Must-Pack Items</h4>
                  <ul className="space-y-3">
                    {activeContent.mustPack.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-navy-400 flex-shrink-0" />
                        <span className="font-sans text-sm text-navy-900 font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right Column: Visual Showcase */}
          <div className="lg:w-2/3">
            <FadeIn direction="left" delay={0.2} className="h-full">
              <div className="w-full h-[500px] lg:h-full min-h-[500px] rounded-3xl overflow-hidden shadow-2xl relative">
                {activeImage ? (
                  <MasterImage 
                    src={activeImage} 
                    alt={activeContent.label} 
                    className="absolute inset-0 w-full h-full object-cover transition-all duration-1000 transform hover:scale-105"
                  />
                ) : (
                  <div className="absolute inset-0 bg-slate-300"></div>
                )}
                
                {/* Overlay details */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8">
                  <h3 className="font-display text-4xl md:text-5xl text-white mb-2">{activeContent.label}</h3>
                  <p className="font-sans text-ice-100 text-lg uppercase tracking-widest">{activeContent.vibe}</p>
                </div>
              </div>
            </FadeIn>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default DestinationPackingTabs;
