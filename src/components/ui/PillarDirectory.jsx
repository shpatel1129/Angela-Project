import React from 'react';
import { Link } from 'react-router-dom';
import FadeIn from './FadeIn';

const PillarDirectory = ({ brandName, items }) => {
  // Let's dynamically categorize the items based on their labels and paths
  const shipsKeywords = ["ship", "fleet", "yacht", "cabin", "suite", "seeker", "breeze", "legend", "pride", "surf", "spirit", "balcony", "balconies"];
  const destKeywords = ["greece", "tahiti", "mediterranean", "italy", "croatia", "french riviera", "caribbean", "alaska", "japan", "costa rica", "canary", "northern europe", "canada", "destination", "time to", "crossing"];
  const compKeywords = ["vs", "compare"];
  
  const shipGuides = [];
  const destGuides = [];
  const compGuides = [];
  const planGuides = [];

  items.forEach(item => {
    const labelLower = item.label.toLowerCase();
    
    if (compKeywords.some(kw => labelLower.includes(kw))) {
      compGuides.push(item);
    } else if (shipsKeywords.some(kw => labelLower.includes(kw))) {
      shipGuides.push(item);
    } else if (destKeywords.some(kw => labelLower.includes(kw))) {
      destGuides.push(item);
    } else {
      planGuides.push(item);
    }
  });

  const categories = [
    { title: "Ship & Cabin Guides", items: shipGuides },
    { title: "Destinations & Seasons", items: destGuides },
    { title: "Luxury Brand Comparisons", items: compGuides },
    { title: "Planning & Travel Advice", items: planGuides }
  ];

  return (
    <section className="w-full bg-slate-50 py-24 border-b border-slate-200">
      <div className="max-w-[1280px] mx-auto px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <FadeIn>
            <span className="text-xs uppercase tracking-[0.25em] text-gold-500 font-bold mb-4 block">
              Resource Library
            </span>
            <h2 className="font-display text-3xl md:text-5xl text-navy-950 mb-6 leading-tight">
              Explore All {brandName} Guides
            </h2>
            <p className="font-sans text-slate-500 font-light leading-relaxed">
              Dive deeper into our complete collection of expert-written articles, comparisons, and planning tools for {brandName}.
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {categories.map((cat, idx) => (
              <div key={idx} className="bg-white border border-slate-200 rounded-3xl p-8 hover:shadow-lg transition-shadow duration-300">
                <h3 className="font-display text-sm text-navy-950 font-bold uppercase tracking-wider mb-6 pb-3 border-b border-slate-100">
                  {cat.title}
                </h3>
                <ul className="space-y-3.5">
                  {cat.items.map((link, linkIdx) => (
                    <li key={linkIdx} className="flex items-start gap-2">
                      <span className="text-gold-500 font-medium select-none mt-0.5">•</span>
                      <Link
                        to={link.href}
                        className="font-sans text-xs text-slate-600 hover:text-gold-500 transition-colors duration-300 leading-normal"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                  {cat.items.length === 0 && (
                    <li className="font-sans text-xs text-slate-400 italic">No articles found in this category.</li>
                  )}
                </ul>
              </div>
            ))}
          </div>
        </FadeIn>

      </div>
    </section>
  );
};

export default PillarDirectory;
