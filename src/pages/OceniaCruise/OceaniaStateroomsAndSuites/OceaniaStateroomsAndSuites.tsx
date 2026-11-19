import React from 'react';
import { Helmet } from 'react-helmet-async';

// Page Data JSON
import pageData from './data.json';

// Shared Components & UI System (Zero Repetition, No Real Images Added)
import ComparisonHero from '@/components/ui/ComparisonHero';
import ComparisonTable from '@/components/ui/ComparisonTable';
import EditorialIntroSplit from '@/components/ui/EditorialIntroSplit';
import CardGrid from '@/components/ui/CardGrid';
import ThreeColumnGrid from '@/components/ui/ThreeColumnGrid';
import DetailedInclusionsList from '@/components/ui/DetailedInclusionsList';
import LuxuryZigZagShowcase from '@/components/ui/LuxuryZigZagShowcase';
import LuxuryComparisonMatrix from '@/components/ui/LuxuryComparisonMatrix';
import ArcticGlanceFacts from '@/components/ui/ArcticGlanceFacts';
import ValueBreakdownSplit from '@/components/ui/ValueBreakdownSplit';
import ContainedShowdown from '@/components/ui/ContainedShowdown';
import GenericChecklistCards from '@/components/ui/GenericChecklistCards';
import TravelerPersonaCards from '@/components/ui/TravelerPersonaCards';
import DestinationEditorialGrid from '@/components/ui/DestinationEditorialGrid';
import StepByStepGuide from '@/components/ui/StepByStepGuide';
import CostAndInclusionsPanel from '@/components/ui/CostAndInclusionsPanel';
import MistakesGrid from '@/components/ui/MistakesGrid';
import CruiseLinesComparison from '@/components/ui/CruiseLinesComparison';
import ExpertCredentials from '@/components/ui/ExpertCredentials';
import FAQAccordion from '@/components/ui/FAQAccordion';
import CenterCTA from '@/components/ui/CenterCTA';
import Nav from '@/components/Navbar/Nav';
import FadeIn from '@/components/ui/FadeIn';

import AboutAngelaImg from "@/assets/AboutAngela.jpeg";
import { Bed, Sparkles, Crown, User, ShieldCheck, Compass, Heart, Anchor, Wine, Gem, Camera } from 'lucide-react';

