import React from 'react';
import FadeIn from './FadeIn';
import { 
  Bed, Wifi, Sparkles, Utensils, Coffee, Map, User, Bike, Award, Music, Heart, Ship, Check
} from 'lucide-react';
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const IconMap = {
  Bed, Wifi, Sparkles, Utensils, Coffee, Map, User, Bike, Award, Music, Heart, Ship
};

// Precise styling for each of the 13 items in a tightly locked 4-column asymmetrical grid
const gridStyles = [
  // ROW 1 & 2
  // 0: Accommodations (Hero Image, spans 2 cols, 2 rows)
  { span: "md:col-span-2 md:row-span-2", bg: "bg-navy-900 text-white", imgRef: 0, padding: "p-8 md:p-12 flex flex-col justify-end min-h-[400px]" },
  // 1: Dining (Spans 1 col, 1 row)
  { span: "md:col-span-1 md:row-span-1", bg: "bg-gold-50 text-navy-900", imgRef: null, padding: "p-8" },
  // 2: Beverages (Tall pillar, spans 1 col, 2 rows)
  { span: "md:col-span-1 md:row-span-2", bg: "bg-navy-800 text-white", imgRef: null, padding: "p-8 flex flex-col justify-between" },
  // 3: Excursions (Spans 1 col, 1 row, sits under Item 1)
  { span: "md:col-span-1 md:row-span-1", bg: "bg-white text-navy-900 shadow-sm border border-navy-50", imgRef: null, padding: "p-8" },
  
  // ROW 3
  // 4: Wi-Fi
  { span: "md:col-span-1 md:row-span-1", bg: "bg-ice-50 text-navy-900", imgRef: null, padding: "p-8" },
  // 5: Cruise Director (Wide, spans 2 cols)
  { span: "md:col-span-2 md:row-span-1", bg: "bg-cream-50 text-navy-900", imgRef: null, padding: "p-8" },
  // 6: Local Guides
  { span: "md:col-span-1 md:row-span-1", bg: "bg-white text-navy-900 shadow-sm border border-navy-50", imgRef: null, padding: "p-8" },

  // ROW 4 & 5
  // 7: Fitness (Tall pillar, spans 1 col, 2 rows)
  { span: "md:col-span-1 md:row-span-2", bg: "bg-navy-50 text-navy-900", imgRef: null, padding: "p-8 flex flex-col justify-between" },
  // 8: Bicycles/Exploration (Hero Image 2, spans 2 cols, 2 rows)
  { span: "md:col-span-2 md:row-span-2", bg: "bg-navy-900 text-white", imgRef: 2, padding: "p-8 md:p-12 flex flex-col justify-center text-center relative" },
  // 9: Entertainment
  { span: "md:col-span-1 md:row-span-1", bg: "bg-white text-navy-900 shadow-sm border border-navy-50", imgRef: null, padding: "p-8" },
  // 10: Port Charges (sits under Entertainment)
  { span: "md:col-span-1 md:row-span-1", bg: "bg-gold-100 text-navy-900", imgRef: null, padding: "p-8" },

  // ROW 6
  // 11: Housekeeping (Wide, spans 2 cols)
  { span: "md:col-span-2 md:row-span-1", bg: "bg-navy-800 text-white", imgRef: null, padding: "p-8" },
  // 12: Personalized Service (Wide, spans 2 cols)
  { span: "md:col-span-2 md:row-span-1", bg: "bg-cream-100 text-navy-900", imgRef: null, padding: "p-8" },
];

