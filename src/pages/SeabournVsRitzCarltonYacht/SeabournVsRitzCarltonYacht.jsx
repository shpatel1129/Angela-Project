import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Sun, Anchor, Mountain, Compass, Ship, Check, Award, Utensils, Sparkles, Shirt, Wine, Music, Activity, Waves, MapPin } from "lucide-react";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela3.jpeg";

// Distinct UI Components (Ensuring zero repetition of identical layouts across consecutive sections)
import ComparisonHero from "../../components/ui/ComparisonHero";
import EditorialIntroSection from "../../components/ui/EditorialIntroSection";
import ComparisonTable from "../../components/ui/ComparisonTable";
import OceanVsExpeditionCoreShowcase from "../../components/ui/OceanVsExpeditionCoreShowcase";
import ShipPhilosophyFaceoff from "../../components/ui/ShipPhilosophyFaceoff";
import GenericChecklistCards from "../../components/ui/GenericChecklistCards";
import CostValueAnalysisCards from "../../components/ui/CostValueAnalysisCards";
import ExpertAuthorityChecklist from "../../components/ui/ExpertAuthorityChecklist";
import ExpertCredentials from "../../components/ui/ExpertCredentials";
import FAQAccordion from "../../components/ui/FAQAccordion";
import ConclusionSection from "../../components/ui/ConclusionSection";
import CenterCTA from "../../components/ui/CenterCTA";
import FadeIn from "../../components/ui/FadeIn";

// Data Source
import data from "./data.json";