const OceaniaStateroomsAndSuites: React.FC = () => {
  const canonicalUrl = pageData.meta.canonical;

  // 1. Quick Answer ComparisonTable data structure
  const quickComparisonData = {
    title: pageData.quickAnswer.title,
    subtitle: pageData.quickAnswer.subtitle,
    headers: pageData.quickAnswer.headers,
    rows: pageData.quickAnswer.rows.map(r => [
      r.category,
      r.bestFor,
      r.advantage
    ])
  };

  // 2. CardGrid cards for Three Broad Categories
  const categoryCards = pageData.categoriesOverview.groups.map(g => ({
    title: g.title,
    description: g.description,
    icon: g.icon
  }));

  // 3. ThreeColumnGrid items for Standard Staterooms (Inside, Ocean View, Veranda)
  const standardStateroomItems = [
    {
      category: pageData.standardStaterooms.inside.badge,
      title: pageData.standardStaterooms.inside.title,
      description: pageData.standardStaterooms.inside.description,
      lead: pageData.standardStaterooms.inside.drawback,
      placeholderLabel: pageData.standardStaterooms.inside.title,
      facets: pageData.standardStaterooms.inside.features.map(f => ({ label: "Feature", text: f }))
    },
    {
      category: pageData.standardStaterooms.oceanView.badge,
      title: pageData.standardStaterooms.oceanView.title,
      description: pageData.standardStaterooms.oceanView.description,
      lead: pageData.standardStaterooms.oceanView.drawback,
      placeholderLabel: pageData.standardStaterooms.oceanView.title,
      facets: pageData.standardStaterooms.oceanView.features.map(f => ({ label: "Feature", text: f }))
    },
    {
      category: pageData.standardStaterooms.veranda.badge,
      title: pageData.standardStaterooms.veranda.title,
      description: `${pageData.standardStaterooms.veranda.description} ${pageData.standardStaterooms.veranda.dimensionsNote}`,
      lead: pageData.standardStaterooms.veranda.drawback,
      placeholderLabel: pageData.standardStaterooms.veranda.title,
      facets: pageData.standardStaterooms.veranda.features.map(f => ({ label: "Feature", text: f }))
    }
  ];

  // 4. DetailedInclusionsList items for Concierge Level
  const conciergePrivileges = pageData.conciergeVeranda.privileges.map(p => ({
    title: p.title,
    paragraphs: [p.description]
  }));

  // 5. LuxuryZigZagShowcase items for Luxury Suites
  const suiteShowcaseItems = pageData.suitesExplained.suites.map(s => ({
    title: s.name,
    category: s.tag,
    description: s.description,
    bestFor: s.whoShouldBook.join(" "),
    placeholderLabel: s.name
  }));

  // 6. ArcticGlanceFacts items for Fleet-by-Fleet Stateroom Assessment
  const shipGlanceItems = pageData.shipBestAccommodations.ships.map(s => ({
    label: s.category,
    value: s.name,
    description: s.considerations
  }));

  // 7. ValueBreakdownSplit items for Concierge vs Veranda
  const verandaReasons = pageData.headToHead.conciergeVsVeranda.whenChooseVeranda.map(text => ({
    title: "Key Factor",
    description: text
  }));
  const conciergeReasons = pageData.headToHead.conciergeVsVeranda.whenChooseConcierge.map(text => ({
    title: "Key Factor",
    description: text
  }));

  // 8. ContainedShowdown data for Penthouse Suite vs Concierge Level
  const penthouseShowdown = {
    title: pageData.headToHead.penthouseVsConcierge.title,
    brandA: {
      name: "Concierge Level Veranda",
      features: [
        "Veranda stateroom accommodation type with private outdoor balcony",
        "Standard stateroom layout (approx. 216–291 sq. ft. depending on ship)",
        "Complimentary laundry service allowance (up to three bags)",
        "Priority specialty restaurant reservations and expanded room service menu",
        "Unlimited access to Aquamar Spa Terrace and Concierge Lounge on eligible ships",
        "Best for travelers wanting extra service privileges without paying for suite square footage"
      ]
    },
    brandB: {
      name: "Penthouse Suite",
      features: [
        "Dedicated luxury suite accommodation type with private teak veranda",
        "Substantially larger suite layout (approx. 322–440 sq. ft.) with separate seating area",
        "Full 24-hour dedicated butler service throughout the voyage",
        "Complimentary suite laundry benefits and priority luggage delivery",
        "Top-priority online specialty dining reservations and welcome Prosecco",
        "Best for travelers seeking elevated living space, private dining, and full butler attention"
      ]
    }
  };

  // 9. GenericChecklistCards items for What's Included
  const stateroomInclusionCards = [
    {
      title: pageData.inclusionsAndFares.standardAmenities.title,
      items: pageData.inclusionsAndFares.standardAmenities.items
    },
    {
      title: pageData.inclusionsAndFares.categoryPrivileges.title,
      items: pageData.inclusionsAndFares.categoryPrivileges.items
    }
  ];

  // 10. TravelerPersonaCards items for Traveler Matchmaker
  const iconNames = ['Camera', 'Heart', 'Wine', 'Gem', 'Landmark', 'Bike', 'Heart', 'Wine'];
  const travelerMatchmakerPersonas = pageData.travelerProfiles.items.map((item, idx) => ({
    title: item.type,
    description: item.why,
    traits: [item.why],
    recommendations: [item.accommodation],
    icon: iconNames[idx % iconNames.length]
  }));

  // 11. DestinationEditorialGrid items for Scenic Itineraries
  const scenicEditorialItems = pageData.scenicItineraries.regions.map(r => ({
    title: r.region,
    description: r.advice
  }));
  const scenicImages: string[] = [];

  // 12. StepByStepGuide items for Cabin Location Guide
  const cabinLocationSteps = pageData.cabinLocationGuide.sections.map((s, idx) => ({
    number: `0${idx + 1}`,
    title: s.heading,
    description: s.points.join(" ")
  }));

  // 13. CostAndInclusionsPanel items for Cost & Value
  const costPanels = [
    {
      tier: "Standard Staterooms",
      price: "Inside, Ocean View & Veranda",
      category: "Standard Fares",
      description: "Best for value-focused travelers who prioritize destination exploration and culinary experiences.",
      inclusions: [
        "Economical entry price point with full access to all dining venues",
        "Choice between budget Inside, natural-light Ocean View, or private Veranda",
        "Includes Your World Included amenities: dining, Wi-Fi, and gratuities",
        "Ideal when days are spent on excursions rather than in-room lounging"
      ]
    },
    {
      tier: "Concierge Level Veranda",
      price: "Enhanced Service & Lounge",
      category: "Elevated Value",
      description: "Best for longer sailings where complimentary laundry and priority reservations deliver maximum value.",
      inclusions: [
        "Complimentary laundry service allowance (up to 3 bags)",
        "Priority online specialty restaurant reservations",
        "Private Concierge Lounge access on eligible ships",
        "Expanded room service menu from The Grand Dining Room",
        "Unlimited Aquamar Spa Terrace access and welcome Prosecco"
      ]
    },
    {
      tier: "Luxury Suites",
      price: "Penthouse to Owner's Suites",
      category: "Ultimate Luxury",
      description: "Best for guests seeking expansive living quarters, Ralph Lauren styling, and 24-hour butler service.",
      inclusions: [
        "From 322 sq. ft. Penthouses to 2,000+ sq. ft. Owner's Suites",
        "Full professional 24-hour butler service and in-suite dining",
        "Priority luggage delivery and VIP embarkation/debarkation",
        "Comprehensive suite laundry allowances and Executive Lounge access",
        "Dramatic verandas with wrap-around teak observation decks"
      ]
    }
  ];

  // 14. CruiseLinesComparison items for Competitor Showdown
  const competitorLines = pageData.competitorComparison.rows.map(row => ({
    title: row[0],
    category: row[0].includes("Oceania") ? "Benchmark Fleet" : "Competitor Comparison",
    description: row[1],
    features: [
      "Signature accommodation architecture and cabin configurations",
      "Distinctive suite privileges, butler services, and inclusions",
      "Varied ship sizes and deck plan space-per-guest ratios"
    ]
  }));

  // 16. FAQ Accordion data format
  const faqData = {
    title: pageData.faqs.title,
    subtitle: pageData.faqs.subtitle,
    questions: pageData.faqs.questions
  };

  const meta = pageData.meta as {
    keywords?: string;
    primaryKeyword?: string;
    secondaryKeywords?: string[];
  };
  const keywords = meta.keywords || (meta.primaryKeyword ? [meta.primaryKeyword, ...(meta.secondaryKeywords || [])].join(", ") : "");

  // Structured Schema (Organization, WebPage, Article, Breadcrumbs, FAQs)
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.tripsandships.com/#organization",
        "name": "Trips & Ships Luxury Travel",
        "url": "https://www.tripsandships.com",
        "logo": "https://www.tripsandships.com/assets/logo.png"
      },
      {
        "@type": "TravelAgency",
        "@id": "https://www.tripsandships.com/#travelagency",
        "name": "Trips & Ships Luxury Travel",
        "url": "https://www.tripsandships.com",
        "parentOrganization": {
          "@id": "https://www.tripsandships.com/#organization"
        }
      },
      {
        "@type": "Person",
        "@id": "https://www.tripsandships.com/#angelahughes",
        "name": "Angela Hughes",
        "jobTitle": "Luxury Cruise Specialist & Elite Travel Advisor",
        "worksFor": {
          "@id": "https://www.tripsandships.com/#organization"
        }
      },
      {
        "@type": "WebPage",
        "@id": `${canonicalUrl}#webpage`,
        "url": canonicalUrl,
        "name": pageData.meta.title,
        "description": pageData.meta.description,
        "breadcrumb": {
          "@id": `${canonicalUrl}#breadcrumb`
        },
        "isPartOf": {
          "@id": "https://www.tripsandships.com/#website"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${canonicalUrl}#breadcrumb`,
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
            "name": "Oceania Cruises",
            "item": "https://www.tripsandships.com/oceania-cruises"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Staterooms and Suites",
            "item": canonicalUrl
          }
        ]
      },
      {
        "@type": "Article",
        "@id": `${canonicalUrl}#article`,
        "headline": pageData.meta.title,
        "description": pageData.meta.description,
        "mainEntityOfPage": canonicalUrl,
        "author": {
          "@id": "https://www.tripsandships.com/#angelahughes"
        },
        "publisher": {
          "@id": "https://www.tripsandships.com/#organization"
        }
      },
      {
        "@type": "FAQPage",
        "@id": `${canonicalUrl}#faq`,
        "mainEntity": pageData.faqs.questions.map((faq) => ({
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
    <>
      <Helmet>
        <title>{pageData.meta.title}</title>
        <meta name="title" content={pageData.meta.title} />
        <meta name="description" content={pageData.meta.description} />
        <meta name="keywords" content={keywords} />
        <link rel="canonical" href={canonicalUrl} />

        {/* OpenGraph */}
        <meta property="og:title" content={pageData.meta.title} />
        <meta property="og:description" content={pageData.meta.description} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="article" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageData.meta.title} />
        <meta name="twitter:description" content={pageData.meta.description} />

        {/* Structured Data */}
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>
      <Nav />

      {/* ─── 1. HERO SECTION (ComparisonHero) ─── */}
      <ComparisonHero
        title={pageData.hero.title}
        subtitle={pageData.hero.subtitle}
        description={pageData.hero.description}
        badge={pageData.hero.badge}
        primaryCtaText={pageData.hero.primaryCtaText}
        primaryCtaLink={pageData.hero.primaryCtaLink}
        secondaryCtaText={pageData.hero.secondaryCtaText}
        secondaryCtaLink={pageData.hero.secondaryCtaLink}
      />

      <div className="w-full">
        {/* ─── 2. EDITORIAL INTRO SECTION (EditorialIntroSplit) ─── */}
        <div id="intro-overview" className="bg-white border-b border-slate-200">
          <EditorialIntroSplit
            heading={pageData.editorialIntro.heading}
            paragraphs={pageData.editorialIntro.paragraphs}
            eyebrow={pageData.editorialIntro.eyebrow}
          />
        </div>

        {/* ─── 3. QUICK ANSWER TABLE (ComparisonTable) ─── */}
        <div id="quick-answer" className="bg-slate-50 border-b border-slate-200">
          <ComparisonTable data={quickComparisonData} />
        </div>

        {/* ─── 4. THREE BROAD CATEGORY TIERS (CardGrid) ─── */}
        <div id="categories" className="bg-white border-b border-slate-200">
          <CardGrid
            title={pageData.categoriesOverview.title}
            subtitle={pageData.categoriesOverview.subtitle}
            cards={categoryCards}
          />
        </div>

        {/* ─── 5. STANDARD STATEROOMS BREAKDOWN (ThreeColumnGrid) ─── */}
        <div id="standard-staterooms" className="bg-slate-50 border-b border-slate-200">
          <ThreeColumnGrid
            title="Standard Staterooms: Inside, Ocean View & Veranda"
            subtitle="EVERYDAY RESIDENTIAL COMFORT WITH SIGNATURE TRANQUILITY BEDS"
            items={standardStateroomItems}
          />
        </div>

        {/* ─── 6. CONCIERGE LEVEL PRIVILEGES (DetailedInclusionsList) ─── */}
        <div id="concierge-level" className="bg-white border-b border-slate-200">
          <DetailedInclusionsList
            title={pageData.conciergeVeranda.title}
            intro={[pageData.conciergeVeranda.description]}
            items={conciergePrivileges}
          />
        </div>

        {/* ─── 7. LUXURY SUITES BREAKDOWN (LuxuryZigZagShowcase) ─── */}
        <div id="luxury-suites" className="bg-slate-50 border-b border-slate-200">
          <LuxuryZigZagShowcase
            title={pageData.suitesExplained.title}
            subtitle={pageData.suitesExplained.subtitle}
            items={suiteShowcaseItems}
          />
        </div>

        {/* ─── 8. STATEROOM & SUITE SIZES COMPARED (LuxuryComparisonMatrix) ─── */}
        <div id="sizes-comparison" className="border-b border-slate-200">
          <LuxuryComparisonMatrix
            title={pageData.sizesComparison.title}
            subtitle={pageData.sizesComparison.subtitle}
            headers={pageData.sizesComparison.headers}
            rows={pageData.sizesComparison.rows}
          />
        </div>

        {/* ─── 9. FLEET ACCOMMODATION BENCHMARKS (ArcticGlanceFacts) ─── */}
        <div id="ship-best-staterooms" className="border-b border-slate-200">
          <ArcticGlanceFacts
            title={pageData.shipBestAccommodations.title}
            items={shipGlanceItems}
          />
         
        </div>

        {/* ─── 10. CONCIERGE VS VERANDA SHOWDOWN (ValueBreakdownSplit) ─── */}
        <div id="concierge-vs-veranda" className="bg-white border-b border-slate-200">
          <ValueBreakdownSplit
            title={pageData.headToHead.conciergeVsVeranda.title}
            subtitle={pageData.headToHead.conciergeVsVeranda.subtitle}
            includedTitle="When to Choose Standard Veranda"
            extrasTitle="When to Choose Concierge Level"
            included={verandaReasons}
            extras={conciergeReasons}
          />
        </div>

        {/* ─── 11. PENTHOUSE VS CONCIERGE SHOWDOWN (ContainedShowdown) ─── */}
        <div id="penthouse-vs-concierge" className="border-b border-slate-200">
          <ContainedShowdown
            title={penthouseShowdown.title}
            brandA={penthouseShowdown.brandA}
            brandB={penthouseShowdown.brandB}
          />
        </div>

        {/* ─── 12. WHAT IS INCLUDED (GenericChecklistCards) ─── */}
        <div id="stateroom-inclusions" className="bg-slate-50 border-b border-slate-200">
          <GenericChecklistCards
            title={pageData.inclusionsAndFares.title}
            subtitle={pageData.inclusionsAndFares.subtitle}
            cards={stateroomInclusionCards}
          />
        </div>

        {/* ─── 13. TRAVELER PERSONA MATCHMAKER (TravelerPersonaCards) ─── */}
        <div id="traveler-matchmaker" className="bg-ice-100 border-b border-slate-200">
          <TravelerPersonaCards
            title={pageData.travelerProfiles.title}
            subtitle={pageData.travelerProfiles.subtitle}
            personas={travelerMatchmakerPersonas}
          />
        </div>

        {/* ─── 14. SCENIC ITINERARIES (DestinationEditorialGrid) ─── */}
        <div id="scenic-itineraries" className="border-b border-slate-200">
          <DestinationEditorialGrid
            title={pageData.scenicItineraries.title}
            subtitle={pageData.scenicItineraries.subtitle}
            items={scenicEditorialItems}
            images={scenicImages}
          />
        </div>

        {/* ─── 15. CABIN LOCATION & DECK PLAN STRATEGY (StepByStepGuide) ─── */}
        <div id="cabin-location" className="bg-white border-b border-slate-200">
          <StepByStepGuide
            title={pageData.cabinLocationGuide.title}
            subtitle={pageData.cabinLocationGuide.subtitle}
            steps={cabinLocationSteps}
            layout="grid"
            columns={2}
          />
        </div>

        {/* ─── 16. COST FACTORS & SUITE VALUE ANALYSIS (CostAndInclusionsPanel) ─── */}
        <div id="cost-value" className="bg-slate-50 border-b border-slate-200">
          <CostAndInclusionsPanel
            title={pageData.costAndValue.title}
            subtitle={pageData.costAndValue.subtitle}
            items={costPanels}
          />
        </div>

        {/* ─── 17. COMMON MISTAKES TO AVOID (MistakesGrid) ─── */}
        <div id="mistakes" className="border-b border-slate-200">
          <MistakesGrid data={pageData.commonMistakes} />
        </div>

        {/* ─── 18. COMPETITOR ACCOMMODATION BENCHMARKS (CruiseLinesComparison) ─── */}
        <div id="competitor-comparison" className="bg-white border-b border-slate-200">
          <CruiseLinesComparison
            title={pageData.competitorComparison.title}
            subtitle={pageData.competitorComparison.subtitle}
            items={competitorLines}
          />
        </div>

        {/* ─── 19. EXPERT CREDENTIALS (ExpertCredentials) ─── */}
        <div id="expert-advice">
          <ExpertCredentials
            badge={pageData.expertAdvice.expert.badge}
            authorityBoxTitle={pageData.expertAdvice.expert.authorityBoxTitle}
            authoritySubtitle={pageData.expertAdvice.expert.authoritySubtitle}
            name={pageData.expertAdvice.expert.name}
            title={pageData.expertAdvice.expert.title}
            experienceBadge={pageData.expertAdvice.expert.experienceBadge}
            bio={pageData.expertAdvice.expert.bio}
            quote={pageData.expertAdvice.expert.quote}
            quoteSubtitle={pageData.expertAdvice.expert.quoteSubtitle}
            credentials={pageData.expertAdvice.expert.credentials}
            image={AboutAngelaImg}
            ctaText={pageData.expertAdvice.expert.ctaText}
            ctaLink={pageData.expertAdvice.expert.ctaLink}
          />
        </div>

        {/* ─── 20. FREQUENTLY ASKED QUESTIONS (FAQAccordion - 20 FAQs) ─── */}
        <div id="faqs" className="bg-white border-t border-slate-200">
          <FAQAccordion data={faqData} />
        </div>

        {/* ─── 21. CENTER CTA (CenterCTA) ─── */}
        <CenterCTA
          badge="OCEANIA STATEROOMS & SUITES EXPERT BOOKING"
          title="Ready to Select the Perfect Oceania Stateroom or Suite?"
          description="Speak directly with Angela Hughes to compare live cabin availability, unobstructed deck locations, and exclusive VIP amenities across Oceania's fleet."
          primaryCtaText="Contact Angela Hughes"
          primaryCtaLink="/contact"
          secondaryCtaText="Explore Oceania Ship Classes"
          secondaryCtaLink="/oceania-cruises/ship-classes"
        />


      </div>
    </>
  );
};

export default OceaniaStateroomsAndSuites;