const CreativeInclusionsGrid = ({ title, subtitle, items, images }) => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <h2 className="font-display text-4xl md:text-5xl text-navy-900 mb-6 leading-tight">
              {title}
            </h2>
            {subtitle && (
              <p className="font-sans text-xl text-slate-600">
                {subtitle}
              </p>
            )}
          </FadeIn>
        </div>

        {/* 4-Column Asymmetrical Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-auto">
          {items.map((item, idx) => {
            const Icon = IconMap[item.icon] || Sparkles;
            const style = gridStyles[idx] || gridStyles[1];

            const isTall = style.span.includes("row-span-2") && !style.span.includes("col-span-2");
            const isWide = style.span.includes("col-span-2") && !style.span.includes("row-span-2");
            const isHero = style.span.includes("col-span-2") && style.span.includes("row-span-2");
            const hasImage = style.imgRef !== null && images[style.imgRef];

            return (
              <FadeIn 
                key={idx} 
                delay={idx * 0.05} 
                className={cn(
                  style.span,
                  style.bg,
                  style.padding,
                  // Uniform, elegant soft corners on everything
                  "rounded-[2rem] relative overflow-hidden group hover:-translate-y-1 hover:shadow-xl transition-all duration-500 ease-out border border-transparent hover:border-white/20"
                )}
              >
                {/* Large Editorial Number */}
                <div className={cn(
                  "absolute -bottom-4 -right-4 font-display text-8xl md:text-[10rem] leading-none select-none pointer-events-none transition-transform duration-700 ease-out group-hover:scale-110",
                  style.bg.includes("bg-navy") ? "text-white opacity-[0.03]" : "text-navy-900 opacity-[0.03]"
                )}>
                  {item.id}
                </div>

                {/* Subtle Glass Glow on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-10 rounded-[2rem]"></div>

                {/* Background Image Handling */}
                {hasImage && (
                  <>
                    <div className="absolute inset-0 w-full h-full z-0 group-hover:scale-105 transition-transform duration-[2s] ease-out">
                      <img src={images[style.imgRef]} alt={item.title} className="w-full h-full object-cover" />
                    </div>
                    {/* Dark gradient overlay for text legibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-900/50 to-transparent z-0"></div>
                  </>
                )}
                
                {/* For Item 8 (Bicycles/Destinations) which is a center-text glassmorphism hero */}
                {idx === 8 && hasImage && (
                  <div className="absolute inset-0 bg-navy-900/30 z-0"></div>
                )}

                {/* Content Layouts */}
                <div className={cn(
                  "relative z-10 w-full h-full flex",
                  isHero ? "flex-col justify-end" : 
                  isTall ? "flex-col gap-6" : 
                  isWide ? "flex-col md:flex-row md:items-center gap-6" :
                  "flex-col gap-4"
                )}>
                  
                  {/* Icon Container */}
                  <div className={cn(
                    "flex-shrink-0 flex items-center justify-center rounded-2xl",
                    isHero ? "mb-6 w-16 h-16 bg-white/20 backdrop-blur-md text-white" :
                    isTall ? "w-14 h-14 bg-black/5" :
                    isWide ? "w-14 h-14 bg-black/5" :
                    "w-12 h-12 bg-black/5"
                  )}>
                    <Icon size={isHero ? 28 : 24} className="opacity-90" />
                  </div>

                  {/* Text Content */}
                  <div className={cn(
                    isHero && idx === 8 ? "bg-white/10 backdrop-blur-md p-8 rounded-3xl text-left border border-white/20" : "",
                    "flex flex-col h-full"
                  )}>
                    <h3 className={cn(
                      "font-display mb-2",
                      isHero ? "text-3xl md:text-4xl leading-tight" : 
                      isWide ? "text-xl md:text-2xl" : 
                      "text-xl"
                    )}>
                      {item.title}
                    </h3>
                    <p className={cn(
                      "font-sans opacity-80 leading-relaxed",
                      isHero ? "text-base md:text-lg max-w-md" : "text-sm"
                    )}>
                      {item.description}
                    </p>

                    {/* Structured Highlights */}
                    {item.highlights && item.highlights.length > 0 && (
                      <ul className={cn(
                        "mt-4 space-y-2",
                        isHero && idx === 8 ? "mt-6" : ""
                      )}>
                        {item.highlights.map((highlight, hIdx) => (
                          <li key={hIdx} className="flex items-start gap-2">
                            <Check className="w-4 h-4 mt-0.5 opacity-70 shrink-0" />
                            <span className={cn(
                              "font-sans opacity-90 leading-snug",
                              isHero ? "text-sm md:text-base" : "text-xs md:text-sm"
                            )}>
                              {highlight}
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}
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

export default CreativeInclusionsGrid;
