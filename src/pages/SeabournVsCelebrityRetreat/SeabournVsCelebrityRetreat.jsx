import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Sun, Anchor, Mountain, Compass, Ship, Check } from "lucide-react";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela3.jpeg";

// Distinct UI Components (Ensuring zero repetition of identical layouts across consecutive sections)
import ComparisonHero from "../../components/ui/ComparisonHero";
import EditorialIntroSection from "../../components/ui/EditorialIntroSection";
import ComparisonTable from "../../components/ui/ComparisonTable";
import OceanVsExpeditionCoreShowcase from "../../components/ui/OceanVsExpeditionCoreShowcase";
import ShipPhilosophyFaceoff from "../../components/ui/ShipPhilosophyFaceoff";
import DualPhilosophyShowcase from "../../components/ui/DualPhilosophyShowcase";
import ThreeColumnGrid from "../../components/ui/ThreeColumnGrid";
import TravelerPersonaCards from "../../components/ui/TravelerPersonaCards";
import CurvilinearGrid from "../../components/ui/CurvilinearGrid";
import GenericChecklistCards from "../../components/ui/GenericChecklistCards";
import InclusionsSplitFeatures from "../../components/ui/InclusionsSplitFeatures";
import CostValueAnalysisCards from "../../components/ui/CostValueAnalysisCards";
import ExpertAuthorityChecklist from "../../components/ui/ExpertAuthorityChecklist";
import ExpertCredentials from "../../components/ui/ExpertCredentials";
import FAQAccordion from "../../components/ui/FAQAccordion";
import ConclusionSection from "../../components/ui/ConclusionSection";
import CenterCTA from "../../components/ui/CenterCTA";
import FadeIn from "../../components/ui/FadeIn";

// Data Source
import data from "./data.json";

