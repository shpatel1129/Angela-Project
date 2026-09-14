import React from 'react';
import FadeIn from './FadeIn';
import { 
  Home, 
  Utensils, 
  Map, 
  Compass, 
  ShieldAlert, 
  PlaneTakeoff, 
  DollarSign 
} from 'lucide-react';

const GreeceCostDetails = ({ costDetailsData }) => {
  const { heading, description, categories = [] } = costDetailsData || {};

  // Custom icons corresponding to categories
  const categoryIcons = [
    Home,
    Utensils,
    Map,
    Compass,
    ShieldAlert,
    PlaneTakeoff
  ];

  return (
    <section id="cost-details" className="py-24 bg-white border-b border-slate-200">
      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-sans font-bold tracking-[0.2em] text-[#c9a15c] uppercase mb-4 block">
            DETAILED EXPENSES
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-light text-navy-950 mb-6">
            {heading || "What Will You Actually Pay For in Greece?"}
          </h2>
          <p className="font-sans text-slate-600 font-light leading-relaxed">
            {description}
          </p>
        </div>

        {/* Connected Vertical Timeline of Expense Categories */}
        <div className="max-w-4xl mx-auto relative pl-8 border-l border-slate-100 space-y-12">
          {categories.map((cat, idx) => {
            const IconComponent = categoryIcons[idx % categoryIcons.length];
            return (
              <FadeIn key={idx}>
                <div className="relative group">
                  {/* Connected circle badge */}
                  <div className="absolute -left-[57px] top-0 w-12 h-12 rounded-full bg-white border border-slate-150 shadow-md flex items-center justify-center text-navy-950 group-hover:border-[#c9a15c] group-hover:text-[#c9a15c] transition-all duration-300">
                    <IconComponent size={18} />
                  </div>

                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
                    <h3 className="font-display text-2xl font-light text-navy-950">
                      {cat.title}
                    </h3>
                    <span className="self-start text-xs font-sans font-bold uppercase tracking-wider text-[#c9a15c] bg-[#c9a15c]/5 px-2.5 py-1 rounded-md border border-[#c9a15c]/10">
                      {cat.range}
                    </span>
                  </div>

                  <p className="font-sans text-sm text-slate-500 font-light leading-relaxed">
                    {cat.details}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default GreeceCostDetails;
