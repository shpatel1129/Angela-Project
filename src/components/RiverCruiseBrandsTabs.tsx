import React, { useState } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

// Viking brand images (from VikingCruises + VikingOceanCruises assets)
import viking1 from "@/assets/VikingCruises/viking-river-cruise-exterior-st-louis.jpg";
import viking2 from "@/assets/VikingCruises/viking-expedition-ship-antarctica-cruise.jpg";
import viking3 from "@/assets/VikingCruises/viking-infinity-pool-ocean-view.jpg";
import viking4 from "@/assets/VikingCruises/flam-norway-fjord-cruise.jpg";
import viking5 from "@/assets/VikingCruises/viking-explorers-lounge-panoramic-views.jpg";
import viking6 from "@/assets/VikingCruises/viking-aquavit-terrace-ocean-dining.jpg";
import viking7 from "@/assets/VikingOceanCruises/flam-norway-fjord-cruise.jpg";
import viking8 from "@/assets/VikingOceanCruises/Viking-Multiple-Dining.jpg";
import viking9 from "@/assets/VikingOceanCruises/viking-Dubrovnik-Croatia.jpg";
import viking10 from "@/assets/VikingOceanCruises/viking-Halong-Bay-Vietnam.jpg";

// Riverside brand images (from RiversideLuxuryCruises assets)
import riverside1 from "@/assets/RiversideLuxuryCruises/Riversideimage1.webp";
import riverside2 from "@/assets/RiversideLuxuryCruises/Riversideimage2.webp";
import riverside3 from "@/assets/RiversideLuxuryCruises/Riversideimage3.webp";
import riverside4 from "@/assets/RiversideLuxuryCruises/Riversideimage4.webp";
import riverside5 from "@/assets/RiversideLuxuryCruises/Riversideimage5.webp";

// AmaWaterways brand images (from RiversidevsAmaWaterways assets)
import amaBellaExt from "@/assets/RiversidevsAmaWaterways/AmaBella_Exterior.webp";
import amaBellaLounge from "@/assets/RiversidevsAmaWaterways/AmaBella_MainLounge.webp";
import amaBellaBalcony from "@/assets/RiversidevsAmaWaterways/AmaBella_Twin-Balcony.webp";
import amaCelloBar from "@/assets/RiversidevsAmaWaterways/AmaCello_Bar_Lounge.webp";
import amaCelloChef from "@/assets/RiversidevsAmaWaterways/AmaCello_ChefTable_Dining.webp";
import amaLiliaExt from "@/assets/RiversidevsAmaWaterways/AmaLilia_Exterior.webp";
import amaWater from "@/assets/RiversidevsAmaWaterways/Amawater.webp";
import frAvignon from "@/assets/RiversidevsAmaWaterways/FR_Avignon_AmaCello.webp";
import magEurope from "@/assets/RiversidevsAmaWaterways/Magnificent Europe.webp";

// Scenic brand images
import scenicRiver from "@/assets/EntryPremiumBrands/scenic_river.png";
import scenic2 from "@/assets/ScenicvsFourSeasonsYachts/Hero1.jpg";
import scenic3 from "@/assets/ScenicvsFourSeasonsYachts/Hero2.jpg";
import scenic4 from "@/assets/ScenicvsFourSeasonsYachts/GalleryImage1.jpg";
import scenic5 from "@/assets/ScenicvsFourSeasonsYachts/GalleryImage2.jpg";

// Tauck brand image
import tauckImg from "@/assets/VikingVsTauck/Exterior_2026-04-13_19-02-41.jpg";
import tauck2 from "@/assets/VikingVsTauck/Budapest, Hungary_2026-04-13_18-46-22.jpg";
import tauck3 from "@/assets/VikingVsTauck/Cologne, Germany_2026-04-13_18-46-31.jpg";

// Uniworld brand image
import uniworldImg from "@/assets/VikingVsUniworld/Exterior_2026-04-13_19-02-40.jpg";
import uniworld2 from "@/assets/VikingVsUniworld/Amsterdam, The Netherlands_2026-04-13_18-45-31.jpg";
import uniworld3 from "@/assets/VikingVsUniworld/French Balcony Stateroom_2026-04-13_18-46-43.jpg";