const SeabournVsCelebrityRetreat = () => {
  const [activeProfileIndex, setActiveProfileIndex] = useState(0);

  // ── 1. Core Cruise Foundations & Ship Size (OceanVsExpeditionCoreShowcase) ──
  const coreShowcaseItems = [
    {
      title: data.coreDifference.title,
      paragraphs: data.coreDifference.paragraphs,
      listTitle: "Scale & Atmosphere Comparison:",
      listItems: [
        "Seabourn: 264, 458 or 600 guests (Intimate, yacht-like atmosphere)",
        "Celebrity Ascent: Up to 3,260 guests (Elevated suite retreat in larger ship)",
        "Entire ship designed around all-suite luxury vs. private spaces within large vessel",
        "Direct access to intimate lounges vs. expansive broader onboard ecosystem"
      ],
      footnote: "That means a Retreat guest can enjoy a private suite, dedicated spaces and premium service while still having access to a much larger onboard ecosystem."
    },
    {
      title: data.shipSize.title,
      paragraphs: [
        ...data.shipSize.seabourn.paragraphs,
        ...data.shipSize.celebrity.paragraphs
      ],
      listTitle: "Opportunities Created by Vessel Scale:",
      listItems: data.shipSize.celebrity.opportunities,
      footnote: `${data.shipSize.verdict.title}: ${data.shipSize.verdict.paragraphs.join(" ")}`
    }
  ];

  // ── 2. The Biggest Difference (ShipPhilosophyFaceoff) ──
  const faceoffData = {
    title: data.theBiggestDifference.title,
    regent: {
      badge: "All-Suite Small Ship",
      title: data.theBiggestDifference.seabourn.title,
      description: `${data.theBiggestDifference.seabourn.lead} ${data.theBiggestDifference.seabourn.paragraphs.join(" ")}`,
      features: data.theBiggestDifference.seabourn.bullets
    },
    viking: {
      badge: "Suite in Mega-Resort",
      title: data.theBiggestDifference.celebrity.title,
      description: `${data.theBiggestDifference.celebrity.lead} ${data.theBiggestDifference.celebrity.paragraphs.join(" ")}`,
      features: data.theBiggestDifference.celebrity.bullets
    }
  };

  // ── 2b. Suites & Butler Service (DualPhilosophyShowcase) ──
  const suitesAndButlerData = {
    title: "Seabourn vs. Celebrity Retreat: Suites & Butler Service",
    subtitle: "Standard All-Suite Architecture vs. Suite Upgrade Category & Ship-Wide Staffing vs. Dedicated Butler",
    sailing: {
      label: "Seabourn Suites & Personalized Service",
      philosophy: "All-Suite Standard Fleet",
      points: [
        "All-suite fleet with ocean-front suites and many verandas",
        "Suites are the standard model, not an upgrade tier",
        "More than one staff member per suite; nearly one per guest",
        "Ship-wide personalized service culture across all venues",
        "Relaxed social spaces and yacht-like luxury living"
      ]
    },
    allSuite: {
      label: "Celebrity The Retreat Suites & Butler",
      philosophy: "Dedicated Suite Oasis",
      points: [
        "Multiple suite categories with dedicated butler service",
        "Butler Chat for contacting your butler from anywhere onboard",
        "Exclusive Luminae restaurant & private Retreat Lounge access",
        "Private Retreat Sundeck on Edge Series and revolutionized ships",
        "Premium drinks, Premium Wi-Fi & in-suite dining included"
      ]
    },
    verdict: "With Celebrity, you are upgrading to The Retreat within a 3,000+ passenger resort. With Seabourn, you are choosing an intimate cruise line where suites and personalized attention are fundamental to the entire ship."
  };

  // ── 3. ThreeColumnGrid Data: Dining, Drinks, Wi-Fi & Gratuities ──
  const diningAndInclusionsColumns = [
    {
      title: "Complimentary Dining vs. Luminae",
      badge: "Culinary Ecosystem",
      subtitle: data.diningAndDrinks.dining.styleComparison.title,
      description: `${data.diningAndDrinks.dining.seabourn.description} ${data.diningAndDrinks.dining.seabourn.venues.join(", ")}. ${data.diningAndDrinks.dining.seabourn.notes} By contrast, Celebrity Retreat features ${data.diningAndDrinks.dining.celebrity.description} ${data.diningAndDrinks.dining.styleComparison.summary}`,
      bullets: [
        "Seabourn: 8+ Complimentary Venues (Solis, Colonnade, Earth & Ocean, Sushi)",
        "Seabourn: Open seating anytime, with anyone, anywhere",
        "Celebrity Retreat: Private Luminae restaurant with dedicated menus",
        "Celebrity: Broader specialty restaurants available for package add-on"
      ]
    },
    {
      title: "Premium Drinks & Starlink Wi-Fi",
      badge: "Inclusions Comparison",
      subtitle: "Transparent Inclusions vs. Tiered Packages",
      description: `${data.diningAndDrinks.drinks.paragraphs.join(" ")} ${data.diningAndDrinks.wifi.paragraphs.join(" ")} ${data.diningAndDrinks.drinks.footnote}`,
      bullets: [
        "Seabourn: Premium spirits, fine wines & champagne included ship-wide",
        "Celebrity Retreat: Premium drink package included for suite guests",
        "Seabourn: Unlimited Starlink high-speed Wi-Fi included",
        "Celebrity Retreat: Premium Wi-Fi for 1st & 2nd suite guests"
      ]
    },
    {
      title: "Gratuities & Total Cost Transparency",
      badge: "Financial Model",
      subtitle: data.diningAndDrinks.gratuities.title,
      description: `${data.diningAndDrinks.gratuities.paragraphs.join(" ")} Evaluating total value requires looking at: ${data.diningAndDrinks.drinks.compareList.join(", ")}.`,
      bullets: [
        "Seabourn: Gratuities neither required nor expected",
        "Celebrity: Package structures vary by promotion and suite level",
        "Seabourn: Zero surprise surcharges on onboard venues",
        "Celebrity: A lower initial base fare does not equal lower total trip cost"
      ]
    }
  ];

  // ── 4. TravelerPersonaCards Data: Atmosphere, Crowds & Dress Code ──
  const atmosphereAndCrowdsCards = [
    {
      title: data.atmosphereAndCrowds.atmosphere.seabourn.title,
      tag: "Intimate Yacht Vibe",
      description: `${data.atmosphereAndCrowds.atmosphere.seabourn.lead} ${data.atmosphereAndCrowds.atmosphere.seabourn.footnote}`,
      idealFor: data.atmosphereAndCrowds.atmosphere.seabourn.traits
    },
    {
      title: data.atmosphereAndCrowds.atmosphere.celebrity.title,
      tag: "Dynamic Resort at Sea",
      description: `${data.atmosphereAndCrowds.atmosphere.celebrity.lead} ${data.atmosphereAndCrowds.atmosphere.celebrity.footnote}`,
      idealFor: data.atmosphereAndCrowds.atmosphere.celebrity.traits
    },
    {
      title: data.atmosphereAndCrowds.crowds.title,
      tag: "Passenger Flow & Density",
      description: `${data.atmosphereAndCrowds.crowds.paragraphs.join(" ")} ${data.atmosphereAndCrowds.crowds.summary}`,
      idealFor: data.atmosphereAndCrowds.crowds.affectedAreas
    },
    {
      title: data.atmosphereAndCrowds.dressCode.title,
      tag: "Evening Standards",
      description: `${data.atmosphereAndCrowds.dressCode.seabourn.paragraphs.join(" ")} ${data.atmosphereAndCrowds.dressCode.celebrity.paragraphs.join(" ")} ${data.atmosphereAndCrowds.dressCode.bottomLine.paragraphs.join(" ")}`,
      idealFor: [
        "Seabourn: Elegant Casual (slacks, skirts, designer jeans)",
        "Seabourn: Venture & Pursuit have 0 formal evenings",
        "Celebrity: Evening Chic nights (cocktail dresses, blazers)",
        "Celebrity: Smart Casual available in dining & theater"
      ]
    }
  ];

  // ── 5. CurvilinearGrid Data: Entertainment, Activities & Shore Excursions ──
  const entertainmentAndActivitiesGrid = [
    {
      title: "Entertainment Dynamics",
      subtitle: data.entertainmentAndActivities.entertainment.title,
      description: `${data.entertainmentAndActivities.entertainment.paragraphs.join(" ")} Celebrity offers: ${data.entertainmentAndActivities.entertainment.celebrityFeatures.join(", ")}. Seabourn offers: ${data.entertainmentAndActivities.entertainment.seabournFeatures.join(", ")}. ${data.entertainmentAndActivities.entertainment.verdict.resort} ${data.entertainmentAndActivities.entertainment.verdict.intimate}`
    },
    {
      title: "Onboard Activities & Watersports",
      subtitle: data.entertainmentAndActivities.activities.title,
      description: `${data.entertainmentAndActivities.activities.paragraphs.join(" ")} Seabourn highlights include: ${data.entertainmentAndActivities.activities.seabournActivities.join(", ")}. ${data.entertainmentAndActivities.activities.footnote}`
    },
    {
      title: "Shore Excursion Philosophy",
      subtitle: data.entertainmentAndActivities.shoreExcursions.title,
      description: data.entertainmentAndActivities.shoreExcursions.paragraphs.join(" ")
    }
  ];

  // ── 7. GenericChecklistCards Data: Traveler Demographic Matching ──
  const travelerPersonaCardsData = [
    {
      title: data.travelerMatchmaker.personas[0].title,
      badge: data.travelerMatchmaker.personas[0].category,
      items: [
        `Celebrity Retreat Values: ${data.travelerMatchmaker.personas[0].celebrityValues.join(", ")}`,
        `Seabourn Values: ${data.travelerMatchmaker.personas[0].seabournValues.join(", ")}`,
        data.travelerMatchmaker.personas[0].verdict
      ]
    },
    {
      title: data.travelerMatchmaker.personas[1].title,
      badge: data.travelerMatchmaker.personas[1].category,
      items: [
        data.travelerMatchmaker.personas[1].description,
        ...data.travelerMatchmaker.personas[1].points
      ]
    },
    {
      title: data.travelerMatchmaker.personas[2].title,
      badge: data.travelerMatchmaker.personas[2].category,
      items: [
        data.travelerMatchmaker.personas[2].description,
        ...data.travelerMatchmaker.personas[2].considerations
      ]
    },
    {
      title: data.travelerMatchmaker.personas[3].title,
      badge: data.travelerMatchmaker.personas[3].category,
      items: [
        data.travelerMatchmaker.personas[3].description,
        `Evaluation Factors: ${data.travelerMatchmaker.personas[3].evaluationFactors.join(", ")}`
      ]
    }
  ];

  // ── 8. InclusionsSplitFeatures Data: What the Upgrade Buys You vs. What You Give Up ──
  const upgradeAnalysisData = {
    headline: data.upgradeAnalysis.title,
    description: data.upgradeAnalysis.positioning.paragraphs.join(" "),
    pullQuote: data.upgradeAnalysis.whatYouGiveUp.summary,
    whatIsIncluded: {
      title: data.upgradeAnalysis.whatItBuysYou.title,
      items: data.upgradeAnalysis.whatItBuysYou.points.map((p) => ({
        title: `${p.num}. ${p.title}`,
        desc: p.desc
      }))
    },
    whatIsExtra: {
      title: data.upgradeAnalysis.whatYouGiveUp.title,
      items: data.upgradeAnalysis.whatYouGiveUp.bullets.map((b) => ({
        title: b,
        desc: ""
      }))
    }
  };

  // ── 9. CostValueAnalysisCards Data: Financial & Total Cost Breakdown ──
  const costFactorsIncluded = [
    {
      title: "Ship & Suite Category",
      description: "Fares vary significantly based on ship class, suite square footage, and veranda location."
    },
    {
      title: "Destination, Season & Sailing Date",
      description: "Peak summer in Europe/Alaska vs. shoulder season Caribbean sailings influence baseline rates."
    },
    {
      title: "Voyage Length & Current Promotions",
      description: "Weekly 7-night journeys vs. extended multi-week itineraries and promotional suite discounts."
    },
    {
      title: "Included Amenities & Fare Bundling",
      description: "Transparent all-inclusive pricing vs. tiered add-on packages for premium perks."
    },
    {
      title: "Airfare, Pre-Cruise Hotels & Excursions",
      description: "Flights, hotel stays before embarkation, and curated destination touring costs."
    }
  ];

  const costFactorsExtras = [
    {
      title: "Cruise Fare & Suite Accommodations",
      description: "Upfront suite ticket fare and dedicated private lounge/sundeck access privileges."
    },
    {
      title: "Premium Drinks & Specialty Dining",
      description: "Fine wines, champagne, and specialty venue surcharges calculated across the entire sailing."
    },
    {
      title: "High-Speed Wi-Fi & Gratuities",
      description: "Unlimited multi-device internet connectivity and daily crew gratuity service charges."
    },
    {
      title: "Shore Excursions & Private Transfers",
      description: "Boutique port touring, zodiac landings, and door-to-ship transfer arrangements."
    },
    {
      title: "Airfare, Hotels & Onboard Incidentals",
      description: "Complete pre/post-cruise travel logistics and miscellaneous onboard discretionary spending."
    }
  ];



  // ── 9c. TravelerProfileTabs Data: Segment Matchup Deep Dives ──
  const segmentDeepDiveProfiles = [
    {
      name: "Quiet Luxury",
      tagline: "Atmosphere & Scale",
      quote: data.costAndValue.deepDives[0].seabourn,
      recommendation: "Seabourn for Small-Ship Intimacy; Retreat for Private Resort Luxury",
      reason: data.costAndValue.deepDives[0].celebrity,
      whyFits: [
        "Seabourn: Built from the hull up for intimate small-ship quiet luxury",
        "Celebrity Retreat: Private suite & sundeck oasis with large-ship social options"
      ],
      image: "https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Food & Dining",
      tagline: "Culinary Philosophy",
      quote: "Both offer elevated dining, but the culinary ecosystem structure is fundamentally different.",
      recommendation: "Seabourn for All-Inclusive Variety; Celebrity for Private Luminae + Specialty Add-ons",
      reason: data.costAndValue.deepDives[1].paragraphs.join(" "),
      whyFits: [
        "Seabourn: 8+ complimentary restaurants with open seating anytime",
        "Celebrity Retreat: Dedicated suite restaurant Luminae plus specialty dining packages"
      ],
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Service Culture",
      tagline: "Staffing & Attentiveness",
      quote: "Celebrity gives dedicated suite-level butler service; Seabourn gives highly personalized service throughout the entire ship.",
      recommendation: "Dedicated Suite Butler vs. Ship-Wide 1:1 Crew Ratios",
      reason: data.costAndValue.deepDives[2].paragraphs.join(" "),
      whyFits: [
        "Celebrity: Dedicated Butler & Butler Chat connectivity from anywhere onboard",
        "Seabourn: Nearly one crew member per guest across every venue and deck"
      ],
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "First-Time Cruisers",
      tagline: "Introduction to Luxury",
      quote: "Celebrity Retreat is a familiar bridge; Seabourn is a complete immersion into intimate ultra-luxury.",
      recommendation: "Choose Based on Large-Ship Comfort vs. Small-Ship Affinity",
      reason: data.costAndValue.deepDives[3].paragraphs.join(" "),
      whyFits: [
        "Celebrity Retreat: Preserves energetic entertainment and mega-ship amenities",
        "Seabourn: Ideal for travelers who already know they want quiet elegance and no crowds"
      ],
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Experienced Travelers",
      tagline: "Seasoned Luxury Evaluators",
      quote: "Experienced luxury travelers evaluate guest count, service ratios, port access, and total inclusions.",
      recommendation: "Seabourn's Consistency Shines for Veteran Cruisers",
      reason: data.costAndValue.deepDives[4].paragraphs.join(" "),
      whyFits: [
        "Boutique port access and customized destination immersion",
        "Consistent all-suite ultra-luxury standard with zero compromise"
      ],
      image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80"
    }
  ];



  // ── 10. ExpertAuthorityChecklist Data: 10 Critical Questions ──
  const tenQuestionsList = data.decisionGuide.tenQuestions.questions.map(
    (q) => `${q.num}. ${q.q} — ${q.desc}`
  );

  // ── 11. Schema Definition ──
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
          "Celebrity Cruises",
          "Celebrity The Retreat",
          "Ultra-Luxury Cruises",
          "Luxury Cruises",
          "Small Ship Cruises",
          "Luxury Cruise Suites",
          "Luxury Cruise Travel",
          "Luxury Cruise Dining",
          "Luxury Cruise Excursions",
          "Expedition Cruises",
          "Alaska Cruises",
          "Caribbean Cruises",
          "Mediterranean Cruises"
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
          "Celebrity Cruises",
          "Luxury Cruise Travel",
          "Small Ship Cruises",
          "Expedition Cruises",
          "Alaska Cruises",
          "Caribbean Cruises",
          "Mediterranean Cruises",
          "Luxury Travel Planning"
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

      {/* ── 4. Core Cruise Differences & Ship Scale (OceanVsExpeditionCoreShowcase) ── */}
      <OceanVsExpeditionCoreShowcase
        title="What Is the Difference & Scale Comparison?"
        subtitle="PURPOSE-BUILT ULTRA-LUXURY VS. MEGA-RESORT RETREAT SUITE"
        items={coreShowcaseItems}
      />

      {/* ── 5. The Biggest Difference (ShipPhilosophyFaceoff) ───────── */}
      <ShipPhilosophyFaceoff data={faceoffData} />

      {/* ── 6. Suites & Butler Service Architecture (DualPhilosophyShowcase) ─ */}
      <DualPhilosophyShowcase data={suitesAndButlerData} />



      {/* ── 7. Dining, Drinks, Wi-Fi & Gratuities (ThreeColumnGrid) ── */}
      <ThreeColumnGrid
        title={data.diningAndDrinks.title}
        subtitle={data.diningAndDrinks.subtitle}
        columns={diningAndInclusionsColumns}
      />

      {/* ── 8. Atmosphere, Crowds & Dress Code (TravelerPersonaCards) ─ */}
      <TravelerPersonaCards
        title={data.atmosphereAndCrowds.title}
        subtitle={data.atmosphereAndCrowds.subtitle}
        cards={atmosphereAndCrowdsCards}
      />

      {/* ── 9. Entertainment & Shore Excursions (CurvilinearGrid) ──── */}
      <CurvilinearGrid
        title={data.entertainmentAndActivities.title}
        subtitle={data.entertainmentAndActivities.subtitle}
        items={entertainmentAndActivitiesGrid}
      />

      {/* ── 10. Destinations Matchmaker (Showcase with Commented Out Images) ── */}
      <section className="py-20 bg-white">
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
              <p key={idx} className="text-slate-600 max-w-3xl mx-auto text-sm md:text-base mb-2">
                {p}
              </p>
            ))}
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {data.destinations.regions.map((reg, idx) => {
              const icons = [Sun, Anchor, Mountain];
              const IconComp = icons[idx % icons.length];
              const sampleImages = [
                "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
              ];

              return (
                <FadeIn key={idx} delay={idx * 0.1} className="h-full">
                  <div className="bg-slate-50 border border-slate-200/80 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-full">
                    {/* ========================================================================= */}
                    {/* IMAGE COMMENTED OUT AS REQUESTED - UNCOMMENT WHEN READY TO DISPLAY IMAGES */}
                    {/* ========================================================================= */}
                    {/* 
                    <div className="relative h-56 w-full overflow-hidden">
                      <img 
                        src={sampleImages[idx]} 
                        alt={reg.title} 
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent"></div>
                      <span className="absolute bottom-3 left-4 text-xs font-bold uppercase tracking-wider text-white bg-navy-950/80 px-3 py-1 rounded-full border border-white/20">
                        {reg.region}
                      </span>
                    </div>
                    */}

                    {/* Image Placeholder Frame (Visible while image tag remains commented out above) */}
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
                            <p key={pIdx} className="text-xs sm:text-sm text-slate-600 leading-relaxed">
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
        title={data.travelerMatchmaker.title}
        subtitle={data.travelerMatchmaker.subtitle}
        cards={travelerPersonaCardsData}
      />

      {/* ── 12. Upgrade Analysis (InclusionsSplitFeatures) ────────── */}
      <InclusionsSplitFeatures data={upgradeAnalysisData} />

      {/* ── 13. Financial Comparison & Cost Breakdown (CostValueAnalysisCards) ── */}
      <CostValueAnalysisCards
        title={data.costAndValue.cost.title}
        subtitle={`${data.costAndValue.cost.paragraphs.join(" ")} ${data.costAndValue.cost.footnote}`}
        includedTitle="Price Difference Influencing Factors"
        included={costFactorsIncluded}
        extrasTitle="Compare the Total Value — Add:"
        extras={costFactorsExtras}
      />

      {/* ── 13b. Is Seabourn Worth the Upgrade? (Showdown with Commented Out Images) ── */}
      <section className="w-full bg-navy-950 py-16 md:py-24 border-t border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-12">
              <span className="text-xs uppercase tracking-widest text-gold-400 font-bold block mb-3">
                Value & Experience Decision
              </span>
              <h2 className="font-serif text-3xl md:text-5xl text-white tracking-wide">
                {data.costAndValue.isItWorthIt.title}
              </h2>
              <div className="w-16 h-0.5 bg-gold-400 mx-auto mt-4"></div>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Seabourn Card */}
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
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 to-transparent" />
                  <h3 className="absolute bottom-6 left-8 font-serif text-3xl text-white">
                    Seabourn Ultra-Luxury
                  </h3>
                </div>
                */}

                {/* Image Placeholder Frame (Visible while image tag remains commented out above) */}
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
                    {data.costAndValue.isItWorthIt.seabournPriorities.title}
                  </h4>
                  <ul className="space-y-4">
                    {data.costAndValue.isItWorthIt.seabournPriorities.bullets.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="w-5 h-5 mr-3 flex-shrink-0 mt-0.5 text-gold-400" />
                        <span className="text-sm md:text-base leading-relaxed text-ice-50 font-light">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>

            {/* Celebrity Card */}
            <FadeIn direction="right" delay={0.2}>
              <div className="flex flex-col bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-2xl h-full">
                {/* ========================================================================= */}
                {/* IMAGE COMMENTED OUT AS REQUESTED - UNCOMMENT WHEN READY TO DISPLAY IMAGES */}
                {/* ========================================================================= */}
                {/* 
                <div className="h-64 md:h-80 w-full relative overflow-hidden group">
                  <img 
                    src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80" 
                    alt="Celebrity The Retreat" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 to-transparent" />
                  <h3 className="absolute bottom-6 left-8 font-serif text-3xl text-white">
                    Celebrity The Retreat
                  </h3>
                </div>
                */}

                {/* Image Placeholder Frame (Visible while image tag remains commented out above) */}
                <div className="w-full h-52 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-950 border-b border-dashed border-white/20 flex flex-col items-center justify-center p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-white/10 text-gold-400 flex items-center justify-center mb-3 shadow-md border border-white/10">
                    <Anchor className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif text-xl text-white font-medium">Celebrity The Retreat</h4>
                  <span className="text-[10px] uppercase tracking-widest text-white/60 font-semibold bg-white/10 px-2.5 py-0.5 rounded-full border border-white/20 mt-1">
                    Image Slot Ready (Commented Out)
                  </span>
                </div>

                {/* Content */}
                <div className="p-8 md:p-10 flex-grow flex flex-col justify-start">
                  <h4 className="text-gold-400 font-serif text-xl mb-6 pb-2 border-b border-white/10">
                    {data.costAndValue.isItWorthIt.celebrityPriorities.title}
                  </h4>
                  <ul className="space-y-4">
                    {data.costAndValue.isItWorthIt.celebrityPriorities.bullets.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="w-5 h-5 mr-3 flex-shrink-0 mt-0.5 text-gold-400" />
                        <span className="text-sm md:text-base leading-relaxed text-ice-50 font-light">
                          {feature}
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

      {/* ── 13c. Segment Matchup Deep Dives (Interactive Tabs with Commented Out Images) ── */}
      <section className="w-full py-24 bg-slate-900 relative overflow-hidden border-t border-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <FadeIn className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-gold-400 mb-3 block">
              IN-DEPTH EVALUATION ACROSS QUIET LUXURY, FOOD, SERVICE & CRUISER PROFILES
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-white">
              Segment Matchup Deep Dives: Service, Dining & Experience
            </h2>
            <div className="w-16 h-0.5 bg-gold-400 mx-auto mt-6" />
          </FadeIn>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {segmentDeepDiveProfiles.map((prof, idx) => (
              <button
                key={idx}
                onClick={() => setActiveProfileIndex(idx)}
                className={`px-6 py-3 rounded-full border transition-all text-sm font-medium ${
                  activeProfileIndex === idx
                    ? 'bg-white text-navy-950 border-white shadow-lg font-bold'
                    : 'bg-white/5 border-white/10 text-white/70 hover:bg-white/10 hover:text-white'
                }`}
              >
                {prof.name}
              </button>
            ))}
          </div>

          {/* Tab Content */}
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
                      src={segmentDeepDiveProfiles[activeProfileIndex].image} 
                      alt={segmentDeepDiveProfiles[activeProfileIndex].name}
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
                      {segmentDeepDiveProfiles[activeProfileIndex].tagline}
                    </span>
                    <h3 className="font-serif text-2xl md:text-3xl text-white mb-2">
                      {segmentDeepDiveProfiles[activeProfileIndex].name}
                    </h3>
                    <span className="text-[11px] uppercase tracking-widest text-white/60 font-semibold bg-white/10 px-3 py-1 rounded-full border border-white/20 mt-2">
                      Image Slot Ready (Commented Out)
                    </span>
                  </div>
                </div>

                {/* Right Side: Deep Dive Content */}
                <div className="lg:col-span-7 flex flex-col justify-center">
                  <p className="font-serif text-xl lg:text-2xl text-ice-50 italic mb-8 leading-relaxed font-light">
                    "{segmentDeepDiveProfiles[activeProfileIndex].quote}"
                  </p>

                  <div className="space-y-6">
                    <div className="bg-white/10 rounded-2xl p-6 md:p-8 border border-white/10 relative overflow-hidden">
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gold-400"></div>
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-400 mb-2">
                        Comparative Assessment
                      </p>
                      <h4 className="font-serif text-xl md:text-2xl text-white mb-3">
                        {segmentDeepDiveProfiles[activeProfileIndex].recommendation}
                      </h4>
                      <p className="text-sm md:text-base text-white/80 leading-relaxed font-light">
                        {segmentDeepDiveProfiles[activeProfileIndex].reason}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/50 mb-3 ml-1">
                        Key Travel Takeaways
                      </p>
                      <ul className="grid grid-cols-1 gap-3">
                        {segmentDeepDiveProfiles[activeProfileIndex].whyFits.map((item, i) => (
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
        </div>
      </section>

      {/* ── 14. Which Should You Choose? ───────────────────────────── */}
      <section className="py-20 md:py-28 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest text-gold-600 font-bold block mb-3">
              DECISION FRAMEWORK
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-slate-900 mb-4">
              Seabourn vs. Celebrity Retreat: Which Should You Choose?
            </h2>
            <div className="w-16 h-0.5 bg-gold-400 mx-auto mt-4 mb-6"></div>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed">
              Instead of asking which cruise line is universally better, ask which experience matches your priorities.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Seabourn Column */}
            <FadeIn delay={0.1}>
              <div className="bg-slate-50 rounded-3xl p-8 md:p-10 border border-slate-200 shadow-sm flex flex-col h-full hover:shadow-md transition-shadow">
                <div className="mb-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-gold-600 block mb-2">
                    Ultra-Luxury Intimacy
                  </span>
                  <h3 className="text-xl md:text-2xl font-serif text-slate-900 mb-3">
                    Choose Seabourn when your priority is:
                  </h3>
                  <div className="bg-gold-50 border border-gold-200 rounded-xl p-4 text-gold-900 font-serif text-lg font-medium">
                    Small-ship ultra-luxury
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-200/80 flex-grow">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-slate-800 mb-4">
                    Compare Seabourn particularly closely when you want:
                  </h4>
                  <ul className="space-y-3.5">
                    {[
                      "An intimate ship",
                      "Yacht-like atmosphere",
                      "Highly personalized service",
                      "All-inclusive luxury",
                      "Smaller guest counts",
                      "Destination-focused cruising",
                      "Expedition options"
                    ].map((item, idx) => (
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

            {/* Celebrity Retreat Column */}
            <FadeIn delay={0.2}>
              <div className="bg-slate-50 rounded-3xl p-8 md:p-10 border border-slate-200 shadow-sm flex flex-col h-full hover:shadow-md transition-shadow">
                <div className="mb-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-navy-600 block mb-2">
                    Resort-Style Luxury
                  </span>
                  <h3 className="text-xl md:text-2xl font-serif text-slate-900 mb-3">
                    Consider Celebrity Retreat when your priority is:
                  </h3>
                  <div className="bg-navy-50 border border-navy-200 rounded-xl p-4 text-navy-900 font-serif text-lg font-medium">
                    A luxury suite within a large premium cruise environment
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-200/80 flex-grow">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-slate-800 mb-4">
                    Compare Celebrity Retreat particularly closely when you want:
                  </h4>
                  <ul className="space-y-3.5">
                    {[
                      "Large-ship amenities",
                      "Extensive entertainment",
                      "More restaurants",
                      "Bigger pools",
                      "More activities",
                      "Suite-exclusive spaces",
                      "Butler service",
                      "A mix of privacy and resort-style cruising"
                    ].map((item, idx) => (
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

      {/* ── 15. 10 Questions to Decide (ExpertAuthorityChecklist) ──── */}
      <ExpertAuthorityChecklist
        title={data.decisionGuide.tenQuestions.title}
        subtitle={data.decisionGuide.tenQuestions.lead}
        points={tenQuestionsList}
      />

      {/* ── 16. Luxury Advisor Value & Angela Hughes Bio ───────────── */}
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
        bio={data.authorityAndAdvisor.angelaHughes.paragraphs[1]}
        quote="A comparison between Seabourn and Celebrity Retreat should consider the complete vacation: Cruise, Suite, Dining, Drinks, Wi-Fi, Excursions, Hotels, Flights, Transfers, Travel protection and Special experiences. The goal is to match the cruise experience with the traveler's priorities."
        quoteSubtitle="Angela Hughes, CEO Trips & Ships Luxury Travel"
        ctaText="Plan Your Luxury Cruise"
        ctaLink="/seabourn-cruises/request-a-quote"
      />

      {/* ── 16b. Questions to Ask Before Booking ────────────────────── */}
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

      {/* ── 17. 20 Frequently Asked Questions (FAQAccordion) ───────── */}
      <div className="bg-white py-16">
        <FAQAccordion
          data={{
            title: "Frequently Asked Questions",
            subtitle: "COMPREHENSIVE ANSWERS ON SEABOURN VS. CELEBRITY THE RETREAT",
            faqs: data.faqs
          }}
        />
      </div>

      {/* ── 18. Final Takeaway (ConclusionSection) ──────────────────── */}
      <ConclusionSection
        title={data.finalTakeaway.title}
        paragraphs={data.finalTakeaway.paragraphs}
      />

      {/* ── 19. Center Call-to-Action (CenterCTA) ───────────────────── */}
      <CenterCTA
        title={data.cta.title}
        subtitle={data.cta.subtitle}
        primaryButtonText={data.cta.buttonText}
        primaryButtonLink={data.cta.buttonLink}
      />
    </div>
  );
};

export default SeabournVsCelebrityRetreat;
