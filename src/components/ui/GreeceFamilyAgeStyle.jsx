import React, { useState } from 'react';
import FadeIn from './FadeIn';
import { Baby, Users, Smile, Activity, Compass, Heart, Sparkles, Star } from 'lucide-react';

const GreeceFamilyAgeStyle = ({ ageGroups = [], familyTypes = [] }) => {
  const [activeAgeTab, setActiveAgeTab] = useState(0);
  const [activeTypeTab, setActiveTypeTab] = useState(0);

  // Map tab index to related icon
  const ageIcons = [Baby, Smile, Users];
  const typeIcons = [Users, Activity, Compass];

  return (
    <section className="py-24 bg-white border-b border-slate-100 text-left">
      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <span className="text-xs font-sans font-bold tracking-[0.25em] text-[#c9a15c] uppercase block mb-3">
            AGE-APPROPRIATE MATCHING
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-light text-navy-950">
            Matching Greece to Your Family Dynamics
          </h2>
          <div className="w-16 h-0.5 bg-[#c9a15c] mx-auto mt-6 mb-4"></div>
          <p className="font-sans text-slate-600 font-light leading-relaxed">
            The ideal island changes depending on your children's ages and your overall family vacation style. Select a tab below to explore.
          </p>
        </div>

        {/* Tabbed Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Column Left: By Age Groups */}
          <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8 shadow-sm">
            <FadeIn>
              <div className="flex items-center gap-3 mb-6 pb-3 border-b border-slate-200/50">
                <div className="w-9 h-9 rounded-lg bg-navy-950 text-[#c9a15c] flex items-center justify-center shadow-sm">
                  <Baby className="w-5 h-5" />
                </div>
                <h3 className="font-display text-lg font-bold text-navy-950">
                  By Children's Age
                </h3>
              </div>
              
              {/* Tabs */}
              <div className="flex flex-wrap gap-2 mb-8">
                {ageGroups.map((group, idx) => {
                  const Icon = ageIcons[idx % ageIcons.length];
                  return (
                    <button
                      key={idx}
                      onClick={() => setActiveAgeTab(idx)}
                      className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-sans font-bold uppercase tracking-wider transition-all duration-300 ${
                        activeAgeTab === idx 
                          ? 'bg-navy-950 text-white shadow-md' 
                          : 'bg-white border border-slate-200 text-slate-500 hover:text-navy-950'
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                      <span>{group.age.split(' (')[0]}</span>
                    </button>
                  );
                })}
              </div>

              {/* Tab Content (Concise) */}
              <div className="space-y-4 min-h-[160px]">
                <h4 className="font-display text-base font-bold text-navy-950 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#c9a15c]" />
                  <span>{ageGroups[activeAgeTab]?.age}</span>
                </h4>
                <div className="space-y-3 font-sans text-xs text-slate-600 font-light leading-relaxed">
                  {ageGroups[activeAgeTab]?.paragraphs.slice(0, 2).map((p, pIdx) => (
                    <p key={pIdx}>{p}</p>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Column Right: By Family Types */}
          <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8 shadow-sm">
            <FadeIn>
              <div className="flex items-center gap-3 mb-6 pb-3 border-b border-slate-200/50">
                <div className="w-9 h-9 rounded-lg bg-navy-950 text-[#c9a15c] flex items-center justify-center shadow-sm">
                  <Users className="w-5 h-5" />
                </div>
                <h3 className="font-display text-lg font-bold text-navy-950">
                  By Family Travel Style
                </h3>
              </div>
              
              {/* Tabs */}
              <div className="flex flex-wrap gap-2 mb-8">
                {familyTypes.map((group, idx) => {
                  const Icon = typeIcons[idx % typeIcons.length];
                  return (
                    <button
                      key={idx}
                      onClick={() => setActiveTypeTab(idx)}
                      className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-sans font-bold uppercase tracking-wider transition-all duration-300 ${
                        activeTypeTab === idx 
                          ? 'bg-navy-950 text-white shadow-md' 
                          : 'bg-white border border-slate-200 text-slate-500 hover:text-navy-950'
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                      <span>{group.type.split(' (')[0]}</span>
                    </button>
                  );
                })}
              </div>

              {/* Tab Content (Concise) */}
              <div className="space-y-4 min-h-[160px]">
                <h4 className="font-display text-base font-bold text-[#c9a15c] flex items-center gap-2">
                  <Star className="w-4 h-4 text-[#c9a15c]" />
                  <span>{familyTypes[activeTypeTab]?.type}</span>
                </h4>
                <div className="space-y-3 font-sans text-xs text-slate-600 font-light leading-relaxed">
                  {familyTypes[activeTypeTab]?.paragraphs.slice(0, 2).map((p, pIdx) => (
                    <p key={pIdx}>{p}</p>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>

        </div>

      </div>
    </section>
  );
};

export default GreeceFamilyAgeStyle;