// Image pools per brand — each card cycles through its brand's pool
const brandImagePools: Record<string, string[]> = {
  "viking cruises":       [viking1, viking2, viking3, viking4, viking5, viking6, viking7, viking8, viking9, viking10],
  "riverside cruises":    [riverside1, riverside2, riverside3, riverside4, riverside5],
  "amawaterways":         [amaBellaExt, amaBellaLounge, amaBellaBalcony, amaCelloBar, amaCelloChef, amaLiliaExt, amaWater, frAvignon, magEurope],
  "scenic cruises":       [scenicRiver, scenic2, scenic3, scenic4, scenic5],
  "tauck cruises":        [tauckImg, tauck2, tauck3],
  "uniworld cruises":     [uniworldImg, uniworld2, uniworld3],
};

// Tab categories
const cruiseCategories = [
  { id: "all", label: "all" },
  { id: "viking cruises", label: "viking cruises" },
  { id: "riverside cruises", label: "riverside cruises" },
  { id: "amawaterways", label: "amawaterways" },
  { id: "scenic cruises", label: "scenic cruises" },
  { id: "tauck cruises", label: "tauck cruises" },
  { id: "uniworld cruises", label: "uniworld cruises" },
];

// The brand overview cards shown in the "all" tab
const brandOverviewCards = [
  { label: "viking cruises", path: "/viking-river-cruises", image: brandImagePools["viking cruises"][0] },
  { label: "riverside cruises", path: "/riverside-luxury-cruises", image: brandImagePools["riverside cruises"][0] },
  { label: "amawaterways", path: "/viking-vs-amawaterways", image: brandImagePools["amawaterways"][0] },
  { label: "scenic cruises", path: "/viking-vs-scenic", image: brandImagePools["scenic cruises"][0] },
  { label: "tauck cruises", path: "/viking-vs-tauck", image: brandImagePools["tauck cruises"][0] },
  { label: "uniworld cruises", path: "/viking-vs-uniworld", image: brandImagePools["uniworld cruises"][0] },
];

// Per-brand guide pages
const brandGuideCards: Record<string, { label: string; path: string }[]> = {
  "viking cruises": [
    { path: "/viking-river-cruises", label: "Viking River Cruises Overview" },
    { path: "/viking-rhine-river-cruises", label: "Viking Rhine River Cruises" },
    { path: "/viking-danube-river-cruises", label: "Viking Danube River Cruises" },
    { path: "/viking-christmas-market-cruises", label: "Viking Christmas Market Cruises" },
    { path: "/viking-vs-amawaterways", label: "Viking vs AmaWaterways" },
    { path: "/viking-vs-tauck", label: "Viking vs Tauck" },
    { path: "/viking-vs-scenic", label: "Viking vs Scenic" },
    { path: "/viking-vs-uniworld", label: "Viking vs Uniworld" },
    { path: "/riverside-vs-viking-river-cruises", label: "Riverside vs Viking River Cruises" },
    { path: "/is-viking-worth-it", label: "Is Viking Worth It?" },
    { path: "/viking-cruise-reviews", label: "Viking Cruise Reviews" },
    { path: "/viking-cruise-cost-guide", label: "Viking Cruise Cost Guide" },
    { path: "/what-is-included-on-viking-cruises", label: "What Is Included on Viking Cruises" },
    { path: "/who-should-sail-viking", label: "Who Should Sail Viking" },
    { path: "/who-should-not-sail-viking", label: "Who Should Not Sail Viking" },
    { path: "/viking-cruise-resource-center", label: "Viking Cruise Resource Center" },
  ],

  "riverside cruises": [
    { path: "/riverside-luxury-cruises", label: "Riverside Luxury Cruises Overview" },
    { path: "/riverside-vs-viking-river-cruises", label: "Riverside vs Viking River Cruises" },
    { path: "/riverside-vs-amawaterways", label: "Riverside vs AmaWaterways" },
  ],

  "amawaterways": [
    { path: "/viking-vs-amawaterways", label: "Viking vs AmaWaterways Comparison" },
    { path: "/riverside-vs-amawaterways", label: "Riverside vs AmaWaterways Comparison" },
  ],

  "scenic cruises": [
    { path: "/viking-vs-scenic", label: "Viking vs Scenic Comparison" },
    { path: "/scenic-eclipse-discovery", label: "Scenic Eclipse Discovery Overview" },
    { path: "/scenic-antarctica-cruise", label: "Scenic Antarctica Cruise" },
    { path: "/scenic-vs-silversea-antarctica", label: "Scenic vs Silversea Antarctica" },
    { path: "/scenic-vs-four-seasons-yachts", label: "Scenic vs Four Seasons Yachts" },
  ],

  "tauck cruises": [
    { path: "/viking-vs-tauck", label: "Viking vs Tauck Comparison" },
  ],

  "uniworld cruises": [
    { path: "/viking-vs-uniworld", label: "Viking vs Uniworld Comparison" },
  ],
};