const SeabournVsRitzCarltonYacht = () => {
  const [activeProfileIndex, setActiveProfileIndex] = useState(0);

  // ── 1. Core Foundations & Scale (OceanVsExpeditionCoreShowcase) ──
  const coreShowcaseItems = [
    {
      title: data.coreDifference.title,
      paragraphs: data.coreDifference.paragraphs,
      listTitle: "Core Architectural Attributes:",
      listItems: [
        ...data.coreDifference.seabournAttributes.slice(0, 3),
        ...data.coreDifference.ritzCarltonAttributes.slice(0, 3)
      ],
      footnote: "Neither product needs to be reduced to simply 'luxury' versus 'ultra-luxury.' They are two different interpretations of luxury at sea."
    },
    {
      title: data.shipSize.title,
      paragraphs: [
        ...data.shipSize.paragraphs,
        data.isMoreLuxurious.paragraphs[data.isMoreLuxurious.paragraphs.length - 1]
      ],
      listTitle: "Why Ship Size Matters (Affects the Entire Vacation):",
      listItems: data.shipSize.whySizeMatters.factors,
      footnote: `${data.shipSize.whySizeMatters.verdict}`
    }
  ];

  // ── 2. Suites & Service Philosophy (ShipPhilosophyFaceoff) ──
  const suitesAndServiceFaceoff = {
    title: "Seabourn vs. Ritz-Carlton Yacht Collection: Suites & Service",
    regent: {
      badge: "All-Suite Ocean-Front",
      title: data.suites.seabourn.title,
      description: `${data.suites.seabourn.paragraphs.join(" ")} ${data.service.seabourn.paragraphs.join(" ")}`,
      features: data.suites.seabourn.priorities
    },
    viking: {
      badge: "Private Terraces & Suite Ambassador",
      title: data.suites.ritzCarlton.title,
      description: `${data.suites.ritzCarlton.paragraphs.join(" ")} ${data.service.ritzCarlton.paragraphs.join(" ")}`,
      features: data.suites.ritzCarlton.priorities
    }
  };

  // ── 7. GenericChecklistCards Data: Traveler Demographic Personas ──
  const travelerPersonaCardsData = [
    {
      title: data.travelerPersonas.personas[0].title,
      badge: data.travelerPersonas.personas[0].category,
      items: [
        `Seabourn Values: ${data.travelerPersonas.personas[0].seabournValues.join(", ")}`,
        `Ritz-Carlton Values: ${data.travelerPersonas.personas[0].ritzCarltonValues.join(", ")}`,
        "Verdict: Both work exceptionally well; choose between classic small-ship cruise luxury vs. modern hotel yachting."
      ]
    },
    {
      title: data.travelerPersonas.personas[1].title,
      badge: data.travelerPersonas.personas[1].category,
      items: [
        data.travelerPersonas.personas[1].description,
        ...data.travelerPersonas.personas[1].points
      ]
    },
    {
      title: data.travelerPersonas.personas[2].title,
      badge: data.travelerPersonas.personas[2].category,
      items: [
        data.travelerPersonas.personas[2].description,
        `Key Evaluation Factors: ${data.travelerPersonas.personas[2].evaluationFactors.join(", ")}`
      ]
    },
    {
      title: data.travelerPersonas.personas[3].title,
      badge: data.travelerPersonas.personas[3].category,
      items: [
        data.travelerPersonas.personas[3].description,
        ...data.travelerPersonas.personas[3].considerations
      ]
    }
  ];

  // ── 8. Cost & Total Value Breakdown ──
  const costFactorsIncluded = data.costAndValue.factors.slice(0, 3);
  const costFactorsExtras = data.costAndValue.factors.slice(3);

  // ── 9. Schema Graph ──
  const schemaJson = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "TravelAgency"],
        "@id": "https://www.tripsandships.com/#organization",
        "name": "Trips & Ships Luxury Travel",
        "url": "https://www.tripsandships.com/",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.tripsandships.com/logo.png"
        },
        "foundingDate": "1995",
        "founder": {
          "@id": "https://www.tripsandships.com/#angela-hughes"
        },
        "areaServed": {
          "@type": "Country",
          "name": "United States"
        },
        "knowsAbout": [
          "Seabourn Cruises",
          "Ritz-Carlton Yacht Collection",
          "Ultra-Luxury Cruises",
          "Luxury Yacht Cruises",
          "Small Ship Cruises",
          "All-Inclusive Cruises",
          "Luxury Cruise Suites",
          "Luxury Yacht Suites",
          "Luxury Cruise Travel",
          "Luxury Travel Planning",
          "Luxury Cruise Dining",
          "Luxury Cruise Excursions",
          "Expedition Cruises",
          "Alaska Cruises",
          "Caribbean Cruises",
          "Mediterranean Cruises",
          "Antarctica Cruises"
        ]
      },
      {
        "@type": "Person",
        "@id": "https://www.tripsandships.com/#angela-hughes",
        "name": "Angela Hughes",
        "jobTitle": "CEO and Luxury Travel Expert",
        "url": "https://www.tripsandships.com/about-angela-hughes",
        "worksFor": {
          "@id": "https://www.tripsandships.com/#organization"
        },
        "founder": {
          "@type": "Organization",
          "name": "Luxury Travel University",
          "url": "https://luxurytraveluniversity.com/"
        },
        "knowsAbout": [
          "Luxury Cruises",
          "Seabourn Cruises",
          "Ritz-Carlton Yacht Collection",
          "Luxury Yacht Cruises",
          "Ultra-Luxury Travel",
          "Small Ship Cruises",
          "Expedition Cruises",
          "Luxury Cruise Suites",
          "Luxury Travel Planning",
          "Alaska Cruises",
          "Caribbean Cruises",
          "Mediterranean Cruises",
          "Antarctica Cruises"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://www.tripsandships.com/#website",
        "url": "https://www.tripsandships.com/",
        "name": "Trips & Ships Luxury Travel",
        "publisher": {
          "@id": "https://www.tripsandships.com/#organization"
        },
        "inLanguage": "en-US"
      },
      {
        "@type": "WebPage",
        "@id": `https://www.tripsandships.com${data.meta.suggestedUrl}#webpage`,
        "url": `https://www.tripsandships.com${data.meta.suggestedUrl}`,
        "name": data.meta.seoTitle,
        "headline": data.meta.seoTitle,
        "description": data.meta.metaDescription,
        "isPartOf": {
          "@id": "https://www.tripsandships.com/#website"
        },
        "about": {
          "@type": "Thing",
          "name": data.meta.primaryKeyword
        },
        "author": {
          "@id": "https://www.tripsandships.com/#angela-hughes"
        },
        "publisher": {
          "@id": "https://www.tripsandships.com/#organization"
        },
        "mainEntity": {
          "@id": `https://www.tripsandships.com${data.meta.suggestedUrl}#article`
        },
        "breadcrumb": {
          "@id": `https://www.tripsandships.com${data.meta.suggestedUrl}#breadcrumb`
        },
        "inLanguage": "en-US"
      },
      {
        "@type": "Article",
        "@id": `https://www.tripsandships.com${data.meta.suggestedUrl}#article`,
        "headline": data.meta.seoTitle,
        "description": data.meta.metaDescription,
        "author": {
          "@id": "https://www.tripsandships.com/#angela-hughes"
        },
        "publisher": {
          "@id": "https://www.tripsandships.com/#organization"
        },
        "mainEntityOfPage": {
          "@id": `https://www.tripsandships.com${data.meta.suggestedUrl}#webpage`
        },
        "articleSection": "Seabourn Cruises",
        "keywords": data.meta.secondaryKeywords,
        "inLanguage": "en-US"
      },
      {
        "@type": "BreadcrumbList",
        "@id": `https://www.tripsandships.com${data.meta.suggestedUrl}#breadcrumb`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.tripsandships.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Seabourn Cruises",
            "item": "https://www.tripsandships.com/seabourn-cruises/"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": data.meta.metaTitle,
            "item": `https://www.tripsandships.com${data.meta.suggestedUrl}`
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": `https://www.tripsandships.com${data.meta.suggestedUrl}#faq`,
        "url": `https://www.tripsandships.com${data.meta.suggestedUrl}`,
        "mainEntity": data.faqs.map((faq) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      }
    ]
  };

  return (
    <div className="bg-slate-50 min-h-screen text-slate-900">
      {/* ── SEO Metadata & Schema Injection ─────────────────────────── */}
      <Helmet>
        <title>{data.meta.seoTitle}</title>
        <meta name="title" content={data.meta.metaTitle} />
        <meta name="description" content={data.meta.metaDescription} />
        <meta name="keywords" content={data.meta.secondaryKeywords.join(", ")} />
        <link rel="canonical" href={`https://www.tripsandships.com${data.meta.suggestedUrl}`} />
        <script type="application/ld+json">{JSON.stringify(schemaJson)}</script>
      </Helmet>

      {/* Navigation */}
      <Nav />

      {/* ── 1. Hero Section (ComparisonHero) ────────────────────────── */}
      <ComparisonHero
        badge={data.hero.badge}
        title={data.hero.title}
        subtitle={data.hero.subtitle}
        description={data.hero.leadText}
        heroImage={data.hero.heroImage}
        stats={data.hero.stats}
      />

      {/* ── 2. Editorial Introduction (EditorialIntroSection) ──────── */}
      <EditorialIntroSection
        title={data.intro.title}
        paragraphs={data.intro.paragraphs}
      />

      {/* ── 3. Quick Answer Comparison Table (ComparisonTable) ─────── */}
      <div className="bg-slate-50 py-12">
        <ComparisonTable data={data.quickAnswerTable} />
      </div>

      {/* ── 4. Core Foundations & Ship Scale (OceanVsExpeditionCoreShowcase) ── */}
      <OceanVsExpeditionCoreShowcase
        title="What Is the Difference & Scale Comparison?"
        subtitle="PURPOSE-BUILT SMALL SHIP LUXURY VS. HOTEL-INSPIRED PRIVATE YACHTING"
        items={coreShowcaseItems}
      />

      {/* ── 5. Suites & Service Architecture (ShipPhilosophyFaceoff) ── */}
      <ShipPhilosophyFaceoff data={suitesAndServiceFaceoff} />

      {/* ── 6. Dining Comparison (With Commented Out Images) ── */}
      {data.diningDetailed && (
        <section className="py-24 bg-white border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <FadeIn className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-gold-600 bg-gold-50 px-4 py-1.5 rounded-full border border-gold-200">
                CULINARY PHILOSOPHY & VENUES
              </span>
              <h2 className="text-3xl md:text-5xl font-serif text-slate-900 mt-4 mb-4">
                {data.diningDetailed.title}
              </h2>
              <div className="w-16 h-0.5 bg-gold-400 mx-auto mb-4"></div>
              <p className="text-slate-600 text-base md:text-lg font-light leading-relaxed">
                {data.diningDetailed.lead}
              </p>
            </FadeIn>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-10">
              {/* Seabourn Dining Card */}
              <FadeIn delay={0.1} className="h-full">
                <div className="bg-slate-50 rounded-3xl overflow-hidden border border-slate-200 shadow-sm flex flex-col h-full hover:shadow-md transition-shadow">
                  {/* ========================================================================= */}
                  {/* IMAGE COMMENTED OUT AS REQUESTED - UNCOMMENT WHEN READY TO DISPLAY IMAGES */}
                  {/* ========================================================================= */}
                  {/* 
                  <div className="relative h-64 w-full overflow-hidden">
                    <img 
                      src={data.diningDetailed.seabourn.image} 
                      alt={data.diningDetailed.seabourn.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 to-transparent"></div>
                  </div>
                  */}

                  {/* Image Placeholder Frame */}
                  <div className="w-full h-52 bg-gradient-to-br from-slate-900 via-navy-950 to-slate-800 flex flex-col items-center justify-center p-6 text-center text-white relative">
                    <div className="w-12 h-12 rounded-full bg-white/10 text-gold-400 flex items-center justify-center mb-3 shadow-md border border-white/10">
                      <Utensils className="w-6 h-6" />
                    </div>
                    <h4 className="font-serif text-xl text-white font-medium">Seabourn Dining Experiences</h4>
                    <span className="text-[10px] uppercase tracking-widest text-white/60 font-semibold bg-white/10 px-2.5 py-0.5 rounded-full border border-white/20 mt-1">
                      Image Slot Ready (Commented Out)
                    </span>
                  </div>

                  <div className="p-8 md:p-10 flex-grow flex flex-col justify-between">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-gold-600 block mb-2">
                        Complimentary Dining Architecture
                      </span>
                      <h3 className="text-2xl font-serif text-slate-900 mb-3">
                        {data.diningDetailed.seabourn.title}
                      </h3>
                      <p className="text-sm text-slate-700 font-medium mb-4">
                        {data.diningDetailed.seabourn.statement}
                      </p>
                      
                      <div className="mb-6">
                        <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                          {data.diningDetailed.seabourn.accessTitle}
                        </p>
                        <div className="grid grid-cols-2 gap-2.5">
                          {data.diningDetailed.seabourn.venues.map((venue, idx) => (
                            <div key={idx} className="flex items-center gap-2 bg-white p-2.5 rounded-xl border border-slate-200/80">
                              <Check className="w-3.5 h-3.5 text-gold-600 flex-shrink-0" />
                              <span className="text-xs sm:text-sm text-slate-800 font-medium">{venue}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-2.5 pt-4 border-t border-slate-200">
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                          {data.diningDetailed.seabourn.drinksNote}
                        </p>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                          {data.diningDetailed.seabourn.seatingNote}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>

              {/* Ritz-Carlton Dining Card */}
              <FadeIn delay={0.2} className="h-full">
                <div className="bg-slate-50 rounded-3xl overflow-hidden border border-slate-200 shadow-sm flex flex-col h-full hover:shadow-md transition-shadow">
                  {/* ========================================================================= */}
                  {/* IMAGE COMMENTED OUT AS REQUESTED - UNCOMMENT WHEN READY TO DISPLAY IMAGES */}
                  {/* ========================================================================= */}
                  {/* 
                  <div className="relative h-64 w-full overflow-hidden">
                    <img 
                      src={data.diningDetailed.ritzCarlton.image} 
                      alt={data.diningDetailed.ritzCarlton.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 to-transparent"></div>
                  </div>
                  */}

                  {/* Image Placeholder Frame */}
                  <div className="w-full h-52 bg-gradient-to-br from-slate-900 via-navy-950 to-slate-800 flex flex-col items-center justify-center p-6 text-center text-white relative">
                    <div className="w-12 h-12 rounded-full bg-white/10 text-gold-400 flex items-center justify-center mb-3 shadow-md border border-white/10">
                      <Utensils className="w-6 h-6" />
                    </div>
                    <h4 className="font-serif text-xl text-white font-medium">Ritz-Carlton Yacht Dining</h4>
                    <span className="text-[10px] uppercase tracking-widest text-white/60 font-semibold bg-white/10 px-2.5 py-0.5 rounded-full border border-white/20 mt-1">
                      Image Slot Ready (Commented Out)
                    </span>
                  </div>

                  <div className="p-8 md:p-10 flex-grow flex flex-col justify-between">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-navy-800 block mb-2">
                        Gourmet Yacht Culinary Venues
                      </span>
                      <h3 className="text-2xl font-serif text-slate-900 mb-3">
                        {data.diningDetailed.ritzCarlton.title}
                      </h3>
                      <p className="text-sm text-slate-700 font-medium mb-3">
                        {data.diningDetailed.ritzCarlton.statement}
                      </p>
                      <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed mb-6 bg-white p-3.5 rounded-xl border border-slate-200">
                        {data.diningDetailed.ritzCarlton.pricingNote}
                      </p>

                      <div className="mb-6">
                        <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                          {data.diningDetailed.ritzCarlton.conceptTitle}
                        </p>
                        <div className="space-y-2">
                          {data.diningDetailed.ritzCarlton.conceptPoints.map((point, idx) => (
                            <div key={idx} className="flex items-center gap-2.5 bg-white p-2.5 rounded-xl border border-slate-200/80">
                              <Check className="w-3.5 h-3.5 text-navy-600 flex-shrink-0" />
                              <span className="text-xs sm:text-sm text-slate-800 font-medium">{point}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Key Difference Callout */}
            <FadeIn delay={0.3}>
              <div className="bg-navy-950 text-white rounded-2xl p-6 md:p-8 border border-white/10 shadow-lg">
                <span className="text-xs uppercase tracking-widest text-gold-400 font-bold block mb-2">
                  {data.diningDetailed.keyDifference.title}
                </span>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                  <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                    <span className="text-xs font-bold text-gold-400 block mb-1">Seabourn</span>
                    <p className="text-xs sm:text-sm text-ice-100 font-light leading-relaxed">
                      {data.diningDetailed.keyDifference.seabourn}
                    </p>
                  </div>
                  <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                    <span className="text-xs font-bold text-gold-400 block mb-1">Ritz-Carlton Yacht Collection</span>
                    <p className="text-xs sm:text-sm text-ice-100 font-light leading-relaxed">
                      {data.diningDetailed.keyDifference.ritzCarlton}
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
      )}

      {/* ── 7. Drinks Comparison (With Commented Out Images) ── */}
      {data.drinksDetailed && (
        <section className="py-24 bg-slate-50 border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <FadeIn className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-gold-600 bg-gold-50 px-4 py-1.5 rounded-full border border-gold-200">
                BEVERAGE INCLUSIONS & IN-SUITE BARS
              </span>
              <h2 className="text-3xl md:text-5xl font-serif text-slate-900 mt-4 mb-4">
                {data.drinksDetailed.title}
              </h2>
              <div className="w-16 h-0.5 bg-gold-400 mx-auto mb-4"></div>
              <p className="text-slate-600 text-base md:text-lg font-light leading-relaxed">
                {data.drinksDetailed.lead}
              </p>
            </FadeIn>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-10">
              {/* Seabourn Drinks Card */}
              <FadeIn delay={0.1} className="h-full">
                <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm flex flex-col h-full hover:shadow-md transition-shadow">
                  {/* ========================================================================= */}
                  {/* IMAGE COMMENTED OUT AS REQUESTED - UNCOMMENT WHEN READY TO DISPLAY IMAGES */}
                  {/* ========================================================================= */}
                  {/* 
                  <div className="relative h-60 w-full overflow-hidden">
                    <img 
                      src={data.drinksDetailed.seabourn.image} 
                      alt={data.drinksDetailed.seabourn.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 to-transparent"></div>
                  </div>
                  */}

                  {/* Image Placeholder Frame */}
                  <div className="w-full h-52 bg-gradient-to-br from-slate-900 via-navy-950 to-slate-800 flex flex-col items-center justify-center p-6 text-center text-white relative">
                    <div className="w-12 h-12 rounded-full bg-white/10 text-gold-400 flex items-center justify-center mb-3 shadow-md border border-white/10">
                      <Wine className="w-6 h-6" />
                    </div>
                    <h4 className="font-serif text-xl text-white font-medium">Seabourn Premium Beverages</h4>
                    <span className="text-[10px] uppercase tracking-widest text-white/60 font-semibold bg-white/10 px-2.5 py-0.5 rounded-full border border-white/20 mt-1">
                      Image Slot Ready (Commented Out)
                    </span>
                  </div>

                  <div className="p-8 md:p-10 flex-grow flex flex-col justify-between">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-gold-600 block mb-2">
                        All-Inclusive Spirits & Wines
                      </span>
                      <h3 className="text-2xl font-serif text-slate-900 mb-4">
                        {data.drinksDetailed.seabourn.title}
                      </h3>
                      
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                        {data.drinksDetailed.seabourn.offerTitle}
                      </p>
                      <div className="grid grid-cols-2 gap-2.5 mb-6">
                        {data.drinksDetailed.seabourn.offerings.map((item, idx) => (
                          <div key={idx} className="flex items-center gap-2 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                            <Check className="w-3.5 h-3.5 text-gold-600 flex-shrink-0" />
                            <span className="text-xs sm:text-sm text-slate-800 font-medium">{item}</span>
                          </div>
                        ))}
                      </div>

                      <div className="bg-gold-50/70 p-4 rounded-2xl border border-gold-200/80">
                        <p className="text-xs sm:text-sm text-gold-950 leading-relaxed font-medium">
                          {data.drinksDetailed.seabourn.inSuiteNote}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>

              {/* Ritz-Carlton Drinks Card */}
              <FadeIn delay={0.2} className="h-full">
                <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm flex flex-col h-full hover:shadow-md transition-shadow">
                  {/* ========================================================================= */}
                  {/* IMAGE COMMENTED OUT AS REQUESTED - UNCOMMENT WHEN READY TO DISPLAY IMAGES */}
                  {/* ========================================================================= */}
                  {/* 
                  <div className="relative h-60 w-full overflow-hidden">
                    <img 
                      src={data.drinksDetailed.ritzCarlton.image} 
                      alt={data.drinksDetailed.ritzCarlton.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 to-transparent"></div>
                  </div>
                  */}

                  {/* Image Placeholder Frame */}
                  <div className="w-full h-52 bg-gradient-to-br from-slate-900 via-navy-950 to-slate-800 flex flex-col items-center justify-center p-6 text-center text-white relative">
                    <div className="w-12 h-12 rounded-full bg-white/10 text-gold-400 flex items-center justify-center mb-3 shadow-md border border-white/10">
                      <Wine className="w-6 h-6" />
                    </div>
                    <h4 className="font-serif text-xl text-white font-medium">Ritz-Carlton Yacht Beverage Program</h4>
                    <span className="text-[10px] uppercase tracking-widest text-white/60 font-semibold bg-white/10 px-2.5 py-0.5 rounded-full border border-white/20 mt-1">
                      Image Slot Ready (Commented Out)
                    </span>
                  </div>

                  <div className="p-8 md:p-10 flex-grow flex flex-col justify-between">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-navy-800 block mb-2">
                        Yacht-Wide Beverage Inclusion
                      </span>
                      <h3 className="text-2xl font-serif text-slate-900 mb-4">
                        {data.drinksDetailed.ritzCarlton.title}
                      </h3>
                      
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                        {data.drinksDetailed.ritzCarlton.offerTitle}
                      </p>
                      <div className="grid grid-cols-2 gap-2.5 mb-6">
                        {data.drinksDetailed.ritzCarlton.offerings.map((item, idx) => (
                          <div key={idx} className="flex items-center gap-2 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                            <Check className="w-3.5 h-3.5 text-navy-600 flex-shrink-0" />
                            <span className="text-xs sm:text-sm text-slate-800 font-medium">{item}</span>
                          </div>
                        ))}
                      </div>

                      <div className="bg-navy-50/70 p-4 rounded-2xl border border-navy-200/80">
                        <p className="text-xs sm:text-sm text-navy-950 leading-relaxed font-medium">
                          {data.drinksDetailed.ritzCarlton.availabilityNote}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Important Point Callout */}
            <FadeIn delay={0.3}>
              <div className="bg-gradient-to-r from-navy-950 via-slate-900 to-navy-950 text-white rounded-2xl p-6 md:p-8 border border-white/10 text-center shadow-lg max-w-4xl mx-auto">
                <span className="text-xs uppercase tracking-widest text-gold-400 font-bold block mb-2">
                  {data.drinksDetailed.importantPoint.title}
                </span>
                <p className="text-base md:text-lg text-ice-50 font-serif font-light leading-relaxed">
                  "{data.drinksDetailed.importantPoint.verdict}"
                </p>
              </div>
            </FadeIn>
          </div>
        </section>
      )}

      {/* ── 7A. Atmosphere Comparison (With Commented Out Images) ── */}
      {data.atmosphereDetailed && (
        <section className="py-24 bg-white border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <FadeIn className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-gold-600 bg-gold-50 px-4 py-1.5 rounded-full border border-gold-200">
                LIFESTYLE, AMBIENCE & DRESS CODE
              </span>
              <h2 className="text-3xl md:text-5xl font-serif text-slate-900 mt-4 mb-4">
                {data.atmosphereDetailed.title}
              </h2>
              <div className="w-16 h-0.5 bg-gold-400 mx-auto mb-4"></div>
              <p className="text-slate-600 text-base md:text-lg font-light leading-relaxed italic">
                "{data.atmosphereDetailed.lead}"
              </p>
            </FadeIn>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Seabourn Atmosphere Card */}
              <FadeIn delay={0.1} className="h-full">
                <div className="bg-slate-50 rounded-3xl overflow-hidden border border-slate-200 shadow-sm flex flex-col h-full hover:shadow-md transition-shadow">
                  {/* ========================================================================= */}
                  {/* IMAGE COMMENTED OUT AS REQUESTED - UNCOMMENT WHEN READY TO DISPLAY IMAGES */}
                  {/* ========================================================================= */}
                  {/* 
                  <div className="relative h-60 w-full overflow-hidden">
                    <img 
                      src={data.atmosphereDetailed.seabourn.image} 
                      alt={data.atmosphereDetailed.seabourn.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 to-transparent"></div>
                  </div>
                  */}

                  {/* Image Placeholder Frame */}
                  <div className="w-full h-52 bg-gradient-to-br from-slate-900 via-navy-950 to-slate-800 flex flex-col items-center justify-center p-6 text-center text-white relative">
                    <div className="w-12 h-12 rounded-full bg-white/10 text-gold-400 flex items-center justify-center mb-3 shadow-md border border-white/10">
                      <Compass className="w-6 h-6" />
                    </div>
                    <h4 className="font-serif text-xl text-white font-medium">Seabourn Ambiance</h4>
                    <span className="text-[10px] uppercase tracking-widest text-white/60 font-semibold bg-white/10 px-2.5 py-0.5 rounded-full border border-white/20 mt-1">
                      Image Slot Ready (Commented Out)
                    </span>
                  </div>

                  <div className="p-8 md:p-10 flex-grow flex flex-col justify-between">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-gold-600 block mb-2">
                        Relaxed Ultra-Luxury
                      </span>
                      <h3 className="text-2xl font-serif text-slate-900 mb-3">
                        {data.atmosphereDetailed.seabourn.title}
                      </h3>
                      
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                        {data.atmosphereDetailed.seabourn.lead}
                      </p>
                      <div className="space-y-2 mb-6">
                        {data.atmosphereDetailed.seabourn.traits.map((trait, idx) => (
                          <div key={idx} className="flex items-center gap-2.5 bg-white p-3 rounded-xl border border-slate-200/80">
                            <span className="w-2 h-2 rounded-full bg-gold-500 flex-shrink-0"></span>
                            <span className="text-xs sm:text-sm text-slate-800 font-medium">{trait}</span>
                          </div>
                        ))}
                      </div>

                      <div className="bg-gold-50/70 p-4 rounded-2xl border border-gold-200/80">
                        <p className="text-xs sm:text-sm text-gold-950 leading-relaxed font-medium">
                          {data.atmosphereDetailed.seabourn.approach}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>

              {/* Ritz-Carlton Atmosphere Card */}
              <FadeIn delay={0.2} className="h-full">
                <div className="bg-slate-50 rounded-3xl overflow-hidden border border-slate-200 shadow-sm flex flex-col h-full hover:shadow-md transition-shadow">
                  {/* ========================================================================= */}
                  {/* IMAGE COMMENTED OUT AS REQUESTED - UNCOMMENT WHEN READY TO DISPLAY IMAGES */}
                  {/* ========================================================================= */}
                  {/* 
                  <div className="relative h-60 w-full overflow-hidden">
                    <img 
                      src={data.atmosphereDetailed.ritzCarlton.image} 
                      alt={data.atmosphereDetailed.ritzCarlton.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 to-transparent"></div>
                  </div>
                  */}

                  {/* Image Placeholder Frame */}
                  <div className="w-full h-52 bg-gradient-to-br from-slate-900 via-navy-950 to-slate-800 flex flex-col items-center justify-center p-6 text-center text-white relative">
                    <div className="w-12 h-12 rounded-full bg-white/10 text-gold-400 flex items-center justify-center mb-3 shadow-md border border-white/10">
                      <Sparkles className="w-6 h-6" />
                    </div>
                    <h4 className="font-serif text-xl text-white font-medium">Ritz-Carlton Yacht Atmosphere</h4>
                    <span className="text-[10px] uppercase tracking-widest text-white/60 font-semibold bg-white/10 px-2.5 py-0.5 rounded-full border border-white/20 mt-1">
                      Image Slot Ready (Commented Out)
                    </span>
                  </div>

                  <div className="p-8 md:p-10 flex-grow flex flex-col justify-between">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-navy-800 block mb-2">
                        Yacht-Style Sophistication
                      </span>
                      <h3 className="text-2xl font-serif text-slate-900 mb-3">
                        {data.atmosphereDetailed.ritzCarlton.title}
                      </h3>
                      
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                        {data.atmosphereDetailed.ritzCarlton.lead}
                      </p>
                      <div className="space-y-2 mb-6">
                        {data.atmosphereDetailed.ritzCarlton.traits.map((trait, idx) => (
                          <div key={idx} className="flex items-center gap-2.5 bg-white p-3 rounded-xl border border-slate-200/80">
                            <span className="w-2 h-2 rounded-full bg-navy-600 flex-shrink-0"></span>
                            <span className="text-xs sm:text-sm text-slate-800 font-medium">{trait}</span>
                          </div>
                        ))}
                      </div>

                      <div className="bg-navy-50/70 p-4 rounded-2xl border border-navy-200/80">
                        <p className="text-xs sm:text-sm text-navy-950 leading-relaxed font-medium">
                          {data.atmosphereDetailed.ritzCarlton.dressCode}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>
      )}

      {/* ── 8. Entertainment, Activities, Watersports & Shore Excursions (With Commented Out Images) ── */}
      {data.entertainmentAndActivities && (
        <section className="py-24 bg-slate-100 border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <FadeIn className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-gold-600 bg-gold-50 px-4 py-1.5 rounded-full border border-gold-200">
                ONBOARD & IN-PORT LIFESTYLE
              </span>
              <h2 className="text-3xl md:text-5xl font-serif text-slate-900 mt-4 mb-4">
                {data.entertainmentAndActivities.title}
              </h2>
              <div className="w-16 h-0.5 bg-gold-400 mx-auto mb-4"></div>
              <p className="text-slate-600 text-sm md:text-base font-light">
                {data.entertainmentAndActivities.subtitle}
              </p>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
              {/* Card 1: Entertainment */}
              <FadeIn delay={0.1} className="h-full">
                <div className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
                  {/* ========================================================================= */}
                  {/* IMAGE COMMENTED OUT AS REQUESTED - UNCOMMENT WHEN READY TO DISPLAY IMAGES */}
                  {/* ========================================================================= */}
                  {/* 
                  <div className="relative h-60 w-full overflow-hidden">
                    <img 
                      src={data.entertainmentAndActivities.entertainment.image} 
                      alt={data.entertainmentAndActivities.entertainment.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 to-transparent"></div>
                  </div>
                  */}

                  {/* Image Placeholder Frame */}
                  <div className="w-full h-52 bg-gradient-to-br from-slate-900 via-navy-950 to-slate-800 flex flex-col items-center justify-center p-6 text-center text-white relative">
                    <div className="w-12 h-12 rounded-full bg-white/10 text-gold-400 flex items-center justify-center mb-3 shadow-md border border-white/10">
                      <Music className="w-6 h-6" />
                    </div>
                    <h4 className="font-serif text-xl text-white font-medium">Entertainment & Live Music</h4>
                    <span className="text-[10px] uppercase tracking-widest text-white/60 font-semibold bg-white/10 px-2.5 py-0.5 rounded-full border border-white/20 mt-1">
                      Image Slot Ready (Commented Out)
                    </span>
                  </div>

                  <div className="p-8 flex-grow flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl md:text-2xl font-serif text-slate-900 mb-3">
                        {data.entertainmentAndActivities.entertainment.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed mb-6 italic">
                        "{data.entertainmentAndActivities.entertainment.lead}"
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                        {/* Seabourn */}
                        <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                          <span className="text-xs font-bold text-gold-700 uppercase tracking-wider block mb-2">
                            {data.entertainmentAndActivities.entertainment.seabourn.title}
                          </span>
                          <ul className="space-y-1.5">
                            {data.entertainmentAndActivities.entertainment.seabourn.items.map((it, i) => (
                              <li key={i} className="text-xs text-slate-700 flex items-center gap-1.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-gold-500 flex-shrink-0"></span>
                                <span>{it}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Ritz-Carlton */}
                        <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                          <span className="text-xs font-bold text-navy-800 uppercase tracking-wider block mb-2">
                            {data.entertainmentAndActivities.entertainment.ritzCarlton.title}
                          </span>
                          <ul className="space-y-1.5">
                            {data.entertainmentAndActivities.entertainment.ritzCarlton.items.map((it, i) => (
                              <li key={i} className="text-xs text-slate-700 flex items-center gap-1.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-navy-600 flex-shrink-0"></span>
                                <span>{it}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gold-50/80 rounded-xl p-4 border border-gold-200/80">
                      <span className="text-[11px] font-bold uppercase text-gold-800 tracking-wider block mb-1">
                        {data.entertainmentAndActivities.entertainment.difference.title}
                      </span>
                      <p className="text-xs text-slate-700 leading-relaxed">
                        {data.entertainmentAndActivities.entertainment.difference.seabourn} {data.entertainmentAndActivities.entertainment.difference.ritzCarlton}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>

              {/* Card 2: Activities */}
              <FadeIn delay={0.2} className="h-full">
                <div className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
                  {/* ========================================================================= */}
                  {/* IMAGE COMMENTED OUT AS REQUESTED - UNCOMMENT WHEN READY TO DISPLAY IMAGES */}
                  {/* ========================================================================= */}
                  {/* 
                  <div className="relative h-60 w-full overflow-hidden">
                    <img 
                      src={data.entertainmentAndActivities.activities.image} 
                      alt={data.entertainmentAndActivities.activities.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 to-transparent"></div>
                  </div>
                  */}

                  {/* Image Placeholder Frame */}
                  <div className="w-full h-52 bg-gradient-to-br from-slate-900 via-navy-950 to-slate-800 flex flex-col items-center justify-center p-6 text-center text-white relative">
                    <div className="w-12 h-12 rounded-full bg-white/10 text-gold-400 flex items-center justify-center mb-3 shadow-md border border-white/10">
                      <Activity className="w-6 h-6" />
                    </div>
                    <h4 className="font-serif text-xl text-white font-medium">Onboard & Active Pursuits</h4>
                    <span className="text-[10px] uppercase tracking-widest text-white/60 font-semibold bg-white/10 px-2.5 py-0.5 rounded-full border border-white/20 mt-1">
                      Image Slot Ready (Commented Out)
                    </span>
                  </div>

                  <div className="p-8 flex-grow flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl md:text-2xl font-serif text-slate-900 mb-3">
                        {data.entertainmentAndActivities.activities.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed mb-6 italic">
                        "{data.entertainmentAndActivities.activities.lead}"
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                        {/* Seabourn */}
                        <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                          <span className="text-xs font-bold text-gold-700 uppercase tracking-wider block mb-2">
                            {data.entertainmentAndActivities.activities.seabourn.title}
                          </span>
                          <ul className="space-y-1.5">
                            {data.entertainmentAndActivities.activities.seabourn.items.map((it, i) => (
                              <li key={i} className="text-xs text-slate-700 flex items-center gap-1.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-gold-500 flex-shrink-0"></span>
                                <span>{it}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Ritz-Carlton */}
                        <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                          <span className="text-xs font-bold text-navy-800 uppercase tracking-wider block mb-2">
                            {data.entertainmentAndActivities.activities.ritzCarlton.title}
                          </span>
                          <ul className="space-y-1.5">
                            {data.entertainmentAndActivities.activities.ritzCarlton.items.map((it, i) => (
                              <li key={i} className="text-xs text-slate-700 flex items-center gap-1.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-navy-600 flex-shrink-0"></span>
                                <span>{it}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="bg-navy-50 rounded-xl p-4 border border-navy-100">
                      <span className="text-[11px] font-bold uppercase text-navy-800 tracking-wider block mb-1">
                        Active Travel Guidance
                      </span>
                      <p className="text-xs text-navy-900 leading-relaxed font-medium">
                        {data.entertainmentAndActivities.activities.activeAdvice}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>

              {/* Card 3: Watersports */}
              <FadeIn delay={0.3} className="h-full">
                <div className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
                  {/* ========================================================================= */}
                  {/* IMAGE COMMENTED OUT AS REQUESTED - UNCOMMENT WHEN READY TO DISPLAY IMAGES */}
                  {/* ========================================================================= */}
                  {/* 
                  <div className="relative h-60 w-full overflow-hidden">
                    <img 
                      src={data.entertainmentAndActivities.watersports.image} 
                      alt={data.entertainmentAndActivities.watersports.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 to-transparent"></div>
                  </div>
                  */}

                  {/* Image Placeholder Frame */}
                  <div className="w-full h-52 bg-gradient-to-br from-slate-900 via-navy-950 to-slate-800 flex flex-col items-center justify-center p-6 text-center text-white relative">
                    <div className="w-12 h-12 rounded-full bg-white/10 text-gold-400 flex items-center justify-center mb-3 shadow-md border border-white/10">
                      <Waves className="w-6 h-6" />
                    </div>
                    <h4 className="font-serif text-xl text-white font-medium">Marina Platforms & Watersports</h4>
                    <span className="text-[10px] uppercase tracking-widest text-white/60 font-semibold bg-white/10 px-2.5 py-0.5 rounded-full border border-white/20 mt-1">
                      Image Slot Ready (Commented Out)
                    </span>
                  </div>

                  <div className="p-8 flex-grow flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl md:text-2xl font-serif text-slate-900 mb-3">
                        {data.entertainmentAndActivities.watersports.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed mb-4">
                        {data.entertainmentAndActivities.watersports.feature}
                      </p>

                      <div className="space-y-3 mb-6">
                        <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                          <span className="text-xs font-bold text-navy-800 uppercase tracking-wider block mb-1">
                            Ritz-Carlton Marina Platform
                          </span>
                          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                            {data.entertainmentAndActivities.watersports.ritzCarltonMarina}
                          </p>
                        </div>
                        <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                          <span className="text-xs font-bold text-gold-700 uppercase tracking-wider block mb-1">
                            Seabourn Marina Experiences
                          </span>
                          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                            {data.entertainmentAndActivities.watersports.seabournMarina}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-amber-50/80 rounded-xl p-4 border border-amber-200/80">
                      <p className="text-xs text-amber-950 font-medium leading-relaxed">
                        {data.entertainmentAndActivities.watersports.advice}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>

              {/* Card 4: Shore Excursions */}
              <FadeIn delay={0.4} className="h-full">
                <div className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
                  {/* ========================================================================= */}
                  {/* IMAGE COMMENTED OUT AS REQUESTED - UNCOMMENT WHEN READY TO DISPLAY IMAGES */}
                  {/* ========================================================================= */}
                  {/* 
                  <div className="relative h-60 w-full overflow-hidden">
                    <img 
                      src={data.entertainmentAndActivities.shoreExcursions.image} 
                      alt={data.entertainmentAndActivities.shoreExcursions.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 to-transparent"></div>
                  </div>
                  */}

                  {/* Image Placeholder Frame */}
                  <div className="w-full h-52 bg-gradient-to-br from-slate-900 via-navy-950 to-slate-800 flex flex-col items-center justify-center p-6 text-center text-white relative">
                    <div className="w-12 h-12 rounded-full bg-white/10 text-gold-400 flex items-center justify-center mb-3 shadow-md border border-white/10">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <h4 className="font-serif text-xl text-white font-medium">Shore Excursions & Private Tours</h4>
                    <span className="text-[10px] uppercase tracking-widest text-white/60 font-semibold bg-white/10 px-2.5 py-0.5 rounded-full border border-white/20 mt-1">
                      Image Slot Ready (Commented Out)
                    </span>
                  </div>

                  <div className="p-8 flex-grow flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl md:text-2xl font-serif text-slate-900 mb-3">
                        {data.entertainmentAndActivities.shoreExcursions.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed mb-4 italic">
                        "{data.entertainmentAndActivities.shoreExcursions.lead}"
                      </p>

                      <div className="space-y-3 mb-6">
                        <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                          <span className="text-xs font-bold text-gold-700 uppercase tracking-wider block mb-1">
                            Seabourn Exploration & Ventures
                          </span>
                          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                            {data.entertainmentAndActivities.shoreExcursions.seabournFocus}
                          </p>
                        </div>
                        <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                          <span className="text-xs font-bold text-navy-800 uppercase tracking-wider block mb-2">
                            {data.entertainmentAndActivities.shoreExcursions.ritzCarlton.title}
                          </span>
                          <ul className="space-y-1.5">
                            {data.entertainmentAndActivities.shoreExcursions.ritzCarlton.items.map((it, i) => (
                              <li key={i} className="text-xs text-slate-700 flex items-center gap-1.5">
                                <Check className="w-3.5 h-3.5 text-navy-600 flex-shrink-0" />
                                <span>{it}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                      <p className="text-xs text-slate-700 leading-relaxed font-medium">
                        {data.entertainmentAndActivities.shoreExcursions.privateAdvice}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>
      )}

      {/* ── 9. Expedition Travel (Seabourn vs. Ritz-Carlton Yacht Collection: Expedition Travel) ── */}
      {data.expeditionTravel && (
        <section className="py-24 bg-gradient-to-b from-slate-900 via-navy-950 to-slate-900 text-white relative overflow-hidden border-t border-b border-white/10">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <FadeIn className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs uppercase tracking-[0.25em] text-gold-400 font-bold block mb-3">
                EXPEDITION CAPABILITY & PRODUCT BREADTH
              </span>
              <h2 className="text-3xl md:text-5xl font-serif text-white mb-4">
                {data.expeditionTravel.title}
              </h2>
              <div className="w-16 h-0.5 bg-gold-400 mx-auto mt-4 mb-6"></div>
              <p className="text-ice-200 text-lg md:text-xl font-light italic">
                "{data.expeditionTravel.lead}"
              </p>
            </FadeIn>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
              {/* Left Card: Seabourn Dedicated Expedition (Span 7) */}
              <div className="lg:col-span-7 flex flex-col">
                <FadeIn delay={0.1} className="h-full">
                  <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 md:p-10 border border-white/10 shadow-2xl h-full flex flex-col justify-between relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-48 h-48 bg-gold-500/10 rounded-full blur-3xl pointer-events-none"></div>

                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="px-3.5 py-1 rounded-full bg-gold-400/10 border border-gold-400/30 text-gold-400 text-xs font-bold uppercase tracking-widest">
                          Dedicated Expedition Cruising
                        </span>
                        <Compass className="w-6 h-6 text-gold-400" />
                      </div>

                      <h3 className="text-2xl md:text-3xl font-serif text-white mb-2">
                        {data.expeditionTravel.seabourn.title}
                      </h3>

                      <p className="text-sm md:text-base text-gold-300 font-medium mb-3">
                        {data.expeditionTravel.seabourn.statement}
                      </p>

                      <p className="text-xs sm:text-sm text-ice-100 font-light leading-relaxed mb-6 bg-white/[0.04] p-4 rounded-xl border border-white/5">
                        {data.expeditionTravel.seabourn.ships}
                      </p>

                      <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-white/70 mb-3">
                          {data.expeditionTravel.seabourn.offerTitle}
                        </p>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {data.expeditionTravel.seabourn.offerings.map((item, idx) => (
                            <li key={idx} className="flex items-center gap-2.5 bg-white/[0.06] p-3 rounded-lg border border-white/5">
                              <Check className="w-4 h-4 text-gold-400 flex-shrink-0" />
                              <span className="text-xs sm:text-sm text-white font-medium">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              </div>

              {/* Right Card: Ritz-Carlton Yacht Focus (Span 5) */}
              <div className="lg:col-span-5 flex flex-col">
                <FadeIn delay={0.2} className="h-full">
                  <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 md:p-10 border border-white/10 shadow-2xl h-full flex flex-col justify-between relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-48 h-48 bg-ice-500/10 rounded-full blur-3xl pointer-events-none"></div>

                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="px-3.5 py-1 rounded-full bg-white/10 border border-white/20 text-ice-200 text-xs font-bold uppercase tracking-widest">
                          Luxury Yacht Product
                        </span>
                        <Anchor className="w-6 h-6 text-ice-300" />
                      </div>

                      <h3 className="text-2xl md:text-3xl font-serif text-white mb-4">
                        {data.expeditionTravel.ritzCarlton.title}
                      </h3>

                      <div className="bg-white/[0.04] p-6 rounded-2xl border border-white/5 mb-6">
                        <p className="text-sm md:text-base text-ice-100 font-light leading-relaxed">
                          {data.expeditionTravel.ritzCarlton.statement}
                        </p>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-white/10">
                      <span className="text-[11px] uppercase tracking-wider text-white/50 block mb-1">
                        Platform Distinction
                      </span>
                      <p className="text-xs text-ice-200/80 font-light">
                        Engineered for boutique harbor accessibility, marina watersports, and lifestyle luxury over polar navigation.
                      </p>
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>

            {/* Bottom Advantage Banner */}
            <FadeIn delay={0.3}>
              <div className="bg-gradient-to-r from-gold-500/10 via-gold-500/20 to-gold-500/10 border border-gold-400/30 rounded-3xl p-8 text-center max-w-4xl mx-auto shadow-2xl backdrop-blur-md">
                <span className="text-xs uppercase tracking-[0.25em] text-gold-400 font-bold block mb-2">
                  {data.expeditionTravel.advantage.condition}
                </span>
                <h4 className="text-xl md:text-2xl font-serif text-white mb-6 font-medium">
                  {data.expeditionTravel.advantage.verdict}
                </h4>
                <div className="flex flex-wrap justify-center gap-4">
                  {data.expeditionTravel.advantage.breadth.map((item, idx) => (
                    <div key={idx} className="bg-navy-950/80 border border-gold-400/40 px-6 py-3 rounded-full text-gold-300 font-medium text-sm sm:text-base shadow-lg flex items-center gap-2">
                      <Check className="w-4 h-4 text-gold-400" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
      )}

      {/* ── 10. Destinations Matchmaker (Showcase with Commented Out Images) ── */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-gold-600 bg-gold-50 px-4 py-1.5 rounded-full border border-gold-200">
              Itinerary Matchmaker
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-normal text-slate-900 mt-4">
              {data.destinations.title}
            </h2>
            <div className="w-16 h-0.5 bg-gold-400 mx-auto mt-4 mb-4"></div>
            <p className="text-slate-600 max-w-3xl mx-auto text-base md:text-lg mb-6">
              {data.destinations.subtitle}
            </p>
            {data.destinations.overview.paragraphs.map((p, idx) => (
              <p key={idx} className="text-slate-600 max-w-3xl mx-auto text-sm md:text-base mb-2 font-light">
                {p}
              </p>
            ))}
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {data.destinations.regions.map((reg, idx) => {
              const icons = [Sun, Anchor, Mountain];
              const IconComp = icons[idx % icons.length];

              return (
                <FadeIn key={idx} delay={idx * 0.1} className="h-full">
                  <div className="bg-slate-50 border border-slate-200/80 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-full">
                    {/* ========================================================================= */}
                    {/* IMAGE COMMENTED OUT AS REQUESTED - UNCOMMENT WHEN READY TO DISPLAY IMAGES */}
                    {/* ========================================================================= */}
                    {/* 
                    <div className="relative h-56 w-full overflow-hidden">
                      <img 
                        src={`https://images.unsplash.com/photo-${idx}?auto=format&fit=crop&w=800&q=80`} 
                        alt={reg.title} 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 to-transparent"></div>
                    </div>
                    */}

                    {/* Image Placeholder Frame */}
                    <div className="w-full h-52 bg-gradient-to-br from-slate-100 via-ice-50 to-slate-200/80 border-b border-dashed border-slate-300 flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
                      <div className="w-12 h-12 rounded-full bg-navy-950 text-gold-400 flex items-center justify-center mb-3 shadow-md">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <h4 className="font-serif text-lg text-navy-950 font-medium">{reg.region}</h4>
                      <span className="text-[10px] uppercase tracking-widest text-slate-500 font-semibold bg-white/90 px-2.5 py-0.5 rounded-full border border-slate-200 mt-1">
                        Image Slot Ready (Commented Out)
                      </span>
                    </div>

                    {/* Card Content */}
                    <div className="p-6 md:p-8 flex flex-col flex-grow justify-between">
                      <div>
                        <div className="text-xs font-bold text-gold-600 uppercase tracking-widest mb-2">
                          {reg.region}
                        </div>
                        <h3 className="text-xl md:text-2xl font-serif text-slate-900 mb-4 leading-snug">
                          {reg.title}
                        </h3>
                        <div className="space-y-3">
                          {reg.paragraphs.map((p, pIdx) => (
                            <p key={pIdx} className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                              {p}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 11. Traveler Types & Compatibility (GenericChecklistCards) ─ */}
      <GenericChecklistCards
        title={data.travelerPersonas.title}
        subtitle={data.travelerPersonas.subtitle}
        cards={travelerPersonaCardsData}
      />

      {/* ── 11A. Food Comparison (Seabourn vs. Ritz-Carlton Yacht Collection: Food) ── */}
      {data.foodComparisonDetailed && (
        <section className="py-20 md:py-24 bg-white border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-6">
            <FadeIn className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs uppercase tracking-widest text-gold-600 font-bold block mb-3">
                CULINARY EXCELLENCE & DINING ARCHITECTURE
              </span>
              <h2 className="text-3xl md:text-5xl font-serif text-slate-900 mb-4">
                {data.foodComparisonDetailed.title}
              </h2>
              <div className="w-16 h-0.5 bg-gold-400 mx-auto mt-4 mb-6"></div>
              <p className="text-slate-600 text-base md:text-lg leading-relaxed font-light">
                {data.foodComparisonDetailed.lead}
              </p>
            </FadeIn>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
              {/* Seabourn Food Card */}
              <FadeIn delay={0.1}>
                <div className="bg-slate-50 rounded-3xl p-8 md:p-10 border border-slate-200 shadow-sm flex flex-col h-full hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-gold-100 text-gold-700 flex items-center justify-center font-bold">
                      <Utensils className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-serif text-slate-900">
                      {data.foodComparisonDetailed.seabourn.title}
                    </h3>
                  </div>
                  <div className="pt-4 border-t border-slate-200 flex-grow">
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {data.foodComparisonDetailed.seabourn.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 bg-white p-3.5 rounded-xl border border-slate-200/70">
                          <Check className="w-4 h-4 text-gold-600 flex-shrink-0 mt-0.5" />
                          <span className="text-xs sm:text-sm text-slate-800 font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeIn>

              {/* Ritz-Carlton Food Card */}
              <FadeIn delay={0.2}>
                <div className="bg-slate-50 rounded-3xl p-8 md:p-10 border border-slate-200 shadow-sm flex flex-col h-full hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-navy-100 text-navy-800 flex items-center justify-center font-bold">
                      <Wine className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-serif text-slate-900">
                      {data.foodComparisonDetailed.ritzCarlton.title}
                    </h3>
                  </div>
                  <div className="pt-4 border-t border-slate-200 flex-grow">
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {data.foodComparisonDetailed.ritzCarlton.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 bg-white p-3.5 rounded-xl border border-slate-200/70">
                          <Check className="w-4 h-4 text-navy-600 flex-shrink-0 mt-0.5" />
                          <span className="text-xs sm:text-sm text-slate-800 font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Distinction Banner */}
            <FadeIn delay={0.3}>
              <div className="bg-navy-950 text-white rounded-2xl p-6 md:p-8 border border-navy-800 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-gold-400">
                    Key Comparative Insight
                  </span>
                  <div className="h-px bg-white/20 flex-grow"></div>
                  <span className="text-sm font-serif text-gold-400 font-semibold">
                    {data.foodComparisonDetailed.distinction.title}
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white/5 rounded-xl p-5 border border-white/10">
                    <span className="text-xs font-bold uppercase text-gold-400 block mb-1">Seabourn Dining Model</span>
                    <p className="text-sm text-ice-100 leading-relaxed font-light">
                      {data.foodComparisonDetailed.distinction.seabourn}
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-5 border border-white/10">
                    <span className="text-xs font-bold uppercase text-gold-400 block mb-1">Ritz-Carlton Dining Model</span>
                    <p className="text-sm text-ice-100 leading-relaxed font-light">
                      {data.foodComparisonDetailed.distinction.ritzCarlton}
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
      )}

      {/* ── 11B. Spa & Wellness (Seabourn vs. Ritz-Carlton Yacht Collection: Spa and Wellness) ── */}
      {data.spaWellnessDetailed && (
        <section className="py-20 md:py-24 bg-slate-50 border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-6">
            <FadeIn className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs uppercase tracking-widest text-gold-600 font-bold block mb-3">
                REJUVENATION, FITNESS & LEISURE
              </span>
              <h2 className="text-3xl md:text-5xl font-serif text-slate-900 mb-4">
                {data.spaWellnessDetailed.title}
              </h2>
              <div className="w-16 h-0.5 bg-gold-400 mx-auto mt-4 mb-6"></div>
              <p className="text-slate-600 text-base md:text-lg leading-relaxed font-light">
                {data.spaWellnessDetailed.lead}
              </p>
            </FadeIn>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-10">
              {/* Seabourn Spa */}
              <FadeIn delay={0.1}>
                <div className="bg-white rounded-3xl p-8 md:p-10 border border-slate-200 shadow-sm flex flex-col h-full hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 bg-gold-50 text-gold-700 text-xs font-bold rounded-full uppercase tracking-wider border border-gold-200">
                      {data.spaWellnessDetailed.seabourn.brand}
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-serif text-slate-900 mb-6">
                    {data.spaWellnessDetailed.seabourn.title}
                  </h3>
                  <div className="space-y-3 pt-4 border-t border-slate-100 flex-grow">
                    {data.spaWellnessDetailed.seabourn.items.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100">
                        <Sparkles className="w-4 h-4 text-gold-600 flex-shrink-0" />
                        <span className="text-sm text-slate-800 font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>

              {/* Ritz-Carlton Spa */}
              <FadeIn delay={0.2}>
                <div className="bg-white rounded-3xl p-8 md:p-10 border border-slate-200 shadow-sm flex flex-col h-full hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 bg-navy-50 text-navy-800 text-xs font-bold rounded-full uppercase tracking-wider border border-navy-200">
                      {data.spaWellnessDetailed.ritzCarlton.brand}
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-serif text-slate-900 mb-6">
                    {data.spaWellnessDetailed.ritzCarlton.title}
                  </h3>
                  <div className="space-y-3 pt-4 border-t border-slate-100 flex-grow">
                    {data.spaWellnessDetailed.ritzCarlton.items.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100">
                        <Sparkles className="w-4 h-4 text-navy-600 flex-shrink-0" />
                        <span className="text-sm text-slate-800 font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Advice Box */}
            <FadeIn delay={0.3}>
              <div className="max-w-3xl mx-auto bg-amber-50/70 rounded-2xl p-6 border border-amber-200/80 text-center">
                <p className="text-sm md:text-base text-amber-950 font-medium">
                  {data.spaWellnessDetailed.advice}
                </p>
              </div>
            </FadeIn>
          </div>
        </section>
      )}

      {/* ── 11C. Dress Code Comparison (Seabourn vs. Ritz-Carlton Yacht Collection: Dress Code) ── */}
      {data.dressCodeDetailed && (
        <section className="py-20 md:py-24 bg-white border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-6">
            <FadeIn className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs uppercase tracking-widest text-gold-600 font-bold block mb-3">
                EVENING STANDARDS & RELAXED LUXURY
              </span>
              <h2 className="text-3xl md:text-5xl font-serif text-slate-900 mb-4">
                {data.dressCodeDetailed.title}
              </h2>
              <div className="w-16 h-0.5 bg-gold-400 mx-auto mt-4 mb-6"></div>
              <p className="text-slate-600 text-base md:text-lg leading-relaxed font-light">
                {data.dressCodeDetailed.lead}
              </p>
            </FadeIn>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-10">
              {/* Seabourn Dress Code */}
              <FadeIn delay={0.1}>
                <div className="bg-slate-50 rounded-3xl p-8 md:p-10 border border-slate-200 shadow-sm flex flex-col h-full hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-gold-100 text-gold-700 flex items-center justify-center font-bold">
                      <Shirt className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-serif text-slate-900">
                      {data.dressCodeDetailed.seabourn.brand}
                    </h3>
                  </div>
                  <div className="pt-4 border-t border-slate-200 flex-grow space-y-4">
                    {data.dressCodeDetailed.seabourn.points.map((pt, idx) => (
                      <div key={idx} className="flex items-start gap-3 bg-white p-4 rounded-xl border border-slate-200/70">
                        <Check className="w-4 h-4 text-gold-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-800 leading-relaxed">{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>

              {/* Ritz-Carlton Dress Code */}
              <FadeIn delay={0.2}>
                <div className="bg-slate-50 rounded-3xl p-8 md:p-10 border border-slate-200 shadow-sm flex flex-col h-full hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-navy-100 text-navy-800 flex items-center justify-center font-bold">
                      <Shirt className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-serif text-slate-900">
                      {data.dressCodeDetailed.ritzCarlton.brand}
                    </h3>
                  </div>
                  <div className="pt-4 border-t border-slate-200 flex-grow space-y-4">
                    {data.dressCodeDetailed.ritzCarlton.points.map((pt, idx) => (
                      <div key={idx} className="flex items-start gap-3 bg-white p-4 rounded-xl border border-slate-200/70">
                        <Check className="w-4 h-4 text-navy-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-800 leading-relaxed">{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Dislike Tuxedos & Gowns Highlight */}
            <FadeIn delay={0.3}>
              <div className="bg-gradient-to-r from-navy-950 via-slate-900 to-navy-950 text-white rounded-2xl p-6 md:p-8 border border-white/10 text-center shadow-lg">
                <span className="text-xs uppercase tracking-widest text-gold-400 font-bold block mb-2">
                  {data.dressCodeDetailed.relaxedCruising.title}
                </span>
                <p className="text-base md:text-lg text-ice-50 font-serif font-light max-w-3xl mx-auto leading-relaxed">
                  "{data.dressCodeDetailed.relaxedCruising.verdict}"
                </p>
              </div>
            </FadeIn>
          </div>
        </section>
      )}

      {/* ── 12. Financial Comparison & Cost Breakdown (CostValueAnalysisCards) ── */}
      <CostValueAnalysisCards
        title={data.costAndValue.title}
        subtitle={data.costAndValue.paragraphs.join(" ")}
        includedTitle="Core Vacation Inclusions to Evaluate"
        included={costFactorsIncluded}
        extrasTitle="Additional Package & Logistics Factors"
        extras={costFactorsExtras}
      />

      {/* ── 13. What Does the Premium Buy You? (Showdown with Commented Out Images) ── */}
      <section className="w-full bg-navy-950 py-16 md:py-24 border-t border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-12">
              <span className="text-xs uppercase tracking-widest text-gold-400 font-bold block mb-3">
                Value Proposition Breakdown
              </span>
              <h2 className="font-serif text-3xl md:text-5xl text-white tracking-wide">
                {data.premiumShowdown.title}
              </h2>
              <div className="w-16 h-0.5 bg-gold-400 mx-auto mt-4 mb-4"></div>
              <p className="text-slate-300 text-sm md:text-base max-w-2xl mx-auto">
                {data.premiumShowdown.subtitle}
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Seabourn Premium Card */}
            <FadeIn direction="left" delay={0.1}>
              <div className="flex flex-col bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-2xl h-full">
                {/* ========================================================================= */}
                {/* IMAGE COMMENTED OUT AS REQUESTED - UNCOMMENT WHEN READY TO DISPLAY IMAGES */}
                {/* ========================================================================= */}
                {/* 
                <div className="h-64 md:h-80 w-full relative overflow-hidden group">
                  <img 
                    src="https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=800&q=80" 
                    alt="Seabourn Ultra-Luxury" 
                    className="w-full h-full object-cover"
                  />
                </div>
                */}

                {/* Image Placeholder Frame */}
                <div className="w-full h-52 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-950 border-b border-dashed border-white/20 flex flex-col items-center justify-center p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-white/10 text-gold-400 flex items-center justify-center mb-3 shadow-md border border-white/10">
                    <Ship className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif text-xl text-white font-medium">Seabourn Ultra-Luxury</h4>
                  <span className="text-[10px] uppercase tracking-widest text-white/60 font-semibold bg-white/10 px-2.5 py-0.5 rounded-full border border-white/20 mt-1">
                    Image Slot Ready (Commented Out)
                  </span>
                </div>

                {/* Content */}
                <div className="p-8 md:p-10 flex-grow flex flex-col justify-start">
                  <h4 className="text-gold-400 font-serif text-xl mb-6 pb-2 border-b border-white/10">
                    {data.premiumShowdown.seabourn.title}
                  </h4>
                  <ul className="space-y-4">
                    {data.premiumShowdown.seabourn.points.map((p, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="w-5 h-5 mr-3 flex-shrink-0 mt-0.5 text-gold-400" />
                        <div>
                          <span className="text-sm font-bold text-white block">{p.num}. {p.title}</span>
                          <span className="text-xs sm:text-sm text-ice-100 font-light leading-relaxed">{p.desc}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>

            {/* Ritz-Carlton Premium Card */}
            <FadeIn direction="right" delay={0.2}>
              <div className="flex flex-col bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-2xl h-full">
                {/* ========================================================================= */}
                {/* IMAGE COMMENTED OUT AS REQUESTED - UNCOMMENT WHEN READY TO DISPLAY IMAGES */}
                {/* ========================================================================= */}
                {/* 
                <div className="h-64 md:h-80 w-full relative overflow-hidden group">
                  <img 
                    src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80" 
                    alt="Ritz-Carlton Yacht Collection" 
                    className="w-full h-full object-cover"
                  />
                </div>
                */}

                {/* Image Placeholder Frame */}
                <div className="w-full h-52 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-950 border-b border-dashed border-white/20 flex flex-col items-center justify-center p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-white/10 text-gold-400 flex items-center justify-center mb-3 shadow-md border border-white/10">
                    <Anchor className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif text-xl text-white font-medium">Ritz-Carlton Yacht Collection</h4>
                  <span className="text-[10px] uppercase tracking-widest text-white/60 font-semibold bg-white/10 px-2.5 py-0.5 rounded-full border border-white/20 mt-1">
                    Image Slot Ready (Commented Out)
                  </span>
                </div>

                {/* Content */}
                <div className="p-8 md:p-10 flex-grow flex flex-col justify-start">
                  <h4 className="text-gold-400 font-serif text-xl mb-6 pb-2 border-b border-white/10">
                    {data.premiumShowdown.ritzCarlton.title}
                  </h4>
                  <ul className="space-y-4">
                    {data.premiumShowdown.ritzCarlton.points.map((p, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="w-5 h-5 mr-3 flex-shrink-0 mt-0.5 text-gold-400" />
                        <div>
                          <span className="text-sm font-bold text-white block">{p.num}. {p.title}</span>
                          <span className="text-xs sm:text-sm text-ice-100 font-light leading-relaxed">{p.desc}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── 14. Segment Matchup Deep Dives (Interactive Tabs with Commented Out Images) ── */}
      <section className="w-full py-24 bg-slate-900 relative overflow-hidden border-t border-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <FadeIn className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-gold-400 mb-3 block">
              IN-DEPTH EVALUATION ACROSS PRIVACY, SERVICE, FOOD & CRUISER PROFILES
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-white">
              Segment Matchup Deep Dives: Service, Dining & Experience
            </h2>
            <div className="w-16 h-0.5 bg-gold-400 mx-auto mt-6" />
          </FadeIn>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {(data.segmentDeepDives || []).map((prof, idx) => (
              <button
                key={idx}
                onClick={() => setActiveProfileIndex(idx)}
                className={`px-6 py-3 rounded-full border transition-all text-sm font-medium ${activeProfileIndex === idx
                    ? 'bg-white text-navy-950 border-white shadow-lg font-bold'
                    : 'bg-white/5 border-white/10 text-white/70 hover:bg-white/10 hover:text-white'
                  }`}
              >
                {prof.name}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          {data.segmentDeepDives && data.segmentDeepDives[activeProfileIndex] && (
            <FadeIn key={activeProfileIndex}>
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 lg:p-10 shadow-2xl">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

                  {/* Left Side: Image Container (Commented Out) */}
                  <div className="lg:col-span-5 w-full">
                    {/* ========================================================================= */}
                    {/* IMAGE COMMENTED OUT AS REQUESTED - UNCOMMENT WHEN READY TO DISPLAY IMAGES */}
                    {/* ========================================================================= */}
                    {/* 
                    <div className="w-full h-full min-h-[380px] rounded-2xl overflow-hidden relative group">
                      <img 
                        src={data.segmentDeepDives[activeProfileIndex].image} 
                        alt={data.segmentDeepDives[activeProfileIndex].name}
                        className="w-full h-full object-cover" 
                      />
                    </div>
                    */}

                    {/* Image Placeholder Frame */}
                    <div className="w-full min-h-[340px] bg-gradient-to-br from-navy-950 via-slate-800 to-navy-900 rounded-2xl border-2 border-dashed border-white/20 flex flex-col items-center justify-center p-8 text-center relative">
                      <div className="w-16 h-16 rounded-full bg-white/10 text-gold-400 flex items-center justify-center mb-4 shadow-lg border border-white/10">
                        <Compass className="w-8 h-8" />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-[0.25em] text-gold-400 block mb-2">
                        {data.segmentDeepDives[activeProfileIndex].tagline}
                      </span>
                      <h3 className="font-serif text-2xl md:text-3xl text-white mb-2">
                        {data.segmentDeepDives[activeProfileIndex].name}
                      </h3>
                      <span className="text-[11px] uppercase tracking-widest text-white/60 font-semibold bg-white/10 px-3 py-1 rounded-full border border-white/20 mt-2">
                        Image Slot Ready (Commented Out)
                      </span>
                    </div>
                  </div>

                  {/* Right Side: Deep Dive Content */}
                  <div className="lg:col-span-7 flex flex-col justify-center">
                    <p className="font-serif text-xl lg:text-2xl text-ice-50 italic mb-8 leading-relaxed font-light">
                      "{data.segmentDeepDives[activeProfileIndex].quote}"
                    </p>

                    <div className="space-y-6">
                      <div className="bg-white/10 rounded-2xl p-6 md:p-8 border border-white/10 relative overflow-hidden">
                        <div className="absolute top-0 left-0 right-0 h-1 bg-gold-400"></div>
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-400 mb-2">
                          Comparative Assessment
                        </p>
                        <h4 className="font-serif text-xl md:text-2xl text-white mb-3">
                          {data.segmentDeepDives[activeProfileIndex].recommendation}
                        </h4>
                        <p className="text-sm md:text-base text-white/80 leading-relaxed font-light">
                          {data.segmentDeepDives[activeProfileIndex].reason}
                        </p>
                      </div>

                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/50 mb-3 ml-1">
                          Key Travel Takeaways
                        </p>
                        <ul className="grid grid-cols-1 gap-3">
                          {(data.segmentDeepDives[activeProfileIndex].whyFits || []).map((item, i) => (
                            <li key={i} className="flex items-start gap-3 bg-white/[0.04] rounded-xl p-4 border border-white/5">
                              <Check className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                              <span className="text-xs sm:text-sm text-white/90 leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </FadeIn>
          )}
        </div>
      </section>

      {/* ── 15. Decision Framework: Is Seabourn Worth the Upgrade? ──── */}
      <section className="py-20 md:py-28 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest text-gold-600 font-bold block mb-3">
              DECISION FRAMEWORK
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-slate-900 mb-4">
              {data.decisionGuide.upgradeEvaluation.title}
            </h2>
            <div className="w-16 h-0.5 bg-gold-400 mx-auto mt-4 mb-6"></div>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed font-light">
              {data.decisionGuide.upgradeEvaluation.lead}
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Seabourn Column */}
            <FadeIn delay={0.1}>
              <div className="bg-slate-50 rounded-3xl p-8 md:p-10 border border-slate-200 shadow-sm flex flex-col h-full hover:shadow-md transition-shadow">
                <div className="mb-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-gold-600 block mb-2">
                    Classic Ultra-Luxury Heritage
                  </span>
                  <h3 className="text-xl md:text-2xl font-serif text-slate-900 mb-3">
                    Seabourn may be worth considering if you want:
                  </h3>
                </div>

                <div className="pt-6 border-t border-slate-200/80 flex-grow">
                  <ul className="space-y-3.5">
                    {data.decisionGuide.upgradeEvaluation.seabournPriorities.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="w-5 h-5 rounded-full bg-gold-100 text-gold-600 flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold">
                          ✓
                        </span>
                        <span className="text-sm sm:text-base text-slate-700 leading-relaxed font-light">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>

            {/* Ritz-Carlton Column */}
            <FadeIn delay={0.2}>
              <div className="bg-slate-50 rounded-3xl p-8 md:p-10 border border-slate-200 shadow-sm flex flex-col h-full hover:shadow-md transition-shadow">
                <div className="mb-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-navy-600 block mb-2">
                    Modern Luxury Yachting
                  </span>
                  <h3 className="text-xl md:text-2xl font-serif text-slate-900 mb-3">
                    Ritz-Carlton Yacht Collection may be worth considering if you want:
                  </h3>
                </div>

                <div className="pt-6 border-t border-slate-200/80 flex-grow">
                  <ul className="space-y-3.5">
                    {data.decisionGuide.upgradeEvaluation.ritzCarltonPriorities.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="w-5 h-5 rounded-full bg-navy-100 text-navy-700 flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold">
                          ✓
                        </span>
                        <span className="text-sm sm:text-base text-slate-700 leading-relaxed font-light">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── 16. 10 Questions to Decide (ExpertAuthorityChecklist) ──── */}
      <ExpertAuthorityChecklist
        title={data.decisionGuide.title}
        subtitle={data.decisionGuide.subtitle}
        points={data.decisionGuide.tenQuestions.map((q) => `${q.num}. ${q.q} — ${q.desc}`)}
      />

      {/* ── 17. Luxury Advisor Value & Angela Hughes Bio ───────────── */}
      <ExpertCredentials
        title="Why Work With Trips & Ships Luxury Travel"
        authorName="Angela Hughes"
        image={AboutImage}
        badge="CRUISE INDUSTRY AUTHORITY"
        authorityBoxTitle="40+ Years of Luxury Cruise Planning"
        authoritySubtitle="CEO, Trips & Ships Luxury Travel & Founder, Luxury Travel University"
        paragraphs={[
          data.authorityAndAdvisor.angelaHughes.paragraphs.join(" "),
          data.authorityAndAdvisor.whyTripsAndShips.paragraphs.join(" "),
          data.authorityAndAdvisor.whyAdvisor.paragraphs.join(" ")
        ]}
        credentials={data.authorityAndAdvisor.whyAdvisor.points}
        bio={data.authorityAndAdvisor.angelaHughes.paragraphs[0]}
        quote="A good comparison between Seabourn and The Ritz-Carlton Yacht Collection should evaluate the entire travel experience: Suite selection, itinerary comparison, dining, excursions, pre-cruise hotels, flights, transfers, travel protection, special occasions and private experiences. The goal is to match the traveler with the cruise or yacht experience that best fits their priorities."
        quoteSubtitle="Angela Hughes, CEO Trips & Ships Luxury Travel"
        ctaText="Plan Your Luxury Voyage"
        ctaLink="/seabourn-cruises/request-a-quote"
      />

      {/* ── 18. Questions to Ask Before Booking ────────────────────── */}
      <section className="py-16 bg-slate-100">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 md:p-10 border border-slate-200 shadow-sm">
            <h3 className="text-2xl md:text-3xl font-serif text-slate-900 mb-6 text-center">
              {data.authorityAndAdvisor.questionsBeforeBooking.title}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {data.authorityAndAdvisor.questionsBeforeBooking.questions.map((q, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 bg-slate-50 p-3 rounded-lg border border-slate-200/60">
                  <span className="text-gold-600 font-bold flex-shrink-0">?</span>
                  <span>{q}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 19. 30 Frequently Asked Questions (FAQAccordion) ───────── */}
      <div className="bg-white py-16">
        <FAQAccordion
          data={{
            title: "Frequently Asked Questions",
            subtitle: "30 COMPREHENSIVE ANSWERS ON SEABOURN VS. RITZ-CARLTON YACHT COLLECTION",
            faqs: data.faqs
          }}
        />
      </div>

      {/* ── 20. Final Takeaway (ConclusionSection) ──────────────────── */}
      <ConclusionSection
        title={data.finalTakeaway.title}
        paragraphs={data.finalTakeaway.paragraphs}
      />

      {/* ── 21. Center Call-to-Action (CenterCTA) ───────────────────── */}
      <CenterCTA
        title={data.cta.title}
        subtitle={data.cta.subtitle}
        primaryButtonText={data.cta.buttonText}
        primaryButtonLink={data.cta.buttonLink}
      />
    </div>
  );
};

export default SeabournVsRitzCarltonYacht;