export const RiverCruiseBrandsTabs = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [showAll, setShowAll] = useState(false);

  const handleTabChange = (id: string) => {
    setActiveTab(id);
    setShowAll(false);
  };

  const pool = brandImagePools[activeTab] ?? [];
  const allDisplayCards: { label: string; path: string; image: string }[] =
    activeTab === "all"
      ? brandOverviewCards
      : (brandGuideCards[activeTab] ?? []).map((c, i) => ({
          label: c.label,
          path: c.path,
          image: pool[i % pool.length],
        }));

  const displayCards = showAll ? allDisplayCards : allDisplayCards.slice(0, 6);
  const hasMore = allDisplayCards.length > 6;

  return (
    <section className="py-16 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 w-full">
      <div className="container max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light mb-4 text-brand-navy dark:text-white leading-tight">
            Explore River Cruise Brands
          </h2>
          <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 font-light max-w-2xl mx-auto">
            Stay informed with our comprehensive guides, reviews, and comparisons of the world's finest river cruise collections.
          </p>
        </div>

        {/* Tabs row */}
        <div className="w-full overflow-x-auto pb-4 no-scrollbar mb-10 border-b border-slate-100 dark:border-slate-800">
          <div className="flex justify-start md:justify-center min-w-max gap-6 md:gap-8 px-2">
            {cruiseCategories.map((category) => {
              const isActive = activeTab === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => handleTabChange(category.id)}
                  className={cn(
                    "relative pb-3 text-sm md:text-base font-medium tracking-wide transition-all duration-300 focus:outline-none whitespace-nowrap capitalize",
                    isActive
                      ? "text-brand-navy dark:text-white font-semibold"
                      : "text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300"
                  )}
                >
                  {category.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-brand-navy dark:bg-brand-light-blue" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {displayCards.map((card, index) => (
            <Link
              key={`${card.path}-${index}`}
              to={card.path}
              className="group relative h-64 md:h-72 w-full rounded-2xl overflow-hidden shadow-lg border border-slate-200/40 dark:border-slate-800/20 block cursor-pointer"
            >
              {/* Background Image */}
              <img
                src={card.image}
                alt={card.label}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.06]"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/10 to-transparent group-hover:from-slate-900/70 transition-all duration-300" />

              {/* Label Badge */}
              <div className="absolute bottom-5 left-4 right-4 text-center z-10">
                <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-white/20 dark:border-slate-800/20 py-2.5 px-4 rounded-xl shadow-lg transition-colors group-hover:bg-white/90 dark:group-hover:bg-slate-900/90 max-w-[90%] mx-auto">
                  <span className="text-slate-800 dark:text-slate-200 font-medium text-xs sm:text-sm tracking-wide line-clamp-2 capitalize">
                    {card.label}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Read More button */}
        {!showAll && hasMore && (
          <div className="flex justify-center mt-10">
            <button
              onClick={() => setShowAll(true)}
              className="border-2 border-brand-navy dark:border-white text-brand-navy dark:text-white px-10 py-3 tracking-[0.15em] uppercase font-medium text-sm hover:bg-brand-navy hover:text-white dark:hover:bg-white dark:hover:text-brand-navy transition-all duration-300"
            >
              Read More
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default RiverCruiseBrandsTabs;
